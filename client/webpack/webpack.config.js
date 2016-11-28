const webpack       = require('webpack'),
      path          = require('path'),
      isDevelopment = process.env.NODE_ENV === 'development',
      devEntry      = [
        'webpack/hot/only-dev-server',
        'webpack-dev-server/client?http://localhost:3001',
        'babel-polyfill',
        path.join(__dirname,'../index.js')
      ];

module.exports = {
  context : __dirname,
  devtool : isDevelopment && 'source-map',
  entry   : isDevelopment ? devEntry : '../index.js',
  output: {
    path     : path.join(__dirname, '../dist/'),
    filename : 'bundle.js'
  },
  module: {
    loaders: [
      {
        test    : /\.js$/,
        exclude : /node_modules/,
        loaders : ['react-hot', 'babel?presets[]=es2015,presets[]=react']
      }
    ]
  },
  plugins: isDevelopment && [
    new webpack.HotModuleReplacementPlugin()
  ]
};
