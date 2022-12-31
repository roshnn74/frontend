import React, { useEffect } from "react";



const EventTimeline = () => {
  useEffect(()=>{
    function qs(selector, all = false) {
      return all
        ? document.querySelectorAll(selector)
        : document.querySelector(selector);
    }
    
    const sections = qs(".section", true);
    const timeline = qs(".timeline");
    const line = qs(".line");
    line.style.bottom = `calc(100% - 20px)`;
    let prevScrollY = window.scrollY;
    let up, down;
    let full = false;
    let set = 0;
    const targetY = window.innerHeight * 0.8;
    
    function scrollHandler(e) {
      const { scrollY } = window;
      up = scrollY < prevScrollY;
      down = !up;
      const timelineRect = timeline.getBoundingClientRect();
      const lineRect = line.getBoundingClientRect(); // const lineHeight = lineRect.bottom - lineRect.top;
    
      const dist = targetY - timelineRect.top;
      console.log(dist);
    
      if (down && !full) {
        set = Math.max(set, dist);
        line.style.bottom = `calc(100% - ${set}px)`;
      }
    
      if (dist > timeline.offsetHeight + 50 && !full) {
        full = true;
        line.style.bottom = `-50px`;
      }
    
      sections.forEach((item) => {
        // console.log(item);
        const rect = item.getBoundingClientRect(); //     console.log(rect);
    
        if (rect.top + item.offsetHeight / 5 < targetY) {
          item.classList.add("show-me");
        }
      }); // console.log(up, down);
    
      prevScrollY = window.scrollY;
    }
    
    scrollHandler();
    line.style.display = "block";
    window.addEventListener("scroll", scrollHandler);
  })
  return (
    <>
<div class="containers">
    <div class="top-section">
      <h1>Events</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, modi.</p>
    </div>
    <div class="timeline">
      <div class="line"></div>

      <div class="section">
        <div class="bead"></div>
        <div class="content">
          <h4>Jan 2018 - Present</h4>
          <h2>Section1</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, iusto.</p>
        </div>
      </div>

      <div class="section">
        <div class="bead"></div>
        <div class="content">
          <h4>Sep 2018 - Dec 2018 (4 months)</h4>
          <h2>Section1</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, iusto.</p>
        </div>
      </div>

      <div class="section">
        <div class="bead"></div>
        <div class="content">
          <h4>Aug 2016 - July 2020</h4>
          <h2>Section1</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, iusto.</p>
        </div>
      </div>

      <div class="section">
        <div class="bead"></div>
        <div class="content">
          <h4>1998 - 2016</h4>
          <h2>Section1</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, iusto.</p>
        </div>
      </div>
    </div>
  </div>
    </>
  );
};

export default EventTimeline;
