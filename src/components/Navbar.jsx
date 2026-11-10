import React, { useState, useEffect } from 'react';
import { Menu, X, ExternalLink, MessageCircle, HeartHandshake } from 'lucide-react';
import Logo from './Logo';
import { PROGRAM_DATA } from '../constants';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Available Support', href: '#support' },
    { name: 'Application Period', href: '#dates' },
    { name: 'Eligibility', href: '#eligibility' },
    { name: 'Enquiries', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-caf-navy/95 backdrop-blur-md shadow-lg border-b border-caf-gold/20 py-2.5'
          : 'bg-caf-navy py-4 border-b border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="focus:outline-none focus:ring-2 focus:ring-caf-gold rounded-lg p-0.5"
            aria-label="Charity Ayo Foundation Home"
          >
            <Logo light={true} />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-200 hover:text-caf-gold transition-colors duration-200 py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href={PROGRAM_DATA.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 transition-all duration-200 shadow-sm"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>

            <a
              href={PROGRAM_DATA.googleFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs uppercase tracking-wider font-bold shadow-md"
            >
              <span>Apply Now</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href={PROGRAM_DATA.googleFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden btn-gold inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md text-[11px] font-bold uppercase"
            >
              <span>Apply</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-200 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-caf-gold"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-caf-navy-dark/98 border-b border-caf-gold/30 px-4 pt-3 pb-6 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-slate-200 hover:text-caf-gold hover:bg-white/5 px-3 py-2 rounded-md transition-colors"
              >
                {link.name}
              </a>
            ))}
            
            <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
              <a
                href={PROGRAM_DATA.googleFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="btn-gold w-full text-center py-3 rounded-lg text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <span>Apply For Support</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href={PROGRAM_DATA.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-2.5 rounded-lg text-sm font-semibold bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center gap-2 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Enquiries (08033945161)</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

