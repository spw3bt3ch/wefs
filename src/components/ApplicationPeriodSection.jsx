import React from 'react';
import { Calendar, Clock, Award, CheckCircle2, AlertCircle, ExternalLink, Sparkles } from 'lucide-react';
import { PROGRAM_DATA } from '../constants';

export default function ApplicationPeriodSection() {
  return (
    <section id="dates" className="py-20 lg:py-28 bg-caf-navy relative overflow-hidden text-white">
      {/* Background Graphic Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-caf-gold blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-caf-red blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-caf-gold/30 text-caf-gold text-xs font-bold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-caf-gold" />
            <span>Key Programme Schedule</span>
          </div>

          <h2 className="font-heading uppercase text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Application <span className="text-caf-gold">Period</span>
          </h2>
          <div className="w-16 h-1 bg-caf-red mx-auto mt-3 rounded-full mb-4"></div>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            Please take note of the official programme milestones below. Late submissions cannot be accommodated.
          </p>
        </div>

        {/* Date Cards Grid with strong visual emphasis mirroring the flyer */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Card 1: Application Period (Nov 12 - 30) */}
          <div className="bg-gradient-to-br from-caf-navy-surface to-caf-navy-dark rounded-3xl p-8 border-2 border-caf-gold/40 shadow-2xl relative overflow-hidden group hover:border-caf-gold transition-all duration-300">
            {/* Top Badge */}
            <div className="flex items-center justify-between mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-caf-gold/20 text-caf-gold text-xs font-extrabold uppercase tracking-wider border border-caf-gold/30">
                <Clock className="w-3.5 h-3.5" />
                <span>Phase 1 • Active Now</span>
              </span>
              <span className="text-xs text-slate-400 font-medium">Lagos State</span>
            </div>

            {/* Recreating the flyer's iconic yellow block date layout */}
            <div className="flex items-center gap-5 mb-6">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-caf-gold text-caf-navy flex flex-col items-center justify-center p-2 font-heading shadow-xl flex-shrink-0">
                <span className="text-xs font-bold uppercase tracking-wider text-caf-navy/80">NOV 2026</span>
                <span className="text-3xl sm:text-4xl font-black leading-none my-0.5">12TH-30TH</span>
                <span className="text-[10px] font-black uppercase tracking-wider text-caf-navy/70">SUBMISSION</span>
              </div>

              <div>
                <h3 className="font-heading uppercase text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  APPLICATION PERIOD
                </h3>
                <p className="text-caf-gold font-bold text-sm sm:text-base mt-1">
                  12th – 30th November 2026
                </p>
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              The application portal is accessible 24 hours a day between 12th and 30th November 2026. Applicants should complete the Google Form and upload required credentials.
            </p>

            <div className="space-y-2 mb-8 pt-4 border-t border-white/10">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-caf-gold flex-shrink-0" />
                <span>Portal opens: 12th November 2026 at 12:00 AM</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-caf-gold flex-shrink-0" />
                <span>Portal closes: 30th November 2026 at 11:59 PM</span>
              </div>
            </div>

            <a
              href={PROGRAM_DATA.googleFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold w-full py-3.5 px-6 rounded-xl text-center text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <span>Submit Your Application</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Card 2: Presentation of Grants (Dec 12) */}
          <div className="bg-gradient-to-br from-caf-navy-surface to-caf-navy-dark rounded-3xl p-8 border-2 border-caf-red/40 shadow-2xl relative overflow-hidden group hover:border-caf-red transition-all duration-300">
            {/* Top Badge */}
            <div className="flex items-center justify-between mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-caf-red/20 text-caf-red-light text-xs font-extrabold uppercase tracking-wider border border-caf-red/30">
                <Award className="w-3.5 h-3.5" />
                <span>Phase 2 • Award Event</span>
              </span>
              <span className="text-xs text-slate-400 font-medium">Disbursement Day</span>
            </div>

            {/* Recreating the flyer's iconic red block date layout */}
            <div className="flex items-center gap-5 mb-6">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-caf-red text-white flex flex-col items-center justify-center p-2 font-heading shadow-xl flex-shrink-0">
                <span className="text-xs font-bold uppercase tracking-wider text-white/80">DEC 2026</span>
                <span className="text-4xl sm:text-5xl font-black leading-none my-0.5">12TH</span>
                <span className="text-[10px] font-black uppercase tracking-wider text-white/70">GRANTS</span>
              </div>

              <div>
                <h3 className="font-heading uppercase text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  PRESENTATION OF GRANTS
                </h3>
                <p className="text-caf-red-light font-bold text-sm sm:text-base mt-1">
                  12th December 2026
                </p>
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Successful applicants who satisfy all eligibility conditions and verification will receive their financial grants and support packages during the official presentation ceremony.
            </p>

            <div className="space-y-2 mb-8 pt-4 border-t border-white/10">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-caf-red-light flex-shrink-0" />
                <span>Grant awards and certificates of empowerment presented</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-caf-red-light flex-shrink-0" />
                <span>Direct financial grant disbursement to verified bank accounts</span>
              </div>
            </div>

            <a
              href="#eligibility"
              className="w-full py-3.5 px-6 rounded-xl text-center text-sm font-bold uppercase tracking-wider bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all duration-200 flex items-center justify-center gap-2"
            >
              <span>Check Eligibility Requirements</span>
            </a>
          </div>

        </div>

        {/* Reminder notification */}
        <div className="mt-12 max-w-2xl mx-auto flex items-center gap-3 bg-white/5 border border-caf-gold/30 rounded-xl p-4 text-xs sm:text-sm text-slate-300">
          <AlertCircle className="w-5 h-5 text-caf-gold flex-shrink-0" />
          <span>
            Please prepare your death certificate of spouse, proof of Lagos residence, and one-page proposal before completing the form to ensure a smooth submission.
          </span>
        </div>

      </div>
    </section>
  );
}

