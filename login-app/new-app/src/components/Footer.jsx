import React, { useState, useEffect } from "react";
import "../styles/Footer.css"; // Correct relative path

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;
      const clientHeight = document.documentElement.clientHeight;
      setIsVisible(scrollTop + clientHeight >= scrollHeight - 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className={`footer ${isVisible ? "visible" : "hidden"}`}>
      <pre className="footer-copyright">
        2025 © OpportunityHub. All rights reserved.
      </pre>
    </footer>
  );
};

export default Footer;
