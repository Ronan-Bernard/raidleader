import React, {Component} from "react";
import { connect } from 'react-redux';
let _ = require('lodash');

class RaidGroup extends Component {
  constructor(props) {
    super(props);
    let numberOfEmptySlots = (this.props.players.length > 0) ? 5 - this.props.players.length : 5;
    let emptySlots = [];

    let idBasis = ((this.props.group - 1) * 5);
    for (let i = 1; i <= numberOfEmptySlots; i++) {
      emptySlots.push({
        id: idBasis + i
      });
    }

    this.state = {
      players: [],
      emptySlots: emptySlots
    };
    _.concat(this.props.players, this.state.players);

  }

  componentWillUpdate() {
    // TODO refaire les opérations présentes dans le constructeur,
    //  pour gérer les changements dans la liste de players et ajuster avec des players vides
  }

  componentDidUpdate (prevProps, prevState) {
    console.log('component update');
    console.log(prevState.hoveredSlot);
  }

  render() {
    const {
      hoverSlot,
      resetSlot
    } = this.props;

    const playersList = this.state.players.map((player) =>
      <li key={player.id}
          id={'player' + player.id}
          empty="false">
        <i class={"ra ra-" + player.heroClass} />
      </li>
    );

    const emptyList = this.state.emptySlots.map((emptyPlayer) =>
      <li key={emptyPlayer.id}
          id={'player' + emptyPlayer.id}
          empty="true">
        &nbsp;
      </li>
    );
// TODO emptyPlayer devrait etre un Player dont un champ rend empty à true.... Une seule liste !
    return (
      <ul onDragOver={hoverSlot}
        onDragLeave={resetSlot}
        id={'group' + this.props.group}>
        {playersList}
        {emptyList}
      </ul>
    );
  }
}

const mapStateToProps = ({ hoveredSlot }) => ({ hoveredSlot });

const mapDispatchToProps = dispatch => ({
  hoverSlot: (e) => dispatch({ type : 'register_hovered_slot', e: e}),
  resetSlot: (e) => dispatch({ type : 'reset_hovered_slot'})
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RaidGroup);
