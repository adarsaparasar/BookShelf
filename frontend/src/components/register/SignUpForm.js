// frontend/src/components/SignUpForm.js
import './signup.css'
import React, { useState } from 'react';
import axios from 'axios';

function SignUpForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/signup', { email, password });
      console.log('Signup successful.');
      // Handle successful sign up, e.g., redirect to login page
    } catch (error) {
      console.error('Signup failed:', error.response.data.message);
    }
  };

  return (
    <div class="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpForm;
