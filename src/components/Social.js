import React from 'react';

import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

const Social = () => {
  return (
    <div>
        <span className="navbar-text">
            <div className="social-icon">
                <a href="https://www.linkedin.com/company/ignitw" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt=""/></a>
                <a href="https://www.facebook.com/TheInnovationGarage/" target="_blank" rel="noopener noreferrer"><img src={navIcon2} alt=""/></a>
                <a href="https://www.instagram.com/ig.nitw" target="_blank" rel="noopener noreferrer"><img src={navIcon3} alt=""/></a>
            </div>
        </span>
    </div>
  )
}

export default Social;