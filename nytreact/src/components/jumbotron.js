import React, { Component } from 'react';
import react_logo from '../img/logo.svg';
import nyt_logo from '../img/nyt-logo.svg';
import './jumbotron.css';
class Jumbotron extends Component {

  render() {
    return (
      <div className="jumbotron App-header">
        <div className="container">
          <header>
            <img src={ react_logo } className="App-logo" />
            <img src={ nyt_logo } style={ { height: '80px' } } />
          </header>
        </div>
      </div>
    )
  }
}

export default Jumbotron;