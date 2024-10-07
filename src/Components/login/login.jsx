import React, { useState } from 'react';
import './login.css';

const Login = () => {
  const [activeTab, setActiveTab] = useState('login');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupConfirmPassword, setSignupConfirmPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login attempt with:', { email: loginEmail, password: loginPassword });
    // Here you would typically make an API call to authenticate the user
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (signupPassword !== signupConfirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    console.log('Signup attempt with:', { email: signupEmail, password: signupPassword });
    // Here you would typically make an API call to register the user
  };
  const handleTabClick = (tab) => {
    // console.log(`Switching to tab: ${tab}`);
    setActiveTab(tab);
  };

  return (
    <div className="login-signup-container">
      <div className="form-container">
        <h2 className="title">Welcome to RSR Aviation</h2>
        <p className="subtitle">Login or create an account</p>
        
        <div className="tabs">
          <button
            className={`tab ${activeTab === 'login' ? 'active' : ''}`}
            onClick={() => handleTabClick('login')}
          >
            Login
          </button>
          <button
            className={`tab ${activeTab === 'signup' ? 'active' : ''}`}
            onClick={() => handleTabClick('signup')}
          >
            Sign Up
          </button>
        </div>

        {activeTab === 'login' ? (
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="loginEmail">Email</label>
              <input
                id="loginEmail"
                type="email"
                placeholder="Enter your email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="loginPassword">Password</label>
              <input
                id="loginPassword"
                type="password"
                placeholder="Enter your password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="submit-button">Login</button>
          </form>
        ) : (
          <form onSubmit={handleSignup}>
            <div className="form-group">
              <label htmlFor="signupEmail">Email</label>
              <input
                id="signupEmail"
                type="email"
                placeholder="Enter your email"
                value={signupEmail}
                onChange={(e) => setSignupEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="signupPassword">Password</label>
              <input
                id="signupPassword"
                type="password"
                placeholder="Create a password"
                value={signupPassword}
                onChange={(e) => setSignupPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="signupConfirmPassword">Confirm Password</label>
              <input
                id="signupConfirmPassword"
                type="password"
                placeholder="Confirm your password"
                value={signupConfirmPassword}
                onChange={(e) => setSignupConfirmPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="submit-button">Sign Up</button>
          </form>
        )}

        <p className="terms">
          By continuing, you agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default Login;