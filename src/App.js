import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import MachineHouseBoard from './components/MachineHouseBoard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MachineHouseBoard />
      </div>
    );
  }
}

export default App;
