import React, { Component } from 'react';
import NavBar from './components/navbar'
import Header from './components/header'
import GameBoard from './components/gameboard.js'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavBar />
          <Header />
        </header>
        <div>
          <GameBoard />
        </div>
      </div>
    );
  }
}

export default App;
