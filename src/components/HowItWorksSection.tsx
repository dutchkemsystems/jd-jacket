import React from 'react';
import { HOW_IT_WORKS_STEPS } from '../data/jacketsData';
import { MessageSquare, ArrowRight } from 'lucide-react';

interface HowItWorksSectionProps {
  onOpenOrderModal: () => void;
}

export const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({ onOpenOrderModal }) => {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-neutral-900/60 border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-500 block mb-2">
            The Production Workflow
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            How It Works
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 mt-3 leading-relaxed">
            From initial concept to delivered outerwear in 5 straightforward steps. Zero friction, zero complex procurement headaches.
          </p>
        </div>

        {/* 5 Steps Horizontal Sequence */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {HOW_IT_WORKS_STEPS.map((item, idx) => (
            <div
              key={item.step}
              className="p-5 rounded-2xl bg-neutral-900 border border-neutral-800 relative flex flex-col justify-between hover:border-neutral-700 transition-all group"
            >
              <div>
                {/* Step index */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xl font-black font-mono text-amber-400">
                    {item.step}
                  </span>
                  <span className="text-[10px] uppercase font-mono text-neutral-500">
                    Phase {idx + 1}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors">
                  {item.title}
                </h3>

                <p className="text-[11px] text-amber-400/80 font-medium mt-1">
                  {item.subtitle}
                </p>

                <p className="text-xs text-neutral-400 mt-2.5 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Step indicator footer dot */}
              <div className="mt-6 pt-3 border-t border-neutral-800/80 flex items-center justify-between text-[11px] text-neutral-500">
                <span>Step {idx + 1} of 5</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-neutral-950 border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-sm font-bold text-white">
              Ready to start Step 1 or 2 right now?
            </h4>
            <p className="text-xs text-neutral-400 mt-0.5">
              Launch our multi-step brief to assemble your quantities, sizes, and colors in 60 seconds.
            </p>
          </div>

          <button
            onClick={onOpenOrderModal}
            className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-xs transition-all shadow-md flex items-center gap-2 whitespace-nowrap shrink-0 cursor-pointer"
          >
            <span>Start Order Brief Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
