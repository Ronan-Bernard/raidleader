import React, {Component} from "react";
import { connect } from 'react-redux';

class RaidGroup extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return (nextProps.groupPlayers !== this.props.groupPlayers);
  }

  componentDidUpdate(prevProps) {
    if (this.props.group === '1') {
      this.props.saveHandler(prevProps.playersList);
    }
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
          onDragLeave={this.hideHoveredSlots}
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
      let indexBasis = ((ownProps.group - 1) * 5);
      for (var i = indexBasis; i < (indexBasis + 5); i++) {
        updatedGroupPlayers.push(state.raidGroupReducer.playersList[i]);
      }
  }
  return {
    groupPlayers: updatedGroupPlayers,
    playersList: state.raidGroupReducer.playersList
  }
}

export default connect(
  mapStateToProps
)(RaidGroup);
