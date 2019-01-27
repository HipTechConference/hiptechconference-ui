import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <div className="">
      <nav class="navbar navbar-expand-lg navbar-light bg-info">
        <Link class="navbar-brand" to="/">Hip-Tech Conference</Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link class="nav-link" to="/activities/">Activities</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/entertainment/">Entertainment</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/speakers/">Speakers</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/venue/">Venue</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
);

export default Header;
