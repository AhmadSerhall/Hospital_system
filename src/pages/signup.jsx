import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TextField from '../components/textfield/textfield';
import Button from '../components/button/button';


const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSignupClick = async() => {
    console.log('Sign up clicked!');
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <TextField label="Username" value={username} placeholder="Enter your username" onChange={handleUsernameChange} />
      <TextField label="Password" value={password} placeholder="Enter your password" type="password" onChange={handlePasswordChange} />
      <TextField label="Confirm Password" value={confirmPassword} placeholder="Confirm your password" type="password" onChange={handleConfirmPasswordChange} />
      <Button label="Sign Up" onClick={handleSignupClick} />
      <p>Already have an account? <Link to="/">Log in</Link></p>
    </div>
  );
};

export default Signup;
