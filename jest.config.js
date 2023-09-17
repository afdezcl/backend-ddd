module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/*.test.ts'],
  transform: {
    'node_modules/variables/.+\\.(j|t)sx?$': 'ts-jest'
  },
  transformIgnorePatterns: [
    'node_modules/(?!variables/.*)'
  ]
}
