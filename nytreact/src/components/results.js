import React, { Component } from 'react';

class Result extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <h5 className="card-header bg-dark text-white">Search Results</h5>
              <div className="card-body">
                <ul className="list-group">
                  <li className="list-group-item">Cras justo odio <button type="button" className="btn btn-danger float-right">Save</button></li>
                  <li className="list-group-item">Dapibus ac facilisis in <button type="button" className="btn btn-danger float-right">Save</button></li>
                  <li className="list-group-item">Morbi leo risus <button type="button" className="btn btn-danger float-right">Save</button></li>
                  <li className="list-group-item">Porta ac consectetur ac <button type="button" className="btn btn-danger float-right">Save</button></li>
                  <li className="list-group-item">Vestibulum at eros <button type="button" className="btn btn-danger float-right">Save</button></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      );
  }
}

export default Result
