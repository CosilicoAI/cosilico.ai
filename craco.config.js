const { VanillaExtractPlugin } = require('@vanilla-extract/webpack-plugin');

module.exports = {
  webpack: {
    plugins: {
      add: [new VanillaExtractPlugin()],
    },
    configure: (webpackConfig) => {
      // Remove ModuleScopePlugin which blocks Vanilla Extract's extracted.js
      webpackConfig.resolve.plugins = webpackConfig.resolve.plugins.filter(
        (plugin) => plugin.constructor.name !== 'ModuleScopePlugin'
      );
      return webpackConfig;
    },
  },
  jest: {
    configure: {
      moduleNameMapper: {
        '^@vanilla-extract/css$': '<rootDir>/__mocks__/@vanilla-extract/css.js',
        '\\.css\\.ts$': '<rootDir>/src/__mocks__/vanillaExtractMock.js',
      },
    },
  },
};
