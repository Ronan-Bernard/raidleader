import React, {Component} from "react";

class Raid extends Component {
  allowDrop(e) {
    e.preventDefault();
  }

  render() {
    return (
      <nav onDrop={this.allowDrop}>
        Le raid (2 / 4 groupes)
      </nav>
    )
  }
}

export default Raid;