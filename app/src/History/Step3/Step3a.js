import React, { Component, Fragment } from 'react';
import poisson from '../../images/dessintroll/condamné.png';
import Template from '../../components/template';

class Introduction extends Component {
  
  choiceOne = () => {
    const { history } = this.props;
    history.push(`/step2b`)
  };
 
  
  render() {
    return (
      <Template 
      question="Pourquoi as-tu mangé un être 
      vivant de ta propre espèce ? Tu es condamné à perpétuité pour cannibalisme"
      image={poisson}
      reponse1="Revenir en arrière"
      choiceOne={this.choiceOne}
      imageSize="600px"
      />
    );
  }
}

export default Introduction;