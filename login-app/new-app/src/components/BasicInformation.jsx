import React, { useState } from "react";
import "../styles/BasicInformation.css";

const BasicInformation = () => {
  const [info, setInfo] = useState({
    email: "adithyanayak123@gmail.com",
    phone: "+91 963682",
    location: "Mangalore, India",
    githublink:"abc",
    linkedinlink:"lkdh"
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const toggleEdit = () => {
    setIsEditing((prev) => !prev);
  };

  return (
    <div className="basic-info">
      <div className="basic-info-header">
        <h2>Basic Information</h2>
        <button className="edit-btn" onClick={toggleEdit}>
          {isEditing ? "Save" : "Edit"}
        </button>
      </div>
      <div className="info-content">
        {isEditing ? (
          <>
            <input
              type="email"
              name="email"
              value={info.email}
              onChange={handleChange}
            />
            <input
              type="text"
              name="phone"
              value={info.phone}
              onChange={handleChange}
            />
            <input
              type="text"
              name="location"
              value={info.location}
              onChange={handleChange}
            />
            <input
              type="text"
              name="githublink"
              value={info.githublink}
              onChange={handleChange}
            />
             <input
              type="text"
              name="linkedinlink"
              value={info.linkedinlink}
              onChange={handleChange}
            />
          </>
        ) : (
          <>
            <p><strong>Email:</strong> {info.email}</p>
            <p><strong>Phone:</strong> {info.phone}</p>
            <p><strong>Location:</strong> {info.location}</p>
            <p><strong>Github:</strong> {info.githublink}</p>
            <p><strong>Linkedin:</strong> {info.linkedinlink}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default BasicInformation;
//training and courses, certificate
//extra curricular activity
//projects reasearch/personal
//gitand linkedin links
//additional 