const raidGroupReducer = (state = null, action) => {
  let hoveredSlot;
  let playerList;

  switch (action.type) {
    case 'add_to_group':
    // receive action.recrueKey, action.slot
      let addInfos = {
        recrueKey: action.recrueKey,
        slot: this.hoveredSlot
      };
      this.hoveredSlot = null;
      return addInfos;
    case 'register_hovered_slot':
      let slotId = action.e.target.id;
      document.getElementById(slotId).classList.add('drag-over');
      this.hoveredSlot = slotId;
    return this.hoveredSlot;
    case 'reset_hovered_slot':
      document.querySelectorAll('.drag-over').forEach(function(i) {
        i.classList.remove('drag-over');
      });
    return state;
    default:
    return state;
  }
}

export default raidGroupReducer;
