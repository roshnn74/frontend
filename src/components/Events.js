import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import EventCard from './EventCard';
import { eventData } from '../constants/index';

const Events = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };

  return (
    <section className="skill" id="events">
        <div className="container">
            <div className="row">
                    <div className="skill-bx">
                        <h2>Recent Events</h2>
                        <p>Discover Our Club's Recent Happenings and Upcoming Events.<br></br> Get the latest updates on our exciting activities!</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            {eventData.map((item,index) => {
                                return(
                                    <EventCard 
                                        key={index}
                                        {...item}
                                    />
                                )
                            })}
                        </Carousel>
                    </div>
            </div>
        </div>
    </section>
  )
}

export default Events;