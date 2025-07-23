#!/usr/bin/env ts-node

import { runAllBenchmarks as runNoteBenchmarks } from '../tests/performance/note-operations.benchmark'
import { runComponentBenchmarks } from '../tests/performance/component-render.benchmark'
import { PerformanceMonitor } from '../lib/performance'
import { memoryMonitor } from '../lib/memory-monitor'
import * as fs from 'fs/promises'
import * as path from 'path'

interface PerformanceReport {
  timestamp: string
  environment: {
    nodeVersion: string
    platform: string
    cpus: number
    memory: {
      total: number
      free: number
    }
  }
  benchmarks: {
    noteOperations?: any
    componentRendering?: any
    webVitals?: any
    memoryProfile?: any
  }
  recommendations: string[]
}

async function generatePerformanceReport(): Promise<PerformanceReport> {
  console.log('🚀 Starting Notable Performance Analysis...\n')

  const report: PerformanceReport = {
    timestamp: new Date().toISOString(),
    environment: {
      nodeVersion: process.version,
      platform: process.platform,
      cpus: require('os').cpus().length,
      memory: {
        total: require('os').totalmem() / 1024 / 1024 / 1024, // GB
        free: require('os').freemem() / 1024 / 1024 / 1024, // GB
      },
    },
    benchmarks: {},
    recommendations: [],
  }

  // Start memory monitoring
  memoryMonitor.startMonitoring(5000)

  try {
    // 1. Run database operation benchmarks
    if (
      process.env.NEXT_PUBLIC_SUPABASE_URL &&
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    ) {
      console.log('📊 Running database operation benchmarks...\n')
      report.benchmarks.noteOperations = await runNoteBenchmarks(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
      )
    } else {
      console.log(
        '⚠️  Skipping database benchmarks (Supabase credentials not found)\n'
      )
    }

    // 2. Run component rendering benchmarks
    console.log('🎨 Running component rendering benchmarks...\n')
    report.benchmarks.componentRendering = await runComponentBenchmarks()

    // 3. Collect memory profile
    console.log('💾 Analyzing memory usage...\n')
    const memoryReport = memoryMonitor.getMemoryReport()
    report.benchmarks.memoryProfile = memoryReport

    // 4. Generate recommendations based on results
    report.recommendations = generateRecommendations(report)
  } catch (error) {
    console.error('❌ Error during benchmarking:', error)
    throw error
  } finally {
    // Stop memory monitoring
    memoryMonitor.stopMonitoring()
  }

  return report
}

function generateRecommendations(report: PerformanceReport): string[] {
  const recommendations: string[] = []

  // Analyze note operations
  if (report.benchmarks.noteOperations) {
    const noteOps = report.benchmarks.noteOperations

    // Check single note creation performance
    const createSingle = noteOps.find(
      (op: any) => op.name === 'Create Single Note'
    )
    if (createSingle && createSingle.averageTime > 100) {
      recommendations.push(
        `Consider optimizing single note creation (current: ${createSingle.averageTime.toFixed(2)}ms avg). Target: <100ms`
      )
    }

    // Check search performance
    const search = noteOps.find((op: any) =>
      op.name.includes('Full-text Search')
    )
    if (search && search.averageTime > 200) {
      recommendations.push(
        `Full-text search is slow (${search.averageTime.toFixed(2)}ms). Consider adding search indexes or using dedicated search service.`
      )
    }

    // Check large note handling
    const largeNote = noteOps.find((op: any) => op.name.includes('Large Note'))
    if (largeNote && largeNote.averageTime > 500) {
      recommendations.push(
        `Large note operations are slow (${largeNote.averageTime.toFixed(2)}ms). Consider chunking or streaming for large content.`
      )
    }
  }

  // Analyze component rendering
  if (report.benchmarks.componentRendering?.rendering) {
    const rendering = report.benchmarks.componentRendering.rendering

    // Check virtualized list performance
    const largeList = rendering.find((r: any) => r.name.includes('5000 notes'))
    if (largeList && largeList.averageTime > 50) {
      recommendations.push(
        `Large list rendering needs optimization (${largeList.averageTime.toFixed(2)}ms for 5000 items).`
      )
    }

    // Check editor initialization
    const editorInit = rendering.find((r: any) =>
      r.name.includes('Initialize Plate Editor')
    )
    if (editorInit && editorInit.averageTime > 100) {
      recommendations.push(
        `Editor initialization is slow (${editorInit.averageTime.toFixed(2)}ms). Consider lazy loading editor plugins.`
      )
    }
  }

  // Analyze memory usage
  if (report.benchmarks.memoryProfile?.leakDetection) {
    const leakDetection = report.benchmarks.memoryProfile.leakDetection

    if (leakDetection.hasLeak) {
      recommendations.push('⚠️  Potential memory leaks detected:')
      leakDetection.suspects.forEach((suspect: string) => {
        recommendations.push(`  - ${suspect}`)
      })
      leakDetection.recommendations.forEach((rec: string) => {
        recommendations.push(`  💡 ${rec}`)
      })
    }

    if (leakDetection.leakRate && leakDetection.leakRate > 1) {
      recommendations.push(
        `High memory growth rate detected: ${leakDetection.leakRate.toFixed(2)} MB/min`
      )
    }
  }

  // General recommendations
  if (report.environment.memory.free < 2) {
    recommendations.push(
      '⚠️  Low system memory available. This may affect benchmark accuracy.'
    )
  }

  if (recommendations.length === 0) {
    recommendations.push(
      '✅ All performance metrics are within acceptable ranges!'
    )
  }

  return recommendations
}

