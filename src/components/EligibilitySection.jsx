import React from 'react';
import { CheckCircle2, FileText, MapPin, ScrollText, HeartHandshake, HelpCircle, ArrowRight, ExternalLink } from 'lucide-react';
import { ELIGIBILITY_REQUIREMENTS, PROGRAM_DATA } from '../constants';

export default function EligibilitySection() {
  const iconList = [MapPin, ScrollText, HeartHandshake, FileText];

  return (
    <section id="eligibility" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-caf-navy/5 border border-caf-navy/10 text-caf-navy text-xs font-bold tracking-wider uppercase mb-3">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>Eligibility Guidelines</span>
          </div>

          <h2 className="font-heading uppercase text-3xl sm:text-5xl font-extrabold text-caf-navy tracking-tight">
            Who Can <span className="text-caf-gold">Apply?</span>
          </h2>
          <div className="w-16 h-1 bg-caf-red mx-auto mt-3 rounded-full mb-4"></div>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
            To ensure the empowerment grant reaches genuinely deserving families, applicants must satisfy the four criteria below:
          </p>
        </div>

        {/* Clean Checklist Grid Layout as requested */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
          {ELIGIBILITY_REQUIREMENTS.map((item, idx) => {
            const Icon = iconList[idx] || CheckCircle2;
            return (
              <div
                key={item.id}
                className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 hover:border-caf-gold hover:shadow-md transition-all duration-300 flex items-start gap-4 group"
              >
                {/* Checkbox badge */}
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-caf-navy text-caf-gold flex items-center justify-center font-bold shadow-sm group-hover:scale-105 transition-transform">
                  <CheckCircle2 className="w-6 h-6 text-caf-gold" />
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-caf-red">
                      Requirement 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-heading text-lg sm:text-xl font-bold uppercase text-caf-navy mb-2 tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-slate-800 font-medium text-sm sm:text-base leading-snug mb-2">
                    {item.description}
                  </p>

                  <p className="text-xs text-slate-500 italic bg-white px-3 py-1.5 rounded-lg border border-slate-200/60 inline-block">
                    Tip: {item.note}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Simple Guide for the One-Page Proposal */}
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-caf-navy to-caf-navy-light text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-caf-gold/30">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-caf-gold text-xs font-bold uppercase tracking-wider">
                <HelpCircle className="w-4 h-4" />
                <span>Writing Your One-Page Proposal</span>
              </div>
              <h3 className="font-heading uppercase text-xl sm:text-2xl font-bold tracking-tight">
                Not sure how to write your proposal?
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-2xl">
                Keep it simple and sincere. State your name, phone number, address in Lagos, your family situation, what support category you need (startup, school fees, or shop expansion), and an estimate of the required funds. You can write it by hand and take a clear photo, or type it out.
              </p>
            </div>

            <a
              href={PROGRAM_DATA.googleFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold whitespace-nowrap px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center gap-2 flex-shrink-0 self-stretch sm:self-auto justify-center"
            >
              <span>Begin Application</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

