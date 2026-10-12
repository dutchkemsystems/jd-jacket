import React, { useState, useEffect } from 'react';
import {
  X,
  Copy,
  ExternalLink,
  ChevronRight,
  ChevronLeft,
  Building,
  User,
  Phone,
  Mail,
  ShieldAlert,
  MapPin,
  Calendar,
  CheckCircle2,
  Eye,
  RotateCw,
  Sparkles,
  Maximize2,
  ZoomIn
} from 'lucide-react';
import { JACKET_STYLES, INDUSTRIES, COMPANY_INFO, JacketStyle } from '../data/jacketsData';
import { formatOrderWhatsAppMessage, buildWhatsAppUrl } from '../utils/whatsapp';
import { Jacket360Viewer } from './Jacket360Viewer';
import { APP_IMAGES } from '../assets/images';

interface OrderFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedJacketId?: string;
  preselectedIndustryId?: string;
}

export interface OrderState {
  businessName: string;
  contactPerson: string;
  email: string;
  whatsappNumber: string;
  industry: string;
  deliveryCity: string;
  deliveryCountry: string;
  requiredDate: string;

  jacketStyleId: string;
  sizes: {
    XS: number;
    S: number;
    M: number;
    L: number;
    XL: number;
    XXL: number;
    XXXL: number;
  };
  customMeasurements?: string;

  selectedColourName: string;
  customPantoneHex: string;
  brandingMethod: string;
  brandingOptions: string[];
  logoPlacements: string[];
  namesOrText: string;
  artworkFileName: string;
  specialInstructions: string;
}

const DEFAULT_ORDER: OrderState = {
  businessName: '',
  contactPerson: '',
  email: '',
  whatsappNumber: '',
  industry: 'Corporate & Office Teams',
  deliveryCity: '',
  deliveryCountry: 'Botswana',
  requiredDate: '',

  jacketStyleId: 'corporate-puffer',
  sizes: {
    XS: 0,
    S: 5,
    M: 10,
    L: 10,
    XL: 5,
    XXL: 0,
    XXXL: 0,
  },
  customMeasurements: '',

  selectedColourName: 'Black',
  customPantoneHex: '',
  brandingMethod: 'High-Density Multi-Thread Embroidery',
  brandingOptions: ['Embroidery', 'Logo', 'Front branding'],
  logoPlacements: ['Left Chest (Standard)'],
  namesOrText: '',
  artworkFileName: '',
  specialInstructions: '',
};

