import React from 'react';
import { MarqueeDoubleCheck } from './Icons';

export const MarqueeTicker: React.FC = () => {
  const items = Array.from({ length: 12 }, (_, i) => i);

  return (
    <div className="relative z-20 w-full overflow-hidden py-4 sm:py-5 bg-[#1E3286] -rotate-1 sm:-rotate-2 scale-105 my-6 sm:my-10 shadow-lg">
      <div className="flex animate-marquee whitespace-nowrap items-center">
        {items.map((idx) => (
          <div key={`m1-${idx}`} className="flex items-center gap-3 mx-4 sm:mx-6 text-white text-xs sm:text-sm md:text-base font-semibold tracking-wider uppercase">
            <span className="shrink-0 text-[#E86C85]">
              <MarqueeDoubleCheck className="w-5 sm:w-6 h-auto" />
            </span>
            <span>MÉTODO COMPROVADO E VALIDADO</span>
          </div>
        ))}
        {items.map((idx) => (
          <div key={`m2-${idx}`} className="flex items-center gap-3 mx-4 sm:mx-6 text-white text-xs sm:text-sm md:text-base font-semibold tracking-wider uppercase">
            <span className="shrink-0 text-[#E86C85]">
              <MarqueeDoubleCheck className="w-5 sm:w-6 h-auto" />
            </span>
            <span>MÉTODO COMPROVADO E VALIDADO</span>
          </div>
        ))}
      </div>
    </div>
  );
};
