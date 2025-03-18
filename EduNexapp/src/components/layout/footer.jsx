import { Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#1a2547] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img
              src="/logo.jpg"
              alt="EduNex Logo"
              className="footer-logo mb-4"
            />
            <h3 className="text-lg font-semibold mb-4  text-[#4ce2e9]">
              About Us
            </h3>
            <p className="text-gray-300">
              We are dedicated to providing quality education through our online
              learning platform.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4  text-[#4ce2e9]">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-300 hover:text-white">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4  text-[#4ce2e9]">
              Contact Info
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Phone size={18} className="inline-block mr-2" /> (+94) 714
                099346
              </li>
              <li>
                <Mail size={18} className="inline-block mr-2" />{" "}
                EduNex@gmail.com
              </li>
              <li>Address: 123 Education St</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#4ce2e9]">
              Newsletter
            </h3>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-[#2c9cdb] to-[#3db2ff] text-white hover:opacity-90 rounded-full flex items-center justify-center transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
          <p>&copy; 2024 E-Learning Platform. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
