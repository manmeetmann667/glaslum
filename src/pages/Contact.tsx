import React, { useEffect, useState } from 'react';
import { Globe } from 'lucide-react';
import { revealElements } from '../utils/animations';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix Leaflet marker icon issue
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

// Define location data with proper tuple typing
const locations: {
  name: string;
  coords: [number, number];
  desc: string;
}[] = [
  { name: 'Spain', coords: [40.4168, -3.7038], desc: 'In Madrid, we collaborate with top architects to craft energy-efficient windows for modern residences.' },
  { name: 'China', coords: [31.2304, 121.4737], desc: 'Our Shanghai hub drives innovation in smart window technologies for commercial skyscrapers.' },
  { name: 'Dubai', coords: [25.276987, 55.296249], desc: 'In Dubai, we supply premium aluminum solutions for iconic high-rise developments.' },
  { name: 'Bali', coords: [-8.3405, 115.0920], desc: 'Our Bali operations focus on sustainable designs for luxury resorts and eco-friendly villas.' },
  { name: 'Almaty', coords: [43.2220, 76.8512], desc: 'In Almaty, we provide robust windows for harsh climates, enhancing residential comfort.' },
  { name: 'Bangkok', coords: [13.7563, 100.5018], desc: 'Our Bangkok office supports urban projects with sleek, noise-reducing window systems.' },
  { name: 'Bangladesh', coords: [23.8103, 90.4125], desc: 'In Dhaka, we partner with developers to deliver affordable, durable windows for growing cities.' },
  { name: 'Bhutan', coords: [27.5142, 89.6393], desc: 'In Thimphu, we create culturally inspired designs for sustainable public buildings.' },
  { name: 'Brazil', coords: [-23.5505, -46.6333], desc: 'Our São Paulo branch specializes in vibrant, custom windows for Latin American markets.' },
  { name: 'Korea', coords: [37.5665, 126.9780], desc: 'In Seoul, we integrate cutting-edge automation into windows for tech-driven spaces.' },
];

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

const ServicesAfterGuarantee: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const cleanupReveal = revealElements();
    return () => cleanupReveal();
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowModal(true);
  };

  return (
    <main>
      <section className="py-24 bg-stone-950/80">
        <div className="container-custom max-w-4xl mx-auto text-center reveal">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Our <span className="text-amber-500">Global Footprint</span>
          </h2>
          <p className="text-lg text-stone-300 mb-8 max-w-2xl mx-auto">
            Glaslum Industries spans the globe, delivering aluminum window solutions across diverse cultures and climates.
          </p>
          <div className="bg-stone-800/50 p-6 rounded-lg shadow-lg">
            <MapContainer
              center={[20, 0]}
              zoom={2}
              style={{ height: '400px', width: '100%' }}
              className="rounded-lg"
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              />
              {locations.map((location, index) => (
                <Marker key={index} position={location.coords}>
                  <Popup>
                    <div className="text-center">
                      <h3 className="font-semibold">{location.name}</h3>
                      <p className="text-sm">{location.desc}</p>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
            <div className="mt-6 text-left">
              <h3 className="text-xl font-medium text-stone-50 mb-4">Our Locations</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {locations.map((location, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Globe className="w-5 h-5 text-amber-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-stone-50">{location.name}</h4>
                      <p className="text-sm text-stone-300">{location.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-stone-900/80">
        <div className="container-custom max-w-2xl mx-auto text-center reveal">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Let Us Bring Your Vision to Life
          </h2>
          <p className="text-lg text-stone-300 mb-8">
            Contact us for personalized consultations, quotes, and project inquiries.
          </p>

          <form
  action="https://formspree.io/f/mldbjkkb"
  method="POST"
  className="space-y-6"
  target="_blank"
>
  <input type="hidden" name="_captcha" value="false" />
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div>
      <label htmlFor="name" className="block text-sm font-medium text-stone-50 mb-2">Full Name</label>
      <input
        type="text"
        id="name"
        name="name"
        required
        className="w-full px-4 py-3 bg-stone-800/50 text-stone-50 border border-stone-700/50 rounded-lg focus:outline-none focus:border-amber-500 transition-all"
      />
    </div>
    <div>
      <label htmlFor="email" className="block text-sm font-medium text-stone-50 mb-2">Email Address</label>
      <input
        type="email"
        id="email"
        name="email"
        required
        className="w-full px-4 py-3 bg-stone-800/50 text-stone-50 border border-stone-700/50 rounded-lg focus:outline-none focus:border-amber-500 transition-all"
      />
    </div>
    <div className="md:col-span-2">
      <label htmlFor="phone" className="block text-sm font-medium text-stone-50 mb-2">Contact Number</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        required
        className="w-full px-4 py-3 bg-stone-800/50 text-stone-50 border border-stone-700/50 rounded-lg focus:outline-none focus:border-amber-500 transition-all"
      />
    </div>

    <div className="md:col-span-2">
      <label htmlFor="designation" className="block text-sm font-medium text-stone-50 mb-2">Who Are You?</label>
      <select
        id="designation"
        name="designation"
        required
        className="w-full px-4 py-3 bg-stone-800/50 text-stone-50 border border-stone-700/50 rounded-lg focus:outline-none focus:border-amber-500 transition-all"
      >
        <option value="">Select your  role</option>
        <option value="Designer">Designer</option>
        <option value="Builder">Builder</option>
        <option value="Architect">Architect</option>
        <option value="Homeowner">Homeowner</option>
        <option value="Contractor">Contractor</option>
        <option value="Other">Other</option>
      </select>
    </div>

    <div className="md:col-span-2">
      <label htmlFor="description" className="block text-sm font-medium text-stone-50 mb-2">Tell Us More</label>
      <textarea
        id="description"
        name="description"
        rows={5}
        placeholder="Briefly describe your inquiry, project details, or how we can help..."
        className="w-full px-4 py-3 bg-stone-800/50 text-stone-50 border border-stone-700/50 rounded-lg focus:outline-none focus:border-amber-500 transition-all resize-none"
      ></textarea>
    </div>
  </div>

  <button
    type="submit"
    className="w-full py-3 bg-amber-500 text-stone-950 font-semibold text-lg rounded-lg hover:bg-amber-400 transition-all"
  >
    Submit Inquiry
  </button>
</form>
        </div>
      </section>

      <ThankYouModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </main>
  );
};

export default ServicesAfterGuarantee;