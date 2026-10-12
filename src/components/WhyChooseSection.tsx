import React from 'react';
import { Briefcase, Users, Eye, Award } from 'lucide-react';
import { WHY_CHOOSE_CARDS } from '../data/jacketsData';

export const WhyChooseSection: React.FC = () => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Briefcase className="w-5 h-5 text-[#e85a2a]" />;
      case 1:
        return <Users className="w-5 h-5 text-[#e85a2a]" />;
      case 2:
        return <Eye className="w-5 h-5 text-[#e85a2a]" />;
      case 3:
        return <Award className="w-5 h-5 text-[#e85a2a]" />;
      default:
        return <Award className="w-5 h-5 text-[#e85a2a]" />;
    }
  };

  return (
    <section className="py-20 md:py-28 bg-white border-t border-[#deded5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 bg-[#e85a2a] inline-block" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#e85a2a]">
              THE BUSINESS IMPACT
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#20231f] tracking-tight">
            Why Businesses Choose Custom Jackets
          </h2>
          <p className="text-sm sm:text-base text-[#555850] mt-3 leading-relaxed">
            High-grade outerwear is more than standard company uniforming—it is an enduring investment in corporate authority, employee satisfaction, and round-the-clock brand presence.
          </p>
        </div>

        {/* 4 Benefit Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_CARDS.map((card, idx) => (
            <div
              key={card.title}
              className="rounded-xl bg-[#f6f5f0] border border-[#deded5] p-6 flex flex-col justify-between hover:border-[#e85a2a] transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 bg-white border border-[#deded5]">
                    {getIcon(idx)}
                  </div>
                  <span className="text-[11px] font-mono text-[#85867f] uppercase font-semibold">
                    {card.kicker}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#20231f] group-hover:text-[#e85a2a] transition-colors">
                  {card.title}
                </h3>

                <p className="text-xs text-[#555850] mt-2.5 leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Concrete proof metric */}
              <div className="mt-6 pt-4 border-t border-[#deded5]">
                <div className="text-xl font-bold text-[#e85a2a] font-mono">
                  {card.metric}
                </div>
                <p className="text-[11px] text-[#6e7068] mt-0.5">
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
