import React, { Component } from 'react';
import Jumbotron from "./components/jumbotron";
import Search from "./components/search";
import Result from "./components/results";
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
        <Search />
        <Result />
      </div>
    );
  }
}

export default App;
