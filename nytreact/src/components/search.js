import React, { Component } from 'react';
class Search extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <h5 className="card-header bg-dark text-white">Search for a topic in the NYT Database</h5>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="inputAddress">Topic</label>
                    <input type="text" className="form-control form-control-lg" id="topic" placeholder="A helper should go here" />
                  </div>
                  <div className="form-row">
                    <div className="col">
                      <input type="text" className="form-control" placeholder="Start Year" />
                    </div>
                    <div className="col">
                      <input type="text" className="form-control" placeholder="End Year" />
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary" style={{marginTop:'10px'}}>Search</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Search;