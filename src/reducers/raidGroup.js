let uiUtil = require('../utils/uiUtil');
let _ = require('lodash');

const raidGroupReducer = (state = null, action) => {
  let candidats, updatedCandidats;
  if (state === null || state.candidats === undefined) {
    candidats = [];
  } else {
    candidats = Object.assign(state.candidats);
  }

  switch (action.type) {
    case 'load_players_list':
      return Object.assign({}, state, {
        playersList: action.playersList
      });

    case 'add_to_group':
      if (uiUtil.isOverElement(action.e, window.hoveredSlot)) {
        let newPlayer = Object.assign({}, action.recrue, {
          id: window.hoveredSlot
        });
        let newPlayersList = Object.assign(state.playersList);
        newPlayersList[uiUtil.playersListIndexForSlot(window.hoveredSlot)] = newPlayer;

        let candidatIndex = _.findIndex(state.candidats, { 'id': action.recrue.id});
        let addedCandidat = Object.assign({}, state.candidats[candidatIndex], {
          available: false
        });
        updatedCandidats = Object.assign(state.candidats);
        updatedCandidats[candidatIndex] = addedCandidat;
        window.hoveredSlot = null;
        return Object.assign({}, state, {
          playersList: newPlayersList,
          candidats: updatedCandidats
        });
      } else {
        return state;
      }

    case 'add_new_candidat':
      updatedCandidats = _.concat(action.nouveauCandidat, candidats);
      if (updatedCandidats.length > 4) {
        updatedCandidats.pop();
      }
    return Object.assign({}, state, {
      candidats: updatedCandidats
    });

    default:
    return state;
  }
}

export default raidGroupReducer;
