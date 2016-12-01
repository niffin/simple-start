import React, { Component } from 'react';
import SimpsonsGifs from 'components/SimpsonsGifs/container';

export default class App extends Component {
  render () {
    return (
      <div>
        <div>Hello Everybody!</div>
        <SimpsonsGifs />
      </div>
    );
  }
}
