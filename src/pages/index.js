import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate

import TextField from '../components/textfield/textfield';
import Button from '../components/button/button';

const Index = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleButtonClick = () => {
    // For simplicity, just navigate to the "/login" route when the button is clicked
    // You can add your authentication logic here
    navigate('/login');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://api/login.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
  
      const result = await response.json();
  
      if (result.success) {
        // Authentication successful, navigate to /patient
        navigate('/patient');
      } else {
        // Authentication failed, display error message
        console.error('Authentication failed:', result.error);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <div>
      <h1>Welcome to the medical application</h1>
      <h3>
        Manage your healthcare appointments with ease. Schedule appointments, track your medical history,
        and stay connected with your healthcare providers.
      </h3>
      {/* Add a form with onSubmit event */}
      <form onSubmit={handleSubmit}>
        <TextField label="Username" value={username} placeholder='enter your username' onChange={handleUsernameChange} />
        <TextField label="Password" value={password} placeholder='enter your password' onChange={handlePasswordChange} />
        <Button label="Log In" type="submit" onClick={handleButtonClick} />
      </form>
      <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
    </div>
  );
}

export default Index;
