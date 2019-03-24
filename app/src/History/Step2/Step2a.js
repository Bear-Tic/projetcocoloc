import React, { Component, Fragment } from 'react';
import poisson from '../../images/1er-combat-sushi.png';
import Template from '../../components/template';

class Introduction extends Component {
  
  choiceOne = () => {
    const { history } = this.props;
    history.push(`/Step3a`)
  };
  choiceTwo = () => {
    const { history} = this.props;
    history.push(`/Step3b`);
  };
  
  render() {
    return (
      <Template contexte="Le premier combat est face à un sushi" 
      question="Comment vas-tu le battre ?"
      image={poisson}
      reponse1="Je le mange"
      reponse2="J'enlève le saumon"
      choiceOne={this.choiceOne}
      choiceTwo={this.choiceTwo}
      />
    );
  }
}

export default Introduction;