module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  globals: {},
  testEnvironment: 'jest-environment-jsdom-sixteen',//'jsdom',
  transform: {
    '^.+\\.vue$': 'vue-jest',
    "^.+\\js$": "babel-jest"
  },
  transformIgnorePatterns: [
    'node_modules/(?!(ant-design-vue|@ant-design|vue-types|lodash-es|echarts|zrender)/)',
  ],
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts']
}
