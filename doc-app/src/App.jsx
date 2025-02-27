import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import DocumentUpload from "./components/DocumentUpload/DocumentUpload";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";  // Import Footer
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        {/* Sidebar (Header) */}
        <Header />

        <div className="content-wrapper">
          {/* Main Content Area */}
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Navigate replace to="/documents" />} />
              <Route path="/documents" element={<DocumentUpload />} />
            </Routes>
          </div>

          {/* Footer - Placed after content */}
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
