import React, { Component, Fragment } from 'react';
import poisson from '../../images/Tequila.png';
import Template from '../../components/template';

class Introduction extends Component {
  
  choiceOne = () => {
    const { history } = this.props;
    history.push(`/`)
  };
 
  
  render() {
    return (
      <Template 
      question="Ta récompense est que tu as rendu TekTek heureux !
      Trop cool!"
      image={poisson}
      reponse1="Revenir au début"
      choiceOne={this.choiceOne}
      />
    );
  }
}

export default Introduction;