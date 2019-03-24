import React, { Component, Fragment } from 'react';
import poisson from '../../images/dessintroll/Jenaipasenvie.png';
import Template from '../../components/template';

class Introduction extends Component {
  
  choiceOne = () => {
    const { history } = this.props;
    history.push(`/Step2a`)
  };
 
  
  render() {
    return (
      <Template
      question="Tu n'as pas le choix"
      image={poisson}
      reponse1="Continuez"
      choiceOne={this.choiceOne}
      imageBig
   
      />
    );
  }
}

export default Introduction;