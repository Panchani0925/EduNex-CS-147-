import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import TeacherDashboard from './components/TeacherDashboard.jsx';
import AdminPage from './components/AdminPage.jsx';
import StudentDashboard from './components/StudentDashboard.jsx';
import Navbar from './components/Navbar.jsx';
import ParentDashboard from "./components/ParentDashboard.jsx";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Add a home route that redirects to an appropriate dashboard */}
        <Route path="/" element={<Navigate to="/student" replace />} />
        
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/teacher" element={<TeacherDashboard />} />
        <Route path="/parent" element={<ParentDashboard />} />
        
        {/* Add a catch-all route for undefined routes */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;