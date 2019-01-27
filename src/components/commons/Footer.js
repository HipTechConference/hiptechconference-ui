import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="navbar navbar-light bg-info" id="footer">
    <div id="social-card" className="card rounded mx-auto">
      <ul className="mx-auto">
        <li>
          <i class="fab fa-twitter"></i>
        </li>
        <li>
          <i class="fab fa-instagram"></i>
        </li>
        <li>
          <i class="fab fa-facebook"></i>
        </li>
        <li>
          <i class="fab fa-linkedin"></i>
        </li>
        <li>
          <i class="fab fa-mail"></i>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
