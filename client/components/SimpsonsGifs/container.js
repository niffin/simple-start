import { connect } from 'react-redux';
import component from './component';
import getSimpsonsGifs from 'state/simpsonsGifs/getSimpsonsGifs';
import setSimpsonsGifs from 'state/simpsonsGifs/setSimpsonsGifs';

export function mapStateToProps (state) {

  const { simpsonsGifs } = state,
        { gifUrls, isFetching } = simpsonsGifs;

  return {
    isFetching,
    simpsonsGifUrls : gifUrls
  };
}

function mapDispatchToProps (dispatch) {
  return {
    getGifUrls : async () => {
      dispatch(getSimpsonsGifs());
      const gifUrls = await fetchSimpsonsGifs();
      dispatch(setSimpsonsGifs({gifUrls}));
    }
  };
}

function mergeProps (stateProps, dispatchProps) {
  return {
    ...stateProps,
    ...dispatchProps
  };
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(component);

async function fetchSimpsonsGifs () {
  const url = 'https://www.reddit.com/r/gifs/search.json?q=simpsons&restrict_sr=on&sort=relevance&t=all';

  const result = await fetch(url),
        json   = await result.json();

  return json.data.children.map(extractURLS);
}

function extractURLS (post) {
  return post.data.url;
}
