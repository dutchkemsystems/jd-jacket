import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenOrderModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenOrderModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800/80">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-4 sm:px-6 lg:px-8 h-16">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="text-lg font-bold tracking-tight text-white hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 flex items-center gap-2"
        >
          <span className="w-2.5 h-2.5 bg-amber-500 rounded-sm inline-block" />
          <span>JD JACKETS</span>
        </a>

        {/* Zone 2: 4–5 concise single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-300">
          <a
            href="#industries"
            className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
          >
            Industries
          </a>
          <a
            href="#corporate-pro"
            className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
          >
            Corporate Pro™
          </a>
          <a
            href="#gallery"
            className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
          >
            Gallery
          </a>
          <a
            href="#how-it-works"
            className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
          >
            How It Works
          </a>
          <a
            href="#faq"
            className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
          >
            FAQ
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenOrderModal}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-bold text-neutral-950 bg-amber-500 hover:bg-amber-400 rounded-lg transition-colors shadow-sm whitespace-nowrap shrink-0 cursor-pointer"
          >
            Order Custom Jackets
          </button>

          {/* Mobile hamburger menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-neutral-800 bg-neutral-950 px-4 pt-3 pb-5 space-y-3">
          <nav className="flex flex-col space-y-2 text-sm font-medium text-neutral-300">
            <a
              href="#industries"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-amber-400 transition-colors"
            >
              Industries
            </a>
            <a
              href="#corporate-pro"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-amber-400 transition-colors"
            >
              Corporate Pro™
            </a>
            <a
              href="#gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-amber-400 transition-colors"
            >
              Gallery (20 Styles)
            </a>
            <a
              href="#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-amber-400 transition-colors"
            >
              How It Works
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-amber-400 transition-colors"
            >
              FAQ
            </a>
          </nav>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenOrderModal();
            }}
            className="w-full py-2.5 px-4 text-xs font-bold text-neutral-950 bg-amber-500 hover:bg-amber-400 rounded-lg transition-colors text-center"
          >
            Order Custom Jackets
          </button>
        </div>
      )}
    </header>
  );
};
