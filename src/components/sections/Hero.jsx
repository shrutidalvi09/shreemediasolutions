import React, { useRef } from "react";
import {
  motion,
  useTransform,
  useSpring,
  useMotionValue,
} from "framer-motion";
import {
  ArrowUpRight,
  Hexagon,
  Zap,
  Globe,
  Palette,
  MousePointer2,
} from "lucide-react";
import { Link } from "react-router-dom";
import apparelImage from "../../assets/poster1.jpg";

export default function Hero() {
  const containerRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set(clientX / innerWidth - 0.5);
    mouseY.set(clientY / innerHeight - 0.5);
  };

  const spring = { damping: 25, stiffness: 120 };

  const rotateX = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [6, -6]),
    spring
  );
  const rotateY = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-6, 6]),
    spring
  );

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-screen bg-[#F8F9FB] overflow-hidden flex items-center pt-20"
    >
      {/* 🔹 Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-gradient-to-br from-indigo-100/50 to-transparent rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-1/4 w-[30%] h-[30%] bg-blue-50/50 rounded-full blur-[100px]" />

        <div
          className="absolute inset-0 opacity-[0.03] mix-blend-multiply"
          style={{
            backgroundImage:
              'url("https://www.transparenttextures.com/patterns/natural-paper.png")',
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* 🔥 LEFT SIDE (TYPOGRAPHY) */}
          <div className="lg:col-span-7">

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
            >
              {/* Label */}
              <div className="flex items-center gap-4 mb-8">
                <span className="h-[1px] w-16 bg-indigo-600"></span>
                <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-indigo-600/70">
                  Creative Media Studio
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-[3.5rem] sm:text-[4.5rem] md:text-[5.5rem] lg:text-[6.5rem] leading-[0.9] tracking-[-0.02em] text-slate-900">
                <span className="block font-light">
                  Where <span className="font-semibold">Precision</span>
                </span>

                <span className="block mt-2 font-light">
                  Meets{" "}
                  <span className="italic font-medium text-indigo-600">
                    Expression.
                  </span>
                </span>
              </h1>

              {/* Subtext */}
              <p className="mt-10 max-w-xl text-slate-500 text-[17px] md:text-lg leading-relaxed border-l-[3px] border-indigo-200 pl-6">
                We design tactile brand experiences where{" "}
                <span className="text-slate-800 font-medium">
                  visual elegance
                </span>{" "}
                meets{" "}
                <span className="text-slate-800 font-medium">
                  engineered precision
                </span>.
                <br className="hidden md:block" />
                Crafted for brands that demand distinction.
              </p>
            </motion.div>

            {/* Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Link to="/services">
                <button className="group px-10 py-5 bg-slate-900 text-white rounded-full font-semibold text-sm hover:bg-indigo-600 transition-all duration-500 flex items-center gap-3">
                  View Collection
                  <ArrowUpRight
                    size={18}
                    className="group-hover:rotate-45 transition-transform"
                  />
                </button>
              </Link>

              <Link to="/contact">
              <button className="px-10 py-5 bg-white border border-slate-200 text-slate-900 rounded-full font-semibold text-sm hover:border-indigo-600 transition-all duration-300">
               Contact Us
              </button>
              </Link>
            </motion.div>

            {/* Features */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-10">
              {[
                { icon: <Zap size={18} />, title: "Swift Delivery" },
                { icon: <Palette size={18} />, title: "Custom Finish" },
                { icon: <Globe size={18} />, title: "Global Reach" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="text-indigo-600">{item.icon}</div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 🎯 RIGHT SIDE (IMAGE) */}
          <div className="lg:col-span-5 relative">
            <motion.div
              style={{ rotateX, rotateY, perspective: 1000 }}
              className="relative z-10"
            >
              <div className="relative group overflow-hidden rounded-[2rem] bg-white p-4 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)]">
                <div className="overflow-hidden rounded-[1.5rem]">
                  <motion.img
                    src={apparelImage}
                    alt="preview"
                    className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition duration-1000"
                  />
                </div>

                {/* Floating Card */}
                <div className="absolute bottom-8 left-8 right-8 p-5 bg-white/80 backdrop-blur-md rounded-2xl flex justify-between items-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <div>
                    <p className="text-[10px] font-bold text-indigo-600 uppercase">
                      Current Exhibit
                    </p>
                    <p className="text-sm font-bold text-slate-900">
                      Premium Apparel Series
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-white">
                    <MousePointer2 size={16} />
                  </div>
                </div>
              </div>

              {/* Decor */}
              <motion.div
                style={{
                  y: useTransform(mouseY, [-0.5, 0.5], [20, -20]),
                }}
                className="absolute -top-6 -right-6 w-24 h-24 bg-indigo-600 rounded-3xl rotate-12 flex items-center justify-center shadow-xl"
              >
                <Hexagon className="text-white fill-white/20" size={32} />
              </motion.div>

              <div className="absolute -bottom-10 -left-10 w-40 h-40 border border-slate-200 rounded-full animate-[spin_10s_linear_infinite]" />
            </motion.div>
          </div>
        </div>

        {/* Trust Bar */}
        <div className="mt-24 pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-slate-400 text-sm italic">
            Trusted by industry leaders worldwide.
          </p>
          <div className="flex gap-10 opacity-30 grayscale">
            <h3 className="font-black text-xl">BRAND_A</h3>
            <h3 className="font-black text-xl">ESTATE_CO</h3>
            <h3 className="font-black text-xl">MODERN.</h3>
            <h3 className="font-black text-xl">STUDIO</h3>
          </div>
        </div>
      </div>
    </section>
  );
}