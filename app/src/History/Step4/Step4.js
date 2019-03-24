import React, { Component} from 'react';
import poisson from '../../images/orsène-et-teq.png';
import Template from '../../components/template';

class Introduction extends Component {
  
  choiceOne = () => {
    const { history } = this.props;
    history.push(`/Step5a`)
  };
  choiceTwo = () => {
    const { history } = this.props;
    history.push(`/step5b`)
  };
 
  
  render() {
    return (
      <Template 
      contexte="Le sushi était facile, mais le prochain le sera moins TekTek va devoir affronter un autre poisson combattant Orsène l'aide à s'entrainer"
      question="Quel technique va-t-il apprendre avec Orsène ?"
      image={poisson}
      reponse1="La technique du miroir"
      reponse2="La technique du clonage"
      choiceOne={this.choiceOne}
      choiceTwo={this.choiceTwo}
      />
    );
  }
}

export default Introduction;