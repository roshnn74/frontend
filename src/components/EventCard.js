import React from 'react';
import { Typography } from '@mui/material';

import Img from '../assets/img/event.svg';

const EventCard = ({ description, id }) => {
  return (
    <div className="exercise-card">
      <img src={Img} alt="" loading="lazy" />
      <Typography ml="20px" fontWeight="bold" pb="10px">
        {description}
      </Typography>

    </div>
  )
}

export default EventCard