const recrutementReducer = (state = null, action) => {
  let updatedCandidats;
  if (state === null || state.candidats === undefined) {
    candidats = [];
  } else {
    candidats = Object.assign(state.candidats);
  }

  switch (action.type) {
    default:
    return state;
  }
}

export default recrutementReducer;
