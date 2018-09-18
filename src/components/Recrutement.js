import React, {Component} from "react";

class Recrutement extends Component {


  render() {
    const recruesList = this.props.recrues.map((recrue) =>
      <li key={recrue.id}>{recrue.name}</li>
    );
    // console.log(this.props.recrues);

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