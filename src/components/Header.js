import React, {Component} from "react";
import Recrutement from './Recrutement';
import recrueWorker from 'worker!../workers/recruesWorker.js';  // eslint-disable-line import/no-webpack-loader-syntax

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      recrues: []
    }
  }
  componentWillMount() {
    this.recruesWorker = new recrueWorker('../workers/recruesWorker.js');
  }

  render() {
    this.recruesWorker.onmessage = (m) => {
      let nouvelleRecrue = [m.data.infosRecrue];
      // let nouveauRecrues = new Array(this.state.recrues, nouvelleRecrue);
      // le problème : créer 1 seul tableau en copiant this.state.recrues (une collection js ça existe ?), pr l'instant j'ai un sous-tableau
      // console.log(nouveauRecrues);

      /* if (newRecrues.length > 8) {
        newRecrues.pop();
      } */
      this.setState({recrues: nouveauRecrues});
    }

    return(
      <header>
        <div className="chat">
          Chat de guilde (classement des guildes, patches, choix des raids selon difficulté/popularité)
        </div>
        <Recrutement recrues={this.state.recrues} />
      </header>
    );
  }

}

export default Header;