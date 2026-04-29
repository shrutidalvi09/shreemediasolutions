import React from 'react';
import BlogHero from '../components/sections/BlogHero';
import BlogGrid from '../components/sections/BlogGrid';
import Newsletter from '../components/sections/Newsletter';

const Blog = () => {
  return (
    <main className="bg-white min-h-screen">
      
      {/* 1. HERO SECTION */}
      <BlogHero />
      
      {/* 2. ARTICLES GRID & FILTERS */}
      <BlogGrid />

      {/* 3. NEWSLETTER / FINAL CTA */}
      <Newsletter />
    </main>
  );
};

export default Blog;