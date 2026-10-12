import React, { useState, useEffect } from 'react';
import {
  X,
  Check,
  Shield,
  Layers,
  Sparkles,
  Palette,
  Scissors,
  CheckCircle2,
  ExternalLink,
  RotateCw,
  Eye,
  Sliders,
  ChevronRight,
  Info,
  Clock,
  Compass,
  ArrowRight,
  Plus,
  Minus,
} from 'lucide-react';
import { JacketStyle, SIZE_CHART, COMPANY_INFO } from '../data/jacketsData';
import { JacketPhoto } from './JacketPhoto';
import { Jacket360Viewer } from './Jacket360Viewer';
import { buildWhatsAppUrl } from '../utils/whatsapp';

interface ConfigureStyleModalProps {
  jacket: JacketStyle | null;
  isOpen: boolean;
  onClose: () => void;
  onProceedToOrderBrief: (jacketId: string, configuredState: any) => void;
}

export const ConfigureStyleModal: React.FC<ConfigureStyleModalProps> = ({
  jacket,
  isOpen,
  onClose,
  onProceedToOrderBrief,
}) => {
  if (!isOpen || !jacket) return null;

  const [selectedColor, setSelectedColor] = useState<string>(jacket.availableColours[0]?.name || 'Black');
  const [activeTab, setActiveTab] = useState<'360-preview' | 'specs' | 'branding'>('360-preview');
  const [brandingMethod, setBrandingMethod] = useState<'Embroidery' | 'Printing' | 'Silicone Badge'>('Embroidery');
  const [selectedPlacements, setSelectedPlacements] = useState<string[]>(['Left Chest']);
  const [companyName, setCompanyName] = useState<string>('');
  const [contactName, setContactName] = useState<string>('');
  const [sizes, setSizes] = useState<{ [key: string]: number }>({
    XS: 2,
    S: 4,
    M: 6,
    L: 6,
    XL: 4,
    XXL: 2,
    XXXL: 1,
  });

  const totalJackets = Object.values(sizes).reduce((acc, qty) => acc + qty, 0);
  const meetsMoq = totalJackets >= jacket.moq;

  const togglePlacement = (placement: string) => {
    setSelectedPlacements((prev) =>
      prev.includes(placement) ? prev.filter((p) => p !== placement) : [...prev, placement]
    );
  };

  const updateSizeCount = (sizeKey: string, delta: number) => {
    setSizes((prev) => ({
      ...prev,
      [sizeKey]: Math.max(0, (prev[sizeKey] || 0) + delta),
    }));
  };

  const handleLaunchWhatsApp = () => {
    const sizeBreakdown = Object.entries(sizes)
      .filter(([_, q]) => q > 0)
      .map(([s, q]) => `• ${s}: ${q} units`)
      .join('\n');

    const message = [
      `Hello JD Jackets, I have configured a jacket style for my business:`,
      ``,
      `*Product:* ${jacket.name} (${jacket.sku})`,
      `*Collection:* ${jacket.collection.toUpperCase()} PRO™`,
      `*Category:* ${jacket.category} · ${jacket.industry}`,
      `*Selected Colour:* ${selectedColor}`,
      `*Branding Method:* ${brandingMethod}`,
      `*Placements:* ${selectedPlacements.join(', ') || 'Left Chest'}`,
      `*Total Quantity:* ${totalJackets} jackets`,
      `*Size Breakdown:*\n${sizeBreakdown}`,
      ``,
      companyName ? `*Company / Organisation:* ${companyName}` : '',
      contactName ? `*Contact Person:* ${contactName}` : '',
      ``,
      `Please provide a formal quote and production timeline for this configuration.`,
    ]
      .filter(Boolean)
      .join('\n');

    const url = buildWhatsAppUrl(COMPANY_INFO.whatsappRaw, message);
    window.open(url, '_blank');
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="configurator-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-sm overflow-y-auto"
    >
      <div className="relative w-full max-w-5xl bg-white border border-[#deded5] rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#deded5] bg-[#faf9f5]">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#e85a2a] animate-pulse" />
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-[#e85a2a]">
                  4K Interactive Style Configurator
                </span>
                <span className="text-[#deded5]">·</span>
                <span className="text-[10px] font-mono uppercase text-[#85867f]">{jacket.sku}</span>
              </div>
              <h2 id="configurator-title" className="text-xl font-extrabold text-[#20231f] tracking-tight">
                {jacket.name}
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#85867f] hover:text-[#20231f] hover:bg-neutral-100 rounded-full transition-colors cursor-pointer"
            aria-label="Close configurator"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content - Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 flex-1 overflow-y-auto">
          {/* Left Column: 4K 360 Garment Interactive Viewer */}
          <div className="lg:col-span-7 p-6 bg-gradient-to-b from-[#f9f8f4] to-[#f0eee6] border-b lg:border-b-0 lg:border-r border-[#deded5] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-white border border-[#deded5] text-[10px] font-bold text-[#20231f] shadow-2xs">
                    {jacket.weatherRating}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-[10px] font-bold text-emerald-700">
                    Lead time: {jacket.leadTime}
                  </span>
                </div>
                <span className="text-[11px] font-mono text-[#85867f]">MOQ: {jacket.moq} Units</span>
              </div>

              {/* 360 Viewer embedded */}
              <Jacket360Viewer jacket={jacket} standalone={false} />
            </div>

            {/* Quick Specs Strip */}
            <div className="mt-4 p-3 bg-white/80 backdrop-blur-sm rounded-xl border border-[#deded5] grid grid-cols-3 gap-2 text-center text-xs">
              <div>
                <span className="text-[10px] font-mono uppercase text-[#85867f] block font-bold">Fabric</span>
                <span className="font-semibold text-[#20231f]">{jacket.category} Softshell</span>
              </div>
              <div className="border-x border-[#deded5]">
                <span className="text-[10px] font-mono uppercase text-[#85867f] block font-bold">Embroidery</span>
                <span className="font-semibold text-[#20231f]">Madeira 12k Stitches</span>
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase text-[#85867f] block font-bold">Team Fit</span>
                <span className="font-semibold text-[#20231f]">XS to XXXL</span>
              </div>
            </div>
          </div>

          {/* Right Column: Configuration Controls */}
          <div className="lg:col-span-5 p-6 space-y-6 bg-white overflow-y-auto">
            {/* Colorway Selection */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-[#20231f] flex items-center justify-between mb-2.5">
                <span>1. Select Brand Colour</span>
                <span className="text-[11px] font-mono text-[#e85a2a]">{selectedColor}</span>
              </label>
              <div className="grid grid-cols-2 gap-2">
                {jacket.availableColours.map((col) => (
                  <button
                    key={col.name}
                    type="button"
                    onClick={() => setSelectedColor(col.name)}
                    className={`flex items-center gap-2.5 p-2 rounded-lg border text-left text-xs font-semibold transition-all cursor-pointer ${
                      selectedColor === col.name
                        ? 'border-[#e85a2a] bg-[#e85a2a]/5 text-[#20231f] shadow-2xs'
                        : 'border-[#deded5] hover:border-[#85867f] text-[#555850]'
                    }`}
                  >
                    <span
                      className="w-4 h-4 rounded-full border border-black/20 shrink-0"
                      style={{ backgroundColor: col.hex }}
                    />
                    <span className="truncate">{col.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Branding Method Selection */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-[#20231f] block mb-2.5">
                2. Branding Craftsmanship
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'Embroidery', label: 'Madeira Embroidery', desc: 'Textured luxury thread' },
                  { id: 'Printing', label: 'Screen / Sublimation', desc: 'Vibrant edge-to-edge' },
                  { id: 'Silicone Badge', label: '3D Silicone', desc: 'Tactile rubber badge' },
                ].map((method) => (
                  <button
                    key={method.id}
                    type="button"
                    onClick={() => setBrandingMethod(method.id as any)}
                    className={`p-2.5 rounded-lg border text-left transition-all cursor-pointer ${
                      brandingMethod === method.id
                        ? 'border-[#e85a2a] bg-[#e85a2a]/5 text-[#20231f]'
                        : 'border-[#deded5] hover:border-[#85867f] text-[#555850]'
                    }`}
                  >
                    <span className="text-xs font-bold block">{method.label}</span>
                    <span className="text-[10px] text-[#85867f]">{method.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Logo Placement Hotspots */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-[#20231f] block mb-2.5">
                3. Branding Zones (Select all that apply)
              </label>
              <div className="grid grid-cols-2 gap-2">
                {['Left Chest', 'Back Center', 'Left Sleeve', 'Collar / Flap'].map((placement) => {
                  const isSelected = selectedPlacements.includes(placement);
                  return (
                    <button
                      key={placement}
                      type="button"
                      onClick={() => togglePlacement(placement)}
                      className={`flex items-center justify-between p-2 rounded-lg border text-xs font-semibold transition-all cursor-pointer ${
                        isSelected
                          ? 'border-[#20231f] bg-[#20231f] text-white shadow-2xs'
                          : 'border-[#deded5] text-[#555850] hover:border-[#20231f]'
                      }`}
                    >
                      <span>{placement}</span>
                      {isSelected ? <Check className="w-3.5 h-3.5 text-[#e85a2a]" /> : <Plus className="w-3.5 h-3.5" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Size Breakdown & Quantity Counter */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#20231f]">
                  4. Team Sizing Breakdown
                </label>
                <span
                  className={`text-xs font-mono font-bold ${
                    meetsMoq ? 'text-emerald-700' : 'text-amber-700'
                  }`}
                >
                  Total: {totalJackets} Jackets (MOQ: {jacket.moq})
                </span>
              </div>

              <div className="grid grid-cols-7 gap-1.5 p-2 bg-[#f6f5f0] border border-[#deded5] rounded-xl text-center">
                {Object.keys(sizes).map((sizeKey) => (
                  <div key={sizeKey} className="flex flex-col items-center">
                    <span className="text-[10px] font-mono font-bold text-[#85867f] mb-1">{sizeKey}</span>
                    <div className="flex flex-col items-center gap-1">
                      <button
                        type="button"
                        onClick={() => updateSizeCount(sizeKey, 1)}
                        className="w-6 h-6 rounded bg-white hover:bg-neutral-100 border border-[#deded5] flex items-center justify-center text-xs font-bold cursor-pointer"
                        aria-label={`Increase ${sizeKey}`}
                      >
                        +
                      </button>
                      <span className="text-xs font-bold font-mono text-[#20231f]">{sizes[sizeKey]}</span>
                      <button
                        type="button"
                        onClick={() => updateSizeCount(sizeKey, -1)}
                        className="w-6 h-6 rounded bg-white hover:bg-neutral-100 border border-[#deded5] flex items-center justify-center text-xs font-bold cursor-pointer"
                        aria-label={`Decrease ${sizeKey}`}
                      >
                        -
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Business Details */}
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="text-[11px] font-bold text-[#555850] block mb-1">Company Name</label>
                <input
                  type="text"
                  placeholder="e.g. Apex Logistics"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-[#deded5] rounded-lg focus:outline-none focus:border-[#e85a2a]"
                />
              </div>
              <div>
                <label className="text-[11px] font-bold text-[#555850] block mb-1">Contact Person</label>
                <input
                  type="text"
                  placeholder="e.g. Sarah Smith"
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-[#deded5] rounded-lg focus:outline-none focus:border-[#e85a2a]"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 space-y-2">
              <button
                type="button"
                onClick={handleLaunchWhatsApp}
                className="w-full py-3.5 px-4 bg-[#e85a2a] hover:bg-[#cf4920] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Send Configuration to WhatsApp</span>
                <ExternalLink className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => {
                  onClose();
                  onProceedToOrderBrief(jacket.id, {
                    selectedColor,
                    brandingMethod,
                    selectedPlacements,
                    sizes,
                    totalJackets,
                  });
                }}
                className="w-full py-2.5 px-4 bg-white hover:bg-[#f6f5f0] text-[#20231f] border border-[#deded5] font-bold text-xs uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
              >
                Open Full Order Briefing Form
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
