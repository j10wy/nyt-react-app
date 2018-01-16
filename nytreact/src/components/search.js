import React, { Component } from 'react';
import api from "../utils/api";
import Card from './card';

class Search extends Component {

  handleInputChange(event) {
    console.log(event.target.value);
  }

  handleFormSubmit(event) {
    event.preventDefault();
    this.searchMovies(this.state.search);
  }

  render() {
    return (
      <Card title="Search the NYT Article Database" id="search">
        <form>
          <div className="form-group">
            <label htmlFor="inputAddress">Topic</label>
            <input type="text" className="form-control form-control-lg" id="topic" placeholder="A helper should go here" />
          </div>
          <div className="form-row">
            <div className="col">
              <label htmlFor="startDate">Start Date</label>
              <input type="text" onChange={this.handleInputChange} name="startDate" className="form-control" placeholder="YYYMMDD" />
            </div>
            <div className="col">
              <label htmlFor="endDate">End Date</label>
              <input type="text" name="endDate" className="form-control" placeholder="YYYMMDD" />
            </div>
          </div>
          <button type="submit" className="btn btn-primary" style={ { marginTop: '10px' } }>Search</button>
        </form>
      </Card>
    )
  }
}

export default Search;