import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Typography, Card, CardContent, Grid, Paper, Button, Dialog, DialogTitle, DialogContent, DialogActions, Switch, TextField, MenuItem, List, ListItem, ListItemText, IconButton } from "@mui/material";
import { WiDaySunny, WiNightClear } from "react-icons/wi";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Delete, Lock, Edit } from "@mui/icons-material";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const TeacherDashboard = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedNotification, setSelectedNotification] = useState(null);
  const [openNotificationDialog, setOpenNotificationDialog] = useState(false);
  const [openCreateCourseDialog, setOpenCreateCourseDialog] = useState(false);
  const [openCreateAssignmentDialog, setOpenCreateAssignmentDialog] = useState(false);
  const [openFeedbackDialog, setOpenFeedbackDialog] = useState(false);
  const [openLiveClassDialog, setOpenLiveClassDialog] = useState(false);
  const [openResourceUploadDialog, setOpenResourceUploadDialog] = useState(false);
  const [openDiscussionModerationDialog, setOpenDiscussionModerationDialog] = useState(false);

  // Mock data for notifications
  const notifications = [
    { id: 1, message: "New Math assignment posted.", details: "Complete Chapter 5 exercises by next week." },
    { id: 2, message: "Science exam scheduled for next week.", details: "Prepare for the exam on December 28th." },
  ];

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

  // State for courses, assignments, live classes, resources, and feedback
  const [courses, setCourses] = useState([
    { id: 1, name: "Advanced Mathematics", students: 30, description: "A course on advanced mathematical concepts." },
    { id: 2, name: "Introduction to Science", students: 25, description: "Basic principles of science." },
    { id: 3, name: "English Literature", students: 20, description: "Exploring classic and modern literature." },
  ]);

  const [assignments, setAssignments] = useState([
    { id: 1, title: "Math Assignment", due: "2024-12-25", description: "Complete Chapter 5 exercises." },
    { id: 2, title: "Science Project", due: "2024-12-28", description: "Prepare a project on renewable energy." },
  ]);

  const [liveClasses, setLiveClasses] = useState([
    { id: 1, title: "Math Live Session", date: "2024-12-25", time: "10:00 AM", description: "Live session on calculus." },
    { id: 2, title: "Science Live Session", date: "2024-12-28", time: "11:00 AM", description: "Live session on physics." },
  ]);

  const [resources, setResources] = useState([
    { id: 1, title: "Math Notes", type: "PDF", link: "https://example.com/math-notes" },
    { id: 2, title: "Science Past Papers", type: "PDF", link: "https://example.com/science-papers" },
    { id: 3, title: "English Lecture Slides", type: "PPT", link: "https://example.com/english-slides" },
  ]);

  const [feedbackList, setFeedbackList] = useState([
    { id: 1, student: "Nimal Siripala", message: "The course content is very helpful.", response: "" },
    { id: 2, student: "Kamal Perera", message: "Can we have more examples in the lectures?", response: "" },
  ]);

  const [discussionForums, setDiscussionForums] = useState([
    { id: 1, topic: "Math Homework Help", posts: 12, locked: false },
    { id: 2, topic: "Science Project Discussion", posts: 8, locked: false },
    { id: 3, topic: "English Essay Tips", posts: 15, locked: false },
  ]);

  // Form states
  const [courseName, setCourseName] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [assignmentTitle, setAssignmentTitle] = useState("");
  const [assignmentDescription, setAssignmentDescription] = useState("");
  const [assignmentDueDate, setAssignmentDueDate] = useState("");
  const [feedback, setFeedback] = useState("");
  const [liveClassTitle, setLiveClassTitle] = useState("");
  const [liveClassDescription, setLiveClassDescription] = useState("");
  const [liveClassDate, setLiveClassDate] = useState("");
  const [liveClassTime, setLiveClassTime] = useState("");
  const [resourceTitle, setResourceTitle] = useState("");
  const [resourceType, setResourceType] = useState("PDF");
  const [resourceLink, setResourceLink] = useState("");

  // Dark mode toggle
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
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
      description: assignmentDescription,
      due: assignmentDueDate,
    };
    setAssignments([...assignments, newAssignment]);
    setAssignmentTitle("");
    setAssignmentDescription("");
    setAssignmentDueDate("");
    setOpenCreateAssignmentDialog(false);
  };

  // Handle submit feedback
  const handleSubmitFeedback = () => {
    const newFeedback = {
      id: feedbackList.length + 1,
      student: "Anonymous",
      message: feedback,
      response: "",
    };
    setFeedbackList([...feedbackList, newFeedback]);
    setFeedback("");
    setOpenFeedbackDialog(false);
  };

  // Handle schedule live class
  const handleScheduleLiveClass = () => {
    const newLiveClass = {
      id: liveClasses.length + 1,
      title: liveClassTitle,
      description: liveClassDescription,
      date: liveClassDate,
      time: liveClassTime,
    };
    setLiveClasses([...liveClasses, newLiveClass]);
    setLiveClassTitle("");
    setLiveClassDescription("");
    setLiveClassDate("");
    setLiveClassTime("");
    setOpenLiveClassDialog(false);
  };

  // Handle upload resource
  const handleUploadResource = () => {
    const newResource = {
      id: resources.length + 1,
      title: resourceTitle,
      type: resourceType,
      link: resourceLink,
    };
    setResources([...resources, newResource]);
    setResourceTitle("");
    setResourceType("PDF");
    setResourceLink("");
    setOpenResourceUploadDialog(false);
  };

  // Handle discussion forum moderation
  const handleLockForum = (forumId) => {
    const updatedForums = discussionForums.map((forum) =>
      forum.id === forumId ? { ...forum, locked: !forum.locked } : forum
    );
    setDiscussionForums(updatedForums);
  };

  const handleDeleteForum = (forumId) => {
    const updatedForums = discussionForums.filter((forum) => forum.id !== forumId);
    setDiscussionForums(updatedForums);
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
              <List>
                {notifications.map((notification) => (
                  <ListItem key={notification.id} button onClick={() => handleNotificationClick(notification)}>
                    <ListItemText primary={notification.message} />
                  </ListItem>
                ))}
              </List>
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
                      <Typography>{course.description}</Typography>
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
                      <Typography>{assignment.description}</Typography>
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
              <Button variant="contained" color="primary" onClick={() => setOpenResourceUploadDialog(true)}>
                Upload Resource
              </Button>
              <List>
                {resources.map((resource) => (
                  <ListItem key={resource.id}>
                    <a href={resource.link} target="_blank" rel="noopener noreferrer">
                      {resource.title} ({resource.type})
                    </a>
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* Discussion Forums */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">Discussion Forums</Typography>
              <Button variant="contained" color="primary" onClick={() => setOpenDiscussionModerationDialog(true)}>
                Moderate Forums
              </Button>
              <List>
                {discussionForums.map((forum) => (
                  <ListItem key={forum.id}>
                    <ListItemText primary={forum.topic} secondary={`Posts: ${forum.posts}`} />
                    <IconButton onClick={() => handleLockForum(forum.id)}>
                      {forum.locked ? <Lock /> : <Edit />}
                    </IconButton>
                    <IconButton onClick={() => handleDeleteForum(forum.id)}>
                      <Delete />
                    </IconButton>
                  </ListItem>
                ))}
              </List>
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
              <List>
                {liveClasses.map((liveClass) => (
                  <ListItem key={liveClass.id}>
                    <ListItemText primary={liveClass.title} secondary={`Date: ${liveClass.date}, Time: ${liveClass.time}`} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* Feedback Section */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6">Feedback</Typography>
              <Button variant="contained" color="primary" onClick={() => setOpenFeedbackDialog(true)}>
                Submit Feedback
              </Button>
              <List>
                {feedbackList.map((feedbackItem) => (
                  <ListItem key={feedbackItem.id}>
                    <ListItemText primary={feedbackItem.student} secondary={feedbackItem.message} />
                  </ListItem>
                ))}
              </List>
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
            label="Assignment Description"
            fullWidth
            value={assignmentDescription}
            onChange={(e) => setAssignmentDescription(e.target.value)}
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
            label="Class Description"
            fullWidth
            value={liveClassDescription}
            onChange={(e) => setLiveClassDescription(e.target.value)}
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

      {/* Upload Resource Dialog */}
      <Dialog open={openResourceUploadDialog} onClose={() => setOpenResourceUploadDialog(false)}>
        <DialogTitle>Upload Resource</DialogTitle>
        <DialogContent>
          <TextField
            label="Resource Title"
            fullWidth
            value={resourceTitle}
            onChange={(e) => setResourceTitle(e.target.value)}
            style={{ marginBottom: "10px" }}
          />
          <TextField
            label="Resource Type"
            select
            fullWidth
            value={resourceType}
            onChange={(e) => setResourceType(e.target.value)}
            style={{ marginBottom: "10px" }}
          >
            <MenuItem value="PDF">PDF</MenuItem>
            <MenuItem value="PPT">PPT</MenuItem>
            <MenuItem value="Video">Video</MenuItem>
          </TextField>
          <TextField
            label="Resource Link"
            fullWidth
            value={resourceLink}
            onChange={(e) => setResourceLink(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenResourceUploadDialog(false)}>Cancel</Button>
          <Button onClick={handleUploadResource} color="primary">Upload</Button>
        </DialogActions>
      </Dialog>

      {/* Discussion Moderation Dialog */}
      <Dialog open={openDiscussionModerationDialog} onClose={() => setOpenDiscussionModerationDialog(false)}>
        <DialogTitle>Moderate Discussion Forums</DialogTitle>
        <DialogContent>
          <List>
            {discussionForums.map((forum) => (
              <ListItem key={forum.id}>
                <ListItemText primary={forum.topic} secondary={`Posts: ${forum.posts}`} />
                <IconButton onClick={() => handleLockForum(forum.id)}>
                  {forum.locked ? <Lock /> : <Edit />}
                </IconButton>
                <IconButton onClick={() => handleDeleteForum(forum.id)}>
                  <Delete />
                </IconButton>
              </ListItem>
            ))}
          </List>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDiscussionModerationDialog(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default TeacherDashboard;