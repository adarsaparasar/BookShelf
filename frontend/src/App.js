// frontend/src/App.js
import React from 'react';
import { Routes ,Route } from 'react-router-dom';
import LoginForm from './components/register/LoginForm';
import SignUpForm from './components/register/SignUpForm';
import ForgotPasswordForm from './components/register/ForgotPasswordForm';

function App() {
  return (
    
      <div className="App">
      <Routes>
       
          <Route   path="login" element={<LoginForm/>} />
          <Route  path="signup" element={<SignUpForm/>} />
          <Route  path="forgot-password" element={<ForgotPasswordForm/>} />
        
        </Routes>
      </div>
    
  );
}

export default App;
