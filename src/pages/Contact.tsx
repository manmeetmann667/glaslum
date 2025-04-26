import React, { useEffect } from 'react';
import ContactSection from '../components/sections/ContactSection';
import { revealElements } from '../utils/animations';

const Contact = () => {
  useEffect(() => {
    document.title = 'Contact Us | LUXE Windows';
    
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
              Get In <span className="text-amber-500">Touch</span>
            </h1>
            <p className="text-xl text-stone-300">
              Our team of window design specialists is ready to answer your questions and help you find the perfect solution.
            </p>
          </div>
        </div>
      </section>
      
      <ContactSection />
      
      <section className="py-16 bg-stone-950/80">
        <div className="container-custom">
          <div className="card p-8 md:p-12 max-w-4xl mx-auto reveal">
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-center">Visit Our Showroom</h2>
            <p className="text-stone-300 mb-8 text-center">
              Experience our luxury window collections in person at our state-of-the-art showroom. Our design specialists will guide you through our displays and help you envision the possibilities for your space.
            </p>
            <div className="bg-stone-800/50 p-4">
              {/* This would be replaced with an actual map integration */}
              <div className="bg-stone-700 w-full h-96 flex items-center justify-center">
                <p className="text-stone-300">Interactive Map Would Be Displayed Here</p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-amber-500 font-medium">1250 Luxury Avenue, Suite 300, Beverly Hills, CA 90210</p>
              <p className="text-stone-300 mt-2">
                Monday - Friday: 9AM - 6PM<br />
                Saturday: 10AM - 4PM<br />
                Sunday: By appointment
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;