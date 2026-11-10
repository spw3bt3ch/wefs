import React from 'react';
import { ExternalLink, CheckCircle, ShieldCheck, Heart, Sparkles, ArrowRight } from 'lucide-react';
import { PROGRAM_DATA } from '../constants';

export default function CallToActionSection() {
  return (
    <section id="apply" className="py-20 lg:py-28 bg-gradient-to-br from-caf-navy via-caf-navy-dark to-[#020214] text-white relative overflow-hidden">
      {/* Background Graphic Rings */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-caf-gold/10 blur-3xl"></div>
        <div className="absolute -bottom-20 right-10 w-80 h-80 rounded-full bg-caf-red/15 blur-2xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Foundation Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-caf-gold/40 text-caf-gold text-xs sm:text-sm font-bold tracking-wider uppercase mb-6">
          <Sparkles className="w-4 h-4 text-caf-gold" />
          <span>Charity Ayo Foundation • Widows&apos; Empowerment 2026</span>
        </div>

        {/* Heading as requested */}
        <h2 className="font-heading uppercase text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-6">
          Take the First Step Towards a <span className="text-caf-gold">Better Future.</span>
        </h2>

        {/* Supporting text as requested */}
        <p className="text-base sm:text-xl text-slate-200 font-normal leading-relaxed max-w-2xl mx-auto mb-10">
          &ldquo;Are you eligible for this programme? Submit your application today and take advantage of this opportunity.&rdquo;
        </p>

        {/* Large Highly Visible APPLY NOW Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a
            href={PROGRAM_DATA.googleFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold w-full sm:w-auto px-10 py-5 rounded-2xl text-center text-lg sm:text-xl font-heading font-black tracking-widest uppercase flex items-center justify-center gap-3 shadow-2xl hover:scale-105 active:scale-100 transition-all cursor-pointer border-2 border-caf-gold-light"
            aria-label="Apply Now via Google Form"
          >
            <span>APPLY NOW</span>
            <ExternalLink className="w-6 h-6 stroke-[2.5]" />
          </a>
        </div>

        {/* Reassurance & Verification Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-white/10 max-w-3xl mx-auto text-left">
          <div className="flex items-center gap-3 bg-white/5 p-3.5 rounded-xl border border-white/10">
            <ShieldCheck className="w-5 h-5 text-caf-gold flex-shrink-0" />
            <div className="text-xs">
              <p className="font-bold text-white uppercase tracking-wider">Zero Fees</p>
              <p className="text-slate-400">100% Free Application</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white/5 p-3.5 rounded-xl border border-white/10">
            <CheckCircle className="w-5 h-5 text-caf-gold flex-shrink-0" />
            <div className="text-xs">
              <p className="font-bold text-white uppercase tracking-wider">Direct Award</p>
              <p className="text-slate-400">Dec 12, 2026 Presentation</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white/5 p-3.5 rounded-xl border border-white/10">
            <Heart className="w-5 h-5 text-caf-red-light flex-shrink-0" />
            <div className="text-xs">
              <p className="font-bold text-white uppercase tracking-wider">Dignified Support</p>
              <p className="text-slate-400">Strictly for Lagos Widows</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

