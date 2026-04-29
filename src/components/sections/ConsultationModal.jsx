import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Palette, Zap, Target, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
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
          {/* Backdrop with stronger blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-blue-950/40 backdrop-blur-xl z-[9998]"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 flex items-center justify-center p-4 z-[9999] pointer-events-none">
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white w-full max-w-[400px] rounded-[3rem] p-10 lg:p-12 shadow-[0_32px_64px_-15px_rgba(30,58,138,0.25)] pointer-events-auto relative overflow-hidden border border-slate-100"
            >
              {/* Subtle Blue Glow inside modal */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-100/50 blur-3xl rounded-full -z-10" />

              {/* Close Button */}
              <button 
                onClick={onClose}
                className="absolute top-8 right-8 p-2 rounded-full hover:bg-slate-50 transition-colors group"
              >
                <X size={18} className="text-slate-400 group-hover:text-blue-600 transition-colors" />
              </button>

              {/* Icon/Visual Area */}
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <motion.div 
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="relative z-10"
                  >
                    <img 
                      src={supportGif} 
                      alt="Support" 
                      className="w-24 h-24 object-contain mix-blend-multiply" 
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-blue-600/10 blur-2xl rounded-full -z-10 scale-150" />
                </div>
              </div>

              {/* Text Content */}
              <div className="text-center mb-10">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 mb-4 block">
                  Direct Consultation
                </span>
                <h2 className="text-3xl font-black text-slate-900 leading-[1.1] tracking-tighter">
                  Elevate your brand <br /> 
                  <span className="text-blue-600">with Shree Media.</span>
                </h2>
              </div>

              {/* Benefits List - Tighter Spacing */}
              <div className="space-y-5 mb-10">
                {[
                  { icon: <Palette size={18} />, text: "Avant-garde branding & design" },
                  { icon: <Target size={18} />, text: "High-impact visual strategy" },
                  { icon: <Zap size={18} />, text: "Fast turnaround, elite quality" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 group">
                    <div className="flex-shrink-0 w-10 h-10 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                      {item.icon}
                    </div>
                    <span className="text-slate-600 text-sm font-bold tracking-tight">{item.text}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button 
                  onClick={handleTalkNow}
                  className="w-full py-5 px-6 bg-blue-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-200 transition-all active:scale-[0.98]"
                >
                  Start your project <ArrowRight size={16} />
                </button>

                <button 
                  onClick={onClose}
                  className="w-full py-2 text-slate-400 hover:text-slate-600 font-bold text-[10px] uppercase tracking-[0.2em] transition-colors"
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