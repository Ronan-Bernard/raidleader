import React, {Component} from "react";
let _ = require('lodash');

class RaidGroup extends Component {
  constructor(props) {
    super(props);
    let numberOfEmptySlots = (this.props.players) ? 5 - this.props.players.length : 5;

    this.state = {
      players: [],
      emptySlots: numberOfEmptySlots
    };
    _.concat(this.props.players, this.state.players);
  }

  componentWillUpdate() {

  }

  dragOverRaidGroup(e) {
    document.getElementById(e.target.id).classList.add('drag-over');
  }

  dragLeaveRaidGroup(e) {
    document.getElementById(e.target.id).classList.remove('drag-over');
  }

  // contient toujours 5 lignes, meme s'il y a 0 player dans ce groupe

  render() {
    const playersList = this.state.players.map((player) =>
      <li key={player.id}>
        X
      </li>
    );

    // TODO liste pas ok, y a pas de key
    // TODO remplacer le 5 par le state, mais il était pas initialisé
    const emptyList = _.fill(new Array(5), <li>&nbsp;</li>);

    return (
      <ul onDragOver={this.dragOverRaidGroup} onDragLeave={this.dragLeaveRaidGroup} id={'group' + this.props.group}>
        {playersList}
        {emptyList}
      </ul>
    );
  }
}

export default RaidGroup;