import React, { useState } from 'react';
import { ArrowDown, CheckCircle2, MessageSquare, Eye, Sparkles, Layers, ShieldCheck, Compass } from 'lucide-react';
import { Jacket360Viewer } from './Jacket360Viewer';
import { JACKET_STYLES, JacketStyle } from '../data/jacketsData';
import { APP_IMAGES } from '../assets/images';

interface HeroSectionProps {
  onOpenOrderModal: (jacketId?: string) => void;
  onConfigureStyle?: (jacket: JacketStyle) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenOrderModal, onConfigureStyle }) => {
  const [selectedJacketId, setSelectedJacketId] = useState<string>('corporate-puffer');
  const [heroDisplayMode, setHeroDisplayMode] = useState<'360-studio' | '4k-lookbook'>('360-studio');

  const activeJacket = JACKET_STYLES.find((j) => j.id === selectedJacketId) || JACKET_STYLES[0];

  const handleConfigure = () => {
    if (onConfigureStyle) {
      onConfigureStyle(activeJacket);
    } else {
      onOpenOrderModal(activeJacket.id);
    }
  };

  const featuredHeroPicks = [
    { id: 'corporate-puffer', label: 'Corporate Executive Puffer', category: 'Puffer' },
    { id: 'campus-softshell', label: 'Campus Crest Softshell', category: 'Softshell' },
    { id: 'mining-puffer', label: 'Mining Heavy-Duty Puffer', category: 'Safety Puffer' },
    { id: 'safari-olive-parka', label: 'Safari Hooded Parka', category: 'Parka' },
    { id: 'sport-gradient', label: 'Sport Sublimated Windbreaker', category: 'Windbreaker' },
  ];

  return (
    <section className="relative pt-8 pb-20 md:pt-14 md:pb-28 bg-[#f6f5f0] overflow-hidden">
      {/* Subtle background ambient gradient */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-gradient-to-b from-[#e85a2a]/8 via-[#e85a2a]/2 to-transparent blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Text Content with Catchy Modern Editorial Typography */}
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-10">
          {/* Eyebrow Kicker */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#deded5] rounded-full shadow-xs">
            <span className="w-2 h-2 bg-[#e85a2a] rounded-full animate-pulse" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#20231f]">
              JD JACKETS · 4K COMMERCIAL SPECIFICATIONS &amp; WHATSAPP ORDERING
            </span>
          </div>

          {/* Mandatory Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#20231f] tracking-tight leading-[1.05] text-balance">
            Custom jackets for businesses &amp; organizations.
          </h1>

          {/* Mandatory Subheadline */}
          <p className="text-base sm:text-lg text-[#555850] max-w-2xl mx-auto leading-relaxed text-balance font-normal">
            Create professional branded jackets for your staff, team, company or organization. Choose your style, colours, sizes and branding, then tell us what you need.
          </p>

          {/* Proof Badges with Subtle Hover Spring */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-[#20231f] font-semibold pt-1">
            <div className="flex items-center gap-2 group cursor-default">
              <CheckCircle2 className="w-4 h-4 text-[#e85a2a] shrink-0 transition-transform group-hover:scale-125" />
              <span>Your company logo &amp; colours</span>
            </div>
            <div className="flex items-center gap-2 group cursor-default">
              <CheckCircle2 className="w-4 h-4 text-[#e85a2a] shrink-0 transition-transform group-hover:scale-125" />
              <span>Mixed sizes for your team</span>
            </div>
            <div className="flex items-center gap-2 group cursor-default">
              <CheckCircle2 className="w-4 h-4 text-[#e85a2a] shrink-0 transition-transform group-hover:scale-125" />
              <span>Direct WhatsApp quoting &amp; proofing</span>
            </div>
          </div>

          {/* Action Row */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="#industries"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#e85a2a] hover:bg-[#cf4920] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Find your industry</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <button
              onClick={handleConfigure}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white hover:bg-[#edece5] text-[#20231f] border border-[#deded5] font-bold text-xs uppercase tracking-wider transition-all shadow-xs hover:-translate-y-0.5 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              <span>Configure This Style &amp; Order</span>
            </button>
          </div>
        </div>

        {/* Dynamic Jacket Style Quick-Switcher Tabs */}
        <div className="max-w-4xl mx-auto mb-6">
          <div className="p-1.5 bg-white border border-[#deded5] rounded-xl flex items-center justify-between gap-1 overflow-x-auto shadow-xs">
            <span className="text-[10px] font-mono uppercase font-bold text-[#85867f] px-2 shrink-0 hidden sm:inline">
              Quick Preview:
            </span>
            <div className="flex items-center gap-1 overflow-x-auto py-0.5 scrollbar-none w-full sm:w-auto">
              {featuredHeroPicks.map((pick) => (
                <button
                  key={pick.id}
                  onClick={() => setSelectedJacketId(pick.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                    selectedJacketId === pick.id
                      ? 'bg-[#20231f] text-white shadow-xs scale-102'
                      : 'text-[#555850] hover:text-[#20231f] hover:bg-[#f6f5f0]'
                  }`}
                >
                  {pick.label}
                </button>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-1 border-l border-[#deded5] pl-2 shrink-0">
              <button
                onClick={() => setHeroDisplayMode('360-studio')}
                className={`px-2.5 py-1 rounded text-xs font-bold uppercase transition-colors ${
                  heroDisplayMode === '360-studio'
                    ? 'bg-[#e85a2a] text-white'
                    : 'text-[#85867f] hover:text-[#20231f]'
                }`}
              >
                360° Studio
              </button>
              <button
                onClick={() => setHeroDisplayMode('4k-lookbook')}
                className={`px-2.5 py-1 rounded text-xs font-bold uppercase transition-colors ${
                  heroDisplayMode === '4k-lookbook'
                    ? 'bg-[#e85a2a] text-white'
                    : 'text-[#85867f] hover:text-[#20231f]'
                }`}
              >
                4K Lookbook
              </button>
            </div>
          </div>
        </div>

        {/* 4K Design Interactive Stage */}
        <div className="relative max-w-4xl mx-auto">
          {heroDisplayMode === '360-studio' ? (
            <div className="relative">
              <Jacket360Viewer
                jacket={activeJacket}
                onConfigureClick={handleConfigure}
                standalone={true}
              />
            </div>
          ) : (
            <div className="rounded-xl overflow-hidden border border-[#deded5] bg-white shadow-xl aspect-[16/9] relative group">
              <img
                src={APP_IMAGES.hero4kStudioShowcase}
                alt="4K Ultra-HD Commercial Outerwear Lookbook Display"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.src = "/images/hero_4k_studio_showcase_1791840430336.jpg";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Floating 4K Lookbook Details */}
              <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-white">
                <div>
                  <span className="px-2.5 py-1 bg-[#e85a2a] text-white font-mono text-[10px] font-bold uppercase tracking-wider inline-block mb-2">
                    4K Commercial Lookbook Display
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    JD Corporate Pro™ &amp; Technical Softshell Editions
                  </h3>
                  <p className="text-xs text-neutral-300 mt-1 max-w-lg">
                    High-density gold &amp; platinum thread Madeira embroidery with bonded waterproof zippers.
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={handleConfigure}
                    className="px-6 py-3 bg-white hover:bg-neutral-100 text-[#20231f] font-bold text-xs uppercase tracking-wider shadow-md transition-all cursor-pointer"
                  >
                    Configure This Style →
                  </button>
                  <button
                    onClick={() => setHeroDisplayMode('360-studio')}
                    className="px-4 py-3 bg-[#20231f]/80 hover:bg-[#20231f] text-white border border-white/20 font-bold text-xs uppercase tracking-wider backdrop-blur-sm cursor-pointer"
                  >
                    360° Rotate
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Floating 4K Feature Cards around Hero */}
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3 bg-white border border-[#deded5] rounded-lg shadow-2xs hover:border-[#e85a2a] transition-colors flex items-center gap-2.5">
              <div className="p-1.5 bg-[#f6f5f0] border border-[#deded5] rounded text-[#e85a2a]">
                <Sparkles className="w-3.5 h-3.5" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase font-bold text-[#85867f] block">Needlecraft</span>
                <span className="text-xs font-bold text-[#20231f]">12k Madeira Stitches</span>
              </div>
            </div>

            <div className="p-3 bg-white border border-[#deded5] rounded-lg shadow-2xs hover:border-[#e85a2a] transition-colors flex items-center gap-2.5">
              <div className="p-1.5 bg-[#f6f5f0] border border-[#deded5] rounded text-[#e85a2a]">
                <ShieldCheck className="w-3.5 h-3.5" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase font-bold text-[#85867f] block">Weather Rating</span>
                <span className="text-xs font-bold text-[#20231f]">10k Waterproof Membrane</span>
              </div>
            </div>

            <div className="p-3 bg-white border border-[#deded5] rounded-lg shadow-2xs hover:border-[#e85a2a] transition-colors flex items-center gap-2.5">
              <div className="p-1.5 bg-[#f6f5f0] border border-[#deded5] rounded text-[#e85a2a]">
                <Layers className="w-3.5 h-3.5" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase font-bold text-[#85867f] block">Team Fitting</span>
                <span className="text-xs font-bold text-[#20231f]">XS through XXXL Mixed</span>
              </div>
            </div>

            <div className="p-3 bg-white border border-[#deded5] rounded-lg shadow-2xs hover:border-[#e85a2a] transition-colors flex items-center gap-2.5">
              <div className="p-1.5 bg-[#f6f5f0] border border-[#deded5] rounded text-[#e85a2a]">
                <Compass className="w-3.5 h-3.5" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase font-bold text-[#85867f] block">Production</span>
                <span className="text-xs font-bold text-[#20231f]">Gaborone, Botswana HQ</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
