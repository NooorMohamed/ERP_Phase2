import React, { Component } from 'react';
import '../index.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class FullNews extends Component {
 constructor() {
     super();
     this.fullNews = {
       num:1,
       img_src:require("../photos/Biography/ssora.jpg"),      
       date:"15 february 2015",      
       title: "The future, with its needs and challenges call upon us to embrark prepetual quest for alternative source of energy",
       description:"His Highness Sheikh Mohammed Bin Zayd Al Nahyan, Crown Prince of Abo Dhabi and Deputy Supreme Commander of the UAE Armed Force's, Today receives visiting, Sheikh Mohammed Bin Abdulrahman Al-Thani, Qatar Minister of Foreign Affairs. at Al Shati Palace." 
    }
}
render() {  
    return [
    <div className ="container">
        <br/><br/>
        <div className="col-md-offset-1 col-md-10">
            <div className="thumbnail">
                <img src={ this.fullNews.img_src}/>
                <div className="overlapup">
                <p className="section2_page2_row1_col1" style={{fontSize:'20px'}}>{this.fullNews.title}</p>
                <hr/>
                <p style={{fontSize:'14px',fontWeight:'bold'}}>{this.fullNews.description}</p>
                <div className ="icon-box" >
                    <a href="#" className="fa fa-facebook icon-box"></a>
                    <a href="#" className="fa fa-twitter icon-box" ></a>
                    <a href="#" className="fa fa-whatsapp icon-box" ></a>
                    <a href="#" className="fa fa-telegram icon-box" ></a>
                    <span  style={{color:'#92856a',float:'right',fontWeight:'bold'}}>{this.fullNews.date}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    ];
  }
}
export default FullNews;