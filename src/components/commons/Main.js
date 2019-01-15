import React from 'react';
import { Route } from 'react-router-dom';
import Index from '../Index/Index';
import Venue from '../Venue/Venue';
import Entertainment from '../Entertainment/Entertainment';
import Speakers from '../Speakers/Speakers';
import Activities from '../Activities/Activities';

const Main = () => (
  <main>
    <Route path="/" exact component={Index}/>
    <Route path="/activities/" component={Activities}/>
    <Route path="/entertainment/" component={Entertainment}/>
    <Route path="/speakers/" component={Speakers}/>
    <Route path="/venue/" exact component={Venue}/>
  </main>
);

export default Main;
