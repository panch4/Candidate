// App.jsx
import React from 'react';
import Sidebar from "./components/Sidebar";
import InterviewCard from "./components/InterviewCard";
import Footer from "./components/Footer";

  // Import Footer

const App = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <InterviewCard />
        <Footer />  {/* Footer at the bottom */}
      </div>
    </div>
  );
};

export default App;
