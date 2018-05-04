import React, { Component } from 'react';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './header.js';
import Footer from './footer.js';

class News extends Component {
    render(){
         return [
            <div key="A">
                <Header />   
            </div>,
             <div key="B">
                <Footer />   
            </div>
        ];
    }
}

export default News;
