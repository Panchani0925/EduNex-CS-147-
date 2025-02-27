import React, { useState, useEffect } from "react";
import { Bar, Line } from "react-chartjs-2";
import { Typography, Card, CardContent, Grid, Paper, Button, Dialog, DialogTitle, DialogContent, DialogActions, Switch } from "@mui/material";
import { WiDaySunny, WiNightClear } from "react-icons/wi";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend } from "chart.js";
import { Link } from "react-router-dom";
import "./StudentDashboard.css";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend);

const StudentDashboard = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedNotification, setSelectedNotification] = useState(null);
  const [openNotificationDialog, setOpenNotificationDialog] = useState(false);

  // Dark mode toggle
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Particle animation logic
  useEffect(() => {
    const initParticles = () => {
      const container = document.createElement('div');
      container.className = 'floating-particles';

      // Create particles
      for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';

        // Random size between 3px and 15px
        const size = Math.random() * 12 + 3;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;

        // Random position
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;

        // Random opacity
        particle.style.opacity = Math.random() * 0.5 + 0.1;

        // Random animation duration between 10s and 30s
        const duration = Math.random() * 20 + 10;
        particle.style.animationDuration = `${duration}s`;

        // Random animation delay
        particle.style.animationDelay = `${Math.random() * 10}s`;

        // Adjust particle color based on dark mode
        particle.style.backgroundColor = darkMode ? 'rgba(175, 180, 255, 0.7)' : 'rgba(138, 148, 255, 0.7)';

        // Add particle to container
        container.appendChild(particle);
      }

      // Add container to dashboard
      document.querySelector('.dashboard').appendChild(container);
    };

    initParticles();

    // Cleanup function to remove particles when component unmounts
    return () => {
      const particlesContainer = document.querySelector('.floating-particles');
      if (particlesContainer) {
        particlesContainer.remove();
      }
    };
  }, [darkMode]); // Re-run effect when darkMode changes

  // Mock data for progress chart
  const progressChartData = {
    labels: ["Math", "Science", "English", "Chemistry"],
    datasets: [
      {
        label: "Progress",
        data: [80, 70, 90, 60],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
      },
    ],
  };

  // Mock data for performance trend
  const performanceTrendData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"],
    datasets: [
      {
        label: "Performance",
        data: [70, 75, 80, 85, 90],
        borderColor: "#4BC0C0",
        fill: false,
      },
    ],
  };

  // Mock data for deadlines
  const deadlines = [
    { task: "Math Assignment", due: "2024-12-25" },
    { task: "Science Project", due: "2024-12-28" },
  ];

  // Mock data for notifications
  const notifications = [
    { id: 1, message: "New Math assignment posted.", details: "Complete Chapter 5 exercises by next week." },
    { id: 2, message: "Science exam scheduled for next week.", details: "Prepare for the exam on December 28th." },
  ];

  // Mock data for enrolled courses
  const enrolledCourses = [
    { id: 1, name: "Advanced Mathematics", instructor: "Mr. Peiris", progress: 80 },
    { id: 2, name: "Introduction to Science", instructor: "Ms. Jayasuriya", progress: 70 },
    { id: 3, name: "English Literature", instructor: "Mrs. Abeysiriwardana", progress: 90 },
  ];

  // Mock data for study resources
  const studyResources = [
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

  // Calculate days left for deadlines
  const calculateDaysLeft = (dueDate) => {
    const today = new Date();
    const due = new Date(dueDate);
    const timeDiff = due - today;
    return Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
  };

  // Handle notification click
  const handleNotificationClick = (notification) => {
    setSelectedNotification(notification);
    setOpenNotificationDialog(true);
  };

  // Close notification dialog
  const handleCloseNotificationDialog = () => {
    setOpenNotificationDialog(false);
  };

  return (
    <div className={`dashboard ${darkMode ? "dark-mode" : ""}`}>
      <header>
        <Typography variant="h4">Welcome Student!</Typography>
        <div className="dark-mode-toggle">
          <WiDaySunny />
          <Switch checked={darkMode} onChange={toggleDarkMode} />
          <WiNightClear />
        </div>
      </header>

      <Grid container spacing={2} className="grid-container">
        {/* Notifications Panel */}
        <Grid item xs={12} md={4}>
          <Card className="card">
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

        {/* Progress Chart */}
        <Grid item xs={12} md={8}>
          <Card className="card">
            <CardContent>
              <Typography variant="h6">Progress Overview</Typography>
              <Bar
                data={progressChartData}
                options={{
                  responsive: true,
                  plugins: {
                    legend: {
                      position: "top",
                    },
                    title: {
                      display: true,
                      text: "Student Progress",
                    },
                  },
                }}
              />
            </CardContent>
          </Card>
        </Grid>

        {/* Classes Enrolled */}
        <Grid item xs={12}>
          <Card className="card">
            <CardContent>
              <Typography variant="h6">Classes Enrolled</Typography>
              <Grid container spacing={2}>
                {enrolledCourses.map((course) => (
                  <Grid item xs={12} sm={6} md={4} key={course.id}>
                    <Link to={`/class/${course.id}`} style={{ textDecoration: "none" }}>
                      <Paper className="class-card">
                        <Typography variant="h6">{course.name}</Typography>
                        <Typography>Instructor: {course.instructor}</Typography>
                        <Typography>Progress: {course.progress}%</Typography>
                      </Paper>
                    </Link>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {/* Study Resources */}
        <Grid item xs={12} md={6}>
          <Card className="card">
            <CardContent>
              <Typography variant="h6">Study Resources</Typography>
              <ul>
                {studyResources.map((resource) => (
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
          <Card className="card">
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
          <Card className="card">
            <CardContent>
              <Typography variant="h6">Live Classes</Typography>
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

        {/* Upcoming Deadlines */}
        <Grid item xs={12}>
          <Card className="card">
            <CardContent>
              <Typography variant="h6">Upcoming Deadlines</Typography>
              {deadlines.map((deadline, index) => (
                <Paper key={index} className="deadline-item">
                  <Typography>{deadline.task}</Typography>
                  <Typography>
                    {calculateDaysLeft(deadline.due)} days left
                  </Typography>
                </Paper>
              ))}
            </CardContent>
          </Card>
        </Grid>

        {/* Performance Analytics */}
        <Grid item xs={12}>
          <Card className="card">
            <CardContent>
              <Typography variant="h6">Performance Analytics</Typography>
              <Line
                data={performanceTrendData}
                options={{
                  responsive: true,
                  plugins: {
                    legend: {
                      position: "top",
                    },
                    title: {
                      display: true,
                      text: "Weekly Performance",
                    },
                  },
                }}
              />
            </CardContent>
          </Card>
        </Grid>

        {/* Support Section */}
        <Grid item xs={12}>
          <Card className="card">
            <CardContent>
              <Typography variant="h6">Support Section</Typography>
              <Typography>Contact your counselor or support team for assistance.</Typography>
              <Button variant="contained" color="primary">
                Contact Support
              </Button>
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
    </div>
  );
};

export default StudentDashboard;