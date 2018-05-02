import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


class Sons extends React.Component {
    constructor() {
     super();
     this.state = {
         num : 1,
         img_src:"./photos/Biography/sons.jpg",
         date: "2015",
         title: "Mohammed Bin Zayed receives Qatari FM",
        description: "His Highness Sheikh Mohammed Bin Zayd Al Nahyan, Crown Prince of Abo Dhabi and Deputy Supreme Commander of the UAE Armed Force's, Today receives visiting Sheikh Mohammed Bin Abdulrahman Al-Thani, Qatar Minister of Foreign Affairs. at Al Shati Palace."
      }
     }
      
  render() {  
    return (
    <div className="container" style={{marginTop:'20px'}}>    
        <div className="row">
            <div className="col-md-4 " style={{zIndex:'2'}}>
                <br/><br/>
                <div className="overlapRight">
                    <div className="box">
                        <h1 className="headers_color">H.H.'S</h1>
                        <h1 className="headers_color">Sons</h1>
                        <hr/>
                        <p style={{fontSize:'16px'}}>
                         {this.state.description}
                        </p>
                        <a href="#" className="icons_color"><span  className="fa fa-facebook-official"></span></a>
                        <a href="#" className="icons_color"><span className="fa fa-twitter"></span></a>
                        <a href="#" className="icons_color"><span className="fa fa-whatsapp"></span></a>
                        <a href="#" className="icons_color"><span className="fa fa-telegram"></span></a>
                        <a href="#" style = {{float: 'right'}} className="material-icons plus_icon">add_circle_outline</a>
                    </div>
                 </div>
            </div>
            <div class="col-md-8" style={{zIndex:'1'}}>
                <div class="thumbnail" style={{zIndex:'0'}}>
                <img src={require(this.state.img_src)}/>
                </div>
            </div>
        </div>
    </div>
    );
  }
}
    
export default Sons;    
