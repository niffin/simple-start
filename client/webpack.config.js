const webpack            = require('webpack'),
      path               = require('path'),
      config             = require('../config/default'),
      isDevelopment      = process.env.NODE_ENV === 'development';

const { bundleFileName, publicPath, entry } = config.webpack;

module.exports = {
  entry,
  context : __dirname,
  devtool : isDevelopment && 'source-map',
  output  : {
    publicPath,
    path     : path.join(__dirname, './dist/'),
    filename : bundleFileName
  },
  module: {
    loaders: [
      {
        test    : /\.js$/,
        exclude : /node_modules/,
        loaders : ['react-hot', 'babel']
      }
    ]
  },
  plugins: isDevelopment                       ?
  [ new webpack.HotModuleReplacementPlugin() ] :
  [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress : {
        warnings : false
      }
    })
  ]
};
