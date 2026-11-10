import React from 'react';
import { ExternalLink, MessageCircle } from 'lucide-react';
import { PROGRAM_DATA } from '../constants';

export default function FloatingMobileBar() {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-caf-navy/95 backdrop-blur-md border-t border-caf-gold/30 p-2.5 shadow-2xl">
      <div className="grid grid-cols-2 gap-2">
        <a
          href={PROGRAM_DATA.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp py-2.5 px-3 rounded-lg text-center text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-sm"
          aria-label="WhatsApp Enquiries"
        >
          <MessageCircle className="w-4 h-4 fill-current" />
          <span>WhatsApp</span>
        </a>

        <a
          href={PROGRAM_DATA.googleFormUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold py-2.5 px-3 rounded-lg text-center text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-sm"
          aria-label="Apply Now via Google Form"
        >
          <span>Apply Now</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}

