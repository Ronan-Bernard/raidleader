import React, {Component} from "react";
import Recrutement from './Recrutement';
import Chat from './Chat';
import recrueWorker from 'worker-loader!../workers/recruesWorker.js';  // eslint-disable-line import/no-webpack-loader-syntax
let _ = require('lodash');

class Header extends Component {
  constructor(props) {
    super(props);
    this.stateHandler = this.stateHandler.bind(this)
    this.state = {
      candidats: [],
    }
  }
  stateHandler() {
    this.setState({
      playersList: this.playersList
    });
  }
  componentWillMount() {
   this.recruesWorker = new recrueWorker('../workers/recruesWorker.js');
   this.recruesWorker.onmessage = (m) => {
      let nouvelleRecrue = [m.data.infosRecrue];
      let newListRecrues = _.concat(nouvelleRecrue, this.state.candidats);

      if (newListRecrues.length > 4) {
        newListRecrues.pop();
      }
      this.setState({candidats: newListRecrues});
    }
  }

  render() {
    return(
      <header>
        <Chat />
        <Recrutement candidats={this.state.candidats}
          stateHandler={this.stateHandler} />
      </header>
    );
  }

}

export default Header;
