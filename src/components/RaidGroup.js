import React, {Component} from "react";
import { connect } from 'react-redux';
import store from '../stores';
let _ = require('lodash');

class RaidGroup extends Component {
  constructor(props) {
    super(props);

    let idBasis = ((this.props.group - 1) * 5) + 1;
    let currentPlayersList = store.getState().raidGroupReducer.playersList;
    let groupPlayers = [];

    let j = parseInt(idBasis);
    for (j; j < (idBasis + 5); j++) {
      groupPlayers.push(currentPlayersList['player' + j]);
    }

    console.log(groupPlayers);

    this.state = {
      players: groupPlayers
    }
  }

  componentWillReceiveProps(props) {
    console.log(props);
  }

  componentDidUpdate (prevProps, prevState) {
    console.log('component RaidGroup update');
    console.log(prevState);
  }

  render() {
    const {
      hoverSlot,
      hideSlots,
      playersList
    } = this.props;

    const groupPlayersList = this.state.players.map((player) =>
      <li key={player.id}
          id={'player' + player.id}
          empty="false">
        <i className={player.heroClass ? "ra ra-" + player.heroClass : ""} />
      </li>
    );

    return (
      <ul onDragOver={hoverSlot}
        onDragLeave={hideSlots}
        id={'group' + this.props.group}>
        {groupPlayersList}
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    playersList: state.raidGroupReducer.playersList
  };
}

const mapDispatchToProps = dispatch => ({
  hoverSlot: (e) => dispatch({ type : 'register_hovered_slot', e: e}),
  hideSlots: (e) => dispatch({ type : 'hide_hovered_slot'})
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RaidGroup);
