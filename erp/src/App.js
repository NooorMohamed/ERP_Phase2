import React, { Component } from 'react';
import './App.css';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Biography from './Biography.js';

class App extends Component {
  render() {
    return (
      <div>
       <Biography/>   
      </div>
    );
  } 
}

export default App;
