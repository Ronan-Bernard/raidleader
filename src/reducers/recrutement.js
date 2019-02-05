const recrutementReducer = (state = null, action) => {
  let hoveredGroup;
  switch (action.type) {
    case 'register_hovered_group':
    console.log('over group 1');
      this.hoveredGroup = action.group;
      return this.hoveredGroup;
    case 'reset_hovered_group':
      this.hoveredGroup = null;
      return null;
    case 'drop_hovered_group':
      return this.hoveredGroup;
    default:
    return state;
  }
}

export const hoverGroup = group => ({
  type: 'register_hovered_group',
  group
});

export default recrutementReducer;

/*
const tweetReducer = (state = null, action) => {
  switch(action.type) {
    case 'receive_tweet':
      return action.tweet;
    default:
      return state;
  }
};

export default tweetReducer;

 */
