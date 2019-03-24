import React, { Component, Fragment } from 'react';
import poisson from '../../images/teq+bob-cassé.png';
import Template from '../../components/template';

class Introduction extends Component {
  
  choiceOne = () => {
    const { history } = this.props;
    history.push(`/step12`)
  };
 
  
  render() {
    return (
      <Template 
      question="Tu as eu raison. En jouant à saute-mouton, Bob s'est cassé la cheville.
      Lors du combat, tu le bats facilement"
      image={poisson}
      reponse1="Continuer"
      choiceOne={this.choiceOne}
      />
    );
  }
}

export default Introduction;