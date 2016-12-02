import React, { PropTypes } from 'react';

const propTypes = {
  isFetching      : PropTypes.bool,
  getGifUrls      : PropTypes.func,
  simpsonsGifUrls : PropTypes.array
};

export default function SimpsonsGifs ({isFetching, getGifUrls, simpsonsGifUrls = []}) {
  return (
    <div style={ styles.wrapper }>
      <button onClick={ getGifUrls }>Get URLS</button>

      { isFetching && <div className="loading-message">Fetching URLS....</div> }

      { simpsonsGifUrls.map(url => <div key={ url }><img src={ url } /></div>) }
    </div>
  );
}

const styles = {
  wrapper : {

  }
};

SimpsonsGifs.propTypes = propTypes;
