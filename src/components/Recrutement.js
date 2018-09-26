import React, {Component} from "react";
import RecrueStat from './RecrueStat';

class Recrutement extends Component {
  constructor(props) {
    super(props);
    document.onselectstart = this.selectStart;
  }

  dragRecrueStart(e) {
    e.dataTransfer.setData("text/plain", e.target.id);
    e.target.classList.add('dragging');
  }

  dragRecrueEnd(e) {
    e.target.classList.remove('dragging');
  }

  selectStart(e) {
    e.preventDefault();
  }

  render() {
    const recruesList = this.props.recrues.map((recrue) =>
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

export default Recrutement;