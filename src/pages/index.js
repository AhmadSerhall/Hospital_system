import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import TextField from '../components/textfield/textfield';
import Button from '../components/button/button';

const Index = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost/hospital_backend/api/login.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const result = await response.json();

      if (result.status === 'logged in') {
        navigate('/patient', { state: { user_id: result.user_id, username: result.username } });
      } else {
        setError(result.status);
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An unexpected error occurred');
    }
  };

  return (
    <div>
      <h1 className='title center'>Welcome to the medical application</h1>
      <h3 className='subtitle center'>
        Manage your healthcare appointments with ease. Schedule appointments, track your medical history,
        and stay connected with your healthcare providers.
      </h3>
      <form onSubmit={handleSubmit}>
        <TextField label="Username" value={username} placeholder='enter your username' onChange={handleUsernameChange} />
        <TextField label="Password" value={password} placeholder='enter your password' onChange={handlePasswordChange} />
        <Button label="Log In" type="submit" />
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
    </div>
  );
}

export default Index;
