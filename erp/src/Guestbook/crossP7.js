import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';



class Cross extends React.Component {   
  render() {  
    return (
   <div id = "section2">
      <div className = "container">
       <div className = "row">
        <div className = "col-md-7 col-md-offset-0 col-xs-8 col-xs-offset-2" style={{marginTop:'20%'}}>
            <br/><br/>
            <h2 className="headers_color">Top Visitors</h2>
            <div className = "thumbnail" style={{border:'none',backgroundColor:'transparent'}}>
                <img src={require("../photos/DiamondImg.png")} style={{transform:'rotate(-45deg)'}}/>
            </div>
             <div style = {{float:'right'}}> 
                    <p id="name" style={{color:'white'}}>Mohamed Ahmed</p>
                    <span id="backward" className = "btn" style={{fontSize:'36px',color:'white'}}>&#x2190;</span>
                    <span id="forward"  className = "btn" style={{fontSize:'36px',color:'white'}}>&#x2192;</span>      
            </div>
        </div>
        <div className = "col-md-3 col-xs-12 col-sm-3" style={{marginTop:'30%'}}>
            <div className = "thumbnail" style={{backgroundColor:'transparent',border:'none'}}>
                <h3 className = "headers_color">We are pleased that you visited us</h3>
                <br/>
                <p style={{color:'white'}}>Please enter your Name and Email</p>
                <br/>
                <form>
                    <input className="headers_color" type="text" placeholder="Your name"/><br/><br/>
                    <input className="headers_color" type="text" placeholder="Your email"/>
                    <br/><br/><br/>
                    <input className="headers_color" type="submit"/>
                </form>
                </div>
            </div>
        </div>   
       </div>       
     </div>    
    );
  }
}

export default Cross; 