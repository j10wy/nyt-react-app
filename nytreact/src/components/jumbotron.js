import React, { Component } from 'react';
import react_logo from '../logo.svg';
import nyt_logo from '../nyt-logo.svg';

class Jumbotron extends Component {

  render() {
    return (<div class="jumbotron">
    <div class="container">
      <h1>
        <strong>
          <i class="fa fa-newspaper-o"></i> New York Times Search</strong>
      </h1>
    </div>
  </div>)
  }
}

export default Jumbotron;