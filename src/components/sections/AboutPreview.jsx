import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ASSET IMPORTS
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
    <section className="relative py-32 bg-[#FFFFFF] overflow-hidden selection:bg-orange-100 selection:text-orange-600">
      {/* Dynamic Background Elements */}
      <motion.div 
        animate={{ 
          x: [0, 30, 0], 
          y: [0, -20, 0] 
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[120px] -z-10" 
      />

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        
        {/* --- ENHANCED HEADER --- */}
        <div className="max-w-5xl mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="h-[2px] w-12 bg-orange-500" />
            <span className="text-orange-600 font-bold tracking-[0.3em] text-[10px] uppercase">
              The Shree Media Experience
            </span>
          </motion.div>
          
          <div className="overflow-hidden">
            <motion.h2 
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
              className="text-6xl md:text-[5.5rem] font-medium text-slate-900 leading-[0.95] tracking-tighter"
            >
              We craft <span className="font-bold">physical assets</span> <br /> 
              that define <span className="italic text-slate-300 font-light underline decoration-orange-500/30 underline-offset-8">your legacy.</span>
            </motion.h2>
          </div>
        </div>

        {/* --- INTERACTIVE CARDS --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-40">
          <FeatureItem icon={qualityGif} title="Bespoke Quality" desc="Meticulous attention to every fiber and pixel." delay={0.1} />
          <FeatureItem icon={truckGif} title="Rapid Delivery" desc="Global logistics powered by local precision." delay={0.2} />
          <FeatureItem icon={supportGif} title="Design Logic" desc="Strategic consulting for modern visual brands." delay={0.3} />
        </div>

        {/* --- DYNAMIC SLIDESHOW WITH CONTEXT --- */}
        <div className="flex flex-col lg:flex-row gap-24 items-center">
          
          <div className="lg:w-3/5 w-full relative group">
            {/* The Main Container */}
            <div className="relative aspect-[16/10] rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] bg-slate-50 border border-slate-100">
              <AnimatePresence mode="wait">
                <motion.img
                  key={index}
                  src={slides[index].img}
                  initial={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                  transition={{ duration: 1, ease: "circOut" }}
                  className="absolute inset-0 w-full h-full object-cover"
                  alt="Portfolio Showcase"
                />
              </AnimatePresence>

              {/* Floating Slide Label */}
              <motion.div 
                key={`label-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-8 left-8 bg-white/80 backdrop-blur-md px-6 py-3 rounded-full shadow-sm border border-white/50 z-20"
              >
                <p className="text-[10px] font-black uppercase tracking-widest text-orange-600 mb-0.5">Current Category</p>
                <p className="text-sm font-bold text-slate-800">{slides[index].label}</p>
              </motion.div>

              {/* Custom Navigation dots */}
              <div className="absolute bottom-8 right-8 flex gap-3 z-20">
                {slides.map((_, i) => (
                  <button 
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`h-1.5 rounded-full transition-all duration-500 ${i === index ? "w-10 bg-white" : "w-2 bg-white/30 hover:bg-white/60"}`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="lg:w-2/5 space-y-12">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h3 className="text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                High-fidelity results <br /> 
                for <span className="text-orange-500">high-impact</span> brands.
              </h3>
              <p className="text-slate-500 text-xl leading-relaxed font-light">
                Our workshop is a sanctuary for quality. We bridge the gap between digital concepts and tangible masterpieces using high-grade materials.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-8">
              <StatBox count="99%" label="Accuracy" />
              <StatBox count="15k+" label="Deliveries" />
            </div>

            <button className="group flex items-center gap-4 bg-slate-900 text-white px-8 py-5 rounded-2xl font-bold hover:bg-orange-600 transition-all duration-500 shadow-xl shadow-slate-200">
              Explore Our Portfolio
              <span className="w-8 h-[1px] bg-white group-hover:w-12 transition-all duration-500" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureItem({ icon, title, desc, delay }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      whileHover={{ y: -15 }}
      className="p-12 bg-white rounded-[3rem] border border-slate-100 shadow-[0_15px_40px_rgba(0,0,0,0.02)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] transition-all duration-700 relative overflow-hidden group"
    >
      <div className="relative z-10">
        <div className="mb-10 w-20 h-20 rounded-3xl bg-slate-50 flex items-center justify-center group-hover:bg-orange-500 group-hover:rotate-[10deg] transition-all duration-500 shadow-inner">
          <img src={icon} alt={title} className="w-10 h-10 object-contain group-hover:brightness-0 group-hover:invert transition-all duration-500" />
        </div>
        <h4 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">{title}</h4>
        <p className="text-slate-400 text-base leading-relaxed font-light">{desc}</p>
      </div>
      {/* Subtle Background Accent on hover */}
      <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-orange-50 rounded-full group-hover:scale-[3] transition-transform duration-1000 -z-0" />
    </motion.div>
  );
}

function StatBox({ count, label }) {
  return (
    <div className="border-l-2 border-slate-100 pl-6 space-y-1">
      <p className="text-3xl font-black text-slate-900">{count}</p>
      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{label}</p>
    </div>
  );
}