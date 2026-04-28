import React from 'react';
import { Link } from 'react-router-dom';
import {
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  Phone,
  Mail,
  MapPin,
} from 'lucide-react';

const serviceLinks = [
  { to: '/services#digital-print', label: 'Digital Print' },
  { to: '/services#doc-print', label: 'Doc Print' },
  { to: '/services#shirt-print', label: 'Shirt Print' },
  { to: '/services#sticker-print', label: 'Sticker Print' },
];

const legalLinks = [
  { to: '/terms', label: 'Terms Of Use' },
  { to: '/privacy', label: 'Privacy Policy' },
];

const socialLinks = [
  { href: 'https://instagram.com', icon: <Instagram size={18} /> },
  { href: 'https://facebook.com', icon: <Facebook size={18} /> },
  { href: 'https://youtube.com', icon: <Youtube size={18} /> },
  { href: 'https://twitter.com', icon: <Twitter size={18} /> },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#5c51ac] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top Logo Section */}
        <div className="flex flex-col items-center mb-10">
          <div className="flex items-center gap-2 mb-4">
            {/* Simple representation of the Rona/Shree logo */}
            <div className="w-10 h-10 bg-gradient-to-tr from-yellow-400 via-green-400 to-blue-500 rounded-full flex items-center justify-center">
               <span className="text-white font-bold text-xl">S</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight">ShreeMediaSolutions</h2>
          </div>
          <hr className="w-full border-white/20" />
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Services</h4>
            <ul className="space-y-3 opacity-80 text-sm">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="hover:underline">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Links</h4>
            <ul className="space-y-3 opacity-80 text-sm">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="hover:underline">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4 opacity-80 text-sm">
              <li className="flex items-center gap-3">
                <Phone size={16} />
                <span>+14 5464 8272</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} />
                <span>info@shreemediasolutions.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>George Tower 192, Burn Swiss</span>
              </li>
            </ul>
          </div>

          {/* Maps Placeholder */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Maps</h4>
            <div className="w-full aspect-video bg-white/10 rounded overflow-hidden">
               {/* Replace this div with an actual Google Maps iframe if needed */}
               <div className="w-full h-full grid grid-cols-4 grid-rows-2">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className={i % 2 === 0 ? 'bg-black' : 'bg-white'}></div>
                  ))}
               </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Social Media</h4>
            <div className="flex gap-3">
              {socialLinks.map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.href} 
                  className="w-8 h-8 rounded-full bg-white text-[#5c51ac] flex items-center justify-center transition-transform hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-white/20 pt-8 text-center text-sm opacity-70">
          <p>copyright shreemediasolutions@{currentYear} all right reserved</p>
        </div>
      </div>
    </footer>
  );
}