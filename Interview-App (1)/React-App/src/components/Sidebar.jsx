import React from 'react';
import '../styles/Sidebar.css'; // Corrected import path

import DashboardIcon from '../assets/home.svg';
import ProfileIcon from '../assets/myprofile.svg';
import ApplicationsIcon from '../assets/myapplications.svg';
import JobsIcon from '../assets/findjob.svg';
import InterviewsIcon from '../assets/interview.svg';
import DocumentsIcon from '../assets/documents.svg';
import profileImage from '../assets/Avatar.svg';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="logo-area">
        <h1>OpportunityHub</h1>
      </div>
      <ul className="nav-links">
        <li className="nav-item">
          <a href="#" className="nav-link">
            <img src={DashboardIcon} alt="Dashboard" className="nav-icon" />
            Dashboard
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <img src={ProfileIcon} alt="My Public Profile" className="nav-icon" />
            My Public Profile
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <img src={ApplicationsIcon} alt="My Applications" className="nav-icon" />
            My Applications
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <img src={JobsIcon} alt="Find Jobs" className="nav-icon" />
            Find Jobs
          </a>
        </li>
        <li className="nav-item interviews-link"> 
                    <a href="#" className="nav-link">
                        <img src={InterviewsIcon} alt="Interviews" className="nav-icon" />
                        Interviews
                    </a>
                </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <img src={DocumentsIcon} alt="Documents" className="nav-icon" />
            Documents
          </a>
        </li>
      </ul>
      <div className="user-profile">
        <img src={profileImage} alt="Adithya nayak" className="profile-image" />
        <div className="user-details">
          <p className="user-name">Adithya nayak</p>
          <p className="user-email">adithyanayak12@gmail.com</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;