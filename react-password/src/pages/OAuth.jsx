import React from "react";
import { Link, useNavigate } from "react-router-dom";
import googleLogo from "C:/Users/ASUS/react-merged/src/assets/Google_Icons-09-512.webp";
import "C:/Users/ASUS/react-merged/src/OAuth.css";

const OAuth = () => {
  const navigate = useNavigate();

  const handleEmailClick = () => {
    navigate("/signup");
  };

  return (
    <div className="page-container">
      {/* Header */}
      <div className="header">
        <span className="logo">OpportunityHub</span>
      </div>

      {/* OAuth Content */}
      <div className="oauth-container">
        <div className="oauth-content">
          <h2 className="oauth-title">
            Unlimited access to job <span>opportunities</span>
          </h2>
          <p className="oauth-subtitle">Sign up to see more</p>
          <button className="google-btn">
            <img src={googleLogo} alt="Google Logo" className="google-logo" />
            <span>Continue with Google</span>
          </button>
          <button className="email-btn" onClick={handleEmailClick}>
            Continue with Email
          </button>
          <p className="terms">
            By continuing, you agree to the{" "}
            <span className="link">Terms of Service</span> and acknowledge our{" "}
            <span className="link">Privacy Policy</span>.
          </p>
          <p className="already-member">
            Already a member?{" "}
            <Link to="/" className="login-link">
              Log in
            </Link>
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <p>© 2025 OpportunityHub. All rights reserved.</p>
      </div>
    </div>
  );
};

export default OAuth;
