import React, {Component} from "react";
import Recrutement from './Recrutement';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recrues: []
    }
  }

  render() {
    return(
      <header>
        <div class="chat">
          Chat de guilde (classement des guildes, patches, choix des raids selon difficulté/popularité)
        </div>
        <Recrutement recrues={this.state.recrues} />
      </header>
    );
  }

}

export default Header;