const path       = require('path'),
      express    = require('express'),
      app        = express(),
      isDevEnv   = process.env.NODE_ENV === 'development',
      bundlePath = isDevEnv ? 'http://localhost:3001' : 'dist';

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static('client'));

app.get('/', function (req, res) {
  res.render('index', { bundlePath });
});

console.log('restart', 'environment: ', process.env.NODE_ENV);

app.listen(3000);
