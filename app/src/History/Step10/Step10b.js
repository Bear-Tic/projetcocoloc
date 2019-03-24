import React, { Component, Fragment } from 'react';
import poisson from '../../images/teq+bob+meduse.png';
import Template from '../../components/template';

class Introduction extends Component {
  
  choiceOne = () => {
    const { history } = this.props;
    history.push(`/Step11a`)
  };
  choiceTwo = () => {
    const { history } = this.props;
    history.push(`/step11b`)
  };
 
  
  render() {
    return (
      <Template 
      contexte="En chassant les méduses, TekTek rencontre Bob l'éponge qui lui
      propose de jouer à saute-mouton."
      question="Acceptes-tu de jouer ?"
      image={poisson}
      reponse1="Accepter"
      reponse2="Refuser"
      choiceOne={this.choiceOne}
      choiceTwo={this.choiceTwo}
      />
    );
  }
}

export default Introduction;