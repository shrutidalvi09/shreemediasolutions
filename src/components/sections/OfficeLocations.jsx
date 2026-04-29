import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, ExternalLink } from 'lucide-react';
import {
  CONTACT_PHONE,
  CONTACT_PHONE_HREF,
  EXTERNAL_PHONE_LINK_PROPS,
} from '../../data/contact';

const GOOGLE_MAPS_URL = 'https://share.google/RKny5NxiMcvYVkEFo';

export default function OfficeLocations() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Side: Text Content */}
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-50 mb-8">
              <span className="text-blue-600 text-sm">💬</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600">
                Let's work together
              </span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 leading-[1.1] mb-8">
              Visit our main headquarters.
            </h2>
            
            <p className="text-slate-500 leading-relaxed mb-10 text-lg max-w-lg">
              Our central hub is located in the heart of the business district, 
              designed to foster innovation and seamless collaboration for our global partners.
            </p>

            <a
              href={ CONTACT_PHONE_HREF }
              { ...EXTERNAL_PHONE_LINK_PROPS }
              className="group relative inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-blue-700 to-blue-500 rounded-full text-white font-bold overflow-hidden transition-all hover:shadow-xl hover:scale-105"
            >
              <Phone size={18} className="group-hover:rotate-12 transition-transform" />
              <span>Schedule a call</span>
            </a>
          </div>

          {/* Right Side: Single Large Location Card */}
          <div className="lg:w-1/2 w-full">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-50"
            >
              {/* Image Header */}
              <div className="h-72 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200" 
                  alt="Headquarters" 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-2 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-wider text-slate-900 shadow-sm">
                    Headquarters
                  </span>
                </div>
              </div>

              {/* Details Content */}
              <div className="p-10 md:p-12">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h4 className="text-3xl font-bold text-slate-900 mb-2">Pune</h4>
                    <div className="flex items-start gap-2 text-slate-500">
                      <MapPin size={16} className="mt-1 flex-shrink-0 text-blue-600" />
                      <p className="leading-relaxed">
                        167 Hawthorne, Business Central,<br />
                        Manhattan, Pune, 11722
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="space-y-1">
                    <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Contact directly</p>
                    <div className="flex items-center gap-2 text-slate-900 font-bold text-lg">
                      <Phone size={16} className="text-blue-600" />
                      <a
                        href={ CONTACT_PHONE_HREF }
                        { ...EXTERNAL_PHONE_LINK_PROPS }
                        className="hover:text-blue-600 transition-colors"
                      >
                        { CONTACT_PHONE }
                      </a>
                    </div>
                  </div>

                  <a 
                    href={ GOOGLE_MAPS_URL }
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm font-bold text-blue-600 group"
                  >
                    <span>View on Google Maps</span>
                    <ExternalLink size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
