import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
      </div>

    );
  }
}

class Sidebar extends Component {
  render() {
    return (
      <h2>sidebar</h2>
    );
  }
}

export default App;
