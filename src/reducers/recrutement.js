const recrutementReducer = (state = null, action) => {
  let hoveredGroup;
  switch (action.type) {
    case 'register_hovered_group':
      this.hoveredGroup = action.group;
      return this.hoveredGroup;
    case 'reset_hovered_group':
      this.hoveredGroup = null;
      return null;
    case 'drop_hovered_group':
      console.log('drop : ' + this.hoveredGroup);
      return this.hoveredGroup;
    default:
    return state;
  }
}

export default recrutementReducer;
