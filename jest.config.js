module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    // This tells ts-jest to process both .ts/.tsx and .js/.jsx files.
    '^.+\\.[tj]sx?$': ['ts-jest', {
      // You can specify ts-jest options here, but the default is usually fine.
    }],
  },
  // By default, Jest ignores node_modules. This pattern uses a negative lookahead
  // to tell Jest to NOT ignore the 'uuid' module, so it can be transformed.
  transformIgnorePatterns: ['/node_modules/(?!uuid)'],
  // Ignore the performance test file so Jest doesn't try to run it as a unit test.
  testPathIgnorePatterns: ['/node_modules/', '/performance.test.js'],
};
