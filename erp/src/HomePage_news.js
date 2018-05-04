import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


class HomePage_news extends React.Component {
    constructor() {
     super();
     this.state = {
   mainHit: [
     {
       num:1,
       img_src:"./photos/Biography/1a.jpg",      
       date:"15 february 2015",      
       title: "From a speech delivered at the Student Forum 2007",
       description :"His Highness Sheikh Mohammed Bin Zayd Al Nahyan, Crown Prince of Abo Dhabi and Deputy Supreme Commander of the UAE Armed Force's, Today receives visiting, Sheikh Mohammed Bin Abdulrahman Al-Thani, Qatar Minister of Foreign Affairs. at Al Shati Palace."
    }
  ]
 }
}
 
  render() {  
    return (  
       <div className= "col-md-8 col-xs-12">
        <div className="noborder">    
        <div className="thumbnail">
         <img src={require(this.state.mainHit[0].img_src)}/>    
           <div className= "thumbnail" style={{marginLeft:'30px'}}>      
            <h3 className= "headers_color">{this.state.mainHit[0].title}</h3>
            <br/>
            <h6 className= "hline"></h6>
            <br/>
            <p className="page_2_paragraph1" style={{fontSize:'14px'}}> {this.state.mainHit[0].description}</p>
            <br/>
             <p style={{fontSize:'14px',fontWeight:'bold'}}> {this.state.mainHit[0].date}</p>
             <div className="icon-box" id = "sharedBox">
				<a href="#" id = "colorIcon" className="fa fa-facebook Icons"></a>
                <a href="#" id = "colorIcon" className="fa fa-twitter Icons" ></a>
                <a href="#" id ="colorIcon"><span className="fa fa-whatsapp"></span></a>
                <a href="#" id ="colorIcon"><span className="fa fa-telegram"></span></a>
            </div>     
          </div>
        </div>
       </div>       
      </div>
    );
  }
}
    
export default HomePage_news;    
