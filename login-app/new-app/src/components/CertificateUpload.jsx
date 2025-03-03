import React, { useState, useRef } from "react";
import "../styles/CertificateUpload.css";

const CertificateUpload = () => {
  const [certificates, setCertificates] = useState([]);
  const fileInputRef = useRef(null);

  // Function to Handle Certificate Upload
  const handleCertificateUpload = (event) => {
    const files = Array.from(event.target.files);
    const newCertificates = files.map((file) => ({
      name: file.name,
      url: URL.createObjectURL(file),
      type: file.type,
    }));

    setCertificates([...certificates, ...newCertificates]);

    // Clear the file input field to hide the file name
    event.target.value = "";
  };

  // Function to Remove a Certificate
  const removeCertificate = (index) => {
    setCertificates(certificates.filter((_, i) => i !== index));
  };

  return (
    <div className="certificate-upload-container">
      <h2>Upload Certificates</h2>

      {/* File Upload Input (Hidden File Name) */}
      <input
        type="file"
        multiple
        accept=".pdf,.jpg,.png"
        ref={fileInputRef}
        onChange={handleCertificateUpload}
      />

      {/* Display Uploaded Certificates */}
      <div className="certificate-list">
        {certificates.map((cert, index) => (
          <div key={index} className="certificate-item">
            {cert.type.includes("image") ? (
              <img src={cert.url} alt={cert.name} className="certificate-preview" />
            ) : (
              <a href={cert.url} target="_blank" rel="noopener noreferrer">
                {cert.name}
              </a>
            )}
            <button className="remove-cert-btn" onClick={() => removeCertificate(index)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificateUpload;
