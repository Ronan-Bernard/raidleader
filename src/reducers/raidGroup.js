const raidGroupReducer = (state = null, action) => {
  switch (action.type) {
    case 'load_players_list':
      return Object.assign({}, state, {
        playersList: action.playersList
      });

    case 'add_to_group':
      let newPlayersList = Object.assign(state.playersList);
      newPlayersList[state.hoveredSlot] = action.recrue;

      return Object.assign({}, state, {
        hoveredSlot: null,
        playersList: newPlayersList
      });

    case 'register_hovered_slot':
      let slotId = action.e.target.id;
      if (state.hoveredSlot === undefined || state.hoveredSlot != slotId) {
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

    default:
    return state;
  }
}

export default raidGroupReducer;
