import React from 'react';
import { WHO_WE_SERVE_TAGS, COMPANY_INFO } from '../data/jacketsData';
import { CheckCircle2 } from 'lucide-react';
import { APP_IMAGES } from '../assets/images';

export const WhoWeServeSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#f6f5f0] border-t border-[#deded5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Headline, Body Text, Tag List */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#e85a2a] inline-block" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#e85a2a]">
                CLIENTS &amp; ORGANIZATIONS
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#20231f] tracking-tight">
              Your company. Your people. Your identity.
            </h2>

            <p className="text-sm sm:text-base text-[#555850] leading-relaxed">
              We design and manufacture customized commercial outerwear for teams who represent excellence. Whether outfitting 20 corporate headquarters directors in Gaborone, 80 construction supervisors on remote sites, or 400 school prefects and athletes, we supply garments that instill immediate pride and belonging.
            </p>

            {/* Tag List */}
            <div>
              <span className="text-xs font-mono font-bold text-[#85867f] block mb-3 uppercase tracking-wider">
                Organizations We Equip Across Africa &amp; Globally:
              </span>
              <div className="flex flex-wrap gap-2">
                {WHO_WE_SERVE_TAGS.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 bg-white border border-[#deded5] text-xs font-semibold text-[#20231f] hover:border-[#e85a2a] transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 text-xs text-[#555850] font-semibold">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#e85a2a] shrink-0" />
                <span>Zero sample setup fees on approved orders</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#e85a2a] shrink-0" />
                <span>Individually labeled by recipient size</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Impact Photography */}
          <div className="lg:col-span-6">
            <div className="relative rounded-xl overflow-hidden border border-[#deded5] bg-white shadow-sm aspect-[16/10] group">
              <img
                src={APP_IMAGES.industryShowcaseTeam}
                alt="Corporate operations and management team in branded custom outerwear"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.src = "/images/industry_showcase_team_1791836367778.jpg";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#20231f]/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-xs text-white">
                <p className="font-bold text-white text-sm">
                  {COMPANY_INFO.motto}
                </p>
                <p className="text-[11px] text-neutral-300 mt-0.5">
                  JD Jackets by JD &amp; Co BW · Gaborone, Botswana
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
