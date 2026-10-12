import React, { useState, useEffect } from 'react';
import {
  X,
  CheckCircle,
  Copy,
  ExternalLink,
  ChevronRight,
  ChevronLeft,
  Upload,
  Calendar,
  MapPin,
  Building,
  User,
  Phone,
  Mail,
  ShieldAlert,
  Layers,
  Palette,
  Sparkles,
  HelpCircle,
  Clock
} from 'lucide-react';
import { JACKET_STYLES, INDUSTRIES, SIZE_CHART, JacketStyle } from '../data/jacketsData';
import { formatOrderWhatsAppMessage, buildWhatsAppUrl } from '../utils/whatsapp';

interface OrderFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedJacketId?: string;
  preselectedIndustryId?: string;
}

export interface OrderState {
  // Step 1: Organization & Contact
  businessName: string;
  contactPerson: string;
  email: string;
  whatsappNumber: string;
  industry: string;
  deliveryCity: string;
  deliveryCountry: string;
  requiredDate: string;

  // Step 2: Jacket Style & Sizing
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

  // Step 3: Color & Branding Spec
  selectedColourName: string;
  customPantoneHex: string;
  brandingMethod: string;
  logoPlacements: string[];
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
  deliveryCountry: 'Kenya',
  requiredDate: '',

  jacketStyleId: 'executive-puffer',
  sizes: {
    XS: 0,
    S: 5,
    M: 10,
    L: 10,
    XL: 5,
    XXL: 0,
    XXXL: 0,
  },

  selectedColourName: 'Midnight Obsidian',
  customPantoneHex: '',
  brandingMethod: 'High-Density Multi-Thread Embroidery',
  logoPlacements: ['Left Chest'],
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
  const [whatsappPhone, setWhatsappPhone] = useState<string>('254700000000'); // Standard JD Jackets WhatsApp Desk

