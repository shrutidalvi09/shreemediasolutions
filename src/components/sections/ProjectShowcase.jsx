import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, Info, ShoppingCart, Plus, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// --- DIRECT ASSET IMPORTS ---
import imgWedding from '../../assets/weeding.jpg';
import imgBirthday from '../../assets/birthday.jpg';
import imgLetterhead from '../../assets/letterhead.jpg';
import imgStamp from '../../assets/stamp.webp';
import imgPostcard from '../../assets/postcard.jpg';
import imgBusinessCard from '../../assets/businesscard.jpg';
import imgFlyer from '../../assets/flyer.webp';
import imgBrochure from '../../assets/promotional.jpg';
import imgCert from '../../assets/certificate.jpg';
import imgIdCard from '../../assets/idcard.webp';
import imgBanner from '../../assets/banner1.jpg';
import imgStandy from '../../assets/standy.avif';
import imgStickers from '../../assets/sticker.jpg';
import imgMenu from '../../assets/menu.avif';

const projects = [
  { id: 1, title: "Royal Wedding Cards", tag: "Premium", category: "Cards", price: "₹2,500.00", qty: "50", img: imgWedding, description: "Exquisite premium wedding cards with gold foiling and textured paper options. Fully customizable designs to match your special day." },
  { id: 2, title: "Birthday Invitation Set", tag: "Popular", category: "Cards", price: "₹499.00", qty: "20", img: imgBirthday, description: "Fun and vibrant birthday invitations. High-quality digital print on 300gsm glossy cardstock." },
  { id: 3, title: "Corporate Letterhead", tag: "Featured", category: "Office", price: "₹120.00", qty: "10", img: imgLetterhead, description: "Professional 100gsm bond paper letterheads. Essential for official business correspondence and branding." },
  { id: 4, title: "Self-Inking Rubber Stamp", tag: "Essential", category: "Office", price: "₹150.00", qty: "1", img: imgStamp, description: "Durable self-inking stamps available in blue, black, or red ink. High-precision laser-cut rubber for crisp impressions." },
  { id: 5, title: "Vintage Postcards", tag: "Classic", category: "Cards", price: "₹199.00", qty: "10", img: imgPostcard, description: "Classic 4x6 inch postcards with a matte finish. Great for personal messages or artistic collectibles." },
  { id: 6, title: "Executive Business Card", tag: "Featured", category: "Office", price: "₹350.00", qty: "100", img: imgBusinessCard, description: "Premium 350gsm matte laminated cards. Includes spot UV options for a luxurious executive feel." },
  { id: 7, title: "Promotional Flyer", tag: "Bulk", category: "Marketing", price: "₹800.00", qty: "500", img: imgFlyer, description: "A5 sized marketing flyers on 130gsm art paper. Best for mass distribution and events." },
  { id: 8, title: "Trifold Brochure", tag: "Marketing", category: "Marketing", price: "₹1,200.00", qty: "100", img: imgBrochure, description: "Professional trifold layout on high-gloss paper. Perfect for presenting detailed product catalogs." },
  { id: 10, title: "Achievement Certificates", tag: "Popular", category: "Office", price: "₹299.00", qty: "5", img: imgCert, description: "Elegantly designed certificates on parchment paper. Ideal for corporate recognition or school awards." },
  { id: 12, title: "PVC Employee ID Card", tag: "Essential", category: "Office", price: "₹60.00", qty: "1", img: imgIdCard, description: "Standard CR80 size PVC cards. Durable, waterproof, and high-definition photo printing." },
  { id: 13, title: "Outdoor Vinyl Banner", tag: "Large Format", category: "Large Format", price: "₹450.00", qty: "1", img: imgBanner, description: "Weather-resistant flex banners with eyelets. Perfect for shop fronts and outdoor events." },
  { id: 14, title: "Roll-up Standy (6x3)", tag: "Featured", category: "Large Format", price: "₹1,399.00", qty: "1", img: imgStandy, description: "Portable aluminum roll-up stand with high-quality star media print. Easy to carry and set up." },
  { id: 16, title: "Round Product Stickers", tag: "Labels", category: "Packaging", price: "₹110.00", qty: "30", img: imgStickers, description: "Pre-cut waterproof vinyl stickers. Perfect for branding jars, boxes, or product packaging." },
  { id: 19, title: "Restaurant Menu Cards", tag: "Hospitality", category: "Marketing", price: "₹850.00", qty: "10", img: imgMenu, description: "Long-lasting laminated menu cards. Spill-proof and easy to clean for heavy restaurant use." }
];

const filters = ['All', 'Cards', 'Marketing', 'Office', 'Large Format', 'Packaging'];

