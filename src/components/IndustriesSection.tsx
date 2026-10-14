import React, { useState, useEffect } from 'react';
import {
  Building2,
  Truck,
  ShieldCheck,
  GraduationCap,
  Compass,
  Trophy,
  HardHat,
  HeartHandshake,
  ArrowRight,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { INDUSTRIES, INDUSTRY_SLIDES_MAP } from '../data/jacketsData';

interface IndustriesSectionProps {
  onSelectIndustry: (industryId: string) => void;
  onExploreJackets: (industryName: string) => void;
}

const IndustrySlideBox: React.FC<{
  industryId: string;
  industryName: string;
}> = ({ industryId, industryName }) => {
  const slides = INDUSTRY_SLIDES_MAP[industryId] || INDUSTRY_SLIDES_MAP['corporate'] || [];
  const [current, setCurrent] = useState<number>(0);
  const [hovered, setHovered] = useState<boolean>(false);

  useEffect(() => {
    if (hovered || slides.length <= 1) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4200);
    return () => clearInterval(interval);
  }, [hovered, slides.length]);

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const handleDotClick = (e: React.MouseEvent, index: number) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrent(index);
  };

  if (!slides.length) return null;

  return (
    <div
      className="relative w-full h-60 bg-stone-900 rounded-lg overflow-hidden flex items-center justify-center p-0 mb-4 group/slider shadow-sm"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={slides[current]}
        alt={`${industryName} jacket ${current === 0 ? 'full-frame presentation' : 'catalogue slide ' + current}`}
        loading="lazy"
        className={`w-full h-full ${
          current === 0 ? 'object-cover object-center scale-100 hover:scale-105' : 'object-contain p-2'
        } transition-transform duration-500 pointer-events-none`}
      />

      {/* Prev / Next controls */}
      <button
        type="button"
        aria-label="Previous slide"
        onClick={handlePrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white/90 text-stone-900 border border-black/10 shadow flex items-center justify-center hover:bg-white hover:text-[#e85a2a] transition-all cursor-pointer z-10 opacity-90 hover:scale-105"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      <button
        type="button"
        aria-label="Next slide"
        onClick={handleNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white/90 text-stone-900 border border-black/10 shadow flex items-center justify-center hover:bg-white hover:text-[#e85a2a] transition-all cursor-pointer z-10 opacity-90 hover:scale-105"
      >
        <ChevronRight className="w-4 h-4" />
      </button>

      {/* Slide counter pill and dots */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-stone-900/80 backdrop-blur text-white text-[10px] font-mono z-10 pointer-events-auto">
        <span className="font-semibold">{current + 1}/{slides.length}</span>
        <div className="flex items-center gap-1 ml-1">
          {slides.map((_, i) => (
            <span
              key={i}
              onClick={(e) => handleDotClick(e, i)}
              className={`h-1 rounded-full cursor-pointer transition-all ${
                i === current ? 'w-3 bg-[#e85a2a]' : 'w-1 bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

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
    <section id="industries" className="py-20 md:py-28 bg-[#f6f5f0] border-t border-[#deded5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 bg-[#e85a2a] inline-block" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#e85a2a]">
              EIGHT INDUSTRIES. YOUR BUSINESS.
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#20231f] tracking-tight">
            Custom jackets for your industry.
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
              className="group rounded-xl bg-white border border-[#deded5] p-5 flex flex-col justify-between hover:border-[#e85a2a] hover:shadow-md transition-all duration-200"
            >
              <div>
                {/* Header row with Icon and Brand Tag */}
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 bg-[#f6f5f0] border border-[#deded5] group-hover:border-[#e85a2a]/40 transition-colors rounded">
                    {getIcon(ind.iconName)}
                  </div>
                  <span className="text-[11px] font-mono font-bold text-[#85867f]">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                </div>

                <div className="text-[10px] font-mono font-bold uppercase text-[#e85a2a] tracking-wider mb-1">
                  {ind.brandTag}
                </div>

                <h3 className="text-lg font-bold text-[#20231f] group-hover:text-[#e85a2a] transition-colors mb-3">
                  {ind.name}
                </h3>

                {/* Converted PDF Catalogue Slides Box */}
                <IndustrySlideBox industryId={ind.id} industryName={ind.name} />

                <p className="text-xs text-[#555850] mt-2 leading-relaxed line-clamp-2">
                  {ind.description}
                </p>

                {/* Audience Callout */}
                <div className="mt-3 pt-2.5 border-t border-[#deded5]">
                  <span className="text-[10px] uppercase font-mono font-bold text-[#85867f] block">
                    Ideal For:
                  </span>
                  <p className="text-xs text-[#20231f] font-medium mt-0.5 line-clamp-2">
                    {ind.audience}
                  </p>
                </div>
              </div>

              {/* Action Link */}
              <div className="mt-5 pt-3">
                <button
                  type="button"
                  onClick={() => onExploreJackets(ind.name)}
                  className="w-full py-2.5 px-3 bg-[#f6f5f0] hover:bg-[#e85a2a] text-[#20231f] hover:text-white border border-[#deded5] hover:border-[#e85a2a] text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-between cursor-pointer rounded"
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
