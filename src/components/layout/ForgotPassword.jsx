import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowLeft, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ForgotPassword() {
  return (
    <div className="min-h-screen bg-[#E9F0FF] flex items-center justify-center p-4 font-sans">
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-[850px] bg-white rounded-[2.5rem] shadow-[0_30px_80px_-15px_rgba(0,0,0,0.08)] flex flex-col md:flex-row overflow-hidden min-h-[520px]"
      >
        <div className="relative w-full md:w-[38%] bg-[#7B96EC] flex flex-col items-center justify-center text-center px-8 py-10 text-white order-2 md:order-1">
          <div className="absolute top-0 bottom-0 -right-1 w-16 bg-white rounded-l-[80px] hidden md:block" />
          <motion.div initial={{ opacity: 0, x: -15 }} animate={{ opacity: 1, x: 0 }} className="relative z-10 flex flex-col items-center">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm">
              <ShieldCheck size={32} className="text-white" />
            </div>
            <h1 className="text-3xl font-bold mb-3 tracking-tight">Lock Out?</h1>
            <p className="text-blue-50/90 text-xs mb-8 font-medium leading-relaxed">Enter your email and we'll help you get back in.</p>
            <Link to="/login" className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest hover:underline transition-all">
              <ArrowLeft size={14} /> Back to Login
            </Link>
          </motion.div>
        </div>

        <div className="w-full md:w-[62%] bg-white p-8 md:p-12 flex flex-col justify-center order-1 md:order-2">
          <div className="max-w-[320px] mx-auto w-full">
            <h2 className="text-3xl font-bold text-slate-800 mb-4 text-center">Forgot Password</h2>
            <p className="text-slate-400 text-center text-xs mb-10 font-medium">We'll send a recovery link to your email.</p>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="relative group">
                <input type="email" placeholder="Enter your email" className="w-full px-5 py-3.5 bg-[#F0F5FF] border-none rounded-xl text-sm text-slate-600 placeholder:text-slate-400 focus:ring-2 focus:ring-[#7B96EC]/20 focus:bg-white transition-all outline-none" />
                <Mail className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#7B96EC] w-4 h-4" />
              </div>
              <button className="w-full py-3.5 bg-[#7B96EC] text-white rounded-xl font-bold text-[14px] shadow-lg shadow-blue-100 hover:bg-[#6A85D9] transition-all">
                Send Reset Link
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
}