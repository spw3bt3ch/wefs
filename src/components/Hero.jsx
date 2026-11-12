import React from 'react';
import { ExternalLink, MessageCircle, Calendar, ShieldCheck, CheckCircle2, Sparkles, MapPin } from 'lucide-react';
import { PROGRAM_DATA } from '../constants';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 bg-caf-navy overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Subtle radial glows */}
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-caf-gold/10 blur-3xl"></div>
        <div className="absolute top-1/2 -right-32 w-[32rem] h-[32rem] rounded-full bg-caf-red/15 blur-3xl"></div>
        <div className="absolute -bottom-24 left-1/3 w-80 h-80 rounded-full bg-blue-600/10 blur-3xl"></div>

        {/* Elegant subtle geometric linework inspired by the flyer */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.04]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="hero-grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#FFB719" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>

        {/* Floating subtle circular accent lines */}
        <div className="absolute top-20 right-1/4 w-72 h-72 border border-caf-gold/15 rounded-full pointer-events-none"></div>
        <div className="absolute top-36 right-1/3 w-96 h-96 border border-caf-gold/10 rounded-full pointer-events-none"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Heading, Support Text, Badges & CTA Buttons */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Top Initiative Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-caf-gold/40 text-caf-gold text-xs sm:text-sm font-semibold tracking-wide uppercase mb-6 self-start backdrop-blur-sm shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-caf-gold animate-pulse" />
              <span>Charity Ayo Foundation • 2026 Programme</span>
            </div>

            {/* Main Heading recreating flyer typography with condensed bold impact */}
            <div className="mb-4">
              <h1 className="font-heading uppercase font-extrabold tracking-tight text-4xl sm:text-6xl lg:text-7xl leading-[0.95] text-caf-gold">
                WIDOWS&apos;
                <span className="block text-caf-gold">EMPOWERMENT</span>
              </h1>
              
              {/* & FAMILY SUPPORT in flyer's signature Red Badge Banner */}
              <div className="mt-2.5 inline-flex items-center gap-2 bg-caf-red px-4 py-2 sm:px-5 sm:py-2.5 rounded-md shadow-lg shadow-caf-red/30">
                <span className="font-heading font-black text-xl sm:text-2xl text-white leading-none">
                  &amp;
                </span>
                <span className="font-heading uppercase font-bold text-lg sm:text-2xl tracking-wider text-white leading-none">
                  FAMILY SUPPORT
                </span>
              </div>
            </div>

            {/* Supporting Text as requested */}
            <p className="text-base sm:text-xl text-slate-200 font-normal leading-relaxed mt-4 mb-8 max-w-2xl">
              &ldquo;Empowering widows, strengthening families, and creating opportunities for a better future.&rdquo;
            </p>

            {/* Key Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 mb-8">
              {/* Primary Golden-Yellow Button */}
              <a
                href={PROGRAM_DATA.googleFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold px-7 py-4 rounded-xl text-center text-sm sm:text-base font-bold uppercase tracking-wider flex items-center justify-center gap-2.5 group cursor-pointer"
              >
                <span>APPLY FOR SUPPORT</span>
                <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              {/* Secondary WhatsApp Enquiries Button */}
              <a
                href={PROGRAM_DATA.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp px-6 py-4 rounded-xl text-center text-sm sm:text-base font-semibold flex items-center justify-center gap-2 group cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>WHATSAPP ENQUIRIES</span>
              </a>
            </div>

            {/* Flyer Quick Facts Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6 border-t border-white/10 max-w-xl">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-caf-gold/15 flex items-center justify-center text-caf-gold flex-shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Application Fee</p>
                  <p className="text-xs sm:text-sm font-bold text-white">100% Free</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-caf-gold/15 flex items-center justify-center text-caf-gold flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Target Area</p>
                  <p className="text-xs sm:text-sm font-bold text-white">Lagos State</p>
                </div>
              </div>

              <div className="col-span-2 sm:col-span-1 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-caf-red/20 flex items-center justify-center text-caf-red-light flex-shrink-0">
                  <Calendar className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Application Window</p>
                  <p className="text-xs sm:text-sm font-bold text-white">Nov 12 – 30</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Programme Banner Hero Graphic */}
          <div className="lg:col-span-5 relative flex items-center justify-center mt-6 lg:mt-0">
            
            {/* Ambient Gold Glow & Graphic Accent Rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] rounded-full bg-caf-gold/20 filter blur-2xl"></div>
              <div className="w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] border-2 border-dashed border-caf-gold/30 rounded-full animate-[spin_60s_linear_infinite]"></div>
            </div>

            {/* Featured Image Card with Frame */}
            <div className="relative w-full max-w-lg mx-auto">
              {/* Backdrop Gradient Plate & Frame */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-caf-navy-light via-caf-navy-surface to-caf-navy-dark border-2 border-caf-gold/40 shadow-2xl p-1.5 sm:p-2 group">
                <img
                  src="/hero.png"
                  alt="Charity Ayo Foundation - Widows' Empowerment & Family Support Programme"
                  className="w-full h-auto object-cover rounded-xl shadow-lg transform group-hover:scale-[1.01] transition-transform duration-300"
                  loading="eager"
                  width="1556"
                  height="941"
                />
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
