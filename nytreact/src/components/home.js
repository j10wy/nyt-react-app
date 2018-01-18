import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Search from './search';
import Result from './results';
import api from "../utils/api";

class Home extends Component {

	constructor(props) {
		super(props);
		this.state = {
			results: [],
			start: "",
			end: "",
			topic: "",
			search: "Search for something..."
		};
	}

	searchNYT(topic, start, end) {
		api.search(topic, start, end)
			.then((res) => {
				this.setState({
					results: res.data
				});
				console.log("RESD:", this.state.result);
			})
			.catch(err => console.log(err));
	};

	handleInputChange(event) {
		console.log(event.target.value);
		const name = event.target.name;
		const value = event.target.value;
		this.setState({
			[name]: value
		});
	}

	handleSubmit = (event) => {
		event.preventDefault();
		this.searchNYT("a tribe called quest", "20170101", "20180101");
	}

	render = () => {
		return (
			<div>
     <Search testing={ this.state.search } handleInputChange={ this.handleInputChange } handleSubmit={ this.handleSubmit } />
     <Router>
       <Route exact path="/results" render={ (props) => (
                                             	<Result {...props} results={this.state.results } />
                                             ) } />
     </Router>
   </div>
			);
	}
}

export default Home;