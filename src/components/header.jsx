
import React from "react";
import "./style.scss";
import Typed from "react-typed";
import "../index";
import logo from "../img/tumbleweed.png";

class Intro1 extends React.Component {
  render() {
    return (
      <div id="home" className="intro bg-image ">
        <div className="intro-content display-table">
          
          <div className="container table-cell">
          <div class="sand">
          </div>
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
          <div class="bb8 container-intro">
            <div class="ball ">
            <img class="ball" src={logo}/>
            </div>
          </div>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro1;