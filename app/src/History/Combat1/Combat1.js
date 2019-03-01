import React, { Component, Fragment } from 'react';
import poisson from '../../images/poisson.jpg';
import Template from '../../components/template';

class Combat1 extends Component {
  choiceOne = () => {
    const { history } = this.props;
    history.push(`/fight1`)
  };
  choiceTwo = () => {
    const { history} = this.props;
    history.push(`/fight2`);
  };
  
  render() {
    return (
      <Template contexte=" 
      de l'océan jusqu'au combat final... " 
      question="Quel est ton nom ?"
      image={poisson}
      reponse1="Tequila"
      reponse2="TekTek"
      choiceOne={this.choiceOne}
      choiceTwo={this.choiceTwo}
      />
      
    );
  }
}

export default Combat1;
