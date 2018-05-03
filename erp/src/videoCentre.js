import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import MainVideo from './mainVideo.js';
import MainPosition from './mainPosition.js';
import Videos from './videos.js';

class VideoCentre extends React.Component {
    constructor() {
     super();
     this.state = {
         num : 1,
         img_src:"./switch_photos/1.jpg",
         date: "17 February 2015",
         title: "From a speech delivered at the Student Forum 2007",
        description: "His Highness Sheikh Mohammed Bin Zayd Al Nahyan, Crown Prince of Abo Dhabi and Deputy Supreme Commander of the UAE Armed Force's, Today receives visiting Sheikh Mohammed Bin Abdulrahman Al-Thani, Qatar Minister of Foreign Affairs. at Al Shati Palace."
     }
}
      
  render() {  
    return (
      <div id = "section2">
      <div className="container">
        <div className="rowAdj">
         <div className="row">
          <div className="col-md-12">    
           <h1 className="section2_page2_row1_col1"style={{marginTop:'200px'}}>H.H.'S</h1>
           <h1 className="section2_page2_row1_col1">Video Center</h1>
           <div className="hline"style={{width:'25%'}}></div>
           <br/>
          </div>      
         </div>
        </div>
        <div className="row">
         <MainVideo/>
         <Videos/>
         <Videos/>
         <Videos/>
         <Videos/>    
        </div>
      </div>
      </div>  
    );
  }
}
    
export default VideoCentre;    
