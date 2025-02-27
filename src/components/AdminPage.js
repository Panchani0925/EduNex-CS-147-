import React, { useState } from "react";
import { Bar, Pie } from "react-chartjs-2";
import { Typography, Card, CardContent, Grid, Paper, Button, Switch, TextField, Dialog, DialogTitle, DialogContent, DialogActions, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, MenuItem, FormControl, InputLabel, Select } from "@mui/material";
import { WiDaySunny, WiNightClear } from "react-icons/wi";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend } from "chart.js";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

const AdminPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [openAddUserDialog, setOpenAddUserDialog] = useState(false);
  const [openEditUserDialog, setOpenEditUserDialog] = useState(false);
  const [openDeleteUserDialog, setOpenDeleteUserDialog] = useState(false);
  const [openAddClassDialog, setOpenAddClassDialog] = useState(false);
  const [openEditClassDialog, setOpenEditClassDialog] = useState(false);
  const [openDeleteClassDialog, setOpenDeleteClassDialog] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedClass, setSelectedClass] = useState(null);
  const [newUserName, setNewUserName] = useState("");
  const [newUserRole, setNewUserRole] = useState("Teacher");
  const [newClassName, setNewClassName] = useState("");
  const [newClassTeacher, setNewClassTeacher] = useState("");
  const [newClassSubject, setNewClassSubject] = useState("");
  const [users, setUsers] = useState([
    { id: 1, name: "Hasitha Madusanka", role: "Teacher", status: "Active" },
    { id: 2, name: "Nilantha Jayasuriya", role: "Teacher", status: "Active" },
    { id: 3, name: "Nimal Siripala", role: "Student", status: "Active" },
    { id: 4, name: "Kamal Perera", role: "Parent", status: "Inactive" },
  ]);

  const [classes, setClasses] = useState([
    { id: 1, name: "Mathematics", teacher: "Hasitha Madusanka", subject: "Advanced Math" },
    { id: 2, name: "Science", teacher: "Nilantha Jayasuriya", subject: "Physics" },
  ]);

  const [platformUsage, setPlatformUsage] = useState([
    { id: 1, user: "Hasitha Madusanka", logins: 12, resourcesAccessed: 5, engagement: "High" },
    { id: 2, user: "Nilantha Jayasuriya", logins: 8, resourcesAccessed: 3, engagement: "Medium" },
    { id: 3, user: "Nimal Siripala", logins: 15, resourcesAccessed: 7, engagement: "High" },
  ]);

  const [securitySettings, setSecuritySettings] = useState({
    dataPermissions: "Restricted",
    compliance: "GDPR Compliant",
  });

  // Dark mode toggle
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Open add user dialog
  const handleOpenAddUserDialog = () => {
    setOpenAddUserDialog(true);
  };

  // Close add user dialog
  const handleCloseAddUserDialog = () => {
    setOpenAddUserDialog(false);
    setNewUserName("");
    setNewUserRole("Teacher");
  };

  // Add a new user
  const handleAddUser = () => {
    const newUser = {
      id: users.length + 1,
      name: newUserName,
      role: newUserRole,
      status: "Active",
    };
    setUsers([...users, newUser]);
    handleCloseAddUserDialog();
  };

  // Open edit user dialog
  const handleOpenEditUserDialog = (user) => {
    setSelectedUser(user);
    setOpenEditUserDialog(true);
  };

  // Close edit user dialog
  const handleCloseEditUserDialog = () => {
    setOpenEditUserDialog(false);
    setSelectedUser(null);
  };

  // Update user details
  const handleUpdateUser = () => {
    const updatedUsers = users.map((user) =>
      user.id === selectedUser.id ? { ...user, name: selectedUser.name, role: selectedUser.role } : user
    );
    setUsers(updatedUsers);
    handleCloseEditUserDialog();
  };

  // Open delete user dialog
  const handleOpenDeleteUserDialog = (user) => {
    setSelectedUser(user);
    setOpenDeleteUserDialog(true);
  };

  // Close delete user dialog
  const handleCloseDeleteUserDialog = () => {
    setOpenDeleteUserDialog(false);
    setSelectedUser(null);
  };

  // Delete a user
  const handleDeleteUser = () => {
    const updatedUsers = users.filter((user) => user.id !== selectedUser.id);
    setUsers(updatedUsers);
    handleCloseDeleteUserDialog();
  };

  // Toggle user status (Active/Inactive)
  const toggleUserStatus = (userId) => {
    const updatedUsers = users.map((user) =>
      user.id === userId ? { ...user, status: user.status === "Active" ? "Inactive" : "Active" } : user
    );
    setUsers(updatedUsers);
  };

  // Open add class dialog
  const handleOpenAddClassDialog = () => {
    setOpenAddClassDialog(true);
  };

  // Close add class dialog
  const handleCloseAddClassDialog = () => {
    setOpenAddClassDialog(false);
    setNewClassName("");
    setNewClassTeacher("");
    setNewClassSubject("");
  };

  // Add a new class
  const handleAddClass = () => {
    const newClass = {
      id: classes.length + 1,
      name: newClassName,
      teacher: newClassTeacher,
      subject: newClassSubject,
    };
    setClasses([...classes, newClass]);
    handleCloseAddClassDialog();
  };

  // Open edit class dialog
  const handleOpenEditClassDialog = (classItem) => {
    setSelectedClass(classItem);
    setOpenEditClassDialog(true);
  };

  // Close edit class dialog
  const handleCloseEditClassDialog = () => {
    setOpenEditClassDialog(false);
    setSelectedClass(null);
  };

  // Update class details
  const handleUpdateClass = () => {
    const updatedClasses = classes.map((classItem) =>
      classItem.id === selectedClass.id
        ? { ...classItem, name: selectedClass.name, teacher: selectedClass.teacher, subject: selectedClass.subject }
        : classItem
    );
    setClasses(updatedClasses);
    handleCloseEditClassDialog();
  };

  // Open delete class dialog
  const handleOpenDeleteClassDialog = (classItem) => {
    setSelectedClass(classItem);
    setOpenDeleteClassDialog(true);
  };

  // Close delete class dialog
  const handleCloseDeleteClassDialog = () => {
    setOpenDeleteClassDialog(false);
    setSelectedClass(null);
  };

  // Delete a class
  const handleDeleteClass = () => {
    const updatedClasses = classes.filter((classItem) => classItem.id !== selectedClass.id);
    setClasses(updatedClasses);
    handleCloseDeleteClassDialog();
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
    labels: ["Teachers", "Students", "Parents"],
    datasets: [
      {
        label: "User Roles",
        data: [2, 1, 1],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  // Mock data for platform usage
  const platformUsageData = {
    labels: platformUsage.map((user) => user.user),
    datasets: [
      {
        label: "Logins",
        data: platformUsage.map((user) => user.logins),
        backgroundColor: "#36A2EB",
      },
      {
        label: "Resources Accessed",
        data: platformUsage.map((user) => user.resourcesAccessed),
        backgroundColor: "#FF6384",
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
        {/* User Management */}
        <Grid item xs={12}>
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
                      <TableCell>Status</TableCell>
                      <TableCell>Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {users.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.role}</TableCell>
                        <TableCell>
                          <Switch
                            checked={user.status === "Active"}
                            onChange={() => toggleUserStatus(user.id)}
                          />
                          {user.status}
                        </TableCell>
                        <TableCell>
                          <Button onClick={() => handleOpenEditUserDialog(user)}>Edit</Button>
                          <Button onClick={() => handleOpenDeleteUserDialog(user)}>Delete</Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>

        {/* Class Management */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6">Class Management</Typography>
              <Button variant="contained" color="primary" onClick={handleOpenAddClassDialog}>
                Add New Class
              </Button>
              <TableContainer component={Paper} style={{ marginTop: "10px" }}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Class Name</TableCell>
                      <TableCell>Teacher</TableCell>
                      <TableCell>Subject</TableCell>
                      <TableCell>Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {classes.map((classItem) => (
                      <TableRow key={classItem.id}>
                        <TableCell>{classItem.name}</TableCell>
                        <TableCell>{classItem.teacher}</TableCell>
                        <TableCell>{classItem.subject}</TableCell>
                        <TableCell>
                          <Button onClick={() => handleOpenEditClassDialog(classItem)}>Edit</Button>
                          <Button onClick={() => handleOpenDeleteClassDialog(classItem)}>Delete</Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>

        {/* Platform Usage */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">Platform Usage</Typography>
              <Bar
                data={platformUsageData}
                options={{
                  responsive: true,
                  plugins: {
                    legend: {
                      position: "top",
                    },
                    title: {
                      display: true,
                      text: "User Engagement",
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

        {/* Security & Privacy Controls */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6">Security & Privacy Controls</Typography>
              <FormControl fullWidth style={{ marginBottom: "10px" }}>
                <InputLabel>Data Permissions</InputLabel>
                <Select
                  value={securitySettings.dataPermissions}
                  onChange={(e) =>
                    setSecuritySettings({ ...securitySettings, dataPermissions: e.target.value })
                  }
                >
                  <MenuItem value="Restricted">Restricted</MenuItem>
                  <MenuItem value="Limited">Limited</MenuItem>
                  <MenuItem value="Full Access">Full Access</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel>Compliance</InputLabel>
                <Select
                  value={securitySettings.compliance}
                  onChange={(e) =>
                    setSecuritySettings({ ...securitySettings, compliance: e.target.value })
                  }
                >
                  <MenuItem value="GDPR Compliant">GDPR Compliant</MenuItem>
                  <MenuItem value="FERPA Compliant">FERPA Compliant</MenuItem>
                  <MenuItem value="HIPAA Compliant">HIPAA Compliant</MenuItem>
                </Select>
              </FormControl>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

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
          <FormControl fullWidth>
            <InputLabel>Role</InputLabel>
            <Select
              value={newUserRole}
              onChange={(e) => setNewUserRole(e.target.value)}
            >
              <MenuItem value="Teacher">Teacher</MenuItem>
              <MenuItem value="Student">Student</MenuItem>
              <MenuItem value="Parent">Parent</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseAddUserDialog}>Cancel</Button>
          <Button onClick={handleAddUser} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>

      {/* Edit User Dialog */}
      <Dialog open={openEditUserDialog} onClose={handleCloseEditUserDialog}>
        <DialogTitle>Edit User</DialogTitle>
        <DialogContent>
          <TextField
            label="User Name"
            fullWidth
            value={selectedUser?.name || ""}
            onChange={(e) => setSelectedUser({ ...selectedUser, name: e.target.value })}
            style={{ marginBottom: "10px" }}
          />
          <FormControl fullWidth>
            <InputLabel>Role</InputLabel>
            <Select
              value={selectedUser?.role || ""}
              onChange={(e) => setSelectedUser({ ...selectedUser, role: e.target.value })}
            >
              <MenuItem value="Teacher">Teacher</MenuItem>
              <MenuItem value="Student">Student</MenuItem>
              <MenuItem value="Parent">Parent</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEditUserDialog}>Cancel</Button>
          <Button onClick={handleUpdateUser} color="primary">
            Update
          </Button>
        </DialogActions>
      </Dialog>

      {/* Delete User Dialog */}
      <Dialog open={openDeleteUserDialog} onClose={handleCloseDeleteUserDialog}>
        <DialogTitle>Delete User</DialogTitle>
        <DialogContent>
          <Typography>Are you sure you want to delete {selectedUser?.name}?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDeleteUserDialog}>Cancel</Button>
          <Button onClick={handleDeleteUser} color="primary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      {/* Add Class Dialog */}
      <Dialog open={openAddClassDialog} onClose={handleCloseAddClassDialog}>
        <DialogTitle>Add New Class</DialogTitle>
        <DialogContent>
          <TextField
            label="Class Name"
            fullWidth
            value={newClassName}
            onChange={(e) => setNewClassName(e.target.value)}
            style={{ marginBottom: "10px" }}
          />
          <TextField
            label="Teacher"
            fullWidth
            value={newClassTeacher}
            onChange={(e) => setNewClassTeacher(e.target.value)}
            style={{ marginBottom: "10px" }}
          />
          <TextField
            label="Subject"
            fullWidth
            value={newClassSubject}
            onChange={(e) => setNewClassSubject(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseAddClassDialog}>Cancel</Button>
          <Button onClick={handleAddClass} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>

      {/* Edit Class Dialog */}
      <Dialog open={openEditClassDialog} onClose={handleCloseEditClassDialog}>
        <DialogTitle>Edit Class</DialogTitle>
        <DialogContent>
          <TextField
            label="Class Name"
            fullWidth
            value={selectedClass?.name || ""}
            onChange={(e) => setSelectedClass({ ...selectedClass, name: e.target.value })}
            style={{ marginBottom: "10px" }}
          />
          <TextField
            label="Teacher"
            fullWidth
            value={selectedClass?.teacher || ""}
            onChange={(e) => setSelectedClass({ ...selectedClass, teacher: e.target.value })}
            style={{ marginBottom: "10px" }}
          />
          <TextField
            label="Subject"
            fullWidth
            value={selectedClass?.subject || ""}
            onChange={(e) => setSelectedClass({ ...selectedClass, subject: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEditClassDialog}>Cancel</Button>
          <Button onClick={handleUpdateClass} color="primary">
            Update
          </Button>
        </DialogActions>
      </Dialog>

      {/* Delete Class Dialog */}
      <Dialog open={openDeleteClassDialog} onClose={handleCloseDeleteClassDialog}>
        <DialogTitle>Delete Class</DialogTitle>
        <DialogContent>
          <Typography>Are you sure you want to delete {selectedClass?.name}?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDeleteClassDialog}>Cancel</Button>
          <Button onClick={handleDeleteClass} color="primary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AdminPage;