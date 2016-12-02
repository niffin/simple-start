import { defineDuck } from 'utils/ducks';

export default defineDuck(
  'SET_SIMPSONS_GIFS',
  (state, action) => ({
    ...state,
    gifUrls    : action.gifUrls,
    isFetching : false
  })
);
