import React, { useState } from 'react';
import { ArrowDown, CheckCircle2, Shield, Sparkles, MessageSquare, ChevronRight } from 'lucide-react';
import { Jacket360Viewer } from './Jacket360Viewer';
import { JACKET_STYLES } from '../data/jacketsData';

interface HeroSectionProps {
  onOpenOrderModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenOrderModal }) => {
  const [selectedJacketId, setSelectedJacketId] = useState<string>('executive-puffer');
  const activeJacket = JACKET_STYLES.find((j) => j.id === selectedJacketId) || JACKET_STYLES[0];

  return (
    <section className="relative pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden">
      {/* Background radial gradient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-b from-amber-500/10 via-amber-600/5 to-transparent blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Text Content */}
        <div className="max-w-3xl mx-auto text-center space-y-6 mb-12">
          {/* Quiet Category Metadata Kicker (Anti-slop compliant: unboxed text) */}
          <div className="flex items-center justify-center gap-2 text-xs font-medium text-amber-400/90 tracking-wide">
            <span>B2B Commercial Outerwear</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span>Tailored Corporate Production</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span>Low MOQ 15 Units</span>
          </div>

          {/* Mandatory Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight text-balance leading-[1.12]">
            Custom jackets for businesses &amp; organizations.
          </h1>

          {/* Mandatory Subheadline */}
          <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed text-balance">
            Create professional branded jackets for your staff, team, company or organization. Choose your style, colours, sizes and branding, then tell us what you need.
          </p>

          {/* Mandatory Bullets (Clean unboxed check indicators) */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-neutral-200 pt-1">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Your company logo &amp; colours</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Mixed sizes for your team</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Direct WhatsApp quoting &amp; proofing</span>
            </div>
          </div>

          {/* Primary Action Row */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="#industries"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-sm transition-all shadow-lg hover:shadow-amber-500/20 whitespace-nowrap shrink-0"
            >
              <span>Find your industry</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenOrderModal}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border border-neutral-700 font-semibold text-sm transition-colors whitespace-nowrap shrink-0"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>Configure Order on WhatsApp</span>
            </button>
          </div>
        </div>

        {/* Interactive 360° Rotatable Jacket Showcase Below the Hero */}
        <div className="mt-8">
          <div className="text-center mb-4">
            <span className="text-xs uppercase tracking-widest text-neutral-400 font-semibold">
              Interactive 360° Jacket Showcase
            </span>
            <p className="text-xs text-neutral-500 mt-0.5">
              Drag, swipe, or use arrow keys to rotate and inspect high-density embroidery zones
            </p>
          </div>

          <Jacket360Viewer
            jacket={activeJacket}
            onConfigureClick={onOpenOrderModal}
            standalone={true}
          />
        </div>
      </div>
    </section>
  );
};
