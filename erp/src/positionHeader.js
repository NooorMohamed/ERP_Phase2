import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


class PositionHeader extends React.Component {
    constructor() {
     super();
     this.state = {
         title1: "H.H.'S",
         title2: "Positions",
         description: "His Highness Sheikh Mohammed Bin Zayd Al Nahyan, Crown Prince of Abo Dhabi and Deputy Supreme Commander of the UAE Armed Force's, Today receives visiting Sheikh Mohammed Bin Abdulrahman Al-Thani, Qatar Minister of Foreign Affairs. at Al Shati Palace."
     }
}
      
  render() {  
    return (
    <div className = "container">    
    <div id= "section3"> 
        <div className="row">
          <div className="col-md-12">
            <h1 className="headers_color">{this.state.title1}</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-2">
            <h2 className="headers_color">{this.state.title2}</h2>
            <div className="hline"></div>
          </div>
          <div className="col-md-8" style={{bottom: '-20px'}}>
            <br/>
            <p style={{fontSize:'18px'}}>
             {this.state.description}
            </p>
          </div>
        </div>
        <br/><br/>
        </div>
        </div>
    );
  }
}
    
export default PositionHeader;    
