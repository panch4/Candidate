import React, { useEffect, useState } from "react";
import "../styles/Footer.css";

const Footer = () => {
  const [footerVisible, setFooterVisible] = useState(false);
  let lastScrollTop = 0; // Using a local variable to avoid unnecessary re-renders

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const scrollTop = window.scrollY;

      if (scrollTop + windowHeight >= scrollHeight - 30) {
        setFooterVisible(true); // Show footer when near the bottom
      } else if (scrollTop > lastScrollTop) {
        setFooterVisible(true); // Show footer when scrolling down
      } else {
        setFooterVisible(false); // Hide quickly when scrolling up
      }

      lastScrollTop = scrollTop; // Update last scroll position
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`footer-container ${footerVisible ? "" : "footer-hidden"}`}>
      <div className="footer-title">OpportunityHub</div>
      <div className="footer-text">
        Great platform for job seekers passionate about startups. Find your dream job easier.
      </div>
      <div className="footer-copyright">© 2025 OpportunityHub. All rights reserved.</div>
    </div>
  );
};

export default Footer;
