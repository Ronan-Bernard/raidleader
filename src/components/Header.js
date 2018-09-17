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
      this.setState({recrues: this.state.recrues.push(m.data.infosRecrue)});
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