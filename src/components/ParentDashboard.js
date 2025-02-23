import React, { useState } from "react";
import { Typography, Card, CardContent, Grid, Paper, Switch } from "@mui/material";
import { WiDaySunny, WiNightClear } from "react-icons/wi";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const ParentDashboard = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Dark mode toggle
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Mock data for meetings (upcoming events)
  const meetings = [
    { id: 1, title: "Meeting with Mr. Peiris", start: "2024-12-25T10:00:00", end: "2024-12-25T11:00:00" },
    { id: 2, title: "Meeting with Ms. Jayasuriya", start: "2024-12-28T11:00:00", end: "2024-12-28T12:00:00" },
  ];

  // Mock data for student performance
  const studentPerformance = [
    { subject: "Mathematics", grade: "A", progress: 85 },
    { subject: "Science", grade: "B", progress: 70 },
    { subject: "English", grade: "A", progress: 90 },
  ];

  // Mock data for performance chart
  const performanceData = [
    { month: "Jan", score: 60 },
    { month: "Feb", score: 75 },
    { month: "Mar", score: 80 },
    { month: "Apr", score: 85 },
    { month: "May", score: 90 },
  ];

  return (
    <div className={`dashboard ${darkMode ? "dark-mode" : "light-mode"}`}>
      <header>
        <Typography variant="h4">Welcome Parent!</Typography>
        <div className="dark-mode-toggle">
          <WiDaySunny />
          <Switch checked={darkMode} onChange={toggleDarkMode} />
          <WiNightClear />
        </div>
      </header>

      <Grid container spacing={3}>
        {/* Student Performance Chart Section */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Student Performance Over Time
              </Typography>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="score" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>

        {/* Student Performance Cards Section */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Student Performance by Subject
              </Typography>
              <Grid container spacing={2}>
                {studentPerformance.map((subject, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <Paper className="subject-card">
                      <Typography variant="h6">{subject.subject}</Typography>
                      <Typography>Grade: {subject.grade}</Typography>
                      <Typography>Progress: {subject.progress}%</Typography>
                      <div className="progress-bar">
                        <div
                          className="progress-fill"
                          style={{ width: `${subject.progress}%` }}
                        ></div>
                      </div>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {/* Recent Activities Section */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Recent Activities
              </Typography>
              <ul className="activity-list">
                <li>✅ Completed Math Quiz</li>
                <li>📚 Submitted Science Project</li>
                <li>📝 Participated in English Test</li>
              </ul>
            </CardContent>
          </Card>
        </Grid>

        {/* Calendar Section (Upcoming Meetings) */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Upcoming Meetings
              </Typography>
              <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                events={meetings}
                height="auto"
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default ParentDashboard;
