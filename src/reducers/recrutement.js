let _ = require('lodash');

const recrutementReducer = (state = null, action) => {
  switch (action.type) {
    case 'add_new_candidat':
      let candidats;
      if (state === null || state.candidats === undefined) {
        candidats = [];
      } else {
        candidats = Object.assign(state.candidats);
      }

      let updatedCandidats = _.concat(action.nouveauCandidat, candidats);
      if (updatedCandidats.length > 4) {
        updatedCandidats.pop();
      }
      console.log(updatedCandidats);
    return Object.assign({}, state, {
      candidats: updatedCandidats
    });
    default:
    return state;
  }
}

export default recrutementReducer;
