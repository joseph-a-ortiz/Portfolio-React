
import React from "react";
import "../index";
import "./stars.scss";
import '../style.css';
//import stock
import stock from "../img/image1.jpg";
import stock1 from "../img/image2.jpg";
import stock2 from "../img/image3.jpg";
import stock3 from "../img/image4.jpg";
import stock4 from "../img/image5.jpg";
import stock5 from "../img/image6.jpg";


class Portfolio extends React.Component {
  render() {
    return (
      <section id="portfolio" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Projects</h3>
             
                <div>
                  
        <div id="app" />
       
         
            <a href="https://github.com/joseph-a-ortiz/Coffee-Shop-Site" class="btn btn-1">
              <svg>
                <rect x="0" y="0" fill="none" width="100%" height="100%"/>
              </svg>
                Coffee Shop Site
            </a>
            <a href="https://github.com/joseph-a-ortiz/Dead-Mosquito-App" class="btn btn-1">
              <svg>
                <rect x="0" y="0" fill="none" width="100%" height="100%"/>
              </svg>
                Mosquito App
            </a>
          </div>


              </div>
            </div>
          </div>
          </div>    

      </section>
    );
  }
}


export default Portfolio;