export const OrderFormModal: React.FC<OrderFormModalProps> = ({
  isOpen,
  onClose,
  preselectedJacketId,
  preselectedIndustryId,
}) => {
  const [step, setStep] = useState<number>(1);
  const [order, setOrder] = useState<OrderState>(DEFAULT_ORDER);
  const [copied, setCopied] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [visualMode, setVisualMode] = useState<'4k-product' | '4k-macro' | '360-rotate'>('4k-product');
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);

  useEffect(() => {
    if (preselectedJacketId) {
      const match = JACKET_STYLES.find((j) => j.id === preselectedJacketId);
      setOrder((prev) => ({
        ...prev,
        jacketStyleId: preselectedJacketId,
        selectedColourName: match?.availableColours[0]?.name || prev.selectedColourName,
      }));
    }
  }, [preselectedJacketId]);

  useEffect(() => {
    if (preselectedIndustryId) {
      const matched = INDUSTRIES.find((ind) => ind.id === preselectedIndustryId);
      if (matched) {
        setOrder((prev) => ({ ...prev, industry: matched.name }));
      }
    }
  }, [preselectedIndustryId]);

  if (!isOpen) return null;

  const currentJacket =
    JACKET_STYLES.find((j) => j.id === order.jacketStyleId) || JACKET_STYLES[0];

  const totalQuantity = Object.values(order.sizes).reduce((sum, val) => sum + (val || 0), 0);
  const isMoqMet = totalQuantity >= currentJacket.moq;

  const toggleBrandingOption = (opt: string) => {
    setOrder((prev) => {
      const exists = prev.brandingOptions.includes(opt);
      return {
        ...prev,
        brandingOptions: exists
          ? prev.brandingOptions.filter((o) => o !== opt)
          : [...prev.brandingOptions, opt],
      };
    });
  };

  const togglePlacement = (placement: string) => {
    setOrder((prev) => {
      const exists = prev.logoPlacements.includes(placement);
      return {
        ...prev,
        logoPlacements: exists
          ? prev.logoPlacements.filter((p) => p !== placement)
          : [...prev.logoPlacements, placement],
      };
    });
  };

  const handleLaunchWhatsApp = () => {
    const msg = formatOrderWhatsAppMessage(order, currentJacket);
    const url = buildWhatsAppUrl(COMPANY_INFO.whatsappRaw, msg);
    window.open(url, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  const handleCopyMessage = () => {
    const msg = formatOrderWhatsAppMessage(order, currentJacket);
    navigator.clipboard.writeText(msg);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-md overflow-y-auto">
      <div
        className="relative w-full max-w-4xl bg-white border border-[#deded5] rounded-none shadow-2xl overflow-hidden my-auto"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#deded5] bg-[#f6f5f0]">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[#e85a2a] inline-block" />
              <h2 className="text-base font-bold text-[#20231f] uppercase tracking-wide">
                Custom Jacket Order Configurator
              </h2>
              <span className="text-xs px-2 py-0.5 bg-white text-[#e85a2a] border border-[#deded5] font-mono font-bold">
                Step {step} of 4
              </span>
            </div>
            <p className="text-xs text-[#555850] mt-0.5">
              Configuring: <strong className="text-[#20231f]">{currentJacket.name}</strong> ({currentJacket.sku}) · 4K Visual Preview
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#555850] hover:text-[#20231f] hover:bg-[#deded5]/40 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-[#deded5] h-1">
          <div
            className="bg-[#e85a2a] h-1 transition-all duration-300"
            style={{ width: `${(step / 4) * 100}%` }}
          />
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[78vh] overflow-y-auto space-y-6">
          {/* STEP 1: ORGANIZATION & CONTACT */}
          {step === 1 && (
            <div className="space-y-4">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase text-[#e85a2a]">
                  SECTION 01
                </span>
                <h3 className="text-sm font-bold text-[#20231f] uppercase tracking-wider">
                  Organization &amp; Contact Details
                </h3>
                <p className="text-xs text-[#555850]">
                  Share your business and location details so our team can prepare your official quote.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#20231f] mb-1.5">
                    Company / Organization Name *
                  </label>
                  <div className="relative">
                    <Building className="w-4 h-4 absolute left-3 top-3 text-[#85867f]" />
                    <input
                      type="text"
                      placeholder="e.g. Debswana Diamond Company"
                      value={order.businessName}
                      onChange={(e) => setOrder({ ...order, businessName: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm bg-white border border-[#deded5] text-[#20231f] focus:outline-none focus:border-[#e85a2a]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#20231f] mb-1.5">
                    Contact Person *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 absolute left-3 top-3 text-[#85867f]" />
                    <input
                      type="text"
                      placeholder="Full Name / Procurement Title"
                      value={order.contactPerson}
                      onChange={(e) => setOrder({ ...order, contactPerson: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm bg-white border border-[#deded5] text-[#20231f] focus:outline-none focus:border-[#e85a2a]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#20231f] mb-1.5">
                    WhatsApp Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 absolute left-3 top-3 text-[#85867f]" />
                    <input
                      type="tel"
                      placeholder="+267 75 296 591"
                      value={order.whatsappNumber}
                      onChange={(e) => setOrder({ ...order, whatsappNumber: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm bg-white border border-[#deded5] text-[#20231f] focus:outline-none focus:border-[#e85a2a]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#20231f] mb-1.5">
                    Work Email Address
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 absolute left-3 top-3 text-[#85867f]" />
                    <input
                      type="email"
                      placeholder="procurement@company.com"
                      value={order.email}
                      onChange={(e) => setOrder({ ...order, email: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm bg-white border border-[#deded5] text-[#20231f] focus:outline-none focus:border-[#e85a2a]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#20231f] mb-1.5">
                    Industry Sector *
                  </label>
                  <select
                    value={order.industry}
                    onChange={(e) => setOrder({ ...order, industry: e.target.value })}
                    className="w-full px-3 py-2 text-sm bg-white border border-[#deded5] text-[#20231f] focus:outline-none focus:border-[#e85a2a]"
                  >
                    {INDUSTRIES.map((ind) => (
                      <option key={ind.id} value={ind.name}>
                        {ind.name} ({ind.brandTag})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#20231f] mb-1.5">
                    Delivery Location (Town / City &amp; Country) *
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 absolute left-3 top-3 text-[#85867f]" />
                    <input
                      type="text"
                      placeholder="Gaborone, Botswana"
                      value={order.deliveryCity}
                      onChange={(e) => setOrder({ ...order, deliveryCity: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm bg-white border border-[#deded5] text-[#20231f] focus:outline-none focus:border-[#e85a2a]"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-[#20231f] mb-1.5">
                    Required Delivery Date
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 absolute left-3 top-3 text-[#85867f]" />
                    <input
                      type="date"
                      value={order.requiredDate}
                      onChange={(e) => setOrder({ ...order, requiredDate: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm bg-white border border-[#deded5] text-[#20231f] focus:outline-none focus:border-[#e85a2a]"
                    />
                  </div>
                  <p className="text-[11px] text-[#85867f] mt-1">
                    Standard production is 7–10 days. Need rush 3-day turnaround? Specify in notes.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: JACKET MODEL, 4K PICTURE PREVIEW & SIZES */}
          {step === 2 && (
            <div className="space-y-6">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase text-[#e85a2a]">
                  SECTION 02
                </span>
                <h3 className="text-sm font-bold text-[#20231f] uppercase tracking-wider">
                  Select Jacket Silhouette &amp; 4K Design Inspection
                </h3>
                <p className="text-xs text-[#555850]">
                  Inspect the 4K high-resolution studio photography and configure team sizes.
                </p>
              </div>

              {/* Jacket Selector Dropdown */}
              <div>
                <label className="block text-xs font-bold text-[#20231f] mb-1.5">
                  Select Jacket Model (20 Certified Outerwear Cuts)
                </label>
                <select
                  value={order.jacketStyleId}
                  onChange={(e) => {
                    const chosen = JACKET_STYLES.find((j) => j.id === e.target.value);
                    setOrder({
                      ...order,
                      jacketStyleId: e.target.value,
                      selectedColourName: chosen ? chosen.availableColours[0].name : order.selectedColourName,
                    });
                  }}
                  className="w-full px-3 py-2 text-sm bg-white border border-[#deded5] text-[#20231f] focus:outline-none focus:border-[#e85a2a] font-medium"
                >
                  {JACKET_STYLES.map((j) => (
                    <option key={j.id} value={j.id}>
                      {j.name} ({j.sku}) — {j.kind} — MOQ: {j.moq} pcs — {j.priceGuide}
                    </option>
                  ))}
                </select>
              </div>

              {/* 4K Visualizer Box (User specifically asked for 4K pictures from configure this style) */}
              <div className="border border-[#deded5] rounded-xl overflow-hidden bg-[#f9f8f4]">
                {/* Visualizer Mode Tabs */}
                <div className="flex items-center justify-between px-4 py-2.5 bg-[#f6f5f0] border-b border-[#deded5] text-xs">
                  <div className="flex items-center gap-1">
                    <span className="text-[10px] uppercase font-mono font-bold text-[#85867f] mr-2">
                      4K View:
                    </span>
                    <button
                      type="button"
                      onClick={() => setVisualMode('4k-product')}
                      className={`px-3 py-1 font-bold text-xs uppercase transition-colors ${
                        visualMode === '4k-product'
                          ? 'bg-[#20231f] text-white shadow-xs'
                          : 'bg-white text-[#555850] hover:text-[#20231f] border border-[#deded5]'
                      }`}
                    >
                      4K Garment Studio
                    </button>
                    <button
                      type="button"
                      onClick={() => setVisualMode('4k-macro')}
                      className={`px-3 py-1 font-bold text-xs uppercase transition-colors ${
                        visualMode === '4k-macro'
                          ? 'bg-[#20231f] text-white shadow-xs'
                          : 'bg-white text-[#555850] hover:text-[#20231f] border border-[#deded5]'
                      }`}
                    >
                      4K Embroidery Macro
                    </button>
                    <button
                      type="button"
                      onClick={() => setVisualMode('360-rotate')}
                      className={`px-3 py-1 font-bold text-xs uppercase transition-colors ${
                        visualMode === '360-rotate'
                          ? 'bg-[#20231f] text-white shadow-xs'
                          : 'bg-white text-[#555850] hover:text-[#20231f] border border-[#deded5]'
                      }`}
                    >
                      Interactive 360°
                    </button>
                  </div>

                  <span className="text-[10px] font-mono font-bold text-[#e85a2a] hidden sm:inline uppercase">
                    ULTRA-HD 4K ASSET
                  </span>
                </div>

                {/* Main 4K Image Display Area */}
                <div className="p-4 sm:p-6 flex flex-col sm:flex-row items-center gap-6">
                  <div className="relative w-full sm:w-1/2 h-64 sm:h-72 bg-white border border-[#deded5] rounded-lg overflow-hidden flex items-center justify-center p-3 shadow-inner group">
                    {visualMode === '4k-product' && (
                      <div className="relative w-full h-full flex items-center justify-center">
                        <img
                          src={currentJacket.image}
                          alt={`${currentJacket.name} 4K Studio Image`}
                          className="max-h-full max-w-full object-contain filter drop-shadow-md transition-transform duration-300 group-hover:scale-105"
                          onError={(e) => {
                            e.currentTarget.src = APP_IMAGES.heroExecutivePuffer || "/images/hero_executive_puffer_1791836347853.jpg";
                          }}
                        />
                        {/* Live placement badge overlay */}
                        <div className="absolute top-2 left-2 px-2 py-0.5 bg-[#20231f]/80 text-white text-[10px] font-mono uppercase font-bold backdrop-blur-xs">
                          {currentJacket.kind} · {currentJacket.sku}
                        </div>
                        <div className="absolute bottom-2 right-2 flex items-center gap-1 px-2 py-0.5 bg-white/90 border border-[#deded5] text-[10px] text-[#20231f] font-mono">
                          <Eye className="w-3 h-3 text-[#e85a2a]" />
                          <span>4K Commercial Asset</span>
                        </div>
                      </div>
                    )}

                    {visualMode === '4k-macro' && (
                      <div className="relative w-full h-full">
                        <img
                          src={APP_IMAGES.jacketConfiguratorCloseup4k}
                          alt="4K Macro Detail of Tailored Embroidery"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          onError={(e) => {
                            e.currentTarget.src = "/images/jacket_configurator_closeup_4k_1791840430213.jpg";
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        <div className="absolute bottom-2 left-2 right-2 text-white text-[10px]">
                          <span className="font-bold block text-amber-300">4K Precision Needlework</span>
                          <span className="text-neutral-200">German Madeira Isacord thread · 100+ wash test</span>
                        </div>
                      </div>
                    )}

                    {visualMode === '360-rotate' && (
                      <div className="w-full h-full overflow-hidden flex items-center justify-center">
                        <Jacket360Viewer jacket={currentJacket} />
                      </div>
                    )}
                  </div>

                  {/* 4K Technical Specifications Column */}
                  <div className="w-full sm:w-1/2 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold uppercase text-[#e85a2a]">
                        {currentJacket.collection ? currentJacket.collection.toUpperCase() + ' PRO™' : currentJacket.category}
                      </span>
                      <span className="text-xs font-bold text-[#20231f] font-mono">
                        {currentJacket.priceGuide}
                      </span>
                    </div>

                    <h4 className="text-base font-extrabold text-[#20231f]">
                      {currentJacket.name}
                    </h4>

                    <p className="text-xs text-[#555850] leading-relaxed">
                      {currentJacket.description}
                    </p>

                    <div className="p-3 bg-white border border-[#deded5] rounded text-xs space-y-1">
                      <div className="flex justify-between">
                        <span className="text-[#85867f]">Fabrication:</span>
                        <span className="font-medium text-[#20231f] text-right max-w-[200px] truncate">{currentJacket.fabricSpecs}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#85867f]">Weather Rating:</span>
                        <span className="font-bold text-[#e85a2a]">{currentJacket.weatherRating}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#85867f]">Minimum Order:</span>
                        <span className="font-bold text-[#20231f]">{currentJacket.moq} units</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#85867f]">Lead Time:</span>
                        <span className="font-bold text-[#20231f]">{currentJacket.leadTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sizing Breakdown Matrix */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold text-[#20231f] uppercase tracking-wider">
                    Mixed Size Breakdown (Units per Size)
                  </label>
                  <span className="text-xs text-[#20231f] font-semibold">
                    Total: <strong className="text-[#e85a2a] font-mono text-sm">{totalQuantity}</strong> units
                  </span>
                </div>

                <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
                  {(['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'] as const).map((sz) => (
                    <div key={sz} className="p-2 bg-[#f6f5f0] border border-[#deded5] text-center">
                      <div className="text-xs font-bold text-[#20231f] mb-1">{sz}</div>
                      <input
                        type="number"
                        min="0"
                        value={order.sizes[sz] || 0}
                        onChange={(e) => {
                          const val = Math.max(0, parseInt(e.target.value) || 0);
                          setOrder({
                            ...order,
                            sizes: { ...order.sizes, [sz]: val },
                          });
                        }}
                        className="w-full text-center py-1 text-sm bg-white border border-[#deded5] text-[#20231f] focus:outline-none focus:border-[#e85a2a] font-mono"
                      />
                    </div>
                  ))}
                </div>

                <div className="mt-3">
                  <label className="block text-[11px] font-bold text-[#6e7068] mb-1">
                    Special Fitting / Custom Measurements (Optional):
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 2x Tall Sleeve +5cm, 1x Custom 4XL, Chest measurements"
                    value={order.customMeasurements || ''}
                    onChange={(e) => setOrder({ ...order, customMeasurements: e.target.value })}
                    className="w-full px-3 py-1.5 text-xs bg-white border border-[#deded5] text-[#20231f] focus:outline-none focus:border-[#e85a2a]"
                  />
                </div>

                {!isMoqMet && (
                  <div className="mt-3 p-3 bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0" />
                    <span>
                      Current quantity ({totalQuantity}) is below this style's standard MOQ ({currentJacket.moq} units). We happily discuss sample runs on WhatsApp!
                    </span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* STEP 3: BRANDING & SPEC */}
          {step === 3 && (
            <div className="space-y-5">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase text-[#e85a2a]">
                  SECTION 03
                </span>
                <h3 className="text-sm font-bold text-[#20231f] uppercase tracking-wider">
                  Colors &amp; Branding Details
                </h3>
                <p className="text-xs text-[#555850]">
                  Select garment colors, branding options, and logo placements.
                </p>
              </div>

              {/* Color swatches */}
              <div>
                <label className="block text-xs font-bold text-[#20231f] mb-2">
                  Garment Color Preference
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {currentJacket.availableColours.map((c) => (
                    <button
                      key={c.name}
                      type="button"
                      onClick={() => setOrder({ ...order, selectedColourName: c.name })}
                      className={`p-3 border text-left transition-all flex items-center gap-3 ${
                        order.selectedColourName === c.name
                          ? 'border-[#e85a2a] bg-orange-50/50'
                          : 'border-[#deded5] bg-white hover:border-[#85867f]'
                      }`}
                    >
                      <span
                        className="w-5 h-5 rounded-full border border-[#deded5] shrink-0"
                        style={{ backgroundColor: c.hex }}
                      />
                      <span className="text-xs font-bold text-[#20231f] truncate">
                        {c.name}
                      </span>
                    </button>
                  ))}
                </div>

                <div className="mt-3">
                  <label className="block text-[11px] font-bold text-[#6e7068] mb-1">
                    Custom Pantone / Brand Color Code (Optional):
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Pantone 289 C / #0C2340"
                    value={order.customPantoneHex}
                    onChange={(e) => setOrder({ ...order, customPantoneHex: e.target.value })}
                    className="w-full px-3 py-1.5 text-xs bg-white border border-[#deded5] text-[#20231f] font-mono"
                  />
                </div>
              </div>

              {/* Branding Options Checkboxes */}
              <div>
                <label className="block text-xs font-bold text-[#20231f] mb-2">
                  Branding Required (Select all that apply)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    'Embroidery',
                    'Printing',
                    'Logo',
                    'Front branding',
                    'Back branding',
                    'Sleeve branding',
                    '3D Silicone Badge',
                    'Reflective Tape',
                  ].map((opt) => {
                    const checked = order.brandingOptions.includes(opt);
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => toggleBrandingOption(opt)}
                        className={`p-2.5 text-xs font-bold text-left border flex items-center justify-between transition-colors ${
                          checked
                            ? 'border-[#e85a2a] bg-orange-50/50 text-[#e85a2a]'
                            : 'border-[#deded5] bg-white text-[#20231f]'
                        }`}
                      >
                        <span>{opt}</span>
                        {checked && <CheckCircle2 className="w-3.5 h-3.5 text-[#e85a2a]" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Logo Placement buttons */}
              <div>
                <label className="block text-xs font-bold text-[#20231f] mb-2">
                  Logo Placement Locations
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    'Left Chest (Standard)',
                    'Right Chest',
                    'Back Center (Large)',
                    'Left Upper Sleeve',
                    'Right Upper Sleeve',
                    'Collar / Back Nape',
                  ].map((loc) => {
                    const active = order.logoPlacements.includes(loc);
                    return (
                      <button
                        key={loc}
                        type="button"
                        onClick={() => togglePlacement(loc)}
                        className={`px-3 py-2 border text-xs font-bold transition-all text-left flex items-center justify-between ${
                          active
                            ? 'border-[#e85a2a] bg-orange-50 text-[#e85a2a]'
                            : 'border-[#deded5] bg-white text-[#20231f]'
                        }`}
                      >
                        <span>{loc}</span>
                        {active && <CheckCircle2 className="w-3.5 h-3.5 text-[#e85a2a]" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Names / Text to Add */}
              <div>
                <label className="block text-xs font-bold text-[#20231f] mb-1.5">
                  Names / Text to Add (Company name, individual staff names, or tagline)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Debswana Diamond Company · Security Division"
                  value={order.namesOrText}
                  onChange={(e) => setOrder({ ...order, namesOrText: e.target.value })}
                  className="w-full px-3 py-2 text-sm bg-white border border-[#deded5] text-[#20231f]"
                />
              </div>

              {/* Artwork Filename */}
              <div className="p-3.5 bg-[#f6f5f0] border border-[#deded5] space-y-1.5">
                <label className="block text-xs font-bold text-[#20231f]">
                  Artwork Filenames / Google Drive Link
                </label>
                <input
                  type="text"
                  placeholder="e.g. Company_Logo_Vector_Final.ai or DropBox link"
                  value={order.artworkFileName}
                  onChange={(e) => setOrder({ ...order, artworkFileName: e.target.value })}
                  className="w-full px-3 py-1.5 text-xs bg-white border border-[#deded5] text-[#20231f]"
                />
                <p className="text-[11px] text-[#85867f]">
                  Files stay on your device. Their names are included in your message; attach the actual files directly in WhatsApp!
                </p>
              </div>
            </div>
          )}

          {/* STEP 4: REVIEW & DISPATCH */}
          {step === 4 && (
            <div className="space-y-5">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase text-[#e85a2a]">
                  SECTION 04
                </span>
                <h3 className="text-sm font-bold text-[#20231f] uppercase tracking-wider">
                  Review &amp; Send to WhatsApp Desk
                </h3>
                <p className="text-xs text-[#555850]">
                  Your request goes directly to JD &amp; Co BW in Gaborone for instant quotation and digital proof.
                </p>
              </div>

              {/* Summary Card with 4K thumbnail */}
              <div className="p-4 bg-[#f6f5f0] border border-[#deded5] space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#deded5] pb-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={currentJacket.image}
                      alt={currentJacket.name}
                      className="w-14 h-14 object-contain bg-white border border-[#deded5] p-1"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    <div>
                      <span className="text-[10px] uppercase font-mono font-bold text-[#85867f]">Client</span>
                      <h4 className="text-base font-bold text-[#20231f]">
                        {order.businessName || 'Business Name Pending'}
                      </h4>
                      <p className="text-xs text-[#555850]">
                        Attn: {order.contactPerson || 'Procurement Team'} · {order.industry}
                      </p>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-[10px] uppercase font-mono font-bold text-[#85867f]">Total Units</span>
                    <p className="text-xl font-bold text-[#e85a2a] font-mono">{totalQuantity} units</p>
                    <span className="text-xs font-bold text-[#20231f]">
                      {currentJacket.name} ({order.selectedColourName})
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                  <div>
                    <span className="text-[#85867f] block font-mono font-bold">Branding:</span>
                    <span className="font-bold text-[#20231f]">
                      {order.brandingOptions.join(', ') || 'Embroidery'}
                    </span>
                  </div>
                  <div>
                    <span className="text-[#85867f] block font-mono font-bold">Delivery:</span>
                    <span className="font-bold text-[#20231f]">
                      {order.deliveryCity || 'Gaborone'}, {order.deliveryCountry}
                    </span>
                  </div>
                  <div>
                    <span className="text-[#85867f] block font-mono font-bold">Date:</span>
                    <span className="font-bold text-[#20231f]">
                      {order.requiredDate || 'Standard 7–10d'}
                    </span>
                  </div>
                  <div>
                    <span className="text-[#85867f] block font-mono font-bold">Desk Phone:</span>
                    <span className="font-bold text-[#e85a2a] font-mono">+267 75 296 591</span>
                  </div>
                </div>
              </div>

              {/* Message Preview */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-bold text-[#20231f] uppercase tracking-wider">
                    WhatsApp Message Preview
                  </label>
                  <button
                    onClick={handleCopyMessage}
                    className="flex items-center gap-1.5 text-xs text-[#e85a2a] hover:text-[#cf4920] font-bold"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>{copied ? 'Copied!' : 'Copy to Clipboard'}</span>
                  </button>
                </div>
                <pre className="p-3.5 bg-white border border-[#deded5] text-[11px] text-[#20231f] font-mono whitespace-pre-wrap max-h-48 overflow-y-auto leading-relaxed">
                  {formatOrderWhatsAppMessage(order, currentJacket)}
                </pre>
              </div>

              {/* Dispatch Action Button */}
              <div className="p-4 bg-emerald-50 border border-emerald-200 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-emerald-600 text-white shrink-0">
                    <ExternalLink className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-emerald-950">
                      Send Order on WhatsApp (+267 75 296 591)
                    </h5>
                    <p className="text-xs text-emerald-800 mt-0.5">
                      This starts your order / quotation conversation with JD &amp; Co BW. Our team confirms pricing, design approval, availability and delivery before production.
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleLaunchWhatsApp}
                  className="w-full py-3.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Send Order on WhatsApp Now (wa.me)</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer Navigation */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-[#deded5] bg-[#f6f5f0]">
          {step > 1 ? (
            <button
              type="button"
              onClick={() => setStep(step - 1)}
              className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#20231f] bg-white border border-[#deded5] hover:bg-[#deded5]/30 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Back</span>
            </button>
          ) : (
            <div />
          )}

          <div className="flex items-center gap-2">
            {step < 4 ? (
              <button
                type="button"
                onClick={() => setStep(step + 1)}
                className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#e85a2a] hover:bg-[#cf4920] transition-colors flex items-center gap-1.5 shadow-sm cursor-pointer"
              >
                <span>Continue to Step {step + 1}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#85867f] hover:text-[#20231f] cursor-pointer"
              >
                Close Window
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
