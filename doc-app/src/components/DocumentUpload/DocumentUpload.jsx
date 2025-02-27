import { useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import "./DocumentUpload.css"; // Importing the CSS file

const DocumentUpload = () => {
  const documentCategories = [
    {
      title: "Educational Documents",
      documents: ["SSLC Marksheet", "PU Marksheet", "Graduation Transcript"],
    },
    {
      title: "Skills",
      documents: ["Resume", "Certifications"],
    },
    {
      title: "Personal Documents",
      documents: ["Adhar Card", "Passport", "Pan Card"],
    },
  ];

  const [files, setFiles] = useState({});

  const handleFileChange = (event, docName) => {
    const file = event.target.files[0];
    setFiles({ ...files, [docName]: file ? file.name : "" });
  };

  return (
    <div className="upload-container">
      <h2 className="title">Upload Documents</h2>
      {documentCategories.map((category, index) => (
        <div key={index} className="category">
          <h3>{category.title}</h3>
          {category.documents.map((doc, i) => (
            <div key={i} className="upload-box">
              <span className="doc-name">{doc}</span>
              <div className="upload-btn-container">
                <label className="upload-btn">
                  <FaCloudUploadAlt className="upload-icon" />
                  Attach
                  <input
                    type="file"
                    onChange={(e) => handleFileChange(e, doc)}
                    hidden
                  />
                </label>
                {files[doc] && <span className="file-name">{files[doc]}</span>}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default DocumentUpload;
