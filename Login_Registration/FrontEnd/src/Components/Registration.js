import React, { useState } from 'react';
import axios from 'axios';
import './Registersty.css';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:3003/register', { username, email, password });
      console.log('Registration successful:', response.data);
      alert("registerd");
      navigate("/"); //after succes full login we go to the login page
    
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  const handleLoginClick = () => {
    navigate("/");
  };

  return (
    <>
      <div className="container">
        <form className="form" onSubmit={handleRegister}>
          <h2>Registration Form</h2>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <button type="submit" className="btn btn-primary">
              Register
            </button>
            <button
              type="button"
              className="btn btn-success"
              onClick={handleLoginClick}
            >
              Go Back
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
