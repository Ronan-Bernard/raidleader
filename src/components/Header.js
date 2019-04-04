import React, {Component} from "react";
import Recrutement from './Recrutement';
import Chat from './Chat';
// import recrueWorker from 'worker-loader!../workers/recruesWorker.js';  // eslint-disable-line import/no-webpack-loader-syntax
import work from 'webworkify-webpack';
import store from '../stores';

class Header extends Component {
  constructor(props) {
    super(props);
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
    // this.recruesWorker = new recrueWorker('../workers/recruesWorker.js');
    this.recruesWorker = work(require.resolve('../workers/recruesWorker.js'));
    // FIXME ici on a un souci sur le param passé à generateRecrue()
    this.recruesWorker.onmessage = (m) => {
      store.dispatch({
        type: 'add_new_candidat',
        nouveauCandidat: [m.data.infosRecrue]
      });
    }
  }

  render() {
    return(
      <header>
        <Chat />
        <Recrutement candidats={this.state.candidats} />
      </header>
    );
  }

}

export default Header;
