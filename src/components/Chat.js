import React, { Component } from 'react';
import ChatTab from "./ChatTab";

class Chat extends Component {
  state = {
    openChat: true,
    openRanking: false,
    openHelp: false
  }

  open(e, tab) {

  }

  render() {
    return (
      <div className="chat-wrapper">
        <ul className="chat-tabs">
          <li onClick={this.open('chat')}>Chat</li>
          <li onClick={this.open('ranking')}>Classement</li>
          <li onClick={this.open('help')}>?</li>
        </ul>
        <ul className="chat-contents">
          <ChatTab key="chat" open={this.state.openChat} />
          <ChatTab key="ranking" open={this.state.openRanking} />
          <ChatTab key="help" open={this.state.openHelp} />
        </ul>
      </div>
    );
  }
}

export default Chat;