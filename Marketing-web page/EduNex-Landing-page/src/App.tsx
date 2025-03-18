import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  BarChart3,
  BookOpen,
  Brain,
  ChevronDown,
  Facebook,
  Github,
  Globe,
  Instagram,
  Linkedin,
  Mail,
  Menu,
  MessageCircle,
  Send,
  Shield,
  Sparkles,
  Star,
  Users,
  Zap,
} from "lucide-react";
import React, { useState } from "react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Enhanced Hero Section */}
      <header className="relative overflow-hidden bg-gradient-to-r from-blue-100 via-blue-50 to-white">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <nav className="container mx-auto px-6 py-4 backdrop-blur-sm bg-white/70 sticky top-0 z-50 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img
                src="/logo.jpg"
                alt="EduNex Logo"
                className="logo"
                width="50"
                height="50"
              />
              <span className="text-2xl font-bold text-gray-900">EduNex</span>
            </div>
            <div className="hidden md:flex space-x-8">
              {[
                "Features",
                "Testimonials",
                "About",
                "Contact",
                "FAQ",
                "Our Team",
              ].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium"
                >
                  {item}
                </a>
              ))}
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
          {isMenuOpen && (
            <div className="md:hidden mt-4 space-y-2">
              {[
                "Features",
                "Testimonials",
                "About",
                "Contact",
                "FAQ",
                "Our Team",
              ].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="block text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium"
                >
                  {item}
                </a>
              ))}
            </div>
          )}
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
              <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2 text-center">
                Transform Education
                {Array.from("Transform Education").map((char, index) => (
                  <span
                    key={index}
                    className="inline-block opacity-0 animate-fade-in-letter"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    {char}
                  </span>
                ))}
              </h1>
              <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                With EduNex
                {Array.from("with EduNex").map((char, index) => (
                  <span
                    key={index}
                    className="inline-block opacity-0 animate-fade-in-letter"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    {char}
                  </span>
                ))}
              </h1>
            </div>

            {/* Subheading */}
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto animate-fade-in-up-delay">
              The all-in-one mobile learning platform that connects students,
              teachers, and parents for a seamless educational experience.
            </p>

            {/* Feature image */}
            <div className="relative max-w-6xl mx-auto animate-float flex justify-center">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg transform rotate-1 scale-105 opacity-20 blur-xl" />
              <img
                src="/OIP.jpg"
                alt="Student using EduNex"
                className="relative rounded-lg shadow-2xl transform hover:scale-[1.05] transition-transform duration-300"
              />
            </div>
          </div>

          {/* Add custom animation keyframes */}
          <style>{`
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

            @keyframes fade-in-letter {
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

            .animate-fade-in-letter {
              animation: fade-in-letter 0.5s ease-out forwards;
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

      {/* Our Team Section */}
      <TeamSection />

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
            transition={{ duration: 0.8, delay: 4 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl transform -rotate-1" />
            <div className="absolute inset-0 bg-white rounded-xl transform rotate-1 transition-transform group-hover:rotate-2" />
            <div className="relative">
              <iframe
                className="w-full aspect-video rounded-lg shadow-2xl transform transition-transform hover:scale-[1.01] duration-300"
                src="1.2.mp4"
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

        <style>{`
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
              image="a1.jpg"
            />
            <TestimonialCard
              text="As a parent, I love being able to stay connected with my child's education. The real-time updates are invaluable."
              author="Malanie jayathilaka"
              role="Parent"
              image="a2.jpg"
            />
            <TestimonialCard
              text="The personalized learning recommendations have helped me improve my grades significantly. Highly recommended!"
              author="Amasha Perera"
              role="Student"
              image="a3.jpg"
            />
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section
        id="about"
        className="relative overflow-hidden py-24 bg-gradient-to-b from-white to-gray-50"
      >
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
              { label: "Countries Reached", value: "25+" },
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
      <section className="relative py-24 overflow-hidden bg-[#00224B] via-blue-700 to-blue-800 text-white">
        {/* Animated background particles */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 animate-ping opacity-30">
            <Star className="w-4 h-4" />
          </div>
          <div className="absolute bottom-10 right-10 animate-ping delay-300 opacity-30">
            <Star className="w-4 h-4" />
          </div>
          <div className="absolute top-1/2 left-1/4 animate-ping delay-500 opacity-30">
            <Sparkles className="w-4 h-4" />
          </div>
          <div className="absolute bottom-1/3 right-1/4 animate-ping delay-700 opacity-30">
            <Sparkles className="w-4 h-4" />
          </div>
        </div>

        {/* Main content container */}
        <div className="container relative mx-auto px-6 text-center">
          {/* Floating effect wrapper */}
          <div className="animate-bounce-slow">
            <h2 className="text-5xl font-bold mb-8 tracking-tight">
              Join EduNex Today!
              <Zap className="inline-block w-8 h-8 ml-2 text-yellow-300 animate-pulse" />
            </h2>
          </div>

          <p className="text-xl mb-12 max-w-2xl mx-auto leading-relaxed opacity-90">
            Experience the future of education with EduNex. Sign up now and
            start your journey towards a better learning experience.
          </p>

          <div className="space-y-6">
            {/* Primary CTA Button */}
            <button className="group relative px-8 py-4 bg-white text-[#00224B] rounded-lg transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
              <span className="relative z-10 flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white via-blue-50 to-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>

            {/* Feature highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
              {[
                {
                  title: "Interactive Learning",
                  desc: "Engage with dynamic content",
                },
                { title: "Expert Support", desc: "24/7 assistance available" },
                { title: "Progress Tracking", desc: "Monitor your growth" },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-white/10 backdrop-blur-sm transform hover:-translate-y-2 transition-all duration-300 hover:bg-white/20"
                >
                  <h3 className="text-lg font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm opacity-80">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 text-sm opacity-80">
            <p className="flex items-center justify-center space-x-2">
              <span>Trusted by</span>
              <span className="font-bold">10,000+</span>
              <span>educational institutions worldwide</span>
            </p>
          </div>
        </div>
      </section>
      {/* Download Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-64 h-64 -top-32 -left-32 bg-blue-200 rounded-full opacity-20 animate-pulse" />
          <div className="absolute w-64 h-64 -bottom-32 -right-32 bg-purple-200 rounded-full opacity-20 animate-pulse delay-700" />
        </div>

        <div className="container mx-auto px-6 text-center relative">
          {/* Floating sparkles icon */}
          <div className="absolute top-0 right-1/4 animate-bounce">
            <Sparkles className="w-6 h-6 text-yellow-400" />
          </div>

          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-8 transform hover:scale-105 transition-transform">
            Ready to Get Started?
          </h2>

          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join thousands of students, teachers, and parents who are already
            transforming their educational experience with EduNex.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            {/* Primary download button */}
            <button className="group px-8 py-4 bg-[#00224B] text-white rounded-lg hover:bg-blue-800 transform hover:-translate-y-1 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center">
              <Award className="w-5 h-5 mr-2 animate-pulse" />
              <span>Download Now</span>
              <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
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
  image,
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

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
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
    <section id="faq" className="py-24 bg-white">
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

      <style>{`
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
    message: "",
  });

  const [focused, setFocused] = useState({
    name: false,
    email: false,
    message: false,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleFocus = (field: "name" | "email" | "message") => {
    setFocused((prev) => ({
      ...prev,
      [field]: true,
    }));
  };

  const handleBlur = (field: "name" | "email" | "message") => {
    setFocused((prev) => ({
      ...prev,
      [field]: false,
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
                className="bg-[#00224B] hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transform transition-all duration-200 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
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
      </div>
    </section>
  );
};

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Panchani Charunya Gunarathne",
      role: "Server-side Development & Database Management",
      image: "/site.jpg",
      work: "I lead my team and also train",
      links: {
        linkedin:
          "http://www.linkedin.com/in/panchani-gunarathne-108058318/johndoe",
        github: "https://github.com/Panchani0925",
        email: "panchani.20233002@iit.ac.lk",
      },
      gradient: "from-purple-500 to-pink-500",
    },
    {
      name: " Arundathi Oshadhi Mendis",
      role: "Server-side Development & Database Management",
      image: "/oshadhi.jpg",
      work: "I work to build the database of the application",
      links: {
        linkedin: "http://www.linkedin.com/in/arundathi-oshadhi-061166336",
        github: "https://github.com/Oshadhi571",
        email: "liyana.20232974@iit.ac.lk",
      },
      gradient: "from-blue-500 to-teal-500",
    },
    {
      name: "Ridmi Poornima",
      role: "Client Side Development & Marketing",
      image: "/ridmi.jpg",
      work: "I work to build the frontend of the application",
      links: {
        linkedin: "https://www.linkedin.com/in/ridmi-epa-b569aa2ba/",
        github: "https://github.com/ridmipoornima",
        email: "ridmipoornima.com",
      },
      gradient: "from-orange-500 to-yellow-500",
    },
    {
      name: "Dithara Nimvini Andaraweera",
      role: "server Side development & Marketing",
      image: "/dithara.jpg",
      work: "I work to build the backend of the application",
      links: {
        linkedin: "http://www.linkedin.com/in/ditharaandaraweera",
        github: "https://github.com/DitharaAndaraweera",
        email: "dithara.20231164@iit.ac.lk",
      },
      gradient: "from-green-500 to-emerald-500",
    },
    {
      name: "Thangavel Abishek",
      role: "UI/UX Design & server-side development",
      image: "/abishek.jpg",
      work: "I work to build the backend of the application",
      links: {
        linkedin: "https://linkedin.com/in/charliedavis",
        github: "https://github.com/charliedavis",
        email: "charlie@example.com",
      },
      gradient: "from-red-500 to-rose-500",
    },
    {
      name: "Buthmira Perera",
      role: "UI/UX Design & Client Side development",
      image: "/buthmira.jpg",
      work: "I work to build the frontend of the application",
      links: {
        linkedin: "https://linkedin.com/in/evewilson",
        github: "https://github.com/evewilson",
        email: "eve@example.com",
      },
      gradient: "from-indigo-500 to-violet-500",
    },
  ];

  return (
    <section
      id="our-team"
      className="py-24 bg-[#00224B]" // changed background color to solid #00224B
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="group relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center transition-all duration-500 hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Animated Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl`}
              />

              {/* Profile Image Container */}
              <div className="relative mb-6">
                <div className="w-40 h-40 mx-auto rounded-full overflow-hidden transform transition-all duration-500 group-hover:rotate-6">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-30 transition-all duration-500`}
                  />
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>

              {/* Name and Role */}
              <h3 className="text-2xl font-semibold text-white mb-2 transition-all duration-300 group-hover:scale-105">
                {member.name}
              </h3>
              <p
                className={`bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent font-medium px-4 py-1 rounded-full inline-block`}
              >
                {member.role}
              </p>

              {/* Work Description */}
              <p className="mt-4 text-gray-300 text-sm opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                {member.work}
              </p>

              {/* Social Links */}
              <div className="mt-6 flex justify-center space-x-4">
                {Object.entries(member.links).map(([platform, url]) => {
                  const Icon = {
                    linkedin: Linkedin,
                    github: Github,
                    website: Globe,
                    email: Mail,
                  }[platform];
                  if (!Icon) return null;
                  return (
                    <a
                      key={platform}
                      href={platform === "email" ? `mailto:${url}` : url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-white opacity-60 hover:opacity-100 transition-all duration-300 hover:scale-125 hover:rotate-12`}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>

              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl" />
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeSlideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="bg-[#00224B] text-white py-12 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20 animate-gradient-x" />

      <div className="container mx-auto px-6 relative">
        {/* Newsletter Section */}
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-gray-400 mb-6">
            Subscribe to our newsletter for the latest educational technology
            insights
          </p>

          {!isSubscribed ? (
            <form
              onSubmit={handleSubmit}
              className="flex gap-2 max-w-md mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500 transition-colors"
                required
              />
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 group"
              >
                Subscribe
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          ) : (
            <div className="text-green-400 flex items-center justify-center gap-2">
              <Send className="w-5 h-5" />
              Thanks for subscribing!
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo Section */}
          <div className="transform hover:scale-105 transition-transform">
            <div className="flex items-center space-x-2 mb-6">
              <img
                src="/logo.jpg"
                alt="EduNex Logo"
                className="logo"
                width="50"
                height="50"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                EduNex
              </span>
            </div>
            <p className="text-gray-400">
              Transforming education through technology
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {["About Us", "Careers", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="text-gray-400 hover:text-white relative group block"
                  >
                    <span className="relative z-10">{item}</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {["Privacy Policy", "Terms of Service"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white relative group block"
                  >
                    <span className="relative z-10">{item}</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              {[
                {
                  icon: Instagram,
                  name: "Instagram",
                  url: "https://www.instagram.com/edunex_2025?utm_source=qr&igsh=amJ2bWhrOTZzbjMy",
                },
                {
                  icon: Linkedin,
                  name: "LinkedIn",
                  url: "https://www.linkedin.com/company/105658686/admin/dashboard/",
                },
                {
                  icon: Facebook,
                  name: "Facebook",
                  url: "https://www.facebook.com/share/1LE4XmXUvs/",
                }, // <-- added comma here
                {
                  icon: Github, // corrected from "github" to "Github"
                  name: "Github", // updated name accordingly
                  url: "https://github.com/Panchani0925/EduNex-CS-147-.git", // update URL if needed
                },
              ].map(({ icon: Icon, name, url }) => (
                <li key={name}>
                  <a
                    href={url}
                    className="text-gray-400 hover:text-white flex items-center group"
                  >
                    <Icon className="w-5 h-5 mr-2 transform group-hover:scale-110 transition-transform" />
                    <span className="relative">
                      <span className="relative z-10">{name}</span>
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p className="hover:text-white transition-colors">
            &copy; 2025 EduNex. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default App;
