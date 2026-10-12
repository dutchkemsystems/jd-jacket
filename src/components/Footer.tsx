import React from 'react';
import { MessageSquare, Phone, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  onOpenOrderModal: () => void;
  onOpenCatalogue: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenOrderModal, onOpenCatalogue }) => {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-900 py-14 text-neutral-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Brand info */}
          <div className="md:col-span-4 space-y-3">
            <a href="#" className="text-base font-bold text-white flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-amber-500 rounded-sm inline-block" />
              <span>JD JACKETS</span>
            </a>
            <p className="text-neutral-400 leading-relaxed text-xs max-w-sm">
              Custom branded corporate outerwear, technical softshells, and executive puffers. Built for teams, companies, and organizations who demand professional appearance and outdoor resilience.
            </p>
            <div className="pt-2 text-[11px] text-neutral-500">
              WhatsApp Order Desk: +254 700 000 000
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2.5">
            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-200 block">
              Outerwear Collections
            </span>
            <ul className="space-y-2">
              <li>
                <a href="#corporate-pro" className="hover:text-amber-400 transition-colors">
                  JD Corporate Pro™ Series
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-amber-400 transition-colors">
                  20-Model Outerwear Gallery
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenCatalogue}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Customization Technical Catalogue
                </button>
              </li>
              <li>
                <a href="#industries" className="hover:text-amber-400 transition-colors">
                  Industry Tailored Solutions
                </a>
              </li>
            </ul>
          </div>

          {/* Sectors Served */}
          <div className="md:col-span-3 space-y-2.5">
            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-200 block">
              Sectors Outfitted
            </span>
            <ul className="space-y-2">
              <li>Corporate &amp; Executive Teams</li>
              <li>Logistics &amp; Transport Fleets</li>
              <li>Security &amp; Tactical Operations</li>
              <li>Schools, Prefects &amp; Universities</li>
              <li>Hospitality, Lodges &amp; Tourism</li>
            </ul>
          </div>

          {/* Contact / Order Action */}
          <div className="md:col-span-2 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-200 block">
              Order Desk
            </span>
            <button
              onClick={onOpenOrderModal}
              className="w-full py-2.5 px-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-xs transition-colors shadow-sm text-center block"
            >
              Start Order Brief
            </button>
            <p className="text-[11px] text-neutral-500 leading-normal">
              Direct quotation, size breakdown, and artwork approvals on WhatsApp.
            </p>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <div>
            © {new Date().getFullYear()} JD Jackets. All rights reserved. Custom branded outerwear.
          </div>
          <div className="flex items-center gap-4">
            <span>Minimum Order: 15 Units</span>
            <span>·</span>
            <span>Sizes: XS through XXXL</span>
            <span>·</span>
            <span>Worldwide Delivery</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
