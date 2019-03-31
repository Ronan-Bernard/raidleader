import React, {Component} from "react";
import { connect } from 'react-redux';
import store from '../stores';

class RaidGroup extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (nextProps.groupPlayers != this.props.groupPlayers);
  }

  render() {
    const {
      hoverSlot,
      hideSlots,
      groupPlayers
    } = this.props;

    const groupPlayersList = this.props.groupPlayers.map((player) =>
      <li key={player.id}
          id={player.id}
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
