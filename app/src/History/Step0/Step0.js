import React, { Component, } from 'react';
import poisson from '../../images/dessintroll/tequila-troll.png';
import Template from '../../components/template';

class Introduction extends Component {
  
  choiceOne = () => {
    const { history } = this.props;
    history.push(`/Step1`)
  };
 
  
  render() {
    return (
      <Template 
      question="Tu es amnésique"
      image={poisson}
      reponse1="Continuez"
      imageSize="550px"
      choiceOne={this.choiceOne}

      />
    );
  }
}

export default Introduction;