async function saveReport(report: PerformanceReport) {
  // Create reports directory if it doesn't exist
  const reportsDir = path.join(process.cwd(), 'performance-reports')
  await fs.mkdir(reportsDir, { recursive: true })

  // Save detailed JSON report
  const timestamp = report.timestamp.replace(/[:.]/g, '-')
  const jsonPath = path.join(reportsDir, `performance-report-${timestamp}.json`)
  await fs.writeFile(jsonPath, JSON.stringify(report, null, 2))

  // Generate HTML report
  const htmlReport = generateHTMLReport(report)
  const htmlPath = path.join(reportsDir, `performance-report-${timestamp}.html`)
  await fs.writeFile(htmlPath, htmlReport)

  console.log(`\n📄 Reports saved:`)
  console.log(`   - JSON: ${jsonPath}`)
  console.log(`   - HTML: ${htmlPath}`)
}

function generateHTMLReport(report: PerformanceReport): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Notable Performance Report - ${new Date(report.timestamp).toLocaleString()}</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
            background: #f5f5f5;
        }
        .header {
            background: #1a1a1a;
            color: white;
            padding: 30px;
            border-radius: 8px;
            margin-bottom: 30px;
        }
        .section {
            background: white;
            padding: 25px;
            margin-bottom: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .metric {
            display: inline-block;
            padding: 10px 20px;
            margin: 5px;
            background: #f0f0f0;
            border-radius: 4px;
        }
        .good { color: #22c55e; }
        .warning { color: #f59e0b; }
        .bad { color: #ef4444; }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 15px;
        }
        th, td {
            padding: 12px;
            text-align: left;
            border-bottom: 1px solid #ddd;
        }
        th {
            background: #f8f8f8;
            font-weight: 600;
        }
        .recommendation {
            padding: 15px;
            margin: 10px 0;
            background: #fef3c7;
            border-left: 4px solid #f59e0b;
            border-radius: 4px;
        }
        .chart {
            margin: 20px 0;
            height: 300px;
            background: #f8f8f8;
            border-radius: 4px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #999;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>Notable Performance Report</h1>
        <p>Generated: ${new Date(report.timestamp).toLocaleString()}</p>
        <div>
            <span class="metric">Node: ${report.environment.nodeVersion}</span>
            <span class="metric">Platform: ${report.environment.platform}</span>
            <span class="metric">CPUs: ${report.environment.cpus}</span>
            <span class="metric">Memory: ${report.environment.memory.free.toFixed(1)}/${report.environment.memory.total.toFixed(1)} GB</span>
        </div>
    </div>

    ${
      report.benchmarks.noteOperations
        ? `
    <div class="section">
        <h2>Database Operations Performance</h2>
        <table>
            <thead>
                <tr>
                    <th>Operation</th>
                    <th>Avg Time (ms)</th>
                    <th>Min/Max (ms)</th>
                    <th>Throughput (ops/sec)</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                ${report.benchmarks.noteOperations
                  .map(
                    (op: any) => `
                <tr>
                    <td>${op.name}</td>
                    <td>${op.averageTime.toFixed(2)}</td>
                    <td>${op.minTime.toFixed(2)} / ${op.maxTime.toFixed(2)}</td>
                    <td>${op.throughput.toFixed(0)}</td>
                    <td class="${getPerformanceClass(op)}">
                        ${getPerformanceStatus(op)}
                    </td>
                </tr>
                `
                  )
                  .join('')}
            </tbody>
        </table>
    </div>
    `
        : ''
    }

    ${
      report.benchmarks.componentRendering
        ? `
    <div class="section">
        <h2>Component Rendering Performance</h2>
        <table>
            <thead>
                <tr>
                    <th>Component</th>
                    <th>Avg Time (ms)</th>
                    <th>Memory (MB)</th>
                    <th>Iterations</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                ${report.benchmarks.componentRendering.rendering
                  ?.map(
                    (r: any) => `
                <tr>
                    <td>${r.name}</td>
                    <td>${r.averageTime.toFixed(2)}</td>
                    <td>${r.memoryUsed ? r.memoryUsed.toFixed(2) : 'N/A'}</td>
                    <td>${r.iterations}</td>
                    <td class="${getComponentPerformanceClass(r)}">
                        ${getComponentPerformanceStatus(r)}
                    </td>
                </tr>
                `
                  )
                  .join('')}
            </tbody>
        </table>
    </div>
    `
        : ''
    }

    ${
      report.benchmarks.memoryProfile
        ? `
    <div class="section">
        <h2>Memory Analysis</h2>
        <div class="metric">Heap Used: ${report.benchmarks.memoryProfile.current.heapUsedMB.toFixed(2)} MB</div>
        <div class="metric">Heap Total: ${report.benchmarks.memoryProfile.current.heapTotalMB.toFixed(2)} MB</div>
        <div class="metric">Active Components: ${report.benchmarks.memoryProfile.activeComponents.length}</div>
        ${
          report.benchmarks.memoryProfile.leakDetection.hasLeak
            ? `
        <div class="recommendation">
            <strong>⚠️ Potential Memory Leaks Detected</strong>
            <ul>
                ${report.benchmarks.memoryProfile.leakDetection.suspects
                  .map((s: string) => `<li>${s}</li>`)
                  .join('')}
            </ul>
        </div>
        `
            : '<p class="good">✅ No memory leaks detected</p>'
        }
    </div>
    `
        : ''
    }

    <div class="section">
        <h2>Recommendations</h2>
        ${report.recommendations
          .map((rec) => `<div class="recommendation">${rec}</div>`)
          .join('')}
    </div>

    <div class="section">
        <h2>Performance Trends</h2>
        <div class="chart">
            <p>Chart visualization would go here</p>
        </div>
    </div>
</body>
</html>`
}

function getPerformanceClass(op: any): string {
  if (op.name.includes('Single') && op.averageTime < 50) return 'good'
  if (op.name.includes('Batch') && op.averageTime < 200) return 'good'
  if (op.averageTime > 500) return 'bad'
  return 'warning'
}

function getPerformanceStatus(op: any): string {
  const cls = getPerformanceClass(op)
  if (cls === 'good') return '✅ Good'
  if (cls === 'bad') return '❌ Needs Optimization'
  return '⚠️ Acceptable'
}

function getComponentPerformanceClass(r: any): string {
  if (r.averageTime < 50) return 'good'
  if (r.averageTime > 200) return 'bad'
  return 'warning'
}

function getComponentPerformanceStatus(r: any): string {
  const cls = getComponentPerformanceClass(r)
  if (cls === 'good') return '✅ Fast'
  if (cls === 'bad') return '❌ Slow'
  return '⚠️ Moderate'
}

// Main execution
async function main() {
  try {
    const report = await generatePerformanceReport()

    console.log('\n\n🎉 Performance Analysis Complete!\n')
    console.log('📊 Summary:')
    console.log('─'.repeat(50))

    report.recommendations.forEach((rec) => {
      console.log(`  ${rec}`)
    })

    await saveReport(report)

    process.exit(0)
  } catch (error) {
    console.error('❌ Fatal error:', error)
    process.exit(1)
  }
}

// Run if executed directly
if (require.main === module) {
  main()
}

export { generatePerformanceReport, PerformanceReport }
