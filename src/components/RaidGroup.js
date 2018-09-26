import React, {Component} from "react";
let _ = require('lodash');

class RaidGroup extends Component {
  constructor(props) {
    super(props);
    let numberOfEmptySlots = (this.props.players.length > 0) ? 5 - this.props.players.length : 5;
    let emptySlots = [];

    for (let i = 1; i <= numberOfEmptySlots; i++) {
      emptySlots.push({
        id: i
      });
    }

    this.state = {
      players: [],
      emptySlots: emptySlots
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

  render() {
    const playersList = this.state.players.map((player) =>
      <li key={player.id} id={'player' + player.id} empty="false">
        X
      </li>
    );

    const emptyList = this.state.emptySlots.map((emptyPlayer) =>
      <li key={emptyPlayer.id} id={'player' + emptyPlayer.id} empty="true">
        &nbsp;
      </li>
    );

    return (
      <ul onDragOver={this.dragOverRaidGroup} onDragLeave={this.dragLeaveRaidGroup} id={'group' + this.props.group}>
        {playersList}
        {emptyList}
      </ul>
    );
  }
}

export default RaidGroup;