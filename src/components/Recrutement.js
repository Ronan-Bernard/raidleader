import React, {Component} from "react";

class Recrutement extends Component {

  render() {
    const recruesList = this.props.recrues.map((recrue) =>
      <li key={recrue.id}>
        <div className="pp"></div>
        <div className="name">{recrue.name}</div>
        <ul className="stats">
          <li className="skill"><i className="ra ra-sword"></i>{recrue.skill}</li>
          <li className="focus"><i className="ra ra-aware"></i>{recrue.focus}</li>
          <li className="cheerfulness">
            <i className="ra ra-hearts"></i>
            <div className="value" height={recrue.cheerfulness * 10}></div>
            </li>
        </ul>
      </li>
    );

    return(
      <div className="recrutement">
        <h3>Recrutement (4/5 diagrammes barre)</h3>
        <ul>
          {recruesList}
        </ul>
      </div>
    );
  }
}

export default Recrutement;