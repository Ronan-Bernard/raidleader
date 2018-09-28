import React, { Component } from 'react';
import ChatTab from "./ChatTab";

class Chat extends Component {
  state = {
    openChat: 'show',
    openRanking: 'hide',
    openHelp: 'hide'
  }

  open(e, tab) {

  }

  render() {
    return (
      <div className="chat-wrapper">
        <ul className="chat-tabs">
          <li onClick={this.open('chat')} className={this.state.openChat}>Chat</li>
          <li onClick={this.open('ranking')} className={this.state.openRanking}>Classement</li>
          <li onClick={this.open('help')} className={this.state.openHelp}>?</li>
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