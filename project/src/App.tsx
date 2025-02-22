import { motion } from "framer-motion";
import {
  Award,
  BarChart3,
  BookOpen,
  Brain,
  GraduationCap,
  MessageCircle,
  Shield,
  Smartphone,
  Users
} from "lucide-react";
import React, { useState } from "react";

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
              <a href="#about" className="text-gray-600 hover:text-blue-600">
                About Us
              </a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600">
                Contact Us
              </a>
              <a href="#faq" className="text-gray-600 hover:text-blue-600">
                FAQ
              </a>
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

      {/* Video Section */}
      <section id="video" className="py-24 bg-blue-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Watch Our Video</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Learn more about how EduNex is transforming education through technology.
          </p>
          <div className="relative pb-9/16">
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="EduNex Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
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
              author="MR. Idunil Silva"
              role="High School Teacher"
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
            />
            <TestimonialCard
              text="As a parent, I love being able to stay connected with my child's education. The real-time updates are invaluable."
              author="Malanie jayathilaka"
              role="Parent"
              image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80"
            />
            <TestimonialCard
              text="The personalized learning recommendations have helped me improve my grades significantly. Highly recommended!"
              author="Amasha Perera"
              role="Student"
              image="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80"
            />
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">About Us</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            EduNex is dedicated to transforming education through technology. Our mission is to provide an all-in-one mobile learning platform that connects students, teachers, and parents for a seamless educational experience.
          </p>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Founded in 2025, EduNex has quickly become a trusted name in the education sector, offering innovative solutions that enhance learning and foster collaboration.
          </p>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="py-24 bg-blue-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Contact Us</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Have questions or need support? Get in touch with us!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">support@edunex.com</p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600">+1 (800) 123-4567</p>
            </div>
          </div>
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Send Us a Message</h3>
            <form className="max-w-xl mx-auto">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Your name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Your email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="message"
                  placeholder="Your message"
                  rows={4}
                ></textarea>
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Location</h3>
            <div className="relative pb-9/16">
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019112287726!2d-122.41941548468196!3d37.77492977975956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5b5b5b5b%3A0x5b5b5b5b5b5b5b5b!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1616161616161!5m2!1sen!2s"
                title="EduNex Location"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions Section */}
      <section id="faq" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">Frequently Asked Questions</h2>
          <div className="max-w-2xl mx-auto">
            <FAQItem question="What is EduNex?" answer="EduNex is an all-in-one mobile learning platform that connects students, teachers, and parents for a seamless educational experience." />
            <FAQItem question="How can I download the EduNex app?" answer="You can download the EduNex app from the App Store or Google Play Store." />
            <FAQItem question="Is EduNex free to use?" answer="EduNex offers both free and premium plans. The free plan includes basic features, while the premium plan provides access to advanced features and content." />
            <FAQItem question="How can I contact EduNex support?" answer="You can contact EduNex support via email at support@edunex.com or by phone at +1 (800) 123-4567." />
          </div>
        </div>
      </section>

      {/* Call-to-Action Banner */}
      <section id="cta" className="py-24 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Join EduNex Today!</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            Experience the future of education with EduNex. Sign up now and start your journey towards a better learning experience.
          </p>
          <button className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100">
            Get Started
          </button>
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
                  <a href="#about" className="text-gray-400 hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-white">
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

function FAQItem({
  question,
  answer
}: {
  question: string;
  answer: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4">
      <button
        className="w-full text-left text-xl font-semibold text-gray-900 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
      </button>
      {isOpen && <p className="mt-2 text-gray-600">{answer}</p>}
    </div>
  );
}

export default App;
