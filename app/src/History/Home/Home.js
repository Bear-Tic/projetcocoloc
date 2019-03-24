import React, { Component, Fragment } from 'react';
import poisson from '../../images/Tequila.png';
import Template from '../../components/template';

class Introduction extends Component {
  
  choiceOne = () => {
    const { history } = this.props;
    history.push(`/Introduction`)
  };
 
  
  render() {
    return (
      <Template 
      question="C'est l'histoire d'un poisson Combattant"
      image={poisson}
      reponse1="Commencez l'aventure"
      reponse2=""
      choiceOne={this.choiceOne}
    
      />
    );
  }
}

export default Introduction;