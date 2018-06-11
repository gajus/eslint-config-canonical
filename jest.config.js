/* eslint-disable no-process-env, id-match */
const isCI = Boolean(process.env.CI);
const watchMode =
  process.argv.indexOf('--watchAll') !== -1 ||
  process.argv.indexOf('--watch') !== -1;
const forceCoverage = process.argv.indexOf('--coverage') !== -1;

module.exports = {
  clearMocks: true,
  cacheDirectory: './node_modules/.cache/jest',
  collectCoverage: isCI || forceCoverage || !watchMode,
  collectCoverageFrom: ['*.js'],
  coveragePathIgnorePatterns: [
    'jest.config.js'
  ],
  coverageReporters: ['json', 'cobertura', 'text', 'html', 'lcov'],
  coverageDirectory: './coverage',
  coverageThreshold: {
    global: {
      lines: 100,
      branches: 100,
      statements: 100
    }
  },
  setupTestFrameworkScriptFile: './jest/setup.js',
  transform: {
    "^.+\\.js$": "./jest/preprocessor"
  },
  transformIgnorePatterns: [],
  verbose: true
};
