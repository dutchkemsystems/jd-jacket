import React from 'react';
import { MessageSquare, ArrowRight, ShieldCheck, Clock, Sparkles } from 'lucide-react';

interface FinalCtaSectionProps {
  onOpenOrderModal: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onOpenOrderModal }) => {
  const directWhatsAppUrl = `https://wa.me/254700000000?text=${encodeURIComponent(
    'Hello JD Jackets! We would like to inquire about custom branded jackets for our organization.'
  )}`;

  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-neutral-950 border-t border-neutral-800">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-radial from-amber-600/10 via-neutral-950/80 to-neutral-950 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Kicker */}
        <span className="text-xs font-semibold uppercase tracking-widest text-amber-500 block mb-3">
          Get Started in Minutes
        </span>

        {/* Mandatory Headline */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight max-w-3xl mx-auto text-balance leading-tight">
          Ready to create custom jackets for your business?
        </h2>

        {/* Mandatory Subtext */}
        <p className="text-lg sm:text-xl text-neutral-300 font-medium mt-4 max-w-xl mx-auto text-balance">
          Your staff. Your team. Your company identity.
        </p>

        <p className="text-xs sm:text-sm text-neutral-400 mt-2 max-w-lg mx-auto">
          Choose your style, select mixed sizes (XS–XXXL), and send your logo for a free 3D visual proof on WhatsApp.
        </p>

        {/* Primary Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onOpenOrderModal}
            className="px-8 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-sm transition-all shadow-xl hover:shadow-amber-500/25 flex items-center gap-2 cursor-pointer"
          >
            <span>Configure Custom Order</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={directWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-all shadow-xl hover:shadow-emerald-600/25 flex items-center gap-2 cursor-pointer"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat Directly on WhatsApp</span>
          </a>
        </div>

        {/* Trust Badges Bar */}
        <div className="mt-12 pt-8 border-t border-neutral-900 flex flex-wrap items-center justify-center gap-8 text-xs text-neutral-500">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-amber-400/80" />
            <span>Certified 100% Quality Seam Guarantee</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-amber-400/80" />
            <span>Free Visual Mockup Within 2 Hours</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-400/80" />
            <span>Nationwide &amp; Global Doorstep Delivery</span>
          </div>
        </div>
      </div>
    </section>
  );
};
