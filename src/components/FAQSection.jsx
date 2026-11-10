import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle, ExternalLink } from 'lucide-react';
import { FAQS, PROGRAM_DATA } from '../constants';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-caf-navy/5 border border-caf-navy/10 text-caf-navy text-xs font-bold tracking-wider uppercase mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-caf-gold" />
            <span>Got Questions?</span>
          </div>

          <h2 className="font-heading uppercase text-3xl sm:text-4xl font-extrabold text-caf-navy tracking-tight">
            Frequently Asked <span className="text-caf-gold">Questions</span>
          </h2>
          <div className="w-16 h-1 bg-caf-red mx-auto mt-3 rounded-full mb-3"></div>
          <p className="text-slate-600 text-sm sm:text-base">
            Everything you need to know about the Widows&apos; Empowerment & Family Support Programme.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3.5">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-slate-200 rounded-xl overflow-hidden transition-all duration-200 bg-slate-50/50"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 font-heading font-bold text-base sm:text-lg text-caf-navy hover:text-caf-gold transition-colors focus:outline-none focus:ring-1 focus:ring-caf-gold"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 text-slate-500 transition-transform duration-200 ${
                      isOpen ? 'transform rotate-180 text-caf-gold' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-white">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom prompt */}
        <div className="mt-10 text-center flex flex-col sm:flex-row items-center justify-center gap-3 text-xs sm:text-sm text-slate-600">
          <span>Still have an unanswered question?</span>
          <a
            href={PROGRAM_DATA.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-700 font-bold hover:underline inline-flex items-center gap-1"
          >
            <MessageCircle className="w-4 h-4 fill-emerald-600 text-emerald-600" />
            <span>Ask us on WhatsApp (08033945161)</span>
          </a>
        </div>

      </div>
    </section>
  );
}

