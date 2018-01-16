import React from "react";
import './card.css';

const Card = (props) => {
  return (<div className="container" id={props.id}>
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <h5 className="card-header bg-dark text-white">{ props.title }</h5>
                  <div className="card-body">
                    { props.children }
                  </div>
                </div>
              </div>
            </div>
          </div>)
}


export default Card;
