import React, { useState } from 'react';
import { User, Mail, MessageSquare, Send, CheckCircle2, X } from 'lucide-react';
import {
  CONTACT_EMAIL,
  CONTACT_EMAIL_HREF,
  CONTACT_PHONE,
  CONTACT_PHONE_HREF,
  EXTERNAL_PHONE_LINK_PROPS,
} from '../../data/contact';

const SCRIPT_URL =
  '';
const GOOGLE_MAPS_URL = '';

export default function ContactFormSection() {
  const [ formData, setFormData ] = useState({ name: '', email: '', message: '' });
  const [ loading, setLoading ] = useState(false);
  const [ showPopup, setShowPopup ] = useState(false);
  const [ errorMessage, setErrorMessage ] = useState('');

  const updateField = (field) => (event) => {
    setFormData((current) => ({
      ...current,
      [ field ]: event.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    const payload = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      message: formData.message.trim(),
    };

    if (!payload.name || !payload.email || !payload.message) {
      setErrorMessage('Please fill out all fields before submitting.');
      setLoading(false);
      return;
    }

    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
        body: new URLSearchParams(payload).toString(),
      });

      setShowPopup(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('Contact form submission failed:', err);
      setErrorMessage('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 bg-[#edeff5] relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-12 items-start">

          {/* Left Info Box */ }
          <div className="lg:w-[40%] w-full bg-white p-14 rounded-sm shadow-[0_0_50px_rgba(0,0,0,0.04)] border border-slate-50 relative overflow-hidden">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 mb-8">
              <MessageSquare size={ 14 } className="text-blue-600" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600">Let's work </span>
            </div>

            <h3 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">Ready to help you!</h3>
            <p className="text-slate-500 mb-12 text-base leading-relaxed">
              We're here to help and answer any question you might have.
            </p>

            <div className="grid grid-cols-2 gap-y-10 gap-x-4">
              <div>
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2">Call us directly?</p>
                <a
                  href={ CONTACT_PHONE_HREF }
                  { ...EXTERNAL_PHONE_LINK_PROPS }
                  className="font-bold text-slate-900 hover:text-blue-600 transition-colors"
                >
                  { CONTACT_PHONE }
                </a>
              </div>
              <div>
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2">Need live support?</p>
                <a href={ CONTACT_EMAIL_HREF } className="font-bold text-slate-900 hover:text-blue-600 transition-colors">
                  { CONTACT_EMAIL }
                </a>
              </div>
              
              <div>
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2">Visit headquarters?</p>
                <a
                  href={ GOOGLE_MAPS_URL }
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold text-slate-900 border-b border-slate-900 pb-0.5 hover:text-blue-600 hover:border-blue-600 transition-all"
                >
                  View on google map
                </a>
              </div>
            </div>
          </div>

          {/* Right Form Section */ }
          <div className="lg:w-[60%] w-full lg:pl-10">
            <h2 className="text-5xl font-bold text-slate-900 mb-14 tracking-tight">Looking for any help?</h2>

            <form className="space-y-10" onSubmit={ handleSubmit }>
              <div className="relative group">
                <label className="text-[11px] font-bold text-slate-900 uppercase tracking-[0.2em] block mb-2">Enter your name*</label>
                <div className="relative">
                  <input
                    required
                    type="text"
                    value={ formData.name }
                    onChange={ updateField('name') }
                    placeholder="What's your good name?"
                    className="w-full py-4 bg-transparent border-b border-slate-200 focus:border-slate-400 outline-none transition-all text-slate-600"
                  />
                  <User size={ 18 } className="absolute right-0 top-4 text-slate-400 group-focus-within:text-slate-900 transition-colors" />
                </div>
              </div>

              <div className="relative group">
                <label className="text-[11px] font-bold text-slate-900 uppercase tracking-[0.2em] block mb-2">Email address*</label>
                <div className="relative">
                  <input
                    required
                    type="email"
                    value={ formData.email }
                    onChange={ updateField('email') }
                    placeholder="Enter your email address"
                    className="w-full py-4 bg-transparent border-b border-slate-200 focus:border-slate-900 outline-none transition-all text-slate-600"
                  />
                  <Mail size={ 18 } className="absolute right-0 top-4 text-slate-400 group-focus-within:text-slate-900 transition-colors" />
                </div>
              </div>

              <div className="relative group">
                <label className="text-[11px] font-bold text-slate-900 uppercase tracking-[0.2em] block mb-2">Your message</label>
                <div className="relative">
                  <textarea
                    rows="3"
                    value={ formData.message }
                    onChange={ updateField('message') }
                    placeholder="Describe about your project"
                    className="w-full py-4 bg-transparent border-b border-slate-200 focus:border-slate-900 outline-none transition-all text-slate-600 resize-none"
                  />
                  <MessageSquare size={ 18 } className="absolute right-0 top-4 text-slate-400 group-focus-within:text-slate-900 transition-colors" />
                </div>
              </div>

              { errorMessage ? (
                <p className="text-sm text-red-600">{ errorMessage }</p>
              ) : null }

              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pt-4">
                <p className="text-xs text-slate-400 max-w-[300px] leading-relaxed">
                  We will never collect information about you without your explicit consent.
                </p>
                <button
                  type="submit"
                  disabled={ loading }
                  className="group flex items-center gap-3 px-10 py-5 bg-[#232736] text-white rounded-md font-bold uppercase text-[10px] tracking-widest hover:bg-blue-600 transition-all duration-300 shadow-xl shadow-slate-200 disabled:opacity-50"
                >
                  { loading ? 'Sending...' : 'Send message' }
                  <Send size={ 14 } className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* --- GREETING POPUP MODAL --- */ }
      { showPopup && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-900/60 backdrop-blur-sm transition-opacity">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl relative animate-in fade-in zoom-in duration-300">
            <button
              onClick={ () => setShowPopup(false) }
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-900 transition-colors"
            >
              <X size={ 20 } />
            </button>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-6">
                <CheckCircle2 size={ 32 } />
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-2">Thank you for reaching out!</h3>
              <p className="text-slate-500 mb-8 leading-relaxed">
                Your message has been received. We value your feedback and our team will get back to you shortly.
              </p>

              <button
                onClick={ () => setShowPopup(false) }
                className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold uppercase text-xs tracking-widest hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
              >
                Close Greeting
              </button>
            </div>
          </div>
        </div>
      ) }
    </section>
  );
}