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
import NewsH from './newsH.js';

class HomePage extends Component {
    constructor() {
        super();
        this.numbers = [1, 2, 3,4];
     }
  render() {
    return [
    <div key="A">
        <Header/>
    </div>,
    <div key="B">
        <Navbar/>
    </div>,
    <div key="C">
     <div className="container">
      <div className="row" style={{marginTop:'30px'}}> 
        <HomePage_news/>
        {this.numbers.map((number) => (
            <NewsH/> 
        ))}
        </div>
      </div>
    </div>,
    <div key="E" id="section2">
        <Cross/>
    </div>, 
    <div key ="F">
        <MediaGallery/>
    </div>,
    <div key ="G">
        <VideoGallery/>
    </div>,    
     <div key="H" id="section2">
        <CrossP5/>
    </div>,     
    <div key="I">
        <Footer/>
    </div>
    ];
  } 
}

export default HomePage;
