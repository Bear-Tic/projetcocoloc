import React, { Component, Fragment } from 'react';
import poisson from '../../images/dessintroll/bob.png';
import Template from '../../components/template';

class Introduction extends Component {
  
  choiceOne = () => {
    const { history } = this.props;
    history.push(`/step9`)
  };
 
  
  render() {
    return (
      <Template 
      question="Tu ne t'es pas préparé pour ton combat et Bob l'éponge 
      est trop fort.
      Il te bat à plate couture"
      image={poisson}
      reponse1="Revenir en arrière"
      choiceOne={this.choiceOne}
      imageBig
      />
    );
  }
}

export default Introduction;