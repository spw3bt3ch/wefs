import React from 'react';
import { Heart, Compass, ShieldCheck, Users, Sparkles, CheckCircle2 } from 'lucide-react';
import { PROGRAM_DATA } from '../constants';

export default function AboutSection() {
  const pillars = [
    {
      icon: Heart,
      title: 'Restoring Hope & Dignity',
      description: 'Losing a spouse brings emotional and economic disruption. We provide compassionate relief that re-establishes dignity.',
    },
    {
      icon: Compass,
      title: 'Fostering Independence',
      description: 'Providing business grants and startup equipment so widows can sustain themselves without depending on handouts.',
    },
    {
      icon: Users,
      title: 'Strengthening Families',
      description: 'Directly safeguarding the educational continuity and wellbeing of the children and dependents of widows.',
    },
    {
      icon: ShieldCheck,
      title: 'Transparent & Accountable',
      description: 'A merit-based, verified selection process ensuring that every naira reaches deserving widows directly.',
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-50/50 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-100/60 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-caf-navy/5 border border-caf-navy/10 text-caf-navy text-xs font-bold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-caf-gold" />
            <span>Mission & Purpose</span>
          </div>

          <h2 className="font-heading uppercase text-3xl sm:text-5xl font-extrabold text-caf-navy tracking-tight">
            About the <span className="text-caf-gold">Programme</span>
          </h2>
          <div className="w-16 h-1 bg-caf-red mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Narrative Box with Highlight Quote */}
        <div className="max-w-4xl mx-auto bg-slate-50 border border-slate-200/80 rounded-2xl p-6 sm:p-10 shadow-sm mb-16">
          <div className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            <p className="first-letter:text-4xl first-letter:font-bold first-letter:text-caf-navy first-letter:mr-1">
              {PROGRAM_DATA.aboutParagraph1}
            </p>
            <p className="font-medium text-slate-800">
              {PROGRAM_DATA.aboutParagraph2}
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-caf-navy border border-caf-gold/40 flex items-center justify-center p-1.5 shadow-sm">
                <img
                  src="/caf-icon.png"
                  alt="CAF"
                  className="w-full h-full object-contain"
                  width="40"
                  height="40"
                />
              </div>
              <div>
                <p className="text-sm font-bold text-caf-navy">Charity Ayo Foundation</p>
                <p className="text-xs text-slate-500">Non-Governmental Organisation • Lagos, Nigeria</p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 bg-white px-3 py-1.5 rounded-lg border border-slate-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Certified Community Outreach 2026</span>
            </div>
          </div>
        </div>

        {/* Impact Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 border border-slate-200/80 hover:border-caf-gold hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-caf-navy/5 group-hover:bg-caf-navy flex items-center justify-center text-caf-navy group-hover:text-caf-gold transition-colors duration-300 mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-lg font-bold uppercase text-caf-navy mb-2 tracking-tight">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

