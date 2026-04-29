import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

// 1. ASSET IMPORTS (Ensure these paths match your project structure)
import qualityGif from '../../assets/quality.gif'; 
import truckGif from '../../assets/truck.gif'; 
import supportGif from '../../assets/support.gif'; 

import slide1 from '../../assets/banner1.jpg';
import slide2 from '../../assets/flyer1.jpg';
import slide3 from '../../assets/outdoor.jpg';
import slide4 from '../../assets/poster1.jpg';
import slide5 from '../../assets/poster.jpg';
import slide6 from '../../assets/promotional.jpg';
import slide7 from '../../assets/standy.avif';
import slide8 from '../../assets/weeding.jpg';
import slide9 from '../../assets/certificate.jpg';
import slide10 from '../../assets/businesscard.jpg';
import slide11 from '../../assets/flyer.webp';

const slides = [
  { img: slide1, label: "Wide Format Banners" },
  { img: slide2, label: "Premium Flyers" },
  { img: slide3, label: "Outdoor Advertising" },
  { img: slide4, label: "Event Posters" },
  { img: slide5, label: "Studio Prints" },
  { img: slide6, label: "Promotional Media" },
  { img: slide7, label: "Custom Standees" },
  { img: slide8, label: "Wedding Stationery" },
  { img: slide9, label: "Official Certificates" },
  { img: slide10, label: "Business Branding" },
  { img: slide11, label: "Creative Portfolio" },
];

export default function AboutPreview() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-32 bg-[#fcfcfd] overflow-hidden selection:bg-indigo-100 selection:text-indigo-600">
      
      {/* BACKGROUND AMBIENCE */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div 
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-40 right-1/4 w-[600px] h-[600px] bg-indigo-50/60 rounded-full blur-[140px]" 
        />
        <div className="absolute bottom-20 left-10 w-[400px] h-[400px] bg-purple-50/50 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        
        {/* --- SECTION HEADER --- */}
        <div className="max-w-5xl mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="h-[1px] w-12 bg-indigo-500" />
            <span className="text-indigo-600 font-black tracking-[0.3em] text-[10px] uppercase">
              The Shree Media Standard
            </span>
          </motion.div>
          
          <div className="overflow-hidden">
            <motion.h2 
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
              className="text-5xl md:text-[5rem] font-black text-slate-900 leading-[1.1] tracking-tighter"
            >
              We craft <span className="italic font-light text-slate-400 underline decoration-indigo-500/20 underline-offset-8">physical assets</span> <br /> 
              that define your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500">brand legacy.</span>
            </motion.h2>
          </div>
        </div>

        {/* --- FEATURE GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-40">
          <FeatureItem 
            icon={qualityGif} 
            title="Bespoke Quality" 
            desc="Meticulous attention to every fiber and pixel." 
            delay={0.1} 
          />
          <FeatureItem 
            icon={truckGif} 
            title="Rapid Delivery" 
            desc="Global logistics powered by local precision." 
            delay={0.2} 
          />
          <FeatureItem 
            icon={supportGif} 
            title="Design Logic" 
            desc="Strategic consulting for modern visual brands." 
            delay={0.3} 
          />
        </div>

        {/* --- SHOWCASE & STATS --- */}
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          
          {/* Slideshow with Studio-Style Frame */}
          <div className="lg:w-3/5 w-full relative">
            <div className="relative aspect-[16/10] rounded-[3rem] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)] bg-white border-[8px] border-white">
              <AnimatePresence mode="wait">
                <motion.img
                  key={index}
                  src={slides[index].img}
                  initial={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                  transition={{ duration: 0.8, ease: "circOut" }}
                  className="absolute inset-0 w-full h-full object-cover rounded-[1.5rem]"
                  alt="Portfolio Showcase"
                />
              </AnimatePresence>

              {/* Floating Glass Tag */}
              <motion.div 
                key={`label-${index}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="absolute top-8 left-8 bg-white/70 backdrop-blur-xl px-6 py-3 rounded-2xl shadow-xl border border-white/50 z-20"
              >
                <p className="text-[9px] font-black uppercase tracking-widest text-indigo-600 mb-0.5">Category</p>
                <p className="text-sm font-bold text-slate-800">{slides[index].label}</p>
              </motion.div>

              {/* Progress Dots */}
              <div className="absolute bottom-8 right-8 flex gap-3 z-20">
                {slides.map((_, i) => (
                  <button 
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`h-1.5 rounded-full transition-all duration-500 ${i === index ? "w-10 bg-indigo-600" : "w-2 bg-slate-900/10 hover:bg-slate-900/30"}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Text Content & Stats */}
          <div className="lg:w-2/5 space-y-12">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h3 className="text-4xl font-black text-slate-900 tracking-tight leading-tight">
                High-fidelity results <br /> 
                for <span className="text-indigo-600">high-impact</span> brands.
              </h3>
              <p className="text-slate-500 text-xl leading-relaxed font-medium">
                Our workshop is a sanctuary for quality. We bridge the gap between digital concepts and tangible masterpieces.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-8 border-t border-slate-100 pt-10">
              <StatBox count="99%" label="Accuracy" />
              <StatBox count="15k+" label="Deliveries" />
            </div>

            <button className="group flex items-center gap-4 bg-slate-950 text-white px-10 py-5 rounded-full font-bold hover:bg-indigo-600 transition-all duration-500 shadow-2xl shadow-indigo-100">
              Explore Products
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// Sub-component for Features
function FeatureItem({ icon, title, desc, delay }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      whileHover={{ y: -10 }}
      className="p-12 bg-white rounded-[2.5rem] border border-slate-100 shadow-[0_15px_40px_rgba(0,0,0,0.02)] hover:shadow-[0_40px_80px_rgba(99,102,241,0.08)] transition-all duration-700 relative overflow-hidden group"
    >
      <div className="relative z-10">
        <div className="mb-10 w-20 h-20 rounded-3xl bg-slate-50 flex items-center justify-center group-hover:bg-indigo-600 group-hover:rotate-[10deg] transition-all duration-500 shadow-inner">
          <img src={icon} alt={title} className="w-10 h-10 object-contain group-hover:brightness-0 group-hover:invert transition-all duration-500" />
        </div>
        <h4 className="text-2xl font-black text-slate-800 mb-4 tracking-tight">{title}</h4>
        <p className="text-slate-400 text-base leading-relaxed font-medium">{desc}</p>
      </div>
      <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-indigo-50 rounded-full group-hover:scale-[3] transition-transform duration-1000 -z-0" />
    </motion.div>
  );
}

// Sub-component for Stats
function StatBox({ count, label }) {
  return (
    <div className="space-y-1">
      <p className="text-4xl font-black text-slate-900 tracking-tighter">{count}</p>
      <p className="text-[10px] font-black text-indigo-500 uppercase tracking-widest">{label}</p>
    </div>
  );
}