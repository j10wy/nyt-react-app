import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Jumbotron from "./components/jumbotron";
import Home from "./components/home";
import Search from "./components/search";
import Result from "./components/results";
import Saved from "./components/saved";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Jumbotron title="New York Times Search" />
          <Home />
          <Route exact path="/saved" component={Saved} />
        </div>
      </BrowserRouter>
      );
  }
}

export default App;