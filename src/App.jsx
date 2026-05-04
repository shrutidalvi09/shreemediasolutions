import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

// Layout & Components
import IntegratedHeader from './components/layout/Header';
import Footer from './components/layout/Footer';

// Pages
import Home from './pages/Home';

import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Cart from "./pages/Cart"; 


// --- AUTH PAGES IMPORT ---
import Login from './components/layout/Login';   // Ensure the filename is Login.jsx
import Signup from './components/layout/Signup'; // Ensure the filename is Signup.jsx
import ForgotPassword from './components/layout/ForgotPassword'; // Import the new file

// Helper component to force scroll to top
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div className="bg-white text-slate-900 selection:bg-blue-100">
      <ScrollToTop />
      
      {/* Navigation */}
      <IntegratedHeader />
      
      <main>
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Home />} />
          
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          
          {/* --- AUTHENTICATION ROUTES --- */}
          {/* This path matches the navigate('/login') in your Header */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          {/* Optional: Redirect "/get-started" to login if you still use that link elsewhere */}
          <Route path="/get-started" element={<Login />} />
          <Route path="/cart" element={<Cart />} />

        </Routes>
      </main>

      <Footer />
    </div>
  );
}