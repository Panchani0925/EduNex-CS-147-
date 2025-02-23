import React, { useState } from "react";
import { Bar, Pie } from "react-chartjs-2";
import { Typography, Card, CardContent, Grid, Paper, Button, Switch, TextField, Dialog, DialogTitle, DialogContent, DialogActions, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { WiDaySunny, WiNightClear } from "react-icons/wi";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend } from "chart.js";
//import "./AdminPage.css";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

const AdminPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [openAddCourseDialog, setOpenAddCourseDialog] = useState(false);
  const [openAddUserDialog, setOpenAddUserDialog] = useState(false);
  const [newCourseName, setNewCourseName] = useState("");
  const [newUserName, setNewUserName] = useState("");
  const [newUserRole, setNewUserRole] = useState("Teacher");
  const [courses, setCourses] = useState(["Advanced Mathematics", "Introduction to Physics", "English Literature", "Advanced Chemistry"]);
  const [users, setUsers] = useState([
    { id: 1, name: "Hasitha Madusanka", role: "Teacher" },
    { id: 2, name: "Nilantha Jayasuriya", role: "Teacher" },
    { id: 3, name: "Nimal Siripala", role: "Student" },
  ]);

  // Dark mode toggle
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Open add course dialog
  const handleOpenAddCourseDialog = () => {
    setOpenAddCourseDialog(true);
  };

  // Close add course dialog
  const handleCloseAddCourseDialog = () => {
    setOpenAddCourseDialog(false);
  };

  // Add a new course
  const handleAddCourse = () => {
    setCourses([...courses, newCourseName]);
    setNewCourseName("");
    handleCloseAddCourseDialog();
  };

  // Open add user dialog
  const handleOpenAddUserDialog = () => {
    setOpenAddUserDialog(true);
  };

  // Close add user dialog
  const handleCloseAddUserDialog = () => {
    setOpenAddUserDialog(false);
  };

  // Add a new user
  const handleAddUser = () => {
    const newUser = {
      id: users.length + 1,
      name: newUserName,
      role: newUserRole,
    };
    setUsers([...users, newUser]);
    setNewUserName("");
    setNewUserRole("Teacher");
    handleCloseAddUserDialog();
  };

  // Mock data for course enrollment
  const courseEnrollmentData = {
    labels: ["Advanced Mathematics", "Introduction to Physics", "English Literature", "Advanced Chemistry"],
    datasets: [
      {
        label: "Enrollment",
        data: [120, 90, 80, 70],
        backgroundColor: ["#36A2EB", "#FF6384", "#FFCE56", "#4BC0C0"],
      },
    ],
  };

  // Mock data for user roles
  const userRolesData = {
    labels: ["Teachers", "Students"],
    datasets: [
      {
        label: "User Roles",
        data: [2, 1],
        backgroundColor: ["#FF6384", "#36A2EB"],
      },
    ],
  };

  return (
    <div className={`admin-page ${darkMode ? "dark-mode" : "light-mode"}`}>
      <header>
        <Typography variant="h4">Admin Dashboard</Typography>
        <div className="dark-mode-toggle">
          <WiDaySunny />
          <Switch checked={darkMode} onChange={toggleDarkMode} />
          <WiNightClear />
        </div>
      </header>

      <Grid container spacing={3}>
        {/* Course Management */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">Course Management</Typography>
              <Button variant="contained" color="primary" onClick={handleOpenAddCourseDialog}>
                Add New Course
              </Button>
              <TableContainer component={Paper} style={{ marginTop: "10px" }}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Course Name</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {courses.map((course, index) => (
                      <TableRow key={index}>
                        <TableCell>{course}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>

        {/* User Management */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">User Management</Typography>
              <Button variant="contained" color="primary" onClick={handleOpenAddUserDialog}>
                Add New User
              </Button>
              <TableContainer component={Paper} style={{ marginTop: "10px" }}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell>Role</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {users.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.role}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>

        {/* Course Enrollment Chart */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">Course Enrollment</Typography>
              <Bar
                data={courseEnrollmentData}
                options={{
                  responsive: true,
                  plugins: {
                    legend: {
                      position: "top",
                    },
                    title: {
                      display: true,
                      text: "Enrollment by Course",
                    },
                  },
                }}
              />
            </CardContent>
          </Card>
        </Grid>

        {/* User Roles Chart */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">User Roles</Typography>
              <Pie
                data={userRolesData}
                options={{
                  responsive: true,
                  plugins: {
                    legend: {
                      position: "top",
                    },
                    title: {
                      display: true,
                      text: "User Roles Distribution",
                    },
                  },
                }}
              />
            </CardContent>
          </Card>
        </Grid>

        {/* System Settings */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6">System Settings</Typography>
              <form>
                <label>
                  Notification Settings:
                  <Switch /> Enable Email Notifications
                </label>
                <Button type="submit" variant="contained" color="primary">
                  Save Settings
                </Button>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Add Course Dialog */}
      <Dialog open={openAddCourseDialog} onClose={handleCloseAddCourseDialog}>
        <DialogTitle>Add New Course</DialogTitle>
        <DialogContent>
          <TextField
            label="Course Name"
            fullWidth
            value={newCourseName}
            onChange={(e) => setNewCourseName(e.target.value)}
            style={{ marginBottom: "10px" }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseAddCourseDialog}>Cancel</Button>
          <Button onClick={handleAddCourse} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>

      {/* Add User Dialog */}
      <Dialog open={openAddUserDialog} onClose={handleCloseAddUserDialog}>
        <DialogTitle>Add New User</DialogTitle>
        <DialogContent>
          <TextField
            label="User Name"
            fullWidth
            value={newUserName}
            onChange={(e) => setNewUserName(e.target.value)}
            style={{ marginBottom: "10px" }}
          />
          <TextField
            label="Role"
            fullWidth
            select
            value={newUserRole}
            onChange={(e) => setNewUserRole(e.target.value)}
          >
            <option value="Teacher">Teacher</option>
            <option value="Student">Student</option>
          </TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseAddUserDialog}>Cancel</Button>
          <Button onClick={handleAddUser} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AdminPage;