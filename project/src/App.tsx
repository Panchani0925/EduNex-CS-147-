import { motion } from "framer-motion";
import {
  Award,
  BarChart3,
  BookOpen,
  Brain,
  ChevronDown,
  Facebook,
  Linkedin,
  MessageCircle,
  Shield,
  Smartphone,
  Twitter,
  Users
} from "lucide-react";
import React, { useState } from "react";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Enhanced Hero Section */}
      <header className="relative overflow-hidden bg-gradient-to-r from-blue-100 via-blue-50 to-white">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <nav className="container mx-auto px-6 py-4 backdrop-blur-sm bg-white/70 sticky top-0 z-50 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img src="/logo.jpg" alt="EduNex Logo" className="logo" />
              <span className="text-2xl font-bold text-gray-900">EduNex</span>
            </div>
            <div className="hidden md:flex space-x-8">
              {[
                "Features",
                "Testimonials",
                "Download",
                "About",
                "Contact",
                "FAQ"
              ].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </nav>

        <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-blue-50 via-white to-blue-50">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-30 animate-pulse" />
            <div className="absolute top-20 -left-20 w-60 h-60 bg-purple-100 rounded-full blur-3xl opacity-30 animate-pulse" />
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent" />
          </div>

          {/* Main content container */}
          <div className="container relative mx-auto px-6 pt-20 pb-32 text-center">
            {/* Floating shapes for visual interest */}
            <div className="absolute top-10 left-10 w-4 h-4 bg-blue-400 rounded-full animate-bounce" />
            <div className="absolute top-20 right-20 w-3 h-3 bg-purple-400 rounded-full animate-bounce delay-75" />
            <div className="absolute bottom-40 left-20 w-3 h-3 bg-indigo-400 rounded-full animate-bounce delay-150" />

            {/* Main heading */}
            <div className="relative mb-8 animate-fade-in-up">
              <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
                Transform Education
              </h1>
              <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                with EduNex
              </h1>
            </div>

            {/* Subheading */}
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto animate-fade-in-up-delay">
              The all-in-one mobile learning platform that connects students,
              teachers, and parents for a seamless educational experience.
            </p>

            {/* Call to action buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16 animate-fade-in-up-delay-2">
              <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg transform transition-all duration-200 hover:scale-105 hover:shadow-lg flex items-center justify-center">
                <Smartphone className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Download App
              </button>
              <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg transform transition-all duration-200 hover:scale-105 hover:shadow-lg hover:bg-blue-50">
                Learn More
              </button>
            </div>

            {/* Feature image */}
            <div className="relative max-w-4xl mx-auto animate-float">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg transform rotate-1 scale-105 opacity-20 blur-xl" />
              <img
                src="/api/placeholder/800/600"
                alt="Student using EduNex"
                className="relative rounded-lg shadow-2xl transform hover:scale-[1.01] transition-transform duration-300"
              />
            </div>
          </div>

          {/* Add custom animation keyframes */}
          <style jsx>{`
            @keyframes fade-in-up {
              from {
                opacity: 0;
                transform: translateY(20px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }

            @keyframes float {
              0% {
                transform: translateY(0px);
              }
              50% {
                transform: translateY(-10px);
              }
              100% {
                transform: translateY(0px);
              }
            }

            .animate-fade-in-up {
              animation: fade-in-up 0.6s ease-out forwards;
            }

            .animate-fade-in-up-delay {
              animation: fade-in-up 0.6s ease-out 0.2s forwards;
              opacity: 0;
            }

            .animate-fade-in-up-delay-2 {
              animation: fade-in-up 0.6s ease-out 0.4s forwards;
              opacity: 0;
            }

            .animate-float {
              animation: float 3s ease-in-out infinite;
            }
          `}</style>
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

      <section className="py-24 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100 rounded-full translate-x-1/2 translate-y-1/2 opacity-50" />
        </div>

        <div className="container mx-auto px-6 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Watch Our Video
            </h2>
          </motion.div>

          <motion.p
            className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Learn more about how EduNex is transforming education through
            technology.
          </motion.p>

          <motion.div
            className="relative aspect-video max-w-4xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl transform -rotate-1" />
            <div className="absolute inset-0 bg-white rounded-xl transform rotate-1 transition-transform group-hover:rotate-2" />
            <div className="relative">
              <iframe
                className="w-full aspect-video rounded-lg shadow-2xl transform transition-transform hover:scale-[1.01] duration-300"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="EduNex Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </motion.div>

          {/* Floating elements decoration */}
          <div className="absolute top-1/4 left-0 w-4 h-4 bg-blue-400 rounded-full animate-float opacity-50" />
          <div className="absolute top-3/4 right-1/4 w-6 h-6 bg-purple-400 rounded-full animate-float-delayed opacity-50" />
          <div className="absolute bottom-1/4 right-0 w-8 h-8 bg-blue-300 rounded-full animate-float opacity-50" />
        </div>

        <style jsx>{`
          @keyframes float {
            0%,
            100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-20px);
            }
          }
          @keyframes float-delayed {
            0%,
            100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-20px);
            }
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          .animate-float-delayed {
            animation: float-delayed 8s ease-in-out infinite;
          }
        `}</style>
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
      <section className="relative overflow-hidden py-24 bg-gradient-to-b from-white to-gray-50">
        {/* Animated background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-100 opacity-20 animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-purple-100 opacity-20 animate-pulse delay-700" />
        </div>

        <div className="container relative z-10 mx-auto px-6">
          {/* Heading with slide-up animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              About Us
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full" />
          </motion.div>

          {/* Content container with card effect */}
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12 hover:shadow-2xl transition-shadow duration-300">
            {/* First paragraph with fade-in animation */}
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 mb-8 leading-relaxed"
            >
              EduNex is dedicated to transforming education through technology.
              Our mission is to provide an all-in-one mobile learning platform
              that connects students, teachers, and parents for a seamless
              educational experience.
            </motion.p>

            {/* Second paragraph with fade-in animation */}
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-gray-600 leading-relaxed"
            >
              Founded in 2025, EduNex has quickly become a trusted name in the
              education sector, offering innovative solutions that enhance
              learning and foster collaboration.
            </motion.p>
          </div>

          {/* Stats section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
            {[
              { label: "Active Users", value: "50K+" },
              { label: "Educational Partners", value: "100+" },
              { label: "Countries Reached", value: "25+" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-3xl font-bold text-blue-600 mb-2">
                  {stat.value}
                </h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <ContactSection />

      {/* Frequently Asked Questions Section */}
      <FAQ />

      {/* Call-to-Action Banner */}
      <section
        id="cta"
        className="py-24 bg-gradient-to-r from-blue-600 to-blue-800 text-white"
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Join EduNex Today!</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            Experience the future of education with EduNex. Sign up now and
            start your journey towards a better learning experience.
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
                <img src="/logo.jpg" alt="EduNex Logo" className="logo" />
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
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white flex items-center"
                  >
                    <Twitter className="w-5 h-5 mr-2" />
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white flex items-center"
                  >
                    <Linkedin className="w-5 h-5 mr-2" />
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white flex items-center"
                  >
                    <Facebook className="w-5 h-5 mr-2" />
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

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-gray-900">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
            isOpen ? "transform rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 pb-6" : "max-h-0"
        }`}
      >
        <p className="text-gray-600 px-1">{answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 animate-fade-in-delay">
            Everything you need to know about EduNex
          </p>
        </div>

        <div className="max-w-3xl mx-auto divide-y divide-gray-200 rounded-2xl bg-white shadow-lg p-8 animate-slide-up">
          <FAQItem
            question="What is EduNex?"
            answer="EduNex is an all-in-one mobile learning platform that connects students, teachers, and parents for a seamless educational experience. Our platform combines virtual classrooms, assignment tracking, progress monitoring, and communication tools in one easy-to-use interface."
          />
          <FAQItem
            question="How can I download the EduNex app?"
            answer="You can download the EduNex app from the App Store for iOS devices or Google Play Store for Android devices. Simply search for 'EduNex' and look for our official app icon."
          />
          <FAQItem
            question="Is EduNex free to use?"
            answer="EduNex offers both free and premium plans. The free plan includes basic features like assignment tracking and class communication. Our premium plan provides access to advanced features such as video conferencing, detailed analytics, and specialized learning resources."
          />
          <FAQItem
            question="How can I contact EduNex support?"
            answer="You can contact EduNex support via email at support@edunex.com or by phone at +1 (800) 123-4567. Our support team is available Monday through Friday, 9 AM to 6 PM EST."
          />
          <FAQItem
            question="What devices are compatible with EduNex?"
            answer="EduNex is compatible with most modern devices including iOS and Android smartphones, tablets, and web browsers on desktop computers. We recommend using the latest version of your preferred browser for the best experience."
          />
          <FAQItem
            question="How secure is my data on EduNex?"
            answer="We take data security very seriously. EduNex uses industry-standard encryption protocols to protect your personal information. We are COPPA compliant and never share your data with third parties without explicit consent."
          />
          <FAQItem
            question="Can I use EduNex for multiple classes?"
            answer="Yes! You can manage multiple classes simultaneously on EduNex. Teachers can create and manage different class sections, while students can easily switch between their enrolled courses."
          />
          <FAQItem
            question="What kind of support is available for teachers?"
            answer="Teachers receive comprehensive support including onboarding assistance, professional development resources, and access to our teacher community. We also provide regular webinars and training sessions to help you make the most of EduNex."
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.6s ease-out;
        }

        .animate-fade-in-delay {
          animation: fadeIn 0.6s ease-out 0.3s both;
        }

        .animate-slide-up {
          animation: slideUp 0.8s ease-out 0.5s both;
        }
      `}</style>
    </section>
  );
};

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [focused, setFocused] = useState({
    name: false,
    email: false,
    message: false
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value
    }));
  };

  const handleFocus = (field) => {
    setFocused((prev) => ({
      ...prev,
      [field]: true
    }));
  };

  const handleBlur = (field) => {
    setFocused((prev) => ({
      ...prev,
      [field]: false
    }));
  };

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-blue-50 to-white"
    >
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-8 transform transition-all duration-500 hover:scale-105">
          Contact Us
        </h2>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto animate-fade-in">
          Have questions or need support? Get in touch with us!
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-8 mb-16">
          <div className="flex flex-col items-center transform transition-all duration-300 hover:-translate-y-2 bg-white p-6 rounded-lg shadow-lg">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">Email</h3>
            <p className="text-gray-600">support@edunex.com</p>
          </div>

          <div className="flex flex-col items-center transform transition-all duration-300 hover:-translate-y-2 bg-white p-6 rounded-lg shadow-lg">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">Phone</h3>
            <p className="text-gray-600">+1 (800) 123-4567</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-xl p-8 max-w-2xl mx-auto transform transition-all duration-500 hover:shadow-2xl">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">
            Send Us a Message
          </h3>
          <form className="space-y-6">
            <div className="relative">
              <label
                className={`block text-gray-700 text-sm font-bold mb-2 transition-all duration-200 ${
                  focused.name ? "text-blue-600" : ""
                }`}
                htmlFor="name"
              >
                Name
              </label>
              <input
                className={`shadow-sm appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight transition-all duration-200 ${
                  focused.name
                    ? "border-blue-600 ring-2 ring-blue-100"
                    : "focus:border-blue-400"
                }`}
                id="name"
                type="text"
                placeholder="Your name"
                required
                value={formData.name}
                onChange={handleInputChange}
                onFocus={() => handleFocus("name")}
                onBlur={() => handleBlur("name")}
              />
            </div>

            <div className="relative">
              <label
                className={`block text-gray-700 text-sm font-bold mb-2 transition-all duration-200 ${
                  focused.email ? "text-blue-600" : ""
                }`}
                htmlFor="email"
              >
                Email
              </label>
              <input
                className={`shadow-sm appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight transition-all duration-200 ${
                  focused.email
                    ? "border-blue-600 ring-2 ring-blue-100"
                    : "focus:border-blue-400"
                }`}
                id="email"
                type="email"
                placeholder="Your email"
                required
                value={formData.email}
                onChange={handleInputChange}
                onFocus={() => handleFocus("email")}
                onBlur={() => handleBlur("email")}
              />
            </div>

            <div className="relative">
              <label
                className={`block text-gray-700 text-sm font-bold mb-2 transition-all duration-200 ${
                  focused.message ? "text-blue-600" : ""
                }`}
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className={`shadow-sm appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight transition-all duration-200 ${
                  focused.message
                    ? "border-blue-600 ring-2 ring-blue-100"
                    : "focus:border-blue-400"
                }`}
                id="message"
                placeholder="Your message"
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                onFocus={() => handleFocus("message")}
                onBlur={() => handleBlur("message")}
              ></textarea>
            </div>

            <div className="flex items-center justify-center">
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transform transition-all duration-200 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                type="button"
                onClick={() => {
                  window.location.href = `mailto:support@edunex.com?subject=Contact from ${formData.name}&body=${formData.message} (Email: ${formData.email})`;
                }}
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        <div className="mt-16">
          <div className="relative pb-[56.25%] rounded-xl overflow-hidden shadow-xl transform transition-all duration-500 hover:shadow-2xl">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019112287726!2d-122.41941548468196!3d37.77492977975956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5b5b5b5b%3A0x5b5b5b5b5b5b5b5b!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1616161616161!5m2!1sen!2s"
              title="EduNex Location"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;