export default function ProjectShowcase() {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  // --- CART STATE & LOGIC ---
  const [cart, setCart] = useState([]);
  const [isAdding, setIsAdding] = useState(false);

  const addToCart = (product) => {
    setIsAdding(true);
    setCart([...cart, product]);
    
    // Simple feedback timeout
    setTimeout(() => {
      setIsAdding(false);
    }, 1500);
  };

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(item => item.category === activeFilter);

  return (
    <section className="py-24 bg-[#F8F9FB] relative">
      
      {/* --- FLOATING CART BADGE --- */}
      <AnimatePresence>
        {cart.length > 0 && (
          <motion.div 
            initial={{ scale: 0, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0, y: 20 }}
            onClick={() => navigate('/cart')}
            className="fixed bottom-8 right-8 z-[110] bg-indigo-600 text-white px-6 py-4 rounded-full shadow-2xl flex items-center gap-3 cursor-pointer hover:bg-indigo-700 transition-colors"
          >
            <div className="relative">
              <ShoppingCart size={20} />
              <span className="absolute -top-2 -right-2 bg-rose-500 text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold border-2 border-indigo-600">
                {cart.length}
              </span>
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest">View Cart</span>
          </motion.div>
        )}
      </AnimatePresence>

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
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2.5 rounded-full border text-xs font-bold transition-all whitespace-nowrap shadow-sm
                  ${activeFilter === filter 
                    ? 'bg-indigo-600 border-indigo-600 text-white' 
                    : 'bg-white border-slate-200 text-slate-600 hover:border-indigo-500 hover:text-indigo-600'}`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Grid Layout */}
        <motion.div 
          layout 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((item) => (
              <motion.div 
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-[2rem] border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] overflow-hidden group transition-all duration-500 hover:shadow-2xl flex flex-col"
              >
                <div 
                  className="relative aspect-square p-8 bg-slate-50/50 flex items-center justify-center overflow-hidden cursor-pointer"
                  onClick={() => setSelectedProduct(item)} 
                >
                  <span className={`absolute top-5 left-5 z-10 px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest text-white shadow-lg
                    ${item.tag === 'Premium' ? 'bg-indigo-600' : 
                      item.tag === 'Featured' ? 'bg-black' : 
                      item.tag === 'Large Format' ? 'bg-emerald-600' : 
                      item.tag === 'Popular' ? 'bg-rose-500' : 'bg-slate-700'}`}>
                    {item.tag}
                  </span>
                  
                  <img src={item.img} alt={item.title} className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-700 ease-out" />
                  <div className="absolute inset-0 bg-indigo-600/0 group-hover:bg-indigo-600/10 transition-colors flex items-center justify-center">
                    <Info className="text-white opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-300" />
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-bold text-slate-800 text-[15px] leading-tight mb-4 h-10 line-clamp-2 transition-colors duration-300 group-hover:text-indigo-600">
                    {item.title}
                  </h3>
                  
                  <div className="mt-auto space-y-4 pt-4 border-t border-slate-50">
                    <div className="flex justify-between items-end">
                      <div className="space-y-1">
                        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Min. {item.qty} {item.qty > 1 ? 'Units' : 'Unit'}</p>
                        <p className="text-slate-900 font-black text-2xl tracking-tighter leading-none">{item.price}</p>
                      </div>
                    </div>

                    <motion.button 
                      onClick={() => setSelectedProduct(item)}
                      whileTap={{ scale: 0.95 }}
                      className="w-full py-3.5 bg-slate-900 group-hover:bg-indigo-600 text-white rounded-xl flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 shadow-xl shadow-slate-100"
                    >
                      View Details <ArrowRight size={14} strokeWidth={3} className="group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* --- POPUP / MODAL --- */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
            />
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative bg-white w-full max-w-2xl rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row"
            >
              <button 
                onClick={() => setSelectedProduct(null)}
                className="absolute top-6 right-6 z-20 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-slate-50 transition-colors text-slate-500"
              >
                <X size={20} />
              </button>

              <div className="md:w-1/2 bg-slate-50 flex items-center justify-center p-12">
                <img 
                  src={selectedProduct.img} 
                  alt={selectedProduct.title} 
                  className="w-full h-auto object-contain mix-blend-multiply"
                />
              </div>

              <div className="md:w-1/2 p-10 flex flex-col">
                <div className="mb-6">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full mb-4 inline-block">
                    {selectedProduct.category}
                  </span>
                  <h2 className="text-2xl font-black text-slate-900 leading-tight mb-4">
                    {selectedProduct.title}
                  </h2>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {selectedProduct.description}
                  </p>
                </div>

                <div className="mt-auto space-y-6">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Pricing starts from</p>
                      <p className="text-3xl font-black text-slate-900">{selectedProduct.price}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Min. Qty</p>
                      <p className="text-xl font-bold text-slate-900">{selectedProduct.qty}</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    {/* ADD TO CART OPTION */}
                    <motion.button 
                      whileTap={{ scale: 0.98 }}
                      onClick={() => addToCart(selectedProduct)}
                      className={`w-full py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all flex items-center justify-center gap-2 border-2 ${
                        isAdding 
                        ? 'bg-emerald-50 border-emerald-500 text-emerald-600' 
                        : 'bg-white border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white'
                      }`}
                    >
                      {isAdding ? (
                        <>Added to Cart <CheckCircle2 size={16} /></>
                      ) : (
                        <>Add to Cart <Plus size={16} /></>
                      )}
                    </motion.button>

                    {/* ORDER NOW BUTTON */}
                    <motion.button 
                      whileTap={{ scale: 0.98 }}
                      onClick={() => navigate('/contact')}
                      className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-100 flex items-center justify-center gap-2"
                    >
                      Order Now <ShoppingCart size={16} />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style>{`.no-scrollbar::-webkit-scrollbar { display: none; }`}</style>
    </section>
  );
}