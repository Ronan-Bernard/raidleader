import React, {Component} from "react";
import { connect } from 'react-redux';

class RaidGroup extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return (nextProps.groupPlayers !== this.props.groupPlayers);
  }

  render() {
    const {
      hoverSlot,
      hideSlots,
      groupPlayers,
      group
    } = this.props;

    const groupPlayersList = groupPlayers.map((player, index) =>
      <li key={player.id}
          id={'player' + ++index}
          empty="false"
          >
        <i className={player.heroClass ? "ra ra-" + player.heroClass : ""} />
        <span>{player.name}</span>
      </li>
    );

    return (
      <ul onDragOver={hoverSlot}
        onDragLeave={hideSlots}
        id={'group' + group}>
        {groupPlayersList}
      </ul>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let updatedGroupPlayers = [];
  if (state !== undefined && state.raidGroupReducer.playersList !== undefined) {
      let idBasis = ((ownProps.group - 1) * 5) + 1;
      for (var l = idBasis; l < (idBasis + 5); l++) {
        updatedGroupPlayers.push(state.raidGroupReducer.playersList['player' + l]);
      }
  }
  return {
    groupPlayers: updatedGroupPlayers,
  }
}

const mapDispatchToProps = dispatch => ({
  hoverSlot: (e) => dispatch({ type : 'register_hovered_slot', e: e}),
  hideSlots: (e) => dispatch({ type : 'hide_hovered_slot'})
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RaidGroup);
