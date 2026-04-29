import React from 'react';
import { motion } from 'framer-motion';

const BlogHero = () => {
  return (
    <section className="relative pt-32 pb-48 bg-white overflow-hidden">
      {/* BACKGROUND PARTICLES (Brand Accent Colors) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div 
          animate={{ y: [0, -20, 0], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-[20%] left-[10%] w-4 h-4 bg-blue-500 rounded-full blur-sm" 
        />
        <motion.div 
          animate={{ y: [0, 25, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          className="absolute top-[40%] right-[15%] w-6 h-6 bg-rose-500 rounded-full blur-sm" 
        />
        <motion.div 
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute top-[15%] right-[25%] w-3 h-3 bg-emerald-400 rounded-full" 
        />
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-5xl mx-auto"
        >
          {/* CATEGORY TAG */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-100 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
              Insights & Updates
            </span>
          </div>

          {/* AVANT-GARDE TYPOGRAPHY */}
          <h1 className="text-7xl md:text-[7.5rem] font-black text-slate-900 leading-[0.85] tracking-tighter mb-10">
            Our <br /> 
            <span className="text-blue-600">Journal</span>
          </h1>

          {/* BREADCRUMB STYLE */}
          <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.5em] flex items-center justify-center gap-4">
            <span>Home</span>
            <span className="w-10 h-[1px] bg-slate-200"></span>
            <span className="text-slate-900">Blog</span>
          </p>
        </motion.div>
      </div>

      {/* THE BLUE WAVE (Ref: Services style) */}
      <div className="absolute bottom-0 left-0 w-full h-[220px] z-10">
        <svg 
          viewBox="0 0 1440 300" 
          preserveAspectRatio="none" 
          className="w-full h-full"
        >
          <motion.path 
            initial={{ d: "M0,150 C400,250 1000,50 1440,150 L1440,300 L0,300 Z" }}
            animate={{ d: "M0,120 C450,280 950,20 1440,120 L1440,300 L0,300 Z" }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
            fill="#3b82f6" 
          />
        </svg>
      </div>
    </section>
  );
};

export default BlogHero;