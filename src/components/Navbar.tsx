import React, { useState } from 'react';
import { Menu, X, ArrowRight, MessageSquare } from 'lucide-react';
import { buildWhatsAppUrl } from '../utils/whatsapp';

interface NavbarProps {
  onOpenOrderModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenOrderModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-40 w-full">
      {/* Top Announcement Bar */}
      <div className="bg-[#20231f] text-[#eeeeee] px-4 sm:px-8 py-2 text-[10px] sm:text-xs font-semibold tracking-wider flex items-center justify-between border-b border-neutral-800">
        <span className="uppercase truncate">
          Custom Branded Jackets for Businesses &amp; Organizations.
        </span>
        <a
          href="#how-it-works"
          className="hidden sm:inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 transition-colors whitespace-nowrap ml-4 text-[11px]"
        >
          <span>One partner. Every step.</span>
          <ArrowRight className="w-3 h-3" />
        </a>
      </div>

      {/* Main Navigation Header */}
      <header className="w-full bg-[#f6f5f0]/95 backdrop-blur-md border-b border-[#deded5]">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-6 px-4 sm:px-6 lg:px-8 h-20">
          {/* Brand Logo Zone */}
          <a
            href="#"
            className="flex items-center gap-3 shrink-0"
            aria-label="JD Jackets Home"
          >
            <img
              src="/brand/jd-co-bw-logo.png"
              alt="JD & Co.BW — Jacket Manufacturers of Distinction"
              className="h-10 sm:h-12 w-auto object-contain"
              onError={(e) => {
                // fallback if image not found
                e.currentTarget.style.display = 'none';
              }}
            />
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold tracking-tight text-[#20231f]">
                JD JACKETS
              </span>
              <span className="text-[9px] uppercase tracking-widest text-[#85867f] font-mono hidden sm:inline">
                by JD &amp; Co BW
              </span>
            </div>
          </a>

          {/* Clean Nav Links */}
          <nav className="hidden md:flex items-center gap-7 text-xs sm:text-sm font-semibold text-[#20231f]">
            <a
              href="#industries"
              className="hover:text-[#e85a2a] transition-colors whitespace-nowrap"
            >
              Industries
            </a>
            <a
              href="#corporate-pro"
              className="hover:text-[#e85a2a] transition-colors whitespace-nowrap"
            >
              Corporate Pro™
            </a>
            <a
              href="#gallery"
              className="hover:text-[#e85a2a] transition-colors whitespace-nowrap"
            >
              Custom Jackets (20 Styles)
            </a>
            <a
              href="#how-it-works"
              className="hover:text-[#e85a2a] transition-colors whitespace-nowrap"
            >
              How It Works
            </a>
            <a
              href="#faq"
              className="hover:text-[#e85a2a] transition-colors whitespace-nowrap"
            >
              FAQ
            </a>
            <a
              href="#contact"
              className="hover:text-[#e85a2a] transition-colors whitespace-nowrap"
            >
              Contact
            </a>
          </nav>

          {/* Primary Action Button */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenOrderModal}
              className="hidden sm:inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-[#e85a2a] hover:bg-[#cf4920] rounded-none uppercase tracking-wider transition-all shadow-sm whitespace-nowrap cursor-pointer"
            >
              <span>Order Custom Jackets</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#20231f] hover:bg-[#deded5]/40 transition-colors"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#deded5] bg-[#f6f5f0] px-5 py-4 space-y-3">
            <nav className="flex flex-col space-y-2.5 text-sm font-semibold text-[#20231f]">
              <a
                href="#industries"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#e85a2a]"
              >
                Industries (8 Sectors)
              </a>
              <a
                href="#corporate-pro"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#e85a2a]"
              >
                Corporate Pro™
              </a>
              <a
                href="#gallery"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#e85a2a]"
              >
                Custom Jackets Gallery
              </a>
              <a
                href="#how-it-works"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#e85a2a]"
              >
                How It Works
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#e85a2a]"
              >
                FAQ
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#e85a2a]"
              >
                Contact
              </a>
            </nav>

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenOrderModal();
                }}
                className="w-full py-3 px-4 text-xs font-bold text-white bg-[#e85a2a] hover:bg-[#cf4920] uppercase tracking-wider text-center"
              >
                Order Custom Jackets →
              </button>

              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 px-4 text-xs font-bold text-[#20231f] border border-[#deded5] bg-white hover:bg-neutral-100 flex items-center justify-center gap-2 text-center"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                <span>Chat on WhatsApp (+267 75 296 591)</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};
