const raidReducer = (state = null, action) => {
  // let hoveredGroup;
  switch (action.type) {
    case 'add_to_raid':
    console.log('add to raid');
      this.hoveredGroup = action.group;
      return this.hoveredGroup;
    default:
    return state;
  }
}

export default raidReducer;
