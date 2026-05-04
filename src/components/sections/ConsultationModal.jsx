import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import supportGif from '../../assets/support.gif'; 

export default function ConsultationModal({ isOpen, onClose }) { 
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop - Lighter blur for the smaller modal */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/20 backdrop-blur-md z-[9998]"
          />

          <div className="fixed inset-0 flex items-center justify-center p-6 z-[9999] pointer-events-none">
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white w-full max-w-[340px] rounded-[2.5rem] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.15)] pointer-events-auto relative overflow-hidden border border-slate-100"
            >
              {/* Close - Smaller target */}
              <button onClick={onClose} className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-slate-50 transition-colors group z-10">
                <X size={16} className="text-slate-400 group-hover:text-slate-900" />
              </button>

              {/* Visual - Scaled down */}
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-4">
                  <div className="w-20 h-20 rounded-3xl bg-slate-50 border border-slate-100 flex items-center justify-center overflow-hidden">
                    <img src={supportGif} alt="Support" className="w-14 h-14 object-contain" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 bg-indigo-600 text-white p-1.5 rounded-xl border-2 border-white shadow-sm">
                    <Sparkles size={12} fill="white" />
                  </div>
                </div>

                {/* Content - Compact Typography */}
                <div className="space-y-1 mb-6">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-indigo-600/70">Quick Connect</span>
                  <h2 className="text-xl font-bold text-slate-900 tracking-tight">Let's grow your brand.</h2>
                  <p className="text-slate-500 text-xs font-medium">Professional media engineering <br/> at your fingertips.</p>
                </div>

                {/* Action - Slimmer Button */}
                <div className="w-full space-y-3">
                  <button 
                    onClick={() => { onClose(); navigate('/contact'); }}
                    className="group w-full py-3 px-4 bg-slate-900 text-white rounded-2xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-indigo-600 transition-all active:scale-95 shadow-lg shadow-indigo-100"
                  >
                    Start Project
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  
                  <button onClick={onClose} className="text-slate-400 hover:text-slate-600 font-bold text-[10px] uppercase tracking-wider transition-colors">
                    Maybe Later
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}