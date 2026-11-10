import React from 'react';

export default function Logo({ light = false, className = '' }) {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Official Charity Ayo Foundation Logo Emblem (caf-icon) */}
      <div className="relative flex-shrink-0 w-11 h-11 rounded-full bg-caf-navy border-2 border-caf-gold/50 flex items-center justify-center p-1.5 shadow-md">
        <img
          src="/caf-icon.png"
          alt="Charity Ayo Foundation"
          className="w-full h-full object-contain filter drop-shadow-sm"
          width="44"
          height="44"
        />
      </div>

      <div className="flex flex-col">
        <span
          className={`font-heading uppercase text-lg sm:text-xl font-bold tracking-tight leading-tight ${
            light ? 'text-white' : 'text-caf-navy'
          }`}
        >
          Charity Ayo <span className="text-caf-gold">Foundation</span>
        </span>
        <span
          className={`text-[10px] sm:text-[11px] font-medium tracking-wide uppercase ${
            light ? 'text-slate-300' : 'text-slate-500'
          }`}
        >
          Empowering Lives & Embracing Hope
        </span>
      </div>
    </div>
  );
}

