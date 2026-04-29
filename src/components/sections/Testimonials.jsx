import React, { useState, useEffect, useCallback } from 'react'; // Added useEffect and useCallback
import { motion } from 'framer-motion';
import { ChevronRight, ChevronLeft, Star } from 'lucide-react';

const testimonials = [
  {
    name: "Priya S.",
    location: "Mumbai",
    feedback: "Loved the customization options. Super easy to design and order!",
    image: "https://i.pravatar.cc/150?u=priya"
  },
  {
    name: "Rohit M.",
    location: "Delhi",
    feedback: "Exceptional quality and fast delivery! My business cards turned out perfect.",
    image: "https://i.pravatar.cc/150?u=rohit"
  },
  {
    name: "Amit R.",
    location: "Bangalore",
    feedback: "Great service, timely updates, and amazing product range. Highly recommend!",
    image: "https://i.pravatar.cc/150?u=amit"
  },
  {
    name: "Sneha K.",
    location: "Pune",
    feedback: "The colors are so vibrant! Shree Media really knows their print tech.",
    image: "https://i.pravatar.cc/150?u=sneha"
  }
];

export default function FocusedCarousel() {
  const [centerIndex, setCenterIndex] = useState(1);
  const [isPaused, setIsPaused] = useState(false); // New state to handle hover

  // Wrapped in useCallback so it can be used inside useEffect safely
  const nextSlide = useCallback(() => {
    setCenterIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevSlide = () => {
    setCenterIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-swap logic
  useEffect(() => {
    if (isPaused) return; // Don't swap if user is hovering

    const interval = setInterval(() => {
      nextSlide();
    }, 4000); // Swaps every 4 seconds

    return () => clearInterval(interval); // Cleanup on unmount or index change
  }, [nextSlide, isPaused, centerIndex]); 

  const getVisibleIndices = () => {
    const prev = (centerIndex - 1 + testimonials.length) % testimonials.length;
    const next = (centerIndex + 1) % testimonials.length;
    return [prev, centerIndex, next];
  };

  const visibleIndices = getVisibleIndices();

  return (
    <section className="py-20 bg-[#FDFCFD] overflow-hidden">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Real Stories</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm leading-relaxed">
            Discover how Shree Media has helped businesses and individuals bring their 
            ideas to life with quality, speed, and care.
          </p>
        </div>

        <div 
          className="relative flex items-center justify-center gap-4 max-w-6xl mx-auto"
          onMouseEnter={() => setIsPaused(true)} // Pause when mouse enters
          onMouseLeave={() => setIsPaused(false)} // Resume when mouse leaves
        >
          
          <button 
            onClick={prevSlide}
            className="absolute left-0 z-20 p-3 rounded-full border border-pink-200 text-pink-500 hover:bg-pink-50 transition-colors bg-white shadow-sm md:-left-4"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="flex items-center justify-center gap-6 w-full">
            {visibleIndices.map((idx, position) => {
              const isCenter = position === 1;
              return (
                <motion.div
                  key={`${idx}-${position}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ 
                    opacity: isCenter ? 1 : 0.6, 
                    scale: isCenter ? 1.05 : 0.9,
                    zIndex: isCenter ? 10 : 0 
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className={`bg-white rounded-2xl p-8 border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col items-center text-center w-full max-w-[350px] min-h-[400px] ${!isCenter && 'hidden md:flex'}`}
                >
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-6 border-4 border-slate-50 shadow-inner">
                    <img src={testimonials[idx].image} alt={testimonials[idx].name} className="w-full h-full object-cover" />
                  </div>

                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <p className="text-slate-600 text-base leading-relaxed mb-8 flex-grow">
                    {testimonials[idx].feedback}
                  </p>

                  <div className="mt-auto">
                    <span className="font-bold text-slate-800 text-lg">
                      — {testimonials[idx].name}, {testimonials[idx].location}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <button 
            onClick={nextSlide}
            className="absolute right-0 z-20 p-3 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition-colors shadow-lg shadow-purple-200 md:-right-4"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCenterIndex(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                centerIndex === i ? 'w-8 bg-blue-500' : 'w-2.5 bg-slate-200'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}