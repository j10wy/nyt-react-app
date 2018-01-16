import React, { Component } from 'react';

class Saved extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <h5 className="card-header bg-dark text-white">Saved Articles</h5>
              <div className="card-body">
                <div className="list-group">
                  <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                    <div className="d-flex w-100 justify-content-between">
                      <h5 className="mb-1">List group item heading</h5>
                      <small>3 days ago</small>
                    </div>
                    <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                    <small>Donec id elit non mi porta.</small>
                  </a>
                  <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                    <div className="d-flex w-100 justify-content-between">
                      <h5 className="mb-1">List group item heading</h5>
                      <small>3 days ago</small>
                    </div>
                    <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                    <small>Donec id elit non mi porta.</small>
                  </a>
                  <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                    <div className="d-flex w-100 justify-content-between">
                      <h5 className="mb-1">List group item heading</h5>
                      <small>3 days ago</small>
                    </div>
                    <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                    <small>Donec id elit non mi porta.</small>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      );
  }
}

export default Saved;
