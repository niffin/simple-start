const webpack          = require('webpack'),
      config           = require('./webpack.config.js'),
      compiler         = webpack(config);

compiler.run((err) => {
  if (err) throw err;
});
