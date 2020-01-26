module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts', 'src/**/*.vue'],
  coverageDirectory: 'tests/coverage',
  coverageReporters: ['json', 'text', 'lcov', 'clover', 'text-summary'],
  transformIgnorePatterns: ['/node_modules/'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  snapshotSerializers: ['jest-serializer-vue'],
  testMatch: ['**/*.spec.ts'],
  testURL: 'http://localhost/',
  rootDir: './',
  roots: ['tests/unit', 'src'],
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname']
}
