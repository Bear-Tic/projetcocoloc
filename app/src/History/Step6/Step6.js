import React, { Component, Fragment } from 'react';
import poisson from '../../images/Tequila.png';
import Template from '../../components/template';

class Introduction extends Component {
  
  choiceOne = () => {
    const { history } = this.props;
    history.push(`/step7a`)
  };
  choiceTwo = () => {
    const { history } = this.props;
    history.push(`/step7b`)
  };
 
  
  render() {
    return (
      <Template 
      contexte="Après ces deux combats intensifs, TekTek se rend compte qu'il a faim"
      question="Avant son prochain combat contre un asticot, que va-t-il manger ?"
      image={poisson}
      reponse1="Du Grondin en cocotte"
      reponse2="Un gros hamburger"
      choiceOne={this.choiceOne}
      choiceTwo={this.choiceTwo}
      />
    );
  }
}

export default Introduction;