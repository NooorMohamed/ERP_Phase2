import React, { Component } from 'react';
import './App.css';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Biography from './Biography.js';
import Multimedia from './Multimedia.js';
import Speeches from './Speeches.js'
import News from './News/News.js';

class App extends Component {
  render() {
    return [
   /* <div>
     <Speeches/>    
    </div>*/
    <div>
        <News />
    </div>
        /*
      ,<div>
       <Biography/>   
      </div>,
      <div>
        <Multimedia/>
      </div>   
      */
    ];
  } 
}

export default App;
