import React from 'react';
import { X, Check, Shield, Download, FileText, Layers, Scissors, Palette } from 'lucide-react';
import { SIZE_CHART } from '../data/jacketsData';

interface CatalogueModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenOrderBrief: () => void;
}

export const CatalogueModal: React.FC<CatalogueModalProps> = ({
  isOpen,
  onClose,
  onOpenOrderBrief,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div
        className="relative w-full max-w-4xl bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden my-auto"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800 bg-neutral-950/80">
          <div>
            <h2 className="text-base font-bold text-neutral-100 flex items-center gap-2">
              <span>JD Jackets Customization System™ — Technical Catalogue</span>
            </h2>
            <p className="text-xs text-neutral-400 mt-0.5">
              Commercial specifications, fabric grades, size tolerance tables & decoration guidelines.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[75vh] overflow-y-auto space-y-6 text-neutral-300 text-xs leading-relaxed">
          {/* Section A: Fabrication & Performance Grades */}
          <div>
            <h3 className="text-sm font-bold text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-2">
              <Layers className="w-4 h-4" />
              <span>1. Technical Outerwear Fabric Matrices</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800">
                <span className="font-semibold text-neutral-200 block text-sm">Micro-Ripstop DWR</span>
                <span className="text-[11px] text-neutral-500 font-mono">Executive Puffers</span>
                <p className="mt-2 text-[11px] text-neutral-400">
                  100% recycled nylon with durable water repellent treatment. Ultra-dense weave prevents down feather migration while keeping weight under 420g.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800">
                <span className="font-semibold text-neutral-200 block text-sm">3-Layer Bonded Softshell</span>
                <span className="text-[11px] text-neutral-500 font-mono">Technical Dispatch & Field</span>
                <p className="mt-2 text-[11px] text-neutral-400">
                  Hydrostatic head rating of 10,000mm. Breathability index 5,000g/m²/24h. Interior micro-grid fleece bonds directly to the weather barrier.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800">
                <span className="font-semibold text-neutral-200 block text-sm">450D Ballistic Oxford</span>
                <span className="text-[11px] text-neutral-500 font-mono">Heavy Weather Industrial</span>
                <p className="mt-2 text-[11px] text-neutral-400">
                  Industrial tensile strength tear-resistant canvas. Withstands abrasive concrete, gravel, and rigging environments with taped heat-sealed seams.
                </p>
              </div>
            </div>
          </div>

          {/* Section B: Sizing Tolerance Matrix */}
          <div>
            <h3 className="text-sm font-bold text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-2">
              <Scissors className="w-4 h-4" />
              <span>2. Official Unisex Size Specification (XS–XXXL)</span>
            </h3>
            <p className="text-xs text-neutral-400 mb-3">
              All garments are manufactured within standard industrial &plusmn;1.5 cm tolerance.
            </p>
            <div className="overflow-x-auto rounded-xl border border-neutral-800">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-neutral-950 border-b border-neutral-800 text-[11px] font-mono text-neutral-400">
                    <th className="py-2.5 px-3">Size Code</th>
                    <th className="py-2.5 px-3">Chest (Inches)</th>
                    <th className="py-2.5 px-3">Chest (cm)</th>
                    <th className="py-2.5 px-3">Center Back Length</th>
                    <th className="py-2.5 px-3">Sleeve Length</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-800/80 font-mono text-xs">
                  {SIZE_CHART.map((row) => (
                    <tr key={row.size} className="hover:bg-neutral-800/30">
                      <td className="py-2 px-3 font-bold text-amber-400">{row.size}</td>
                      <td className="py-2 px-3 text-neutral-300">{row.chestInches}</td>
                      <td className="py-2 px-3 text-neutral-300">{row.chestCm}</td>
                      <td className="py-2 px-3 text-neutral-300">{row.lengthCm}</td>
                      <td className="py-2 px-3 text-neutral-300">{row.sleeveCm}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Section C: Decoration Guidelines */}
          <div>
            <h3 className="text-sm font-bold text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-2">
              <Palette className="w-4 h-4" />
              <span>3. Branding Execution Protocols</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800">
                <span className="font-semibold text-neutral-200 block">Tajima High-Speed Embroidery</span>
                <p className="text-[11px] text-neutral-400 mt-1">
                  1,000 stitches per minute using German Madeira Isacord threads. Guaranteed against unraveling, color fading, and bleaching for 100+ commercial wash cycles.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800">
                <span className="font-semibold text-neutral-200 block">3D Thermoplastic Silicone Insignias</span>
                <p className="text-[11px] text-neutral-400 mt-1">
                  Molded 1.5mm–2.5mm raised silicone rubber transfers with micro-beveled borders. Delivers a tactile European alpine outerwear aesthetic.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-neutral-800 bg-neutral-950/80">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-neutral-400 hover:text-white"
          >
            Close Catalogue
          </button>

          <button
            onClick={() => {
              onClose();
              onOpenOrderBrief();
            }}
            className="px-5 py-2 text-xs font-bold text-neutral-950 bg-amber-500 hover:bg-amber-400 rounded-lg transition-colors shadow-md"
          >
            Open Order Brief
          </button>
        </div>
      </div>
    </div>
  );
};
