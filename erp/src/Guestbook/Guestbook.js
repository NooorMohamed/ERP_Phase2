import React, { Component } from 'react';
import '../index.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Header from '../header.js';
import Footer from '../footer.js';
import Cross from './crossP7.js';


class Guestbook extends Component {
    constructor() {
        super();
     }
     render(){
         return [
            <div key="A">
                <Header />   
            </div>,
             <div key="B">
                <Cross />   
            </div>,
            <div key="C">
                <Footer />   
            </div>
        ];
    }
}

export default Guestbook;