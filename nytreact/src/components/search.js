import React, { Component } from 'react';
class Search extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div class="card">
              <h5 class="card-header bg-dark text-white">{this.props.title}</h5>
              <div class="card-body">
                <form>
                  <div class="form-group">
                    <label for="inputAddress">Topic</label>
                    <input type="text" class="form-control form-control-lg" id="topic" placeholder="A helper should go here" />
                  </div>
                  <div class="form-row">
                    <div class="col">
                      <input type="text" class="form-control" placeholder="Start Year" />
                    </div>
                    <div class="col">
                      <input type="text" class="form-control" placeholder="End Year" />
                    </div>
                  </div>
                  <button type="submit" class="btn btn-primary" style={{marginTop:'10px'}}>Search</button>
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