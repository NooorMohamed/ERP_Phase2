import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


class MainEvent extends React.Component {
    constructor() {
     super();
     this.state = {
         num : 1,
         vid_src:"https://www.youtube.com/embed/bQLCZOG202k?autoplay=0",
         date: "17 February 2015",
         title: "From a speech delivered at the Student Forum 2007",
        description: "His Highness Sheikh Mohammed Bin Zayd Al Nahyan, Crown Prince of Abo Dhabi and Deputy Supreme Commander of the UAE Armed Force's, Today receives visiting Sheikh Mohammed Bin Abdulrahman Al-Thani, Qatar Minister of Foreign Affairs. at Al Shati Palace."
     }
} 
render(){
     return[
<div class = "col-md-6">
      <div class ="noborder">    
        <div class ="thumbnail">
         <img src = {{img_src}}> 
         <div class = "thumbnail">    
            <h3 class = "headers_color" style="padding:15px;">{{date}}{{title}}</h3>
            <br>
            <h6 class = "hline"></h6>
            <br>
            <p class ="page_2_paragraph1" style="padding:15px;"> {{description}}</p>
            <br>
             <div class ="icon-box" id = "sharedBox">
				<a href="#" id = "colorIcon" class="fa fa-facebook Icons"></a>
                <a href="#" id = "colorIcon" class="fa fa-twitter Icons" ></a>
                <a href="#" id ="colorIcon"><span class="fa fa-whatsapp"></span></a>
                <a href="#" id ="colorIcon"><span class="fa fa-telegram"></span></a>
                <a href="#" style = "float: right;" class="material-icons plus_icon">add_circle_outline</a>
            </div>     
          </div>
        </div>
       </div>       
      </div>
         ];
 }
}