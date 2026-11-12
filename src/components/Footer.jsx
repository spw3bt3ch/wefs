import React from 'react';
import { MessageCircle, Phone, MapPin, Heart, ExternalLink } from 'lucide-react';
import Logo from './Logo';
import { PROGRAM_DATA } from '../constants';

export default function Footer() {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About the Programme', href: '#about' },
    { name: 'Available Support', href: '#support' },
    { name: 'Application Period', href: '#dates' },
    { name: 'Eligibility', href: '#eligibility' },
    { name: 'Apply Now', href: PROGRAM_DATA.googleFormUrl, external: true },
  ];

  return (
    <footer className="bg-caf-navy-dark text-slate-300 pt-16 pb-12 border-t-2 border-caf-gold/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">

          {/* Foundation Profile */}
          <div className="lg:col-span-5 space-y-4">
            <Logo light={true} />

            <p className="text-sm text-slate-300 max-w-sm leading-relaxed pt-2">
              <span className="font-semibold text-caf-gold">{PROGRAM_DATA.foundationTagline}</span>
              <br />
              Dedicated to lifting vulnerable widows, restoring self-reliance, and providing sustainable livelihoods and educational access to their households.
            </p>

            <div className="pt-2">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-medium text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-caf-gold" />
                <span>Operating across Lagos State, Nigeria</span>
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h3 className="font-heading uppercase text-sm font-bold tracking-wider text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-caf-gold hover:text-caf-gold-light font-bold flex items-center gap-1.5 transition-colors"
                    >
                      <span>{link.name}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <a
                      href={link.href}
                      className="text-slate-300 hover:text-caf-gold transition-colors block py-0.5"
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details & WhatsApp */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="font-heading uppercase text-sm font-bold tracking-wider text-white mb-4">
              Contact & Enquiries
            </h3>

            <div className="space-y-3 text-sm">
              <a
                href={`tel:${PROGRAM_DATA.phone}`}
                className="flex items-center gap-3 text-slate-200 hover:text-caf-gold transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-caf-gold">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="font-bold">{PROGRAM_DATA.phone}</span>
              </a>

              <a
                href={PROGRAM_DATA.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-200 hover:text-emerald-400 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-600/30 flex items-center justify-center text-emerald-400">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <span>WhatsApp: <strong className="text-white">{PROGRAM_DATA.phone}</strong></span>
              </a>
            </div>

            <div className="pt-2">
              <a
                href={PROGRAM_DATA.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* Copyright strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; {PROGRAM_DATA.copyrightYear} {PROGRAM_DATA.foundationName}. All Rights Reserved.
          </p>

          <p className="flex items-center gap-1.5">
            <span>Developed by: <a href="https://www.g5ma.com/"><strong>G5 Multimedia Agency Limited</strong></a></span>
            <Heart className="w-3.5 h-3.5 text-caf-red fill-caf-red" />
          </p>
        </div>

      </div>
    </footer>
  );
}

