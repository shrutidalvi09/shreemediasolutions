import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Calendar } from 'lucide-react';

// --- ASSET IMPORTS ---
// Ensuring paths match your project structure (src/assets)
import imgStudio from '../../assets/designer-studio.jpg';
import imgFlyer from '../../assets/flyer.webp';
import imgDigital from '../../assets/Digital Marketing.jpg';
import imgBPO from '../../assets/BPO Services.jpg';
import imgOutdoor from '../../assets/outdoor.jpg';
import imgBusiness from '../../assets/businesscard.jpg';

const categories = ["All", "Printing", "Design", "Marketing", "Business"];

const posts = [
  {
    id: 1,
    category: "Design",
    title: "The Power of High-Quality Print in Branding",
    excerpt: "Discover why physical marketing assets still outperform digital in high-end hospitality and luxury sectors.",
    date: "April 28, 2026",
    image: imgStudio
  },
  {
    id: 2,
    category: "Marketing",
    title: "5 Tips for Effective Event Poster Design",
    excerpt: "Learn how to capture attention in crowded spaces using visual hierarchy, bold typography, and color theory.",
    date: "April 25, 2026",
    image: imgFlyer
  },
  {
    id: 3,
    category: "Business",
    title: "Scaling Your Brand with Professional BPO",
    excerpt: "Explore how outsourcing documentation and media production can streamline your core business operations.",
    date: "April 20, 2026",
    image: imgBPO
  },
  {
    id: 4,
    category: "Marketing",
    title: "Digital vs. Physical: Finding the Sweet Spot",
    excerpt: "A guide to combining digital reach with the tactile trust that only high-quality printed media can provide.",
    date: "April 18, 2026",
    image: imgDigital
  },
  {
    id: 5,
    category: "Printing",
    title: "Outdoor Advertising: Making a Massive Impact",
    excerpt: "Technical deep-dive into large-format vinyl printing and the durability of modern outdoor banner materials.",
    date: "April 15, 2026",
    image: imgOutdoor
  },
  {
    id: 6,
    category: "Business",
    title: "The Executive Card: More Than Contact Info",
    excerpt: "How premium finishes like spot UV and glassmorphism design trends are redefining corporate identity.",
    date: "April 12, 2026",
    image: imgBusiness
  }
];

export default function BlogGrid() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredPosts = activeFilter === "All" 
    ? posts 
    : posts.filter(post => post.category === activeFilter);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        
        {/* Category Filter Bar */}
        <div className="flex flex-wrap gap-3 mb-20 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 ${
                activeFilter === cat 
                ? "bg-blue-600 text-white shadow-xl shadow-blue-200" 
                : "bg-slate-50 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Dynamic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
          <AnimatePresence mode='popLayout'>
            {filteredPosts.map((post) => (
              <motion.article 
                layout
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                whileHover={{ y: -12 }}
                transition={{ duration: 0.4, ease: "circOut" }}
                className="group cursor-pointer"
              >
                {/* Image Container with Glassmorphism Label */}
                <div className="relative aspect-[16/11] overflow-hidden rounded-[2.5rem] bg-slate-100 mb-8 shadow-sm">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute top-6 left-6 px-4 py-2 bg-white/80 backdrop-blur-md rounded-full text-[9px] font-black uppercase tracking-widest text-blue-600 border border-white/20 shadow-sm">
                    {post.category}
                  </div>
                </div>
                
                {/* Meta & Title */}
                <div className="px-2">
                  <div className="flex items-center gap-2 text-slate-400 mb-4">
                    <Calendar size={14} strokeWidth={2.5} />
                    <span className="text-[10px] font-bold uppercase tracking-widest">{post.date}</span>
                  </div>
                  
                  <h3 className="text-2xl font-black text-slate-900 leading-tight mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {post.title}
                  </h3>
                  
                  <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-2 font-medium">
                    {post.excerpt}
                  </p>

                  {/* Read More Link */}
                  <div className="flex items-center gap-2 text-blue-600 font-black text-[11px] uppercase tracking-wider group-hover:gap-4 transition-all">
                    Read Story <ArrowUpRight size={18} strokeWidth={3} />
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State Logic */}
        {filteredPosts.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="text-center py-20"
          >
            <p className="text-slate-400 font-bold uppercase tracking-widest">
              No articles found in {activeFilter}.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}