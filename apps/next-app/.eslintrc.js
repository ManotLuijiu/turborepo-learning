module.exports = {
  ...require('eslint-config-custom/eslint-next'),
  parserOptions: {
    root: true,
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  settings: {
    jest: {
      version: require('jest/package.json').version,
    },
  },
};
