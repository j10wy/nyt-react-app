import React, { Component } from 'react';

class Result extends Component {
  render() {
    return (
      <div class="row">
      <div class="col-sm-12">
        <div class="panel panel-primary">

          <div class="panel-heading">
            <h3 class="panel-title"><strong><i class="fa fa-table"></i> Top Articles</strong></h3>
          </div>

          <div class="panel-body" id="wellSection">
            <div class="well" id="articleWell-1">
              <h3><span class="label label-primary">1</span><strong>Title</strong></h3>
              <h5>By authorname</h5>
              <h5>Section: ???</h5>
              <h5>date</h5>
              <button href="#">URL</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Result
