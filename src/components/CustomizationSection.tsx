import React from 'react';
import { Layers, Palette, Sparkles, Sliders, BookOpen, FileCheck } from 'lucide-react';

interface CustomizationSectionProps {
  onOpenCatalogue: () => void;
  onOpenOrderBrief: () => void;
}

export const CustomizationSection: React.FC<CustomizationSectionProps> = ({
  onOpenCatalogue,
  onOpenOrderBrief,
}) => {
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

          {/* Mandatory Two Links */}
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
            <div className="rounded-xl overflow-hidden border border-[#deded5] bg-white shadow-sm relative aspect-[4/3] group">
              <img
                src="/src/assets/images/custom_embroidery_detail_1791836376503.jpg"
                alt="High-density German multi-thread embroidery on waterproof shell fabric"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#20231f]/90 via-[#20231f]/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-xs text-white">
                <span className="font-mono text-amber-400 text-[10px] block uppercase font-bold">
                  Macro Precision Inspection
                </span>
                <p className="font-bold text-white mt-0.5">
                  12,000-Stitch High-Density Madeira Polyneon Thread
                </p>
                <p className="text-[11px] text-neutral-300 mt-0.5">
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
                Debossed rubber zipper pullers, custom snap buttons, storm storm flaps, and internal headphone ports.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
