// Only use babel config when explicitly needed for coverage
export default process.env.INSTRUMENT_COVERAGE === '1'
  ? {
      presets: ['next/babel'],
      plugins: ['istanbul'],
    }
  : {
      presets: ['next/babel'],
    }
