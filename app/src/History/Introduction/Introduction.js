import React, { Component, Fragment } from 'react';
import poisson from '../../images/poisson.jpg';
import Template from '../../components/template';

class Introduction extends Component {
  
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
      <Template contexte="Il était une fois,
      un poisson combattant, champion de boxe,
      qui vivait sous l'océan.
      Aidé de son mentor et entraineur, Orsène l'oursin, 
      ce poisson devra affronter les plus grands champions 
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

export default Introduction;