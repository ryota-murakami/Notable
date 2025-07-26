#!/usr/bin/env node

const { spawn } = require('child_process');
const path = require('path');
const net = require('net');

// Configuration
const WEB_DEV_PORT = 4378;
const WEB_PACKAGE_PATH = path.join(__dirname, '../../web');
const MAX_RETRIES = 30; // 30 seconds
const RETRY_INTERVAL = 1000; // 1 second

console.log('🚀 Starting Notable development environment...');

/**
 * Check if a port is available
 */
function checkPort(port) {
  return new Promise((resolve) => {
    const server = net.createServer();
    
    server.listen(port, () => {
      server.once('close', () => {
        resolve(false); // Port is available
      });
      server.close();
    });
    
    server.on('error', () => {
      resolve(true); // Port is in use
    });
  });
}

/**
 * Wait for the dev server to be ready
 */
async function waitForDevServer(retries = MAX_RETRIES) {
  console.log(`⏳ Waiting for Next.js dev server on port ${WEB_DEV_PORT}...`);
  
  for (let i = 0; i < retries; i++) {
    const isPortInUse = await checkPort(WEB_DEV_PORT);
    
    if (isPortInUse) {
      // Additional check: try to make an HTTP request
      try {
        const http = require('http');
        await new Promise((resolve, reject) => {
          const req = http.get(`http://localhost:${WEB_DEV_PORT}`, (res) => {
            resolve();
          });
          req.on('error', reject);
          req.setTimeout(1000, () => {
            req.destroy();
            reject(new Error('Timeout'));
          });
        });
        
        console.log('✅ Next.js dev server is ready!');
        return true;
      } catch (error) {
        // Server is running but not ready yet
      }
    }
    
    if (i < retries - 1) {
      await new Promise(resolve => setTimeout(resolve, RETRY_INTERVAL));
      process.stdout.write('.');
    }
  }
  
  console.log('');
  console.warn('⚠️  Dev server not detected, but continuing anyway...');
  return false;
}

/**
 * Start the Next.js dev server
 */
function startDevServer() {
  console.log('📦 Starting Next.js dev server...');
  
  const devServer = spawn('pnpm', ['dev', '--port', WEB_DEV_PORT.toString()], {
    cwd: WEB_PACKAGE_PATH,
    stdio: ['inherit', 'pipe', 'pipe'],
    shell: true,
  });

  devServer.stdout.on('data', (data) => {
    const output = data.toString();
    process.stdout.write(`[Next.js] ${output}`);
  });

  devServer.stderr.on('data', (data) => {
    const output = data.toString();
    process.stderr.write(`[Next.js] ${output}`);
  });

  devServer.on('error', (error) => {
    console.error('❌ Failed to start Next.js dev server:', error);
    process.exit(1);
  });

  return devServer;
}

/**
 * Start the Electron app
 */
function startElectronApp() {
  console.log('⚡ Starting Electron app...');
  
  const electronApp = spawn('electron', ['.'], {
    cwd: __dirname + '/..',
    stdio: 'inherit',
    shell: true,
    env: {
      ...process.env,
      ELECTRON_START_URL: `http://localhost:${WEB_DEV_PORT}`,
    },
  });

  electronApp.on('error', (error) => {
    console.error('❌ Failed to start Electron app:', error);
    process.exit(1);
  });

  return electronApp;
}

/**
 * Main execution
 */
async function main() {
  let devServer = null;
  let electronApp = null;
  
  // Handle cleanup on exit
  const cleanup = () => {
    console.log('\n🧹 Cleaning up processes...');
    
    if (electronApp) {
      electronApp.kill();
    }
    
    if (devServer) {
      devServer.kill();
    }
    
    process.exit(0);
  };
  
  process.on('SIGINT', cleanup);
  process.on('SIGTERM', cleanup);
  process.on('exit', cleanup);

  try {
    // Check if dev server is already running
    const isDevServerRunning = await checkPort(WEB_DEV_PORT);
    
    if (!isDevServerRunning) {
      // Start the dev server
      devServer = startDevServer();
      
      // Wait for it to be ready
      await waitForDevServer();
    } else {
      console.log('✅ Next.js dev server is already running!');
    }
    
    // Start Electron
    electronApp = startElectronApp();
    
    // Wait for Electron to exit
    electronApp.on('close', (code) => {
      console.log(`\n⚡ Electron app closed with code ${code}`);
      cleanup();
    });
    
  } catch (error) {
    console.error('❌ Error during startup:', error);
    cleanup();
    process.exit(1);
  }
}

// Run the main function
main().catch((error) => {
  console.error('❌ Unexpected error:', error);
  process.exit(1);
});