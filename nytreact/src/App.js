import React, { Component } from 'react';
import Jumbotron from "./components/jumbotron";
import Search from "./components/search";
import Result from "./components/results";
class App extends Component {
  render() {
    return (
      <div className="App" style={{textAlign:'center'}}>
        <Jumbotron title="New York Times Search" />
        <Search />
        <Result />
      </div>
    );
  }
}

export default App;