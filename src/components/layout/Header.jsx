import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { 
  Search, 
  ShoppingCart, 
  Bell, 
  ChevronDown, 
  PlayCircle, 
  Menu, 
  X,
  ArrowRight
} from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

const navLinks = [
  { to: '/', label: 'Home', hasDropdown: false },
  { to: '/services', label: 'Services', hasDropdown: true },
  { to: '/portfolio', label: 'Portfolio', hasDropdown: true },
  { to: '/blog', label: 'Insights', hasDropdown: false },
  { to: '/resources', label: 'Resources', hasDropdown: false },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isSearchFocused, setIsSearchFocused] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 px-6 ${
        scrolled 
          ? 'py-3 bg-[#0a0f1c]/80 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]' 
          : 'py-5 bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="max-w-[1440px] mx-auto flex items-center justify-between gap-8">
        
        {/* 1. Brand Logo */}
        <Link to="/" className="flex-shrink-0 group relative">
          <div className="flex flex-col items-start">
            <span className="text-xl md:text-2xl font-black text-white tracking-tighter flex items-center">
              <motion.div 
                whileHover={{ rotate: 180 }}
                className="bg-gradient-to-tr from-indigo-600 to-violet-500 p-1.5 rounded-xl mr-2 shadow-lg shadow-indigo-500/20"
              >
                <PlayCircle className="w-5 h-5 text-white" />
              </motion.div>
              SHREE<span className="text-indigo-400 group-hover:text-white transition-colors">MEDIA</span>
            </span>
            <span className="text-[10px] text-indigo-300/60 uppercase tracking-[0.25em] font-bold leading-none mt-1 ml-1 group-hover:text-indigo-300 transition-colors">
              Digital Excellence
            </span>
          </div>
        </Link>

        {/* 2. Desktop Navigation */}
        <div className="hidden xl:flex items-center gap-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'} 
              className={({ isActive }) => `relative px-4 py-2 text-[14px] font-bold transition-all duration-300 rounded-full group ${
                isActive ? 'text-white' : 'text-white/60 hover:text-white'
              }`}
            >
              {({ isActive }) => (
                <>
                  <span className="flex items-center gap-1.5 relative z-10">
                    {link.label}
                    {link.hasDropdown && (
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isActive ? 'rotate-180' : 'group-hover:translate-y-0.5'}`} />
                    )}
                  </span>
                  {isActive && (
                    <motion.div 
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-white/10 border border-white/10 rounded-full z-0"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* 3. Search Engine - Enhanced Focus State */}
        <div className={`hidden lg:flex flex-grow max-w-md transition-all duration-500 ${isSearchFocused ? 'max-w-lg' : ''}`}>
          <div className={`relative w-full flex items-center bg-white/[0.03] hover:bg-white/[0.06] border transition-all rounded-full p-1 group ${isSearchFocused ? 'border-indigo-500/50 bg-white/[0.08] shadow-[0_0_20px_rgba(99,102,241,0.15)]' : 'border-white/10'}`}>
            <button className="flex items-center gap-2 px-5 text-white/40 hover:text-white transition-colors text-[11px] font-bold uppercase tracking-widest">
              Explore
              <ChevronDown className="w-3 h-3" />
            </button>
            <input 
              type="text" 
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
              placeholder="Search services..." 
              className="w-full bg-transparent px-4 py-1.5 text-[14px] text-white placeholder:text-white/30 focus:outline-none"
            />
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-indigo-600 hover:bg-indigo-500 p-2.5 rounded-full transition-all shadow-lg shadow-indigo-600/30"
            >
              <Search className="w-4 h-4 text-white" />
            </motion.button>
          </div>
        </div>

        {/* 4. Action Cluster */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-4 border-r border-white/10 pr-4">
            <button className="p-2 text-white/60 hover:text-white hover:bg-white/5 rounded-xl transition-all relative group">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute top-1 right-1 bg-indigo-500 text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center text-white ring-2 ring-[#0a0f1c] group-hover:scale-110 transition-transform">
                0
              </span>
            </button>
            <button className="p-2 text-white/60 hover:text-white hover:bg-white/5 rounded-xl transition-all">
              <Bell className="w-5 h-5 animate-pulse" />
            </button>
          </div>

          <div className="flex items-center gap-3">
            <Link 
              to="/login" 
              className="hidden md:block text-white/80 hover:text-white text-[13px] font-bold px-4 py-2 transition-colors"
            >
              Sign In
            </Link>
            <Link 
              to="/get-started" 
              className="relative bg-white text-indigo-700 text-[13px] font-bold px-6 py-2.5 rounded-xl overflow-hidden group shadow-lg shadow-white/5"
            >
              <span className="relative z-10 flex items-center gap-2 transition-transform group-hover:gap-3">
                Get Started
                <ArrowRight className="w-4 h-4" />
              </span>
              <div className="absolute inset-0 bg-indigo-50 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300" />
            </Link>
          </div>

          {/* Mobile UI */}
          <button 
            className="xl:hidden text-white p-2.5 bg-white/5 hover:bg-white/10 rounded-xl transition-all"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Expansion - Staggered Motion */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-[#0a1120] border-t border-white/5 mt-4 rounded-3xl overflow-hidden shadow-3xl"
          >
            <div className="flex flex-col p-8 gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={link.to}
                >
                  <Link 
                    to={link.to} 
                    onClick={() => setMobileMenuOpen(false)}
                    className="group text-white/70 hover:text-white text-2xl font-bold flex justify-between items-center transition-colors"
                  >
                    {link.label}
                    <ArrowRight className="w-5 h-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-indigo-400" />
                  </Link>
                </motion.div>
              ))}
              
              <div className="h-px bg-white/5 my-2" />
              
              <div className="grid grid-cols-2 gap-4">
                <Link to="/login" className="py-4 text-center text-white/60 font-bold border border-white/10 rounded-2xl hover:bg-white/5">
                  Sign In
                </Link>
                <Link to="/get-started" className="py-4 text-center bg-indigo-600 text-white font-bold rounded-2xl">
                  Register
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}