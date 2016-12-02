import { defineDuck } from 'utils/ducks';

export default defineDuck(
  'GET_SIMPSONS_GIFS',
  state => ({
    ...state,
    isFetching : true
  })
);
