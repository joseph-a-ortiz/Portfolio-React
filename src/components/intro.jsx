import React from "react";
import "./stars.scss";
import Typed from "react-typed";
import "../index";
import logo from "../img/tumbleweed.png";


class Intro extends React.Component {
  render() {
    return (

      <div id="home" className="intro route bg-image background">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />

        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="container">
              <h1 className="intro-title mb-4">Howdy, I am Joseph Ortiz</h1>
              <p className="intro-subtitle">
              
                
                <span className="text-slider-items"></span>
                <strong className="text-slider">
                  <Typed
                    strings={[
                      "Front End Developer",
                    
                      "Software Engineer"
                    ]}
                    typeSpeed={80}
                    backDelay={1100}
                    backSpeed={30}
                    loop
                  />
                </strong>
              </p>
              <p className="pt-3">

          <div class="sand"></div>
          <div class="bb8">
     
          <div class="ball ">
          <img class="ball" src={logo}/>

          </div>
          <div class="shadow"></div>
          </div>
          <div class="shameless">
              <a href="http://apexdesignstudios.com" target="_blank">apex design studio</a>
          </div>
          


              </p>
            </div>
          </div>
        </div>
        
        <header className="background h-100">
   
        <div className="sun" />
        
        <div className="sand">
          <div className="mountains" />
        </div>
      
    </header>
      </div>
    );
  }
}

export default Intro;
