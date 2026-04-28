import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, Zap, ShoppingBag, Star } from 'lucide-react';

// --- ASSET IMPORTS ---
// Replace these with your actual local paths
import standy from '../../assets/standy.avif';
import letterhead from '../../assets/letterhead.jpg';
import flyer from '../../assets/flyer.webp';
import banner from '../../assets/banner1.jpg';
import idCard from '../../assets/idcard.webp'; 
import stamps from '../../assets/stamp.webp';
import certificate from '../../assets/certificate.jpg';
import businesscard from '../../assets/businesscard.jpg';

// --- DATA CONFIGURATION ---
const categories = [
  { title: "Standy", img: standy },
  { title: "Letterhead", img: letterhead },
  { title: "Flyer", img: flyer },
  { title: "Banner", img: banner },
  { title: "ID Card", img: idCard },
  { title: "Stamps", img: stamps },
];

const topSellers = [
  { id: 1, title: "Letterhead 100gsm", price: "₹900", tag: "Featured", img: letterhead, rating: 4.8 },
  { id: 2, title: "Basic Business Card", price: "₹500", tag: "Featured", img: businesscard, rating: 5.0 },
  { id: 3, title: "Rubber Stamps", price: "₹350", tag: "Popular", img: stamps, rating: 4.7 },
  { id: 4, title: "PVC ID Cards", price: "₹150", tag: "New", img: idCard, rating: 4.9 },
  { id: 5, title: "Premium Standy", price: "₹1,200", tag: "Popular", img: standy, rating: 4.6 },
  { id: 6, title: "Award Certificate", price: "₹250", tag: "Featured", img: certificate, rating: 5.0 },
];

export default function PrintingMarketplace() {
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - 450 : scrollLeft + 450;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-[#F9FBFF] overflow-hidden selection:bg-blue-100 selection:text-blue-600">
      <div className="container mx-auto px-6 lg:px-20">
        
        {/* --- SECTION 1: PRINTING CATEGORIES (Circular Icons) --- */}
        <div className="mb-24">
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-blue-600 rounded-xl text-white shadow-lg shadow-blue-200">
                <Zap size={20} fill="currentColor" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 tracking-tight">Printing Categories</h3>
            </div>
            <button className="text-sm font-bold text-blue-600 hover:underline underline-offset-4">View All</button>
          </div>
          
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
            {categories.map((cat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="flex flex-col items-center gap-4 cursor-pointer group"
              >
                <div className="relative w-24 h-24 md:w-28 md:h-28">
                  <div className="absolute inset-0 bg-blue-600 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 opacity-10" />
                  <div className="w-full h-full rounded-full bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 overflow-hidden p-3 transition-all duration-300 group-hover:border-blue-200 group-hover:shadow-blue-100">
                    <img src={cat.img} alt={cat.title} className="w-full h-full object-contain rounded-full" />
                  </div>
                </div>
                <span className="text-sm font-bold text-slate-600 group-hover:text-blue-600 transition-colors">
                  {cat.title}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- SECTION 2: TOP SELLING PRINTS (Carousel Grid) --- */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-4 text-orange-500">
              <ShoppingBag size={18} />
              <span className="text-xs font-black uppercase tracking-[0.2em]">Our Store</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Top Selling <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Prints.</span>
            </h2>
          </div>

          {/* Custom Nav Arrows */}
          <div className="flex gap-3">
            <button 
              onClick={() => scroll('left')}
              className="w-14 h-14 rounded-2xl border border-slate-200 bg-white flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-100 hover:shadow-xl transition-all active:scale-90"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-14 h-14 rounded-2xl border border-slate-200 bg-white flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-100 hover:shadow-xl transition-all active:scale-90"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Scrollable Container */}
        <div 
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto no-scrollbar pb-10 snap-x snap-mandatory scroll-smooth"
        >
          {topSellers.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              className="min-w-[300px] md:min-w-[350px] snap-start group bg-white rounded-[2.5rem] border border-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.02)] hover:shadow-[0_30px_70px_rgba(0,0,0,0.07)] transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] m-4 overflow-hidden rounded-[2rem] bg-slate-50">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                
                {/* Dynamic Label Badge */}
                <div className="absolute top-5 left-5 px-4 py-1.5 bg-slate-900/90 backdrop-blur-md rounded-full border border-white/10">
                  <span className="text-[10px] font-black text-white uppercase tracking-widest">{item.tag}</span>
                </div>

                {/* Rating Overlay */}
                <div className="absolute bottom-5 left-5 px-3 py-1 bg-white/90 backdrop-blur-md rounded-lg flex items-center gap-1.5 shadow-sm">
                  <Star size={12} className="text-orange-500 fill-orange-500" />
                  <span className="text-xs font-bold text-slate-800">{item.rating}</span>
                </div>
              </div>

              {/* Content Container */}
              <div className="px-8 pb-8 pt-2">
                <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h4>
                
                <div className="flex justify-between items-center mt-6">
                  <div className="space-y-0.5">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Starts at</p>
                    <p className="text-2xl font-black text-slate-900">{item.price}</p>
                  </div>
                  
                  <motion.button 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => navigate('/services')}
                    className="w-14 h-14 rounded-2xl bg-slate-900 text-white flex items-center justify-center group-hover:bg-blue-600 transition-all duration-300 shadow-lg shadow-slate-200"
                  >
                    <ArrowRight size={22} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}