import React from 'react';
import IndexActivities from './IndexActivities';
import GetTickets from './GetTickets'
// import IndexEntertainment from './IndexEntertainment';
// import IndexSpeakers from './IndexSpeakers';
// import IndexVenue from './IndexVenue';

const Index = () => (
  <div className="container-fluid bg-dark">
    <IndexActivities className="container-fluid"/>
    <div>
      <GetTickets />
    </div>
  </div>
);

export default Index;
