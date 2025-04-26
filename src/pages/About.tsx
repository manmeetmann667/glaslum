import React, { useEffect } from 'react';
import { ArrowRight, BadgeCheck, CheckCircle, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { revealElements } from '../utils/animations';

const About = () => {
  useEffect(() => {
    document.title = 'About Us | Glaslum Industries';
    
    const cleanupReveal = revealElements();
    
    return () => {
      cleanupReveal();
    };
  }, []);
  
  return (
    <main>
      <section className="pt-40 pb-20 md:pt-48 md:pb-24 bg-gradient-to-b from-stone-950 to-stone-900">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center reveal">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
              Our <span className="text-amber-500">Story</span>
            </h1>
            <p className="text-xl text-stone-300">
              Excellence forged in aluminum. Globally trusted. Technologically driven.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-24 bg-stone-950/80">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 reveal">
              <h2 className="section-title mb-6">Who We Are</h2>
              <p className="text-stone-300 mb-6">
                Glaslum Industries is a UK-based leader in high-quality aluminum windows and doors.
                We fuse modern aesthetics with enduring performance for residential, commercial,
                and industrial clients worldwide.
              </p>
              <p className="text-stone-300 mb-6">
                Backed by sustainable practices and next-gen materials, our solutions offer unmatched
                energy efficiency, safety, and elegance.
              </p>
              <p className="text-stone-300">
                With over 10 years in the industry and more than 10,000 projects completed, our commitment to uncompromising quality, meticulous craftsmanship, and personalized service remains unchanged. Each window that bears the Glaslum name represents our unwavering dedication to excellence.
              </p>
            </div>
            <div className="order-1 lg:order-2 reveal">
              <img 
                src="https://www.glasxperts.com/wp-content/uploads/2022/09/Image-18.jpg" 
                alt="Craftsman working on window" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-24 bg-stone-900/80">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16 reveal">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Our <span className="text-amber-500">Values</span>
            </h2>
            <p className="text-lg text-stone-300">
              These core principles guide everything we do, from design and manufacturing to installation and service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-8 reveal">
              <div className="w-16 h-16 rounded-full bg-amber-500/10 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-serif font-medium text-stone-50 mb-3">Exceptional Quality</h3>
              <p className="text-stone-300">
                We never compromise on materials, craftsmanship, or attention to detail. Every component must meet our exacting standards.
              </p>
            </div>
            
            <div className="card p-8 reveal">
              <div className="w-16 h-16 rounded-full bg-amber-500/10 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-serif font-medium text-stone-50 mb-3">Innovative Design</h3>
              <p className="text-stone-300">
                We continuously explore new technologies, materials, and design approaches to push the boundaries of what's possible.
              </p>
            </div>
            
            <div className="card p-8 reveal">
              <div className="w-16 h-16 rounded-full bg-amber-500/10 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"></path>
                </svg>
              </div>
              <h3 className="text-xl font-serif font-medium text-stone-50 mb-3">Personalized Service</h3>
              <p className="text-stone-300">
                We believe in building lasting relationships with our clients through attentive, personalized service at every stage.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-24 bg-stone-950/80">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16 reveal">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Our <span className="text-amber-500">Certifications</span>
            </h2>
            <p className="text-lg text-stone-300">
              Our commitment to quality and compliance is recognized through industry-leading certifications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "ISO 9001", desc: "Quality Management System" },
              { title: "ISO 14001", desc: "Environmental Management System" },
              { title: "CE Marking", desc: "European compliance" },
              { title: "PAS 24", desc: "Enhanced window/door security" },
              { title: "Secured by Design", desc: "Police-backed crime prevention" },
            ].map((item, idx) => (
              <div key={idx} className="card p-8 reveal">
                <div className="w-16 h-16 rounded-full bg-amber-500/10 flex items-center justify-center mb-6">
                  <BadgeCheck className="w-8 h-8 text-amber-500" />
                </div>
                <h3 className="text-xl font-serif font-medium text-stone-50 mb-3">{item.title}</h3>
                <p className="text-stone-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-24 bg-stone-900/80">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16 reveal">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Our <span className="text-amber-500">Global Partnerships</span>
            </h2>
            <p className="text-lg text-stone-300">
              Collaboration is at the core of Glaslum's innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              ["Aluminum Suppliers", "Top-grade raw aluminum from elite manufacturers."],
              ["Glass Manufacturers", "Glazing excellence from the world’s finest."],
              ["Tech & Innovation Partners", "Smart thermal, acoustic, and automation features."],
            ].map(([title, desc], idx) => (
              <div key={idx} className="card p-8 reveal">
                <div className="w-16 h-16 rounded-full bg-amber-500/10 flex items-center justify-center mb-6">
                  <Globe className="w-8 h-8 text-amber-500" />
                </div>
                <h3 className="text-xl font-serif font-medium text-stone-50 mb-3">{title}</h3>
                <p className="text-stone-300">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-24 bg-stone-950/80">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16 reveal">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Our <span className="text-amber-500">Global Footprint</span>
            </h2>
            <p className="text-lg text-stone-300">
              At Glaslum Industries, our reach extends across continents, bridging cultures and industries. Our global presence is a testament to our commitment to excellence, driving innovation, and delivering world-class solutions in every corner of the globe.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              "Spain", "China", "Dubai", "Bali", "Almaty", 
              "Bangkok", "Bangladesh", "Bhutan", "Brazil", "Korea"
            ].map((location, idx) => (
              <div key={idx} className="card p-8 reveal">
                <div className="w-16 h-16 rounded-full bg-amber-500/10 flex items-center justify-center mb-6">
                  <Globe className="w-8 h-8 text-amber-500" />
                </div>
                <h3 className="text-xl font-serif font-medium text-stone-50 mb-3">{location}</h3>
                <p className="text-stone-300">Setting standards in quality and innovation.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-24 bg-stone-900/80">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16 reveal">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Licenses & <span className="text-amber-500">Royalties</span>
            </h2>
            <p className="text-lg text-stone-300">
              Our licensing program ensures consistency and excellence across our operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-8 reveal">
              <div className="w-16 h-16 rounded-full bg-amber-500/10 flex items-center justify-center mb-6">
                <CheckCircle className="w-8 h-8 text-amber-500" />
              </div>
              <h3 className="text-xl font-serif font-medium text-stone-50 mb-3">Franchise License</h3>
              <p className="text-stone-300">
                Trade under the Glaslum name with full support.
              </p>
            </div>
            
            <div className="card p-8 reveal">
              <div className="w-16 h-16 rounded-full bg-amber-500/10 flex items-center justify-center mb-6">
                <CheckCircle className="w-8 h-8 text-amber-500" />
              </div>
              <h3 className="text-xl font-serif font-medium text-stone-50 mb-3">Branding Access</h3>
              <p className="text-stone-300">
                Utilize Glaslum’s branding and marketing materials.
              </p>
            </div>
            
            <div className="card p-8 reveal">
              <div className="w-16 h-16 rounded-full bg-amber-500/10 flex items-center justify-center mb-6">
                <CheckCircle className="w-8 h-8 text-amber-500" />
              </div>
              <h3 className="text-xl font-serif font-medium text-stone-50 mb-3">Operational Standards</h3>
              <p className="text-stone-300">
                Adhere to Glaslum’s design and operational guidelines.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-24 bg-stone-950/80">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16 reveal">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Our <span className="text-amber-500">Process</span>
            </h2>
            <p className="text-lg text-stone-300">
              From initial consultation to final installation, our comprehensive process ensures that every detail of your window design is executed with precision and care.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-stone-900/50 p-8 border-t-2 border-amber-500 reveal">
              <div className="text-5xl font-serif text-amber-500 mb-4">01</div>
              <h3 className="text-xl font-serif font-medium text-stone-50 mb-3">Consultation</h3>
              <p className="text-stone-300">
                We begin with a detailed consultation to understand your vision, architectural requirements, and performance needs.
              </p>
            </div>
            
            <div className="bg-stone-900/50 p-8 border-t-2 border-amber-500 reveal">
              <div className="text-5xl font-serif text-amber-500 mb-4">02</div>
              <h3 className="text-xl font-serif font-medium text-stone-50 mb-3">Design</h3>
              <p className="text-stone-300">
                Our designers create detailed renderings and specifications for your custom window solutions.
              </p>
            </div>
            
            <div className="bg-stone-900/50 p-8 border-t-2 border-amber-500 reveal">
              <div className="text-5xl font-serif text-amber-500 mb-4">03</div>
              <h3 className="text-xl font-serif font-medium text-stone-50 mb-3">Crafting</h3>
              <p className="text-stone-300">
                Master craftsmen handcraft your windows with precision engineering and meticulous attention to detail.
              </p>
            </div>
            
            <div className="bg-stone-900/50 p-8 border-t-2 border-amber-500 reveal">
              <div className="text-5xl font-serif text-amber-500 mb-4">04</div>
              <h3 className="text-xl font-serif font-medium text-stone-50 mb-3">Installation</h3>
              <p className="text-stone-300">
                Our expert installation team ensures your windows are perfectly fitted for optimal performance and beauty.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-24 bg-stone-900/80">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2 reveal">
              <h2 className="section-title mb-6">Ready to Transform Your Space?</h2>
              <p className="text-stone-300 mb-6">
                Contact our team today to schedule a consultation and discover how our luxury window solutions can elevate your home or project.
              </p>
              <Link to="/contact" className="btn-primary">
                Contact Us
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </div>
            
            <div className="md:w-1/2 grid grid-cols-2 gap-4 reveal">
              <img 
                src="https://mccoymart.com/uploads/desingPost/2018/04/thumbnail/d541f33d93e86a9b9e934f5aa2c69849.webp" 
                alt="Window installation" 
                className="w-full h-64 object-cover object-center"
              />
              <img 
                src="https://image.made-in-china.com/318f0j00jEwGvsSlMHqZ/ModernResidentialHurricaneImpactDoubleTemperedGlassAluminiumProfilesFixedCasementSlidingWindowsPricesForHouses-BuyTemperedGlassWindow-PricesAluminiumFixedWindow-AluminumWindowProfilesProductonAliba-mp4.webp" 
                alt="Architectural detail" 
                className="w-full h-64 object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;