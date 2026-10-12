import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { FAQS } from '../data/jacketsData';

interface FaqSectionProps {
  onOpenOrderModal: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenOrderModal }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item expanded by default

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-neutral-950 border-t border-neutral-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-500 block mb-2">
            Procurement &amp; Technical Guidance
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 mt-3 max-w-xl mx-auto leading-relaxed">
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
                className="rounded-2xl bg-neutral-900 border border-neutral-800 overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-neutral-800/50 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-amber-400/90 font-bold">
                      {String(idx + 1).padStart(2, '0')}.
                    </span>
                    <span className="text-sm sm:text-base font-semibold text-neutral-200">
                      {faq.question}
                    </span>
                  </div>

                  <div className="p-1 rounded-lg bg-neutral-950 text-neutral-400 shrink-0">
                    <ChevronDown
                      className={`w-4 h-4 transform transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-amber-400' : ''
                      }`}
                    />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-neutral-400 leading-relaxed border-t border-neutral-800/50">
                    <div className="mt-2 text-neutral-300">
                      {faq.answer}
                    </div>
                    <div className="mt-3 flex items-center gap-2 text-[11px] font-mono text-neutral-500">
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
        <div className="mt-12 p-6 rounded-2xl bg-neutral-900 border border-neutral-800 text-center space-y-3">
          <h4 className="text-sm font-bold text-white">
            Have a custom Pantone dye question or enterprise RFP over 500 units?
          </h4>
          <p className="text-xs text-neutral-400 max-w-md mx-auto">
            Our corporate outerwear production specialists answer queries directly on WhatsApp within 15 minutes during business hours.
          </p>
          <button
            onClick={onOpenOrderModal}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-xs transition-colors shadow-md cursor-pointer"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Chat With Our Production Desk</span>
          </button>
        </div>
      </div>
    </section>
  );
};
