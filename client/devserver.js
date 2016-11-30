const config            = require('../config/default'),
      webpack           = require('webpack'),
      WebpackDevServer  = require('webpack-dev-server'),
      webpackConfig     = require('./webpack.config.js'),
      devServerConfig   = {
        hot    : true,
        noInfo : true
      },
      compiler          = webpack(webpackConfig),
      { devServerPort } = config.webpack;

new WebpackDevServer(compiler, devServerConfig)
      .listen(devServerPort, '0.0.0.0', function (err) {
        if (err) throw err;

        console.log('webpack devserver running on port ' + devServerPort); // eslint-disable-line no-console
      });
