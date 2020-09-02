const path = require('path');
const { addWebpackAlias } = require('customize-cra'); // eslint-disable-line

module.exports = function override(config) {
  return addWebpackAlias({
      '@': path.resolve(__dirname, 'src'),
      '@modules': path.resolve(__dirname, 'src', 'modules'),
      '@base': path.resolve(__dirname, 'src', 'base'),
      '@images': path.resolve(__dirname, 'src', 'assets/images'),
      '@icons': path.resolve(__dirname, 'src', 'assets/icons'),
      '@fonts': path.resolve(__dirname, 'src', 'assets/fonts'),
      '@utils': path.resolve(__dirname, 'src', 'utils'),
      '@styles': path.resolve(__dirname, 'src', 'styles')
    })(config);
};
