import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

// Custom Assets - Replace with your actual paths
import phoneCaseMockup from '../../assets/4350778.jpg'; 
import designerWorking from '../../assets/designer-studio.jpg'; 

export default function CTASection() {
  return (
    <section className="relative bg-[#FFFBEB] py-24 md:py-32 overflow-hidden">
      
      {/* 1. ORGANIC WAVE LINES (Matching image_2f131a.png) */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1440 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Top Right Green Wave */}
          <path 
            d="M1300 50C1350 150 1450 100 1500 250" 
            stroke="#A7F3D0" strokeWidth="3" strokeLinecap="round" 
            className="opacity-60"
          />
          <path 
            d="M1380 -20C1420 80 1550 50 1580 180" 
            stroke="#A7F3D0" strokeWidth="2" strokeLinecap="round" 
            className="opacity-40"
          />
          
          {/* Bottom Left Pink Wave */}
          <path 
            d="M-50 500C50 520 150 620 300 580" 
            stroke="#FBCFE8" strokeWidth="4" strokeLinecap="round" 
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT CONTENT: TYPOGRAPHY & CTA */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-1">
              <h3 className="text-slate-400 text-3xl md:text-4xl font-light italic tracking-tight">
                No Design?
              </h3>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight">
                Our Experienced <br /> Designers Help You
              </h2>
            </div>

            <p className="text-slate-500 text-lg max-w-md leading-relaxed">
              Shree Media is your destination for high-quality print-on-demand. 
              From custom branding to unique decor, we bring your concepts to life.
            </p>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link 
                to="/services" 
                className="inline-flex items-center gap-3 bg-[#8B5CF6] text-white px-8 py-4 rounded-2xl font-bold shadow-lg shadow-purple-200 hover:bg-[#7c3aed] transition-all"
              >
                Learn More
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          </motion.div>

          {/* RIGHT CONTENT: OVERLAPPING MOCKUPS (Matching image_251e50.png) */}
          <div className="relative flex justify-center lg:justify-end pr-12">
            
            {/* Background Image: Designer working */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="relative z-10 w-[300px] md:w-[400px] aspect-square rounded-2xl overflow-hidden shadow-2xl border-8 border-white"
            >
              <img 
                src={designerWorking} 
                alt="Designer at work" 
                className="w-full h-full object-cover" 
              />
            </motion.div>

            {/* Overlapping Foreground Image: Phone Case Mockup */}
            <motion.div 
              initial={{ opacity: 0, x: -50, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-20 w-[160px] md:w-[220px] aspect-[3/4] bg-white p-2 rounded-2xl shadow-2xl border border-slate-100"
            >
              <img 
                src={phoneCaseMockup} 
                alt="Product Mockup" 
                className="w-full h-full object-cover rounded-xl" 
              />
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}