import React, { useState } from "react";
import "../styles/Skills.css";

const SkillsSection = () => {
  const [skills, setSkills] = useState([
    "Figma",
    "Adobe XD",
    "HTML & CSS",
    "React",
    "JavaScript",
  ]);

  const [newSkill, setNewSkill] = useState("");
  const [removalMode, setRemovalMode] = useState(false); // Toggle removal mode

  const addSkill = () => {
    if (newSkill.trim() !== "" && !skills.includes(newSkill)) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill(""); // Clear input after adding
    }
  };

  const removeSkill = (skillToRemove) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove));
  };

  return (
    <div className="skill-section">
      <h2>Skills</h2>

      {/* Buttons for Adding & Removing */}
      <div className="skill-actions">
        <button className="add-btn" onClick={addSkill}>Add</button>
        <button
          className={`remove-btn ${removalMode ? "active" : ""}`}
          onClick={() => setRemovalMode(!removalMode)}
        >
          Remove
        </button>
      </div>
        {/* Input Field for Adding Skills */}
      <div className="skills-container">
        {skills.map((skill, index) => (
          <span
            key={index}
            className={`skill-item ${removalMode ? "selectable" : ""}`}
            onClick={() => removalMode && removeSkill(skill)}
          >
            {skill}
          </span>
        ))}
      </div>
      
      <div className="skill-input">
        <input
          type="text"
          placeholder="Enter a skill"
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
        />
      </div>

      {/* Skills List */}
      
    </div>
  );
};

export default SkillsSection;
