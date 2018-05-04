import React, { Component } from 'react';
import './App.css';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import MediaCentre from './mediaCentre.js';
import Header from './header.js';
import Footer from './footer.js';
import CrossP5 from './crossP5.js';
import Cross from './cross.js';
import Navbar from './navbar.js';
import HomePage_news from './HomePage_news.js';
import MediaGallery from './mediaGallery.js';
import VideoGallery from './videoGallery.js';
class HomePage extends Component {
  render() {
    return [
    <div key="A">
        <Header/>
    </div>,
    <div key="B">
        <Navbar/>
    </div>,
    <div>
        <HomePage_news/>
    </div>,
    <div key="C" id="section2">
        <Cross/>
    </div>, 
    <div key ="D">
        <MediaGallery/>
    </div>,
    <div key ="E">
        <VideoGallery/>
    </div>,    
     <div key="F" id="section2">
        <CrossP5/>
    </div>,     
    <div key="G">
        <Footer/>
    </div>
    ];
  } 
}

export default HomePage;
