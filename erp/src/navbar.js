import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';



class Navbar extends React.Component {
  render() {  
    return (
   <div className="container">
     <div id= "section1">    
       <h1 style ={{fontWeight:'bold'}}>H.H.'S</h1>
       <h1 className="section2_page2_row1_col1">Media Center</h1>
       <br/>
       <div className= "navbar">    
        <div className= "hline " style={{float:'left', width:'30%', marginTop:'25px'}}></div> 
        <a  href = "#">Latest News</a>
          
        <a href = "#">Events</a> 
         
        <a  href = "#">Interviews</a> 
          
        <a href ="#">Articles</a> 
       </div>
      </div>
    </div>
    );
  }
}

export default Navbar; 