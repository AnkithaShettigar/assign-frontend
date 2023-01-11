import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer" id="blog">
      <div className="footer1">
        <p> ABOUT US</p>
        <span>
          Rubixe™ is a global technology company specializing in disruptive
          technologies - Artificial Intelligence (AI), Machine Learning, Robotic
          Process Automation (RPA), BlockChain and Internet of Things (IoT).
          Rubixe mission to enable businesses to leverage the full potential of
          disruptive technologies to stay competitive in the market.
        </span>
      </div>
      <div className="footer2">
        MENUS
        <p>Home</p>
        <p>Service</p>
        <p>Products</p>
        <p>Career</p>
      </div>
      <div className="footer3">
        LEARN MORE
        <p>About</p>
        <p>Contact Us</p>
      </div>
      <div className="footer4">
        ADDRESS
        <p>
          Novel Tech Park, 1st Floor, Hosur Rd, Kudlu gate, Bengaluru, Karnataka
          560068 Phone: 0804-717-8999 Email: hi@rubixe.com
        </p>
        <p>SOCIAL MEDIA</p>
        <i class="fa-brands fa-square-facebook"></i>
        <i class="fa-brands fa-linkedin"></i>
      </div>
    </div>
  );
};

export default Footer;
