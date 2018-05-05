import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


class Event extends React.Component {
    constructor() {
     super();
     this.state = {
         num : 1,
         img_src:"./photos/Biography/1a.jpg",
         date: "2015",
         title: "Mohammed Bin Zayed receives Qatari FM",
        description: "His Highness Sheikh Mohammed Bin Zayd Al Nahyan, Crown Prince of Abo Dhabi and Deputy Supreme Commander of the UAE Armed Force's, Today receives visiting Sheikh Mohammed Bin Abdulrahman Al-Thani, Qatar Minister of Foreign Affairs. at Al Shati Palace."
      }
     }
      
  render() {  
    return (
        <div className = "col-md-4">
        <div className = "thumbnail" style={{border:'1px solid #e5e5e5'}}>
          <div className="box"> 
              <h3 className = "headers_color">{this.state.date}</h3>
              <h6 className= "hline" style={{color:'#92856a'}}></h6>
              <p className ="page_2_paragraph1"> {this.state.description}</p>
              <br/>   
              <div className ="icon-box" id = "sharedBox">
               <a href="#" id = "colorIcon" className="fa fa-facebook Icons"></a>
               <a href="#" id = "colorIcon" className="fa fa-twitter Icons" ></a>
               <a href="#" id ="colorIcon"><span className="fa fa-whatsapp"></span></a>
               <a href="#" id ="colorIcon"><span className="fa fa-telegram"></span></a>
            </div>
          </div>
       </div>
     </div>
    );
  }
}
    
export default Event;    
