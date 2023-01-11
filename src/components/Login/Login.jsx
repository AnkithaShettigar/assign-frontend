import React, { useState } from 'react';
import axios from 'axios';
import { Link, redirect } from 'react-router-dom';
import './Login.css';

function Login({ setLoginUser }) {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const login = () => {
    axios
      .post('https://jealous-teal-cormorant.cyclic.app/login', user)
      .then((res) => {
        alert(res.data.message);
        setLoginUser(res.data.user);
        redirect('/');
      });
  };
  return (
    <div className="loginpage">
      {console.log(user)}
      <h1>Login</h1>
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
      <Link to="/">
        <button onClick={login} className="reg">
          Login
        </button>
      </Link>
    </div>
  );
}

export default Login;
