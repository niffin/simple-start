const webpack = require('webpack'),
      config  = require('./default'),
      env     = process.env.NODE_ENV || 'development';

const {
  path,
  bundleFileName,
  publicPath,
  entry,
  devtool
} = config.webpack[env];

module.exports = {
  entry,
  devtool,
  context : __dirname,
  output  : {
    path,
    publicPath,
    filename : bundleFileName
  },
  module: {
    loaders: [
      {
        test    : /\.js$/,
        exclude : /node_modules/,
        loader  : 'babel'
      }
    ],
    postLoaders: [
      {
        test    : /\.js$/,
        exclude : /node_modules/,
        loader  : 'react-hot'
      }
    ]
  },
  plugins: env === 'development'               ?
  [ new webpack.HotModuleReplacementPlugin() ] :
  [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress : {
        warnings : false
      }
    })
  ]
};
