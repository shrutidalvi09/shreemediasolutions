import React from 'react';
import { motion } from 'framer-motion';

export default function ServicesHero() {
  return (
    <section className="relative pt-32 pb-48 bg-white overflow-hidden">
      <div className="container mx-auto px-6 relative z-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-7xl md:text-[6.5rem] font-black text-slate-900 leading-[0.9] tracking-tighter mb-8">
            Services
          </h1>
          <p className="text-slate-500 text-sm font-bold uppercase tracking-[0.4em]">Home • Services</p>
        </motion.div>
      </div>

      {/* Blue Wave with Brand Particles */}
      <div className="absolute bottom-0 left-0 w-full h-[300px] z-10">
        <svg viewBox="0 0 1440 300" fill="none" className="w-full h-full preserve-3d">
          <path d="M0,100 C400,200 1000,0 1440,100 L1440,300 L0,300 Z" fill="#3b82f6" />
        </svg>
        {/* Particles (Ref: image_23cbfa.png) */}
        <div className="absolute top-0 left-[10%] w-3 h-3 bg-green-400 rounded-full" />
        <div className="absolute top-20 left-[20%] w-5 h-5 bg-pink-500 rounded-full" />
        <div className="absolute top-10 right-[15%] w-3 h-3 bg-yellow-400 rounded-full" />
      </div>
    </section>
  );
}