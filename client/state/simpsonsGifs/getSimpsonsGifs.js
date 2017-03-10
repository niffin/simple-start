import { defineDuck } from 'utils/ducks';

export const getSimpsonsGifsRequest = defineDuck(
  'GET_SIMPSONS_GIFS_REQUEST',
  state => ({
    ...state,
    isFetching : true
  })
);

export const getSimpsonsGifsResponse = defineDuck(
  'GET_SIMPSONS_GIFS_RESPONSE',
  (state, action) => ({
    ...state,
    gifUrls    : action.gifUrls,
    isFetching : false
  })
);

export const getSimpsonsGifsError = defineDuck(
  'GET_SIMPSONS_GIFS_ERROR',
  (state, action) => ({
    ...state,
    isFetching : false,
    error      : action.error
  })
);

export default defineDuck(
  'GET_SIMPSONS_GIFS'
);
