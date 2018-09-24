import React, { Component } from 'react';

class ChatTab extends Component {
  state = {
    openStatus : (this.props.open) ? 'show' : 'hide'
  };

  // TODO : le openStatus n'est pas setté ;
  // mettre un peu de css, gérer le changement d'onglet
  // l'onglet chat doit être un worker se basant sur les membres du raid

  render() {
    return (
      <li className={this.state.open}>

      </li>
    );
  }
}
export default ChatTab;