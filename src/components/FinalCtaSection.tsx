import React from 'react';
import { MessageSquare, ArrowRight, ShieldCheck, Clock, Sparkles } from 'lucide-react';
import { buildWhatsAppUrl } from '../utils/whatsapp';

interface FinalCtaSectionProps {
  onOpenOrderModal: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onOpenOrderModal }) => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-white border-t border-[#deded5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Kicker */}
        <div className="flex items-center justify-center gap-2 mb-3">
          <span className="w-1.5 h-1.5 bg-[#e85a2a] inline-block" />
          <span className="text-xs font-bold uppercase tracking-widest text-[#e85a2a]">
            YOUR VISION. OUR CRAFT. YOUR IDENTITY.
          </span>
        </div>

        {/* Mandatory Headline */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#20231f] tracking-tight max-w-3xl mx-auto text-balance leading-tight">
          Ready to create custom jackets for your business?
        </h2>

        {/* Mandatory Subtext */}
        <p className="text-lg sm:text-xl text-[#555850] font-medium mt-4 max-w-xl mx-auto text-balance">
          Your staff. Your team. Your company identity.
        </p>

        <p className="text-xs sm:text-sm text-[#85867f] mt-2 max-w-lg mx-auto">
          Choose your style, select mixed sizes (XS–XXXL), and send your logo for a free digital proof on WhatsApp.
        </p>

        {/* Primary Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onOpenOrderModal}
            className="px-8 py-3.5 bg-[#e85a2a] hover:bg-[#cf4920] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-2 cursor-pointer"
          >
            <span>Configure Custom Order</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 bg-[#20231f] hover:bg-[#323630] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-2 cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span>Chat Directly on WhatsApp</span>
          </a>
        </div>

        {/* Trust Badges Bar */}
        <div className="mt-12 pt-8 border-t border-[#deded5] flex flex-wrap items-center justify-center gap-8 text-xs font-semibold text-[#6e7068]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#e85a2a]" />
            <span>Certified Quality Seam Guarantee</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#e85a2a]" />
            <span>Free Visual Mockup Within 2 Hours</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#e85a2a]" />
            <span>Gaborone HQ · Fast Regional Delivery</span>
          </div>
        </div>
      </div>
    </section>
  );
};
