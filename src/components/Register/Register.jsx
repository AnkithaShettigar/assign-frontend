import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import './Register.css';
import { Link } from 'react-router-dom';

function Register() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    confirmpassword: '',
    address: '',
    city: '',
    country: '',
    pincode: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const register = () => {
    const {
      name,
      email,
      number,
      password,
      confirmpassword,
      address,
      city,
      country,
      pincode,
    } = user;
    if (
      name &&
      email &&
      number &&
      password &&
      password === confirmpassword &&
      address &&
      city &&
      country &&
      pincode
    ) {
      axios
        .post('https://jealous-teal-cormorant.cyclic.app/register', user)
        .then((res) => alert(res.data.message));
      //   alert('posted');
    } else {
      alert('invalid');
    }
  };
  return (
    <div className="register">
      {console.log('user', user)}
      <h1>Register</h1>
      <label>Name*</label>
      <input
        className="in"
        type="text"
        name="name"
        value={user.name}
        placeholder="name"
        onChange={handleChange}
      />{' '}
      <br />
      <label>Email*</label>
      <input
        className="in"
        type="email"
        name="email"
        value={user.email}
        placeholder="enter email"
        onChange={handleChange}
      />{' '}
      <br />
      <label>Number*</label>
      <input
        className="in"
        type="number"
        name="number"
        value={user.number}
        placeholder="number"
        onChange={handleChange}
      />{' '}
      <br />
      <label>Password*</label>
      <input
        className="in"
        type="password"
        name="password"
        value={user.password}
        placeholder="enter password"
        onChange={handleChange}
      />{' '}
      <br />
      <label>Confirmpassword*</label>
      <input
        className="in"
        type="password"
        name="confirmpassword"
        value={user.confirmpassword}
        placeholder="reenter password"
        onChange={handleChange}
      />{' '}
      <br />
      <label>Address*</label>
      <input
        className="in"
        type="text"
        name="address"
        value={user.address}
        placeholder="address"
        onChange={handleChange}
      />{' '}
      <br />
      <label>City*</label>
      <input
        className="in"
        type="text"
        name="city"
        value={user.city}
        placeholder="city"
        onChange={handleChange}
      />{' '}
      <br />
      <label>Country*</label>
      <input
        className="in"
        type="text"
        name="country"
        value={user.country}
        placeholder="country"
        onChange={handleChange}
      />{' '}
      <br />
      <label>Pincode*</label>
      <input
        className="in"
        type="number"
        name="pincode"
        value={user.pincode}
        placeholder="pincode"
        onChange={handleChange}
      />{' '}
      <br />
      <Link to="/login">
        {' '}
        <button onClick={register} className="reg">
          Register
        </button>
      </Link>
    </div>
  );
}

export default Register;
