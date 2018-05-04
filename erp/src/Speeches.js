import React, { Component } from 'react';
import './App.css';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import MediaCentre from './mediaCentre.js';
import Header from './header.js';
import Footer from './footer.js';
import SpeechCentre from './speechCentre.js';
import CrossP5 from './crossP5.js';
import ReqSpeech from './reqSpeech.js';

class Speeches extends Component {
    constructor() {
        super();
        this.numbers = [1, 2, 3];
     }
  render() {
    return [
    <div key="A">
        <Header/>
    </div>,    
    <div key="B">
        <SpeechCentre/>
        <div className="container">
         <div className="row">
          {this.numbers.map((number) => (
            <ReqSpeech/> 
        ))}
         </div>
        </div>
    </div>,
    <div key="C" id="section2">
        <CrossP5/>
    </div>,    
    <div key="E">
        <Footer/>
    </div>
    ];
  } 
}

export default Speeches;
