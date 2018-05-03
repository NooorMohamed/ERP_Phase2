import React, { Component } from 'react';
import './App.css';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Biography from './Biography.js';
import MediaCentre from './mediaCentre.js';
import Header from './header.js';
import Footer from './footer.js';
import Gallery from './gallery.js';
import VideoCentre from './videoCentre.js';

class Multimedia extends Component {
  render() {
    return [
    <div key="A">
        <Header/>
    </div>,    
    <div id = "B">
        <MediaCentre/>
    </div>,
    <div key ="C">
     <div className="container">
      <div className="row">
       <Gallery/>
       <Gallery/>
       <Gallery/>
      </div>
     </div>    
    </div>,
    <div key= "D">
        <VideoCentre/>
    </div>,    
    <div key="E">
        <Footer/>
    </div>
    /*    
      <div>
       <Biography/>   
      </div>
      */
    ];
  } 
}

export default Multimedia;
