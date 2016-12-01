import { fetchSimpsonsGifs } from './fetchSimpsonsGifs';

const GET_SIMPSONS_GIFS = 'GET_SIMPSONS_GIFS';
const SET_SIMPSONS_GIFS = 'SET_SIMPSONS_GIFS';

export function getSimpsonsGifs () {
  return async dispatch => {
    dispatch({ type : GET_SIMPSONS_GIFS });

    const gifUrls = await fetchSimpsonsGifs();

    dispatch({ type : SET_SIMPSONS_GIFS, gifUrls });
  };
}

export const initialState = {
  isFetching : false,
  gifUrls    : []
};

export default function (state = initialState, action) {
  switch (action.type) {

    case SET_SIMPSONS_GIFS :
      return {
        ...state,
        gifUrls    : action.gifUrls,
        isFetching : false
      };

    case GET_SIMPSONS_GIFS :
      return {
        ...state,
        isFetching : true
      };

    default :
      return state;
  }
}
