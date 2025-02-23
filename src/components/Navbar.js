import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/teacher">Teacher Dashboard</Link>
      <Link to="/admin">Admin Page</Link>
      <Link to="/student">Student Dashboard</Link>.
      <Link to="/teacher">Teacher Dashboard</Link>
      <Link to="/parent">Parent Dashboard</Link>
    </nav>
  );
};

export default Navbar;