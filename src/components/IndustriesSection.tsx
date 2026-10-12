import React from 'react';
import {
  Building2,
  Truck,
  ShieldCheck,
  GraduationCap,
  Compass,
  Trophy,
  HardHat,
  HeartHandshake,
  ArrowRight
} from 'lucide-react';
import { INDUSTRIES, IndustryItem } from '../data/jacketsData';

interface IndustriesSectionProps {
  onSelectIndustry: (industryId: string) => void;
  onExploreJackets: (industryName: string) => void;
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({
  onSelectIndustry,
  onExploreJackets,
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2':
        return <Building2 className="w-5 h-5 text-[#e85a2a]" />;
      case 'Truck':
        return <Truck className="w-5 h-5 text-[#e85a2a]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#e85a2a]" />;
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-[#e85a2a]" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-[#e85a2a]" />;
      case 'Trophy':
        return <Trophy className="w-5 h-5 text-[#e85a2a]" />;
      case 'HardHat':
        return <HardHat className="w-5 h-5 text-[#e85a2a]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-[#e85a2a]" />;
      default:
        return <Building2 className="w-5 h-5 text-[#e85a2a]" />;
    }
  };

  return (
    <section id="industries" className="py-20 md:py-28 bg-[#f6f5f0] border-t border-[#deded5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 bg-[#e85a2a] inline-block" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#e85a2a]">
              SECTOR SOLUTIONS
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#20231f] tracking-tight">
            Find Your Industry.
          </h2>
          <p className="text-sm sm:text-base text-[#555850] mt-3 leading-relaxed">
            Eight JD Pro collections purpose-built for how your teams work, move, and represent your organisation. Choose your sector to explore curated outerwear.
          </p>
        </div>

        {/* 8 Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {INDUSTRIES.map((ind, idx) => (
            <div
              key={ind.id}
              className="group rounded-xl bg-white border border-[#deded5] p-6 flex flex-col justify-between hover:border-[#e85a2a] hover:shadow-md transition-all duration-200"
            >
              <div>
                {/* Header row with Icon and Brand Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 bg-[#f6f5f0] border border-[#deded5] group-hover:border-[#e85a2a]/40 transition-colors">
                    {getIcon(ind.iconName)}
                  </div>
                  <span className="text-[11px] font-mono font-bold text-[#85867f]">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                </div>

                <div className="text-[10px] font-mono font-bold uppercase text-[#e85a2a] tracking-wider mb-1">
                  {ind.brandTag}
                </div>

                <h3 className="text-lg font-bold text-[#20231f] group-hover:text-[#e85a2a] transition-colors">
                  {ind.name}
                </h3>

                <p className="text-xs text-[#555850] mt-2.5 leading-relaxed line-clamp-3">
                  {ind.description}
                </p>

                {/* Audience Callout from live site */}
                <div className="mt-4 pt-3 border-t border-[#deded5]">
                  <span className="text-[10px] uppercase font-mono font-bold text-[#85867f] block">
                    Ideal For:
                  </span>
                  <p className="text-xs text-[#20231f] font-medium mt-0.5 line-clamp-2">
                    {ind.audience}
                  </p>
                </div>
              </div>

              {/* Action Link */}
              <div className="mt-6 pt-3">
                <button
                  type="button"
                  onClick={() => onExploreJackets(ind.name)}
                  className="w-full py-2.5 px-3 bg-[#f6f5f0] hover:bg-[#e85a2a] text-[#20231f] hover:text-white border border-[#deded5] hover:border-[#e85a2a] text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-between cursor-pointer"
                >
                  <span>Explore Jackets</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
