import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

/**
 * Hero Component - Shree Media Solution
 * * NOTE: Ensure your 'flyer.webp' is located exactly at:
 * src/assets/flyer.webp
 * * If you still get a "Failed to resolve import" error, 
 * change the import path to '../../assets/flyer1.webp' 
 * depending on your folder depth.
 */
import apparelImage from '../../assets/poster1.jpg'; 

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-white overflow-hidden flex items-center pt-20 selection:bg-purple-100">
      
      {/* --- 1. BACKGROUND WAVES BASE --- */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg 
          className="absolute bottom-0 w-full h-[400px] md:h-[500px]" 
          viewBox="0 0 1440 600" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          {/* Background Soft Blue Wave */}
          <path 
            d="M0 400C300 300 600 500 1000 400C1200 350 1400 450 1500 400V600H0V400Z" 
            fill="#3B82F6" 
            className="opacity-10"
          />
          {/* Main Solid Blue Wave */}
          <path 
            d="M0 450C300 350 600 550 1000 450C1200 400 1400 500 1500 450V600H0V450Z" 
            fill="#3B82F6" 
          />
          {/* Gold Accent Line */}
          <path 
            d="M0 460C300 360 600 560 1000 460C1200 410 1400 510 1500 460" 
            stroke="#D4AF37" 
            strokeWidth="3" 
            fill="none"
            className="opacity-40"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-20 items-center">
        
        {/* --- 2. LEFT CONTENT: TYPOGRAPHY --- */}
        <div className="space-y-10 text-left">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-5"
          >
            <h1 className="text-5xl md:text-7xl font-black text-[#1a1a2e] leading-[0.95] tracking-tighter">
              Physical <br />
              <span className="text-[#1a1a2e]">Craftsmanship</span> <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] via-[#a855f7] to-[#f472b6]">
                & Media Experience
              </span>
            </h1>
            
            <p className="text-slate-500 text-base max-w-sm leading-relaxed font-medium">
              We merge high-precision engineering with expert design to bridge the gap between digital concepts and tactile impact.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <button className="group relative px-10 py-5 bg-[#7C3AED] hover:bg-[#6D28D9] text-white rounded-full font-bold text-sm shadow-xl shadow-purple-200 transition-all flex items-center gap-3 active:scale-95">
              Explore Our Portfolio
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
              <div className="absolute inset-0 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </motion.div>
        </div>

        {/* --- 3. RIGHT CONTENT: THE IMAGE & TAPE ARCHITECTURE --- */}
        <div className="relative flex justify-center lg:justify-end pr-10">
          
          {/* Main Flyer Image Container */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 w-[300px] md:w-[450px] aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white bg-slate-100"
          >
            <img 
              src={apparelImage} 
              alt="Physical Craftsmanship Flyer" 
              className="w-full h-full object-cover" 
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80"; // Fallback if local image fails
              }}
            />
          </motion.div>

          {/* Rotating Quality Badge */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -top-10 -right-5 md:-right-10 z-20 w-32 h-32 md:w-40 md:h-40 bg-white rounded-full p-2 shadow-2xl flex items-center justify-center border border-slate-100"
          >
            <div className="w-full h-full rounded-full bg-blue-50 flex flex-col items-center justify-center relative overflow-hidden">
               <Sparkles className="text-purple-600 mb-1" size={32} />
               <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                 <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-slow">
                   <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                   <text className="text-[8px] font-black uppercase fill-blue-900 tracking-[0.2em]">
                     <textPath xlinkHref="#circlePath">
                       Quality Delivered • Professional Craft •
                     </textPath>
                   </text>
                 </svg>
               </div>
            </div>
          </motion.div>

          {/* THE CURVED TAPE ROLL OVERLAY (Marquee) */}
          <motion.div 
            initial={{ opacity: 0, rotate: 10, y: 100 }}
            animate={{ opacity: 1, rotate: -8, y: 0 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 45 }}
            className="absolute -bottom-10 -left-10 md:-left-20 z-30 w-[450px] md:w-[650px] h-28 md:h-32 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-tr-[80px] rounded-bl-[80px] flex items-center overflow-hidden border-b-[10px] border-slate-50/50"
            style={{ perspective: "1000px" }}
          >
            <div className="flex gap-16 whitespace-nowrap px-10 animate-marquee">
              {[1, 2, 3, 4].map((_, i) => (
                <span key={i} className="text-xl md:text-2xl font-black text-slate-900 italic uppercase flex items-center gap-6 select-none">
                  Experience Shree Media <span className="w-3 h-3 bg-blue-600 rounded-full inline-block"></span>
                </span>
              ))}
            </div>
            
            {/* Glossy Edge Overlay for the Tape */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-white/20 via-transparent to-black/5" />
            <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-slate-200/40 to-transparent pointer-events-none" />
          </motion.div>

        </div>
      </div>

      {/* Required CSS Animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .animate-spin-slow {
          animation: spin 10s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}} />
    </section>
  );
}