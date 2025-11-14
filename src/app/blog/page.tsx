"use client";

import React from "react";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "Top 5 Things to Do Near Enchula",
    category: "Local Experiences",
    emoji: "🎯",
    readTime: "5 min",
    date: "Nov 5, 2025",
    images: [
      "https://images.unsplash.com/photo-1518173946687-a4c8892d985a?w=800&q=80",
      "https://images.unsplash.com/photo-1590004448324-879d7ea9e954?w=800&q=80",
      "https://images.unsplash.com/photo-1607497266800-66da2aa8d4ac?w=800&q=80",
    ],
  },
  {
    id: 2,
    title: "First-Timer's Guide to Weekend Getaways",
    category: "Travel Tips",
    emoji: "✈️",
    readTime: "6 min",
    date: "Oct 28, 2025",
    images: [
      "https://images.unsplash.com/photo-1564429097587-f3f368c10b00?w=800&q=80",
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80",
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80",
    ],
  },
  {
    id: 3,
    title: "Why Families Love Enchula Resort",
    category: "Family Travel",
    emoji: "👨‍👩‍👧‍👦",
    readTime: "4 min",
    date: "Oct 20, 2025",
    images: [
      "https://images.unsplash.com/photo-1607497266800-66da2aa8d4ac?w=800&q=80",
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80",
      "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&q=80",
    ],
  },
  {
    id: 4,
    title: "Sustainable Tourism: Protecting Our Land",
    category: "Sustainability",
    emoji: "🌱",
    readTime: "7 min",
    date: "Oct 10, 2025",
    images: [
      "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&q=80",
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80",
      "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=800&q=80",
    ],
  },
  {
    id: 5,
    title: "Best Photography Spots at the Resort",
    category: "Photography",
    emoji: "📸",
    readTime: "5 min",
    date: "Oct 1, 2025",
    images: [
      "https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?w=800&q=80",
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    ],
  },
  {
    id: 6,
    title: "Culinary Journey: Farm-to-Table Dining",
    category: "Food & Dining",
    emoji: "🍽️",
    readTime: "6 min",
    date: "Sep 25, 2025",
    images: [
      "https://images.unsplash.com/photo-1414609245224-afa02bfb3fda?w=800&q=80",
      "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=800&q=80",
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80",
    ],
  },
];

const BlogPage = () => {
  return (
    <section
      id="blog"
      className="relative py-20 px-4 min-h-screen"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=1920&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#2E1A15]/90 via-[#2C1B16]/85 to-[#2E1A15]/95"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-[#FAF5F0] mb-4">
            BLOGS & TRAVEL TIPS
          </h1>
          <p className="text-xl text-[#D7BFA8]">
            Discover local secrets and plan your perfect escape
          </p>
        </div>

        {/* Featured Hero Post */}
        <div className="mb-12 bg-[#3D2517]/60 rounded-3xl overflow-hidden border-2 border-[#5C4033]/50 shadow-2xl backdrop-blur-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="relative h-96 lg:h-auto">
              <img
                src={blogPosts[0].images[0]}
                alt={blogPosts[0].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2E1A15]/80 to-transparent"></div>
              <div className="absolute top-6 left-6">
                <span className="px-4 py-2 bg-[#800000] text-white text-sm font-semibold rounded-full">
                  Featured
                </span>
              </div>
            </div>
            <div className="p-8 lg:p-12 bg-[#2C1B16]/80 flex flex-col justify-center">
              <span className="text-5xl mb-4">{blogPosts[0].emoji}</span>
              <div className="flex items-center gap-3 text-[#D7BFA8] text-sm mb-4">
                <span>{blogPosts[0].category}</span>
                <span>•</span>
                <span>{blogPosts[0].date}</span>
                <span>•</span>
                <span>{blogPosts[0].readTime}</span>
              </div>
              <h2 className="text-4xl font-bold text-[#FAF5F0] mb-6">
                {blogPosts[0].title}
              </h2>
              <Link
                href={`/blog/${blogPosts[0].id}`}
                className="inline-flex items-center gap-2 bg-[#800000] hover:bg-[#A04040] text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 w-fit"
              >
                Read Article
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Blog Grid - Visual Focus */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              className="group block bg-[#3D2517]/60 rounded-3xl overflow-hidden border-2 border-[#5C4033]/50 hover:border-[#800000]/70 transition-all duration-500 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 backdrop-blur-sm"
            >
              {/* Image Gallery Preview */}
              <div className="relative">
                <div className="grid grid-cols-3 gap-1">
                  {post.images.map((img, idx) => (
                    <div
                      key={idx}
                      className={`relative overflow-hidden ${
                        idx === 0 ? 'col-span-3 h-48' : 'h-32'
                      }`}
                    >
                      <img
                        src={img}
                        alt={`${post.title} ${idx + 1}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                  ))}
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-[#800000]/90 text-white text-xs font-semibold rounded-full">
                    {post.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4 text-4xl">
                  {post.emoji}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 bg-[#2C1B16]/80">
                <div className="flex items-center gap-2 text-[#D7BFA8] text-xs mb-3">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-xl font-bold text-[#FAF5F0] mb-4 group-hover:text-[#D7BFA8] transition-colors">
                  {post.title}
                </h2>
                <div className="flex items-center gap-2 text-[#800000] font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                  <span>Read More</span>
                  <svg className="h-3 w-3 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Image Banner Gallery */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=600&q=80",
            "https://images.unsplash.com/photo-1505228395867-2fdaa1d65c7a?w=600&q=80",
            "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&q=80",
            "https://images.unsplash.com/photo-1464802686167-b939a6910659?w=600&q=80",
          ].map((img, idx) => (
            <div key={idx} className="relative h-64 rounded-2xl overflow-hidden group">
              <img
                src={img}
                alt={`Gallery ${idx + 1}`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#800000]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-16 text-center bg-[#2C1B16]/70 p-10 rounded-3xl border-2 border-[#800000]/40 backdrop-blur-sm">
          <span className="text-5xl mb-4 block">📬</span>
          <h3 className="text-3xl font-bold text-[#FAF5F0] mb-4">
            Get Travel Tips in Your Inbox
          </h3>
          <p className="text-[#D7BFA8] mb-6 text-lg">
            Subscribe for exclusive stories and local insights
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-[#800000] hover:bg-[#A04040] text-white font-semibold px-10 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Subscribe Now
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPage;