"use client";

import { useState } from "react";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import {
  HiMoon,
  HiOutlineLockClosed,
  HiOutlineMail,
  HiOutlineUser,
  HiSun,
} from "react-icons/hi";

const roles = ["Student", "Teacher", "Parent"];

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Student");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Theme functions
  const setDarkMode = () => {
    document.documentElement.classList.add("dark");
    setIsDarkMode(true);
  };

  const setLightMode = () => {
    document.documentElement.classList.remove("dark");
    setIsDarkMode(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    console.log("Signup:", { name, email, password, role, acceptTerms });
  };

  return (
    <div
      className={`flex min-h-screen items-center justify-center ${
        isDarkMode ? "bg-[#0a1025]" : "bg-[#f0f4f8]"
      } relative overflow-hidden`}
    >
      {/* Background dots */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className={`absolute h-8 w-8 rounded-full ${
              isDarkMode ? "bg-cyan-500/20" : "bg-cyan-500/30"
            } bubble`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative">
        {/* Theme toggle - show only one icon at a time */}
        <div className="absolute top-4 right-4 z-10">
          {isDarkMode ? (
            <HiSun
              onClick={setLightMode}
              className="cursor-pointer text-yellow-500 hover:text-yellow-400 transition-colors"
              size={24}
              aria-label="Switch to light mode"
            />
          ) : (
            <HiMoon
              onClick={setDarkMode}
              className="cursor-pointer text-gray-600 hover:text-gray-800 transition-colors"
              size={24}
              aria-label="Switch to dark mode"
            />
          )}
        </div>

        <div
          className={`w-full max-w-md rounded-xl ${
            isDarkMode ? "bg-[#111936]/80" : "bg-white/90"
          } p-8 backdrop-blur-sm shadow-lg`}
        >
          <div className="mb-8 text-center">
            <h1
              className={`mb-2 text-4xl font-bold ${
                isDarkMode ? "text-[#4ce2e9]" : "text-[#2c9cdb]"
              }`}
            >
              EduNex REGISTER
            </h1>
            <p className={isDarkMode ? "text-gray-300" : "text-gray-600"}>
              Create your digital workspace account
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <HiOutlineUser
                className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${
                  isDarkMode ? "text-gray-400" : "text-gray-500"
                } h-5 w-5`}
              />
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full name"
                className={`w-full rounded-[28px] border ${
                  isDarkMode
                    ? "border-gray-700 bg-[#1a2547] text-gray-200"
                    : "border-gray-300 bg-white text-gray-800"
                } pl-10 h-14 px-3 focus:outline-none focus:ring-2 ${
                  isDarkMode ? "focus:ring-[#4ce2e9]" : "focus:ring-[#2c9cdb]"
                }`}
              />
            </div>

            <div className="relative">
              <HiOutlineMail
                className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${
                  isDarkMode ? "text-gray-400" : "text-gray-500"
                } h-5 w-5`}
              />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className={`w-full rounded-[28px] border ${
                  isDarkMode
                    ? "border-gray-700 bg-[#1a2547] text-gray-200"
                    : "border-gray-300 bg-white text-gray-800"
                } pl-10 h-14 px-3 focus:outline-none focus:ring-2 ${
                  isDarkMode ? "focus:ring-[#4ce2e9]" : "focus:ring-[#2c9cdb]"
                }`}
              />
            </div>

            <div className="relative">
              <HiOutlineLockClosed
                className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${
                  isDarkMode ? "text-gray-400" : "text-gray-500"
                } h-5 w-5`}
              />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className={`w-full rounded-[28px] border ${
                  isDarkMode
                    ? "border-gray-700 bg-[#1a2547] text-gray-200"
                    : "border-gray-300 bg-white text-gray-800"
                } pl-10 h-14 px-3 focus:outline-none focus:ring-2 ${
                  isDarkMode ? "focus:ring-[#4ce2e9]" : "focus:ring-[#2c9cdb]"
                }`}
              />
            </div>

            <div>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className={`w-full rounded-[28px] border ${
                  isDarkMode
                    ? "border-gray-700 bg-[#1a2547] text-gray-200"
                    : "border-gray-300 bg-white text-gray-800"
                } h-14 px-5 focus:outline-none focus:ring-2 ${
                  isDarkMode ? "focus:ring-[#4ce2e9]" : "focus:ring-[#2c9cdb]"
                } appearance-none`}
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3cvss xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                  backgroundPosition: `right 1rem center`,
                  backgroundRepeat: `no-repeat`,
                  backgroundSize: `1.5em 1.5em`,
                }}
              >
                {roles.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="terms"
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
                className={`h-5 w-5 rounded border ${
                  isDarkMode ? "border-gray-600" : "border-gray-300"
                } ${
                  isDarkMode ? "text-[#4ce2e9]" : "text-[#2c9cdb]"
                } focus:ring-0`}
              />
              <label
                htmlFor="terms"
                className={`ml-2 block text-sm ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                I accept the{" "}
                <a
                  href="/terms"
                  className={
                    isDarkMode
                      ? "text-[#4ce2e9] hover:underline"
                      : "text-[#2c9cdb] hover:underline"
                  }
                >
                  Terms of Service
                </a>{" "}
                and{" "}
                <a
                  href="/privacy"
                  className={
                    isDarkMode
                      ? "text-[#4ce2e9] hover:underline"
                      : "text-[#2c9cdb] hover:underline"
                  }
                >
                  Privacy Policy
                </a>
              </label>
            </div>

            <button
              type="submit"
              disabled={!acceptTerms}
              className={`w-full h-14 text-lg font-medium ${
                isDarkMode
                  ? "bg-gradient-to-r from-[#4ce2e9] to-[#5bbae8] text-gray-900"
                  : "bg-gradient-to-r from-[#2c9cdb] to-[#3db2ff] text-white"
              } hover:opacity-90 rounded-full flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed transition duration-200`}
            >
              Create Account
              <svg
                className="ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </button>

            <div className="my-6 flex items-center">
              <div
                className={`flex-grow h-px ${
                  isDarkMode ? "bg-gray-700" : "bg-gray-300"
                }`}
              ></div>
              <span
                className={`mx-4 text-sm ${
                  isDarkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                Or continue with
              </span>
              <div
                className={`flex-grow h-px ${
                  isDarkMode ? "bg-gray-700" : "bg-gray-300"
                }`}
              ></div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                className={`flex items-center justify-center ${
                  isDarkMode
                    ? "bg-blue-500 hover:bg-blue-400 border-blue-700 hover:border-blue-500"
                    : "bg-blue-600 hover:bg-blue-500 border-blue-800 hover:border-blue-600"
                } text-white font-bold py-2 px-4 border-b-4 rounded`}
              >
                <FaGoogle className="mr-2 h-5 w-5" />
                Google
              </button>
              <button
                type="button"
                className={`flex items-center justify-center ${
                  isDarkMode
                    ? "bg-blue-500 hover:bg-blue-400 border-blue-700 hover:border-blue-500"
                    : "bg-blue-600 hover:bg-blue-500 border-blue-800 hover:border-blue-600"
                } text-white font-bold py-2 px-4 border-b-4 rounded`}
              >
                <FaFacebookF className="mr-2 h-5 w-5" />
                Facebook
              </button>
            </div>

            <p
              className={`mt-8 text-center text-sm ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Already have an account?{" "}
              <a
                href="/login"
                className={
                  isDarkMode
                    ? "text-[#4ce2e9] hover:underline"
                    : "text-[#2c9cdb] hover:underline"
                }
              >
                Sign in
              </a>
            </p>
          </form>
        </div>
      </div>

      <style jsx global>{`
        :root {
          --bg-color: #f0f4f8; /* updated light background */
          --text-color: #334155; /* updated light text color */
          --tint-color: #2c9cdb; /* updated light tint color */
          --input-bg: #ffffff;
          --input-border: #e2e8f0; /* updated light input border */
          --card-bg: #ffffff;
          --card-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
            0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }
        .dark {
          --bg-color: #0a1025;
          --text-color: #e5e5e5;
          --tint-color: #4ce2e9;
          --input-bg: #1a2547;
          --input-border: #444444;
          --card-bg: #111936;
          --card-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3),
            0 4px 6px -2px rgba(0, 0, 0, 0.2);
        }
        /* Styles applied to all elements */
        body {
          background-color: var(--bg-color);
          color: var(--text-color);
          transition: background-color 0.3s ease, color 0.3s ease;
        }
        input,
        select {
          background-color: var(--input-bg);
          border: 1px solid var(--input-border);
          color: var(--text-color);
        }
        button.gradient {
          background-image: linear-gradient(
            to right,
            var(--tint-color),
            var(--tint-color-light, #5bbae8)
          );
          color: white;
          transition: opacity 0.3s ease;
        }
        a {
          color: var(--tint-color);
        }
      `}</style>
      <style jsx>{`
        @keyframes bubble {
          0% {
            opacity: 0.9;
          }
          50% {
            transform: translateY(-10px) scale(1.2);
            opacity: 1;
          }
          100% {
            transform: translateY(0) scale(1);
            opacity: 0.9;
          }
        }
        .bubble {
          animation: bubble 3s infinite ease-in-out;
          animation-delay: calc(0.3s * var(--i, 0));
        }
      `}</style>
    </div>
  );
};

export default Register;
