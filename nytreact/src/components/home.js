import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Search from './search';
import Result from './results';
import api from "../utils/api";

class Home extends Component {

	constructor(props) {
		super(props);
		this.state = {
			result: {},
			search: "Search for something"
		  };
	  }

	searchNYT(query) {
		api.search(query)
		  .then(res => this.setState({ result: res.data }))
		  .catch(err => console.log(err));
	  };

	handleInputChange(event) {
		console.log(event.target.value);
	}

	handleSubmit(event) {
		event.preventDefault();
		console.log(event.target);
		//this.searchMovies(this.state.search);
	}
	render() {
		return (
		<div>
			<Search
			testing={this.state.search}
			handleInputChange={this.handleInputChange}
			handleSubmit={this.handleSubmit}
			/>

			<Route exact path="/results"
			render={ () => (
				<Result results={ [{ title: 'one', button: "Save" }, { title: 'one', button: "Save" }] } />
			) } />
		</div>
   );
	}
}

export default Home;