import React from 'react';
import { motion } from 'framer-motion';
import { User, Lock, Chrome, Facebook, Github, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';


export default function Login() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <div className="min-h-screen bg-[#E9F0FF] flex items-center justify-center p-4 font-sans">
      {/* Reduced max-width and min-height for a smaller footprint */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-[850px] bg-white rounded-[2.5rem] shadow-[0_30px_80px_-15px_rgba(0,0,0,0.08)] flex flex-col md:flex-row overflow-hidden min-h-[520px]"
      >
        
        {/* Left Section: Compact Curved Panel */}
        <div className="relative w-full md:w-[38%] bg-[#7B96EC] flex flex-col items-center justify-center text-center px-8 py-10 text-white order-2 md:order-1">
          

          <motion.div 
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative z-10"
          >
            <h1 className="text-3xl font-bold mb-3 tracking-tight">Hello, Welcome!</h1>
            <p className="text-blue-50/90 text-xs mb-8 font-medium">Don't have an account?</p>
            
            <Link 
              to="/signup" 
              className="px-10 py-2.5 border-2 border-white/80 rounded-xl font-bold text-[11px] uppercase tracking-widest hover:bg-white hover:text-[#7B96EC] transition-all duration-300"
            >
              Register
            </Link>
          </motion.div>
        </div>

        {/* Right Section: Compact Login Form */}
        <div className="w-full md:w-[62%] bg-white p-8 md:p-12 flex flex-col justify-center order-1 md:order-2">
          
          <div className="max-w-[320px] mx-auto w-full">
            <motion.h2 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-3xl font-bold text-slate-800 mb-8 text-center"
            >
              Login
            </motion.h2>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="relative group">
                <input 
                  type="text" 
                  placeholder="Username"
                  className="w-full px-5 py-3.5 bg-[#F0F5FF] border-none rounded-xl text-sm text-slate-600 placeholder:text-slate-400 focus:ring-2 focus:ring-[#7B96EC]/20 focus:bg-white transition-all outline-none"
                />
                <User className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#7B96EC] w-4 h-4 transition-colors" />
              </motion.div>

              <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="relative group">
                <input 
                  type="password" 
                  placeholder="Password"
                  className="w-full px-5 py-3.5 bg-[#F0F5FF] border-none rounded-xl text-sm text-slate-600 placeholder:text-slate-400 focus:ring-2 focus:ring-[#7B96EC]/20 focus:bg-white transition-all outline-none"
                />
                <Lock className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#7B96EC] w-4 h-4 transition-colors" />
              </motion.div>

              <div className="text-center">
                <Link to="/forgot-password" className="text-[11px] font-bold text-slate-400 hover:text-[#7B96EC] transition-colors">
                  Forgot Password?
                </Link>
              </div>

              <motion.button 
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.99 }}
                className="w-full py-3.5 bg-[#7B96EC] text-white rounded-xl font-bold text-[14px] shadow-lg shadow-blue-100 hover:bg-[#6A85D9] transition-all"
              >
                Login
              </motion.button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-slate-400 text-[10px] font-bold mb-4 uppercase tracking-widest opacity-70">or login with social platforms</p>
              <div className="flex items-center justify-center gap-3">
                {[Chrome, Facebook, Github, Linkedin].map((Icon, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    whileHover={{ y: -2 }}
                    className="w-10 h-10 flex items-center justify-center rounded-xl border border-slate-50 text-slate-400 hover:text-[#7B96EC] hover:bg-slate-50 transition-all shadow-sm"
                  >
                    <Icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}