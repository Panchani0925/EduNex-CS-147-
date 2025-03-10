import React from "react";

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
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
            Learn more about how EduNex is transforming education through technology.
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
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">What Our Users Say</h2>
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Us</h2>
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
              EduNex is dedicated to transforming education through technology. Our mission is to
              provide an all-in-one mobile learning platform that connects students, teachers, and
              parents for a seamless educational experience.
            </motion.p>

            {/* Second paragraph with fade-in animation */}
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-gray-600 leading-relaxed"
            >
              Founded in 2025, EduNex has quickly become a trusted name in the education sector,
              offering innovative solutions that enhance learning and foster collaboration.
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
                <h3 className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
