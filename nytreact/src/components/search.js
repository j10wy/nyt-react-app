import React from 'react';
import Card from './card';

const Search = (props) => {

    return (
      <Card title="Search the NYT Article Database" id="search">
        <form onChange={props.handleSubmit}>
          <div className="form-group">
            <label htmlFor="inputAddress">Topic</label>
            <input type="text" className="form-control form-control-lg" id="topic" placeholder={props.testing} />
          </div>
          <div className="form-row">
            <div className="col">
              <label htmlFor="startDate">Start Date</label>
              <input type="text" onChange={props.handleInputChange} name="startDate" className="form-control" placeholder="YYYMMDD" />
            </div>
            <div className="col">
              <label htmlFor="endDate">End Date</label>
              <input type="text" onChange={props.handleInputChange} name="endDate" className="form-control" placeholder="YYYMMDD" />
            </div>
          </div>
          <button type="submit" onClick={props.handleSubmit} className="btn btn-primary" style={ { marginTop: '10px' } }>Search</button>
        </form>
      </Card>
    )
}

export default Search;