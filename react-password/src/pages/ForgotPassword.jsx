import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "C:/Users/ASUS/react-password/src/ForgotPassword.css"; 
import resetPasswordImage from '../assets/19184614_6101000 1.png'; 

const ForgotPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const validatePassword = () => {
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return false;
    }
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      setErrorMessage('Password must contain 8+ characters, including letters, numbers, and symbols.');
      return false;
    }
    setErrorMessage('');
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validatePassword()) {
      alert('Password successfully updated!');
    }
  };

  return (
    <div className="page-container">
      <header className="header">
        <h1>OpportunityHub</h1>
      </header>

      <main className="main-content">
        <div className="login-container">
          <div className="login-form">
            <h2>Reset Password</h2>
            
            {/* Image */}
            <div className="image-container">
              <img src={resetPasswordImage} alt="Reset Password" className="reset-password-image" />
            </div>

            <form onSubmit={handleSubmit}>
              <div className="input-group password-group">
                <input
                  type={passwordVisible ? 'text' : 'password'}
                  placeholder="Enter New Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span
                  className="password-toggle-icon"
                  onClick={() => setPasswordVisible(!passwordVisible)}
                >
                  {passwordVisible ? 'Hide' : 'Show'}
                </span>
              </div>

              <div className="input-group password-group">
                <input
                  type={confirmPasswordVisible ? 'text' : 'password'}
                  placeholder="Confirm New Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <span
                  className="password-toggle-icon"
                  onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
                >
                  {confirmPasswordVisible ? 'Hide' : 'Show'}
                </span>
              </div>

              {errorMessage && <p className="error-message">{errorMessage}</p>}

              <button type="submit" className="login-btn">Reset Password</button>
            </form>

            <div className="links">
              <p>
                Remember your password? <Link to="/">Log In</Link>
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="footer">
        <p>© 2025 OpportunityHub. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ForgotPassword;
