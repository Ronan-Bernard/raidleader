import React, {Component} from "react";
import RecrueStat from './RecrueStat';

class Recrutement extends Component {

  render() {
    const recruesList = this.props.recrues.map((recrue) =>
      <li key={recrue.id}>
        <div className="pp"></div>
        <div className="name">{recrue.name}</div>
        <ul className="stats">
          <RecrueStat stat={recrue.skill} type="skill" />
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