import React, {Component} from "react";
import Recrutement from './Recrutement';
import Chat from './Chat';
import recrueWorker from 'worker-loader!../workers/recruesWorker.js';  // eslint-disable-line import/no-webpack-loader-syntax
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

      if (newListRecrues.length > 4) {
        newListRecrues.pop();
      }
      this.setState({recrues: newListRecrues});
    }
  }

  render() {
    return(
      <header>
        <Chat />
        <Recrutement recrues={this.state.recrues} />
      </header>
    );
  }

}

export default Header;
