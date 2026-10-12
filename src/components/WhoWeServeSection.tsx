import React from 'react';
import { WHO_WE_SERVE_TAGS } from '../data/jacketsData';
import { CheckCircle2, Users2 } from 'lucide-react';

export const WhoWeServeSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-neutral-950 border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Headline, Body Text, Tag List */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-500 block">
              Clients &amp; Organizations
            </span>

            {/* Mandatory Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Your company. Your people. Your identity.
            </h2>

            {/* Body Text */}
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              We design and manufacture customized commercial outerwear for teams who represent excellence. Whether outfitting 20 corporate headquarters directors, 80 construction supervisors on remote sites, or 400 school prefects and athletes, we supply garments that instill immediate pride and belonging.
            </p>

            {/* Tag List (Clean editorial unboxed badges with subtle borders) */}
            <div>
              <span className="text-xs font-mono text-neutral-400 block mb-3 uppercase tracking-wider">
                Organizations We Equip Across Africa &amp; Globally:
              </span>
              <div className="flex flex-wrap gap-2">
                {WHO_WE_SERVE_TAGS.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-xs font-medium text-neutral-300 hover:border-neutral-700 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-2 flex items-center gap-6 text-xs text-neutral-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Zero sample setup fees on approved orders</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Individually labeled by recipient size</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Impact Photography */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-2xl aspect-[16/10] group">
              <img
                src="/src/assets/images/industry_showcase_team_1791836367778.jpg"
                alt="Corporate operations and management team in branded custom outerwear"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-xs text-neutral-300">
                <p className="font-semibold text-white">
                  Nexus Global Operations Team — Outfitted in JD Custom Softshells
                </p>
                <p className="text-[11px] text-neutral-400 mt-0.5">
                  London &amp; Nairobi regional offices · 120 Units delivered
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
