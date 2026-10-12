import React from 'react';
import { X, Layers, Scissors, Palette, FileText, Download, ExternalLink } from 'lucide-react';
import { SIZE_CHART } from '../data/jacketsData';

interface CatalogueModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenOrderBrief: () => void;
}

export const CATALOGUES_LIST = [
  { id: 'corporate', title: 'Corporate Pro', url: '/catalogues/jd-corporate-pro.pdf', filename: 'JD corporate pro.pdf' },
  { id: 'logistics', title: 'Logistics Pro', url: '/catalogues/jd-logistics-pro.pdf', filename: 'JD logistics pro.pdf' },
  { id: 'tactical', title: 'Tactical Pro', url: '/catalogues/jd-tactical-pro.pdf', filename: 'JD tactical pro.pdf' },
  { id: 'campus', title: 'Campus Pro', url: '/catalogues/jd-campus-pro.pdf', filename: 'JD campus pro.pdf' },
  { id: 'safari', title: 'Safari Pro', url: '/catalogues/jd-safari-pro.pdf', filename: 'JD safari pro.pdf' },
  { id: 'sport', title: 'Sport Pro', url: '/catalogues/jd-sport-pro.pdf', filename: 'JD sport pro.pdf', note: 'Marked as awaiting pages 4–5 and 9–10.' },
  { id: 'mining', title: 'Mining Pro', url: '/catalogues/jd-mining-pro.pdf', filename: 'JD mining pro.pdf' },
  { id: 'healthcare', title: 'Healthcare Pro', url: '/catalogues/jd-healthcare-pro.pdf', filename: 'JD healthcare pro.pdf' },
  { id: 'customization', title: 'JD Customization System', url: '/catalogues/jd-customization-system.pdf', filename: 'JD Customization System.pdf' }
];

