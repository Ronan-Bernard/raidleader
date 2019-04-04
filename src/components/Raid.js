import React, {Component} from "react";
import RaidGroup from './RaidGroup';
import store from '../stores';
let _ = require('lodash');

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
    let list = [];
    for (let i = 1; i<= 20; i++) {
      list.push({
        id: 'player' + i,
        sex: 'z'
      });
    }
    return list;
  }

  allowDrop(e) {
    e.preventDefault();
  }

  savePlayersList = (playersList) => {
    if (_.findIndex(playersList, function(i) { return i.sex !== 'z'}) === -1) {
      return;
    }
    console.log('should save');
  }

  render() {
    const {
      groupPlayers1,
      groupPlayers2,
      groupPlayers3,
      groupPlayers4
    } = this.state;
    const savePlayersList = this.savePlayersList;

    return (
      <nav onDrop={this.allowDrop}>
        <RaidGroup group="1" groupPlayers={groupPlayers1} saveHandler={savePlayersList} />
        <RaidGroup group="2" groupPlayers={groupPlayers2} saveHandler={savePlayersList} />
        <RaidGroup group="3" groupPlayers={groupPlayers3} saveHandler={savePlayersList} />
        <RaidGroup group="4" groupPlayers={groupPlayers4} saveHandler={savePlayersList} />
      </nav>
    )
  }
}

export default Raid;
