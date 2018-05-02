import React from 'react';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


class Header extends React.Component {
    constructor() {
     super();
     this.state = {
         num : 1,
         img_src:"./header_photos/1.jpg"
      }
     }
      
  render() {  
    return (
    <div id = "header">
     <img  id = "swapHImg" src={require("./header_photos/1.jpg")}/>
     <img className="small" src={require("./photos/Logo.png")} width="120"/>
      
      <div className = "small2">
        <a href="#" className="icons_color"><span className="fa fa-facebook-official"></span></a>
        <a href="#" className="icons_color"><span className="fa fa-twitter"></span></a>
        <a href="#" className="icons_color"><span className="fa fa-instagram"></span></a> 
        <a href="#" className="icons_color"><span className="fa fa-navicon"></span></a>
      </div>
      <br/><br/><br/><br/>
  </div>   
    );
  }
 
}
export default Header;    
