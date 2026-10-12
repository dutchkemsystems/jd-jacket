import React from 'react';
import { Briefcase, Users, Eye, Award } from 'lucide-react';
import { WHY_CHOOSE_CARDS } from '../data/jacketsData';

export const WhyChooseSection: React.FC = () => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Briefcase className="w-5 h-5 text-amber-400" />;
      case 1:
        return <Users className="w-5 h-5 text-amber-400" />;
      case 2:
        return <Eye className="w-5 h-5 text-amber-400" />;
      case 3:
        return <Award className="w-5 h-5 text-amber-400" />;
      default:
        return <Award className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section className="py-20 md:py-28 bg-neutral-900/40 border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-500 block mb-2">
            The Business Impact
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Why Businesses Choose Custom Jackets
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 mt-3 leading-relaxed">
            High-grade outerwear is more than standard company uniforming—it is an enduring investment in corporate authority, employee satisfaction, and round-the-clock brand presence.
          </p>
        </div>

        {/* 4 Benefit Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_CARDS.map((card, idx) => (
            <div
              key={card.title}
              className="rounded-2xl bg-neutral-900 border border-neutral-800 p-6 flex flex-col justify-between hover:border-neutral-700 transition-all shadow-md group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-neutral-950 border border-neutral-800">
                    {getIcon(idx)}
                  </div>
                  <span className="text-[11px] font-mono text-neutral-500">
                    {card.kicker}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors">
                  {card.title}
                </h3>

                <p className="text-xs text-neutral-400 mt-2.5 leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Concrete proof metric */}
              <div className="mt-6 pt-4 border-t border-neutral-800">
                <div className="text-lg font-bold text-amber-400 font-mono">
                  {card.metric}
                </div>
                <p className="text-[11px] text-neutral-400 mt-0.5">
                  {card.metricDetail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
