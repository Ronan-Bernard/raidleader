import React, {Component} from "react";
import Recrutement from './Recrutement';
import recrueworker_script from '../workers/recruesWorker';

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      recrues: []
    }
  }
  componentWillMount() {
    this.recruesWorker = new Worker(recrueworker_script);
  }

  render() {
    this.recruesWorker.onmessage = (m) => {
      this.setState({data: m.data})
      console.log(m.data.message);
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