import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactForm() {
  const [fileName, setFileName] = useState("No file chosen");

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <section className="relative w-full min-h-[70svh] md:min-h-[70dvh] flex items-center justify-center bg-sky-50 py-12 md:py-16 px-4 md:px-8 overflow-hidden">
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-4xl bg-white rounded-xl shadow-sm p-6 sm:p-10 md:p-12"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 md:mb-10">
          Leave us your info !
        </h2>

        <form className="space-y-6 md:space-y-8">
          
          {/* Full Name */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-slate-700 mb-1">Full Name*</label>
            <input 
              type="text" 
              className="border-b border-slate-300 bg-transparent py-2 outline-none focus:border-blue-600 transition w-full" 
              required 
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-slate-700 mb-1">Email*</label>
            <input 
              type="email" 
              className="border-b border-slate-300 bg-transparent py-2 outline-none focus:border-blue-600 transition w-full" 
              required 
            />
          </div>

          {/* Service */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-slate-700 mb-1">Service Description*</label>
            <input 
              type="text" 
              className="border-b border-slate-300 bg-transparent py-2 outline-none focus:border-blue-600 transition w-full" 
              required 
            />
          </div>

          {/* File Upload */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-slate-700 mb-2">Upload Your CV*</label>
            <div className="flex flex-wrap items-center gap-3">
              <label className="cursor-pointer bg-blue-900 text-white px-5 py-2 rounded text-sm hover:bg-blue-800 transition">
                Choose File
                <input 
                  type="file" 
                  className="hidden" 
                  onChange={handleFileChange}
                />
              </label>
              <span className="text-xs text-slate-500 break-all">{fileName}</span>
            </div>
          </div>

          {/* Message */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-slate-700 mb-1">
              Why do you want to join our team?*
            </label>
            <textarea 
              rows="3"
              className="border-b border-slate-300 bg-transparent py-2 outline-none focus:border-blue-600 transition w-full resize-none"
              required
            />
          </div>

          {/* Button */}
          <button 
            type="submit" 
            className="bg-sky-500 text-white px-10 md:px-16 py-3 rounded-md font-bold hover:bg-sky-600 transition w-full md:w-auto"
          >
            Submit
          </button>

        </form>
      </motion.div>
    </section>
  );
}