import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

// Imports from your assets folder
import brochureImg from '../../assets/businesscard.jpg';
import flyerImg from '../../assets/flyer.webp';
import tshirtImg from '../../assets/certificate.jpg';

export default function ProfessionalHero() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const containerRef = useRef(null);

  // Global mouse tracking for parallax background
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const moveX = (clientX - window.innerWidth / 2) / 40;
    const moveY = (clientY - window.innerHeight / 2) / 40;
    mouseX.set(moveX);
    mouseY.set(moveY);
  };

  const categories = [
    { title: "Business Card", image: brochureImg, rotate: -6, offsetY: 40, color: "#C06CB4" },
    { title: "Design Flyer", image: flyerImg, rotate: 0, offsetY: 0, color: "#6366f1" },
    { title: "Certificate", image: tshirtImg, rotate: 6, offsetY: 40, color: "#0ea5e9" }
  ];

  // Animation variants for staggered text
  const titleContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const itemFade = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-screen bg-[#fafafa] overflow-hidden flex flex-col items-center justify-center pt-20 pb-40 px-6 cursor-default"
    >
      {/* --- FLOATING AMBIENT BACKGROUND --- */}
      <motion.div 
        style={{ x: springX, y: springY }}
        className="absolute inset-0 z-0 pointer-events-none scale-110"
      >
        <div className="absolute top-[10%] left-[15%] w-[400px] h-[400px] bg-purple-300/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[15%] w-[500px] h-[500px] bg-blue-300/20 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-indigo-100/30 rounded-full blur-[100px] rotate-12" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        
        {/* --- SOCIAL PROOF --- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-4 px-4 py-2 bg-white/50 backdrop-blur-md rounded-full border border-white shadow-sm mb-12"
        >
          <div className="flex -space-x-3">
            {[25, 32, 44, 56].map((imgId) => (
              <img 
                key={imgId}
                src={`https://i.pravatar.cc/100?u=${imgId}`} 
                className="w-8 h-8 rounded-full border-2 border-white shadow-sm"
                alt="user"
              />
            ))}
          </div>
          <p className="text-xs font-bold text-slate-600 uppercase tracking-tighter">Trusted by 1.3M+ Designers</p>
        </motion.div>

        {/* --- MAIN HEADLINE --- */}
        <motion.div
          variants={titleContainer}
          initial="hidden"
          animate="show"
          className="mb-24"
        >
          <motion.h1 variants={itemFade} className="text-6xl md:text-9xl font-black text-slate-900 tracking-tighter mb-8 leading-[0.85]">
            Design that <br />
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-500 to-blue-600 bg-[length:200%_auto] animate-gradient">
              Speaks Louder
            </span>
          </motion.h1>
          <motion.p variants={itemFade} className="text-lg md:text-2xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
            Crafting premium visual identities that don't just look good—they perform. 
          </motion.p>
        </motion.div>

        {/* --- INTERACTIVE 3D CARDS GRID --- */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-6 lg:gap-14 px-4">
          {categories.map((item, index) => (
            <CardItem 
              key={index} 
              item={item} 
              index={index} 
              isHovered={hoveredIndex === index}
              setHovered={() => setHoveredIndex(index)}
              clearHovered={() => setHoveredIndex(null)}
            />
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 5s ease infinite;
        }
      `}</style>
    </section>
  );
}

/**
 * Individual Card Component with 3D Hover Effect
 */
function CardItem({ item, index, isHovered, setHovered, clearHovered }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Mouse tilt effect for the card
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  function handleMouse(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  }

  return (
    <motion.div
      onMouseMove={handleMouse}
      onMouseEnter={setHovered}
      onMouseLeave={() => {
        clearHovered();
        x.set(0);
        y.set(0);
      }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ 
        opacity: 1, 
        y: isHovered ? item.offsetY - 30 : item.offsetY,
        rotate: isHovered ? 0 : item.rotate,
      }}
      style={{ rotateX, rotateY, perspective: 1000 }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      className="relative w-full max-w-[320px] group cursor-pointer"
    >
      {/* Dynamic Glow Shadow */}
      <div 
        className="absolute inset-0 rounded-[3rem] blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"
        style={{ backgroundColor: item.color }}
      />
      
      {/* Main Card */}
      <div className="relative bg-white rounded-[2.5rem] p-4 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-100 overflow-hidden backdrop-blur-sm">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-slate-100 shadow-inner">
          <motion.img 
            animate={{ scale: isHovered ? 1.15 : 1 }}
            transition={{ duration: 0.6 }}
            src={item.image} 
            className="w-full h-full object-cover"
            alt={item.title}
          />
          
          {/* Subtle Glass Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
              className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-3 rounded-2xl font-bold shadow-2xl"
            >
              Explore
            </motion.div>
          </div>
        </div>

        {/* Card Footer */}
        <div className="pt-6 pb-2 px-3 flex justify-between items-end">
          <div className="text-left">
            <p className="text-[10px] font-black text-indigo-500 uppercase tracking-[0.2em] mb-1">Concept Studio</p>
            <h3 className="text-slate-900 font-extrabold text-xl tracking-tight leading-none">{item.title}</h3>
          </div>
          <motion.div 
            animate={{ x: isHovered ? 5 : 0 }}
            className="w-10 h-10 rounded-2xl bg-slate-50 flex items-center justify-center border border-slate-100 text-slate-400 group-hover:text-white group-hover:bg-indigo-600 group-hover:border-indigo-600 transition-all duration-300 shadow-sm"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}