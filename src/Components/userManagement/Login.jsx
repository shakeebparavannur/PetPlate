import axios from 'axios';
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const Login = localStorage.getItem('login');
  const [error, setError] = useState({});
  const formRef = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = {};
    const response = await axios.get('http://localhost:3000/user');
    const userData = response.data;
    const formData = new FormData(formRef.current);
    const username = formData.get('username');
    const password = formData.get('password');

    if (!username) {
      errors.username = 'Please enter the username';
    } else if (!password) {
      errors.password = 'Please enter the password';
    } else {
      const user = userData.find((user) => user.username === username && user.password === password);
      if (user) {
        navigate('/');
        localStorage.setItem('username', user.username);
      } else {
        errors.form = 'Username and password do not match';
      }
    }

    setError(errors);
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit} ref={formRef}>
        <input type="text" name="username" placeholder="Enter the username" />
        {error.username && <span className="">{error.username}</span>} <br />
        <input type="password" name="password" placeholder="Enter your password" />
        {error.password && <span className="">{error.password}</span>} <br />
        {error.form && <span className="">{error.form}</span>} <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
