import React, { Component, Fragment } from 'react';
import poisson from '../../images/dessintroll/nageoire.png';
import Template from '../../components/template';

class Introduction extends Component {
  
  choiceOne = () => {
    const { history } = this.props;
    history.push(`/Step7b`)
  };
  
 
  
  render() {
    return (
      <Template 
      question="Oh non, en frappant l'asticot, ta nageoire s'est accrochée à l'hameçon.
      Tu as été péché et fini en poisson pané, dommage..."
      image={poisson}
      reponse1="Revenir en arrière"
      choiceOne={this.choiceOne}
      imageSize="550px"
      />
    );
  }
}

export default Introduction;