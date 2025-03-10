// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <Link to="/">School Portal</Link>
        </div>
        <div className="nav-links">
          <Link to="/admin" className="nav-link">Admin Page</Link>
          <Link to="/student" className="nav-link">Student Dashboard</Link>
          <Link to="/teacher" className="nav-link">Teacher Dashboard</Link>
          <Link to="/parent" className="nav-link">Parent Dashboard</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;