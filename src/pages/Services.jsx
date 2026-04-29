import React from 'react';
import ServicesHero from '../components/sections/ServicesHero';
import ServiceCategories from '../components/sections/ServiceCategories';
import ProjectShowcase from '../components/sections/ProjectShowcase'; // NEW
import StrategySection from '../components/sections/StrategySection'; // NEW
import TechMarquee from '../components/sections/TechMarquee';
import CTASection from '../components/sections/CTASection';

export default function Services() {
  return (
    <main className="bg-white overflow-x-hidden"> 
      <div className="relative">
        <ServicesHero />
        {/* Absolute positioning to pull categories onto the blue wave */}
        
      </div>

      <ProjectShowcase />
      <StrategySection />
      
      <div className="bg-[#1a1a1a] py-4">
        <TechMarquee />
      </div>

      <CTASection />   
    </main>
  );
}