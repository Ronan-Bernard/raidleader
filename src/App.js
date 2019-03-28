import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Commands from './components/Commands';
import Header from './components/Header';
import Raid from './components/Raid';
import './App.css';
import store from './stores';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playersList: this.loadPlayersList()
    }
  }

  loadPlayersList = () => {
    // TODO charger depuis la mémoire locale ou le serveur
    let list = {};
    for (let i = 1; i<= 20; i++) {
      list['player' + i] = {};
    }
    return list;
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header playersList={this.state.playersList} />
          <Raid />
          <main>
            L'affichage du combat / préparation du raid
          </main>
          <Commands />
          <footer>
            Liens de bas de page
          </footer>
        </div>
      </Provider>
    );
  }
}

export default App;
