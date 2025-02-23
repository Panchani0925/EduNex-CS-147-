import React, { useState } from "react";
import { Bar, Line } from "react-chartjs-2";
import { Typography, Card, CardContent, Grid, Paper, Button, Badge, Dialog, DialogTitle, DialogContent, DialogActions, Switch, TextField, MenuItem } from "@mui/material";
import { WiDaySunny, WiNightClear } from "react-icons/wi";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend } from "chart.js";
import { Link, useNavigate } from "react-router-dom";
//import "./TeacherDashboard.css";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend);

const TeacherDashboard = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedNotification, setSelectedNotification] = useState(null);
  const [openNotificationDialog, setOpenNotificationDialog] = useState(false);
  const [openCreateCourseDialog, setOpenCreateCourseDialog] = useState(false);
  const [openCreateAssignmentDialog, setOpenCreateAssignmentDialog] = useState(false);
  const [openFeedbackDialog, setOpenFeedbackDialog] = useState(false);
  const [openLiveClassDialog, setOpenLiveClassDialog] = useState(false);

  // Form states
  const [courseName, setCourseName] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [assignmentTitle, setAssignmentTitle] = useState("");
  const [assignmentDueDate, setAssignmentDueDate] = useState("");
  const [feedback, setFeedback] = useState("");
  const [liveClassTitle, setLiveClassTitle] = useState("");
  const [liveClassDate, setLiveClassDate] = useState("");
  const [liveClassTime, setLiveClassTime] = useState("");

  // Dark mode toggle
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Mock data for student performance
  const studentPerformanceData = {
    labels: ["Nimal Siripala", "Kamal Perera", "Saman Silva"],
    datasets: [
      {
        label: "Performance",
        data: [80, 70, 90],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  // Mock data for assignments
  const assignments = [
    { id: 1, title: "Math Assignment", due: "2024-12-25" },
    { id: 2, title: "Science Project", due: "2024-12-28" },
  ];

  // Mock data for notifications
  const notifications = [
    { id: 1, message: "New Math assignment posted.", details: "Complete Chapter 5 exercises by next week." },
    { id: 2, message: "Science exam scheduled for next week.", details: "Prepare for the exam on December 28th." },
  ];

  // Mock data for courses
  const courses = [
    { id: 1, name: "Advanced Mathematics", students: 30 },
    { id: 2, name: "Introduction to Science", students: 25 },
    { id: 3, name: "English Literature", students: 20 },
  ];

  // Mock data for resources
  const resources = [
    { id: 1, title: "Math Notes", type: "PDF", link: "https://example.com/math-notes" },
    { id: 2, title: "Science Past Papers", type: "PDF", link: "https://example.com/science-papers" },
    { id: 3, title: "English Lecture Slides", type: "PPT", link: "https://example.com/english-slides" },
  ];

  // Mock data for discussion forums
  const discussionForums = [
    { id: 1, topic: "Math Homework Help", posts: 12 },
    { id: 2, topic: "Science Project Discussion", posts: 8 },
    { id: 3, topic: "English Essay Tips", posts: 15 },
  ];

  // Mock data for live classes
  const liveClasses = [
    { id: 1, title: "Math Live Session", date: "2024-12-25", time: "10:00 AM" },
    { id: 2, title: "Science Live Session", date: "2024-12-28", time: "11:00 AM" },
  ];

  // Handle notification click
  const handleNotificationClick = (notification) => {
    setSelectedNotification(notification);
    setOpenNotificationDialog(true);
  };

  // Close notification dialog
  const handleCloseNotificationDialog = () => {
    setOpenNotificationDialog(false);
  };

  // Handle create course
  const handleCreateCourse = () => {
    const newCourse = {
      id: courses.length + 1,
      name: courseName,
      description: courseDescription,
      students: 0,
    };
    setCourses([...courses, newCourse]);
    setCourseName("");
    setCourseDescription("");
    setOpenCreateCourseDialog(false);
  };

  // Handle create assignment
  const handleCreateAssignment = () => {
    const newAssignment = {
      id: assignments.length + 1,
      title: assignmentTitle,
      due: assignmentDueDate,
    };
    setAssignments([...assignments, newAssignment]);
    setAssignmentTitle("");
    setAssignmentDueDate("");
    setOpenCreateAssignmentDialog(false);
  };

  // Handle submit feedback
  const handleSubmitFeedback = () => {
    alert(`Feedback submitted: ${feedback}`);
    setFeedback("");
    setOpenFeedbackDialog(false);
  };

  // Handle schedule live class
  const handleScheduleLiveClass = () => {
    const newLiveClass = {
      id: liveClasses.length + 1,
      title: liveClassTitle,
      date: liveClassDate,
      time: liveClassTime,
    };
    setLiveClasses([...liveClasses, newLiveClass]);
    setLiveClassTitle("");
    setLiveClassDate("");
    setLiveClassTime("");
    setOpenLiveClassDialog(false);
  };

  return (
    <div className={`dashboard ${darkMode ? "dark-mode" : "light-mode"}`}>
      <header>
        <Typography variant="h4">Welcome Teacher!</Typography>
        <div className="dark-mode-toggle">
          <WiDaySunny />
          <Switch checked={darkMode} onChange={toggleDarkMode} />
          <WiNightClear />
        </div>
      </header>

      <Grid container spacing={3}>
        {/* Notifications Panel */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Notifications</Typography>
              <ul className="notification-list">
                {notifications.map((notification) => (
                  <li key={notification.id} onClick={() => handleNotificationClick(notification)}>
                    <Typography>{notification.message}</Typography>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </Grid>

        {/* Student Performance Chart */}
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h6">Student Performance</Typography>
              <Bar
                data={studentPerformanceData}
                options={{
                  responsive: true,
                  plugins: {
                    legend: {
                      position: "top",
                    },
                    title: {
                      display: true,
                      text: "Student Performance",
                    },
                  },
                }}
              />
            </CardContent>
          </Card>
        </Grid>

        {/* Courses Section */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6">Courses</Typography>
              <Button variant="contained" color="primary" onClick={() => setOpenCreateCourseDialog(true)}>
                Create New Course
              </Button>
              <Grid container spacing={2} style={{ marginTop: "10px" }}>
                {courses.map((course) => (
                  <Grid item xs={12} sm={6} md={4} key={course.id}>
                    <Paper className="course-card">
                      <Typography variant="h6">{course.name}</Typography>
                      <Typography>Students: {course.students}</Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {/* Assignments Section */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6">Assignments</Typography>
              <Button variant="contained" color="primary" onClick={() => setOpenCreateAssignmentDialog(true)}>
                Create New Assignment
              </Button>
              <Grid container spacing={2} style={{ marginTop: "10px" }}>
                {assignments.map((assignment) => (
                  <Grid item xs={12} sm={6} md={4} key={assignment.id}>
                    <Paper className="assignment-card">
                      <Typography variant="h6">{assignment.title}</Typography>
                      <Typography>Due: {assignment.due}</Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {/* Resources Section */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">Resources</Typography>
              <ul>
                {resources.map((resource) => (
                  <li key={resource.id}>
                    <a href={resource.link} target="_blank" rel="noopener noreferrer">
                      {resource.title} ({resource.type})
                    </a>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </Grid>

        {/* Discussion Forums */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">Discussion Forums</Typography>
              <ul>
                {discussionForums.map((forum) => (
                  <li key={forum.id}>
                    <Typography>{forum.topic}</Typography>
                    <Typography>Posts: {forum.posts}</Typography>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </Grid>

        {/* Live Classes */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6">Live Classes</Typography>
              <Button variant="contained" color="primary" onClick={() => setOpenLiveClassDialog(true)}>
                Schedule Live Class
              </Button>
              <ul>
                {liveClasses.map((liveClass) => (
                  <li key={liveClass.id}>
                    <Typography>{liveClass.title}</Typography>
                    <Typography>Date: {liveClass.date}, Time: {liveClass.time}</Typography>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Notification Dialog */}
      <Dialog open={openNotificationDialog} onClose={handleCloseNotificationDialog}>
        <DialogTitle>Notification Details</DialogTitle>
        <DialogContent>
          <Typography>{selectedNotification?.details}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseNotificationDialog}>Close</Button>
        </DialogActions>
      </Dialog>

      {/* Create Course Dialog */}
      <Dialog open={openCreateCourseDialog} onClose={() => setOpenCreateCourseDialog(false)}>
        <DialogTitle>Create New Course</DialogTitle>
        <DialogContent>
          <TextField
            label="Course Name"
            fullWidth
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            style={{ marginBottom: "10px" }}
          />
          <TextField
            label="Course Description"
            fullWidth
            value={courseDescription}
            onChange={(e) => setCourseDescription(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenCreateCourseDialog(false)}>Cancel</Button>
          <Button onClick={handleCreateCourse} color="primary">Create</Button>
        </DialogActions>
      </Dialog>

      {/* Create Assignment Dialog */}
      <Dialog open={openCreateAssignmentDialog} onClose={() => setOpenCreateAssignmentDialog(false)}>
        <DialogTitle>Create New Assignment</DialogTitle>
        <DialogContent>
          <TextField
            label="Assignment Title"
            fullWidth
            value={assignmentTitle}
            onChange={(e) => setAssignmentTitle(e.target.value)}
            style={{ marginBottom: "10px" }}
          />
          <TextField
            label="Due Date"
            type="date"
            fullWidth
            value={assignmentDueDate}
            onChange={(e) => setAssignmentDueDate(e.target.value)}
            InputLabelProps={{ shrink: true }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenCreateAssignmentDialog(false)}>Cancel</Button>
          <Button onClick={handleCreateAssignment} color="primary">Create</Button>
        </DialogActions>
      </Dialog>

      {/* Feedback Dialog */}
      <Dialog open={openFeedbackDialog} onClose={() => setOpenFeedbackDialog(false)}>
        <DialogTitle>Submit Feedback</DialogTitle>
        <DialogContent>
          <TextField
            label="Feedback"
            fullWidth
            multiline
            rows={4}
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenFeedbackDialog(false)}>Cancel</Button>
          <Button onClick={handleSubmitFeedback} color="primary">Submit</Button>
        </DialogActions>
      </Dialog>

      {/* Schedule Live Class Dialog */}
      <Dialog open={openLiveClassDialog} onClose={() => setOpenLiveClassDialog(false)}>
        <DialogTitle>Schedule Live Class</DialogTitle>
        <DialogContent>
          <TextField
            label="Class Title"
            fullWidth
            value={liveClassTitle}
            onChange={(e) => setLiveClassTitle(e.target.value)}
            style={{ marginBottom: "10px" }}
          />
          <TextField
            label="Date"
            type="date"
            fullWidth
            value={liveClassDate}
            onChange={(e) => setLiveClassDate(e.target.value)}
            InputLabelProps={{ shrink: true }}
            style={{ marginBottom: "10px" }}
          />
          <TextField
            label="Time"
            type="time"
            fullWidth
            value={liveClassTime}
            onChange={(e) => setLiveClassTime(e.target.value)}
            InputLabelProps={{ shrink: true }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenLiveClassDialog(false)}>Cancel</Button>
          <Button onClick={handleScheduleLiveClass} color="primary">Schedule</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default TeacherDashboard;