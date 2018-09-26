import React, {Component} from 'react';

class RecrueStat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stat: props.stat,
      type: props.type
    }
  }

  componentDidUpdate(props) {
    this.state = {
      stat: props.stat,
      type: props.type
    };
  }

  render() {
    return (
      <li className={this.state.type}>
        <i className={"ra ra-" + this.state.type} />
        <div className="valueWrapper">
          <div className="value" style={{height: this.state.stat * 5 + 'px' }}></div>
        </div>
      </li>
    );
  }
}

export default RecrueStat;