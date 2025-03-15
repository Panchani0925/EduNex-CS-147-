import { Menu } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Courses() {
  const [menuOpen, setMenuOpen] = useState(false);

  const courses = [
    {
      id: 1,
      title: "Introduction to Web Development",
      instructor: "John Doe",
      level: "Beginner",
      duration: "8 weeks",
      price: "$99",
    },
    {
      id: 2,
      title: "Advanced JavaScript",
      instructor: "Jane Smith",
      level: "Advanced",
      duration: "10 weeks",
      price: "$149",
    },
    {
      id: 3,
      title: "UI/UX Design Fundamentals",
      instructor: "Mike Johnson",
      level: "Intermediate",
      duration: "6 weeks",
      price: "$129",
    },
  ];

  return (
    <div className="min-h-screen">
      <div
        className="bg-[#231b5d] text-white px-4 py-3"
        style={{
          backgroundImage: "url('/course.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Header */}
        <header>
          <nav className="max-w-7xl mx-auto flex items-center justify-between">
            <img src="/logo.jpg" alt="EduNex Logo" className="logo" />
            <div className="hidden md:flex items-center gap-6">
              <Link to="/" className="hover:opacity-80">
                Home
              </Link>
              <Link to="/about" className="hover:opacity-80">
                About
              </Link>
              <Link to="/courses" className="hover:opacity-80">
                Courses
              </Link>
              <Link to="/blog" className="hover:opacity-80">
                Blog
              </Link>
              <Link to="/contact" className="hover:opacity-80">
                Contact
              </Link>
            </div>
            <div className="md:hidden">
              <button
                className="text-white"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </nav>
          {menuOpen && (
            <div className="md:hidden bg-[#231b5d] text-white p-4">
              <Link to="/" className="block py-2 hover:opacity-80">
                Home
              </Link>
              <Link to="/about" className="block py-2 hover:opacity-80">
                About
              </Link>
              <Link to="/courses" className="block py-2 hover:opacity-80">
                Courses
              </Link>
              <Link to="/blog" className="block py-2 hover:opacity-80">
                Blog
              </Link>
              <Link to="/contact" className="block py-2 hover:opacity-80">
                Contact
              </Link>
            </div>
          )}
        </header>

        {/* Hero Section */}
        <section className="py-24 text-center">
          <div className="max-w-7xl mx-auto text-center px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center justify-center">
              <div>
                <section className="bg-teal-500 text-white opacity-25 py-16 bg-center">
                  <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                      Blog
                    </h1>
                    <p className="text-xl">
                      Latest insights and updates from EduNex
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
      </div>

      <h1 className="text-4xl font-bold mb-8 text-center">Our Courses</h1>

      {/* Course Filters */}
      <div className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <select className="input-field">
            <option value="">All Categories</option>
            <option value="web">Web Development</option>
            <option value="design">Design</option>
            <option value="business">Business</option>
          </select>
          <select className="input-field">
            <option value="">All Levels</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
          <select className="input-field">
            <option value="">Price Range</option>
            <option value="free">Free</option>
            <option value="paid">Paid</option>
          </select>
        </div>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <div key={course.id} className="card">
            <div className="bg-gray-200 h-48 mb-4 rounded-md"></div>
            <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
            <div className="mb-4">
              <p className="text-gray-600">Instructor: {course.instructor}</p>
              <p className="text-gray-600">Level: {course.level}</p>
              <p className="text-gray-600">Duration: {course.duration}</p>
              <p className="text-blue-600 font-semibold">{course.price}</p>
            </div>
            <button className="btn-primary w-full">Enroll Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
