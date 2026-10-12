import React, { useState } from 'react';
import { ChevronDown, MessageSquare } from 'lucide-react';
import { FAQS, COMPANY_INFO } from '../data/jacketsData';
import { buildWhatsAppUrl } from '../utils/whatsapp';

interface FaqSectionProps {
  onOpenOrderModal: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenOrderModal }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-white border-t border-[#deded5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 bg-[#e85a2a] inline-block" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#e85a2a]">
              PROCUREMENT &amp; TECHNICAL GUIDANCE
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#20231f] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-[#555850] mt-3 max-w-xl mx-auto leading-relaxed">
            Everything corporate buyers, school boards, and operations teams need to know about our specifications, sizing, MOQ, and WhatsApp dispatch.
          </p>
        </div>

        {/* 9 Collapsible Accordion Items */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={faq.question}
                className="rounded-lg bg-[#f6f5f0] border border-[#deded5] overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-[#edece5] transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-[#e85a2a] font-bold">
                      {String(idx + 1).padStart(2, '0')}.
                    </span>
                    <span className="text-sm sm:text-base font-bold text-[#20231f]">
                      {faq.question}
                    </span>
                  </div>

                  <div className="p-1 rounded bg-white text-[#20231f] border border-[#deded5] shrink-0">
                    <ChevronDown
                      className={`w-4 h-4 transform transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#e85a2a]' : ''
                      }`}
                    />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-2 text-xs sm:text-sm text-[#555850] leading-relaxed border-t border-[#deded5] bg-white">
                    <div className="mt-2 text-[#20231f]">
                      {faq.answer}
                    </div>
                    <div className="mt-3 flex items-center gap-2 text-[11px] font-mono text-[#85867f]">
                      <span>Category: {faq.category}</span>
                      <span>·</span>
                      <span>Verified Specification</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Unanswered question box */}
        <div className="mt-12 p-6 rounded-xl bg-[#f6f5f0] border border-[#deded5] text-center space-y-3">
          <h4 className="text-base font-bold text-[#20231f]">
            Have a custom Pantone dye question or enterprise RFP over 500 units?
          </h4>
          <p className="text-xs text-[#555850] max-w-md mx-auto">
            Our corporate outerwear production specialists in Gaborone answer queries directly on WhatsApp (+267 75 296 591) within 15 minutes during business hours.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#e85a2a] hover:bg-[#cf4920] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Chat With Our Production Desk</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
