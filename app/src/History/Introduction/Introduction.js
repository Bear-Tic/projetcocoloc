import React, { Component, Fragment } from 'react';
import poisson from '../../images/poisson.jpg';

class Introduction extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <img className="img" src={poisson} alt=""/>
            <h1>Introduction</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Introduction;
