import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Added for navigation

// --- DIRECT ASSET IMPORTS ---
import imgWedding from '../../assets/weeding.jpg';
import imgBirthday from '../../assets/birthday.jpg';
import imgLetterhead from '../../assets/letterhead.jpg';
import imgStamp from '../../assets/stamp.webp';
import imgPostcard from '../../assets/postcard.jpg';
import imgBusinessCard from '../../assets/businesscard.jpg';
import imgFlyer from '../../assets/flyer.webp';
import imgBrochure from '../../assets/promotional.jpg';
import imgPoster from '../../assets/poster1.jpg';
import imgCert from '../../assets/certificate.jpg';
import imgXerox from '../../assets/xerox.jpg';
import imgIdCard from '../../assets/idcard.webp';
import imgBanner from '../../assets/banner1.jpg';
import imgStandy from '../../assets/standy.avif';
import imgBoxes from '../../assets/banner1.jpg';
import imgStickers from '../../assets/sticker.jpg';
import imgCarryBag from '../../assets/postcard.jpg';
import imgThesis from '../../assets/thesis.jpg';
import imgMenu from '../../assets/menu.avif';

const projects = [
  { id: 1, title: "Royal Wedding Cards", tag: "Premium", price: "₹2,500.00", qty: "50", img: imgWedding },
  { id: 2, title: "Birthday Invitation Set", tag: "Popular", price: "₹499.00", qty: "20", img: imgBirthday },
  { id: 3, title: "Corporate Letterhead", tag: "Featured", price: "₹120.00", qty: "10", img: imgLetterhead },
  { id: 4, title: "Self-Inking Rubber Stamp", tag: "Essential", price: "₹150.00", qty: "1", img: imgStamp },
  { id: 5, title: "Vintage Postcards", tag: "Classic", price: "₹199.00", qty: "10", img: imgPostcard },
  { id: 6, title: "Executive Business Card", tag: "Featured", price: "₹350.00", qty: "100", img: imgBusinessCard },
  { id: 7, title: "Promotional Flyer", tag: "Bulk", price: "₹800.00", qty: "500", img: imgFlyer },
  { id: 8, title: "Trifold Brochure", tag: "Marketing", price: "₹1,200.00", qty: "100", img: imgBrochure },
  { id: 10, title: "Achievement Certificates", tag: "Popular", price: "₹299.00", qty: "5", img: imgCert },
  { id: 12, title: "PVC Employee ID Card", tag: "Essential", price: "₹60.00", qty: "1", img: imgIdCard },
  { id: 13, title: "Outdoor Vinyl Banner", tag: "Large Format", price: "₹450.00", qty: "1", img: imgBanner },
  { id: 14, title: "Roll-up Standy (6x3)", tag: "Featured", price: "₹1,399.00", qty: "1", img: imgStandy },
  { id: 16, title: "Round Product Stickers", tag: "Labels", price: "₹110.00", qty: "30", img: imgStickers },
  { id: 19, title: "Restaurant Menu Cards", tag: "Hospitality", price: "₹850.00", qty: "10", img: imgMenu }
];

const filters = ['All', 'Cards', 'Marketing', 'Office', 'Large Format', 'Packaging'];

export default function ProjectShowcase() {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <section className="py-24 bg-[#F8F9FB]">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-16 gap-8">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="text-3xl">🔥</span>
              <h2 className="text-3xl font-black text-slate-900 tracking-tight">Printing Solutions</h2>
            </div>
            <p className="text-slate-400 text-sm font-medium ml-1">
              Professional quality prints with fast turnaround.
            </p>
          </div>
          
          <div className="flex gap-2 overflow-x-auto pb-4 no-scrollbar">
            {filters.map((filter) => (
              <button 
                key={filter} 
                className="px-6 py-2.5 rounded-full bg-white border border-slate-200 text-xs font-bold text-slate-600 hover:border-indigo-500 hover:text-indigo-600 transition-all whitespace-nowrap shadow-sm"
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {projects.map((item) => (
            <motion.div 
              key={item.id}
              whileHover={{ y: -10 }}
              className="bg-white rounded-[2rem] border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] overflow-hidden group transition-all duration-500 hover:shadow-2xl flex flex-col"
            >
              {/* Image Container */}
              <div className="relative aspect-square p-8 bg-slate-50/50 flex items-center justify-center overflow-hidden">
                <span className={`absolute top-5 left-5 z-10 px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest text-white shadow-lg
                  ${item.tag === 'Premium' ? 'bg-indigo-600' : 
                    item.tag === 'Featured' ? 'bg-black' : 
                    item.tag === 'Large Format' ? 'bg-emerald-600' : 
                    item.tag === 'Popular' ? 'bg-rose-500' : 'bg-slate-700'}`}>
                  {item.tag}
                </span>
                
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Product Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-bold text-slate-800 text-[15px] leading-tight mb-4 h-10 line-clamp-2 transition-colors duration-300 group-hover:text-indigo-600">
                  {item.title}
                </h3>
                
                <div className="mt-auto space-y-4 pt-4 border-t border-slate-50">
                  <div className="flex justify-between items-end">
                    <div className="space-y-1">
                      <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                        Min. {item.qty} {item.qty > 1 ? 'Units' : 'Unit'}
                      </p>
                      <p className="text-slate-900 font-black text-2xl tracking-tighter leading-none">
                        {item.price}
                      </p>
                    </div>
                  </div>

                  {/* Redesigned Button: Action-oriented navigation */}
                  <motion.button 
                    onClick={() => navigate('/contact')} // Redirects to Contact
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-3.5 bg-slate-900 group-hover:bg-indigo-600 text-white rounded-xl flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 shadow-xl shadow-slate-100"
                  >
                    Get Quote <ArrowRight size={14} strokeWidth={3} className="group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}