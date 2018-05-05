import React, { Component } from 'react';
import '../index.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Event from '../events.js';
import MainEvents from './mainEvents.js';

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
                        <div className="col-md-12">
                           <center><h1 className="headers_color">H.H.'S</h1></center>
                            <center><h2 className="headers_color">Latest Events</h2></center>
                            <center><hr style={{width:'25%'}}/></center>
                        </div>
                    </div>
                    <br/><br/>
                    <div>
                        <MainEvents/>
                    </div>
                    <div className ="row" style={{marginTop:'20px'}}>
                        {this.numbers.map((number) => (
                            <Event /> 
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