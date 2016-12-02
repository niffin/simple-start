import { buildReducers } from 'utils/ducks';
import getSimpsonsGifs from './getSimpsonsGifs';
import setSimpsonsGifs from './setSimpsonsGifs';

export const initialState = {
  isFetching : false,
  gifUrls    : []
};

export default buildReducers(
  initialState,
  getSimpsonsGifs,
  setSimpsonsGifs
);
