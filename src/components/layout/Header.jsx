import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { 
  ChevronDown, 
  PlayCircle, 
  Menu, 
  X,
  ArrowRight,
  Globe
} from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Products'},
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
]

export default function IntegratedHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    // We trigger the scroll effect a bit later to let the hero breathe
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-in-out ${
        scrolled 
          ? 'py-3 bg-[#0a0f1c]/70 backdrop-blur-xl border-b border-white/10 shadow-xl' 
          : 'py-6 bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between">
        
        {/* 1. Brand Logo - More Compact */}
        <Link to="/" className="flex-shrink-0 group">
          <div className="flex items-center gap-2.5">
            <div className={`relative p-2 rounded-xl transition-all duration-500 ${
              scrolled ? 'bg-indigo-600' : 'bg-slate-900/10 backdrop-blur-md border border-white/20'
            }`}>
              <PlayCircle className={`w-5 h-5 transition-colors ${scrolled ? 'text-white' : 'text-slate-900'}`} />
            </div>
            <span className={`text-xl font-extrabold tracking-tighter transition-colors duration-500 ${
              scrolled ? 'text-white' : 'text-slate-900'
            }`}>
              SHREE<span className="text-indigo-600">MEDIA</span>
            </span>
          </div>
        </Link>

        {/* 2. Professional Navigation - Floating Pill Effect */}
        <div className={`hidden lg:flex items-center gap-1 p-1 rounded-full border transition-all duration-500 ${
          scrolled 
            ? 'bg-white/5 border-white/10' 
            : 'bg-slate-900/5 border-slate-950/5 backdrop-blur-md'
        }`}>
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => `relative px-5 py-2 text-[13px] font-bold tracking-wide transition-all duration-300 rounded-full group ${
                isActive 
                  ? 'text-white' 
                  : (scrolled ? 'text-white/60 hover:text-white' : 'text-slate-600 hover:text-slate-950')
              }`}
            >
              {({ isActive }) => (
                <>
                  <span className="flex items-center gap-1 relative z-10">
                    {link.label}
                    {link.hasDropdown && <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform" />}
                  </span>
                  {isActive && (
                    <motion.div 
                      layoutId="nav-pill"
                      className={`absolute inset-0 rounded-full z-0 ${
                        scrolled ? 'bg-indigo-600' : 'bg-slate-900'
                      }`}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* 3. CTA Cluster */}
        <div className="flex items-center gap-4">
          

          <Link 
            to="/get-started" 
            className={`text-[13px] font-bold px-6 py-2.5 rounded-full transition-all duration-300 ${
              scrolled 
                ? 'bg-white text-slate-900 hover:bg-indigo-500 hover:text-white' 
                : 'bg-indigo-600 text-white hover:bg-slate-900 shadow-lg shadow-indigo-200'
            }`}
          >
            Login
          </Link>

          <button 
            className={`lg:hidden p-2.5 rounded-xl transition-all ${
              scrolled ? 'bg-white/10 text-white' : 'bg-slate-900/5 text-slate-900'
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`lg:hidden overflow-hidden transition-colors duration-500 ${
              scrolled ? 'bg-[#0a0f1c] border-b border-white/10' : 'bg-white border-b border-slate-100'
            }`}
          >
            <div className="p-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.to}
                  to={link.to} 
                  className={`text-2xl font-bold ${scrolled ? 'text-white/80' : 'text-slate-900'}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/get-started" className="w-full py-4 bg-indigo-600 text-white text-center rounded-2xl font-bold">
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}