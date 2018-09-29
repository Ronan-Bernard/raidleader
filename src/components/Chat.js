import React, { Component } from 'react';
import ChatTab from "./ChatTab";

class Chat extends Component {
  state = {
    chat: 'show',
    ranking: 'hide',
    help: 'hide'
  }

  open(tab) {
    console.log('open');
    if (tab === 'chat') {
      this.setState({
        chat: 'show',
        ranking: 'hide',
        help: 'hide'
      });
    } else if (tab === 'ranking') {
      this.setState({
        chat: 'hide',
        ranking: 'show',
        help: 'hide'
      });
    } else if (tab === 'help') {
      this.setState({
        chat: 'hide',
        ranking: 'hide',
        help: 'show'
      });
    }
  }

  render() {
    return (
      <div className="chat-wrapper">
        <ul className="chat-tabs">
          <li onClick={() => {this.open('chat')}} className={this.state.chat}>Chat</li>
          <li onClick={() => {this.open('ranking')}} className={this.state.ranking}>Classement</li>
          <li onClick={() => {this.open('help')}} className={this.state.help}>?</li>
        </ul>
        <ul className="chat-contents">
          <ChatTab key="chat" open={this.state.chat} />
          <ChatTab key="ranking" open={this.state.ranking} />
          <ChatTab key="help" open={this.state.help} />
        </ul>
      </div>
    );
  }
}

export default Chat;