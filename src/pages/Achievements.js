import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';

import { prevEventData } from '../constants/index';

const Achievements = () => {

  useEffect(() => {
    const gallery = document.getElementById("gallery");
  
    window.onmousemove = e => {
      const mouseX = e.clientX,
            mouseY = e.clientY;
      
      const xDecimal = mouseX / window.innerWidth,
            yDecimal = mouseY / window.innerHeight;
      
      const maxX = gallery.offsetWidth - window.innerWidth,
            maxY = gallery.offsetHeight - window.innerHeight;
      
      const panX = maxX * xDecimal * -1,
            panY = maxY * yDecimal * -1;

      if(xDecimal >= 0.8) return;

      gallery.animate({
        transform: `translate(${panX}px, ${panY}px)`
      }, {
        duration: 4000,
        fill: "forwards",
        easing: "ease"
      })
    }
  },[]);
  
  return (
    <div className="hover-gallery" id="hover-gallery">
      <div style={{height:"90%"}} className="gallery" id="gallery">
        {
          prevEventData.map((item,index) => {
            return(
              <div className="tile proj-imgbx" key={index}>
                <img src={item.imgUrl} alt="" />
                <div className="proj-txtx">
                  <Link to={`/achievements/${item.id}`} style={ {textDecoration: 'none' } }>
                    <h4>{item.title}</h4>
                  </Link>
                  <span>{item.date}</span>
                </div>
              </div>                   
            )
          })
        }
      </div>
    </div>
  )
}

export default Achievements