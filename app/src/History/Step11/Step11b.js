import React, { Component, Fragment } from 'react';
import poisson from '../../images/dessintroll/bob.png';
import Template from '../../components/template';

class Introduction extends Component {
  
  choiceOne = () => {
    const { history } = this.props;
    history.push(`/step10b`)
  };

  
  render() {
    return (
      <Template 
      question="En pleine forme après cette partie de saute-mouton, Bob l'éponge te bat 
      lors du combat."
      image={poisson}
      reponse1="revenir en arrière"
      choiceOne={this.choiceOne}
      imageBig
    
      />
    );
  }
}

export default Introduction;