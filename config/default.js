const isDevelopment = process.env.NODE_ENV === 'development',
      buildNumber   = process.env.npm_config_build,

      /**
       * Webpack related variables
       */
      devServerPort  = 3001,
      publicPath     = isDevelopment  ? `http://localhost:${ devServerPort }/`   : './dist/',
      bundleFileName = buildNumber    ? `bundle.build=${     buildNumber   }.js` : 'bundle.js',
      bundle         = (isDevelopment ? `http://localhost:${ devServerPort }/`   : 'dist/') + bundleFileName,
      entry          = ['babel-polyfill', './index.js'],
      devEntry       = [
        'webpack-dev-server/client?http://localhost:' + devServerPort,
        'webpack/hot/only-dev-server'
      ].concat(entry);

module.exports = {
  server : {
    port : 3000
  },
  webpack : {
    bundle,
    publicPath,
    devServerPort,
    bundleFileName,
    entry : isDevelopment ? devEntry : entry
  }
};
