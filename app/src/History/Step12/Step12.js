import React, { Component, Fragment } from 'react';
import poisson from '../../images/tequila-croustibat.png';
import Template from '../../components/template';

class Introduction extends Component {
  
  choiceOne = () => {
    const { history } = this.props;
    history.push(`/step13a`)
  };
  choiceTwo = () => {
    const { history } = this.props;
    history.push(`/step13b`)
  };
 
  
  render() {
    return (
      <Template 
      contexte="C'est le combat final. TekTek va affronter Croustibat, le plus 
      redoutable des combattant !"
      question="Comment va-t-il le battre ?"
      image={poisson}
      reponse1="En regardant sur Internet"
      reponse2="Demander conseil à Orsène"
      choiceOne={this.choiceOne}
      choiceTwo={this.choiceTwo}
      />
    );
  }
}

export default Introduction;