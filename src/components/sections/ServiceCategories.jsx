import React from 'react';

// Asset Imports
import standy from '../../assets/standy.avif';
import letterhead from '../../assets/letterhead.jpg';
import flyer from '../../assets/flyer.webp';
import banner from '../../assets/banner1.jpg';
import idCard from '../../assets/idcard.webp'; 
import stamps from '../../assets/stamp.webp';
import certificate from '../../assets/certificate.jpg';
import businesscard from '../../assets/businesscard.jpg';

const categories = [
  { id: 1, name: 'Standy', image: standy },
  { id: 2, name: 'Letterhead', image: letterhead },
  { id: 3, name: 'Flyer', image: flyer },
  { id: 4, name: 'Banner', image: banner },
  { id: 5, name: 'ID Card', image: idCard },
  { id: 6, name: 'Stamps', image: stamps },
  { id: 7, name: 'Certificate', image: certificate },
  { id: 8, name: 'Business Card', image: businesscard },
];

const ServiceCategories = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Responsive Grid: Adjusts from 2 to 4 columns depending on screen size */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8 gap-8 justify-items-center">
          {categories.map((cat) => (
            <div 
              key={cat.id} 
              className="group flex flex-col items-center cursor-pointer"
            >
              {/* Circular Image Container */}
              <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300 ease-in-out bg-slate-50">
                <img 
                  src={cat.image} 
                  alt={cat.name} 
                  className="w-full h-full object-cover"
                />
                
                {/* Subtle blue overlay on hover */}
                <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Category Name */}
              <span className="mt-4 text-[13px] font-bold text-[#2d3a54] tracking-tight group-hover:text-blue-600 transition-colors">
                {cat.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;