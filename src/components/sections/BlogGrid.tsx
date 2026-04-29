import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Calendar, X, Clock, User, Hash } from 'lucide-react';

// --- ASSET IMPORTS ---
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
    fullStory: "In an increasingly digital world, the tactile nature of print provides a sense of permanence and prestige that screens cannot replicate. For high-end luxury brands, the weight of a business card or the texture of a brochure serves as a silent ambassador for quality. This article explores how premium materials and advanced printing techniques like letterpress and foil stamping create an emotional connection with the consumer.",
    specifications: ["Technique: Letterpress", "Paper: 600gsm Cotton", "Finish: Gold Foil"],
    author: "Design Lead",
    readTime: "5 min",
    date: "April 28, 2026",
    image: imgStudio
  },
  {
    id: 2,
    category: "Marketing",
    title: "5 Tips for Effective Event Poster Design",
    excerpt: "Learn how to capture attention in crowded spaces using visual hierarchy, bold typography, and color theory.",
    fullStory: "Event posters must communicate vital information in a matter of seconds. By utilizing a strong focal point and high-contrast color palettes, designers can guide the viewer's eye through the 'Z-pattern' of reading. We break down the mathematics of typography scale and the psychology of color used in world-class event promotions.",
    specifications: ["Grid: Baseline", "Style: Swiss Design", "Contrast: High"],
    author: "Marketing Strategist",
    readTime: "4 min",
    date: "April 25, 2026",
    image: imgFlyer
  },
  {
    id: 3,
    category: "Business",
    title: "Scaling Your Brand with Professional BPO",
    excerpt: "Explore how outsourcing documentation and media production can streamline your core business operations.",
    fullStory: "Business Process Outsourcing (BPO) is no longer just for call centers. Modern BPO services handle high-level documentation, media production, and logistical data. By offloading these time-intensive tasks, your core team can focus on innovation and strategy, significantly reducing operational overhead while maintaining professional standards.",
    specifications: ["Scalability: 100%", "Security: ISO 27001", "Delivery: 24/7"],
    author: "Operations Specialist",
    readTime: "6 min",
    date: "April 20, 2026",
    image: imgBPO
  },
  {
    id: 4,
    category: "Marketing",
    title: "Digital vs. Physical: Finding the Sweet Spot",
    excerpt: "A guide to combining digital reach with the tactile trust that only high-quality printed media can provide.",
    fullStory: "The most successful modern campaigns are omnichannel. This guide demonstrates how to use QR codes and AR (Augmented Reality) triggers on printed flyers to bridge the gap between physical and digital storefronts. Trust is built in the hand, but sales are scaled in the cloud.",
    specifications: ["Approach: Hybrid", "Integration: QR/NFC", "Success Rate: +40%"],
    author: "Digital Architect",
    readTime: "5 min",
    date: "April 18, 2026",
    image: imgDigital
  },
  {
    id: 5,
    category: "Printing",
    title: "Outdoor Advertising: Making a Massive Impact",
    excerpt: "Technical deep-dive into large-format vinyl printing and the durability of modern outdoor banner materials.",
    fullStory: "Large format printing requires a deep understanding of PPI (Pixels Per Inch) and substrate durability. We analyze the UV-resistant inks and mesh vinyl materials needed to withstand extreme weather conditions while maintaining vibrant, head-turning color accuracy for years.",
    specifications: ["Format: Large (Flex)", "Ink: UV-Resistant", "Durability: 5 Years"],
    author: "Print Expert",
    readTime: "7 min",
    date: "April 15, 2026",
    image: imgOutdoor
  },
  {
    id: 6,
    category: "Business",
    title: "The Executive Card: More Than Contact Info",
    excerpt: "How premium finishes like spot UV and glassmorphism design trends are redefining corporate identity.",
    fullStory: "The modern business card is a networking tool. Using spot UV to highlight specific design elements and incorporating 'glassmorphism'—the look of frosted glass—into card design creates a high-tech, futuristic impression that makes your brand unforgettable during introductions.",
    specifications: ["Finish: Spot UV", "Trend: Glassmorphism", "Impact: High"],
    author: "Brand Consultant",
    readTime: "3 min",
    date: "April 12, 2026",
    image: imgBusiness
  }
];

export default function BlogGrid() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedPost, setSelectedPost] = useState(null);

  const filteredPosts = activeFilter === "All" 
    ? posts 
    : posts.filter(post => post.category === activeFilter);

  return (
    <section className="py-24 bg-white relative">
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
                onClick={() => setSelectedPost(post)}
                className="group cursor-pointer"
              >
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

                  <div className="flex items-center gap-2 text-blue-600 font-black text-[11px] uppercase tracking-wider group-hover:gap-4 transition-all">
                    Read Story <ArrowUpRight size={18} strokeWidth={3} />
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* --- ARTICLE POPUP MODAL --- */}
        <AnimatePresence>
          {selectedPost && (
            <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 md:p-8">
              {/* Backdrop */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedPost(null)}
                className="absolute inset-0 bg-slate-900/80 backdrop-blur-xl"
              />

              {/* Modal Content */}
              <motion.div 
                initial={{ scale: 0.9, opacity: 0, y: 30 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 30 }}
                className="relative bg-white w-full max-w-5xl max-h-[90vh] rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row"
              >
                {/* Close Button */}
                <button 
                  onClick={() => setSelectedPost(null)}
                  className="absolute top-6 right-6 z-20 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform text-slate-900"
                >
                  <X size={24} />
                </button>

                {/* Left: Visual Sidebar */}
                <div className="md:w-2/5 h-64 md:h-auto relative overflow-hidden bg-slate-100">
                  <img 
                    src={selectedPost.image} 
                    alt={selectedPost.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                </div>

                {/* Right: Story Content */}
                <div className="md:w-3/5 p-8 md:p-14 overflow-y-auto custom-scrollbar">
                  <div className="flex flex-wrap items-center gap-6 mb-8 text-slate-400">
                    <div className="flex items-center gap-2">
                      <Clock size={16} />
                      <span className="text-[10px] font-black uppercase tracking-widest">{selectedPost.readTime} Read</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User size={16} />
                      <span className="text-[10px] font-black uppercase tracking-widest">By {selectedPost.author}</span>
                    </div>
                  </div>

                  <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight mb-8">
                    {selectedPost.title}
                  </h2>

                  <div className="space-y-8">
                    <div>
                      <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-blue-600 mb-4">The Story</h4>
                      <p className="text-slate-600 text-lg leading-relaxed font-medium">
                        {selectedPost.fullStory}
                      </p>
                    </div>

                    {/* Specifications Section */}
                    <div className="pt-8 border-t border-slate-100">
                      <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-blue-600 mb-6">Technical Specifications</h4>
                      <div className="grid grid-cols-2 gap-4">
                        {selectedPost.specifications.map((spec, index) => (
                          <div key={index} className="flex items-center gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                            <Hash size={14} className="text-blue-600" />
                            <span className="text-xs font-black text-slate-700 uppercase tracking-wider">{spec}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-12">
                    <button 
                      onClick={() => setSelectedPost(null)}
                      className="px-10 py-5 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 transition-colors shadow-lg shadow-slate-200"
                    >
                      Close Article
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
            <p className="text-slate-400 font-bold uppercase tracking-widest">No articles found in {activeFilter}.</p>
          </motion.div>
        )}
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #f1f1f1; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #94a3b8; }
      `}</style>
    </section>
  );
}