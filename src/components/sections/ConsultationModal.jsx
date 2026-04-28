import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Palette, Zap, Target } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Assuming you keep the same asset or replace it with a brand-relevant one
import supportGif from '../../assets/support.gif'; 

export default function ConsultationModal({ isOpen, onClose }) { 
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }, [isOpen]);

  const handleTalkNow = () => {
    onClose();
    navigate('/contact');
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
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-md z-[9998]"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 flex items-center justify-center p-4 z-[9999] pointer-events-none">
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white w-full max-w-[380px] rounded-[2rem] p-10 shadow-2xl pointer-events-auto relative text-center border border-slate-100"
            >
              {/* Close Button */}
              <button 
                onClick={onClose}
                className="absolute top-5 right-5 p-1.5 rounded-full hover:bg-slate-100 transition-colors"
              >
                <X size={20} className="text-slate-400" />
              </button>

              {/* Icon/GIF Area */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <img 
                    src={supportGif} 
                    alt="Shree Media Support" 
                    className="w-28 h-28 object-contain"
                  />
                  <div className="absolute inset-0 bg-orange-400/10 blur-3xl rounded-full -z-10" />
                </div>
              </div>

              {/* Text Content */}
              <h2 className="text-2xl font-bold text-slate-900 leading-tight mb-6 tracking-tight">
                Elevate your brand with <br /> 
                <span className="text-orange-600">Shree Media Solutions.</span>
              </h2>

              {/* Benefits List */}
              <div className="space-y-4 text-left max-w-[260px] mx-auto mb-10">
                <div className="flex items-start gap-4">
                  <div className="text-orange-500 mt-0.5">
                    <Palette size={20} strokeWidth={2.5} />
                  </div>
                  <span className="text-slate-700 text-sm font-semibold">Premium creative branding & design.</span>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="text-orange-500 mt-0.5">
                    <Target size={20} strokeWidth={2.5} />
                  </div>
                  <span className="text-slate-700 text-sm font-semibold">High-impact visual marketing.</span>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-orange-500 mt-0.5">
                    <Zap size={20} strokeWidth={2.5} />
                  </div>
                  <span className="text-slate-700 text-sm font-semibold">Fast turnaround & quality print.</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4">
                <button 
                  onClick={handleTalkNow}
                  className="w-full py-4 px-6 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-xl font-bold text-base flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-orange-200 transition-all active:scale-[0.97]"
                >
                  Start your project 
                  <span className="text-xl">→</span>
                </button>

                <button 
                  onClick={onClose}
                  className="w-full py-1 text-slate-400 hover:text-slate-600 font-bold text-xs uppercase tracking-[0.2em]"
                >
                  Maybe later
                </button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}