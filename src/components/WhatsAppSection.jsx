import React from 'react';
import { MessageCircle, Phone, HeartHandshake, HelpCircle, Users, Sparkles } from 'lucide-react';
import { PROGRAM_DATA } from '../constants';

export default function WhatsAppSection() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-slate-100/70 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-14 border border-slate-200/90 shadow-xl relative overflow-hidden">
          {/* Subtle decorative background badge */}
          <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-emerald-50 pointer-events-none"></div>

          <div className="relative z-10 text-center max-w-2xl mx-auto">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold tracking-wider uppercase mb-4">
              <MessageCircle className="w-4 h-4 fill-emerald-700 text-emerald-700" />
              <span>Direct Support & Inquiries</span>
            </div>

            {/* Heading as requested */}
            <h2 className="font-heading uppercase text-3xl sm:text-5xl font-black text-caf-navy tracking-tight mb-4">
              Need More <span className="text-emerald-600">Information?</span>
            </h2>
            <div className="w-16 h-1 bg-emerald-500 mx-auto rounded-full mb-6"></div>

            {/* Supporting text as requested */}
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal mb-8">
              &ldquo;For enquiries, clarification, sponsorship, partnerships, or volunteering opportunities, kindly contact Charity Ayo Foundation.&rdquo;
            </p>

            {/* Prominent Green WhatsApp Button as requested */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <a
                href={PROGRAM_DATA.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full sm:w-auto px-8 py-4 rounded-xl text-center text-sm sm:text-base font-bold tracking-wider uppercase flex items-center justify-center gap-3 shadow-lg hover:shadow-emerald-500/30 cursor-pointer"
                aria-label="Chat with us on WhatsApp"
              >
                <MessageCircle className="w-6 h-6 fill-current" />
                <span>CHAT WITH US ON WHATSAPP</span>
              </a>

              {/* Direct Phone Option */}
              <a
                href={`tel:${PROGRAM_DATA.phone}`}
                className="w-full sm:w-auto px-6 py-4 rounded-xl text-center text-sm sm:text-base font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors flex items-center justify-center gap-2.5"
              >
                <Phone className="w-5 h-5 text-caf-navy" />
                <span>Call: {PROGRAM_DATA.phone}</span>
              </a>
            </div>

            <p className="text-xs text-slate-500 mb-8">
              WhatsApp line: <span className="font-bold text-slate-700">{PROGRAM_DATA.phone}</span> • Pre-filled enquiry message is enabled for prompt response.
            </p>

            {/* Stakeholder cards: For Applicants vs For Sponsors / Partners */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left pt-6 border-t border-slate-100">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <div className="flex items-center gap-2 mb-2 text-caf-navy font-bold text-xs uppercase tracking-wider">
                  <HelpCircle className="w-4 h-4 text-caf-gold" />
                  <span>For Applicants & Families</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Have questions about your one-page proposal, death certificate, or uploading files? Message our support team anytime.
                </p>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <div className="flex items-center gap-2 mb-2 text-caf-navy font-bold text-xs uppercase tracking-wider">
                  <HeartHandshake className="w-4 h-4 text-caf-red" />
                  <span>Sponsors, Donors & Volunteers</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Join Charity Ayo Foundation in expanding relief to more widows. Partner with us or volunteer for the Dec 12 grant presentation.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

