import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Ramanujan Mathematics and Science Club, COEP Technological University</p>
    </footer>
  );
};

export default Footer;
