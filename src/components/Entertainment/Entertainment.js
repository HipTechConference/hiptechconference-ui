import React from 'react';
import EntertainmentCinema from './EntertainmentCinema'
import EntertainmentComedy from './EntertainmentComedy'
import EntertainmentMusic from './EntertainmentMusic'

const Entertainment = () => (
  <div className="container-fluid bg-dark">
    <EntertainmentMusic />
    <EntertainmentCinema />
    <EntertainmentComedy />
  </div>
);

export default Entertainment;
