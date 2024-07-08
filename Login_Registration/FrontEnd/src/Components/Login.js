import React, { useState } from "react";
import './Loginsty.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:3003/login', { username, password });
      console.log('Login successful:', response.data);
      
      // Optionally, you can navigate to another page upon successful login
      // navigate('/dashboard');

      // Show alert upon successful login
      alert('Login successful!');
      navigate("/dashboard");
    } catch (error) {
      console.error('Login failed:', error);
      // Handle error state or display error message
      alert('Login failed. Please check your credentials.');
    }
  };

  const handleRegisterClick = () => {
    navigate("/register");
  };

  return (
    <>
      <div className="container mt-5">
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input 
              type="text" 
              className="form-control" 
              id="username" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input 
              type="password" 
              className="form-control" 
              id="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required
            />
          </div>
  
          <button type="submit" className="btn btn-primary">Login</button>

          <button 
            type="button" 
            className="btn btn-success" 
            onClick={handleRegisterClick}
          >
            Register
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
