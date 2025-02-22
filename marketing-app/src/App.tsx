import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Users,
  BookOpen,
  Brain,
  Award,
  MessageCircle,
  BarChart3,
  Shield,
  Smartphone
} from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">EduNex</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-600 hover:text-blue-600">
                Features
              </a>
              <a
                href="#testimonials"
                className="text-gray-600 hover:text-blue-600"
              >
                Testimonials
              </a>
              <a href="#download" className="text-gray-600 hover:text-blue-600">
                Download
              </a>
            </div>
            <div className="flex space-x-4">
              <button className="px-4 py-2 text-blue-600 hover:text-blue-700">
                Login
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Sign Up
              </button>
            </div>
          </div>
        </nav>

        <div className="container mx-auto px-6 pt-20 pb-24 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-8"
          >
            Transform Education
            <br />
            with EduNex
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto"
          >
            The all-in-one mobile learning platform that connects students,
            teachers, and parents for a seamless educational experience.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <button className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center justify-center">
              <Smartphone className="w-5 h-5 mr-2" />
              Download App
            </button>
            <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50">
              Learn More
            </button>
          </motion.div>
        </div>

        <div className="absolute -bottom-32 left-1/2 transform -translate-x-1/2">
          <img
            src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&w=800&q=80"
            alt="Student using EduNex"
            className="rounded-lg shadow-2xl"
          />
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-32 mt-32 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-20">
            Why Choose EduNex?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <FeatureCard
              icon={<BookOpen className="w-8 h-8 text-blue-600" />}
              title="Comprehensive Learning"
              description="Access a vast library of educational resources, live classes, and interactive content."
            />
            <FeatureCard
              icon={<Users className="w-8 h-8 text-blue-600" />}
              title="Connected Community"
              description="Foster collaboration between students, teachers, and parents through integrated communication tools."
            />
            <FeatureCard
              icon={<BarChart3 className="w-8 h-8 text-blue-600" />}
              title="Progress Tracking"
              description="Monitor academic performance with detailed analytics and personalized insights."
            />
            <FeatureCard
              icon={<Brain className="w-8 h-8 text-blue-600" />}
              title="AI-Powered Learning"
              description="Receive personalized recommendations and study plans based on your learning patterns."
            />
            <FeatureCard
              icon={<MessageCircle className="w-8 h-8 text-blue-600" />}
              title="Real-time Communication"
              description="Stay connected with instant messaging and discussion forums for quick support."
            />
            <FeatureCard
              icon={<Shield className="w-8 h-8 text-blue-600" />}
              title="Safe & Secure"
              description="Enjoy a protected learning environment with robust privacy controls and data security."
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-blue-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              text="EduNex has transformed how I manage my classroom. The integrated tools make teaching and tracking progress so much easier."
              author="Sarah Johnson"
              role="High School Teacher"
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
            />
            <TestimonialCard
              text="As a parent, I love being able to stay connected with my child's education. The real-time updates are invaluable."
              author="Michael Chen"
              role="Parent"
              image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80"
            />
            <TestimonialCard
              text="The personalized learning recommendations have helped me improve my grades significantly. Highly recommended!"
              author="Emily Rodriguez"
              role="Student"
              image="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80"
            />
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Join thousands of students, teachers, and parents who are already
            transforming their educational experience with EduNex.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center">
              <Award className="w-5 h-5 mr-2" />
              Download Now
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <GraduationCap className="h-8 w-8 text-blue-400" />
                <span className="text-2xl font-bold">EduNex</span>
              </div>
              <p className="text-gray-400">
                Transforming education through technology
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 EduNex. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="p-6 bg-white rounded-lg shadow-lg border border-gray-100"
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}

function TestimonialCard({
  text,
  author,
  role,
  image
}: {
  text: string;
  author: string;
  role: string;
  image: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="p-6 bg-white rounded-lg shadow-lg"
    >
      <p className="text-gray-600 mb-6">"{text}"</p>
      <div className="flex items-center">
        <img src={image} alt={author} className="w-12 h-12 rounded-full mr-4" />
        <div>
          <h4 className="font-semibold text-gray-900">{author}</h4>
          <p className="text-gray-600">{role}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default App;
