import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';


class MainEvents extends React.Component {
    constructor() {
     super();
     this.state = [{
         num : 1,
         img_src:require("../photos/Biography/1b.jpg"),
         date: "2015",
         title: "Mohammed Bin Zayed Mohammed Bin Zayed receives Qatari FM Mohammed Bin Zayed receives Qatari FM",
        description: "His Highness Sheikh Mohammed Bin Zayd Al Nahyan, Crown Prince of Abo Dhabi and Deputy Supreme Commander of the UAE Armed Force's, Today receives visiting Sheikh Mohammed Bin Abdulrahman Al-Thani, Qatar Minister of Foreign Affairs. at Al Shati Palace."
     },
     {
         num : 1,
         img_src:require("../photos/Biography/1b.jpg"),
         date: "2015",
         title: "Mohammed Bin Zayed Mohammed Bin Zayed receives Qatari FM Mohammed Bin Zayed receives Qatari FM",
        description: "His Highness Sheikh Mohammed Bin Zayd Al Nahyan, Crown Prince of Abo Dhabi and Deputy Supreme Commander of the UAE Armed Force's, Today receives visiting Sheikh Mohammed Bin Abdulrahman Al-Thani, Qatar Minister of Foreign Affairs. at Al Shati Palace."
     }
    ]
}
    render(){
        return[
    <div className ="row">
     {this.state.map((event) => (
      
       <div className = "col-md-6">
         <div className ="noborder">    
           <div className ="thumbnail">
            <img src = {event.img_src}/> 
             <div className = "thumbnail" style={{width:'85%'}}>    
              <h3 className = "headers_color" style={{padding:'15px',fontSize:'22px'}}>{event.date}{event.title}</h3>
              <br/>
              <h6 className = "hline"></h6>
              <br/>
              <p className ="page_2_paragraph1" style={{padding:'15px'}}> {event.description}</p>
              <br/>
              <div className ="icon-box" id = "sharedBox">
				<a href="#" id = "colorIcon" className="fa fa-facebook Icons"></a>
                <a href="#" id = "colorIcon" className="fa fa-twitter Icons" ></a>
                <a href="#" id ="colorIcon"><span className="fa fa-whatsapp"></span></a>
                <a href="#" id ="colorIcon"><span className="fa fa-telegram"></span></a>
              </div>     
            </div>
           </div>
          </div>       
        </div> 
         
        ))} 
    </div>
    ];
    }
}
export default MainEvents;