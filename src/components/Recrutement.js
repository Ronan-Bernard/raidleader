import React, {Component} from "react";
import RecrueStat from './RecrueStat';
import { connect } from 'react-redux';
import store from '../stores';
let _ = require('lodash');

let draggedRecrueKey;

class Recrutement extends Component {
  constructor(props) {
    super(props);
    document.onselectstart = this.avoidMouseTextSelection;
    document.ondragstart = this.dragRecrueStart;
    document.ondragend = this.dragRecrueEnd;

    this.state = {
      candidats: this.props.candidats
    }
  }

  dragOverAll = (e) => {
    console.log('dragOverAll');
    this.lastDragOverEvent = e;
  }

  dragRecrueStart = (e) => {
    draggedRecrueKey = e.target.getAttribute('data-recrue-key');
    e.dataTransfer.setData("text/plain", draggedRecrueKey);
    e.target.classList.add('dragging');
    window.hoveredSlot = null;
    document.ondragover = this.dragOverAll;
  }

  dragRecrueEnd = (e) => {
    e.target.classList.remove('dragging');
    let recrueToAddIndex = _.findIndex(this.props.candidats, [
      'id', parseInt(draggedRecrueKey, 10)
    ]);
    store.dispatch({
      type: 'add_to_group',
      recrue: this.props.candidats[recrueToAddIndex],
      e: this.lastDragOverEvent
    });
    document.ondragover = null;
  }

  avoidMouseTextSelection(e) {
    e.preventDefault();
  }

  render() {
    const {
      candidats
    } = this.props;

    let recruesList = candidats.map((recrue) =>
      <li key={recrue.id}
          data-recrue-key={recrue.id}
          draggable={recrue.available}>
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

const mapStateToProps = (state) => {
  if (state !== null
    && state.raidGroupReducer !== null
    && state.raidGroupReducer.candidats !== undefined) {
      let updatedCandidats = [];
      for (let i = 0; i < state.raidGroupReducer.candidats.length; i++) {
        updatedCandidats.push(Object.assign(state.raidGroupReducer.candidats[i]));
      }
    return {
      candidats: updatedCandidats,
    }
  } else {
    return state;
  }
}

export default connect(
  mapStateToProps
)(Recrutement);
