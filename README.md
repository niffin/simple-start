# simple-start
Simple nodemon/webpack hot reloading starter thing

##### dev: `npm start`
starts hot reloading dev server

##### prod : `npm run prod`
packages all javascript into `/client/dist/bundle.js`

##### specify build number through CLI : `npm run prod --build=123`
will create `/client/dist/bundle.build=123.js`

##### libraries
- react
- redux
- normalizr
- jest
- enzyme

##### unorthodox/less-than-obvious choices
- manage aliases in `config/.babelrc` through `babel-plugin-module-resolver` rather than webpack -- *avoids having to duplicate them for jest*.
- redux actions and reducers are combined in ['duck'](https://github.com/erikras/ducks-modular-redux)-like bundles in `/client/state`
