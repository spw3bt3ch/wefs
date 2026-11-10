import React from 'react';
import { Calendar, Award, ArrowRight, ExternalLink } from 'lucide-react';
import { PROGRAM_DATA } from '../constants';

export default function KeyDatesStrip() {
  return (
    <section className="relative z-20 -mt-6 sm:-mt-8 max-w-6xl mx-auto px-4 sm:px-6">
      <div className="bg-white rounded-2xl shadow-xl border border-slate-200/80 p-4 sm:p-6 grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 divide-y md:divide-y-0 md:divide-x divide-slate-100">
        
        {/* Milestone 1: Application Period */}
        <div className="flex items-center gap-4 pt-2 sm:pt-0">
          {/* Yellow Badge mirroring flyer */}
          <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-caf-gold text-caf-navy flex flex-col items-center justify-center shadow-md p-1 font-heading font-black leading-none">
            <span className="text-[11px] sm:text-xs tracking-tight uppercase font-bold text-caf-navy/80">NOV &apos;26</span>
            <span className="text-xl sm:text-2xl mt-0.5">12-30</span>
            <span className="text-[9px] uppercase tracking-wider font-extrabold text-caf-navy/70">DATES</span>
          </div>

          <div className="flex-1 min-w-0">
            <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider bg-amber-100 text-amber-800 mb-1">
              <Calendar className="w-3 h-3" />
              <span>Phase 1: Open Window</span>
            </div>
            <h2 className="font-heading text-lg sm:text-xl font-bold uppercase text-caf-navy tracking-tight truncate">
              APPLICATION PERIOD
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">
              12th – 30th November 2026
            </p>
          </div>

          <a
            href={PROGRAM_DATA.googleFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center p-2.5 rounded-lg bg-amber-50 hover:bg-caf-gold text-caf-navy transition-colors text-xs font-bold"
            title="Apply Now"
          >
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Milestone 2: Presentation of Grants */}
        <div className="flex items-center gap-4 pt-4 md:pt-0 md:pl-6">
          {/* Red Badge mirroring flyer */}
          <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-caf-red text-white flex flex-col items-center justify-center shadow-md p-1 font-heading font-black leading-none">
            <span className="text-[11px] sm:text-xs tracking-tight uppercase font-bold text-white/80">DEC &apos;26</span>
            <span className="text-2xl sm:text-3xl mt-0.5">12TH</span>
            <span className="text-[9px] uppercase tracking-wider font-extrabold text-white/70">AWARDS</span>
          </div>

          <div className="flex-1 min-w-0">
            <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider bg-red-100 text-red-800 mb-1">
              <Award className="w-3 h-3" />
              <span>Phase 2: Disbursement</span>
            </div>
            <h2 className="font-heading text-lg sm:text-xl font-bold uppercase text-caf-navy tracking-tight truncate">
              PRESENTATION OF GRANTS
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">
              12th December 2026
            </p>
          </div>

          <a
            href="#dates"
            className="hidden sm:inline-flex items-center justify-center p-2.5 rounded-lg bg-red-50 hover:bg-caf-red hover:text-white text-caf-red transition-colors text-xs font-bold"
            title="View Details"
          >
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}

