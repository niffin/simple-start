import { connect } from 'react-redux';
import component from './component';
import getSimpsonsGifs from 'state/simpsonsGifs/getSimpsonsGifs';
import getSimpsonGifUrlsFromState from 'state/simpsonsGifs/selectors/getSimpsonGifUrlsFromState';

export function mapStateToProps (state) {

  const { simpsonsGifs } = state,
        { isFetching }   = simpsonsGifs,
        gifUrls          = getSimpsonGifUrlsFromState(state);

  return {
    isFetching,
    simpsonsGifUrls : gifUrls
  };
}

function mapDispatchToProps (dispatch) {
  return {
    getGifUrls : async () => dispatch(getSimpsonsGifs())
  };
}

function mergeProps (stateProps, dispatchProps) {
  return {
    ...stateProps,
    ...dispatchProps
  };
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(component);
