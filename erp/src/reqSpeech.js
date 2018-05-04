import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


class ReqSpeech extends React.Component {
    constructor() {
     super();
     this.state = {
       num:1,
       img_src:"./photos/Biography/1b.jpg",      
       date:"15 february 2015",      
       title: "From a speech delivered at the Student Forum 2007",
       description :"His Highness Sheikh Mohammed Bin Zayd Al Nahyan, Crown Prince of Abo Dhabi and Deputy Supreme Commander of the UAE Armed Force's, Today receives visiting, Sheikh Mohammed Bin Abdulrahman Al-Thani, Qatar Minister of Foreign Affairs. at Al Shati Palace."
 }
}
 
  render() {  
    return (  
      <div className= "col-md-4" style={{paddingTop:'20px'}}>
        <div className="noborder">    
        <div className="thumbnail">
         <img className= "otherViewImg" src = {require(this.state.img_src)}/>    
           <div className= "thumbnail thumbclone">  
            <p className= "page_2_paragraph1"><span className="mycontent-right"style={{fontSize:'14px',fontWeight:'normal'}}><span style= {{fontWeight:'bold'}}>{this.state.num} / 8</span>&nbsp;</span>
                   &nbsp;
            {this.state.description}</p> 
            <br/>   
        </div>
       </div>       
      </div> 
     </div> 
    );
  }
}
    
export default ReqSpeech;    