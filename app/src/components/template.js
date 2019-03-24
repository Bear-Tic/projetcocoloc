import React, { Component, Fragment } from 'react';
import PropTypes from "prop-types";



class Template extends Component {
  
  render() {
    const { contexte, question, image, reponse1, reponse2, choiceOne, choiceTwo, imageSize } = this.props;
    return (
      <div className="container" style= {{paddingTop:contexte.length > 0 ? "0" : "100px"}}>
       {contexte.length > 0 &&
       <div className="row">
       <div className="col-6">
       <div className="contexte mt-3 mx-5 mb-3 d-flex justify-content-center align-items-center">
                <div className="col-12 text-center">
                <p>{contexte}</p>
                </div>
       </div>
       </div>
       </div>
       }
        <div className="row">
          <div className="col-12 text-center">
            <img className="img" src={image} alt="poisson" style= {{width:imageSize}}/>
            <div className="rep-block mt-3 mx-5 d-flex justify-content-center align-items-center">
              <div className="row">
                <div className="col-12"><p>{question}</p>
                </div>
                <div className="col-12">
                  <div>
                    <button className="btn btn-light mx-2" onClick={choiceOne}>{reponse1}</button>
                    {reponse2 && <button className="btn btn-light mx-2" onClick={choiceTwo}>{reponse2}</button>}
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
Template.propTypes = {
    contexte: PropTypes.string,
    imageBig:  PropTypes.string,
    image: PropTypes.string.isRequired,
    question: PropTypes.string.isRequired,
    reponse1: PropTypes.string.isRequired,
    reponse2: PropTypes.string.isRequired,
};
Template.defaultProps = {
    contexte: "",
    imageSize:"380px",
};


export default Template;