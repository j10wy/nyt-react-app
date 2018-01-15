import React, { Component } from 'react';
import react_logo from './logo.svg';
import nyt_logo from './nyt-logo.svg';
import  Jumbotron from "./components/jumbotron";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={react_logo} className="App-logo" />
          <img src={nyt_logo} style={{height:'80px'}} />
          <h1 className="App-title"><img src="img/logo.svg" alt=""/></h1>
        </header>
        <p className="App-intro">
          <img src="" alt=""/>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        <Jumbotron />
      </div>
    );
  }
}

export default App;
