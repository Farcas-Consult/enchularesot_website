"use client";

import React, { useState, useEffect } from "react";
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

const S3_BASE = "https://enchula-resort-4376242942.s3.eu-west-1.amazonaws.com/app";


const BlogPage = () => {
  return (
    <section id="blog" className="relative min-h-screen bg-white">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Blog Grid in white cards */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <span className="inline-block mb-4 px-6 py-3 bg-[#FAF5F0] rounded-full border border-[#A04040]/20 text-[#A04040] font-semibold tracking-wide text-sm uppercase">
              BLOG & TRAVEL TIPS
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.id}`}
                className="group block bg-white rounded-2xl overflow-hidden border border-[#5C4033]/20 shadow-lg transition-all duration-300 hover:scale-[1.02] p-6"
              >
                <div className="mb-4">
                  <span className="text-4xl block mb-3">{post.emoji}</span>
                  <span className="px-3 py-1 bg-[#D7BFA8]/30 text-[#5C4033] border border-[#D7BFA8]/40 text-xs font-semibold rounded-full">
                    {post.category}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-[#2E1A15] mb-3 group-hover:text-[#A04040] transition-colors">
                  {post.title}
                </h2>
                <div className="flex items-center gap-2 text-[#A9745B] text-sm mb-4">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <div className="flex items-center gap-2 text-[#A04040] font-semibold text-sm">
                  <span>Read Article</span>
                  <svg className="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
        {/* Newsletter CTA in white card */}
        <div className="text-center bg-white p-8 rounded-2xl border border-[#5C4033]/20 shadow-lg">
          <span className="text-4xl mb-4 block">📬</span>
          <h3 className="text-2xl md:text-3xl font-bold text-[#2E1A15] mb-4">
            Get Travel Tips in Your Inbox
          </h3>
          <p className="text-[#5C4033] mb-6">
            Subscribe for exclusive stories and local insights
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#A04040] to-[#A9745B] hover:from-[#A9745B] hover:to-[#A04040] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
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