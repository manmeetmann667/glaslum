import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-stone-950/95 backdrop-blur-md py-4 shadow-md' : 'bg-transparent py-6'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-xl md:text-2xl font-serif font-bold text-amber-500">Glaslum</span>
          <span className="text-xl md:text-2xl font-serif font-light text-stone-50">Industries</span>
        </Link>
        
        <nav className="hidden lg:flex items-center space-x-8">
          <Link to="/" className={`nav-link ${isActive('/') ? 'nav-link-active' : ''}`}>
            Home
          </Link>
          <Link to="/products" className={`nav-link ${isActive('/products') ? 'nav-link-active' : ''}`}>
            Products
          </Link>
          <Link to="/projects" className={`nav-link ${isActive('/projects') ? 'nav-link-active' : ''}`}>
            Projects
          </Link>
          <Link to="/services" className={`nav-link ${isActive('/services') ? 'nav-link-active' : ''}`}>
            Contact Us
          </Link>
          <Link to="/about" className={`nav-link ${isActive('/about') ? 'nav-link-active' : ''}`}>
            About
          </Link>
        </nav>
        
        <button 
          className="lg:hidden text-stone-50 hover:text-amber-500 transition-colors duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={`fixed inset-0 bg-stone-950/98 backdrop-blur-lg z-40 lg:hidden transition-all duration-500 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="container-custom pt-24 pb-8 h-full flex flex-col">
          <nav className="flex flex-col space-y-6 text-center">
            <Link 
              to="/" 
              className={`nav-link text-xl ${isActive('/') ? 'nav-link-active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className={`nav-link text-xl ${isActive('/products') ? 'nav-link-active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link 
              to="/projects" 
              className={`nav-link text-xl ${isActive('/projects') ? 'nav-link-active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link 
              to="/services" 
              className={`nav-link text-xl ${isActive('/services') ? 'nav-link-active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/about" 
              className={`nav-link text-xl ${isActive('/about') ? 'nav-link-active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="btn-primary mt-6 justify-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </nav>
          
          <div className="mt-auto">
            <div className="flex justify-center space-x-4 my-8">
              {/* Social media icons would go here */}
            </div>
            <p className="text-stone-400 text-sm text-center">
              © {new Date().getFullYear()} LUXE Windows. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;