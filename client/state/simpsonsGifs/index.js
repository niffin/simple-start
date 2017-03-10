/**
 * the index.js is where you define the initial state and
 * export out all the reducers built by the ducks through `buildReducers`
 *
 * make sure to include the default export in
 * state/reducers and pass it in to combineReducers
 */

import { buildReducers } from 'utils/ducks';
import {
  getSimpsonsGifsRequest,
  getSimpsonsGifsResponse,
  getSimpsonsGifsError
} from './getSimpsonsGifs';

export const initialState = {
  isFetching : false,
  gifUrls    : []
};

export default buildReducers(
  initialState,
  getSimpsonsGifsRequest,
  getSimpsonsGifsResponse,
  getSimpsonsGifsError
);
