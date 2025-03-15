import { Card, CardContent } from "@/components/ui/card"; // fixed import error
import { Menu } from "lucide-react"; // Import the Menu component
import React, { useState } from "react";

const teamMembers = [
  {
    id: 1,
    name: "Panchali",
    role: "Leader",
    idNumber: "w2084711",
    contribution: "**************************",
    image: "site.jpg",
  },
  {
    id: 2,
    name: "Oshadhi",
    role: "Database",
    idNumber: "w2084712",
    contribution: "**************************",
    image: "oshadhi.jpg",
  },
  {
    id: 3,
    name: "Ridmi Poornima",
    role: "Frontend", // fixed spelling error
    idNumber: "w2084722",
    contribution: "**************************",
    image: "ridmi.jpg",
  },
  {
    id: 4,
    name: "Abishek",
    role: "Backend", // fixed spelling error
    idNumber: "w2084733",
    contribution: "**************************",
    image: "abishek.jpg",
  },
  {
    id: 5,
    name: "DITHARA",
    role: "Backend",
    idNumber: "w2084744",
    contribution: "**************************",
    image: "dithara.jpg",
  },
  {
    id: 6,
    name: "Buthmira",
    role: "Frontend", // fixed spelling error
    idNumber: "w2084755",
    contribution: "**************************",
    image: "buthmira.jpg",
  },
];

export default function About() {
  const [hoveredMember, setHoveredMember] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false); // Add state for menu

  return (
    <div className="min-h-screen">
      <div
        className="bg-[#231b5d] text-white px-4 py-3"
        style={{
          backgroundImage: "url('/about.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Hero Section */}
        <section className="py-24 text-black bg-white bg-opacity-25 text-center">
          <div className="max-w-7xl mx-auto text-center px-4 ">
            <div className="grid md:grid-cols-2 gap-8 items-center justify-center">
              <div className="space-y-6">
                {/* Hero Section */}
                <section className="bg-teal-500 text-white py-16">
                  <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                      About EduNex
                    </h1>
                    <p className="text-xl">
                      Empowering Education Through Technology
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Enhanced Mission Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-black leading-relaxed">
                At EduNex, we believe in making quality education accessible to
                everyone. Our platform connects students with Sri Lanka's finest
                educators, providing a comprehensive learning experience that
                transcends traditional boundaries.
              </p>
              <p className="text-lg text-black leading-relaxed">
                We strive to create an engaging, interactive learning
                environment that empowers students to achieve their academic
                goals and pursue their passions.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative group">
                <img
                  src="AC.jpg"
                  alt="Education Mission"
                  className="rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 rounded-2xl bg-teal-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Team Members Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                onMouseEnter={() => setHoveredMember(member.id)}
                onMouseLeave={() => setHoveredMember(null)}
                className="transform hover:-translate-y-2 transition-all duration-300"
              >
                <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group bg-white rounded-2xl">
                  <CardContent className="p-0">
                    <div className="aspect-square relative">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div
                        className={`absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm text-white p-8 transform transition-all duration-300 ease-in-out ${
                          hoveredMember === member.id
                            ? "translate-y-0"
                            : "translate-y-full"
                        }`}
                      >
                        <h3 className="text-2xl font-bold mb-2">
                          {member.name}
                        </h3>
                        <p className="text-teal-300 text-lg mb-3">
                          {member.role}
                        </p>
                        <p className="text-gray-300 mb-2">
                          ID: {member.idNumber}
                        </p>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {member.contribution}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-white text-black py-6">
        <div className="container mx-auto px-4">
          <p className="text-black text-center text-lg">
            <a
              href="#"
              className="font-bold hover:text-teal-200 transition-colors duration-300 border-b-2 border-transparent hover:border-teal-200 pb-1"
            >
              To-up
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
