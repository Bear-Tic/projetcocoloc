import React, { Component, Fragment } from 'react';
import poisson from '../../images/1er-combat-sushisansriz.png';
import Template from '../../components/template';

class Introduction extends Component {
  
  choiceOne = () => {
    const { history } = this.props;
    history.push(`/step4`)
  };
 
  
  render() {
    return (
      <Template 
      question="Bien joué ! Le sushi a été disqualifié car, 
      sans saumon, ce n'est plus que du riz"
      image={poisson}
      reponse1="Continuer"
      choiceOne={this.choiceOne}
      />
    );
  }
}

export default Introduction;