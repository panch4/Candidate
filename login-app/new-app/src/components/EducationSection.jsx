import React, { useState } from "react";
import "../styles/EducationSection.css";

const EducationSection = () => {
  const [educationList, setEducationList] = useState([
    { degree: "Bachelor's in Design", university: "XYZ University", duration: "2018 - 2022" },
  ]);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [tempEducation, setTempEducation] = useState({ degree: "", university: "", duration: "" });

  const addEducation = () => {
    setEducationList([
      ...educationList,
      { degree: "", university: "", duration: "" }, // Adding an empty item to edit
    ]);
    setIsEditing(true);
    setEditIndex(educationList.length); // Set the new index to be edited
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTempEducation((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setTempEducation(educationList[index]); // Copy the values to temporary state for editing
    setIsEditing(true); // Enable editing when Edit is pressed
  };

  const saveEducation = () => {
    const updatedEducationList = [...educationList];
    updatedEducationList[editIndex] = tempEducation; // Update the specific entry with the temp data
    setEducationList(updatedEducationList);
    setIsEditing(false); // Disable editing after saving
    setEditIndex(null); // Clear the edit index
    setTempEducation({ degree: "", university: "", duration: "" }); // Clear temporary data
  };

  return (
    <div className="education-section">
      <h2>Education</h2>
      {educationList.map((education, index) => (
        <div key={index} className="education-item">
          {/* Show input only when editing */}
          {isEditing && editIndex === index ? (
            <>
              <input
                type="text"
                name="degree"
                value={tempEducation.degree}
                placeholder="Degree"
                onChange={handleChange}
              />
              <input
                type="text"
                name="university"
                value={tempEducation.university}
                placeholder="University"
                onChange={handleChange}
              />
              <input
                type="text"
                name="duration"
                value={tempEducation.duration}
                placeholder="Duration"
                onChange={handleChange}
              />
              <button className="edit-btn" onClick={saveEducation}>
                Save
              </button>
            </>
          ) : (
            <>
              <p><strong>Degree:</strong> {education.degree}</p>
              <p><strong>University:</strong> {education.university}</p>
              <p><strong>Duration:</strong> {education.duration}</p>
              <button className="edit-btn" onClick={() => handleEdit(index)}>
                Edit
              </button>
            </>
          )}
        </div>
      ))}
      {!isEditing && (
        <button className="add-btn" onClick={addEducation}>
          Add Education
        </button>
      )}
    </div>
  );
};

export default EducationSection;
