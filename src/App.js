import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Commands from './components/Commands';
import Header from './components/Header';
import Raid from './components/Raid';
import './App.css';
import store from './stores';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
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
      </Provider>
    );
  }
}

export default App;
