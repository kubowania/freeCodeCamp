module.exports = {
  testPathIgnorePatterns: ['/node_modules/'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|svg|woff|woff2)$':
      '<rootDir>/client/src/__mocks__/fileMock.js',
    // Plain CSS - match css files that don't end with
    // '.module.css' https://regex101.com/r/VzwrKH/4
    '^(?!.*\\.module\\.css$).*\\.css$':
      '<rootDir>/client/src/__mocks__/styleMock.js',
    // CSS Modules - match files that end with 'module.css'
    '\\.module\\.css$': 'identity-obj-proxy',
    'react-i18next': '<rootDir>/client/src/__mocks__/react-i18nextMock.js',
    '^lodash-es$': 'lodash'
  },
  globals: {
    __PATH_PREFIX__: ''
  },
  verbose: true,
  transform: {
    '^.+\\.[jt]sx?$': '<rootDir>/jest.transform.js'
  },
  roots: ['.', './client', './api-server'],
  transformIgnorePatterns: ['node_modules/(?!(gatsby)/)'],
  setupFilesAfterEnv: ['./jest.setup.js']
};
