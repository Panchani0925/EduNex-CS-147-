import { Book, Menu, Search, Users, X } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <div
        className="bg-[#231b5d] text-white px-4 py-3"
        style={{
          backgroundImage: "url('/main.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

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
        <button
          className="bg-white text-[#231b5d] px-4 py-2 rounded-md font-medium mx-auto block"
          onClick={() => setModalOpen(true)}
        >
          Get Started
        </button>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg relative">
            <button
              className="absolute top-2 right-2 text-gray-600"
              onClick={() => setModalOpen(false)}
            >
              <X className="bg-black text-white h-6 w-6" />
            </button>
            <h2 className="text-2xl font-bold mb-4 text-black text-center">
              Welcome
            </h2>
            <div className="flex gap-2">
              <Link to="/login">
                <button
                  className="bg-[#231b5d] text-white px-4 py-2 rounded-md flex-1"
                  onClick={() => setModalOpen(false)}
                >
                  Login
                </button>
              </Link>
              <Link to="/register">
                <button
                  className="bg-[#231b5d] text-white px-4 py-2 rounded-md flex-1"
                  onClick={() => setModalOpen(false)}
                >
                  Register
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}

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
          <h2 className="text-3xl font-bold text-center mb-12 text-black">
            Why Choose Us?
          </h2>
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#060d4d] text-white p-6 rounded-lg text-center">
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
            <div className="bg-[#060d4d] text-white p-6 rounded-lg text-center">
              <div className="bg-[#231b5d] text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="font-semibold mb-2">Live classes</h3>
              <p className="text-gray-600">Interactive learning experience</p>
            </div>
            <div className="bg-[#060d4d] text-white p-6 rounded-lg text-center">
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

      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto px-4 py-12 space-y-20">
          {/* First Feature Section */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <img
              src="/book.jpg"
              alt="Stack of educational books"
              className="rounded-lg shadow-lg w-full max-w-md"
            />
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-[#1a237e]">
                Education is much easier with us
              </h2>
              <p className="text-lg text-gray-700">
                Students can learn with live classes or watch as videos in their
                own pace.
              </p>
            </div>
          </div>

          {/* Second Feature Section */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 md:order-1">
              <h2 className="text-3xl font-bold text-[#1a237e]">
                Easier for parents to checking thier child education.
              </h2>
              <p className="text-lg text-gray-700">
                Parents get notifications of their child progress and also
                communicate with teachers.
              </p>
            </div>
            <img
              src="/books.jpg"
              alt="Stack of books with bookmark"
              className="rounded-lg shadow-lg w-full max-w-md md:order-2"
            />
          </div>

          {/* Third Feature Section */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <img
              src="/boos1.jpg"
              alt="Books and digital device on desk"
              className="rounded-lg shadow-lg w-full max-w-md"
            />
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-[#1a237e]">
                Teaching is easier with us
              </h2>
              <p className="text-lg text-gray-700">
                Teachers can do live classes, create lessons, manage students
                and their assignments
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Subjects */}
      <section className="py-12 px-4 bg-white">
        <h2 className="text-center text-3xl font-medium mb-8 text-white">
          Our Top Subjects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-8">
          {/* First row of subjects */}
          <div className="relative">
            <img src="1.jpg" className="w-full h-48 object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-[#1d1b4b] text-white p-4">
              <h3 className="text-xl mb-1">Mathematics</h3>
              <p>2000+ students</p>
            </div>
          </div>

          <div className="relative">
            <img
              src="1.jpg"
              alt="Bio Science"
              className="w-full h-48 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-[#1d1b4b] text-white p-4">
              <h3 className="text-xl mb-1">Bio Science</h3>
              <p>2000+ students</p>
            </div>
          </div>

          <div className="relative">
            <img
              src="1.jpg"
              alt="Chemistry"
              className="w-full h-48 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-[#1d1b4b] text-white p-4">
              <h3 className="text-xl mb-1">Chemistry</h3>
              <p>1000+ students</p>
            </div>
          </div>

          {/* Second row of subjects */}
          <div className="relative">
            <img
              src="1.jpg"
              alt="Mathematics"
              className="w-full h-48 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-[#1d1b4b] text-white p-4">
              <h3 className="text-xl mb-1">Mathematics</h3>
              <p>2000+ students</p>
            </div>
          </div>

          <div className="relative">
            <img
              src="2.jpg"
              alt="Bio Science"
              className="w-full h-48 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-[#1d1b4b] text-white p-4">
              <h3 className="text-xl mb-1">Bio Science</h3>
              <p>2000+ students</p>
            </div>
          </div>

          <div className="relative">
            <img
              src="3.jpg"
              alt="Chemistry"
              className="w-full h-48 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-[#1d1b4b] text-white p-4">
              <h3 className="text-xl mb-1">Chemistry</h3>
              <p>1000+ students</p>
            </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <button className="bg-[#1d1b4b] text-white px-6 py-2 rounded">
            View All Subjects
          </button>
        </div>
      </section>

      {/* Teachers */}
      <section className="py-12 px-4 bg-gray-50 ">
        <h2 className="text-center text-3xl font-medium mb-8 text-black">
          Our Teachers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-8">
          <div className="relative">
            <img
              src="1.jpg"
              alt="Mr. Perera"
              className="w-full aspect-square object-cover rounded-full bg-gray-200"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-[#1d1b4b] text-white p-4">
              <h3 className="text-xl mb-1">Mr. Perera</h3>
              <p>2000+ students</p>
            </div>
          </div>

          <div className="relative">
            <img
              src="1.jpg"
              alt="Mrs. Fernando"
              className="w-full aspect-square object-cover rounded-full bg-gray-200"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-[#1d1b4b] text-white p-4">
              <h3 className="text-xl mb-1">Mrs. Fernando</h3>
              <p>2000+ students</p>
            </div>
          </div>

          <div className="relative">
            <img
              src="1.jpg"
              alt="Ms. Amarasena"
              className="w-full aspect-square object-cover rounded-full bg-gray-200"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-[#1d1b4b] text-white p-4">
              <h3 className="text-xl mb-1">Ms. Amarasena</h3>
              <p>1000+ students</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button className="bg-[#1d1b4b] px-6 py-3 rounded-lg text-lg">
            View All Teachers
          </button>
        </div>
      </section>

      {/* Lesson */}
      <section className="py-12 px-4 bg-white">
        <div className="flex flex-col items-center gap-8 py-12">
          <h2 className="text-4xl font-normal text-black">
            Our Popular Lessons
          </h2>

          <div className="flex flex-wrap justify-center gap-8">
            <div className="bg-[#1d1b4b] p-6 rounded-lg w-72">
              <h3 className="text-2xl mb-4">Velocity</h3>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-white rounded-full"></div>
                <span>Mr. Perera</span>
              </div>
              <p>2000+ students</p>
            </div>

            <div className="bg-[#1d1b4b] p-6 rounded-lg w-72">
              <h3 className="text-2xl mb-4">Equilibrium</h3>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-white rounded-full"></div>
                <span>Mrs. Fernando</span>
              </div>
              <p>2000+ students</p>
            </div>

            <div className="bg-[#1d1b4b] p-6 rounded-lg w-72">
              <h3 className="text-2xl mb-4">Chemistry</h3>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-white rounded-full"></div>
                <span>Ms. Amarasena</span>
              </div>
              <p>1000+ students</p>
            </div>
          </div>

          <button className="bg-[#1d1b4b] px-6 py-3 rounded-lg text-lg">
            View All Lessons
          </button>
        </div>
      </section>

      <section className="py-12 px-4 bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          {/* Testimonials Section */}
          <h2 className="text-4xl font-medium text-center mb-16 text-black">
            What Students Say About Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-[#1d1b4b] p-8 rounded-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-white rounded-full" />
                  <h3 className="text-xl font-medium">Buthmira Perera</h3>
                </div>
                <p className="text-lg">Education is much easier with EduNex</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-12 px-4 bg-white">
        <h2 className="text-4xl font-medium text-center mb-16 text-black">
          Check Blog For Latest Educational News
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-[#1d1b4b] p-8 rounded-lg">
              <p className="text-2xl mb-8 ">
                Education is much easier with EduNex
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-full" />
                <div>
                  <h3 className="text-xl font-medium">Buthmira Perera</h3>
                  <p className="text-gray-600">21 December 2025</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center">
          <button className="bg-[#1d1b4b] px-6 py-3 rounded-lg text-lg">
            View More
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
