import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, ArrowRight, PlayCircle, Github, Chrome } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F8F9FB] flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Decoration - High-end Blur Blobs */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-indigo-100/40 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-blue-100/40 rounded-full blur-[120px]" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-[460px] bg-white rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] border border-slate-100 p-10 md:p-14 z-10"
      >
        {/* Brand Identity */}
        <div className="flex flex-col items-center mb-12">
          <div className="p-4 bg-indigo-600 rounded-[1.25rem] mb-6 shadow-xl shadow-indigo-200">
            <PlayCircle className="text-white w-7 h-7" />
          </div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">Welcome Back</h2>
          <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] mt-3">Access your professional dashboard</p>
        </div>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          {/* Email Field */}
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Email Address</label>
            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-indigo-600 transition-colors w-4.5 h-4.5" />
              <input 
                type="email" 
                placeholder="name@company.com"
                className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-sm font-medium focus:outline-none focus:ring-4 focus:ring-indigo-600/5 focus:border-indigo-600 focus:bg-white transition-all placeholder:text-slate-300"
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <div className="flex justify-between items-center px-1">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Password</label>
              <Link to="/forgot-password" title="Recover Password" className="text-[10px] font-black uppercase tracking-widest text-indigo-600 hover:text-slate-900 transition-colors">
                Forgot?
              </Link>
            </div>
            <div className="relative group">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-indigo-600 transition-colors w-4.5 h-4.5" />
              <input 
                type="password" 
                placeholder="••••••••"
                className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-sm font-medium focus:outline-none focus:ring-4 focus:ring-indigo-600/5 focus:border-indigo-600 focus:bg-white transition-all placeholder:text-slate-300"
              />
            </div>
          </div>

          {/* Submit Button */}
          <motion.button 
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-4.5 bg-slate-900 text-white rounded-2xl font-black text-[11px] uppercase tracking-[0.25em] hover:bg-indigo-600 transition-all shadow-2xl shadow-slate-200 mt-4 flex items-center justify-center gap-3"
          >
            Sign In <ArrowRight size={18} strokeWidth={3} />
          </motion.button>
        </form>

        {/* Divider */}
        <div className="relative my-10 text-center">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-100"></div>
          </div>
          <span className="relative px-5 bg-white text-[9px] font-black text-slate-300 uppercase tracking-[0.2em]">Secure Gateway</span>
        </div>

        {/* Social Logins */}
        <div className="grid grid-cols-2 gap-4">
          <button className="flex items-center justify-center gap-3 py-3.5 border border-slate-100 rounded-2xl hover:bg-slate-50 hover:border-slate-200 transition-all text-[10px] font-black uppercase tracking-wider text-slate-600 active:scale-95">
            <Chrome size={16} /> Google
          </button>
          <button className="flex items-center justify-center gap-3 py-3.5 border border-slate-100 rounded-2xl hover:bg-slate-50 hover:border-slate-200 transition-all text-[10px] font-black uppercase tracking-wider text-slate-600 active:scale-95">
            <Github size={16} /> Github
          </button>
        </div>

        {/* Footer Link */}
        <p className="text-center mt-12 text-slate-400 text-[11px] font-bold tracking-tight">
          New to the platform? 
          <Link to="/signup" className="text-indigo-600 ml-2 hover:text-slate-900 underline underline-offset-4 decoration-indigo-200 hover:decoration-slate-900 transition-all">
            Create Account
          </Link>
        </p>
      </motion.div>
    </div>
  );
}