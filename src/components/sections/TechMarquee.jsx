import React from 'react';
import { motion } from 'framer-motion';

export default function TechMarquee() {
  const items = ["Digital Printing", "Offset Printing", "3D Printing", "Flyers", "Branding"];
  
  return (
    <div className="bg-[#1a1a1a] py-16 overflow-hidden">
      <motion.div 
        animate={{ x: [0, -1000] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="flex gap-20 whitespace-nowrap"
      >
        {[...items, ...items].map((text, i) => (
          <span 
            key={i} 
            className="text-6xl font-white uppercase tracking-tighter "
            style={{ WebkitTextStroke: '1px rgba(255,255,255,0.1)' }}
          >
            {text} <span className="ml-5 opacity-10">/</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}