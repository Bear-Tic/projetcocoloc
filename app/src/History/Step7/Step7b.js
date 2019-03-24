import React, { Component, Fragment } from 'react';
import poisson from '../../images/teq-burger.png';
import Template from '../../components/template';

class Introduction extends Component {
  
  choiceOne = () => {
    const { history } = this.props;
    history.push(`/step8a`)
  };
  choiceTwo = () => {
    const { history } = this.props;
    history.push(`/step8b`)
  };
 
  
  render() {
    return (
      <Template 
      question="Tu es rassasié, tu n'as pas tenté de manger l'asticot sur son hameçon.
      Mais maintenant, que vas-tu faire ?"
      image={poisson}
      reponse1="Faire une sieste"
      reponse2="Frapper l'asticot"
      choiceOne={this.choiceOne}
      choiceTwo={this.choiceTwo}
      />
    );
  }
}

export default Introduction;