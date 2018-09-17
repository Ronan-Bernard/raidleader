import React, { Component } from 'react';
import Commands from './components/Commands';
import Header from './components/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <nav>
          Le raid (2 / 4 groupes)
        </nav>
        <main>
          L'affichage du combat / préparation du raid
        </main>
        <Commands />
        <footer>
          Liens de bas de page
        </footer>
      </div>
    );
  }
}

export default App;
