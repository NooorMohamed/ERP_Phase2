import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


class MediaGallery extends React.Component {
    constructor() {
     super();
     this.state = {
   mainHit: [
     {
       num:1,
       img_src:"./photos/Biography/1c.jpg",      
       date:"15 february 2015",      
       title: "The future, with its needs and challenges call upon us to embrark prepetual quest for alternative source of energy",
       description :"His Highness Sheikh Mohammed Bin Zayd Al Nahyan, Crown Prince of Abo Dhabi and Deputy Supreme Commander of the UAE Armed Force's, Today receives visiting, Sheikh Mohammed Bin Abdulrahman Al-Thani, Qatar Minister of Foreign Affairs. at Al Shati Palace."
    }
  ]
 }
}
 
  render() {  
    return (
     <div className="container">
      <div className= "row">
       <div className= "col-md-8 col-xs-12">
         <div className="noborder">    
          <div className="thumbnail">
           <img id = "swapImg" src={require(this.state.mainHit[0].img_src)}/>    
           <div className= "thumbnail galleryP1">   
               <p  className="page_2_paragraph1" style={{fontSize:'14px'}}><span className="mycontent-right" style={{fontSize:'18px'}}><span id='counterValue'>{this.state.mainHit[0].num}/8</span>&nbsp;</span>
                   &nbsp;
                {this.state.mainHit[0].title}
                </p>        
           </div>
          </div>
         </div>       
       </div>  
       <div className= "col-md-4 col-xs-12" style ={{marginTop:'80px'}}>
         <h1 className= "section2_page2_row1_col1">H.H.'S</h1>
         <h1 className= "section2_page2_row1_col1">Media gallery</h1>
         <h6 className= "hline"></h6>
         <p className= "page_2_paragraph1" style={{fontSize:'14px'}}>{this.state.mainHit[0].title}</p>    
         <br/> 
         <div className="icon-box" id = "sharedBox">
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
    
export default  MediaGallery;    
