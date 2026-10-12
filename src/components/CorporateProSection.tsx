import React from 'react';
import { Shield, Feather, Layers, ArrowRight, FileText, Download } from 'lucide-react';
import { JACKET_STYLES } from '../data/jacketsData';
import { APP_IMAGES } from '../assets/images';

interface CorporateProSectionProps {
  onOpenOrderModal: (jacketId?: string) => void;
}

export const CorporateProSection: React.FC<CorporateProSectionProps> = ({ onOpenOrderModal }) => {
  const corporatePuffer = JACKET_STYLES.find((j) => j.id === 'corporate-puffer') || JACKET_STYLES[0];

  return (
    <section id="corporate-pro" className="py-20 md:py-28 bg-white border-y border-[#deded5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow */}
        <div className="mb-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#e85a2a] flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#e85a2a] inline-block" />
            <span>JD CORPORATE PRO™ BRAND SERIES</span>
          </span>
        </div>

        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#20231f] tracking-tight">
            Your company. Your identity.
          </h2>
          <p className="text-base sm:text-xl text-[#555850] font-medium">
            Staff. Teams. Organisations. One professional look.
          </p>

          {/* Clean Unboxed Tags */}
          <div className="flex flex-wrap items-center gap-2 pt-2 text-xs font-mono font-semibold text-[#85867f]">
            <span className="text-[#20231f]">FOR BUSINESSES</span>
            <span aria-hidden="true" className="text-[#deded5]">/</span>
            <span className="text-[#20231f]">FOR ORGANIZATIONS</span>
            <span aria-hidden="true" className="text-[#deded5]">/</span>
            <span className="text-[#e85a2a]">CUSTOM BRANDING</span>
            <span aria-hidden="true" className="text-[#deded5]">/</span>
            <span className="text-emerald-700">ORDER THROUGH WHATSAPP</span>
          </div>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Visual Photography Showcase */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative rounded-xl overflow-hidden border border-[#deded5] bg-[#f6f5f0] aspect-[16/10] shadow-sm group">
              <img
                src={corporatePuffer.image || "/gallery/images/corporate-puffer.f163f7f5fd.png"}
                alt="JD Corporate Pro Executive Puffer Jacket"
                className="w-full h-full object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.src = APP_IMAGES.heroExecutivePuffer || "/images/hero_executive_puffer_1791836347853.jpg";
                }}
              />

              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between bg-white/90 backdrop-blur-md p-4 border border-[#deded5] rounded-lg">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#e85a2a] font-bold block">
                    Featured Flagship Model
                  </span>
                  <h3 className="text-base font-bold text-[#20231f]">
                    {corporatePuffer.name} ({corporatePuffer.sku})
                  </h3>
                  <p className="text-xs text-[#6e7068] mt-0.5">
                    Micro-ripstop shell with thermal cluster eco-down insulation
                  </p>
                </div>

                <div className="text-right">
                  <span className="text-[11px] text-[#85867f] block">Starting from</span>
                  <span className="text-base font-bold text-[#20231f] font-mono">{corporatePuffer.priceGuide}</span>
                </div>
              </div>
            </div>

            {/* Micro Strip */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg border border-[#deded5] bg-[#f6f5f0] p-3 flex items-center gap-3">
                <img
                  src={APP_IMAGES.customEmbroideryDetail}
                  alt="Madeira multi-thread embroidery crest detail"
                  className="w-14 h-14 rounded object-cover shrink-0"
                  onError={(e) => {
                    e.currentTarget.src = "/images/custom_embroidery_detail_1791836376503.jpg";
                  }}
                />
                <div>
                  <h4 className="text-xs font-bold text-[#20231f]">Tajima Embroidery</h4>
                  <p className="text-[11px] text-[#6e7068] mt-0.5">
                    Up to 15 thread colors, 12,000 stitches
                  </p>
                </div>
              </div>

              <div className="rounded-lg border border-[#deded5] bg-[#f6f5f0] p-3 flex items-center gap-3">
                <img
                  src={APP_IMAGES.featuredCorporatePro}
                  alt="High-density corporate crest"
                  className="w-14 h-14 rounded object-cover shrink-0"
                  onError={(e) => {
                    e.currentTarget.src = "/images/featured_corporate_pro_1791836357066.jpg";
                  }}
                />
                <div>
                  <h4 className="text-xs font-bold text-[#20231f]">Tailored Finish</h4>
                  <p className="text-[11px] text-[#6e7068] mt-0.5">
                    Waterproof seams &amp; reverse-coil zips
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Specs & Direct Ordering */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-[#20231f]">
                Engineered for Corporate Dignity and Field Resilience
              </h3>
              <p className="text-sm text-[#555850] leading-relaxed">
                The JD Corporate Pro™ Executive Puffer is specifically engineered for business teams who need a sharp, tailored silhouette without sacrificing thermal protection during cold mornings, airport transitions, or outdoor client inspections.
              </p>
            </div>

            {/* Highlights */}
            <div className="space-y-3 border-y border-[#deded5] py-4">
              <div className="flex items-start gap-3">
                <div className="p-1.5 bg-[#f6f5f0] text-[#e85a2a] mt-0.5 border border-[#deded5]">
                  <Feather className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#20231f]">Ultra-Lightweight Thermal Retaining</h4>
                  <p className="text-xs text-[#6e7068]">
                    Eco-cluster insulation retains loft and heat while packing compactly for business travel.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1.5 bg-[#f6f5f0] text-[#e85a2a] mt-0.5 border border-[#deded5]">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#20231f]">DWR Water &amp; Stain Shield</h4>
                  <p className="text-xs text-[#6e7068]">
                    Repels light drizzle, morning dew, and workplace dust without stiffening the garment fabric.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1.5 bg-[#f6f5f0] text-[#e85a2a] mt-0.5 border border-[#deded5]">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#20231f]">Embroidery-Optimized Construction</h4>
                  <p className="text-xs text-[#6e7068]">
                    Concealed internal embroidery access zip prevents needle puncture through the down lining.
                  </p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  onClick={() => onOpenOrderModal('corporate-puffer')}
                  className="px-6 py-3.5 bg-[#e85a2a] hover:bg-[#cf4920] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Configure Executive Puffer</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="/catalogues/jd-corporate-pro.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-3 bg-white hover:bg-[#f6f5f0] text-[#20231f] border border-[#deded5] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                >
                  <FileText className="w-3.5 h-3.5 text-[#e85a2a]" />
                  <span>View PDF Catalogue</span>
                </a>
              </div>

              <p className="text-xs text-[#85867f]">
                MOQ 15 Units · Mixed XS–XXXL · Based in Gaborone, Botswana · Direct WhatsApp proofs
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
