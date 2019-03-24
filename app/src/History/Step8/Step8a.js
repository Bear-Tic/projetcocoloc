import React, { Component, Fragment } from 'react';
import poisson from '../../images/teq-endormi-asticot-mort.png';
import Template from '../../components/template';

class Introduction extends Component {
  
  choiceOne = () => {
    const { history } = this.props;
    history.push(`/step9`)
  };
 
  
  render() {
    return (
      <Template 
      question="Pendant que tu dormais, l'asticot est mort sur son hameçon.
      Tu as gagné le combat, félicitations !"
      image={poisson}
      reponse1="Continuer"
      choiceOne={this.choiceOne}
      />
    );
  }
}

export default Introduction;