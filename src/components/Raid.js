import React, {Component} from "react";
import RaidGroup from './RaidGroup';
import { connect } from 'react-redux';

class Raid extends Component {
  constructor(props) {
    super(props);
    this.group1 = [];
    this.group2 = [];
    this.group3 = [];
    this.group4 = [];
    // retrieve players from save
  }

  allowDrop(e) {
    var data = e.dataTransfer.getData('text/plain');
    e.preventDefault();
  }

  addPlayerToGroup = (player, group) => {
    // TODO : rajouter un spot et changer le spot de tous les player suivants
    group[player.id] = player;
  }

  render() {
    return (
      <nav onDrop={this.allowDrop}>
        <RaidGroup players={this.group1} group="1" />
        <RaidGroup players={this.group2} group="2" />
        <RaidGroup players={this.group3} group="3" />
        <RaidGroup players={this.group4} group="4" />
      </nav>
    )
  }
}

const mapStateToProps = ({group1}) => ({ group1 });

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Raid);
