// Minimal babel config for coverage instrumentation
// Only adds istanbul plugin when running with nyc
module.exports = {
  presets: ['next/babel'],
  // NYC will automatically add istanbul plugin when needed
}
