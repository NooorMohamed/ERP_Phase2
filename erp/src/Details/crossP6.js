import React, { Component } from 'react';
import '../index.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Event from '../events.js';

class Cross extends Component {
 constructor() {
     super();
     this.fullNews = {
       num:1,
       img_src:require("../photos/02 Homepage/anotherphoto.png"),      
       date:"15 february 2015",      
       title: "The future, with its needs and challenges call upon us to embrark prepetual quest for alternative source of energy",
       description:"His Highness Sheikh Mohammed Bin Zayd Al Nahyan, Crown Prince of Abo Dhabi and Deputy Supreme Commander of the UAE Armed Force's, Today receives visiting, Sheikh Mohammed Bin Abdulrahman Al-Thani, Qatar Minister of Foreign Affairs. at Al Shati Palace." 
     };
     this.numbers = [1, 2, 3];
}
render() {  
    return [
    <div id="section2" >
        <div className = "container">
            <div className = "row" style={{marginTop:'50px'}}>
               {this.numbers.map((number) => (
                            <Event /> 
                ))} 
            </div>
            <center>     
            <span className ="btn" id = "loadmore">&#9670;</span>
            <p style ={{color:'#92856a'}}>load more</p>     
            </center>     
        </div>
    </div>    
];
  }
}
export default Cross;