import { Book, Menu, Search, Users } from "lucide-react";
import React, { useState } from "react";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Sample data
  const subjects = [
    { name: "Mathematics", students: "2000+ students" },
    { name: "Bio Science", students: "2000+ students" },
    { name: "Chemistry", students: "1500+ students" }
  ];

  const teachers = [
    { name: "Mr. Perera", students: "2000+ students" },
    { name: "Mrs. Fernando", students: "2000+ students" },
    { name: "Ms. Amarasena", students: "1500+ students" }
  ];

  const testimonials = [
    {
      name: "Buthsara Perera",
      content: "Education is much easier with EduNext"
    },
    {
      name: "Buthsara Perera",
      content: "Education is much easier with EduNext"
    },
    {
      name: "Buthsara Perera",
      content: "Education is much easier with EduNext"
    }
  ];

  const blogPosts = [
    {
      title: "Education is much easier with EduNext",
      date: "23 December 2023"
    },
    {
      title: "Education is much easier with EduNext",
      date: "23 December 2023"
    },
    { title: "Education is much easier with EduNext", date: "23 December 2023" }
  ];

  return (
    <div>
      <div
        className="bg-[#231b5d] text-white px-4 py-3"
        style={{
          backgroundImage: "url('/main.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        {/* Header */}
        <header>
          <nav className="max-w-7xl mx-auto flex items-center justify-between">
            <img src="/logo.jpg" alt="EduNex Logo" className="logo" />
            <div className="hidden md:flex items-center gap-6">
              <a href="#" className="hover:opacity-80">
                Home
              </a>
              <a href="#" className="hover:opacity-80">
                About
              </a>
              <a href="#" className="hover:opacity-80">
                Courses
              </a>
              <a href="#" className="hover:opacity-80">
                Blog
              </a>
              <a href="#" className="hover:opacity-80">
                Contact
              </a>
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
              <a href="#" className="block py-2 hover:opacity-80">
                Home
              </a>
              <a href="#" className="block py-2 hover:opacity-80">
                About
              </a>
              <a href="#" className="block py-2 hover:opacity-80">
                Courses
              </a>
              <a href="#" className="block py-2 hover:opacity-80">
                Blog
              </a>
              <a href="#" className="block py-2 hover:opacity-80">
                Contact
              </a>
            </div>
          )}
        </header>

        {/* Hero Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto text-center px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center justify-center">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  Start Your Education Journey With Us
                </h1>
                <div className="bg-white rounded-lg p-2 flex items-center gap-2 justify-center">
                  <input
                    type="text"
                    placeholder="What do you want to learn?"
                    className="flex-1 p-2 text-gray-800 outline-none"
                  />
                  <button className="bg-[#231b5d] text-white px-4 py-2 rounded-md">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <button className="bg-white text-[#231b5d] px-4 py-2 rounded-md font-medium mx-auto block">
          Get Started
        </button>
      </div>

      {/* Stats */}
      <section className="py-12 px-4" style={{ backgroundColor: "white" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#060d4d] text-white p-6 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-2">10,000+</h3>
            <p>Enrolled Students</p>
          </div>
          <div className="bg-[#060d4d] text-white p-6 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-2">150+</h3>
            <p>Teachers</p>
          </div>
          <div className="bg-[#060d4d] text-white p-6 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-2">20+</h3>
            <p>Subjects</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-navy blue">
            Why Choose Us?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-[#231b5d] text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Book className="h-8 w-8" />
              </div>
              <h3 className="font-semibold mb-2">
                Library for educational materials
              </h3>
              <p className="text-gray-600">
                Access to comprehensive study materials
              </p>
            </div>
            <div className="text-center">
              <div className="bg-[#231b5d] text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="font-semibold mb-2">Live classes</h3>
              <p className="text-gray-600">Interactive learning experience</p>
            </div>
            <div className="text-center">
              <div className="bg-[#231b5d] text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8" />
              </div>
              <h3 className="font-semibold mb-2">
                Progress tracking for parents
              </h3>
              <p className="text-gray-600">Monitor your child's development</p>
            </div>
          </div>
        </div>
      </section>

      {/* Subjects */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Top Subjects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {subjects.map((subject, index) => (
              <div
                key={index}
                className="bg-[#231b5d] text-white p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold mb-2">{subject.name}</h3>
                <p>{subject.students}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teachers */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Teachers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {teachers.map((teacher, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold mb-2">{teacher.name}</h3>
                <p className="text-gray-600">{teacher.students}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Students Say About Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-600 mb-4">{testimonial.content}</p>
                <p className="font-semibold">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Check Blog For Latest Educational News
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600">{post.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
