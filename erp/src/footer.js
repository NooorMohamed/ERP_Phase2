import React from 'react';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Footer extends React.Component {
      
  render() {  
    return [
    <div className = "row">
        <div className="col-md-2">
        </div>
        
        <div className="col-md-2">
         <img src={require("./photos/Logo.png")} width="100"/>
        </div>

        <div className="col-md-2 headers_color">
         <p> Social</p>
            <a href="#" className="icons_color"><span  className="fa fa-facebook-official"></span></a>
            <a href="#" className="icons_color"><span className="fa fa-twitter"></span></a>
            <a href="#" className="icons_color"><span className="fa fa-whatsapp"></span></a> 
            <a href="#" className="icons_color"><span className="fa fa-telegram"></span></a>
        </div>
        
        <div className="col-md-2 headers_color">
         <p> Mobile App</p>
            <a href="#" className="icons_color"><span className="fa fa-android"></span></a> 
            <a href="#" className="icons_color"><span className="fa fa-apple"></span></a>
        </div>
        
         <div className="col-md-2 headers_color">
             <div className="icons_color" style={{fontSize:'11px'}}><span className="fa fa-star"></span>
                 <br/><br/>copyrighs@2016 Crown Prince Court Emirate of Abu Dhabi</div>
        </div>
        
        
    </div>
 ,<div className="footer">
    <a href="#" className="whiteAnchor"> Bio</a>
     <a href="#" className="aqAnchor"> Gallary</a>
     <a href="#" className="whiteAnchor"> News</a>
     <a href="#" className="whiteAnchor"> Contacts</a>
</div>
        ];
  }
}
    
export default Footer;    
