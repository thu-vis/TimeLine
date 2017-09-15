import React, { Component } from 'react';
import './App.css';
import Renderer from './renderer';
import * as spec from './spec.json';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Renderer spec={spec} tooltip={true}/>
      </div>
    );
  }
}

export default App;
