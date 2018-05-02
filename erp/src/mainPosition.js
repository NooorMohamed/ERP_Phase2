import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


class MainPosition extends React.Component {
    constructor() {
     super();
     this.state = {
         num : 1,
         img_src:"./photos/Biography/1b.jpg",
         date: "17 February 2015",
         title: "Mohammed Bin Zayed receives Qatari FM",
        description: "His Highness Sheikh Mohammed Bin Zayd Al Nahyan, Crown Prince of Abo Dhabi and Deputy Supreme Commander of the UAE Armed Force's, Today receives visiting Sheikh Mohammed Bin Abdulrahman Al-Thani, Qatar Minister of Foreign Affairs. at Al Shati Palace."
     }
}
      
  render() {  
    return (
     <div className="col-md-6"style={{marginTop:'20px'}}>
      <div className="noborder">    
        <div className="thumbnail">
         <img src={require(this.state.img_src)}/> 
         <div className="thumbnail">    
            <h3 className="headers_color"style={{padding:'15px'}}>{this.state.title}</h3>
            <br/>
            <h6 className="hline"></h6>
            <br/>
            <p className="page_2_paragraph1"style={{padding:'15px'}}>{this.state.description}</p>
            <br/>
             <p style={{fontSize:'14px',fontWeight:'bold'}}>{this.state.date}</p>
             <div className ="icon-box" id="sharedBox">
				<a href="#" id = "colorIcon" className="fa fa-facebook Icons"></a>
                <a href="#" id = "colorIcon" className="fa fa-twitter Icons" ></a>
                <a href="#" id ="colorIcon"><span className="fa fa-whatsapp"></span></a>
                <a href="#" id ="colorIcon"><span className="fa fa-telegram"></span></a>
                <a href="#" style={{float:'right'}} className="material-icons plus_icon">add_circle_outline</a>
            </div>     
          </div>
        </div>
       </div>       
      </div>
    );
  }
}
    
export default MainPosition;    
