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
			search: "Search for something2"
		  };
	  }

	searchNYT(topic, start, end) {
		api.search(topic, start, end)
		  .then(res => console.log(res))
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

	componentDidMount() {
		this.searchNYT("obama","20170101", "20180101");
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