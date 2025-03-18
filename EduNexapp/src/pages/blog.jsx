import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Menu } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState(null);

  const blogPosts = [
    {
      id: 1,
      title: "Education is much easier with EduNext",
      date: "23 December 2023",
      excerpt: "EduNext makes learning more accessible and enjoyable...",
      content: "Full content of the first blog post...",
      image: "/placeholder.svg?height=200&width=400",
      category: "Education",
    },
    {
      id: 2,
      title: "New Learning Techniques",
      date: "15 January 2024",
      excerpt: "Discover new methods to enhance your learning experience...",
      content: "Full content of the second blog post...",
      image: "/placeholder.svg?height=200&width=400",
      category: "Techniques",
    },
    {
      id: 3,
      title: "Study Techniques for Better Results",
      date: "10 February 2024",
      excerpt: "Proven study methods to improve your learning efficiency...",
      content: "Full content of the third blog post...",
      image: "/placeholder.svg?height=200&width=400",
      category: "Study Tips",
    },
  ];

  const handleReadMore = (post) => {
    setSelectedPost(post);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div>
        {/* Hero Section */}
        <section className="py-24 text-white bg-gradient-to-b from-white to-blue-900 relative overflow-hidden">
          {/* Animated background particles */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute w-20 h-20 bg-blue-400 rounded-full opacity-10 top-1/4 left-1/4 animate-pulse"></div>
            <div
              className="absolute w-32 h-32 bg-blue-300 rounded-full opacity-10 top-3/4 left-1/3 animate-ping"
              style={{ animationDuration: "4s" }}
            ></div>
            <div
              className="absolute w-24 h-24 bg-blue-200 rounded-full opacity-10 top-1/3 right-1/4 animate-pulse"
              style={{ animationDuration: "7s" }}
            ></div>
            <div
              className="absolute w-16 h-16 bg-blue-100 rounded-full opacity-10 bottom-1/4 right-1/3 animate-ping"
              style={{ animationDuration: "5s" }}
            ></div>
          </div>

          {/* Enhanced content with effects */}
          <div className="max-w-7xl mx-auto text-center px-4 relative z-10">
            <div className="grid md:grid-cols-2 gap-8 items-center justify-center">
              <div className="container mx-auto px-4 transform transition-all duration-700 hover:scale-105">
                {/* Text effect for heading with gradient and animation */}
                <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeIn bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-white">
                  Blog<br>
                  </br><br></br>
                </h1>
                {/* Text effect for subtitle with typing animation */}
                <p className="text-xl text-blue-100 animate-fadeInDelayed relative overflow-hidden">
                  Latest insights and updates from EduNex
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-300 animate-slideRight"></span>
                </p>
              </div>

              
            </div>

            {/* Scroll indicator animation */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
              <svg
                className="w-6 h-6 text-blue-200"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>
          </div>
        </section>
      </div>

      {/* Blog Posts Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {selectedPost ? (
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold mb-4 text-blue-900">
                {selectedPost.title}
              </h2>
              <p className="text-gray-600 mb-4">{selectedPost.date}</p>
              <p className="text-lg text-gray-800">{selectedPost.content}</p>
              <button
                className="mt-4 text-blue-700 hover:text-blue-900 font-medium flex items-center"
                onClick={() => setSelectedPost(null)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                Back to Blog
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Card
                  key={post.id}
                  className="overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-white"
                >
                  <CardContent className="p-0">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                          {post.category}
                        </span>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(post.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </div>
                      </div>
                      <h2 className="text-xl font-semibold mb-2 text-blue-900">
                        {post.title}
                      </h2>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                      <button
                        className="text-blue-700 hover:text-blue-900 font-medium flex items-center"
                        onClick={() => handleReadMore(post)}
                      >
                        Read More
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 ml-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
