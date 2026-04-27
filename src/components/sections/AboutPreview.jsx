import React from 'react';
import { motion } from 'framer-motion';

// 1. ASSET IMPORTS - Ensure these filenames exist exactly in src/assets/
import qualityGif from '../../assets/quality.gif'; 
import truckGif from '../../assets/truck.gif'; 
import supportGif from '../../assets/support.gif'; 
import imgLarge from '../../assets/image_large.jpg'; 
import imgSmall from '../../assets/image_small.jpg';

export default function AboutPreview() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-8 md:px-20">
        
        {/* --- SECTION HEADING --- */}
        <div className="text-center mb-16">
           <h2 className="text-4xl font-bold text-slate-900">Our Services</h2>
        </div>

        {/* --- SERVICE CARDS (Matches image_948880.jpg style) --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          <FeatureItem 
            icon={qualityGif}
            title="Top Quality Print"
            desc="Experience unmatched precision and vibrant results."
          />
          
          <FeatureItem 
            icon={truckGif}
            title="On-Time Delivery"
            desc="We respect our commitment and fulfil all your orders on time."
          />
          
          <FeatureItem 
            icon={supportGif}
            title="Exceptional Support"
            desc="Best in industry support for our customers."
          />
        </div>

        {/* --- BOTTOM COMPOSITION --- */}
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Overlapping Image Logic */}
          <div className="lg:w-1/2 relative">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <img 
                src={imgLarge} 
                alt="Main" 
                className="rounded-xl shadow-2xl w-[88%] border border-slate-100"
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="absolute -bottom-8 right-4 z-20 w-[52%]"
            >
              <img 
                src={imgSmall} 
                alt="Secondary" 
                className="rounded-xl shadow-2xl border-[12px] border-white"
              />
            </motion.div>
          </div>

          {/* Business Content */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f0f4ff] mb-8">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                <span className="text-[10px] font-bold text-blue-600 uppercase tracking-[0.15em]">
                  Creative Approach
                </span>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-bold text-slate-900 leading-[1.1] tracking-tight mb-8">
                Powerful agency for <br /> 
                <span className="text-slate-400">corporate business.</span>
              </h2>
              
              <p className="text-slate-500 text-lg mb-12 leading-relaxed font-light max-w-lg">
                We strive to develop real-world web solutions that are ideal for small to large projects with bespoke requirements.
              </p>

              {/* Progress Pills */}
              <div className="flex flex-col gap-4 max-w-md">
                <ProgressBar label="Business Growth" targetWidth="98%" color="from-[#ff5e57] to-[#ffaf40]" />
                <ProgressBar label="New Technology" targetWidth="85%" color="from-[#2980b9] to-[#6dd5fa]" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureItem({ icon, title, desc }) {
  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className="flex flex-col items-center text-center p-12 bg-[#f8fbff] rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 group"
    >
      <div className="mb-8 flex items-center justify-center w-24 h-24 rounded-full bg-white shadow-xl group-hover:scale-110 transition-transform duration-500 border border-orange-50">
        <img src={icon} alt={title} className="w-12 h-12 object-contain" />
      </div>
      <h4 className="text-[22px] font-bold text-[#232323] mb-4">{title}</h4>
      <p className="text-[15px] text-slate-500 leading-relaxed px-4">{desc}</p>
    </motion.div>
  );
}

function ProgressBar({ label, targetWidth, color }) {
  return (
    <div className="relative w-full h-9 bg-slate-100 rounded-full overflow-hidden">
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: targetWidth }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "circOut" }}
        className={`absolute inset-y-0 left-0 bg-gradient-to-r ${color} flex items-center justify-between px-6`}
      >
        <span className="text-[10px] font-black text-white uppercase tracking-widest">{label}</span>
        <span className="text-xs font-bold text-white">{targetWidth}</span>
      </motion.div>
    </div>
  );
}