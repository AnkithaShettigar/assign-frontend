import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  return (
    <div className="contpg" id="contact">
      <div className="contbox">
        <div className="contleft">
          <h1>GET IN TOUCH</h1>
          <p className="contpara">
            please complete the form and we will get back to you
          </p>
        </div>
        <div className="line"></div>
        <div className="contright">
          <form action="">
            <label className="tag">Name*</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label className="tag">Email*</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label className="tag">Phone Number*</label>
            <input
              type="number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              required
            />
            <Link to="/register" state={{ name, email, number }}>
              <button className="btn btn-primary" type="submit">
                Register Now
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
