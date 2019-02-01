import React, { Component, Fragment } from 'react';
import poisson from '../../images/poisson.jpg';

class Introduction extends Component {
  yes = () => {
    const { history } = this.props;
    history.push('/fight1')
  };
  no = () => {
    const { history } = this.props;
    history.push('/fight2')
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <img className="img" src={poisson} alt="poisson" />
            <div className="rep-block mt-3 mx-5 d-flex justify-content-center align-items-center">
              <div className="row">
                <div className="col-12"><p>question : Oui ou non ?</p>
                </div>
                <div className="col-12">
                  <div>
                    <button className="btn btn-light mx-2" onClick={this.yes}>Oui</button>
                    <button className="btn btn-light mx-2" onClick={this.no}>Non</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Introduction;
