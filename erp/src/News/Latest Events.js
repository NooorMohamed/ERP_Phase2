import React, { Component } from 'react';
import '../index.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Position from '../position.js';
import MainEvents from './mainEvents';

class LatestEvents extends Component {
    constructor() {
     super();
     this.state = {
         num : 1,
         img_src:require("../photos/04 News/group.png"),
         title: "Mohammed Bin Zayed receives Qatari FM",
         description: "His Highness Sheikh Mohammed Bin Zayd Al Nahyan, Crown Prince of Abo Dhabi and Deputy Supreme Commander of the UAE Armed Force's, Today receives visiting Sheikh Mohammed Bin Abdulrahman Al-Thani, Qatar Minister of Foreign Affairs. at Al Shati Palace."
      };
       this.numbers = [1, 2, 3];
     }
    
    render(){
        return[
            <div id="section3"> 
                <div className="container">    
                    <div className="row">
                        <div className="col-md-4 col-md-offset-4">
                            <center><h1 className="headers_color">H.H.'S</h1></center>
                            <center><h2 className="headers_color">Latest Events</h2></center>
                            <hr/>
                        </div>
                    </div>
                    <br/><br/>
                    <div>
                        <MainEvents/>
                    </div>
                    <div className ="row">
                        {this.numbers.map((number) => (
                            <Position /> 
                         ))} 
                    </div>
                 <center>     
                    <span className="btn"id ="loadmorePositions">&#9670;</span>
                    <p style={{color:'#92856a'}}>load more</p>     
                 </center>       
            </div>
        </div>  
      ];
    }
  }

export default LatestEvents;