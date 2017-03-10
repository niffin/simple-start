import fetchHelper from 'state/helpers/fetch';
import getSimpsonsGifs, {
  getSimpsonsGifsRequest,
  getSimpsonsGifsResponse,
  getSimpsonsGifsError
} from 'state/simpsonsGifs/getSimpsonsGifs';

export default function ({ dispatch }) {
  return next => async action => {

    if (action.type === getSimpsonsGifs.type) {
      return dispatch(fetchHelper({
        url             : 'https://www.reddit.com/r/gifs/search.json?q=simpsons&restrict_sr=on&sort=relevance&t=all',
        onRequest       : getSimpsonsGifsRequest,
        onSuccess       : getSimpsonsGifsResponse,
        onError         : getSimpsonsGifsError,
        responseHandler : response => ({
          gifUrls : response.data.children.map(extractURLS)
        })
      }));
    }

    return next(action);
  };
}

function extractURLS (post) {
  return post.data.url;
}
