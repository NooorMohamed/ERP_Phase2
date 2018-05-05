import React, { Component } from 'react';
import './App.css';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Biography from './Biography.js';
import Multimedia from './Multimedia.js';
import Speeches from './Speeches.js';
import HomePage from './HomePage.js';
import News from './News/News.js';
import Details from './Details/Details.js';

class App extends Component {
  render() {
    return [
     /* <div>
        <HomePage/>
      </div>*/
        /*
      ,<div>
       <Biography/>   
      </div>,*/
      /*<div>
        <Multimedia/>
      </div>,*/
       /*<div> 
            <News/>
        </div>*/
       /*<div>
       <Speeches/>    
      </div>
      */
    <div>
        <Details/>
    </div>
    ];
  } 
}

export default App;
