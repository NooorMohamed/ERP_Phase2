import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


class Bio extends React.Component {
    constructor() {
     super();
     this.state = {
         num : 1,
         img_src:"./photos/Biography/biography.jpg",
         date: "2015",
         title: "Mohammed Bin Zayed receives Qatari FM",
        description: "His Highness Sheikh Mohammed Bin Zayd Al Nahyan, Crown Prince of Abo Dhabi and Deputy Supreme Commander of the UAE Armed Force's, Today receives visiting Sheikh Mohammed Bin Abdulrahman Al-Thani, Qatar Minister of Foreign Affairs. at Al Shati Palace."
      }
     }
      
  render() {  
    return (
    <div className="container">    
       <div className="row">    
        <div className="col-md-8">
                <div className="thumbnail">
                    <img src={require(this.state.img_src)}/>
                </div>
             </div>
             <div className="col-md-4"style={{marginTop:'50px'}}>
                <div className="overlap">
                    <div className="box">
                        <h1 className="headers_color">H.H.'S</h1>
                        <h1 className="headers_color">Biography</h1>
                        <hr/>
                        <p style={{fontSize:'16px'}}>
                        {this.state.description}
                        </p>
                        <a href="#" className="icons_color"><span  className="fa fa-facebook-official"></span></a>
                        <a href="#" className="icons_color"><span className="fa fa-twitter"></span></a>
                        <a href="#" className="icons_color"><span className="fa fa-whatsapp"></span></a>
                        <a href="#" className="icons_color"><span className="fa fa-telegram"></span></a>
                        <a href="#" style={{float:'right'}}className="material-icons plus_icon">add_circle_outline</a>
                    </div>
                </div>
            </div>
         </div>
      </div>
    );
  }
}
    
export default Bio;    
