#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const buildDir = path.join(__dirname, '..', 'build');
const packagesDir = path.join(buildDir, 'packages', 'electron');

// Clean build directory
console.log('Cleaning build directory...');
if (fs.existsSync(buildDir)) {
  fs.rmSync(buildDir, { recursive: true, force: true });
}

// Create build directory
console.log('Creating build directory...');
fs.mkdirSync(buildDir, { recursive: true });

// Run TypeScript compilation
console.log('TypeScript compilation starting...');
try {
  execSync('tsc', { stdio: 'inherit' });
  console.log('TypeScript compilation done.');
} catch (error) {
  console.error('TypeScript compilation failed:', error.message);
  process.exit(1);
}

// Move files from build/packages/electron/* to build/
console.log('Moving files...');
if (fs.existsSync(packagesDir)) {
  const files = fs.readdirSync(packagesDir);
  files.forEach(file => {
    const src = path.join(packagesDir, file);
    const dest = path.join(buildDir, file);
    fs.renameSync(src, dest);
  });
  
  // Remove empty packages directory
  fs.rmSync(path.join(buildDir, 'packages'), { recursive: true, force: true });
}

// List build directory contents
console.log('Build directory contents:');
const buildContents = fs.readdirSync(buildDir);
buildContents.forEach(item => {
  const stats = fs.statSync(path.join(buildDir, item));
  console.log(`  ${stats.isDirectory() ? '[DIR] ' : '[FILE]'} ${item}`);
});

// Check for main.js
console.log('Checking for main.js:');
const mainJsPath = path.join(buildDir, 'main.js');
if (fs.existsSync(mainJsPath)) {
  console.log('main.js found!');
} else {
  console.error('main.js NOT found!');
  process.exit(1);
}