  // Sync preselected options
  useEffect(() => {
    if (preselectedJacketId) {
      setOrder((prev) => ({
        ...prev,
        jacketStyleId: preselectedJacketId,
        selectedColourName:
          JACKET_STYLES.find((j) => j.id === preselectedJacketId)?.availableColours[0]?.name ||
          prev.selectedColourName,
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

  // Toggle logo placement
  const togglePlacement = (placement: string) => {
    setOrder((prev) => {
      const exists = prev.logoPlacements.includes(placement);
      if (exists) {
        return {
          ...prev,
          logoPlacements: prev.logoPlacements.filter((p) => p !== placement),
        };
      } else {
        return {
          ...prev,
          logoPlacements: [...prev.logoPlacements, placement],
        };
      }
    });
  };

  // Generate WhatsApp Message text
  const generateWhatsAppMessage = () => {
    return formatOrderWhatsAppMessage(order, currentJacket);
  };

  const handleLaunchWhatsApp = () => {
    const msg = generateWhatsAppMessage();
    const url = buildWhatsAppUrl(whatsappPhone, msg);
    window.open(url, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  const handleCopyMessage = () => {
    const msg = generateWhatsAppMessage();
    navigator.clipboard.writeText(msg);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div
        className="relative w-full max-w-3xl bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden my-auto"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800 bg-neutral-950/70">
          <div>
            <h2 className="text-lg font-bold text-neutral-100 flex items-center gap-2">
              <span>Custom Jacket Order Brief</span>
              <span className="text-xs px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 font-mono">
                Step {step} of 4
              </span>
            </h2>
            <p className="text-xs text-neutral-400 mt-0.5">
              Configure your exact specs. Instant quote & proof dispatched via WhatsApp.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Wizard Progress Bar */}
        <div className="w-full bg-neutral-800 h-1">
          <div
            className="bg-amber-500 h-1 transition-all duration-300"
            style={{ width: `${(step / 4) * 100}%` }}
          />
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[75vh] overflow-y-auto space-y-6">
          {/* STEP 1: ORGANIZATION & CONTACT */}
          {step === 1 && (
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-semibold text-neutral-200 uppercase tracking-wider">
                  1. Organization & Contact Details
                </h3>
                <p className="text-xs text-neutral-400">
                  Tell us who this order is for so we can address your commercial invoice properly.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                    Company / Organization Name *
                  </label>
                  <div className="relative">
                    <Building className="w-4 h-4 absolute left-3 top-3 text-neutral-500" />
                    <input
                      type="text"
                      placeholder="e.g. Apex Logistics Ltd"
                      value={order.businessName}
                      onChange={(e) => setOrder({ ...order, businessName: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm bg-neutral-950 border border-neutral-800 rounded-lg text-neutral-200 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                    Contact Person *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 absolute left-3 top-3 text-neutral-500" />
                    <input
                      type="text"
                      placeholder="Full Name / Department"
                      value={order.contactPerson}
                      onChange={(e) => setOrder({ ...order, contactPerson: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm bg-neutral-950 border border-neutral-800 rounded-lg text-neutral-200 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                    WhatsApp Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 absolute left-3 top-3 text-neutral-500" />
                    <input
                      type="tel"
                      placeholder="+254 700 000 000"
                      value={order.whatsappNumber}
                      onChange={(e) => setOrder({ ...order, whatsappNumber: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm bg-neutral-950 border border-neutral-800 rounded-lg text-neutral-200 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                    Work Email Address
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 absolute left-3 top-3 text-neutral-500" />
                    <input
                      type="email"
                      placeholder="procurement@company.com"
                      value={order.email}
                      onChange={(e) => setOrder({ ...order, email: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm bg-neutral-950 border border-neutral-800 rounded-lg text-neutral-200 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                    Industry Sector *
                  </label>
                  <select
                    value={order.industry}
                    onChange={(e) => setOrder({ ...order, industry: e.target.value })}
                    className="w-full px-3 py-2 text-sm bg-neutral-950 border border-neutral-800 rounded-lg text-neutral-200 focus:outline-none focus:border-amber-500"
                  >
                    {INDUSTRIES.map((ind) => (
                      <option key={ind.id} value={ind.name}>
                        {ind.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                    Delivery City / Town & Country *
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 absolute left-3 top-3 text-neutral-500" />
                    <input
                      type="text"
                      placeholder="Nairobi, Kenya"
                      value={order.deliveryCity}
                      onChange={(e) => setOrder({ ...order, deliveryCity: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm bg-neutral-950 border border-neutral-800 rounded-lg text-neutral-200 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                    Target In-Hand Delivery Date
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 absolute left-3 top-3 text-neutral-500" />
                    <input
                      type="date"
                      value={order.requiredDate}
                      onChange={(e) => setOrder({ ...order, requiredDate: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm bg-neutral-950 border border-neutral-800 rounded-lg text-neutral-200 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                  <p className="text-[11px] text-neutral-500 mt-1">
                    Standard production is 7–10 days. Need rush 3-day turnaround? Specify in notes.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: JACKET STYLE & SIZING */}
          {step === 2 && (
            <div className="space-y-5">
              <div>
                <h3 className="text-sm font-semibold text-neutral-200 uppercase tracking-wider">
                  2. Choose Jacket Model & Team Sizing
                </h3>
                <p className="text-xs text-neutral-400">
                  Select your outerwear silhouette and input mixed unit quantities across XS–3XL.
                </p>
              </div>

              {/* Jacket Selector Dropdown */}
              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                  Jacket Model
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
                  className="w-full px-3 py-2 text-sm bg-neutral-950 border border-neutral-800 rounded-lg text-neutral-200 focus:outline-none focus:border-amber-500"
                >
                  {JACKET_STYLES.map((j) => (
                    <option key={j.id} value={j.id}>
                      {j.name} ({j.sku}) — {j.category} — MOQ: {j.moq} units
                    </option>
                  ))}
                </select>
              </div>

              {/* Selected Jacket Snapshot Card */}
              <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-between gap-4">
                <div>
                  <h4 className="text-sm font-bold text-neutral-100">{currentJacket.name}</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">{currentJacket.tagline}</p>
                  <div className="flex items-center gap-3 mt-2 text-xs text-neutral-400">
                    <span>MOQ: <strong className="text-neutral-200">{currentJacket.moq} pcs</strong></span>
                    <span>·</span>
                    <span>Lead Time: <strong className="text-neutral-200">{currentJacket.leadTime}</strong></span>
                    <span>·</span>
                    <span>Price Guide: <strong className="text-amber-400">{currentJacket.priceGuide}</strong></span>
                  </div>
                </div>
              </div>

              {/* Sizing Breakdown Input Matrix */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-semibold text-neutral-300 uppercase tracking-wider">
                    Mixed Size Breakdown (Units per Size)
                  </label>
                  <span className="text-xs text-neutral-400">
                    Total: <strong className="text-amber-400 font-mono text-sm">{totalQuantity}</strong> units
                  </span>
                </div>

                <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
                  {(['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'] as const).map((sz) => (
                    <div key={sz} className="p-2 rounded-lg bg-neutral-950 border border-neutral-800 text-center">
                      <div className="text-xs font-bold text-neutral-300 mb-1">{sz}</div>
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
                        className="w-full text-center py-1 text-sm bg-neutral-900 border border-neutral-700 rounded text-neutral-100 focus:outline-none focus:border-amber-500 font-mono"
                      />
                    </div>
                  ))}
                </div>

                {/* MOQ Warning / Notice */}
                {!isMoqMet && (
                  <div className="mt-3 p-3 rounded-lg bg-amber-950/30 border border-amber-800/40 text-xs text-amber-300 flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>
                      Current quantity ({totalQuantity}) is below this style's minimum order quantity ({currentJacket.moq} units). We can discuss sample runs on WhatsApp!
                    </span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* STEP 3: COLOR & BRANDING SPEC */}
          {step === 3 && (
            <div className="space-y-5">
              <div>
                <h3 className="text-sm font-semibold text-neutral-200 uppercase tracking-wider">
                  3. Colours & Branding Specifications
                </h3>
                <p className="text-xs text-neutral-400">
                  Select garment shades, decoration technique, and logo placements.
                </p>
              </div>

              {/* Color Selection */}
              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-2">
                  Garment Color Palette
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {currentJacket.availableColours.map((c) => (
                    <button
                      key={c.name}
                      type="button"
                      onClick={() => setOrder({ ...order, selectedColourName: c.name })}
                      className={`p-3 rounded-lg border text-left transition-all flex items-center gap-3 ${
                        order.selectedColourName === c.name
                          ? 'border-amber-500 bg-amber-500/10'
                          : 'border-neutral-800 bg-neutral-950 hover:border-neutral-700'
                      }`}
                    >
                      <span
                        className="w-5 h-5 rounded-full border border-neutral-600 shrink-0 shadow-sm"
                        style={{ backgroundColor: c.hex }}
                      />
                      <span className="text-xs font-medium text-neutral-200 truncate">
                        {c.name}
                      </span>
                    </button>
                  ))}
                </div>

                <div className="mt-3">
                  <label className="block text-[11px] text-neutral-400 mb-1">
                    Custom Pantone (PMS) or Hex Code (Optional for 50+ unit custom dye orders):
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Pantone 289 C / #0C2340"
                    value={order.customPantoneHex}
                    onChange={(e) => setOrder({ ...order, customPantoneHex: e.target.value })}
                    className="w-full px-3 py-1.5 text-xs bg-neutral-950 border border-neutral-800 rounded-lg text-neutral-200 focus:outline-none focus:border-amber-500 font-mono"
                  />
                </div>
              </div>

              {/* Branding Method */}
              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-2">
                  Branding Application Method *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    {
                      id: 'High-Density Multi-Thread Embroidery',
                      desc: 'Premium tactile finish, up to 15 thread shades. Permanent and wash-proof.',
                    },
                    {
                      id: '3D Embossed Silicone/Rubber Badge',
                      desc: 'Ultra-modern athletic luxury feel with crisp raised dimensional lines.',
                    },
                    {
                      id: 'Precision Technical Screen Printing',
                      desc: 'Ideal for oversized back branding and lightweight waterproof shells.',
                    },
                    {
                      id: '3M Reflective Heat Transfer',
                      desc: 'Night safety illumination for logistics, transport, and site teams.',
                    },
                  ].map((method) => (
                    <button
                      key={method.id}
                      type="button"
                      onClick={() => setOrder({ ...order, brandingMethod: method.id })}
                      className={`p-3 rounded-lg border text-left transition-all ${
                        order.brandingMethod === method.id
                          ? 'border-amber-500 bg-amber-500/10'
                          : 'border-neutral-800 bg-neutral-950 hover:border-neutral-700'
                      }`}
                    >
                      <div className="text-xs font-semibold text-neutral-200">{method.id}</div>
                      <div className="text-[11px] text-neutral-400 mt-1">{method.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Logo Placements */}
              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-2">
                  Logo Placement Locations (Select all that apply)
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
                        className={`px-3 py-2 rounded-lg border text-xs font-medium transition-all text-left flex items-center justify-between ${
                          active
                            ? 'border-amber-500 bg-amber-500/15 text-amber-300'
                            : 'border-neutral-800 bg-neutral-950 text-neutral-400 hover:border-neutral-700'
                        }`}
                      >
                        <span>{loc}</span>
                        {active && <CheckCircle className="w-3.5 h-3.5 text-amber-400" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Artwork & File notes */}
              <div className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800 space-y-2">
                <label className="block text-xs font-medium text-neutral-300">
                  Artwork File Reference (Filename or Google Drive / Cloud Link)
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="e.g. Apex_Logo_Vector_Final.ai or DropBox link"
                    value={order.artworkFileName}
                    onChange={(e) => setOrder({ ...order, artworkFileName: e.target.value })}
                    className="flex-1 px-3 py-1.5 text-xs bg-neutral-900 border border-neutral-700 rounded-lg text-neutral-200 focus:outline-none focus:border-amber-500"
                  />
                </div>
                <p className="text-[11px] text-neutral-500">
                  You can attach your raw vector files (AI, PDF, EPS, PNG) directly when the WhatsApp chat opens!
                </p>
              </div>
            </div>
          )}

          {/* STEP 4: REVIEW & WHATSAPP DISPATCH */}
          {step === 4 && (
            <div className="space-y-5">
              <div>
                <h3 className="text-sm font-semibold text-neutral-200 uppercase tracking-wider">
                  4. Review & Dispatch to WhatsApp Desk
                </h3>
                <p className="text-xs text-neutral-400">
                  Review your formatted order briefing before launching your WhatsApp inquiry.
                </p>
              </div>

              {/* Summary Card */}
              <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-neutral-800 pb-3">
                  <div>
                    <span className="text-xs text-neutral-500 uppercase tracking-wider">Client</span>
                    <h4 className="text-sm font-bold text-neutral-100">
                      {order.businessName || 'Business Name Pending'}
                    </h4>
                    <p className="text-xs text-neutral-400">
                      Attn: {order.contactPerson || 'Procurement Team'} · {order.industry}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-neutral-500 uppercase tracking-wider">Total Units</span>
                    <p className="text-lg font-bold text-amber-400 font-mono">{totalQuantity} units</p>
                    <span className="text-[11px] text-neutral-400">
                      {currentJacket.name} ({order.selectedColourName})
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                  <div>
                    <span className="text-neutral-500 block">Branding:</span>
                    <span className="font-medium text-neutral-300">{order.brandingMethod}</span>
                  </div>
                  <div>
                    <span className="text-neutral-500 block">Placements:</span>
                    <span className="font-medium text-neutral-300">
                      {order.logoPlacements.join(', ') || 'Left Chest'}
                    </span>
                  </div>
                  <div>
                    <span className="text-neutral-500 block">Delivery:</span>
                    <span className="font-medium text-neutral-300">
                      {order.deliveryCity || 'TBD'}, {order.deliveryCountry}
                    </span>
                  </div>
                  <div>
                    <span className="text-neutral-500 block">Required Date:</span>
                    <span className="font-medium text-neutral-300">
                      {order.requiredDate || 'Standard 7–10d'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Formatted Message Preview */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-semibold text-neutral-300 uppercase tracking-wider">
                    WhatsApp Message Preview
                  </label>
                  <button
                    onClick={handleCopyMessage}
                    className="flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 transition-colors"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>{copied ? 'Copied!' : 'Copy to Clipboard'}</span>
                  </button>
                </div>
                <pre className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800 text-[11px] text-neutral-300 font-mono whitespace-pre-wrap max-h-48 overflow-y-auto leading-relaxed">
                  {generateWhatsAppMessage()}
                </pre>
              </div>

              {/* Direct WhatsApp Action Bar */}
              <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-800/40 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-emerald-600 text-white shrink-0 mt-0.5">
                    <ExternalLink className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-emerald-300">
                      Connect Directly on WhatsApp
                    </h5>
                    <p className="text-xs text-neutral-300 mt-0.5">
                      Click below to open WhatsApp with all specifications preloaded. Our design team will respond with your digital visual proof and official quote.
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleLaunchWhatsApp}
                  className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Send Order Brief on WhatsApp (wa.me)</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Controls */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-neutral-800 bg-neutral-950/70">
          {step > 1 ? (
            <button
              type="button"
              onClick={() => setStep(step - 1)}
              className="px-4 py-2 text-xs font-semibold text-neutral-300 hover:text-white bg-neutral-800 hover:bg-neutral-700 rounded-lg transition-colors flex items-center gap-1"
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
                className="px-5 py-2 text-xs font-bold text-neutral-950 bg-amber-500 hover:bg-amber-400 rounded-lg transition-colors flex items-center gap-1.5 shadow-md"
              >
                <span>Continue to Step {step + 1}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-medium text-neutral-400 hover:text-neutral-200"
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
