import React, { useEffect, useState } from 'react';
import { services } from '../data/services';
import ServiceCard from '../components/ui/ServiceCard';
import { revealElements } from '../utils/animations';

// Modal interface
interface ThankYouModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ThankYouModal: React.FC<ThankYouModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center">
      <div onClick={onClose} className="absolute inset-0" />
      <div className="relative bg-stone-900/90 text-stone-50 rounded-2xl p-10 max-w-md w-full shadow-lg border border-amber-500/20 z-10">
        <h2 className="text-3xl font-serif font-bold text-center mb-4">Thank You!</h2>
        <p className="text-lg text-stone-300 text-center">
          Your message has been received. Our team will reach out soon to explore how we can bring your vision to life!
        </p>
        <div className="mt-8 flex justify-center">
          <button
            onClick={onClose}
            className="bg-amber-500/10 text-amber-500 font-medium text-base px-6 py-3 rounded-lg border border-amber-500/30 hover:bg-amber-500/20 transition-all"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    document.title = 'Services | Glaslum Industries';
    const cleanupReveal = revealElements();
    return () => cleanupReveal();
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowModal(true);
  };

  // Filter out "White Glove Installation" and "Climate-Specific Engineering"
  const filteredServices = services.filter(
    service => 
      service.title !== 'White Glove Installation' && 
      service.title !== 'Climate-Specific Engineering'
  );

  return (
    <main>
      <section className="pt-40 pb-20 md:pt-48 md:pb-24 bg-gradient-to-b from-stone-950 to-stone-900">
        <div className="container-custom text-center max-w-3xl mx-auto reveal">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
            Our Premium <span className="text-amber-500">Services</span>
          </h1>
          <p className="text-xl text-stone-300">
            Discover our comprehensive range of window design, installation, and maintenance services tailored to your needs.
          </p>
        </div>
      </section>

      <section className="py-24 bg-stone-950/80">
        <div className="container-custom space-y-16">
          {filteredServices.map((service, index) => (
            <div key={service.id} className="reveal">
              <ServiceCard service={service} index={index} />
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-stone-900/80">
        <div className="container-custom text-center max-w-3xl mx-auto reveal">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Our <span className="text-amber-500">Guarantee</span>
          </h2>
          <p className="text-lg text-stone-300 mb-8">
            Every Glaslum window is backed by our comprehensive warranty and commitment to exceptional service.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-left">
            <div className="bg-stone-800/50 p-6 border-t-2 border-amber-500">
              <h3 className="text-xl font-medium text-stone-50 mb-3">20-Year Glass Warranty</h3>
              <p className="text-stone-300">Our premium glass is warranted against seal failure and material defects for two decades.</p>
            </div>
            <div className="bg-stone-800/50 p-6 border-t-2 border-amber-500">
              <h3 className="text-xl font-medium text-stone-50 mb-3">Lifetime Frame Warranty</h3>
              <p className="text-stone-300">Our aluminum frames are warranted against warping, cracking, and deterioration for life.</p>
            </div>
            <div className="bg-stone-800/50 p-6 border-t-2 border-amber-500">
              <h3 className="text-xl font-medium text-stone-50 mb-3">5-Year Installation Warranty</h3>
              <p className="text-stone-300">Our installation is warranted against workmanship defects for five years.</p>
            </div>
          </div>
        </div>
      </section>

      <ThankYouModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </main>
  );
};

export default Services;