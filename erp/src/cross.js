import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';



class Cross extends React.Component {
  render() {  
    return (
   <div>
      <div className = "container containerClone"> 
        <div className = "row">  
          <div className = "col-md-8 col-md-offset-1 col-xs-12 col-sm-8"style={{marginTop:'90px'}}>
            <div className = "thumbnail" style={{backgroundColor:'transparent',border:'none'}}>
                <img src={require("./photos/02 Homepage/The rock.png")} style={{maxHeight:'700px',minHeight:'250px',minWidth:'100'}}/>
            </div>  
          </div>
          <div className = "col-md-4 col-md-offset-7 col-xs-12 col-sm-4">
            <div className = "thumbnail" style={{backgroundColor:'transparent',border:'none'}}>
                <h1 className = "section2_page2_row1_col1"style={{marginTop:'360px'}}>H.H.'S</h1>
                <h1 className = "section2_page2_row1_col1">Biography</h1>
                <p className = "page_4_paragraph2">
                The future, with its needs and challenges call upon us to embrark prepetual quest for alternative source of energy
                </p>  
                <div className ="icon-box" id = "sharedBox">
                  <a href="#" id = "colorIcon" className="fa fa-facebook Icons"></a>
                  <a href="#" id = "colorIcon" className="fa fa-twitter Icons" ></a>
                  <a href="#" id ="colorIcon"><span className="fa fa-whatsapp"></span></a> 
                  <a href="#" id ="colorIcon"><span className="fa fa-telegram"></span></a>
                  <a href="#" style ={{float:'right',color:'#92856a'}} className="material-icons plus_icon">add_circle_outline</a>    
                </div>
            </div>
          </div>   
        </div>
      </div>
    </div>
        
    );
  }
}

export default Cross; 