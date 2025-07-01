import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" className="nav-title">RMSC COEP</Link>
      </div>
      <ul className="nav-links">
        <li className={location.pathname === "/" ? "active" : ""}>
          <Link to="/">Home</Link>
        </li>
        <li className={location.pathname === "/about" ? "active" : ""}>
          <Link to="/about">About</Link>
        </li>
        <li className={location.pathname === "/team" ? "active" : ""}>
          <Link to="/team">Team</Link>
        </li>
        <li className={location.pathname === "/events" ? "active" : ""}>
          <Link to="/events">Events</Link>
        </li>
        <li className={location.pathname === "/gallery" ? "active" : ""}>
          <Link to="/gallery">Gallery</Link>
        </li>
        <li className={location.pathname === "/quiz" ? "active" : ""}>
          <Link to="/quiz">Quiz</Link>
        </li>
        <li className={location.pathname === "/contact" ? "active" : ""}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
