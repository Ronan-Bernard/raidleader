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
      if (uiUtil.isOverElement(action.e, state.hoveredSlot)) {
        let newPlayersList = Object.assign(state.playersList);
        newPlayersList[state.hoveredSlot] = action.recrue;

        let candidatIndex = _.findIndex(state.candidats, { 'id': action.recrue.id});
        let addedCandidat = Object.assign({}, state.candidats[candidatIndex], {
          available: false
        });
        updatedCandidats = Object.assign(state.candidats);
        updatedCandidats[candidatIndex] = addedCandidat;

        return Object.assign({}, state, {
          hoveredSlot: null,
          playersList: newPlayersList,
          candidats: updatedCandidats
        });
      } else {
        return state;
      }

    case 'register_hovered_slot':
      let slotId = action.e.target.id;
      if (state.hoveredSlot === undefined || state.hoveredSlot !== slotId) {
        document.getElementById(slotId).classList.add('drag-over');
        return Object.assign({}, state, {
          hoveredSlot: slotId
        });
      } else {
        return state;
      }
    case 'hide_hovered_slot':
      document.querySelectorAll('.drag-over').forEach(function(i) {
        i.classList.remove('drag-over');
      });
      return state;
    case 'reset_hovered_slot':
      document.querySelectorAll('.drag-over').forEach(function(i) {
        i.classList.remove('drag-over');
      });
      return Object.assign({}, state, {
        hoveredSlot: null
      });

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
