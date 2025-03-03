import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

import BasicInformation from "./BasicInformation";
import EducationSection from "./EducationSection";
import ExperienceSection from "./ExperienceSection";
import Footer from "./Footer";
import "../styles/App.css";
import SkillsSection from "./Skills";
import CertificateUpload from "./CertificateUpload";

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
        <Header></Header>
 
        <div className="content-area">
        
            
          <BasicInformation/>
          <EducationSection/>
          <ExperienceSection/>
          <SkillsSection/>
          <CertificateUpload/>
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
