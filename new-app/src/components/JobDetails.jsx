import React, { useState } from "react";
import "../styles/JobDetails.css";
import JobIcon from "../assets/icons/jobicon/Icon.png";
import NotificationIcon from "../assets/icons/jobicon/Vector.png";
import MenuIcon from "../assets/icons/jobicon/Icon (1).png";
import HeaderLogo from "../assets/icons/jobicon/Rectangle 3890.png";

const JobDetails = () => {
  const [isRegistered, setIsRegistered] = useState(false);

  const handleRegister = () => {
    setIsRegistered(true); // Show success message
    setTimeout(() => setIsRegistered(false), 3000); // Hide after 3 seconds
  };

  return (
    <div className="job-details-container">
      {/* Header Section */}
      <div className="job-details-header">
        <div className="header-top">
          <img src={HeaderLogo} alt="Main Company Logo" className="header-logo" />
          <div className="role-info">
            <h2 className="role-title">Product Designer</h2>
            <p className="company-details-line">GreenSphere Ltd. • Mangalore, India</p>
          </div>
          <div className="header-icons">
            <img
              src={JobIcon}
              alt="Job Icon"
              className="header-icon clickable"
              onClick={() => alert("Job Icon clicked!")}
            />
            <img
              src={NotificationIcon}
              alt="Notification Icon"
              className="header-icon clickable"
              onClick={() => alert("Notification Icon clicked!")}
            />
            <img
              src={MenuIcon}
              alt="Menu Icon"
              className="header-icon clickable"
              onClick={() => alert("Menu Icon clicked!")}
            />
          </div>
        </div>
        <p className="job-posted">
          Posted on: 15 January 2025 | Expires on: 30 January 2025
        </p>
      </div>

      {/* Main Content */}
      <div className="job-details-content">
        <h3>Responsibilities:</h3>
        <ul>
          <li>Work on and execute design projects from start to finish.</li>
          <li>Collaborate closely with engineers, researchers, and product managers.</li>
          <li>Participate in user research and usability studies.</li>
          <li>Design wireframes and prototypes for multiple platforms.</li>
        </ul>

        <h3>Preferred Qualifications:</h3>
        <ul>
          <li>Experience with Figma, Sketch, or Adobe XD.</li>
          <li>Strong visual design skills.</li>
          <li>Familiarity with HTML/CSS and front-end development.</li>
        </ul>

        <h3>Skills:</h3>
        <ul>
          <li>Proficiency in user-centered design principles.</li>
          <li>Strong problem-solving and critical-thinking skills.</li>
          <li>Excellent communication and teamwork abilities.</li>
        </ul>

        <h3>Qualifications:</h3>
        <ul>
          <li>BA/BS degree in Design, HCI, or equivalent practical experience.</li>
          <li>3+ years of UX design experience.</li>
          <li>Portfolio of UX design work.</li>
        </ul>

        <button className="apply-button" onClick={handleRegister}>
          Register
        </button>
        {isRegistered && <p className="success-message">Successfully registered!</p>}
      </div>

      {/* Company Info */}
      <div className="company-info">
        <img src={HeaderLogo} alt="Company Logo" className="company-logo" />
        <div className="company-details">
          <h3>GreenSphere Ltd.</h3>
          <p>Telecommunications • 6,428 employees • Actively Hiring</p>
          <p>
            The right and contemporary use of technology is key for the progress of a
            nation. Keeping this in mind, GreenSphere has always pioneered the
            telecommunications industry in Bangladesh.
          </p>
          <a href="#" className="view-page-link">View Page</a>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
