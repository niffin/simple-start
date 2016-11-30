const path           = require('path'),
      express        = require('express'),
      app            = express(),
      config         = require('../config/default'),
      bundle         = config.webpack.bundle,
      portNumber     = config.server.port;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.static('client'));

app.get('/', function (req, res) {
  res.render('index', { bundle });
});

console.log('server is running on port ' + portNumber); // eslint-disable-line no-console

app.listen(portNumber);
