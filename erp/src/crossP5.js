import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';



class CrossP5 extends React.Component {
    constructor() {
     super();
     this.state = {
         img_src:"./photos/DiamondImg.png",
         title: "Most Popular",
         date:"17 february 2015",
         quote: "The future, with its needs and challenges call upon us to embrark prepetual quest for alternative source of energy."
     }
}    
  render() {  
    return (
   <div className= "container">
       <div className= "row">
        <div className="col-md-7 col-md-offset-0 col-xs-8 col-xs-offset-2" style={{marginTop:'200px'}}>
        <br/><br/><br/>
            <div className= "thumbnail"style={{border:'none',backgroundColor:'transparent'}}>
                <img src={require(this.state.img_src)} style={{transform:'rotate(-45deg)'}}/>
            </div>
        </div>
        <div className="col-md-3 col-xs-12 col-sm-3" style={{marginTop:'300px'}}>
            <div className="thumbnail" style={{backgroundColor:'transparent',border:'none'}}>
                <h1 className="headers_color">{this.state.title}</h1>
                <br/>
                <div className= "hline" ></div>
                <br/>
                <div style={{color:'#92856a'}}>{this.state.date}</div>
                <br/>
                <p className="page_4_paragraph2">
                 {this.state.quote}</p>  
                <div className="icon-box" id = "sharedBox">
				 <a href="#" id = "colorIcon" className="fa fa-facebook Icons"></a>
                 <a href="#" id = "colorIcon" className="fa fa-twitter Icons" ></a>
                 <a href="#" id ="colorIcon"><span className="fa fa-whatsapp"></span></a>
                 <a href="#" id ="colorIcon"><span className="fa fa-telegram"></span></a>   
                </div>
            </div>
        </div>   
       </div>       
     </div>      
    );
  }
}

export default CrossP5; 