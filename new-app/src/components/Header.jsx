import React from "react";
import "./../styles/Header.css";

const Header = () => {
  return (
    <div className="header">
      {/* First Row */}
      <div className="header-row">
        <input type="text" placeholder="Product Designer" className="search-input" />
        <select className="filter">
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="Japan">Japan</option>
        </select>
        <button className="search-btn">Search</button>
      </div>

      {/* Second Row */}
      <div className="header-row">
        <select className="filter">
          <option value="">Date Posted</option>
          <option value="last24hours">Last 24 hours</option>
          <option value="last7days">Last 7 days</option>
          <option value="last30days">Last 30 days</option>
        </select>

        <select className="filter">
          <option value="">Job Type</option>
          <option value="fulltime">Full-Time</option>
          <option value="parttime">Part-Time</option>
          <option value="freelance">Freelance</option>
        </select>

        <select className="filter">
          <option value="">Experience Level</option>
          <option value="entry">Entry Level</option>
          <option value="mid">Mid Level</option>
          <option value="senior">Senior Level</option>
        </select>

        <select className="filter">
          <option value="">On-Site/Remote</option>
          <option value="onsite">On-Site</option>
          <option value="remote">Remote</option>
          <option value="hybrid">Hybrid</option>
        </select>
        <select className="filter">
          <option value="">Company</option>
          <option value="onsite">Google</option>
          <option value="remote">Microsoft</option>
          <option value="hybrid">Nutanix</option>
        </select>
        
        <button className="search-btn">All filter</button>
      </div>
    </div>
  );
};

export default Header;
