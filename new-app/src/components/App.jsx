import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import JobList from "./JobList";
import JobDetails from "./JobDetails";
import Footer from "./Footer";
import "../styles/App.css";

const App = () => {
  return (
    <div className="app-container">
      {/* Sidebar */}
      <div className="sidebar">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Header */}
        <div className="header">
          <Header />
        </div>

        {/* Job Layout */}
        <div className="content-area">
          <div className="job-layout">
            <div className="job-sidebar">
              <JobList />
            </div>
            <JobDetails />
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App