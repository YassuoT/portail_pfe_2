import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

function RegistrationForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestOptions = {
      
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, email, phone, password })
    };

    fetch('http://localhost:8080/api/v1/auth/register', requestOptions)
      .then(response => response.json())
      .then(data => console.log(data))
      .then(Navigate('login'))
      .catch(error => console.error(error));
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
      <input type="text" id="username" value={username} onChange={e => setUsername(e.target.value)} required />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} required />

      <label htmlFor="phone">Phone Number:</label>
      <input type="tel" id="phone" value={phone} onChange={e => setPhone(e.target.value)} required />

      <label htmlFor="password">Password:</label>
      <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} required />

      <button type="submit">Register</button>
      <button onClick={Navigate('login')}>Retour</button>
    </form>
  );
}

export default RegistrationForm;