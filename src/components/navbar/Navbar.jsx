import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
// import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="nav">
      <div className="navleft">
        <img
          src="https://rubixe.com/assets/img/logo/white-rubixe-logo.png"
          alt=""
          width="220px"
        />
      </div>
      <div className="navright">
        <Link to="/" className="home">
          {' '}
          <a href="#home" className="hire">
            HOME
          </a>
        </Link>
        <a href="#service" className="hire">
          SERVICES
        </a>
        <a href="#products" className="hire">
          PRODUCTS
        </a>
        <a href="#internship" className="hire">
          AI INTERNSHIP
        </a>
        <a href="#career" className="hire">
          CAREER
        </a>
        <a href="#blog" className="hire">
          BLOG
        </a>
        <a href="#about" className="hire">
          ABOUT
        </a>
        <a href="#contact" className="hire">
          CONTACT US
        </a>
      </div>
    </div>
  );
}

export default Navbar;
