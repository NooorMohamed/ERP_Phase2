import React, { Component } from 'react';
import './App.css';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import MediaCentre from './mediaCentre.js';
import Header from './header.js';
import Footer from './footer.js';
import SpeechCentre from './speechCentre.js';
import CrossP5 from './crossP5.js';

class Speeches extends Component {
  render() {
    return [
    <div key="A">
        <Header/>
    </div>,    
    <div key="B">
        <SpeechCentre/>
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
