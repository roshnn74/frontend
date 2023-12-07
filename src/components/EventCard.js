import React from 'react';

const EventCard = ({ title, description, imgUrl }) => {
  return (
    <div className="proj-imgbx-events" style={{margin: '10px'}}>
      <img src={imgUrl} alt=""/>
      <div className="proj-txtx-events">
        <h4>{title}</h4>
        <span>{description}</span>
      </div>
    </div>
  )
}

export default EventCard