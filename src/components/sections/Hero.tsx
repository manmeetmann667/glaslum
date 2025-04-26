import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-24"
    >
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg)',
          filter: 'brightness(0.4)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/95 to-stone-950/70"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight reveal">
            Innovate Your Space with <span className="text-amber-500">Glaslum</span> Aluminum
          </h1>
          <p className="text-xl md:text-2xl text-stone-300 mt-6 mb-8 max-w-2xl reveal">
            Over 10 years of crafting premium aluminum windows and doors, trusted globally for quality and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 reveal">
            <Link to="/products" className="btn-primary">
              Explore Products
              <ArrowRight className="ml-2" size={18} />
            </Link>
            <Link to="/services" className="btn-secondary">
              Schedule Consultation
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 reveal">
            <div className="border-l-2 border-amber-500 pl-4">
              <div className="text-sm text-stone-400 uppercase tracking-wider">Quality</div>
              <div className="text-stone-100 mt-1">Uncompromising standards in every aluminum window</div>
            </div>
            <div className="border-l-2 border-amber-500 pl-4">
              <div className="text-sm text-stone-400 uppercase tracking-wider">Innovation</div>
              <div className="text-stone-100 mt-1">Next-gen designs for energy efficiency and style</div>
            </div>
            <div className="border-l-2 border-amber-500 pl-4">
              <div className="text-sm text-stone-400 uppercase tracking-wider">Global Reach</div>
              <div className="text-stone-100 mt-1">Trusted in 10+ countries with 10,000+ projects</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="text-amber-500"
        >
          <path 
            d="M12 5V19M12 19L19 12M12 19L5 12" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;