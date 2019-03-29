import React, {Component} from "react";
import RaidGroup from './RaidGroup';
import { connect } from 'react-redux';

class Raid extends Component {
  constructor(props) {
    super(props);
  }

  allowDrop(e) {
    e.preventDefault();
  }

  render() {
    return (
      <nav onDrop={this.allowDrop}>
        <RaidGroup group="1" />
        <RaidGroup group="2" />
        <RaidGroup group="3" />
        <RaidGroup group="4" />
      </nav>
    )
  }
}

const mapStateToProps = ({playersList}) => ({ playersList });

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Raid);
