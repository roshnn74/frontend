import React, { useEffect } from 'react';

import Img1 from "../assets/img/ophyellowai.png";
import Img2 from "../assets/img/ophlysto.png";
import Img3 from "../assets/img/ophskylark.png";
import Img4 from "../assets/img/ophalmabase.png";
import Img5 from "../assets/img/ophbugclaim.png";

const Startup = () => {
      useEffect(() => {
        var slides = document.querySelectorAll('.slide');
        var btns = document.querySelectorAll('.btn-slider');
        let currentSlide = 1;
    
        // Javascript for image slider manual navigation
        var manualNav = function(manual){
          slides.forEach((slide) => {
            slide.classList.remove('active-slider');
    
            btns.forEach((btn) => {
              btn.classList.remove('active-slider');
            });
          });
    
          slides[manual].classList.add('active-slider');
          btns[manual].classList.add('active-slider');
        }
    
        btns.forEach((btn, i) => {
          btn.addEventListener("click", () => {
            manualNav(i);
            currentSlide = i;
          });
        });
    
        // Javascript for image slider autoplay navigation
        var repeat = function(activeClass){
          let active = document.getElementsByClassName('active-slider');
          let i = 1;
    
          var repeater = () => {
            setTimeout(function(){
                [...active].forEach((activeSlide) => {
                    activeSlide.classList.remove('active-slider');
                });
    
                slides[i].classList.add('active-slider');
                btns[i].classList.add('active-slider');
                i++;
    
                if(slides.length === i){
                    i = 0;
                }
                if(i >= slides.length){
                    return;
                }
                repeater();
            }, 5000);
          }
          repeater();
        }
        repeat();
      },[]);

  return (
    <section className="startup">
      <div className="img-slider">
        <div className="slide active-slider">
          <img src={Img1} alt="Yellow AI" />
        </div>
        <div class="slide">
          <img src={Img2} alt="Lysto" />
        </div>
        <div class="slide">
          <img src={Img3} alt="Skylark" />
        </div>
        <div class="slide">
          <img src={Img4} alt="AlmaBase" />
        </div>
        <div class="slide">
          <img src={Img5} alt="BugClaim" />
        </div>
        <div class="navigation">
          <div class="btn-slider active-slider"></div>
          <div class="btn-slider"></div>
          <div class="btn-slider"></div>
          <div class="btn-slider"></div>
          <div class="btn-slider"></div>
        </div>
      </div>
    </section>
  )
}

export default Startup