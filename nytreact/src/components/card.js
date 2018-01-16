import React from "react";

const Card = (props) => {
  return (<div className="container">
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
