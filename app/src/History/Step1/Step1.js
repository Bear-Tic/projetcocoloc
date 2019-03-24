import React, { Component, } from 'react';
import poisson from '../../images/orsène-et-teq.png';
import Template from '../../components/template';

class Introduction extends Component {
  
  choiceOne = () => {
    const { history } = this.props;
    history.push(`/Step1`)
  };
  
  
  render() {
    return (
      <Template contexte="Orsène vient lui annoncer son premier combat" 
      question="Es-tu prêt ?"
      image={poisson}
      reponse1="Oui"
      reponse2="Non"
      choiceOne={this.choiceOne}
      choiceTwo={this.choiceTwo}
      />
    );
  }
}

export default Introduction;