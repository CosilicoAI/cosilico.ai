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
    configure: (jestConfig) => {
      // Add vanilla-extract transform before the default TypeScript transform
      jestConfig.transform = {
        '\\.css\\.ts$': '@vanilla-extract/jest-transform',
        ...jestConfig.transform,
      };
      return jestConfig;
    },
  },
};
