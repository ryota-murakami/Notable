#!/usr/bin/env ts-node

import { execSync } from 'child_process'
import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'
import prompts from 'prompts'
import chalk from 'chalk'

// Deployment configuration
interface DeployConfig {
  environment: 'development' | 'staging' | 'production'
  skipTests: boolean
  skipBuild: boolean
  dryRun: boolean
}

// Version utilities
function getCurrentVersion(): string {
  const packageJson = JSON.parse(readFileSync('package.json', 'utf-8'))
  return packageJson.version
}

function bumpVersion(type: 'major' | 'minor' | 'patch'): string {
  const currentVersion = getCurrentVersion()
  const [major, minor, patch] = currentVersion.split('.').map(Number)

  switch (type) {
    case 'major':
      return `${major + 1}.0.0`
    case 'minor':
      return `${major}.${minor + 1}.0`
    case 'patch':
      return `${major}.${minor}.${patch + 1}`
  }
}

// Execute command with output
function exec(command: string, options: { dryRun?: boolean } = {}): void {
  if (options.dryRun) {
    console.log(chalk.yellow(`[DRY RUN] ${command}`))
    return
  }

  console.log(chalk.blue(`Executing: ${command}`))
  execSync(command, { stdio: 'inherit' })
}

// Pre-deployment checks
async function runPreDeploymentChecks(config: DeployConfig): Promise<boolean> {
  console.log(chalk.cyan('\n🔍 Running pre-deployment checks...\n'))

  try {
    // Check for uncommitted changes
    const gitStatus = execSync('git status --porcelain', { encoding: 'utf-8' })
    if (gitStatus.trim()) {
      console.log(chalk.red('❌ Uncommitted changes detected!'))
      console.log(gitStatus)

      const { proceed } = await prompts({
        type: 'confirm',
        name: 'proceed',
        message: 'Continue with uncommitted changes?',
        initial: false,
      })

      if (!proceed) return false
    }

    // Check current branch
    const currentBranch = execSync('git branch --show-current', {
      encoding: 'utf-8',
    }).trim()
    if (config.environment === 'production' && currentBranch !== 'main') {
      console.log(
        chalk.red(
          `❌ Production deployments must be from main branch (current: ${currentBranch})`
        )
      )
      return false
    }

    // Run tests
    if (!config.skipTests) {
      console.log(chalk.cyan('\n🧪 Running tests...\n'))
      exec('pnpm run lint', { dryRun: config.dryRun })
      exec('pnpm run typecheck', { dryRun: config.dryRun })
      exec('pnpm test', { dryRun: config.dryRun })
    }

    // Build application
    if (!config.skipBuild) {
      console.log(chalk.cyan('\n🔨 Building application...\n'))
      exec('pnpm run build', { dryRun: config.dryRun })
    }

    console.log(chalk.green('\n✅ Pre-deployment checks passed!\n'))
    return true
  } catch (error) {
    console.log(chalk.red('\n❌ Pre-deployment checks failed!\n'))
    console.error(error)
    return false
  }
}

// Deploy to Vercel
async function deployToVercel(config: DeployConfig): Promise<void> {
  console.log(chalk.cyan(`\n🚀 Deploying to ${config.environment}...\n`))

  const vercelArgs = ['vercel', '--yes']

  if (config.environment === 'production') {
    vercelArgs.push('--prod')
  } else {
    vercelArgs.push(`--env=${config.environment}`)
  }

  if (config.dryRun) {
    vercelArgs.push('--build-env', 'DRY_RUN=true')
  }

  exec(vercelArgs.join(' '), { dryRun: config.dryRun })
}

