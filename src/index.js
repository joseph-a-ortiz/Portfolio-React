import React from 'react';
import ReactDOM from 'react-dom';
import $, { htmlPrefilter } from 'jquery';
import logo from "./img/9010B281-BF35-401F-AD31-B459D7221AB6.jpeg";
import mosquito from "./img/Mosquito.png";

//import css in order
import 'normalize.css';
import './animate.css';
import 'bootstrap/dist/css/bootstrap.css';
import './img/icons/css/ionicons.css';
import './img/font-awesome/css/font-awesome.css';
import 'lightbox2/dist/css/lightbox.min.css'
import './style.css';

//import js libraries
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import './libs/easing.js';
import 'lightbox2/dist/js/lightbox.min.js';

import * as serviceWorker from './serviceWorker';

//import components
import Navbar from './components/navbar.jsx';
import Intro from './components/intro.jsx';
import About from './components/about.jsx';
import Portfolio from './components/portfolio.jsx';
import Contact from './components/contact.jsx';
import BackToTop from './components/back-top.jsx';
import Preloader from './components/preloader';



ReactDOM.render(
    <React.Fragment>
        <Navbar />
        <Intro />
        <About />
        <Portfolio />
        <Contact />
        <BackToTop />
        <Preloader />
    </React.Fragment>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

$(document).ready(function() {
    var newX,
        currentX = 0,
        pageWidth = $(this).width(),
        mountains = $('.mountains'),
        sun = $('.sun'),
        speed = 4,
        distance,
        acceleration,
        antennaPos,
        idleInterval,
        started = false;
  
        $(this).on('mousemove', function(x) {
          if (!started) {
             clearInterval(idleInterval);
            started = true;
          }
          newX = x.pageX;
        });
      
        $(document).on('touchmove', function(e) {
          if ("ontouchstart" in document.documentElement) {
            e = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
          }
          if (!started) {
             clearInterval(idleInterval);
            started = true;
          }
          newX = e.pageX;
        });
        var idleCount = 1;
        
        function idle() {
           newX = pageWidth/2;
          
         idleInterval =  setInterval(function(){
            idleCount += speed;
            newX = pageWidth/2 + (Math.cos(idleCount/100)*100);
          },10);
        }
      
        function movement() {
          if (currentX !== newX) {
            distance = newX - currentX;
            acceleration = distance / 100;
            antennaPos = 2250 + Math.round(distance / 5) * 75;
      
            if (antennaPos <= 0) {
              antennaPos = 75;
            } else if (antennaPos >= 4500) {
              antennaPos = 4500;
            }
      
            currentX += speed * acceleration;
      
            mountains.css('background-position', 300 + -currentX / 50 + 'px 0');
            sun.css('transform', 'translateX('+  -currentX / 100 + 'px)');
          } else {
            return;
          }
        }
       
        setInterval(movement, 10);
        idle();
      });
      console.clear();
      const slides = [{ 

        title: "Mosquito App",
 
        subtitle: "",
        description: "",
        image: mosquito,
        
    
      }, {
        title: "Coffee Shop Website",
        subtitle: "",
        description: "",
        image: logo,
      },];
      
      function useTilt(active) {
        const ref = React.useRef(null);
        React.useEffect(() => {
          if (!ref.current || !active) {
            return;
          }
      
          const state = {
            rect: undefined,
            mouseX: undefined,
            mouseY: undefined
          };
          let el = ref.current;
      
          const handleMouseMove = e => {
            if (!el) {
              return;
            }
      
            if (!state.rect) {
              state.rect = el.getBoundingClientRect();
            }
      
            state.mouseX = e.clientX;
            state.mouseY = e.clientY;
            const px = (state.mouseX - state.rect.left) / state.rect.width;
            const py = (state.mouseY - state.rect.top) / state.rect.height;
            el.style.setProperty("--px", px);
            el.style.setProperty("--py", py);
          };
      
          el.addEventListener("mousemove", handleMouseMove);
          return () => {
            el.removeEventListener("mousemove", handleMouseMove);
          };
        }, [active]);
        return ref;
      }
      
      const initialState = {
        slideIndex: 0
      };

      
      const slidesReducer = (state, event) => {
        if (event.type === "NEXT") {
          return {
            ...state,
            slideIndex: (state.slideIndex - 1) % slides.length
          };
        }
        if (event.type === "PREV") {
          return {
            ...state,
            slideIndex:
              state.slideIndex === 0 ? slides.length - 3 : state.slideIndex + 1
          };
        }
      };
      
      function Slide({
        slide,
        offset
      }) {
        const active = offset === 0 ? true : null;
        const ref = useTilt(active);
        return /*#__PURE__*/React.createElement("div", {
          ref: ref,
          className: "slide",
          "data-active": active,
          style: {
            "--offset": offset,
            "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1
          }
        }, /*#__PURE__*/React.createElement("div", {
          className: "slideBackground",
          style: {
            backgroundImage: `url('${slide.image}')`
          }
        }), /*#__PURE__*/React.createElement("div", {
          className: "slideContent",
          style: {
            backgroundImage: `url('${slide.image}')`,
            
          }
        }, /*#__PURE__*/React.createElement("div", {
          className: "slideContentInner"
        }, /*#__PURE__*/React.createElement("h2", {
          className: "slideTitle",

        }, slide.title), /*#__PURE__*/React.createElement("h3", {
          className: "slideSubtitle"
        }, ), /*#__PURE__*/React.createElement("h3", {
          className: "jojo"
        },  slide.subtitle), /*#__PURE__*/React.createElement("p", {
          className: "slideDescription"
        }, slide.description))));
      }
      
      function App() {
        const [state, dispatch] = React.useReducer(slidesReducer, initialState);
        return /*#__PURE__*/React.createElement("div", {
          className: "slides"
        }, /*#__PURE__*/React.createElement("button", {
          onClick: () => dispatch({
            type: "PREV"
          })
        }, "\u2039"), [slides, ...slides].map((slide, i) => {
          let offset = slides.length + (state.slideIndex - i);
          return /*#__PURE__*/React.createElement(Slide, {
            slide: slide,
            offset: offset,
            key: i
          });
        }), /*#__PURE__*/React.createElement("button", {
          onClick: () => dispatch({
            type: "NEXT"
          })
        }, "\u203A"));
      }
      
      const elApp = document.getElementById("app");
      ReactDOM.render( /*#__PURE__*/React.createElement(App, null), elApp);

      /*Rolling Ball*/

      var $w = $( window ).width();
var $dW = $('.bb8').css('width');
$dW = $dW.replace('px', '');
$dW = parseInt($dW);
var $dPos = 0;
var $dSpeed = 1;
var $dMinSpeed = 1;
var $dMaxSpeed = 4;
var $dAccel = 1.04;
var $dRot = 0;
var $mPos = $w - $w/5;
var $slowOffset = 120;
var $movingRight = false;

function moveDroid(){
  if($mPos > $dPos + ($dW/4)){
    // moving right
    if(!$movingRight){
      $movingRight = true;
      $('.antennas').addClass('right');
      $('.eyes').addClass('right');
    }
    if($mPos - $dPos > $slowOffset){
      if($dSpeed < $dMaxSpeed){
        // speed up
        $dSpeed = $dSpeed * $dAccel;
      }
    } else if($mPos-$dPos < $slowOffset){
      if($dSpeed > $dMinSpeed){
        // slow down
        $dSpeed = $dSpeed / $dAccel;
      }
    }
    $dPos = $dPos + $dSpeed;
    $dRot = $dRot + $dSpeed;
  } else if($mPos < $dPos - ($dW/4)){
    // moving left
    if($movingRight){
      $movingRight = false;
      $('.antennas').removeClass('right');
      $('.eyes').removeClass('right');
    }
    if($dPos - $mPos > $slowOffset){
      if($dSpeed < $dMaxSpeed){
        // speed up
        $dSpeed = $dSpeed * $dAccel;
      }
    } else if($dPos - $mPos < $slowOffset){
      if($dSpeed > $dMinSpeed){
        // slow down
        $dSpeed = $dSpeed / $dAccel;
      }
    }
    $dPos = $dPos - $dSpeed;
    $dRot = $dRot - $dSpeed;
  } else { }
  $('.bb8').css('left', $dPos);
  $('.ball').css({ WebkitTransform: 'rotate(' + $dRot + 'deg)'});
  $('.ball').css({ '-moz-transform': 'rotate(' + $dRot + 'deg)'});
}

setInterval(moveDroid, 10);

$( document ).on( "mousemove", function( event ) {
  $('h2').addClass('hide');
  $mPos = event.pageX;
  return $mPos;
});