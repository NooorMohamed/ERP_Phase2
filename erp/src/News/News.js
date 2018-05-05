import React, { Component } from 'react';
import '../index.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Header from '../header.js';
import Footer from '../footer.js';
import Position from '../position.js';
import LatestNews from './latest News.js';
import Interview from './interview.js';
import LatestEvents from './latest Events.js';
import Cross from './crossP4.js';

class News extends Component {
    constructor() {
        super();
        this.numbers = [1, 2, 3];
     }
    render(){
         return [
            <div key="A">
                <Header />   
            </div>,
            <div>
                <LatestNews />
            </div>,
            <div key="B">
                <div className="container">
                    <div className="row">
                        {this.numbers.map((number) => (
                            <Position /> 
                        ))}
                    </div>
                </div>
            </div>,
            <div key="C">
                <Interview />
            </div>,
             <div key="D">
                <LatestEvents />
            </div>,
              <div key="E" id = "section4">
                <Cross />
            </div>,
            <div key="F">
                <Footer />   
            </div>
        ];
    }
}

export default News;
