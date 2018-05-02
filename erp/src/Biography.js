import React, { Component } from 'react';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './header.js';
import Footer from './footer.js';
import Position from './position.js';
import Award from './award.js';
import Cross from './cross.js';
import Bio from './bio.js';
import Sons from './sons.js';
import MainPosition from './mainPosition.js';
import PositionHeader from './positionHeader.js';
import AwardHeader from './awardHeader.js';

class Biography extends Component {
  render() {
    return [
    <div key="A">
        <Header />   
    </div>,    
    <div key="B">
      <Bio />
    </div>, 
     <div key="C">
      <Sons />
    </div>,     
    <div key="D" id = "section2">
      <Cross />
    </div>,
    <div key="E">
      <PositionHeader/>
    </div>,    
     <div key="F">
      <div className="container">  
        <div className="row">
       <MainPosition/>
        <MainPosition/>
        </div>
      </div>    
    </div>,     
    <div key="G">
     <div className="container">
        <div className="row">
        <Position /> 
        <Position /> 
        <Position />
        <Position />
      </div>
     </div>    
    </div>, 
     <div key="H" id = "section2">
      <Cross />
    </div>,
    <div key="I">
      <AwardHeader />
    </div>,
    ,<div key="G">
        <div className="container">
         <div className="row">
          <Award />
          <Award/>
          <Award/>
        </div>
        </div>
    </div>,
     <div key="K" id = "section2">
      <Cross />
    </div>,     
    <div key="L">
        <Footer />   
    </div>
    ];
  }
}

export default Biography;
