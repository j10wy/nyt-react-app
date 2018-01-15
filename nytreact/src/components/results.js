import React, { Component } from 'react';

class Result extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div class="card">
              <h5 class="card-header bg-dark text-white">{ this.props.title }</h5>
              <div class="card-body">
                <ul class="list-group">
                  <li class="list-group-item">Cras justo odio <button type="button" class="btn btn-danger float-right">Save</button></li>
                  <li class="list-group-item">Dapibus ac facilisis in <button type="button" class="btn btn-danger float-right">Save</button></li>
                  <li class="list-group-item">Morbi leo risus <button type="button" class="btn btn-danger float-right">Save</button></li>
                  <li class="list-group-item">Porta ac consectetur ac <button type="button" class="btn btn-danger float-right">Save</button></li>
                  <li class="list-group-item">Vestibulum at eros <button type="button" class="btn btn-danger float-right">Save</button></li>
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
