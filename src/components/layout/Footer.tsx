import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Clock, Instagram, Facebook, Twitter, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-stone-950 border-t border-stone-800 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <div className="mb-6">
              <Link to="/" className="flex items-center">
                <span className="text-xl font-serif font-bold text-amber-500">GLASLUM</span>
                <span className="text-xl font-serif font-light text-stone-50">INDUSTRIES</span>
              </Link>
            </div>
            <p className="text-stone-300 mb-6">
              Delivering innovative aluminum window and door solutions that elevate spaces with quality and sustainability.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full border border-stone-700 flex items-center justify-center text-stone-300 hover:border-amber-500 hover:text-amber-500 transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full border border-stone-700 flex items-center justify-center text-stone-300 hover:border-amber-500 hover:text-amber-500 transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full border border-stone-700 flex items-center justify-center text-stone-300 hover:border-amber-500 hover:text-amber-500 transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-stone-50 mb-6">Navigation</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-stone-300 hover:text-amber-500 transition-colors duration-300">Home</Link>
              </li>
              <li>
                <Link to="/products" className="text-stone-300 hover:text-amber-500 transition-colors duration-300">Products</Link>
              </li>
              <li>
                <Link to="/projects" className="text-stone-300 hover:text-amber-500 transition-colors duration-300">Projects</Link>
              </li>
              <li>
                <Link to="/services" className="text-stone-300 hover:text-amber-500 transition-colors duration-300">Contact Us</Link>
              </li>
              <li>
                <Link to="/about" className="text-stone-300 hover:text-amber-500 transition-colors duration-300">About Us</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-stone-50 mb-6">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MessageCircle className="mr-3 text-amber-500 mt-1 shrink-0" size={18} />
                <a 
                  href="https://wa.me/447700123456" 
                  className="text-stone-300 hover:text-amber-500 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Click here for WhatsApp
                </a>
              </li>
              <li className="flex items-start">
                <Mail className="mr-3 text-amber-500 mt-1 shrink-0" size={18} />
                <span className="text-stone-300">info@glaslumindustries.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-3 text-amber-500 mt-1 shrink-0" size={18} />
                <span className="text-stone-300">
                  42 Innovation Street<br />
                  Suite 200<br />
                  London, UK EC1A 1AA
                </span>
              </li>
              <li className="flex items-start">
                <Clock className="mr-3 text-amber-500 mt-1 shrink-0" size={18} />
                <span className="text-stone-300">
                  Monday - Friday: 9AM - 6PM<br />
                  Saturday: 10AM - 4PM<br />
                  Sunday: By appointment
                </span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-stone-50 mb-6">Our Commitment</h3>
            <p className="text-stone-300 mb-4">
              With over 10 years of experience and 10,000+ projects worldwide, Glaslum Industries is dedicated to delivering aluminum solutions that inspire and endure.
            </p>
          </div>
        </div>
        
        <div className="luxe-divider mt-12 mb-8">
          <span>Glaslum</span>
        </div>
        
        <div className="text-center text-stone-500 text-sm">
          <p>© {new Date().getFullYear()} Glaslum Industries. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;