module.exports = {
  ...require('eslint-config-custom/jest-next'),
  rootDir: '.',
  moduleNameMapper: {
    '\\.module\\.css$': 'identity-obj-proxy',
  },
};
