#!/usr/bin/env ts-node

import { execSync } from 'child_process'
import prompts from 'prompts'
import chalk from 'chalk'

interface RollbackConfig {
  environment: 'staging' | 'production'
  deploymentId?: string
  version?: string
  skipHealthCheck: boolean
}

// Get recent deployments from Vercel
function getRecentDeployments(environment: string): any[] {
  try {
    const output = execSync('vercel list --json', { encoding: 'utf-8' })
    const deployments = JSON.parse(output)

    return deployments.filter((d: any) => d.target === environment).slice(0, 10) // Last 10 deployments
  } catch (_error) {
    console.error(chalk.red('Failed to fetch deployments'))
    return []
  }
}

// Execute rollback
async function executeRollback(config: RollbackConfig): Promise<void> {
  console.info(chalk.cyan('\n⏮️  Initiating rollback...\n'))

  try {
    if (config.deploymentId) {
      // Rollback to specific deployment
      execSync(
        `vercel alias set ${config.deploymentId} ${config.environment}.notable.com --yes`,
        {
          stdio: 'inherit',
        }
      )
    } else if (config.version) {
      // Find deployment by version and rollback
      const deployments = getRecentDeployments(config.environment)
      const deployment = deployments.find(
        (d) =>
          d.meta?.version === config.version ||
          d.meta?.commit?.message?.includes(config.version)
      )

      if (!deployment) {
        throw new Error(`Deployment with version ${config.version} not found`)
      }

      execSync(
        `vercel alias set ${deployment.url} ${config.environment}.notable.com --yes`,
        {
          stdio: 'inherit',
        }
      )
    }

    console.info(chalk.green('\n✅ Rollback completed successfully!\n'))
  } catch (error) {
    console.error(chalk.red('\n❌ Rollback failed!\n'))
    throw error
  }
}

// Health check after rollback
async function runHealthCheck(environment: string): Promise<boolean> {
  console.info(chalk.cyan('\n🏥 Running health check...\n'))

  const healthCheckUrl =
    environment === 'production'
      ? process.env.NEXT_PUBLIC_APP_URL
      : `https://${environment}-notable.vercel.app`

  try {
    execSync(`curl -f ${healthCheckUrl}/api/health`, { stdio: 'inherit' })
    console.info(chalk.green('✅ Health check passed!'))
    return true
  } catch {
    console.info(chalk.red('❌ Health check failed!'))
    return false
  }
}

// Create rollback notification
function notifyRollback(config: RollbackConfig, success: boolean): void {
  const status = success ? '✅ Success' : '❌ Failed'
  const message = `
Rollback ${status}
Environment: ${config.environment}
${config.deploymentId ? `Deployment ID: ${config.deploymentId}` : ''}
${config.version ? `Version: ${config.version}` : ''}
Time: ${new Date().toISOString()}
  `

  console.info(chalk.cyan('\n📢 Rollback notification:\n'))
  console.info(message)

  // In production, send to Slack/email
  if (config.environment === 'production') {
    // Send notification
  }
}

// Main rollback flow
async function rollback(): Promise<void> {
  console.info(chalk.bold.cyan('\n⏮️  Notable Rollback Tool\n'))

  // Get environment
  const { environment } = await prompts({
    type: 'select',
    name: 'environment',
    message: 'Select environment to rollback',
    choices: [
      { title: 'Staging', value: 'staging' },
      { title: 'Production', value: 'production' },
    ],
  })

  // Get recent deployments
  const deployments = getRecentDeployments(environment)

  if (deployments.length === 0) {
    console.info(chalk.red('No recent deployments found'))
    return
  }

  // Select rollback method
  const { method } = await prompts({
    type: 'select',
    name: 'method',
    message: 'How would you like to rollback?',
    choices: [
      { title: 'Select from recent deployments', value: 'recent' },
      { title: 'Enter deployment ID', value: 'id' },
      { title: 'Enter version', value: 'version' },
    ],
  })

  const config: RollbackConfig = {
    environment,
    skipHealthCheck: false,
  }

  switch (method) {
    case 'recent': {
      const { deployment } = await prompts({
        type: 'select',
        name: 'deployment',
        message: 'Select deployment to rollback to',
        choices: deployments.map((d) => ({
          title: `${d.url} - ${new Date(d.created).toLocaleString()} ${d.meta?.commit?.message || ''}`,
          value: d.url,
        })),
      })
      config.deploymentId = deployment
      break
    }

    case 'id': {
      const { deploymentId } = await prompts({
        type: 'text',
        name: 'deploymentId',
        message: 'Enter deployment ID or URL',
      })
      config.deploymentId = deploymentId
      break
    }

    case 'version': {
      const { version } = await prompts({
        type: 'text',
        name: 'version',
        message: 'Enter version (e.g., v1.2.3)',
      })
      config.version = version
      break
    }
  }

  // Confirm rollback
  const { confirm } = await prompts({
    type: 'confirm',
    name: 'confirm',
    message: `Are you sure you want to rollback ${environment}?`,
    initial: false,
  })

  if (!confirm) {
    console.info(chalk.yellow('\n⚠️  Rollback cancelled\n'))
    return
  }

  // Skip health check option
  const { skipHealthCheck } = await prompts({
    type: 'confirm',
    name: 'skipHealthCheck',
    message: 'Skip health check after rollback?',
    initial: false,
  })
  config.skipHealthCheck = skipHealthCheck

  try {
    // Execute rollback
    await executeRollback(config)

    // Health check
    let healthCheckPassed = true
    if (!config.skipHealthCheck) {
      healthCheckPassed = await runHealthCheck(environment)
    }

    // Notify
    notifyRollback(config, healthCheckPassed)

    if (!healthCheckPassed && !config.skipHealthCheck) {
      console.info(
        chalk.yellow(
          '\n⚠️  Rollback completed but health check failed. Please investigate.\n'
        )
      )
    }
  } catch (error) {
    notifyRollback(config, false)
    console.error(error)
    process.exit(1)
  }
}

// Run rollback
rollback().catch((error) => {
  console.error(chalk.red('\n❌ Rollback process failed!\n'))
  console.error(error)
  process.exit(1)
})
