import React from 'react';
import { HOW_IT_WORKS_STEPS } from '../data/jacketsData';
import { ArrowRight } from 'lucide-react';

interface HowItWorksSectionProps {
  onOpenOrderModal: () => void;
}

export const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({ onOpenOrderModal }) => {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-white border-t border-[#deded5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 bg-[#e85a2a] inline-block" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#e85a2a]">
              THE PRODUCTION WORKFLOW
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#20231f] tracking-tight">
            How It Works
          </h2>
          <p className="text-sm sm:text-base text-[#555850] mt-3 leading-relaxed">
            From initial concept to delivered outerwear in 5 straightforward steps. Zero friction, zero complex procurement headaches.
          </p>
        </div>

        {/* 5 Steps Horizontal Sequence */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {HOW_IT_WORKS_STEPS.map((item, idx) => (
            <div
              key={item.step}
              className="p-5 rounded-xl bg-[#f6f5f0] border border-[#deded5] relative flex flex-col justify-between hover:border-[#e85a2a] transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black font-mono text-[#e85a2a]">
                    {item.step}
                  </span>
                  <span className="text-[10px] uppercase font-mono font-bold text-[#85867f]">
                    Phase {idx + 1}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#20231f] group-hover:text-[#e85a2a] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-[#e85a2a] font-bold mt-1">
                  {item.subtitle}
                </p>

                <p className="text-xs text-[#555850] mt-2.5 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-[#deded5] flex items-center justify-between text-[11px] font-mono font-semibold text-[#85867f]">
                <span>Step {idx + 1} of 5</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Callout */}
        <div className="mt-12 p-6 rounded-xl bg-[#f6f5f0] border border-[#deded5] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-base font-bold text-[#20231f]">
              Ready to start Step 1 or 2 right now?
            </h4>
            <p className="text-xs text-[#555850] mt-0.5">
              Launch our multi-step brief to assemble your quantities, sizes, and colors in 60 seconds.
            </p>
          </div>

          <button
            onClick={onOpenOrderModal}
            className="px-6 py-3 bg-[#e85a2a] hover:bg-[#cf4920] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm flex items-center gap-2 whitespace-nowrap cursor-pointer"
          >
            <span>Start Order Brief Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
