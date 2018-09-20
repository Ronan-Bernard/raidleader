import React, {Component} from "react";
import Recrutement from './Recrutement';
import recrueWorker from 'worker!../workers/recruesWorker.js';  // eslint-disable-line import/no-webpack-loader-syntax
let _ = require('lodash');

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recrues: []
    }
  }
  componentWillMount() {
    this.recruesWorker = new recrueWorker('../workers/recruesWorker.js');
    this.recruesWorker.onmessage = (m) => {
      let nouvelleRecrue = [m.data.infosRecrue];
      let newListRecrues = _.concat(nouvelleRecrue, this.state.recrues);
      console.log(newListRecrues);

      if (newListRecrues.length > 4) {
        newListRecrues.pop();
      }
      this.setState({recrues: newListRecrues});
    }
  }

  render() {
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