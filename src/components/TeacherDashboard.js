import React, { useState } from "react";
import { Bar, Pie } from "react-chartjs-2";
import "./TeacherDashboard.css";

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
  const [messages, setMessages] = useState([]); // For real-time communication
  const [newMessage, setNewMessage] = useState(""); // For chat input

  // Mock data for notifications
  const [notifications, setNotifications] = useState([
    { id: 1, message: "New Math assignment posted.", details: "Complete Chapter 5 exercises by next week." },
    { id: 2, message: "Science exam scheduled for next week.", details: "Prepare for the exam on December 28th." },
  ]);

  // Mock data for student performance
  const studentPerformanceData = [
    { name: "Nimal Siripala", score: 80 },
    { name: "Kamal Perera", score: 70 },
    { name: "Saman Silva", score: 90 },
  ];

  // Chart data for student performance
  const barChartData = {
    labels: studentPerformanceData.map((student) => student.name),
    datasets: [
      {
        label: "Student Scores",
        data: studentPerformanceData.map((student) => student.score),
        backgroundColor: ["#0f3460", "#1a5dad", "#10b981"],
      },
    ],
  };

  const pieChartData = {
    labels: studentPerformanceData.map((student) => student.name),
    datasets: [
      {
        data: studentPerformanceData.map((student) => student.score),
        backgroundColor: ["#0f3460", "#1a5dad", "#10b981"],
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
  const [newDiscussionTopic, setNewDiscussionTopic] = useState("");

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

  // Handle new discussion topic
  const handleCreateDiscussionTopic = () => {
    const newTopic = {
      id: discussionForums.length + 1,
      topic: newDiscussionTopic,
      posts: 0,
      locked: false,
    };
    setDiscussionForums([...discussionForums, newTopic]);
    setNewDiscussionTopic("");
  };

  // Handle real-time communication
  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { id: messages.length + 1, text: newMessage, sender: "Teacher" }]);
      setNewMessage("");
    }
  };

  return (
    <div className={`dashboard ${darkMode ? "dark-mode" : "light-mode"}`}>
      <header>
        <h1>Welcome Teacher!</h1>
        <div className="dark-mode-toggle">
          <span>☀️</span>
          <label className="switch">
            <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
            <span className="slider round"></span>
          </label>
          <span>🌙</span>
        </div>
      </header>

      <div className="grid-container">
        {/* Notifications Panel */}
        <div className="card">
          <div className="card-content">
            <h2>Notifications</h2>
            <ul className="list">
              {notifications.map((notification) => (
                <li key={notification.id} className="list-item" onClick={() => handleNotificationClick(notification)}>
                  {notification.message}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Student Performance Chart */}
        <div className="card">
          <div className="card-content">
            <h2>Student Performance</h2>
            <div className="chart-container">
              <Bar data={barChartData} options={{ responsive: true }} />
              <Pie data={pieChartData} options={{ responsive: true }} />
            </div>
          </div>
        </div>

        {/* Real-Time Communication */}
        <div className="card">
          <div className="card-content">
            <h2>Real-Time Communication</h2>
            <div className="chat-container">
              <div className="chat-messages">
                {messages.map((message) => (
                  <div key={message.id} className={`message ${message.sender === "Teacher" ? "sent" : "received"}`}>
                    {message.text}
                  </div>
                ))}
              </div>
              <div className="chat-input">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type a message..."
                />
                <button onClick={handleSendMessage}>Send</button>
              </div>
            </div>
          </div>
        </div>

        {/* Courses Section */}
        <div className="card full-width">
          <div className="card-content">
            <h2>Courses</h2>
            <button className="btn primary" onClick={() => setOpenCreateCourseDialog(true)}>
              Create New Course
            </button>
            <div className="grid-3">
              {courses.map((course) => (
                <div key={course.id} className="item-card">
                  <h3>{course.name}</h3>
                  <p>{course.description}</p>
                  <p>Students: {course.students}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Assignments Section */}
        <div className="card full-width">
          <div className="card-content">
            <h2>Assignments</h2>
            <button className="btn primary" onClick={() => setOpenCreateAssignmentDialog(true)}>
              Create New Assignment
            </button>
            <div className="grid-3">
              {assignments.map((assignment) => (
                <div key={assignment.id} className="item-card">
                  <h3>{assignment.title}</h3>
                  <p>{assignment.description}</p>
                  <p>Due: {assignment.due}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Resources Section */}
        <div className="card">
          <div className="card-content">
            <h2>Resources</h2>
            <button className="btn primary" onClick={() => setOpenResourceUploadDialog(true)}>
              Upload Resource
            </button>
            <ul className="list">
              {resources.map((resource) => (
                <li key={resource.id} className="list-item">
                  <a href={resource.link} target="_blank" rel="noopener noreferrer">
                    {resource.title} ({resource.type})
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Discussion Forums */}
        <div className="card">
          <div className="card-content">
            <h2>Discussion Forums</h2>
            <button className="btn primary" onClick={() => setOpenDiscussionModerationDialog(true)}>
              Moderate Forums
            </button>
            <div className="new-topic-form">
              <input
                type="text"
                value={newDiscussionTopic}
                onChange={(e) => setNewDiscussionTopic(e.target.value)}
                placeholder="New discussion topic"
              />
              <button onClick={handleCreateDiscussionTopic}>Create Topic</button>
            </div>
            <ul className="list">
              {discussionForums.map((forum) => (
                <li key={forum.id} className="list-item">
                  <div className="forum-item">
                    <div>
                      <strong>{forum.topic}</strong>
                      <p>Posts: {forum.posts}</p>
                    </div>
                    <div className="forum-actions">
                      <button className="icon-btn" onClick={() => handleLockForum(forum.id)}>
                        {forum.locked ? "🔒" : "✏️"}
                      </button>
                      <button className="icon-btn" onClick={() => handleDeleteForum(forum.id)}>
                        🗑️
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Live Classes */}
        <div className="card full-width">
          <div className="card-content">
            <h2>Live Classes</h2>
            <button className="btn primary" onClick={() => setOpenLiveClassDialog(true)}>
              Schedule Live Class
            </button>
            <ul className="list">
              {liveClasses.map((liveClass) => (
                <li key={liveClass.id} className="list-item">
                  <strong>{liveClass.title}</strong> - Date: {liveClass.date}, Time: {liveClass.time}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Feedback Section */}
        <div className="card full-width">
          <div className="card-content">
            <h2>Feedback</h2>
            <button className="btn primary" onClick={() => setOpenFeedbackDialog(true)}>
              Submit Feedback
            </button>
            <ul className="list">
              {feedbackList.map((feedbackItem) => (
                <li key={feedbackItem.id} className="list-item">
                  <strong>{feedbackItem.student}</strong>: {feedbackItem.message}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Dialog Components */}
      {openNotificationDialog && (
        <div className="dialog-overlay">
          <div className="dialog">
            <div className="dialog-header">
              <h2>Notification Details</h2>
            </div>
            <div className="dialog-content">
              <p>{selectedNotification?.details}</p>
            </div>
            <div className="dialog-actions">
              <button className="btn" onClick={handleCloseNotificationDialog}>Close</button>
            </div>
          </div>
        </div>
      )}

      {openCreateCourseDialog && (
        <div className="dialog-overlay">
          <div className="dialog">
            <div className="dialog-header">
              <h2>Create New Course</h2>
            </div>
            <div className="dialog-content">
              <div className="form-group">
                <label htmlFor="course-name">Course Name</label>
                <input
                  id="course-name"
                  type="text"
                  value={courseName}
                  onChange={(e) => setCourseName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="course-description">Course Description</label>
                <textarea
                  id="course-description"
                  value={courseDescription}
                  onChange={(e) => setCourseDescription(e.target.value)}
                ></textarea>
              </div>
            </div>
            <div className="dialog-actions">
              <button className="btn" onClick={() => setOpenCreateCourseDialog(false)}>Cancel</button>
              <button className="btn primary" onClick={handleCreateCourse}>Create</button>
            </div>
          </div>
        </div>
      )}

      {openCreateAssignmentDialog && (
        <div className="dialog-overlay">
          <div className="dialog">
            <div className="dialog-header">
              <h2>Create New Assignment</h2>
            </div>
            <div className="dialog-content">
              <div className="form-group">
                <label htmlFor="assignment-title">Assignment Title</label>
                <input
                  id="assignment-title"
                  type="text"
                  value={assignmentTitle}
                  onChange={(e) => setAssignmentTitle(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="assignment-description">Assignment Description</label>
                <textarea
                  id="assignment-description"
                  value={assignmentDescription}
                  onChange={(e) => setAssignmentDescription(e.target.value)}
                ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="assignment-due-date">Due Date</label>
                <input
                  id="assignment-due-date"
                  type="date"
                  value={assignmentDueDate}
                  onChange={(e) => setAssignmentDueDate(e.target.value)}
                />
              </div>
            </div>
            <div className="dialog-actions">
              <button className="btn" onClick={() => setOpenCreateAssignmentDialog(false)}>Cancel</button>
              <button className="btn primary" onClick={handleCreateAssignment}>Create</button>
            </div>
          </div>
        </div>
      )}

      {openFeedbackDialog && (
        <div className="dialog-overlay">
          <div className="dialog">
            <div className="dialog-header">
              <h2>Submit Feedback</h2>
            </div>
            <div className="dialog-content">
              <div className="form-group">
                <label htmlFor="feedback">Feedback</label>
                <textarea
                  id="feedback"
                  rows="4"
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                ></textarea>
              </div>
            </div>
            <div className="dialog-actions">
              <button className="btn" onClick={() => setOpenFeedbackDialog(false)}>Cancel</button>
              <button className="btn primary" onClick={handleSubmitFeedback}>Submit</button>
            </div>
          </div>
        </div>
      )}

      {openLiveClassDialog && (
        <div className="dialog-overlay">
          <div className="dialog">
            <div className="dialog-header">
              <h2>Schedule Live Class</h2>
            </div>
            <div className="dialog-content">
              <div className="form-group">
                <label htmlFor="class-title">Class Title</label>
                <input
                  id="class-title"
                  type="text"
                  value={liveClassTitle}
                  onChange={(e) => setLiveClassTitle(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="class-description">Class Description</label>
                <textarea
                  id="class-description"
                  value={liveClassDescription}
                  onChange={(e) => setLiveClassDescription(e.target.value)}
                ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="class-date">Date</label>
                <input
                  id="class-date"
                  type="date"
                  value={liveClassDate}
                  onChange={(e) => setLiveClassDate(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="class-time">Time</label>
                <input
                  id="class-time"
                  type="time"
                  value={liveClassTime}
                  onChange={(e) => setLiveClassTime(e.target.value)}
                />
              </div>
            </div>
            <div className="dialog-actions">
              <button className="btn" onClick={() => setOpenLiveClassDialog(false)}>Cancel</button>
              <button className="btn primary" onClick={handleScheduleLiveClass}>Schedule</button>
            </div>
          </div>
        </div>
      )}

      {openResourceUploadDialog && (
        <div className="dialog-overlay">
          <div className="dialog">
            <div className="dialog-header">
              <h2>Upload Resource</h2>
            </div>
            <div className="dialog-content">
              <div className="form-group">
                <label htmlFor="resource-title">Resource Title</label>
                <input
                  id="resource-title"
                  type="text"
                  value={resourceTitle}
                  onChange={(e) => setResourceTitle(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="resource-type">Resource Type</label>
                <select
                  id="resource-type"
                  value={resourceType}
                  onChange={(e) => setResourceType(e.target.value)}
                >
                  <option value="PDF">PDF</option>
                  <option value="PPT">PPT</option>
                  <option value="Video">Video</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="resource-link">Resource Link</label>
                <input
                  id="resource-link"
                  type="text"
                  value={resourceLink}
                  onChange={(e) => setResourceLink(e.target.value)}
                />
              </div>
            </div>
            <div className="dialog-actions">
              <button className="btn" onClick={() => setOpenResourceUploadDialog(false)}>Cancel</button>
              <button className="btn primary" onClick={handleUploadResource}>Upload</button>
            </div>
          </div>
        </div>
      )}

      {openDiscussionModerationDialog && (
        <div className="dialog-overlay">
          <div className="dialog">
            <div className="dialog-header">
              <h2>Moderate Discussion Forums</h2>
            </div>
            <div className="dialog-content">
              <ul className="list">
                {discussionForums.map((forum) => (
                  <li key={forum.id} className="list-item">
                    <div className="forum-item">
                      <div>
                        <strong>{forum.topic}</strong>
                        <p>Posts: {forum.posts}</p>
                      </div>
                      <div className="forum-actions">
                        <button className="icon-btn" onClick={() => handleLockForum(forum.id)}>
                          {forum.locked ? "🔒" : "✏️"}
                        </button>
                        <button className="icon-btn" onClick={() => handleDeleteForum(forum.id)}>
                          🗑️
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="dialog-actions">
              <button className="btn" onClick={() => setOpenDiscussionModerationDialog(false)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeacherDashboard;