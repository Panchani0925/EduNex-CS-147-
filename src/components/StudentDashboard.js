import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Switch, Typography, Card, CardContent, Grid, Paper } from "@mui/material";
import { WiDaySunny, WiNightClear } from "react-icons/wi";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
//import "./StudentDashboard.css";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const StudentDashboard = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Dark mode toggle
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Mock data for progress chart
  const chartData = {
    labels: ["Math", "Science", "English", "Chemistry"],
    datasets: [
      {
        label: "Progress",
        data: [80, 70, 90, 60],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
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
    "New Math assignment posted.",
    "Science exam scheduled for next week.",
  ];

  // Mock data for enrolled classes
  const enrolledClasses = [
    { name: "Advanced Mathematics", instructor: "Mr. Peiris", progress: 80 },
    { name: "Introduction to Science", instructor: "Ms. Jayasuriya", progress: 70 },
    { name: "English Literature", instructor: "Mrs. Abeysiriwardana", progress: 90 },
  ];

  // Mock data for badges
  const badges = [
    { name: "Math Whiz", icon: "🥇" },
    { name: "Science Star", icon: "🌟" },
    { name: "Perfect Attendance", icon: "🎖️" },
  ];

  // Calculate days left for deadlines
  const calculateDaysLeft = (dueDate) => {
    const today = new Date();
    const due = new Date(dueDate);
    const timeDiff = due - today;
    return Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
  };

  return (
    <div className={`dashboard ${darkMode ? "dark-mode" : "light-mode"}`}>
      <header>
        <Typography variant="h4">Welcome Student!</Typography>
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
              <ul>
                {notifications.map((notification, index) => (
                  <li key={index}>{notification}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </Grid>

        {/* Progress Chart */}
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h6">Progress Overview</Typography>
              <Bar
                data={chartData}
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
          <Card>
            <CardContent>
              <Typography variant="h6">Classes Enrolled</Typography>
              <Grid container spacing={2}>
                {enrolledClasses.map((cls, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <Paper className="class-card">
                      <Typography variant="h6">{cls.name}</Typography>
                      <Typography>Instructor: {cls.instructor}</Typography>
                      <Typography>Progress: {cls.progress}%</Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {/* Badges Section */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6">Badges</Typography>
              <Grid container spacing={2}>
                {badges.map((badge, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <Paper className="badge-card">
                      <Typography variant="h6">{badge.icon} {badge.name}</Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {/* Upcoming Deadlines */}
        <Grid item xs={12}>
          <Card>
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

        {/* Task Progress Tracker */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6">Task Progress</Typography>
              <div className="progress-bar">
                <div className="progress" style={{ width: "60%" }}></div>
              </div>
              <Typography>60% completed</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default StudentDashboard;