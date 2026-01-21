import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from './ui/Button';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Home', href: '#' },
  { label: 'File Your Claim Today', href: '#contact' },
  { label: 'Contact', href: '#footer' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    // If navigating to home or an anchor, ensure we are in the base route if needed
    if (href === '#') {
      window.location.hash = '';
      window.scrollTo(0, 0);
    } else if (href.startsWith('#')) {
      // If on another page (like terms), we need to go to root then anchor
      if (window.location.hash.includes('terms') || window.location.hash.includes('privacy')) {
        window.location.hash = '';
        setTimeout(() => {
          const element = document.querySelector(href);
          element?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-white py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => handleNavClick('#')}>
            <div className="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center mr-2">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <span className="font-bold text-xl text-brand-dark tracking-tight">Autoclaimfiling.online</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="text-gray-600 hover:text-brand-primary font-medium transition-colors focus:outline-none"
              >
                {item.label}
              </button>
            ))}
            <a href="tel:8886263214">
              <Button variant="outline" className="flex items-center gap-2 py-2">
                <Phone size={18} />
                888 626 3214
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white border-t border-gray-100 absolute w-full shadow-lg`}>
        <div className="px-4 pt-2 pb-6 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.href)}
              className="block w-full text-left px-3 py-3 text-base font-medium text-gray-700 hover:text-brand-primary hover:bg-gray-50 rounded-md"
            >
              {item.label}
            </button>
          ))}
          <div className="pt-4">
            <a href="tel:8886263214" className="block">
              <Button fullWidth variant="outline" className="justify-center gap-2">
                <Phone size={18} />
                Call: 888 626 3214
              </Button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};