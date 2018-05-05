import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';



class CrossP5 extends React.Component {
    constructor() {
     super();
     this.state = {
         img_src:require("../photos/DiamondImg.png"),
         title: "Articles",
         date:"17 February 2016",
         article: "The future, with it needs and challenges, call upon us to embark on a prepetual quest for alternarive source of energy."
     }
}    
  render() {  
    return (
        <div id = "section4">
      <div className = "container">
       <div className = "containerClone">     
        <div className = "row">  
                 <div className="col-md-5 col-md-offset-2">
                    <br/><br/>
                    <div className="textWithDiamond">
                        <h1 className="headers_color" style={{color:'#4b4c4e'}}>H.H.'S</h1>
                        <h1 className="headers_color" style={{fontSize:'44px',color:'#4b4c4e'}}>{this.state.title}</h1>
                        <br/>
                        <div className = "hline"></div>
                        <br/>
                        <p style={{color:'#4b4c4e',fontSize:'28px'}} >{this.date}</p>
                        <p className ="page_4_paragraph2">{this.state.article}</p>
                        
                        <a href="#" className="icons_colorCross" style={{color:'4b4c4e'}}><span  className="fa fa-facebook-official"></span></a>
                        <a href="#" className="icons_colorCross" style={{color:'4b4c4e'}}><span className="fa fa-twitter"></span></a>
                        <a href="#" className="icons_colorCross" style={{color:'4b4c4e'}}><span className="fa fa-whatsapp"></span></a>
                        <a href="#" className="icons_colorCross"style={{color:'4b4c4e'}}><span className="fa fa-telegram"></span></a>
                        <a href="#" style={{float:'right',color:'4b4c4e'}} className="material-icons plus_icon">add_circle_outline</a>
                    </div>
                     <div style={{float:'right'}}>      
                        <span id="backward" className="btn" style={{fontSize:'36px',marginLeft:'50px',color:'#4b4c4e'}}>&#x2190;</span>
                        <span id="forward"  className="btn" style={{fontSize:'36px',color:'#4b4c4e'}}>&#x2192;</span>      
                     </div>
                     <br/>
                </div>
               <div className="col-md-offset-1 col-md-3 col-xs-offset-3 col-xs-3 Diamond"style={{marginTop:'320px',marginLeft:'150px'}}>
                  <div className = "thumbnail picHug">
                   <img id="swapDImg" src={require("../photos/DiamondImg.png")}/>
                  </div>
                </div>   
            </div> 
        </div>        
       </div>
      </div>      
    );
  }
}

export default CrossP5; 