import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import printImg from '../../assets/banner1.jpg'; // Example

const services = [
  { title: "Digital Printing", desc: "Experience cutting-edge high-quality digital printing for all your marketing needs.", img: printImg },
  { title: "Large Format Print", desc: "From event banners to window graphics, we make your message impossible to miss.", img: printImg }
];

export default function ServiceGrid() {
  return (
    <section className="py-32 space-y-40">
      {services.map((item, i) => (
        <div key={i} className={`container mx-auto px-6 flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16`}>
          <div className="lg:w-1/2 space-y-6">
            <h3 className="text-5xl font-black text-slate-900 tracking-tight">{item.title}</h3>
            <p className="text-slate-500 text-lg leading-relaxed">{item.desc}</p>
            <button className="bg-[#8B5CF6] text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 shadow-lg shadow-purple-200">
              Learn More <ArrowRight size={18} />
            </button>
          </div>
          
          {/* Studio Frame Style (Ref: image_249a8c.jpg) */}
          <div className="lg:w-1/2 relative group">
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-white rounded-full z-20 shadow-xl flex items-center justify-center border border-slate-50">
               <span className="text-[8px] font-black uppercase text-center">Quality<br/>Delivered</span>
            </div>
            <div className="relative rounded-[2.5rem] border-[15px] border-white shadow-2xl overflow-hidden aspect-[4/3]">
              <img src={item.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={item.title} />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}