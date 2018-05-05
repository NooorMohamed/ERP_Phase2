import React, { Component } from 'react';
import '../index.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Header from '../header.js';
import Footer from '../footer.js';
import FullNews from './fullNews.js';
import Cross from './crossP6.js';


class Details extends Component {
    constructor() {
        super();
     }
     render(){
         return [
            <div key="A">
                <Header />   
            </div>,
             <div key="B">
                <FullNews />   
            </div>,
             <div key="C">
                <Cross />   
            </div>,
            <div key="D">
                <Footer />   
            </div>
        ];
    }
}

export default Details;