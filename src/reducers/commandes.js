const commandesReducer = (state = null, action) => {
  switch (action.type) {
    case 'game_pause':
    console.log('game pause');
      return state;
    default:
    return state;
  }
}

export const pauseJeuCommande = () => ({
  type: 'game_pause'
});

export default commandesReducer;
