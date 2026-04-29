import React, { useRef, useState } from 'react'; // Added useState
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion'; // Added AnimatePresence
import { ArrowRight, ChevronLeft, ChevronRight, Zap, ShoppingBag, Star, X, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

// --- ASSET IMPORTS ---
import standy from '../../assets/standy.avif';
import letterhead from '../../assets/letterhead.jpg';
import flyer from '../../assets/flyer.webp';
import banner from '../../assets/banner1.jpg';
import idCard from '../../assets/idcard.webp'; 
import stamps from '../../assets/stamp.webp';
import certificate from '../../assets/certificate.jpg';
import businesscard from '../../assets/businesscard.jpg';

// --- DATA CONFIGURATION ---
const categories = [
  { title: "Standy", img: standy },
  { title: "Letterhead", img: letterhead },
  { title: "Flyer", img: flyer },
  { title: "Banner", img: banner },
  { title: "ID Card", img: idCard },
  { title: "Stamps", img: stamps },
];

const topSellers = [
  { id: 1, title: "Letterhead 100gsm", price: "₹900", tag: "Featured", img: letterhead, rating: 4.8, description: "High-quality 100gsm bond paper letterheads with vibrant color printing. Perfect for professional corporate correspondence." },
  { id: 2, title: "Basic Business Card", price: "₹500", tag: "Featured", img: businesscard, rating: 5.0, description: "Standard 350gsm matte finish cards. Crisp details and durable stock to leave a lasting first impression." },
  { id: 3, title: "Rubber Stamps", price: "₹350", tag: "Popular", img: stamps, rating: 4.7, description: "Self-inking durable rubber stamps. Available in various sizes with high-definition impression quality." },
  { id: 4, title: "PVC ID Cards", price: "₹150", tag: "New", img: idCard, rating: 4.9, description: "High-gloss PVC cards with chip compatibility. Water-resistant and smudge-proof for long-term employee use." },
  { id: 5, title: "Premium Standy", price: "₹1,200", tag: "Popular", img: standy, rating: 4.6, description: "Aluminum roll-up stand with high-tension spring and star-media printing for maximum visibility at events." },
  { id: 6, title: "Award Certificate", price: "₹250", tag: "Featured", img: certificate, rating: 5.0, description: "Gold-foil embossed certificates on textured parchment paper. Ideal for corporate awards and graduations." },
];

export default function PrintingMarketplace() {
  const scrollRef = useRef(null);
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState(null); // State for Popup

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - 450 : scrollLeft + 450;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-[#F9FBFF] overflow-hidden selection:bg-blue-100 selection:text-blue-600">
      <div className="container mx-auto px-6 lg:px-20">
        
        {/* --- SECTION 1: CATEGORIES --- */}
        <div className="mb-24">
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-blue-600 rounded-xl text-white shadow-lg shadow-blue-200">
                <Zap size={20} fill="currentColor" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 tracking-tight">Printing Categories</h3>
            </div>
            <Link to="/services" className="inline-block">
              <button className="text-sm font-bold text-blue-600 hover:underline underline-offset-4">
                View All
              </button>
            </Link>
          </div>
          
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
            {categories.map((cat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="flex flex-col items-center gap-4 cursor-pointer group"
              >
                <div className="relative w-24 h-24 md:w-28 md:h-28">
                  <div className="absolute inset-0 bg-blue-600 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 opacity-10" />
                  <div className="w-full h-full rounded-full bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 overflow-hidden p-3 transition-all duration-300 group-hover:border-blue-200 group-hover:shadow-blue-100">
                    <img src={cat.img} alt={cat.title} className="w-full h-full object-contain rounded-full" />
                  </div>
                </div>
                <span className="text-sm font-bold text-slate-600 group-hover:text-blue-600 transition-colors">
                  {cat.title}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- SECTION 2: TOP SELLING PRINTS --- */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-4 text-orange-500">
              <ShoppingBag size={18} />
              <span className="text-xs font-black uppercase tracking-[0.2em]">Our Store</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Top Selling <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Prints.</span>
            </h2>
          </div>

          <div className="flex gap-3">
            <button onClick={() => scroll('left')} className="w-14 h-14 rounded-2xl border border-slate-200 bg-white flex items-center justify-center text-slate-400 hover:text-blue-600 transition-all shadow-sm"><ChevronLeft size={24} /></button>
            <button onClick={() => scroll('right')} className="w-14 h-14 rounded-2xl border border-slate-200 bg-white flex items-center justify-center text-slate-400 hover:text-blue-600 transition-all shadow-sm"><ChevronRight size={24} /></button>
          </div>
        </div>

        <div ref={scrollRef} className="flex gap-8 overflow-x-auto no-scrollbar pb-10 snap-x snap-mandatory scroll-smooth">
          {topSellers.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => setSelectedProduct(item)} // OPEN POPUP ON CLICK
              className="min-w-[300px] md:min-w-[350px] cursor-pointer snap-start group bg-white rounded-[2.5rem] border border-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.02)] hover:shadow-[0_30px_70px_rgba(0,0,0,0.07)] transition-all duration-500"
            >
              <div className="relative aspect-[4/3] m-4 overflow-hidden rounded-[2rem] bg-slate-50">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute top-5 left-5 px-4 py-1.5 bg-slate-900/90 backdrop-blur-md rounded-full border border-white/10">
                  <span className="text-[10px] font-black text-white uppercase tracking-widest">{item.tag}</span>
                </div>
                <div className="absolute bottom-5 left-5 px-3 py-1 bg-white/90 backdrop-blur-md rounded-lg flex items-center gap-1.5">
                  <Star size={12} className="text-orange-500 fill-orange-500" />
                  <span className="text-xs font-bold text-slate-800">{item.rating}</span>
                </div>
              </div>

              <div className="px-8 pb-8 pt-2">
                <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{item.title}</h4>
                <div className="flex justify-between items-center mt-6">
                  <div className="space-y-0.5">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Starts at</p>
                    <p className="text-2xl font-black text-slate-900">{item.price}</p>
                  </div>
                  <motion.div whileHover={{ scale: 1.1 }} className="w-14 h-14 rounded-2xl bg-slate-900 text-white flex items-center justify-center group-hover:bg-blue-600 transition-all shadow-lg">
                    <ArrowRight size={22} />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- PRODUCT POPUP MODAL --- */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-900/60 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white w-full max-w-2xl rounded-[2.5rem] overflow-hidden shadow-2xl relative"
            >
              <button 
                onClick={() => setSelectedProduct(null)}
                className="absolute top-6 right-6 z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-slate-50 transition-colors"
              >
                <X size={20} className="text-slate-500" />
              </button>

              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 h-64 md:h-auto bg-slate-100">
                  <img src={selectedProduct.img} alt={selectedProduct.title} className="w-full h-full object-cover" />
                </div>

                <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-widest rounded-full">{selectedProduct.tag}</span>
                    <div className="flex items-center gap-1">
                      <Star size={12} className="text-orange-500 fill-orange-500" />
                      <span className="text-xs font-bold text-slate-600">{selectedProduct.rating}</span>
                    </div>
                  </div>

                  <h3 className="text-3xl font-bold text-slate-900 mb-4">{selectedProduct.title}</h3>
                  <p className="text-slate-500 leading-relaxed mb-6 text-sm">{selectedProduct.description}</p>
                  
                  <div className="mb-8">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Total Price</p>
                    <p className="text-3xl font-black text-blue-600">{selectedProduct.price}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <button onClick={() => navigate('/services')} className="py-4 bg-slate-950 text-white rounded-2xl font-bold text-sm hover:bg-blue-600 transition-colors flex items-center justify-center gap-2 shadow-lg">
                      Order Now
                    </button>
                    <button className="py-4 border-2 border-slate-100 text-slate-900 rounded-2xl font-bold text-sm hover:border-blue-200 hover:bg-blue-50 transition-all">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}