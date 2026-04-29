import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export default function Newsletter() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto bg-slate-900 rounded-[3.5rem] p-12 md:p-16 lg:p-20 text-center relative overflow-hidden"
        >
          {/* Subtle Inner Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent pointer-events-none" />

          <div className="relative z-10">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-5 py-2 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-black uppercase tracking-[0.3em] mb-8 border border-blue-500/20"
            >
              Weekly Insights
            </motion.span>

            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6 leading-[0.95]">
              Stay ahead of the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                Print Revolution.
              </span>
            </h2>

            <p className="text-slate-400 mb-12 max-w-md mx-auto font-medium text-sm md:text-base leading-relaxed">
              Join 5,000+ creators getting monthly design inspiration and professional printing tips.
            </p>
            
            <form 
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col md:flex-row gap-3 max-w-xl mx-auto p-2 bg-white/5 backdrop-blur-md rounded-[2rem] border border-white/10 shadow-2xl"
            >
              <input 
                type="email" 
                required
                placeholder="Enter your professional email" 
                className="flex-1 px-8 py-5 rounded-[1.5rem] bg-white/5 border-none text-white placeholder:text-slate-500 focus:ring-2 focus:ring-blue-500 outline-none font-medium transition-all"
              />
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-blue-600 text-white px-10 py-5 rounded-[1.5rem] font-black uppercase text-[10px] tracking-widest flex items-center justify-center gap-3 hover:bg-blue-500 transition-all shadow-lg shadow-blue-900/20"
              >
                Join Now <Send size={16} strokeWidth={3} />
              </motion.button>
            </form>
            
            <p className="mt-8 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
              No Spam. Just Pure Design. ⚡
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}