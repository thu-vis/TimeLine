import React, { Component } from 'react';
import './App.css';
import Renderer from './renderer';
import * as spec from './spec.json';
import * as data from './data.json';

class App extends Component {
  render() {
    spec.data[0].values = data;
    return (
      <div className="App">
        <Renderer spec={spec}/>
      </div>
    );
  }
}

export default App;
