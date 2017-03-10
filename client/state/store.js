import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { fetchMiddleware } from 'state/helpers/fetch';
import simpsonsGifsMiddleware from 'state/simpsonsGifs/sideEffects';
import reducers from './reducers';

const finalCreateStore = compose(
  applyMiddleware(
    thunkMiddleware,
    fetchMiddleware,
    simpsonsGifsMiddleware
  ),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

const store = finalCreateStore(reducers);

export default store;
