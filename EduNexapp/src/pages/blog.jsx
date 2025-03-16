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
    <div className="min-h-screen">
      <div
        className="bg-[#231b5d] text-white px-4 py-3"
        style={{
          backgroundImage: "url('/blog.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

        {/* Hero Section */}
        <section className="py-24 text-center">
          <div className="max-w-7xl mx-auto text-center px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center justify-center">
              <div>
                <section className="bg-teal-500 text-white opacity-25 py-16 bg-center">
                  <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                      Blog
                    </h1>
                    <p className="text-xl">
                      Latest insights and updates from EduNex
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Blog Posts Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {selectedPost ? (
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">{selectedPost.title}</h2>
              <p className="text-gray-600 mb-4">{selectedPost.date}</p>
              <p className="text-lg text-gray-800">{selectedPost.content}</p>
              <button
                className="mt-4 text-teal-600 hover:text-teal-700 font-medium"
                onClick={() => setSelectedPost(null)}
              >
                Back to Blog
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8">
              {blogPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden">
                  <CardContent className="p-0">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                        <span className="bg-teal-100 text-teal-800 px-2 py-1 rounded-full text-xs">
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
                      <h2 className="text-xl font-semibold mb-2">
                        {post.title}
                      </h2>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                      <button
                        className="text-teal-600 hover:text-teal-700 font-medium"
                        onClick={() => handleReadMore(post)}
                      >
                        Read More →
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
