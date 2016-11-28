const webpack          = require('webpack'),
      WebpackDevServer = require('webpack-dev-server'),
      config           = require('./webpack.config.js'),
      compiler         = webpack(config);

new WebpackDevServer(compiler, {
  publicPath         : 'http://localhost:3001/',
  hot                : true,
  historyApiFallback : true
}).listen(3001, '0.0.0.0', function (err) {
  if (err) {
    return console.log(err);
  }

  console.log('Listening at http://localhost:3001/');
});
