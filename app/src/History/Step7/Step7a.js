import React, { Component, Fragment } from 'react';
import poisson from '../../images/dessintroll/condamné.png';
import Template from '../../components/template';

class Introduction extends Component {
  
  choiceOne = () => {
    const { history } = this.props;
    history.push(`/step6`)
  };
 
  
  render() {
    return (
      <Template 
      question="Tu n'as pas retenu qu'il ne fallait pas manger ses semblables ?
      Le grondin est un poisson ! Tu es condamné à perpétuité !"
      image={poisson}
      reponse1="Revenir en arrière"
      choiceOne={this.choiceOne}
      imageSize="550px"
      />
    );
  }
}

export default Introduction;