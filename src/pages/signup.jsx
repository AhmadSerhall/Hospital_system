import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import TextField from '../components/textfield/textfield';
import Button from '../components/button/button';
import { sendRequest } from '../core/helpers/request';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSignupClick = async () => {
    try {
      if (password !== confirmPassword) {
        setError('Passwords do not match');
        return;
      }

      const response = await sendRequest({
        route: '/signup',
        method: 'POST',
        body: { username, password },
      });

      if (response.success) {
        // Redirect or handle successful signup
        console.log('Signup successful!');
        navigate('/login'); // Redirect to the login page after successful signup
      } else {
        setError(response.error || 'Signup failed');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An unexpected error occurred');
    }
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <TextField label="Username" value={username} placeholder="Enter your username" onChange={handleUsernameChange} />
      <TextField label="Password" value={password} placeholder="Enter your password" type="password" onChange={handlePasswordChange} />
      <TextField label="Confirm Password" value={confirmPassword} placeholder="Confirm your password" type="password" onChange={handleConfirmPasswordChange} />
      <Button label="Sign Up" onClick={handleSignupClick} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <p>Already have an account? <Link to="/">Log in</Link></p>
    </div>
  );
};

export default Signup;
