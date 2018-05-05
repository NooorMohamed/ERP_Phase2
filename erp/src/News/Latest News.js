import React, { Component } from 'react';
import '../index.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class LatestNews extends Component {
     constructor() {
     super();
     this.state = {
         num : 1,
         img_src:require("../photos/04 News/ssora.jpg"),
         date: "2015",
         time:"17 February 2016",
         title: "Mohammed Bin Zayed receives Qatari FM",
        description: "His Highness Sheikh Mohammed Bin Zayd Al Nahyan, Crown Prince of Abo Dhabi and Deputy Supreme Commander of the UAE Armed Force's, Today receives visiting Sheikh Mohammed Bin Abdulrahman Al-Thani, Qatar Minister of Foreign Affairs. at Al Shati Palace."
      }
     }
      
    render(){
         return [
    <div className = "container">
      <div id = "section1">
        <h1 style = {{fontWeight:'bold'}}>H.H.'S</h1>
         <h1 className = "section2_page2_row1_col1">Latest News</h1>
         <div className = "hline"  style = {{width:'25%'}}></div>
         <br/><br/>
           <div className="row">
            <div className="col-md-8">
                <div className="thumbnail">
                    <img src={this.state.img_src}/>
                </div>
             </div>
             <div className="col-md-4">
                 <br/><br/>
                <div className="overlap">
                    <div className="box">
                        <h2 className="section2_page2_row1_col1"style={{fontSize:'20px'}}>{this.state.time}</h2>
                        <h1 className="section2_page2_row1_col1"style={{fontSize:'22px'}}>{this.state.title}</h1>
                        <hr/>
                        <p style={{fontSize:'16px',fontWeight:'bold'}}>{this.state.description}
                        </p>
                        <a href="#" className="icons_color"><span  className="fa fa-facebook-official"></span></a>
                        <a href="#" className="icons_color"><span className="fa fa-twitter"></span></a>
                        <a href="#" className="icons_color"><span className="fa fa-whatsapp"></span></a>
                        <a href="#" className="icons_color"><span className="fa fa-telegram"></span></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
 </div>
        ];
    }
}

export default LatestNews;
