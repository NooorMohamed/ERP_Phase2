import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


class MainVideo extends React.Component {
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
     return(
         <div className= "col-md-8 col-xs-12">
          <div className="noborder">
          <div className="thumbnail"style={{backgroundColor:'transparent'}}>
            <iframe  src={this.state.vid_src} style={{width:'100%',height:'100%'}}></iframe>
            <div className="thumbnail galleryP1">   
               <p className="page_2_paragraph1" style={{fontSize:'16px'}}>
                   {this.state.title}
                </p>        
            </div>
           </div>
          </div>
         </div>       
    );
 }
}

 

export default MainVideo;