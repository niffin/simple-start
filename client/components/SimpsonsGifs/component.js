import React, { Component, PropTypes } from 'react';

const propTypes = {
  isFetching      : PropTypes.bool,
  getGifUrls      : PropTypes.func,
  simpsonsGifUrls : PropTypes.array
};

class component extends Component {
  render () {
    const {
      isFetching,
      getGifUrls,
      simpsonsGifUrls
    } = this.props;

    return (
      <div style={ styles.wrapper }>
        <button onClick={ getGifUrls }>Get URLS</button>

        { isFetching && <div>Fetching URLS....</div> }

        { simpsonsGifUrls.map(url => <div key={ url }><img src={ url } /></div>) }
      </div>
    );
  }
}

const styles = {
  wrapper : {

  }
};

component.propTypes = propTypes;

export default component;
