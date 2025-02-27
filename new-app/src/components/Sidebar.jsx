import React from "react";
import "./../styles/Sidebar.css";
import homeIcon from "./../assets/icons/home.svg";
import myProfileIcon from "./../assets/icons/myprofile.svg";
import myApplicationsIcon from "./../assets/icons/myapplications.svg";
import searchIcon from "./../assets/icons/search.svg";
import interviewIcon from "./../assets/icons/interview.svg";
import documentsIcon from "./../assets/icons/documents.svg";

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* Sidebar Header */}
      <div className="sidebar-header">
        <h2>OpportunityHub</h2>
      </div>

      {/* Navigation Menu */}
      <div className="menu-section">
        <ul className="menu">
          <li className="menu-item">
            <a href="/dashboard">
              <img src={homeIcon} alt="Home" className="icon" />
              Dashboard
            </a>
          </li>
          <li className="menu-item">
            <a href="/profile">
              <img src={myProfileIcon} alt="MyPublicProfile" className="icon" /> My Public Profile
            </a>
          </li>
          <li className="menu-item">
            <a href="/applications">
              <img src={myApplicationsIcon} alt="Applications" className="icon" /> My Applications
            </a>
          </li>
          <li className="menu-item active">
            <a href="/find-jobs">
              <img src={searchIcon} alt="Search" className="icon" /> Find Jobs
            </a>
          </li>
          <li className="menu-item">
            <a href="/interviews">
              <img src={interviewIcon} alt="Interviews" className="icon" /> Interviews
            </a>
          </li>
          <li className="menu-item">
            <a href="/documents">
              <img src={documentsIcon} alt="Documents" className="icon" /> Documents
            </a>
          </li>
        </ul>
      </div>

      {/* User Profile Section */}
      <div className="user-profile">
        <div className="user-details">
          <img src="src/assets/icons/Avatar.svg" alt="User" className="profile-pic-left" />
          <div className="user-info">
            <span className="user-name">Adithya Nayak</span>
            <span className="user-email">adithyanayak@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;