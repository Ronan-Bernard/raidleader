import React, { Component } from 'react';

class ChatTab extends Component {
  state = {
    open : this.props.open
  };
  
  componentWillReceiveProps(nextProps) {
    if (this.state.open !== nextProps.open) {
      this.setState({
        open: nextProps.open
      });
    }
  }

  render() {
    return (
      <li className={this.state.open}>

      </li>
    );
  }
}
export default ChatTab;