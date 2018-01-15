import React, { Component } from 'react';
import Jumbotron from "./components/jumbotron";
import Search from "./components/search";
import Result from "./components/results";
import Saved from "./components/saved";
class App extends Component {
  render() {
    return (
      <div>
        <Jumbotron title="New York Times Search" />
        <Search title="Search for a topic in the NYT Database" />
        <Result title="Search Results" />
        <Saved title="Saved Articles" />
      </div>
    );
  }
}

export default App;