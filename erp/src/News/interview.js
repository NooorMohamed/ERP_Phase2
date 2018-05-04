import React, { Component } from 'react';
import '../index.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import InterviewVideo from './interviewVideo.js'

class Interview extends Component {
     constructor() {
     super();
     this.state = {
         num : 1,
         img_src:require("../photos/04 News/ssora.jpg"),
         date: "2015",
         time:"17 February 2016",
         title: "interview with H.H",
        description: "The future, with it needs and challenges, call upon us to embark on a prepetual quest for alternarive source of energy."
      }
     }
    
     render(){
         return [
    <div id = "section2">
        <div className="container" >
         <div className="row" >
           <div className="col-md-7 col-xs-12" style={{marginTop:'25%'}}>
                <div className="noborder"  >    
                        <InterviewVideo/>                      
                </div>       
            </div> 
             <div className="col-md-4 col-xs-12 col-sm-4" style={{marginTop:'25%'}}>
                 <br/><br/>
            <div className = "thumbnail" style={{backgroundColor:'transparent',border:'none'}}>
                <h1 className = "section2_page2_row1_col1">{this.state.title}</h1>
                <hr/>
                <h1 className = "section2_page2_row1_col1">{this.state.time}</h1>
                 <p className ="page_4_paragraph2">{this.state.description}</p> 
                <div className ="icon-box" id = "sharedBox">
                  <a href="#" id = "colorIcon" className="fa fa-facebook Icons"></a>
                  <a href="#" id = "colorIcon" className="fa fa-twitter Icons" ></a>
                  <a href="#" id ="colorIcon"><span className="fa fa-whatsapp"></span></a> 
                  <a href="#" id ="colorIcon"><span className="fa fa-telegram"></span></a>
                  <a href="#" style={{float:'right',color:'#92856a'}} className="material-icons plus_icon">add_circle_outline</a>
                    <br/>
                 <div style ={{float:'right'}}>      
                    <span id="backwardVideo" className = "btn" style={{fontSize:'36px',color:'white'}}>&#x2190;</span>
                    <span id="forwardVideo"  className = "btn" style={{fontSize:'36px',color:'white'}}>&#x2192;</span>      
                  </div>
                </div>
              </div>
            </div>
          </div>
       </div>
    </div>           
         ];
     }
}

export default Interview;