let _ = require('lodash');

const recrutementReducer = (state = null, action) => {
  let candidats, updatedCandidats;
  if (state === null || state.candidats === undefined) {
    candidats = [];
  } else {
    candidats = Object.assign(state.candidats);
  }

  switch (action.type) {
    case 'add_to_group':
      let candidatIndex = _.findIndex(state.candidats, { 'id': action.recrue.id});
      let addedCandidat = Object.assign({}, state.candidats[candidatIndex], {
        available: false
      });
      let updatedCandidats = Object.assign(state.candidats);
      updatedCandidats[candidatIndex] = addedCandidat;
    return Object.assign({}, state, {
      candidats: updatedCandidats
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

export default recrutementReducer;
