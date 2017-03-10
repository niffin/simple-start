const env               = process.env.NODE_ENV || 'development',
      config            = require('../config/default'),
      webpack           = require('webpack'),
      WebpackDevServer  = require('webpack-dev-server'),
      webpackConfig     = require('../config/webpack.config'),
      devServerConfig   = {
        hot                : true,
        noInfo             : true,
        historyApiFallback : true
      },
      compiler          = webpack(webpackConfig),
      { devServerPort } = config.webpack[env];

new WebpackDevServer(compiler, devServerConfig)
      .listen(devServerPort, '0.0.0.0', function (err) {
        if (err) throw err;

        console.log('webpack devserver running on port ' + devServerPort); // eslint-disable-line no-console
      });