export const CatalogueModal: React.FC<CatalogueModalProps> = ({
  isOpen,
  onClose,
  onOpenOrderBrief,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-sm overflow-y-auto">
      <div
        className="relative w-full max-w-4xl bg-white border border-[#deded5] rounded-none shadow-2xl overflow-hidden my-auto"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#deded5] bg-[#f6f5f0]">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#e85a2a] inline-block" />
              <h2 className="text-base font-bold text-[#20231f] uppercase tracking-wide">
                JD Jackets Catalogues &amp; Technical System
              </h2>
            </div>
            <p className="text-xs text-[#555850] mt-0.5">
              Original PDF catalogues, fabric grades, size tolerance tables &amp; branding execution guides.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#555850] hover:text-[#20231f] hover:bg-[#deded5]/40 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[75vh] overflow-y-auto space-y-6 text-[#20231f] text-xs leading-relaxed">
          {/* Section 0: Original Catalogues Grid */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 bg-[#e85a2a] inline-block" />
              <h3 className="text-sm font-bold text-[#20231f] uppercase tracking-wider">
                Original PDF Catalogues
              </h3>
            </div>
            <p className="text-xs text-[#555850] mb-3">
              Explore the design sheets, colorways, and construction details from our original print editions:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {CATALOGUES_LIST.map((cat) => (
                <div key={cat.id} className="p-3 bg-[#f6f5f0] border border-[#deded5] flex flex-col justify-between">
                  <div>
                    <span className="font-bold text-[#20231f] block text-xs">{cat.title}</span>
                    <span className="text-[10px] text-[#85867f] font-mono block mt-0.5">{cat.filename}</span>
                    {cat.note && <span className="text-[10px] text-amber-700 block mt-1">{cat.note}</span>}
                  </div>
                  <div className="mt-3 pt-2 border-t border-[#deded5] flex items-center justify-between">
                    <a
                      href={cat.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[11px] font-bold text-[#e85a2a] hover:underline flex items-center gap-1"
                    >
                      <FileText className="w-3 h-3" />
                      <span>View PDF</span>
                    </a>
                    <a
                      href={cat.url}
                      download={cat.filename}
                      className="text-[11px] font-bold text-[#555850] hover:text-[#20231f] flex items-center gap-1"
                    >
                      <Download className="w-3 h-3" />
                      <span>Download</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section A: Fabrication & Performance Grades */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Layers className="w-4 h-4 text-[#e85a2a]" />
              <h3 className="text-sm font-bold text-[#20231f] uppercase tracking-wider">
                Technical Outerwear Fabric Matrices
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="p-3.5 bg-[#f6f5f0] border border-[#deded5]">
                <span className="font-bold text-[#20231f] block text-xs">Micro-Ripstop DWR</span>
                <span className="text-[10px] text-[#85867f] font-mono">Executive Puffers</span>
                <p className="mt-1.5 text-[11px] text-[#555850]">
                  100% recycled nylon with durable water repellent treatment. Ultra-dense weave prevents down migration while keeping weight light.
                </p>
              </div>

              <div className="p-3.5 bg-[#f6f5f0] border border-[#deded5]">
                <span className="font-bold text-[#20231f] block text-xs">3-Layer Bonded Softshell</span>
                <span className="text-[10px] text-[#85867f] font-mono">Technical Dispatch &amp; Field</span>
                <p className="mt-1.5 text-[11px] text-[#555850]">
                  Hydrostatic head rating of 10,000mm. Breathability index 5,000g/m²/24h. Interior micro-grid fleece bonds directly to weather barrier.
                </p>
              </div>

              <div className="p-3.5 bg-[#f6f5f0] border border-[#deded5]">
                <span className="font-bold text-[#20231f] block text-xs">450D Ballistic Oxford</span>
                <span className="text-[10px] text-[#85867f] font-mono">Heavy Weather Industrial</span>
                <p className="mt-1.5 text-[11px] text-[#555850]">
                  Industrial tensile strength tear-resistant canvas. Withstands abrasive concrete, gravel, and rigging environments with heat-sealed seams.
                </p>
              </div>
            </div>
          </div>

          {/* Section B: Sizing Matrix */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Scissors className="w-4 h-4 text-[#e85a2a]" />
              <h3 className="text-sm font-bold text-[#20231f] uppercase tracking-wider">
                Official Unisex Size Specification (XS–XXXL)
              </h3>
            </div>
            <p className="text-xs text-[#555850] mb-3">
              All garments are manufactured within standard industrial &plusmn;1.5 cm tolerance.
            </p>
            <div className="overflow-x-auto border border-[#deded5]">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#f6f5f0] border-b border-[#deded5] text-[11px] font-mono text-[#85867f]">
                    <th className="py-2.5 px-3">Size Code</th>
                    <th className="py-2.5 px-3">Chest (Inches)</th>
                    <th className="py-2.5 px-3">Chest (cm)</th>
                    <th className="py-2.5 px-3">Center Back Length</th>
                    <th className="py-2.5 px-3">Sleeve Length</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#deded5] font-mono text-xs">
                  {SIZE_CHART.map((row) => (
                    <tr key={row.size} className="hover:bg-[#f6f5f0]">
                      <td className="py-2 px-3 font-bold text-[#e85a2a]">{row.size}</td>
                      <td className="py-2 px-3 text-[#20231f]">{row.chestInches}</td>
                      <td className="py-2 px-3 text-[#20231f]">{row.chestCm}</td>
                      <td className="py-2 px-3 text-[#20231f]">{row.lengthCm}</td>
                      <td className="py-2 px-3 text-[#20231f]">{row.sleeveCm}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Section C: Decoration Guidelines */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Palette className="w-4 h-4 text-[#e85a2a]" />
              <h3 className="text-sm font-bold text-[#20231f] uppercase tracking-wider">
                Branding Execution Protocols
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3 bg-[#f6f5f0] border border-[#deded5]">
                <span className="font-bold text-[#20231f] block text-xs">Tajima High-Speed Embroidery</span>
                <p className="text-[11px] text-[#555850] mt-1">
                  1,000 stitches per minute using German Madeira Isacord threads. Guaranteed against unraveling, color fading, and bleaching for 100+ commercial wash cycles.
                </p>
              </div>

              <div className="p-3 bg-[#f6f5f0] border border-[#deded5]">
                <span className="font-bold text-[#20231f] block text-xs">3D Thermoplastic Silicone Insignias</span>
                <p className="text-[11px] text-[#555850] mt-1">
                  Molded 1.5mm–2.5mm raised silicone rubber transfers with micro-beveled borders. Delivers a tactile European alpine outerwear aesthetic.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-[#deded5] bg-[#f6f5f0]">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#555850] hover:text-[#20231f] cursor-pointer"
          >
            Close Catalogue
          </button>

          <button
            onClick={() => {
              onClose();
              onOpenOrderBrief();
            }}
            className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#e85a2a] hover:bg-[#cf4920] shadow-sm cursor-pointer"
          >
            Open Order Brief
          </button>
        </div>
      </div>
    </div>
  );
};
