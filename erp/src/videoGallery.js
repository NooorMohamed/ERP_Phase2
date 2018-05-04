import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


class VideoGallery extends React.Component {
    constructor() {
     super();
     this.state = {
   mainHit: [
     {
       num:1,
       vid_src:"https://www.youtube.com/embed/bQLCZOG202k?autoplay=0",  
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
     <div className= "row" style={{marginTop:'40px'}}>
        <div className= "col-md-4 col-xs-12" style ={{top:'100',paddingBottom:'80px'}}>
         <h1 className= "section2_page2_row1_col1">H.H.'S</h1>
         <h1 className= "section2_page2_row1_col1">Video center</h1>
         <h6 className= "hline"></h6>
         <p className= "page_2_paragraph1" style={{fontSize:'14px'}}>{this.state.mainHit[0].title}</p>    
         <br/> <br/> 
        </div>
         <div className="col-md-8 col-xs-12">
         <div className="noborder">    
          <div className="thumbnail">
            <iframe id="otherViewImg" src={this.state.mainHit[0].vid_src} style={{width:'100%',height:'100%'}}></iframe>   
           <div className= "thumbnail galleryP1">   
               <p className="page_2_paragraph1" style={{fontSize:'14px'}}>
                   {this.state.mainHit[0].title}
               </p>        
           </div>
          </div>
         </div>       
        </div>  
       </div>
      </div>
    );
  }
}
    
export default  VideoGallery;    
