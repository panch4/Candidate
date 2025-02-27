import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'C:/Users/ASUS/react-merged/src/login.css';
import loginImage from 'C:/Users/ASUS/react-merged/src/assets/19184614_6101000 1.png'; 

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="page-container">
      {/* Header */}
      <header className="header">
        <h1>OpportunityHub</h1>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <div className="login-container">
          <div className="login-form">
            <h2>Log In</h2>
            {/* Image Container */}
            <div className="image-container">
              <img src={loginImage} alt="Login" className="login-image" />
            </div>
            <div className="input-group">
              <input type="email" placeholder="Email Address" />
            </div>
            <div className="input-group password-group">
              <input
                type={passwordVisible ? 'text' : 'password'}
                placeholder="Password"
              />
              <span
                className="password-toggle-icon"
                onClick={togglePasswordVisibility}
              >
                {passwordVisible ? 'Hide' : 'Show'}
              </span>
            </div>
            <div className="forgot-password">
            <Link to="/otp">Forgot password?</Link>
            </div>
            <button className="login-btn">Log In</button>
            <div className="links">
              <p>
                Don't have an account?{' '}
                <Link to="/oauth">Sign Up</Link>
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 OpportunityHub. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Login;
