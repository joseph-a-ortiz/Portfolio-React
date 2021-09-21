import React from "react";
import "./style.scss";
import "../index";
import Particles from "react-tsparticles";
import Intro1 from "./header";
import { BrowserRouter as Router} from "react-router-dom";

class Intro extends React.Component {
  constructor(props) {
    super(props);
    this.particlesInit = this.particlesInit.bind(this);
    this.particlesLoaded = this.particlesLoaded.bind(this);
  }

  particlesInit(main) {
    console.log(main);
  }

  particlesLoaded(container) {
    console.log(container);
  }
  render() {
    return (
      <Router >   
        <Intro1></Intro1>
        <Particles
          id="particles-js"
          init={this.particlesInit}
          loaded={this.particlesLoaded}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
          }}
          options={{
            background: {
              color: {
                value: "#87CEEB",
              },
              
            },
            fpsLimit: 70,
            interactivity: {
              detectsOn: "canvas",
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: [ "repulse"],
                },
                resize: true,
              },
              modes: {
                bubble: {
                  distance: 400,
                  duration: 2,
                  opacity: 0.8,
                  size: 40,
                },
                push: {
                  quantity: 3,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: false,
                speed: 1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  value_area: 2500,
                },
                value: 80,
              },
              opacity: {
                value: 0.7,
              },
              shape: {
                type: "images",
              image: [
                {
                  src: 'https://render.logomakr.com/renders/34/LogoMakr-34gXE2.png',
                }
              
              ]
              
              },
              size: {
                random: true,
                value: 14,
              },
            },
            detectRetina: true,
          }}
        ></Particles>
      </Router>
    );
  }
}

export default Intro;
