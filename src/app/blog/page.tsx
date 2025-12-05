"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const S3_BASE = "https://enchula-resort-4376242942.s3.eu-west-1.amazonaws.com/app";

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
  const backgroundImages = [
    `${S3_BASE}/IMG_2256.webp`,
    `${S3_BASE}/IMG_2267.webp`,
    `${S3_BASE}/IMG_2272.webp`,
  ];

  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="blog"
      className="relative py-20 px-4 sm:px-6 lg:px-8 min-h-screen"
      style={{
        backgroundImage: `url(${backgroundImages[currentBg]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        transition: "background-image 1s ease-in-out",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#2E1A15]/90 via-[#2C1B16]/85 to-[#2E1A15]/95"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header with Badge */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6 px-6 py-3 bg-[#5C4033]/20 backdrop-blur-sm rounded-full border border-[#800000]/30">
            <span className="text-[#D7BFA8] font-semibold tracking-wide text-sm uppercase">
              BLOG & TRAVEL TIPS
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#FAF5F0] mb-6 leading-tight">
            Discover Local Secrets & <span className="bg-gradient-to-r from-[#A04040] via-[#A9745B] to-[#D7BFA8] bg-clip-text text-transparent">Plan Perfect Escapes</span>
          </h1>
          <p className="text-lg text-[#D7BFA8] max-w-3xl mx-auto">
            Discover local secrets and plan your perfect escape
          </p>
        </div>

        {/* Blog Grid - Modern Cards with No Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              className="group block bg-[#2C1B16]/60 backdrop-blur-sm rounded-2xl overflow-hidden border border-[#5C4033]/30 hover:border-[#800000]/50 transition-all duration-300 p-6 hover:bg-[#2C1B16]/80"
            >
              <div className="mb-4">
                <span className="text-4xl block mb-3">{post.emoji}</span>
                <span className="px-3 py-1 bg-[#800000]/20 text-[#D7BFA8] border border-[#800000]/30 text-xs font-semibold rounded-full">
                  {post.category}
                </span>
              </div>

              <h2 className="text-xl font-bold text-[#FAF5F0] mb-3 group-hover:text-[#D7BFA8] transition-colors">
                {post.title}
              </h2>

              <div className="flex items-center gap-2 text-[#D7BFA8] text-sm mb-4">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>

              <div className="flex items-center gap-2 text-[#800000] font-semibold text-sm">
                <span>Read Article</span>
                <svg className="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="text-center bg-[#2C1B16]/40 backdrop-blur-md p-8 rounded-2xl border border-[#5C4033]/30">
          <span className="text-4xl mb-4 block">📬</span>
          <h3 className="text-2xl md:text-3xl font-bold text-[#FAF5F0] mb-4">
            Get Travel Tips in Your Inbox
          </h3>
          <p className="text-[#D7BFA8] mb-6">
            Subscribe for exclusive stories and local insights
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#800000] to-[#5C4033] hover:from-[#A04040] hover:to-[#6B4423] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
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