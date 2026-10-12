import React, { useState } from 'react';
import {
  Layers,
  Palette,
  Sparkles,
  Sliders,
  BookOpen,
  FileCheck,
  ZoomIn,
  X,
  ShieldCheck,
  Check,
  Maximize2
} from 'lucide-react';
import { APP_IMAGES } from '../assets/images';

interface CustomizationSectionProps {
  onOpenCatalogue: () => void;
  onOpenOrderBrief: () => void;
}

export const CustomizationSection: React.FC<CustomizationSectionProps> = ({
  onOpenCatalogue,
  onOpenOrderBrief,
}) => {
  const [isMacroModalOpen, setIsMacroModalOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);

  return (
    <section className="py-20 md:py-28 bg-[#f6f5f0] border-t border-[#deded5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 bg-[#e85a2a] inline-block" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#e85a2a]">
              TAILORED ENGINEERING
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#20231f] tracking-tight">
            Customize your jacket.
          </h2>
          <p className="text-sm sm:text-base text-[#555850] mt-3 leading-relaxed">
            Every stitch, seam, and closure is engineered around your organization's exact visual guidelines and operational demands. We combine luxury retail-quality garment builds with heavy-duty commercial embroidery.
          </p>

          {/* Mandatory Links */}
          <div className="flex flex-wrap items-center gap-4 pt-6">
            <button
              type="button"
              onClick={onOpenCatalogue}
              className="inline-flex items-center gap-2 text-xs font-bold text-[#e85a2a] hover:text-[#cf4920] underline underline-offset-4 decoration-[#e85a2a]/40 hover:decoration-[#cf4920] transition-all cursor-pointer uppercase tracking-wider"
            >
              <BookOpen className="w-4 h-4" />
              <span>View the original Customization System catalogue</span>
            </button>

            <span className="text-[#deded5] hidden sm:inline">|</span>

            <button
              type="button"
              onClick={onOpenOrderBrief}
              className="inline-flex items-center gap-2 text-xs font-bold text-[#20231f] hover:text-[#e85a2a] underline underline-offset-4 decoration-[#deded5] hover:decoration-[#e85a2a] transition-all cursor-pointer uppercase tracking-wider"
            >
              <FileCheck className="w-4 h-4 text-emerald-600" />
              <span>Planning a detailed project? Complete a full brief</span>
            </button>
          </div>
        </div>

        {/* 2-Column Customization Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Macro Photography Callout */}
          <div className="lg:col-span-5">
            <div
              onClick={() => setIsMacroModalOpen(true)}
              className="rounded-xl overflow-hidden border border-[#deded5] bg-white shadow-sm relative aspect-[4/3] group cursor-pointer transition-all hover:shadow-md hover:border-[#20231f]/30"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setIsMacroModalOpen(true);
                }
              }}
              title="Click to inspect 4K Macro Detail"
            >
              <img
                src={APP_IMAGES.customEmbroideryDetail}
                alt="High-density German multi-thread embroidery on waterproof shell fabric"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.src = "/images/custom_embroidery_detail_1791836376503.jpg";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#20231f]/90 via-[#20231f]/20 to-transparent pointer-events-none" />

              {/* Click to inspect badge */}
              <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#20231f]/85 text-white text-[11px] font-medium backdrop-blur-xs border border-white/10 opacity-90 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-3.5 h-3.5 text-[#e85a2a]" />
                <span>Click to Inspect 4K</span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-xs text-white">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-mono text-amber-300 text-[11px] block uppercase font-bold tracking-wider">
                    Macro Precision Inspection
                  </span>
                </div>
                <p className="font-bold text-white text-sm mt-0.5">
                  12,000-Stitch High-Density Madeira Polyneon Thread
                </p>
                <p className="text-[11px] text-neutral-300 mt-1 leading-snug">
                  Wash-tested up to 90°C without shrinkage, puckering, or dye bleeding.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Key Customization Levers */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white border border-[#deded5]">
              <div className="p-2.5 bg-[#f6f5f0] border border-[#deded5] w-fit mb-3">
                <Layers className="w-4 h-4 text-[#e85a2a]" />
              </div>
              <h3 className="text-sm font-bold text-[#20231f]">Fabric &amp; Weather Proofing</h3>
              <p className="text-xs text-[#555850] mt-1.5 leading-relaxed">
                Choose between featherweight ripstop, breathable 10k waterproof bonded softshell, or ballistic Oxford.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-[#deded5]">
              <div className="p-2.5 bg-[#f6f5f0] border border-[#deded5] w-fit mb-3">
                <Sparkles className="w-4 h-4 text-[#e85a2a]" />
              </div>
              <h3 className="text-sm font-bold text-[#20231f]">Embroidery vs. 3D Silicone Badges</h3>
              <p className="text-xs text-[#555850] mt-1.5 leading-relaxed">
                Classic multi-thread needlecraft or modern raised rubber silicone emblems for tactile corporate luxury.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-[#deded5]">
              <div className="p-2.5 bg-[#f6f5f0] border border-[#deded5] w-fit mb-3">
                <Palette className="w-4 h-4 text-[#e85a2a]" />
              </div>
              <h3 className="text-sm font-bold text-[#20231f]">Pantone &amp; Accent Matching</h3>
              <p className="text-xs text-[#555850] mt-1.5 leading-relaxed">
                Direct colour-dyed outer fabrics, custom neck tapes, and contrast interior lining matched to your brand guide.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-[#deded5]">
              <div className="p-2.5 bg-[#f6f5f0] border border-[#deded5] w-fit mb-3">
                <Sliders className="w-4 h-4 text-[#e85a2a]" />
              </div>
              <h3 className="text-sm font-bold text-[#20231f]">Branded Hardware &amp; Trims</h3>
              <p className="text-xs text-[#555850] mt-1.5 leading-relaxed">
                Debossed rubber zipper pullers, custom snap buttons, storm flaps, and internal headphone ports.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 4K Macro Precision Inspection Lightbox Modal */}
      {isMacroModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl bg-white rounded-2xl overflow-hidden shadow-2xl border border-[#deded5] flex flex-col max-h-[92vh]">
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-[#deded5] bg-[#faf9f6] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] font-bold text-[#e85a2a] uppercase tracking-wider">
                      Macro Precision Inspection
                    </span>
                    <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-[#20231f] text-white">
                      4K DETAIL
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-extrabold text-[#20231f]">
                    High-Density Madeira Polyneon Threadcraft (12,000 Stitches)
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setZoomLevel((prev) => (prev >= 2 ? 1 : prev + 0.5))}
                  className="p-2 text-xs font-bold bg-[#f6f5f0] hover:bg-[#edece5] text-[#20231f] border border-[#deded5] rounded-lg flex items-center gap-1.5 transition-colors"
                  title="Toggle Zoom"
                >
                  <Maximize2 className="w-3.5 h-3.5 text-[#e85a2a]" />
                  <span className="hidden sm:inline">{zoomLevel}x</span>
                </button>
                <button
                  type="button"
                  onClick={() => setIsMacroModalOpen(false)}
                  className="p-2 text-[#555850] hover:text-[#20231f] hover:bg-[#f6f5f0] rounded-lg transition-colors"
                  aria-label="Close Inspection Modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Image Viewport */}
            <div className="relative flex-1 overflow-auto bg-[#1a1c18] flex items-center justify-center p-4 min-h-[320px]">
              <img
                src={APP_IMAGES.customEmbroideryDetail}
                alt="4K Macro Precision Embroidery Inspection"
                className="max-h-[60vh] max-w-full object-contain rounded-lg transition-transform duration-300"
                style={{ transform: `scale(${zoomLevel})` }}
                onError={(e) => {
                  e.currentTarget.src = "/images/custom_embroidery_detail_1791836376503.jpg";
                }}
              />
            </div>

            {/* Technical Inspection Specifications Footer */}
            <div className="p-4 sm:p-5 bg-white border-t border-[#deded5] grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#20231f] block">90°C Thermal Wash Tested</span>
                  <p className="text-[#6e7068] text-[11px] mt-0.5">Zero fiber puckering, color bleeding, or thread unraveling after 100+ commercial wash cycles.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#e85a2a] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#20231f] block">German Madeira Polyneon</span>
                  <p className="text-[#6e7068] text-[11px] mt-0.5">100% polyester continuous filament thread with chlorine resistance and luminous finish.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#e85a2a] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#20231f] block">Hydro-Shield Backing</span>
                  <p className="text-[#6e7068] text-[11px] mt-0.5">Waterproof heat-sealed iron backing ensures garment membrane retains complete weatherproofing.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
