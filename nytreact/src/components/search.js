import React, { Component } from 'react';
class Search extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-12">
          <div class="panel panel-primary">
            <div class="panel-heading">
              <h3 class="panel-title"><strong><i class="fa  fa-list-alt"></i> Search Parameters</strong></h3>
              <div class="panel-body">
                <form>
                  <div class="form-group">
                  <label for="searchTerm">Search Term:</label>
                  <input type="text" class="form-control" id="searchTerm" />
                  </div>
                  <div class="form-group">
                    <label for="numRecordsSelect">Number of Records to Retrieve:</label>
                    <select class="form-control" id="numRecordsSelect">
                      <option value="1">1</option>
                      <option value="5" selected="">5</option>
                      <option value="10">10</option>
                    </select>
                  </div>
                  <div class="form-group">
                  <label for="startYear">Start Year (Optional):</label>
                  <input type="text" class="form-control" id="startYear" />
                  </div>

                  <div class="form-group">
                  <label for="endYear">End Year (Optional):</label>
                  <input type="text" class="form-control" id="endYear" />
                  </div>

                  <button type="submit" class="btn btn-default" id="runSearch">
                  <i class="fa fa-search"></i> Search</button>
                  <button type="button" class="btn btn-default" id="clearAll">
                  <i class="fa fa-trash"></i> Clear Results</button>
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