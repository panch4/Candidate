
// InterviewCard.jsx
import React from 'react';

const InterviewCard = () => {
  return (
    <div className="interview-card">
      <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google Logo" className="company-logo" />
      <h3>Google - Software Engineer (Trainee)</h3>
      <p>15 Oct 24 | 9:00 AM - 11:00 AM</p>
      <div className="status-message">
        <p>Please wait patiently, You do not have to take any action now</p>
        <p>Be Online until you get a notification from the Interviewer</p>
      </div>
      <p>While you are waiting, make sure your device is ready by taking the system check test here</p>
      <a href="#">System check</a>
      <a href="#">Having Trouble? Click here</a>
    </div>
  );
};

export default InterviewCard;