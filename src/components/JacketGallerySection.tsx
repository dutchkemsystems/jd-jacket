import React, { useState } from 'react';
import { JACKET_STYLES, JacketStyle } from '../data/jacketsData';
import { Jacket360Viewer } from './Jacket360Viewer';
import { RotateCw, Sparkles, Filter, X, ArrowRight, Eye, Check } from 'lucide-react';

interface JacketGallerySectionProps {
  onOpenOrderModal: (jacketId?: string) => void;
  selectedIndustryFilter?: string | null;
  onClearIndustryFilter?: () => void;
}

export const JacketGallerySection: React.FC<JacketGallerySectionProps> = ({
  onOpenOrderModal,
  selectedIndustryFilter,
  onClearIndustryFilter,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [inspectedJacket, setInspectedJacket] = useState<JacketStyle | null>(null);
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});

  // Toggle front/back view for an individual card
  const toggleCardFlip = (jacketId: string) => {
    setFlippedCards((prev) => ({
      ...prev,
      [jacketId]: !prev[jacketId],
    }));
  };

  const categories = ['All', 'Puffer', 'Softshell', 'Parka', 'Fleece', 'Safety', 'Bomber', 'Windbreaker', 'Vest', 'Technical'];

  // Filter jackets
  const filteredJackets = JACKET_STYLES.filter((jacket) => {
    const matchesCategory = selectedCategory === 'All' || jacket.category === selectedCategory;
    const matchesIndustry = !selectedIndustryFilter || jacket.industry === selectedIndustryFilter;
    return matchesCategory && matchesIndustry;
  });

  return (
    <section id="gallery" className="py-20 md:py-28 bg-neutral-900/40 border-t border-neutral-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-500 block mb-2">
              Full 20-Model Outerwear Archive
            </span>
            {/* Mandatory Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Custom jacket examples. Every angle. Every detail.
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 mt-3 leading-relaxed">
              Explore 20 certified corporate outerwear cuts with front-and-back inspection, rotatable 360° views, and bespoke branding zones.
            </p>
          </div>

          {/* Mandatory CTA button */}
          <div className="shrink-0">
            <button
              onClick={() => onOpenOrderModal()}
              className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-2 cursor-pointer"
            >
              <span>EXPLORE CUSTOM JACKETS</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 p-3 rounded-xl bg-neutral-900 border border-neutral-800">
          <div className="flex items-center gap-2 overflow-x-auto py-1 scrollbar-none">
            <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider mr-2 shrink-0">
              Silhouette:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-amber-500 text-neutral-950 font-semibold shadow-sm'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {selectedIndustryFilter && (
            <div className="flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-lg text-xs text-amber-300">
              <span>Filtered by: <strong>{selectedIndustryFilter}</strong></span>
              {onClearIndustryFilter && (
                <button
                  onClick={onClearIndustryFilter}
                  className="p-0.5 hover:text-white ml-1"
                  title="Clear industry filter"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          )}
        </div>

        {/* 20 Jacket Styles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredJackets.map((jacket) => {
            const isFlipped = !!flippedCards[jacket.id];
            const primaryColor = jacket.availableColours[0];

            return (
              <div
                key={jacket.id}
                className="rounded-2xl bg-neutral-900 border border-neutral-800 overflow-hidden flex flex-col justify-between hover:border-neutral-700 transition-all duration-200 group shadow-lg"
              >
                {/* Visual Preview Box (Interactive Front & Back Flip) */}
                <div className="relative h-64 bg-neutral-950/80 p-4 flex flex-col items-center justify-center border-b border-neutral-800/80 overflow-hidden">
                  {/* Subtle radial glow */}
                  <div
                    className="absolute inset-0 opacity-20 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at 50% 50%, ${primaryColor.accentHex || primaryColor.hex} 0%, transparent 70%)`,
                    }}
                  />

                  {/* SVG Silhouette representation (Front or Back) */}
                  <div className="relative w-40 h-48 transition-transform duration-300 group-hover:scale-105 flex items-center justify-center">
                    <svg viewBox="0 0 240 280" className="w-full h-full drop-shadow-xl">
                      <defs>
                        <linearGradient id={`grad-${jacket.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor={primaryColor.accentHex || primaryColor.hex} />
                          <stop offset="100%" stopColor={primaryColor.hex} />
                        </linearGradient>
                      </defs>

                      {/* Jacket Torso Outline */}
                      <path
                        d="M 85 45 L 50 62 L 30 130 L 42 210 L 62 205 L 70 150 L 72 235 Q 120 240 168 235 L 170 150 L 178 205 L 198 210 L 210 130 L 190 62 L 155 45 Q 120 40 85 45 Z"
                        fill={`url(#grad-${jacket.id})`}
                        stroke="rgba(255,255,255,0.15)"
                        strokeWidth="1.2"
                      />

                      {/* Front Details vs Back Details */}
                      {!isFlipped ? (
                        <>
                          {/* Front Zip */}
                          <line x1="120" y1="45" x2="120" y2="238" stroke="#0a0a0c" strokeWidth="3" />
                          <line x1="120" y1="45" x2="120" y2="238" stroke="#f59e0b" strokeWidth="1" strokeDasharray="3 2" />
                          {/* Chest Emblem */}
                          <circle cx="95" cy="95" r="7" fill="#f59e0b" fillOpacity="0.4" stroke="#f59e0b" strokeWidth="1" />
                          <path d="M 92 98 L 95 92 L 98 98 Z" fill="#f59e0b" />
                          {/* Welded Pockets */}
                          <line x1="82" y1="180" x2="92" y2="202" stroke="#121214" strokeWidth="2.5" strokeLinecap="round" />
                          <line x1="158" y1="180" x2="148" y2="202" stroke="#121214" strokeWidth="2.5" strokeLinecap="round" />
                        </>
                      ) : (
                        <>
                          {/* Rear Yoke seam */}
                          <path d="M 68 80 Q 120 88 172 80" stroke="rgba(0,0,0,0.5)" strokeWidth="2" fill="none" />
                          {/* Rear Large Logo Zone */}
                          <rect x="85" y="100" width="70" height="22" rx="3" fill="rgba(0,0,0,0.4)" stroke="#f59e0b" strokeWidth="0.8" strokeDasharray="2 2" />
                          <text x="120" y="114" fontSize="6" fontWeight="bold" fill="#ffffff" textAnchor="middle">
                            BACK PRINT ZONE
                          </text>
                        </>
                      )}
                    </svg>
                  </div>

                  {/* Angle Flip Toggle Button & 360 inspect button */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => toggleCardFlip(jacket.id)}
                      className="px-2 py-1 rounded bg-neutral-900/90 hover:bg-neutral-800 text-[11px] font-mono text-neutral-300 border border-neutral-700/60 flex items-center gap-1 transition-colors cursor-pointer"
                      title="Toggle Front/Back View"
                    >
                      <RotateCw className="w-3 h-3 text-amber-400" />
                      <span>{isFlipped ? 'View Front' : 'View Back'}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setInspectedJacket(jacket)}
                      className="px-2 py-1 rounded bg-amber-500/10 hover:bg-amber-500 hover:text-neutral-950 text-amber-400 text-[11px] font-semibold border border-amber-500/30 flex items-center gap-1 transition-all cursor-pointer"
                    >
                      <Eye className="w-3 h-3" />
                      <span>360° Inspect</span>
                    </button>
                  </div>

                  {/* Subtle View Indicator */}
                  <div className="absolute bottom-2 left-3 text-[10px] font-mono text-neutral-500">
                    {isFlipped ? 'Rear Elevation (180°)' : 'Front Elevation (0°)'}
                  </div>
                </div>

                {/* Card Content & Details */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between gap-2 text-xs">
                      <span className="font-mono text-neutral-500">{jacket.sku}</span>
                      <span className="text-[11px] font-medium text-amber-400/90">{jacket.weatherRating}</span>
                    </div>

                    <h3 className="text-base font-bold text-white mt-1 group-hover:text-amber-400 transition-colors">
                      {jacket.name}
                    </h3>

                    <p className="text-xs text-neutral-400 mt-2 line-clamp-2 leading-relaxed">
                      {jacket.tagline}
                    </p>

                    {/* Color Swatches */}
                    <div className="mt-3 flex items-center gap-1.5">
                      <span className="text-[10px] text-neutral-500 uppercase tracking-wider font-mono">
                        Colours:
                      </span>
                      {jacket.availableColours.map((c) => (
                        <span
                          key={c.name}
                          className="w-3.5 h-3.5 rounded-full border border-neutral-700 inline-block"
                          style={{ backgroundColor: c.hex }}
                          title={c.name}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Bottom Meta & Action */}
                  <div className="pt-3 border-t border-neutral-800/80 space-y-3">
                    <div className="flex items-center justify-between text-xs text-neutral-400 font-mono">
                      <span>MOQ: {jacket.moq} pcs</span>
                      <span className="text-neutral-200 font-bold">{jacket.priceGuide}</span>
                    </div>

                    <button
                      type="button"
                      onClick={() => onOpenOrderModal(jacket.id)}
                      className="w-full py-2 px-3 rounded-lg bg-neutral-950 hover:bg-amber-500 text-neutral-200 hover:text-neutral-950 border border-neutral-800 hover:border-amber-500 text-xs font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Configure This Style</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal 360 Viewer Popup when inspecting a style */}
        {inspectedJacket && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <div className="relative w-full max-w-4xl bg-neutral-950 border border-neutral-800 rounded-2xl p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-neutral-800">
                <div>
                  <h3 className="text-base font-bold text-white">
                    360° Inspection — {inspectedJacket.name} ({inspectedJacket.sku})
                  </h3>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    {inspectedJacket.fabricSpecs}
                  </p>
                </div>
                <button
                  onClick={() => setInspectedJacket(null)}
                  className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <Jacket360Viewer
                jacket={inspectedJacket}
                onConfigureClick={() => {
                  const id = inspectedJacket.id;
                  setInspectedJacket(null);
                  onOpenOrderModal(id);
                }}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
