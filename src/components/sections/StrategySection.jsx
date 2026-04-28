import React from 'react';

export default function StrategySection() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-16">
        <div className="lg:w-1/2">
          <h2 className="text-5xl lg:text-7xl font-black text-slate-900 leading-tight tracking-tighter">
            We Print Cool Things <br /> & Create Design
          </h2>
          <div className="mt-8 space-y-4">
            {['Large paper & stock selection for unique print', 'Printing programs tailored to your company needs', 'High quality printing equipment'].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-indigo-500 flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <span className="text-slate-600 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="lg:w-1/2 relative">
          {/* Overlapping Brand Elements (Ref: image_22db96.png) */}
          <div className="relative w-full aspect-video rounded-[2rem] overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000" className="w-full h-full object-cover" alt="tech" />
          </div>
          {/* Yellow Swash Line */}
          <svg className="absolute -bottom-20 -left-20 w-64 h-64 opacity-20 text-yellow-400" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,100 C50,0 150,200 200,100" stroke="currentColor" strokeWidth="4" fill="none" />
          </svg>
        </div>
      </div>
    </section>
  );
}