import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// ASSETS
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
    <section className="relative py-32 bg-[#fcfcfd] overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div 
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-40 right-1/4 w-[600px] h-[600px] bg-indigo-50/60 rounded-full blur-[140px]" 
        />
        <div className="absolute bottom-20 left-10 w-[400px] h-[400px] bg-purple-50/50 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 lg:px-20 relative z-10">

        {/* HEADER */}
        <div className="max-w-5xl mb-24">
          <div className="flex items-center gap-4 mb-8">
            <span className="h-[1px] w-12 bg-indigo-500" />
            <span className="text-indigo-600 font-black tracking-[0.3em] text-[10px] uppercase">
              The Shree Media Standard
            </span>
          </div>

          <h2 className="text-5xl md:text-[5rem] font-black text-slate-900 leading-[1.1] tracking-tighter">
            We craft <span className="italic font-light text-slate-400 underline decoration-indigo-500/20 underline-offset-8">physical assets</span><br/> 
            that define your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500">brand legacy.</span>
          </h2>
        </div>

        {/* FEATURES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-40">
          <FeatureItem icon={qualityGif} title="Bespoke Quality" desc="Meticulous attention to every fiber and pixel." />
          <FeatureItem icon={truckGif} title="Rapid Delivery" desc="Global logistics powered by local precision." />
          <FeatureItem icon={supportGif} title="Design Logic" desc="Strategic consulting for modern visual brands." />
        </div>

        {/* MAIN SECTION */}
        <div className="flex flex-col lg:flex-row gap-20 items-stretch">

          {/* LEFT IMAGE */}
          <div className="flex-1 flex">
            <div className="relative w-full h-full min-h-[500px] lg:min-h-full rounded-[3rem] overflow-hidden shadow-xl bg-white border-[8px] border-white">

              <AnimatePresence mode="wait">
                <motion.img
                  key={index}
                  src={slides[index].img}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0 w-full h-full object-cover"
                  alt="Portfolio"
                />
              </AnimatePresence>

              {/* Label */}
              <div className="absolute top-8 left-8 bg-white/80 backdrop-blur px-6 py-3 rounded-2xl shadow">
                <p className="text-xs text-indigo-600 uppercase">Category</p>
                <p className="font-bold">{slides[index].label}</p>
              </div>

              {/* Dots */}
              <div className="absolute bottom-8 right-8 flex gap-2">
                {slides.map((_, i) => (
                  <button 
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`h-2 rounded-full transition-all ${
                      i === index ? "w-8 bg-indigo-600" : "w-2 bg-gray-300"
                    }`}
                  />
                ))}
              </div>

            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex-1 flex flex-col justify-between">

            <div className="space-y-8">
              <h3 className="text-4xl font-black text-slate-900">
                High-fidelity results <br/> 
                for <span className="text-indigo-600">high-impact</span> brands.
              </h3>

              <p className="text-slate-500 text-lg">
                Our workshop bridges digital ideas into real-world premium prints with unmatched precision.
              </p>
            </div>

            <div>
              <div className="grid grid-cols-2 gap-8 border-t pt-8">
                <StatBox count="99%" label="Accuracy" />
                <StatBox count="15k+" label="Deliveries" />
              </div>

              <Link to="/services" className="inline-block mt-10">
                <button className="flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full hover:bg-indigo-600 transition">
                  Explore Products
                  <ArrowRight size={18} />
                </button>
              </Link>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

/* Feature */
function FeatureItem({ icon, title, desc }) {
  return (
    <div className="p-10 bg-white rounded-3xl shadow hover:shadow-xl transition">
      <img src={icon} className="w-12 mb-6" alt={title} />
      <h4 className="text-xl font-bold mb-2">{title}</h4>
      <p className="text-gray-500">{desc}</p>
    </div>
  );
}

/* Stats */
function StatBox({ count, label }) {
  return (
    <div>
      <p className="text-3xl font-bold">{count}</p>
      <p className="text-xs uppercase text-indigo-500">{label}</p>
    </div>
  );
}