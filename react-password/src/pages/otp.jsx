import React, { useState, useEffect } from 'react'; 
import { useNavigate } from 'react-router-dom';
import '../otp.css';  
import loginImage from '../assets/19184614_6101000 1.png';  
import backIcon from '../assets/back.png';  

const OTPVerification = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [message, setMessage] = useState('');
  const [timer, setTimer] = useState(30);
  const [isResendDisabled, setIsResendDisabled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let countdown;
    if (isOtpSent && timer > 0) {
      countdown = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0) {
      clearInterval(countdown);
      setIsResendDisabled(false);
    }

    return () => clearInterval(countdown);
  }, [isOtpSent, timer]);

  const sendOtp = () => {
    if (email.trim() === '') {
      setMessage('Please enter a valid email address.');
      return;
    }
    setIsOtpSent(true);
    setMessage('OTP has been sent to your registered email address.');
    setTimer(30);
    setIsResendDisabled(true);
  };

  const resendOtp = () => {
    setMessage('Resending OTP...');
    setTimer(30);
    setIsResendDisabled(true);
    setTimeout(() => {
      setMessage('OTP has been resent to your email address.');
    }, 2000);
  };

  return (
    <div className="page-container">
      <header className="header">
        <h1>OpportunityHub</h1>
      </header>

      <main className="main-content">
        <div className="login-container">
          <div className="login-form">
            <h2>OTP Verification</h2>
            <div className="image-container">
              <img src={loginImage} alt="OTP Verification" className="login-image" />
            </div>
            <div className="input-group">
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {isOtpSent && (
              <>
                <div className="otp-input">
                  {Array(6).fill('').map((_, index) => (
                    <input
                      key={index}
                      type="text"
                      maxLength="1"
                      value={otp[index] || ''}
                      onChange={(e) => {
                        let value = e.target.value;
                        if (/[^0-9]/.test(value)) return;
                        setOtp(prev => {
                          const newOtp = [...prev];
                          newOtp[index] = value;
                          if (value && index < 5) {
                            document.getElementById(`otp-${index + 1}`).focus();
                          }
                          return newOtp;
                        });
                      }}
                      id={`otp-${index}`}
                    />
                  ))}
                </div>
              </>
            )}
            {message && <p className="message">{message}</p>}
            {!isOtpSent ? (
              <button className="login-btn" onClick={sendOtp}>Send OTP</button>
            ) : (
              <button className="login-btn">Verify OTP</button>
            )}
            {isOtpSent && timer > 0 && (
              <p className="timer-message">
                <span className="grey-text">Resend OTP in:</span> 
                <span className="blue-text"> {timer} seconds</span>
              </p>
            )}
            {isOtpSent && timer === 0 && (
              <p className="resend-message" onClick={resendOtp}>
                <span className="grey-text">Click here to</span> 
                <span className="blue-text"> Resend OTP</span>
              </p>
            )}
            <div className="back-to-login" onClick={() => navigate('/')}>
              <img src={backIcon} alt="Back" className="back-icon" />
              <span className="grey-text">Back to</span>
              <span className="blue-text">Login</span>
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

export default OTPVerification;
