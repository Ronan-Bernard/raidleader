import React, {Component} from "react";
import RecrueStat from './RecrueStat';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import store from '../stores';

class Recrutement extends Component {
  hoveredGroup;
  constructor(props) {
    super(props);
    document.onselectstart = this.selectStart;
  }

  handleDragOverRaidEvents(e) {
    if (Recrutement.prototype.isOverElement(e, 'group1')) {
      store.dispatch({
        type: 'register_hovered_group',
        group: 'group1'
      });
    } else {
      store.dispatch({
        type: 'reset_hovered_group',
      });
    }
  }

  isOverElement(e, elementId) {
    let item = document.getElementById(elementId);
    return (item.offsetLeft <= e.clientX
      && e.clientX <= (item.offsetLeft + item.offsetWidth)
      && item.offsetTop <= e.clientY
      && e.clientY <= (item.offsetTop + item.offsetHeight));
  }

  dragRecrueStart(e) {
    e.dataTransfer.setData("text/plain", e.target.id);
    e.target.classList.add('dragging');
    document.ondragover = Recrutement.prototype.handleDragOverRaidEvents;
  }

  dragRecrueEnd(e) {
    e.target.classList.remove('dragging');
    if (Recrutement.hoveredGroup) {
      console.log('drop sur' + Recrutement.hoveredGroup);
    }
    store.dispatch({
      type: 'drop_hovered_group'
    });
  }

  selectStart(e) {
    e.preventDefault();
  }

  render() {
    const recruesList = this.props.candidats.map((recrue) =>
      <li key={recrue.id} draggable="true" onDragStart={this.dragRecrueStart} onDragEnd={this.dragRecrueEnd}>
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

const mapDispatchToProps = dispatch => ({
  hoverGroup: (group) => dispatch({ type : 'register_hovered_group', group: group})
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Recrutement);
