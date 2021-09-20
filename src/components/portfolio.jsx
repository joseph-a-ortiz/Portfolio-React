
import React from "react";
import "../style.css"
import logo from "../img/earth.jpg";



class Portfolio extends React.Component {
  render() {
    return (


<section id="portfolio">    
  <h2 className="title-align">Projects</h2>
  <div class="carousel container">
    <div className="row">
      <div class="carousel__nav">
        <span id="moveLeft" class="carousel__arrow">
          <svg class="carousel__icon" width="24" height="24" viewBox="0 0 24 24">
            <path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"></path>
          </svg>
        </span>
        <span id="moveRight" class="carousel__arrow" >
          <svg class="carousel__icon"  width="24" height="24" viewBox="0 0 24 24">
            <path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path>
          </svg>    
        </span>
      </div>    
        <div class="carousel-item carousel-item--1">
          <div class="carousel-item__info">
            <div class="carousel-item__container">
              <h2 class="carousel-item__subtitle">React, MongoDB Project</h2><br/>
              <h1 class="carousel-item__title">Merch Ecommerce Website</h1>
              <a href="https://github.com/joseph-a-ortiz/React-Go" class="carousel-item__btn"> <br/>&#160;<i class="fa fa-github fa-4x"></i></a><a href="https://hwdychicken.herokuapp.com" class="carousel-item__btn">&#160;<i class="fa fa-desktop fa-4x"></i></a>
            </div>
          </div>
        </div>
      <div class="carousel-item carousel-item--2">
        <div class="carousel-item__info">
          <div class="carousel-item__container">
          <h2 class="carousel-item__subtitle">Bootstrap Project</h2><br/>
          <h1 class="carousel-item__title">Coffee Shop Website</h1>
          <a href="https://github.com/joseph-a-ortiz/coffee-shop" class="carousel-item__btn"> <br/>&#160;<i class="fa fa-github fa-4x"></i></a><a href="https://joseph-a-ortiz.github.io/coffee-shop/" class="carousel-item__btn">&#160;<i class="fa fa-desktop fa-4x"></i></a>
          </div>
        </div>
    </div>
      <div class="carousel-item carousel-item--3">
        <div class="carousel-item__info">
          <div class="carousel-item__container">
            <h2 class="carousel-item__subtitle">React Native</h2><br/>
            <h1 class="carousel-item__title"> Info App </h1>
            <a href="https://github.com/joseph-a-ortiz/Dead-Mosquito-App" class="carousel-item__btn"> <br/>&#160;&#160;<i class="fa fa-github fa-4x"></i></a>
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
