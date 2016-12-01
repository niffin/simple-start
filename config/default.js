const isDevelopment  = process.env.NODE_ENV === 'development',
      buildNumber    = process.env.npm_config_build,

      /**
       * Webpack related variables
       */
      devServerPort  = 3001,
      publicPath     = isDevelopment  ? `http://localhost:${ devServerPort }/`   : './dist/',
      bundleFileName = buildNumber    ? `bundle.build=${     buildNumber   }.js` : 'bundle.js',
      bundle         = (isDevelopment ? `http://localhost:${ devServerPort }/`   : 'dist/') + bundleFileName,
      devEntry       = [
        'webpack-dev-server/client?http://localhost:' + devServerPort,
        'webpack/hot/only-dev-server',
        'babel-polyfill'
      ];

module.exports = {
  server : {
    port : 3000
  },
  webpack : {
    bundle,
    devEntry,
    publicPath,
    devServerPort,
    bundleFileName
  }
};
