import React from 'react';
import Card from './card';

const Result = (props) => {
  console.log(props)
    return (
      <Card title="Search Results">
        <ul className="list-group">
          {/* {props.results.map((result, index) => {
            return (
              <li  key={ index } className="list-group-item">{result.title}
              <button type="button" className="btn btn-danger float-right">
              {result.button}
              </button>
            </li>
            )  
          })} */}
        </ul>
      </Card>
      );
  }

export default Result
