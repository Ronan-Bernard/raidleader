import React, { Component } from 'react';
import Commands from './components/Commands';
import Header from './components/Header';
import Raid from './components/Raid';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Raid />
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
