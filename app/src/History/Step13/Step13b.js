import React, { Component, Fragment } from 'react';
import poisson from '../../images/dessintroll/croustibat.png';
import Template from '../../components/template';

class Introduction extends Component {
  
  choiceOne = () => {
    const { history } = this.props;
    history.push(`/introduction`)
  };

  
  render() {
    return (
      <Template 
      question="Orsène te conseille de le manger ! Quelle erreur !"
      image={poisson}
      reponse1="C'est la loose"
      choiceOne={this.choiceOne}
      imageSize="550px"
    
      />
    );
  }
}

export default Introduction;