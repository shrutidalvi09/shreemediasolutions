import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckSquare, Calendar, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // 1. Import useNavigate

import bulbGif from '../../assets/support.gif';

export default function ConsultationModal({ isOpen, onClose }) { 
  const navigate = useNavigate(); // 2. Initialize navigate

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }, [isOpen]);

  // 3. Create a handle function
  const handleTalkNow = () => {
    onClose(); // Close the modal first
    navigate('/contact'); // Redirect to your contact route
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#232323]/60 backdrop-blur-md z-[9998]"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 flex items-center justify-center p-4 z-[9999] pointer-events-none">
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white w-full max-w-[360px] rounded-[1.5rem] p-8 shadow-2xl pointer-events-auto relative text-center"
            >
              {/* Close Button */}
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-slate-100 transition-colors"
              >
                <X size={18} className="text-slate-400" />
              </button>

              {/* GIF Animation */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <img 
                    src={bulbGif} 
                    alt="Bulb Animation" 
                    className="w-24 h-24 object-contain"
                  />
                  <div className="absolute inset-0 bg-blue-400/5 blur-2xl rounded-full -z-10" />
                </div>
              </div>

              {/* Text Content */}
              <h2 className="text-2xl font-bold text-[#232323] leading-tight mb-6 tracking-tight">
                Grow your business <br /> 
                with <span className="font-extrabold">NexGenics.</span>
              </h2>

              {/* Benefits List */}
              <div className="space-y-3 text-left max-w-[240px] mx-auto mb-8">
                <div className="flex items-center gap-3">
                  <div className="text-blue-600">
                    <CheckSquare size={18} strokeWidth={2} />
                  </div>
                  <span className="text-[#232323] text-sm font-semibold">Increase conversion rate.</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="text-blue-600">
                    <Calendar size={18} strokeWidth={2} />
                  </div>
                  <span className="text-[#232323] text-sm font-semibold">Save your time and effort.</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-blue-600">
                    <Clock size={18} strokeWidth={2} />
                  </div>
                  <span className="text-[#232323] text-sm font-semibold">Make business stand out.</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                {/* 4. Added onClick handler here */}
                <button 
                  onClick={handleTalkNow}
                  className="w-full py-4 px-6 bg-gradient-to-r from-[#1e5ace] to-[#e64d44] text-white rounded-full font-bold text-base flex items-center justify-center gap-2 hover:brightness-110 transition-all active:scale-[0.97]"
                >
                  Let's talk now 
                  <span className="text-xl">→</span>
                </button>

                <button 
                  onClick={onClose}
                  className="w-full py-1 text-slate-400 hover:text-slate-600 font-bold text-sm uppercase tracking-wider"
                >
                  No thanks
                </button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}