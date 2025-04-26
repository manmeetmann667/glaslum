import React, { useEffect } from 'react';
import Hero from '../components/sections/Hero';
import FeaturedProducts from '../components/sections/FeaturedProducts';
import Testimonials from '../components/sections/Testimonials';
import { products } from '../data/products';
import { testimonials } from '../data/testimonials';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { revealElements, parallaxEffect } from '../utils/animations';

const Home = () => {
  useEffect(() => {
    document.title = 'Glaslum Industries | Premium Aluminum Window Solutions';
    
    const cleanupReveal = revealElements();
    const cleanupParallax = parallaxEffect();
    
    return () => {
      cleanupReveal();
      cleanupParallax();
    };
  }, []);
  
  return (
    <main>
      <Hero />
      
      <FeaturedProducts products={products} />
      
      <section className="py-24 relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg)',
            filter: 'brightness(0.3)'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950/95 to-stone-950/70"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6 reveal">
              Innovating Spaces with <span className="text-amber-500">Aluminum Excellence</span>
            </h2>
            <p className="text-xl text-stone-300 mb-8 reveal">
              At Glaslum Industries, we redefine windows and doors with cutting-edge aluminum solutions, blending modern aesthetics, sustainability, and unmatched performance for global clients.
            </p>
            <Link to="/projects" className="btn-primary reveal">
              Discover Our Work
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
        </div>
      </section>
      
      <section className="py-24 bg-stone-950/80">
        <div className="container-custom">
          <div className="max-w-2xl mb-16 reveal">
            <h2 className="section-title">Why Choose Glaslum Industries</h2>
            <p className="text-stone-300">
              With over 10 years in the industry and more than 10,000 projects completed worldwide, we deliver aluminum windows and doors that set the standard for quality, innovation, and personalized service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card p-8 flex flex-col items-start reveal">
              <div className="w-16 h-16 rounded-full bg-amber-500/10 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 className="text-xl font-serif font-medium text-stone-50 mb-3">Exceptional Quality</h3>
              <p className="text-stone-300 mb-6">
                We use premium aluminum and advanced manufacturing to ensure every window meets our rigorous standards for durability and elegance.
              </p>
            </div>
            
            <div className="card p-8 flex flex-col items-start reveal">
              <div className="w-16 h-16 rounded-full bg-amber-500/10 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-serif font-medium text-stone-50 mb-3">Innovative Design</h3>
              <p className="text-stone-300 mb-6">
                Our solutions incorporate next-gen materials and smart technologies to push the boundaries of window and door design.
              </p>
            </div>
            
            <div className="card p-8 flex flex-col items-start reveal">
              <div className="w-16 h-16 rounded-full bg-amber-500/10 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
                </svg>
              </div>
              <h3 className="text-xl font-serif font-medium text-stone-50 mb-3">Personalized Service</h3>
              <p className="text-stone-300 mb-6">
                We tailor each project to your unique vision, offering attentive service from consultation to installation.
              </p>
            </div>
            
            <div className="card p-8 flex flex-col items-start reveal">
              <div className="w-16 h-16 rounded-full bg-amber-500/10 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-serif font-medium text-stone-50 mb-3">Energy Efficiency</h3>
              <p className="text-stone-300 mb-6">
                Our windows feature advanced thermal and acoustic technologies to enhance comfort and reduce energy costs.
              </p>
            </div>
            
            <div className="card p-8 flex flex-col items-start reveal">
              <div className="w-16 h-16 rounded-full bg-amber-500/10 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-serif font-medium text-stone-50 mb-3">Global Reach</h3>
              <p className="text-stone-300 mb-6">
                Trusted across continents, from Dubai to Brazil, our solutions elevate projects worldwide.
              </p>
            </div>
            
            <div className="card p-8 flex flex-col items-start reveal">
              <div className="w-16 h-16 rounded-full bg-amber-500/10 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-serif font-medium text-stone-50 mb-3">Certified Excellence</h3>
              <p className="text-stone-300 mb-6">
                Backed by certifications like ISO 9001, ISO 14001, and PAS 24, we ensure quality and compliance.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Testimonials testimonials={testimonials} />
      
      <section className="py-24 bg-stone-950/80">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <div className="grid grid-cols-2 gap-4 reveal">
                <img 
                  src="https://images.pexels.com/photos/4050318/pexels-photo-4050318.jpeg" 
                  alt="Interior with large windows" 
                  className="rounded-tr-3xl object-cover h-64"
                />
                <img 
                  src="https://images.pexels.com/photos/6267559/pexels-photo-6267559.jpeg" 
                  alt="Luxury window detail" 
                  className="rounded-bl-3xl object-cover h-64"
                />
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="section-title reveal">Start Your Glaslum Journey</h2>
              <p className="text-stone-300 mb-8 reveal">
                Ready to transform your space with innovative aluminum windows? Our team is here to bring your vision to life with precision and care.
              </p>
              <Link to="/services" className="btn-primary reveal">
                Schedule a Consultation
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;