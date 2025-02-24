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
  const [selectedUser, setSelectedUser] = useState(null);
  const [newUserName, setNewUserName] = useState("");
  const [newUserRole, setNewUserRole] = useState("Teacher");
  const [users, setUsers] = useState([
    { id: 1, name: "Hasitha Madusanka", role: "Teacher", status: "Active" },
    { id: 2, name: "Nilantha Jayasuriya", role: "Teacher", status: "Active" },
    { id: 3, name: "Nimal Siripala", role: "Student", status: "Active" },
    { id: 4, name: "Kamal Perera", role: "Parent", status: "Inactive" },
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
    </div>
  );
};

export default AdminPage;