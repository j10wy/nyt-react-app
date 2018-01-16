import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Search from './search';
import Result from './results';
import api from "../utils/api";

class Home extends Component {
	handleInputChange(event) {
		console.log(event.target.value);
	}

	handleFormSubmit(event) {
		event.preventDefault();
		this.searchMovies(this.state.search);
	}
	render() {
		return (
			<div>
     <Search />
     <Route exact path="/results" render={ () => (
		<Result results={ [{ title: 'one', button: "Save" }, { title: 'one', button: "Save" }] } />
		) } />
   </div>);
	}
}

export default Home;