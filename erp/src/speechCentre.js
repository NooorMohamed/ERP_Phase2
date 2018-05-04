import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


class SpeechCentre extends React.Component {
    constructor() {
     super();
     this.state = {
     speeches: [
      {
       num:1,      
       img_src:"./photos/Biography/1a.jpg",      
       date:"15 february 2015",      
       title: "From a speech delivered at the Student Forum 2007",
       description :"His Highness Sheikh Mohammed Bin Zayd Al Nahyan, Crown Prince of Abo Dhabi and Deputy Supreme Commander of the UAE Armed Force's, Today receives visiting Sheikh Mohammed Bin Abdulrahman Al-Thani, Qatar Minister of Foreign Affairs. at Al Shati Palace."
      }, 
      {
       num:2,
       img_src:"./photos/Biography/1a.jpg",      
       date:"15 february 2015",      
       title: "From a speech delivered at the Student Forum 2007",
       description :"His Highness Sheikh Mohammed Bin Zayd Al Nahyan, Crown Prince of Abo Dhabi and Deputy Supreme Commander of the UAE Armed Force's, Today receives visiting Sheikh Mohammed Bin Abdulrahman Al-Thani, Qatar Minister of Foreign Affairs. at Al Shati Palace."
     },
     {
      num:3,     
      img_src:"./photos/Biography/1a.jpg",      
       date:"15 february 2015",      
       title: "From a speech delivered at the Student Forum 2007",
       description :"His Highness Sheikh Mohammed Bin Zayd Al Nahyan, Crown Prince of Abo Dhabi and Deputy Supreme Commander of the UAE Armed Force's, Today receives visiting Sheikh Mohammed Bin Abdulrahman Al-Thani, Qatar Minister of Foreign Affairs. at Al Shati Palace."
     }
   ],
   mainspeech: [
     {
       num:1,
       img_src:"./photos/Biography/1c.jpg",      
       date:"15 february 2015",      
       title: "From a speech delivered at the Student Forum 2007",
       description :"His Highness Sheikh Mohammed Bin Zayd Al Nahyan, Crown Prince of Abo Dhabi and Deputy Supreme Commander of the UAE Armed Force's, Today receives visiting Sheikh Mohammed Bin Abdulrahman Al-Thani, Qatar Minister of Foreign Affairs. at Al Shati Palace."
    }
  ]
 }
}
  render() {  
    return (
     <div className="container">
       <div id="section1_page3">
         <h1 style={{fontWweight:'bold'}}>H.H.'S</h1>
         <h1 className="section2_page2_row1_col1">Latest Speeches</h1>
         <div className="hline"style={{width:'25%'}}></div>
         <br/>
         <div className="row">
          <div className="col-md-8 col-xs-12">
             <div className="noborder">      
               <div className="thumbnail">
                 <img id="swapImg" src={require(this.state.mainspeech[0].img_src)}/>
              </div>
             </div>     
          </div>
             
         <div className="col-md-4">
          <div className="noborder">
           <div className="thumbnail thumbnailp3">
              <p style={{fontSize:'22px',paddingLeft:'40px',paddingTop:'10px'}}>{this.state.speeches[0].description}</p>
            <hr/>
              <p style={{fontSize:'20px',paddingLeft:'40px'}}><span className="mycontent-right"style={{fontSize:'20px',fontWeight:'normal'}}><span style={{fontWeight:'bold'}}id='counterValue'>{this.state.speeches[0].num}/8</span>&nbsp;</span>
                   &nbsp;
             {this.state.speeches[0].title}</p>     
              <div className="icon-box" id = "sharedBox" > 
                <a href="#" id = "colorIcon" className="fa fa-facebook Icons"></a>
                <a href="#" id = "colorIcon" className="fa fa-twitter Icons" ></a>
                <a href="#" id = "colorIcon"><span className="fa fa-whatsapp"></span></a>
                <a href="#" id = "colorIcon"><span className="fa fa-telegram"></span></a> 
               <div style={{float:'right'}}>      
                <span id="backward" className="btn" style={{fontSize:'20px', marginLeft:'50px'}}>&#x2190;</span>
                <span id="forward"  className="btn" style={{fontSize:'20px'}}>&#x2192;</span>      
               </div>
              </div>   
          </div>
         </div>      
        </div>     
       </div>
      
    /* <div className="row">
         <sp/>
     </div>
     */
    </div>
   </div>  
    );
  }
}
    
export default SpeechCentre;    
