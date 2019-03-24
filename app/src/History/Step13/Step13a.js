import React, { Component, Fragment } from 'react';
import poisson from '../../images/tequila-croustibat-recette.png';
import Template from '../../components/template';

class Introduction extends Component {
  
  choiceOne = () => {
    const { history } = this.props;
    history.push(`/step14`)
  };
 
  
  render() {
    return (
      <Template 
      question="Tequila a trouvé une recette de Croustibat sur Internet ! Tequila cuisine Croustibat et gagne le combat final l'aventure s'achève"
      image={poisson}
      reponse1="Voir ma récompense"
      choiceOne={this.choiceOne}
      />
    );
  }
}

export default Introduction;