import React from 'react';
import { Shield, Sparkles, Feather, Layers, CheckCircle2, ArrowRight } from 'lucide-react';
import { JACKET_STYLES } from '../data/jacketsData';

interface CorporateProSectionProps {
  onOpenOrderModal: (jacketId?: string) => void;
}

export const CorporateProSection: React.FC<CorporateProSectionProps> = ({ onOpenOrderModal }) => {
  const executivePuffer = JACKET_STYLES.find((j) => j.id === 'executive-puffer') || JACKET_STYLES[0];

  return (
    <section id="corporate-pro" className="py-20 md:py-28 bg-neutral-900/60 border-y border-neutral-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Brand Kicker */}
        <div className="mb-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-500">
            JD Corporate Pro™ Outerwear Series
          </span>
        </div>

        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Your company. Your identity.
          </h2>
          <p className="text-base sm:text-xl text-neutral-300 font-medium">
            Staff. Teams. Organisations. One professional look.
          </p>
          {/* Tags list: clean editorial unboxed typography */}
          <div className="flex flex-wrap items-center gap-2 pt-2 text-xs font-mono font-medium text-neutral-400">
            <span className="text-neutral-200">FOR BUSINESSES</span>
            <span aria-hidden="true" className="text-neutral-600">/</span>
            <span className="text-neutral-200">FOR ORGANIZATIONS</span>
            <span aria-hidden="true" className="text-neutral-600">/</span>
            <span className="text-amber-400">CUSTOM BRANDING</span>
            <span aria-hidden="true" className="text-neutral-600">/</span>
            <span className="text-emerald-400">ORDER THROUGH WHATSAPP</span>
          </div>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Visual Photography Showcase */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950 aspect-[16/10] shadow-2xl group">
              <img
                src="/src/assets/images/hero_executive_puffer_1791836347853.jpg"
                alt="JD Corporate Pro Executive Puffer Jacket on ghost mannequin"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-80" />

              {/* Inset Badge Callout */}
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400 block">
                    Featured Flagship Model
                  </span>
                  <h3 className="text-lg font-bold text-white">
                    Executive Puffer Jacket (JD-EP01)
                  </h3>
                  <p className="text-xs text-neutral-300 mt-0.5">
                    Micro-ripstop nylon shell with thermal cluster eco-down fill
                  </p>
                </div>

                <div className="hidden sm:block text-right">
                  <span className="text-xs text-neutral-400 block">From</span>
                  <span className="text-lg font-bold text-amber-400 font-mono">$48 / unit</span>
                </div>
              </div>
            </div>

            {/* Thumbnail Dual Strip */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden border border-neutral-800 bg-neutral-950 p-3 flex items-center gap-3">
                <img
                  src="/src/assets/images/featured_corporate_pro_1791836357066.jpg"
                  alt="High density embroidery detail on corporate softshell"
                  className="w-16 h-16 rounded-lg object-cover shrink-0"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="text-xs font-semibold text-neutral-200">Embroidered Crest</h4>
                  <p className="text-[11px] text-neutral-400 mt-0.5">
                    Madeira 12k stitch density on left chest
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-3 flex items-center gap-3">
                <img
                  src="/src/assets/images/custom_embroidery_detail_1791836376503.jpg"
                  alt="Multi-thread metallic thread embroidery detail"
                  className="w-16 h-16 rounded-lg object-cover shrink-0"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="text-xs font-semibold text-neutral-200">Industrial Seam Lock</h4>
                  <p className="text-[11px] text-neutral-400 mt-0.5">
                    Waterproof taped stitching &amp; YKK zips
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Specifications & Ordering Action */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">
                Engineered for Corporate Dignity and Field Resilience
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                The JD Corporate Pro™ Executive Puffer is specifically engineered for business teams who need a sharp, tailored silhouette without sacrificing thermal protection during cold mornings, airport transitions, or outdoor client inspections.
              </p>
            </div>

            {/* Key Features List */}
            <div className="space-y-3 border-y border-neutral-800 py-4">
              <div className="flex items-start gap-3">
                <div className="p-1 rounded bg-amber-500/10 text-amber-400 mt-0.5">
                  <Feather className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-neutral-200">Ultra-Lightweight Thermal Retaining</h4>
                  <p className="text-xs text-neutral-400">
                    Eco-cluster insulation retains loft and heat while compressing easily into travel briefcases.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1 rounded bg-amber-500/10 text-amber-400 mt-0.5">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-neutral-200">DWR Water &amp; Stain Shield</h4>
                  <p className="text-xs text-neutral-400">
                    Repels light drizzle, coffee spills, and worksite dust without stiffening the garment fabric.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1 rounded bg-amber-500/10 text-amber-400 mt-0.5">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-neutral-200">Embroidery-Optimized Construction</h4>
                  <p className="text-xs text-neutral-400">
                    Concealed internal embroidery zip access prevents needle puncture through the down lining.
                  </p>
                </div>
              </div>
            </div>

            {/* Ordering Action */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={() => onOpenOrderModal('executive-puffer')}
                className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Configure Executive Puffer</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <span className="text-xs text-neutral-400 text-center sm:text-left">
                MOQ 15 Units · Mixed XS–XXXL · Free digital sample
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
