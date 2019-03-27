import React, {Component} from "react";
import RecrueStat from './RecrueStat';
import uiUtil from '../utils/uiUtil';
import { connect } from 'react-redux';
import store from '../stores';

class Recrutement extends Component {
  constructor(props) {
    super(props);
    document.onselectstart = this.avoidMouseTextSelection;
    document.ondragstart = this.dragRecrueStart;
    document.ondragend = this.dragRecrueEnd;
  }

  dragRecrueStart(e) {
    e.dataTransfer.setData("text/plain", e.target.getAttribute('data-recrue-key'));
    e.target.classList.add('dragging');
  }

  dragRecrueEnd(e) {
    e.target.classList.remove('dragging');
    // TODO trouver recrue dans props.candidats et renvoyer tout l'objet
    let addRecrue = store.dispatch({
      type: 'add_to_group',
      recrueKey: e.dataTransfer.getData("text/plain")
    });
  }

  handleAddRecrue(infos) {
    // TODO ici on va vérifier recrueKey et slot
    // si ok, on rajoute la recrue au slot indiqué
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

const mapStateToProps = ({ recruesList}) => ({ recruesList });

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Recrutement);
