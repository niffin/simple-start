const path        = require('path'),
      buildNumber = process.env.npm_config_build,

      /**
       * Webpack related variables
       */
      devServerPort  = 3001,
      bundleFileName = buildNumber ? `bundle.build=${ buildNumber }.js` : 'bundle.js',
      entryFile      = '../client/index.js';

module.exports = {
  server : {
    port : 3000
  },
  webpack : {
    development : {
      path       : path.join(__dirname, '../client/dist/'),
      bundle     : `http://localhost:${ devServerPort }/${ bundleFileName }`,
      devtool    : 'source-map',
      devServerPort,
      bundleFileName,
      publicPath : `http://localhost:${ devServerPort }/`,
      entry      : [
        'webpack-dev-server/client?http://localhost:' + devServerPort,
        'webpack/hot/only-dev-server',
        'babel-polyfill',
        entryFile
      ],
    },
    production : {
      path    : path.join(__dirname, '../client/dist/'),
      bundle  : 'dist/' + bundleFileName,
      devtool : false,
      devServerPort,
      bundleFileName,
      publicPath : './dist/',
      entry : [
        'babel-polyfill',
        entryFile
      ]

    }
  }
};
