import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TeacherDashboard from './components/TeacherDashboard';
import AdminPage from './components/AdminPage';
import StudentDashboard from './components/StudentDashboard';
import Navbar from './components/Navbar';
import ParentDashboard from "./components/ParentDashboard";

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