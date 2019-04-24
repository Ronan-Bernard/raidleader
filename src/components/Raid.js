import React, {Component} from "react";
import RaidGroup from './RaidGroup';
import store from '../stores';
import { PlayerService } from '../service/PlayerService';
let _ = require('lodash');

class Raid extends Component {
  constructor(props) {
    super(props);
      this.playerService = new PlayerService();
      this.playersHashes = [];

      let initialPlayersList = this.loadEmptyPlayersList();
      store.dispatch({
        type: 'load_players_list',
        playersList: initialPlayersList
      })
      let allGroups = this.setGroupPlayersFromPlayersList(initialPlayersList);
      this.state = {
        playersList: initialPlayersList,
        groupPlayers1: allGroups[1],
        groupPlayers2: allGroups[2],
        groupPlayers3: allGroups[3],
        groupPlayers4: allGroups[4]
      };

      this.loadPlayersFromSave();
  }

  setGroupPlayersFromPlayersList(list) {
    let allGroups = [];
    for (var k = 1; k <= 4; k++) {
      let idBasis = ((k - 1) * 5) + 1;
      allGroups[k] = [];
      for (var l = idBasis; l < (idBasis + 5); l++) {
        allGroups[k].push(list['player' + l]);
      }
    }
    return allGroups;
  }

  loadEmptyPlayersList() {
    let list = [];

    for (let i = 1; i<= 20; i++) {
      list.push({
        id: 'player' + i,
        sex: 'z'
      });
    }
    return list;
  }

  async loadPlayersFromSave() {
    const list= this.state.playersList;
    try {
      const players = await this.playerService.getPlayers();
      if (players.length) {
        this.loadPlayersHashes(players);
        // todo forEach, loader à sa position dans list
        players.forEach(function(i) {
          list[i.position] = Object.assign({}, list[i], {
            id: 'player' + i.position
          });
        });
        // modifier list, qui sera retourné
        this.setGroupPlayersFromPlayersList(list);
      }
    } catch (e) {
      console.error(e);
    }
  }

  // TODO je pense qu'on peut se passer de ce tableau
  loadPlayersHashes(players) {
    let loadedPlayersHashes = [];
    players.forEach(function(i) {
      loadedPlayersHashes.push(i.hash);
    });
    this.playersHashes = loadedPlayersHashes;
  }

  allowDrop(e) {
    e.preventDefault();
  }

  savePlayersList = (playersList) => {
    if (this.allPlayersArePlaceholder(playersList)) {
      return;
    }
    for (let i = 0; i < playersList.length; i++) {
      let player = playersList[i];
      if (this.isPlayerANewcomer(player)) {
        this.playerService.addPlayer(Object.assign({}, player, {
          position: player.id.substring(6),
          creationDate: Date.now()
        }));
        this.playersHashes.push(player.hash);
      } else {
        // comparer player.position et sa position

      }

    }
  }

  allPlayersArePlaceholder(players) {
    return (_.findIndex(players, function(i) { return i.sex !== 'z'}) === -1);
  }
  isPlayerANewcomer(player) {
    return (this.playersHashes.indexOf(player.hash) === -1);
  }

  render() {
    const {
      playersList,
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
