import React, { Component, Fragment } from 'react';
import poisson from '../../images/technique-du-miroir.png';
import Template from '../../components/template';

class Introduction extends Component {
  
  choiceOne = () => {
    const { history } = this.props;
    history.push(`/step6`)
  };
 
  
  render() {
    return (
      <Template 
      question="TekTek sort le miroir et gagne contre l'adversaire d'entraînement. 
      En effet, le poisson a essayé de se battre contre son reflet 
      et s'est blessé"
      image={poisson}
      reponse1="Continuer"
      choiceOne={this.choiceOne}
      />
    );
  }
}

export default Introduction;