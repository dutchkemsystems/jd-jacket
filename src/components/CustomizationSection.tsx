import React from 'react';
import { Layers, Palette, Sparkles, Sliders, ArrowRight, BookOpen, FileCheck } from 'lucide-react';

interface CustomizationSectionProps {
  onOpenCatalogue: () => void;
  onOpenOrderBrief: () => void;
}

export const CustomizationSection: React.FC<CustomizationSectionProps> = ({
  onOpenCatalogue,
  onOpenOrderBrief,
}) => {
  return (
    <section className="py-20 md:py-28 bg-neutral-950 border-t border-neutral-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-500 block mb-2">
            Tailored Engineering
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Customize your jacket.
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 mt-3 leading-relaxed">
            Every stitch, seam, and closure is engineered around your organization's exact visual guidelines and operational demands. We combine luxury retail-quality garment builds with heavy-duty commercial embroidery.
          </p>

          {/* Mandatory Two Links */}
          <div className="flex flex-wrap items-center gap-4 pt-6">
            <button
              type="button"
              onClick={onOpenCatalogue}
              className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 hover:text-amber-300 underline underline-offset-4 decoration-amber-500/50 hover:decoration-amber-300 transition-all cursor-pointer"
            >
              <BookOpen className="w-4 h-4" />
              <span>View the original Customization System catalogue</span>
            </button>

            <span className="text-neutral-600 hidden sm:inline">·</span>

            <button
              type="button"
              onClick={onOpenOrderBrief}
              className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-200 hover:text-white underline underline-offset-4 decoration-neutral-600 hover:decoration-white transition-all cursor-pointer"
            >
              <FileCheck className="w-4 h-4 text-emerald-400" />
              <span>Planning a detailed project? Complete a full brief</span>
            </button>
          </div>
        </div>

        {/* 2-Column Customization Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Macro Photography Callout */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-2xl relative aspect-[4/3] group">
              <img
                src="/src/assets/images/custom_embroidery_detail_1791836376503.jpg"
                alt="High-density German multi-thread embroidery on waterproof shell fabric"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-xs text-neutral-300">
                <span className="font-mono text-amber-400 text-[11px] block uppercase">
                  Macro Precision Inspection
                </span>
                <p className="font-semibold text-white mt-0.5">
                  12,000-Stitch High-Density Madeira Polyneon Thread
                </p>
                <p className="text-[11px] text-neutral-400 mt-0.5">
                  Wash-tested up to 90°C without shrinkage, puckering, or dye bleeding.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Key Customization Levers */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-neutral-900 border border-neutral-800">
              <div className="p-2 rounded-lg bg-neutral-950 border border-neutral-800 w-fit mb-3">
                <Layers className="w-4 h-4 text-amber-400" />
              </div>
              <h3 className="text-sm font-bold text-white">Fabric &amp; Weather Proofing</h3>
              <p className="text-xs text-neutral-400 mt-1.5 leading-relaxed">
                Choose between featherweight ripstop, breathable 10k waterproof bonded softshell, or ballistic Oxford.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-neutral-900 border border-neutral-800">
              <div className="p-2 rounded-lg bg-neutral-950 border border-neutral-800 w-fit mb-3">
                <Sparkles className="w-4 h-4 text-amber-400" />
              </div>
              <h3 className="text-sm font-bold text-white">Embroidery vs. 3D Silicone Badges</h3>
              <p className="text-xs text-neutral-400 mt-1.5 leading-relaxed">
                Classic multi-thread needlecraft or modern raised rubber silicone emblems for tactile corporate luxury.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-neutral-900 border border-neutral-800">
              <div className="p-2 rounded-lg bg-neutral-950 border border-neutral-800 w-fit mb-3">
                <Palette className="w-4 h-4 text-amber-400" />
              </div>
              <h3 className="text-sm font-bold text-white">Pantone &amp; Accent Matching</h3>
              <p className="text-xs text-neutral-400 mt-1.5 leading-relaxed">
                Direct colour-dyed outer fabrics, custom neck tapes, and contrast interior lining matched to your brand guide.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-neutral-900 border border-neutral-800">
              <div className="p-2 rounded-lg bg-neutral-950 border border-neutral-800 w-fit mb-3">
                <Sliders className="w-4 h-4 text-amber-400" />
              </div>
              <h3 className="text-sm font-bold text-white">Branded Hardware &amp; Trims</h3>
              <p className="text-xs text-neutral-400 mt-1.5 leading-relaxed">
                Debossed rubber zipper pullers, custom snap buttons, storm storm flaps, and internal headphone ports.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
