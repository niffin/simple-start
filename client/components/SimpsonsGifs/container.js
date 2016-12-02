import { connect } from 'react-redux';
import component from './component';
import { getSimpsonsGifs } from 'state/simpsonsGifs';

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
      getGifUrls : () => dispatch(getSimpsonsGifs())
  };
}

function mergeProps (stateProps, dispatchProps) {
  return {
    ...stateProps,
    ...dispatchProps
  };
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(component);
