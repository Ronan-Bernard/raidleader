import React, {Component} from "react";
import RaidGroup from './RaidGroup';
import store from '../stores';
import { connect } from 'react-redux';

class Raid extends Component {
  constructor(props) {
    super(props);
      let initialPlayersList = this.loadPlayersList();
      store.dispatch({
        type: 'load_players_list',
        playersList: initialPlayersList
      })

      let allGroups = [];
      for (var k = 1; k <= 4; k++) {
        let idBasis = ((k - 1) * 5) + 1;
        allGroups[k] = [];
        for (var l = idBasis; l < (idBasis + 5); l++) {
          allGroups[k].push(initialPlayersList['player' + l]);
        }
      }

      this.state = {
        groupPlayers1: allGroups[1],
        groupPlayers2: allGroups[2],
        groupPlayers3: allGroups[3],
        groupPlayers4: allGroups[4]
      };
  }

  loadPlayersList = () => {
    // TODO charger depuis la mémoire locale ou le serveur
    let list = {};
    for (let i = 1; i<= 20; i++) {
      list['player' + i] = {
        id: 'player' + i
      };
    }
    return list;
  }

  allowDrop(e) {
    e.preventDefault();
  }

  render() {
    const {
      groupPlayers1,
      groupPlayers2,
      groupPlayers3,
      groupPlayers4
    } = this.state;
    return (
      <nav onDrop={this.allowDrop}>
        <RaidGroup group="1" groupPlayers={groupPlayers1} />
        <RaidGroup group="2" groupPlayers={groupPlayers2} />
        <RaidGroup group="3" groupPlayers={groupPlayers3} />
        <RaidGroup group="4" groupPlayers={groupPlayers4} />
      </nav>
    )
  }
}

export default Raid;
