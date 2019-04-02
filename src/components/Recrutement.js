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

    this.state = {
      candidats: this.props.candidats
    }
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
      'id', parseInt(e.dataTransfer.getData("text/plain"), 10)
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
    && state.recrutementReducer !== null
    && state.recrutementReducer.candidats !== undefined) {
      let updatedCandidats = [];
      for (let i = 0; i < state.recrutementReducer.candidats.length; i++) {
        updatedCandidats.push(Object.assign(state.recrutementReducer.candidats[i]));
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
