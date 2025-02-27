import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

// Importing icons
import dashboardIcon from '../../assets/icons/Dashboard.svg';
import profileIcon from '../../assets/icons/My Profile.svg';
import applicationsIcon from '../../assets/icons/My Applications.svg';
import jobsIcon from '../../assets/icons/Find Jobs.svg';
import interviewsIcon from '../../assets/icons/Interviews.svg';
import documentsIcon from '../../assets/icons/Documents.svg';

const Header = () => {
  return (
    <div className="header">
      <h2 className="header-title">OpportunityHub</h2>
      <nav className="nav-menu">
        <Link to="/" className="nav-item">
          <img src={dashboardIcon} alt="Dashboard" className="nav-icon" />
          Dashboard
        </Link>
        <Link to="/profile" className="nav-item">
          <img src={profileIcon} alt="My Profile" className="nav-icon" />
          My Profile
        </Link>
        <Link to="/applications" className="nav-item">
          <img src={applicationsIcon} alt="My Applications" className="nav-icon" />
          My Applications
        </Link>
        <Link to="/jobs" className="nav-item">
          <img src={jobsIcon} alt="Find Jobs" className="nav-icon" />
          Find Jobs
        </Link>
        <Link to="/interviews" className="nav-item">
          <img src={interviewsIcon} alt="Interviews" className="nav-icon" />
          Interviews
        </Link>
        {/* Keeping "Documents" always highlighted */}
        <Link to="/documents" className="nav-item active">
          <img src={documentsIcon} alt="Documents" className="nav-icon" />
          Documents
        </Link>
      </nav>
      <div className="profile-section">
        <img src="src/assets/icons/Profile Pic.svg" alt="Adithya Nayak" className="profile-pic" />
        <div className="profile-info">
          <span className="profile-name">Adithya Nayak</span>
          <span className="profile-email">adithyanayak123@gmail.com</span>
        </div>
      </div>
    </div>
  );
};

export default Header;