import { useState, useEffect } from "react";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import {
  PlayCircle,
  Menu,
  X,
  User,
  ShoppingCart,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useCart } from "../../context/CartContext";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

export default function IntegratedHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { totalItems } = useCart(); // ✅ FIXED
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "auto";
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 bg-[#0a0f1c]/80 backdrop-blur-xl border-b border-white/10 shadow-xl"
          : "py-6 bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between">
        
        {/* 🔹 Logo */}
        <Link to="/" className="flex-shrink-0 group">
          <div className="flex items-center gap-2.5">
            <div
              className={`p-2 rounded-xl ${
                scrolled
                  ? "bg-indigo-600"
                  : "bg-slate-900/10 backdrop-blur-md border border-white/20"
              }`}
            >
              <PlayCircle
                className={`w-5 h-5 ${
                  scrolled ? "text-white" : "text-slate-900"
                }`}
              />
            </div>

            <span
              className={`text-xl font-extrabold ${
                scrolled ? "text-white" : "text-slate-900"
              }`}
            >
              SHREE<span className="text-indigo-600">MEDIA</span>
            </span>
          </div>
        </Link>

        {/* 🔹 Desktop Nav */}
        <div
          className={`hidden lg:flex items-center gap-1 p-1 rounded-full border ${
            scrolled
              ? "bg-white/5 border-white/10"
              : "bg-slate-900/5 border-slate-950/5 backdrop-blur-md"
          }`}
        >
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to}>
              {({ isActive }) => (
                <div
                  className={`relative px-5 py-2 text-[13px] font-bold rounded-full ${
                    isActive
                      ? "text-white"
                      : scrolled
                      ? "text-white/60 hover:text-white"
                      : "text-slate-600 hover:text-slate-950"
                  }`}
                >
                  <span className="relative z-10">{link.label}</span>

                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className={`absolute inset-0 rounded-full ${
                        scrolled ? "bg-indigo-600" : "bg-slate-900"
                      }`}
                    />
                  )}
                </div>
              )}
            </NavLink>
          ))}
        </div>

        {/* 🔹 CTA Section */}
        <div className="flex items-center gap-4">

          {/* 🛒 Cart */}
          <button
            onClick={() => navigate("/cart")} // ✅ NAVIGATION
            className={`relative p-2.5 rounded-xl transition-all hover:scale-110 ${
              scrolled
                ? "bg-white/10 text-white hover:bg-indigo-600"
                : "bg-slate-900/5 text-slate-900 hover:bg-indigo-600 hover:text-white"
            }`}
          >
            <ShoppingCart size={18} />

            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] px-1.5 py-[1px] rounded-full font-bold">
                {totalItems}
              </span>
            )}
          </button>

          {/* 🔐 Login */}
          <button
            onClick={() => navigate("/login")}
            className={`flex items-center gap-2 text-[13px] font-black uppercase px-7 py-3 rounded-full ${
              scrolled
                ? "bg-white text-slate-900 hover:bg-indigo-600 hover:text-white"
                : "bg-indigo-600 text-white hover:bg-slate-900"
            }`}
          >
            <User size={14} strokeWidth={3} />
            Log in
          </button>

          {/* 📱 Mobile */}
          <button
            className="lg:hidden p-2.5 rounded-xl"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* 🔹 Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div className="lg:hidden bg-white p-6">
            {navLinks.map((link) => (
              <Link key={link.to} to={link.to}>
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}