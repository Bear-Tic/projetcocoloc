import React, { Component, Fragment } from 'react';
import poisson from '../../images/Tequila.png';
import Template from '../../components/template';

class Introduction extends Component {
  
  choiceOne = () => {
    const { history } = this.props;
    history.push(`/step10a`)
  };
  choiceTwo = () => {
    const { history } = this.props;
    history.push(`/step10b`)
  };
 
  
  render() {
    return (
      <Template 
      contexte="TekTek a un peu de temps avant son prochain combat face à Bob l'éponge"
      question="Que va-t-il faire pendant ce temps-là ?"
      image={poisson}
      reponse1="Se reposer"
      reponse2="Aller chasser des méduses"
      choiceOne={this.choiceOne}
      choiceTwo={this.choiceTwo}
      />
    );
  }
}

export default Introduction;