import React from 'react';
import { COMPANY_INFO } from '../data/jacketsData';
import { buildWhatsAppUrl } from '../utils/whatsapp';

interface FooterProps {
  onOpenOrderModal: () => void;
  onOpenCatalogue: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenOrderModal, onOpenCatalogue }) => {
  return (
    <footer id="contact" className="bg-[#f6f5f0] border-t border-[#deded5] py-16 text-[#555850] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Brand info */}
          <div className="md:col-span-4 space-y-3">
            <a href="#" className="flex items-center gap-2">
              <img
                src="/brand/jd-co-bw-logo.png"
                alt="JD & Co.BW — Jacket Manufacturers of Distinction"
                className="h-10 w-auto object-contain"
              />
              <span className="text-base font-bold text-[#20231f] tracking-tight">
                JD JACKETS
              </span>
            </a>
            <p className="text-[#555850] leading-relaxed text-xs max-w-sm">
              Custom branded corporate outerwear, technical softshells, and executive puffers by JD &amp; Co BW.
            </p>
            <div className="pt-2 space-y-1 font-mono text-[11px] text-[#20231f]">
              <div><strong>Location:</strong> {COMPANY_INFO.location}</div>
              <div><strong>Email:</strong> <a href={`mailto:${COMPANY_INFO.email}`} className="underline hover:text-[#e85a2a]">{COMPANY_INFO.email}</a></div>
              <div><strong>WhatsApp:</strong> <a href={buildWhatsAppUrl()} target="_blank" rel="noreferrer" className="underline hover:text-[#e85a2a]">{COMPANY_INFO.phone}</a></div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2.5">
            <span className="text-xs font-bold uppercase tracking-wider text-[#20231f] block">
              Outerwear Collections
            </span>
            <ul className="space-y-2 font-medium">
              <li>
                <a href="#corporate-pro" className="hover:text-[#e85a2a] transition-colors">
                  JD Corporate Pro™ Series
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#e85a2a] transition-colors">
                  20-Model Outerwear Gallery
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenCatalogue}
                  className="hover:text-[#e85a2a] transition-colors text-left cursor-pointer"
                >
                  Customization Technical Catalogue
                </button>
              </li>
              <li>
                <a href="#industries" className="hover:text-[#e85a2a] transition-colors">
                  8 Sector Solutions
                </a>
              </li>
            </ul>
          </div>

          {/* Sectors Outfitted */}
          <div className="md:col-span-3 space-y-2.5">
            <span className="text-xs font-bold uppercase tracking-wider text-[#20231f] block">
              Sectors Outfitted
            </span>
            <ul className="space-y-2 font-medium">
              <li>Corporate &amp; Office Teams</li>
              <li>Logistics &amp; Transport Fleets</li>
              <li>Security &amp; Operational Crews</li>
              <li>Schools, Colleges &amp; Universities</li>
              <li>Tourism, Lodges &amp; Hospitality</li>
              <li>Sports Clubs &amp; Events</li>
              <li>Mining, Engineering &amp; Construction</li>
              <li>Healthcare &amp; Care Teams</li>
            </ul>
          </div>

          {/* Order Action */}
          <div className="md:col-span-2 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#20231f] block">
              Order Desk
            </span>
            <button
              onClick={onOpenOrderModal}
              className="w-full py-3 px-3 bg-[#e85a2a] hover:bg-[#cf4920] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm text-center block cursor-pointer"
            >
              Start Order Brief
            </button>
            <p className="text-[11px] text-[#85867f] leading-normal">
              Direct quotation, size breakdown, and digital proof approvals on WhatsApp.
            </p>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="pt-8 border-t border-[#deded5] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#85867f] font-mono">
          <div>
            © {new Date().getFullYear()} JD Jackets by JD &amp; Co BW. All rights reserved.
          </div>
          <div className="font-bold text-[#20231f] tracking-widest text-[10px] uppercase">
            {COMPANY_INFO.motto}
          </div>
          <div>
            <a href="#" className="hover:text-[#20231f]">Back to top ↑</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
