import React, {Component} from "react";
import { connect } from 'react-redux';

var hoveredSlot;

class RaidGroup extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return (nextProps.groupPlayers !== this.props.groupPlayers);
  }

  hoverSlot = (e) => {
    this.hideHoveredSlots();
    window.hoveredSlot = e.target.id;
    document.getElementById(window.hoveredSlot).classList.add('drag-over');
  }

  hideHoveredSlots = () => {
    document.querySelectorAll('.drag-over').forEach(function(i) {
      i.classList.remove('drag-over');
    });
  }

  render() {
    const {
      groupPlayers,
      group
    } = this.props;

    const groupPlayersList = groupPlayers.map((player, index) =>
      <li key={player.id}
          id={player.id}
          empty="false"
          onDragOver={this.hoverSlot}
          onDragLeave={this.hideSlots}
          >
        <i className={player.heroClass ? "ra ra-" + player.heroClass : ""} />
        <span>{player.name}</span>
      </li>
    );

    return (
      <ul id={'group' + group}>
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

export default connect(
  mapStateToProps
)(RaidGroup);
