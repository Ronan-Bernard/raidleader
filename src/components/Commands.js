import React, { Component } from 'react';
import { connect } from 'react-redux';

class Commands extends Component {

  render() {
    const {
      pauseJeu
    } = this.props;

    return(
      <ul className="commands">
        <button type="button" onClick={pauseJeu}>Pause</button>
        <li>Se plaindre</li>
        <li>Focus</li>
        <li>Déplacer groupe</li>

      </ul>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  pauseJeu: () => dispatch({type : 'game_pause'})
});

export default connect(
  null,
  mapDispatchToProps
)(Commands);
