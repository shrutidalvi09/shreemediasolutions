import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, User, ArrowRight, PlayCircle, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Signup() {
  return (
    <div className="min-h-screen bg-[#F8F9FB] flex items-center justify-center p-6">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-indigo-100/50 rounded-full blur-3xl" />
      </div>

      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="w-full max-w-[450px] bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-slate-100 p-10 md:p-12 z-10"
      >
        <div className="flex flex-col items-center mb-10">
          <div className="p-3 bg-indigo-600 rounded-2xl mb-4 shadow-lg shadow-indigo-200">
            <ShieldCheck className="text-white w-6 h-6" />
          </div>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">Join Us</h2>
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-2">Start your 14-day free trial</p>
        </div>

        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-1">
            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Full Name</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
              <input 
                type="text" 
                placeholder="John Doe"
                className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:bg-white transition-all"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
              <input 
                type="email" 
                placeholder="name@company.com"
                className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:bg-white transition-all"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Create Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
              <input 
                type="password" 
                placeholder="At least 8 characters"
                className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:bg-white transition-all"
              />
            </div>
          </div>

          <div className="flex items-start gap-3 px-1 py-2">
            <input type="checkbox" className="mt-1 w-4 h-4 accent-indigo-600 rounded" />
            <p className="text-[10px] text-slate-400 leading-relaxed font-bold">
              I agree to the <span className="text-indigo-600 underline">Terms of Service</span> and <span className="text-indigo-600 underline">Privacy Policy</span>.
            </p>
          </div>

          <motion.button 
            whileTap={{ scale: 0.98 }}
            className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-black text-[11px] uppercase tracking-[0.2em] hover:bg-slate-900 transition-all shadow-xl shadow-indigo-100 mt-4 flex items-center justify-center gap-2"
          >
            Create Account <ArrowRight size={16} strokeWidth={3} />
          </motion.button>
        </form>

        <p className="text-center mt-10 text-slate-400 text-[11px] font-bold">
          Already have an account? 
          <Link to="/login" className="text-indigo-600 ml-2 hover:underline">Log In</Link>
        </p>
      </motion.div>
    </div>
  );
}