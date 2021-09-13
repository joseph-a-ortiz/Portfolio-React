
import React from "react";
import "./stars.scss";
import Typed from "react-typed";
import "../index";
import logo from "../img/tumbleweed.png";


class Intro1 extends React.Component {
  render() {
    return (

      <div id="home" className="intro bg-image ">

        <div className="intro-content display-table">

            <div className="container table-cell">
              <div className="container-intro">
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
              </div>
              <p className="pt-3">
              
          <div class="sand"></div>
          <div class="bb8 container-intro">
     
          <div class="ball ">
          <img class="ball" src={logo}/>

          </div>
          </div>
       
          


              </p>
            </div>
          </div>
        
        <header className="background h-100">
   
        
        
        <div className="sand">
          <div className="mountains" />
        </div>
      
    </header>
    <div className="sun" />
      </div>
    );
  }
}

export default Intro1;

/*
import React from "react";
import "./stars.scss";
import Typed from "react-typed";
import "../index";
import logo from "../img/tumbleweed.png";


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
*/