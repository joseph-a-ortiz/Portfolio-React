import React from "react";
import "./stars.scss";
import Typed from "react-typed";
import "../index";
import logo from "../img/tumbleweed.png";
import logo2 from "../img/pic.jpg";
import Particles from "react-tsparticles";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class Intro1 extends React.Component {
  constructor(props) {
    super(props);

    this.particlesInit = this.particlesInit.bind(this);
    this.particlesLoaded = this.particlesLoaded.bind(this);
  }

  particlesInit(main) {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  }

  particlesLoaded(container) {
    console.log(container);
  }
  render() {
    return (
      <div id="home" className="intro bg-image">
    
                <div className="container-intro">
              <h1 className="intro-title mb-4">Howdy, I am Joseph Ortiz</h1>
              <p className="intro-subtitle intro-title">
              
                
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
              </div>
              <p className="pt-3">

      
          <div class="bb8">
     
          <div class="ball ">
          <img class="ball" src={logo}/>

          </div><div class="shadow"></div>
    
          </div>
          


              </p>


   
        <div className="sun" />
        
 

      
      </div>
    );
  }
}

export default Intro1;
