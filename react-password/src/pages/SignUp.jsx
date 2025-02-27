import React, { useState } from "react";
import "C:/Users/ASUS/react-merged/src/SignUp.css";
import { Link } from "react-router-dom";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    termsAccepted: false,
    updatesAccepted: false,
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const validatePassword = (password) => {
    const regex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    if (name === "password") {
      setErrors({
        ...errors,
        password: validatePassword(value)
          ? ""
          : "Password must contain 8+ characters, including letters, numbers, and symbols.",
      });
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const isFormValid = () => {
    return (
      formData.fullName &&
      formData.email &&
      validatePassword(formData.password) &&
      formData.termsAccepted
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      alert("Form submitted successfully!");
    } else {
      alert("Please fill in all fields correctly.");
    }
  };

  return (
    <div className="page-container">
      {/* Header */}
      <div className="header">
        <span className="logo">OpportunityHub</span>
      </div>

      <div className="signup-container">
        <form onSubmit={handleSubmit} className="signup-form">
          <h2>Sign up now</h2>
          <div className="form-group">
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
            />
          </div>
          <div className="form-group">
            <div className="password-container">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                required
              />
              <button
                type="button"
                className="show-hide-btn"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            {errors.password && <p className="error-message">{errors.password}</p>}
          </div>
          <div className="form-group checkbox-group">
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
              required
            />
            <label className="checkbox-label">
              By creating an account, I agree to your{" "}
              <a href="/">Terms of Service</a> and{" "}
              <a href="/">Privacy Policy</a>.
            </label>
          </div>
          <div className="form-group checkbox-group">
            <input
              type="checkbox"
              name="updatesAccepted"
              checked={formData.updatesAccepted}
              onChange={handleChange}
            />
            <label className="checkbox-label">
              By creating an account, I agree to receive SMS messages and emails
              about product updates, resources, and job opportunities.
            </label>
          </div>
          <button
            type="submit"
            disabled={!isFormValid()}
            className="submit-button"
          >
            Create Account
          </button>
          <p className="login-link">
            Already have an account? <Link to="/">Log in</Link>
          </p>
        </form>
      </div>

      {/* Footer */}
      <div className="footer">
        <p>&copy; 2025 OpportunityHub. All rights reserved.</p>
      </div>
    </div>
  );
};

export default SignupForm;
