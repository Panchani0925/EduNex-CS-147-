import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
        
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/teacher" element={<TeacherDashboard />} />
        <Route path="/parent" element={<ParentDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;