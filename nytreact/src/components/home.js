import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Search from './search';
import Result from './results';

class Home extends Component {
	render() {
		return (
			<div>
				<Search />
				<Route exact path="/results" render={ () => (
				<Result results={[{title:'one', button:"Save"},{title:'one', button:"Save"}]} />
				) } />
			</div>);
	}
}

export default Home;