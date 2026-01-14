import React from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-[#0B1120] text-gray-400 pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center cursor-pointer" onClick={() => window.location.hash = ''}>
              <div className="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center mr-3 shadow-lg shadow-blue-500/20">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <span className="font-bold text-2xl text-white tracking-tight">Autoclaimfiling.online</span>
            </div>
            <p className="text-base text-gray-500 leading-relaxed max-w-xs">
              Fast, Fair, and Hassle-Free Accident Claim Support.
            </p>
            <div className="flex gap-4 pt-2">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-primary hover:text-white transition-all duration-300 transform hover:-translate-y-1">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <a href="#" onClick={() => window.location.hash = ''} className="flex items-center hover:text-white transition-colors group">
                  <ArrowRight size={14} className="mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-brand-primary" />
                  Home
                </a>
              </li>
              <li>
                <a href="#contact" className="flex items-center hover:text-white transition-colors group">
                  <ArrowRight size={14} className="mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-brand-primary" />
                  File a Claim
                </a>
              </li>
            </ul>
          </div>

          {/* Legal/Resources */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Resources</h4>
            <ul className="space-y-4">
              <li><a href="#terms" className="hover:text-white transition-colors">Terms & Condition</a></li>
              <li><a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-brand-primary/20 transition-colors">
                  <Phone size={20} className="text-brand-primary" />
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-wider text-gray-500 mb-1">Phone</span>
                  <a href="tel:8884080938" className="text-white font-bold text-lg hover:text-brand-primary transition-colors cursor-pointer">888 408 0938</a>
                </div>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-brand-primary/20 transition-colors">
                  <Mail size={20} className="text-brand-primary" />
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-wider text-gray-500 mb-1">Email</span>
                  <a href="mailto:autoclaimfiling@gmail.com" className="text-white font-medium hover:text-brand-primary transition-colors cursor-pointer break-all">autoclaimfiling@gmail.com</a>
                </div>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-brand-primary/20 transition-colors">
                  <MapPin size={20} className="text-brand-primary" />
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-wider text-gray-500 mb-1">Address</span>
                  <span className="text-gray-300">Florida, USA</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-10"></div>

        {/* Disclaimer & Bottom */}
        <div className="space-y-8">
          <div className="bg-white/5 rounded-xl p-6 border border-white/5">
            <h5 className="text-white font-semibold mb-2 text-sm">Disclaimer</h5>
            <p className="text-xs text-gray-500 leading-relaxed">
              Autoclaimfiling.online is a marketing service connecting consumers with legal and insurance professionals. We are not a law firm, do not provide legal advice, and do not make decisions regarding claims. All case evaluations are performed by third-party professionals. Results are not guaranteed and past performance does not predict future outcomes.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
            <p>&copy; 2025 Autoclaimfiling.online. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#terms" className="hover:text-white transition-colors">Terms & Condition</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};