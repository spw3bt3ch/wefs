import React from 'react';
import { Store, GraduationCap, TrendingUp, CheckCircle, ArrowRight, ExternalLink, Sparkles } from 'lucide-react';
import { SUPPORT_CATEGORIES, PROGRAM_DATA } from '../constants';

export default function SupportCategoriesSection() {
  const iconMap = {
    Store: Store,
    GraduationCap: GraduationCap,
    TrendingUp: TrendingUp,
  };

  const getCardTheme = (color) => {
    switch (color) {
      case 'gold':
        return {
          badgeBg: 'bg-amber-100 text-amber-900 border-amber-200',
          iconBg: 'bg-caf-gold/15 text-caf-navy',
          accentBorder: 'hover:border-caf-gold',
          btnBg: 'bg-caf-gold hover:bg-caf-gold-light text-caf-navy',
          indicator: 'bg-caf-gold',
        };
      case 'red':
        return {
          badgeBg: 'bg-red-100 text-red-900 border-red-200',
          iconBg: 'bg-caf-red/10 text-caf-red',
          accentBorder: 'hover:border-caf-red',
          btnBg: 'bg-caf-red hover:bg-caf-red-dark text-white',
          indicator: 'bg-caf-red',
        };
      case 'navy':
      default:
        return {
          badgeBg: 'bg-blue-100 text-blue-900 border-blue-200',
          iconBg: 'bg-caf-navy/10 text-caf-navy',
          accentBorder: 'hover:border-caf-navy',
          btnBg: 'bg-caf-navy hover:bg-caf-navy-light text-white',
          indicator: 'bg-caf-navy',
        };
    }
  };

  return (
    <section id="support" className="py-20 lg:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-caf-navy/5 border border-caf-navy/10 text-caf-navy text-xs font-bold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-caf-gold" />
            <span>Empowerment Categories</span>
          </div>

          <h2 className="font-heading uppercase text-3xl sm:text-5xl font-extrabold text-caf-navy tracking-tight">
            Supports <span className="text-caf-gold">Available</span>
          </h2>
          <div className="w-16 h-1 bg-caf-red mx-auto mt-3 rounded-full mb-4"></div>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
            Choose the support track that aligns with your family&apos;s most urgent need and submit your proposal.
          </p>
        </div>

        {/* 3 Support Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SUPPORT_CATEGORIES.map((item, idx) => {
            const IconComponent = iconMap[item.iconName] || Store;
            const theme = getCardTheme(item.color);

            return (
              <div
                key={item.id}
                className={`bg-white rounded-2xl p-7 sm:p-8 border border-slate-200 shadow-sm ${theme.accentBorder} hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden`}
              >
                {/* Top Accent Strip */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 ${theme.indicator}`}></div>

                <div>
                  {/* Icon & Category Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl ${theme.iconBg} flex items-center justify-center transition-transform group-hover:scale-105 duration-300 shadow-inner`}>
                      <IconComponent className="w-7 h-7" />
                    </div>

                    <span className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${theme.badgeBg}`}>
                      {item.badge}
                    </span>
                  </div>

                  {/* Card Title */}
                  <h3 className="font-heading uppercase text-2xl font-bold text-caf-navy mb-3 tracking-tight">
                    {item.title}
                  </h3>

                  {/* Summary from flyer/prompt */}
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-5 font-normal">
                    {item.summary}
                  </p>

                  {/* Additional details */}
                  <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 mb-6">
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.details}
                    </p>
                  </div>

                  {/* Key Highlights */}
                  <ul className="space-y-2.5 mb-8">
                    {item.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA Button */}
                <a
                  href={PROGRAM_DATA.googleFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 px-4 rounded-xl text-center text-xs sm:text-sm font-bold uppercase tracking-wider ${theme.btnBg} transition-all duration-200 shadow-md flex items-center justify-center gap-2 group-hover:gap-3`}
                >
                  <span>Apply For This Grant</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            );
          })}
        </div>

        {/* Note on multiple selections */}
        <div className="mt-12 text-center bg-white border border-slate-200/80 rounded-xl p-4 max-w-2xl mx-auto shadow-sm">
          <p className="text-xs sm:text-sm text-slate-600">
            <span className="font-bold text-caf-navy">Important:</span> Applicants are advised to select the single category that represents their primary need and provide clear documentary proof.
          </p>
        </div>

      </div>
    </section>
  );
}

