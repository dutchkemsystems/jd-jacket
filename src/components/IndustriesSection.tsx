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
        return <Building2 className="w-5 h-5 text-amber-400" />;
      case 'Truck':
        return <Truck className="w-5 h-5 text-amber-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-amber-400" />;
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-amber-400" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-amber-400" />;
      case 'Trophy':
        return <Trophy className="w-5 h-5 text-amber-400" />;
      case 'HardHat':
        return <HardHat className="w-5 h-5 text-amber-400" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-amber-400" />;
      default:
        return <Building2 className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="industries" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-500 block mb-2">
            Sector Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Purpose-Built Outerwear by Industry
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 mt-3 leading-relaxed">
            Every work environment presents distinct weather conditions, mobility demands, and branding conventions. Select your sector to explore tailored jackets built for your team.
          </p>
        </div>

        {/* 8 Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {INDUSTRIES.map((ind, idx) => (
            <div
              key={ind.id}
              className="group rounded-2xl bg-neutral-900/80 border border-neutral-800 p-6 flex flex-col justify-between hover:border-neutral-700 hover:bg-neutral-900 transition-all duration-200 shadow-lg"
            >
              <div>
                {/* Header row with Icon and Editorial Index */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-neutral-950 border border-neutral-800 group-hover:border-amber-500/30 transition-colors">
                    {getIcon(ind.iconName)}
                  </div>
                  <span className="text-xs font-mono text-neutral-500">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors">
                  {ind.name}
                </h3>

                <p className="text-xs text-neutral-400 mt-2.5 leading-relaxed line-clamp-3">
                  {ind.description}
                </p>

                {/* Key Need Note */}
                <div className="mt-4 pt-3 border-t border-neutral-800/80">
                  <span className="text-[11px] text-neutral-500 block">Focus Requirement:</span>
                  <p className="text-xs text-neutral-300 font-medium mt-0.5">
                    {ind.keyNeed}
                  </p>
                </div>
              </div>

              {/* Action Link: Explore Jackets */}
              <div className="mt-6 pt-3">
                <button
                  type="button"
                  onClick={() => onExploreJackets(ind.name)}
                  className="w-full py-2 px-3 rounded-lg bg-neutral-950 hover:bg-amber-500 text-neutral-300 hover:text-neutral-950 border border-neutral-800 hover:border-amber-500 text-xs font-semibold transition-all flex items-center justify-between group/btn cursor-pointer"
                >
                  <span>Explore Jackets</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
