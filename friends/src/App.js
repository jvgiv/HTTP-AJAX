import React, { Component } from 'react';
import axios from 'axios'
import Friends from './Friends'


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>hi</h1>
      <Friends />
      </div>
    );
  }
}

export default App;