// Post-deployment tasks
async function runPostDeploymentTasks(config: DeployConfig): Promise<void> {
  console.log(chalk.cyan('\n📋 Running post-deployment tasks...\n'))

  // Create Sentry release
  if (config.environment === 'production' && !config.dryRun) {
    console.log(chalk.cyan('Creating Sentry release...'))
    const version = getCurrentVersion()
    exec(`sentry-cli releases new ${version}`)
    exec(`sentry-cli releases set-commits ${version} --auto`)
    exec(`sentry-cli releases finalize ${version}`)
  }

  // Run health checks
  console.log(chalk.cyan('\n🏥 Running health checks...\n'))
  const healthCheckUrl =
    config.environment === 'production'
      ? process.env.NEXT_PUBLIC_APP_URL
      : `https://${config.environment}-notable.vercel.app`

  if (!config.dryRun && healthCheckUrl) {
    try {
      exec(`curl -f ${healthCheckUrl}/api/health`)
      console.log(chalk.green('✅ Health check passed!'))
    } catch {
      console.log(chalk.red('❌ Health check failed!'))
    }
  }

  // Notify team
  if (config.environment === 'production' && !config.dryRun) {
    // In a real scenario, send Slack notification or email
    console.log(chalk.cyan('\n📢 Notifying team about deployment...\n'))
  }
}

// Main deployment flow
async function deploy(): Promise<void> {
  console.log(chalk.bold.cyan('\n🚀 Notable Deployment Tool\n'))

  // Get deployment configuration
  const response = await prompts([
    {
      type: 'select',
      name: 'environment',
      message: 'Select deployment environment',
      choices: [
        { title: 'Development', value: 'development' },
        { title: 'Staging', value: 'staging' },
        { title: 'Production', value: 'production' },
      ],
    },
    {
      type: 'confirm',
      name: 'skipTests',
      message: 'Skip tests?',
      initial: false,
    },
    {
      type: 'confirm',
      name: 'skipBuild',
      message: 'Skip build?',
      initial: false,
    },
    {
      type: 'confirm',
      name: 'dryRun',
      message: 'Dry run? (simulate deployment)',
      initial: false,
    },
  ])

  const config: DeployConfig = response as DeployConfig

  // Version bump for production
  if (config.environment === 'production' && !config.dryRun) {
    const { bumpType } = await prompts({
      type: 'select',
      name: 'bumpType',
      message: 'Select version bump type',
      choices: [
        { title: 'Patch (bug fixes)', value: 'patch' },
        { title: 'Minor (new features)', value: 'minor' },
        { title: 'Major (breaking changes)', value: 'major' },
        { title: 'None', value: 'none' },
      ],
    })

    if (bumpType !== 'none') {
      const newVersion = bumpVersion(bumpType as 'major' | 'minor' | 'patch')
      console.log(chalk.cyan(`\n📦 Bumping version to ${newVersion}...\n`))

      // Update package.json
      const packageJson = JSON.parse(readFileSync('package.json', 'utf-8'))
      packageJson.version = newVersion
      writeFileSync('package.json', JSON.stringify(packageJson, null, 2))

      // Commit version bump
      exec(`git add package.json`)
      exec(`git commit -m "chore: bump version to ${newVersion}"`)
      exec(`git tag v${newVersion}`)
    }
  }

  // Run pre-deployment checks
  const checksPass = await runPreDeploymentChecks(config)
  if (!checksPass) {
    console.log(chalk.red('\n❌ Deployment cancelled due to failed checks.\n'))
    process.exit(1)
  }

  // Deploy
  await deployToVercel(config)

  // Post-deployment tasks
  await runPostDeploymentTasks(config)

  console.log(
    chalk.bold.green(
      `\n✅ Deployment to ${config.environment} completed successfully!\n`
    )
  )

  // Push tags for production
  if (config.environment === 'production' && !config.dryRun) {
    const { pushTags } = await prompts({
      type: 'confirm',
      name: 'pushTags',
      message: 'Push version tags to GitHub?',
      initial: true,
    })

    if (pushTags) {
      exec('git push origin main --tags')
    }
  }
}

// Run deployment
deploy().catch((error) => {
  console.error(chalk.red('\n❌ Deployment failed!\n'))
  console.error(error)
  process.exit(1)
})
