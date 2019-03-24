import React, { Component, Fragment } from 'react';
import poisson from '../../images/dessintroll/clonage.png';
import Template from '../../components/template';

class Introduction extends Component {
  
  choiceOne = () => {
    const { history } = this.props;
    history.push(`/step4`)
  };
 
  
  render() {
    return (
      <Template 
      question="Oh non, tous les clones de TekTek se sont retournés contre lui !"
      image={poisson}
      reponse1="revenir en arrière"
      choiceOne={this.choiceOne}
      imageSize="550px"
      />
    );
  }
}

export default Introduction;