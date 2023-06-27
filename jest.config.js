module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFiles: ['./jest.setup.js'],
  transform:{
    '^.+\\.svg$': 'jest-svg-transformer',
  }
}