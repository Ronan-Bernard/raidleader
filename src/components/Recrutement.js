import React, {Component} from "react";
import RecrueStat from './RecrueStat';
import uiUtil from '../utils/uiUtil';
import { connect } from 'react-redux';
import store from '../stores';
let _ = require('lodash');

class Recrutement extends Component {
  constructor(props) {
    super(props);
    document.onselectstart = this.avoidMouseTextSelection;
    document.ondragstart = this.dragRecrueStart;
    document.ondragend = this.dragRecrueEnd;
  }

  componentDidUpdate(prevProps, prevState) {
  }

  dragRecrueStart = (e) => {
    e.dataTransfer.setData("text/plain", e.target.getAttribute('data-recrue-key'));
    e.target.classList.add('dragging');
    store.dispatch({
      type: 'reset_hovered_slot'
    });
  }

  dragRecrueEnd = (e) => {
    e.target.classList.remove('dragging');
    let recrueToAddIndex = _.findIndex(this.props.candidats, [
      'id', parseInt(e.dataTransfer.getData("text/plain"))
    ]);
    store.dispatch({
      type: 'add_to_group',
      recrue: this.props.candidats[recrueToAddIndex]
    });
  }

  avoidMouseTextSelection(e) {
    e.preventDefault();
  }

  render() {
    const recruesList = this.props.candidats.map((recrue) =>
      <li key={recrue.id} data-recrue-key={recrue.id} draggable="true">
          <div className="pp"></div>
          <div className="name">{recrue.name}</div>
          <ul className="stats">
            <RecrueStat stat={recrue.skill} type={recrue.heroClass} />
            <RecrueStat stat={recrue.focus} type="focus" />
            <RecrueStat stat={recrue.hearts} type="hearts"/>
          </ul>
      </li>
    );

    return(
      <div className="recrutement">
        <h3>Recrutement</h3>
        <ul>
          {recruesList}
        </ul>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({});

export default connect(
  null,
  mapDispatchToProps
)(Recrutement);
