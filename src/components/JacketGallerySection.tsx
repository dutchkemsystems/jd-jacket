import React, { useState } from 'react';
import { JACKET_STYLES, JacketStyle } from '../data/jacketsData';
import { Jacket360Viewer } from './Jacket360Viewer';
import { JacketPhoto } from './JacketPhoto';
import { RotateCw, X, ArrowRight, Eye, Maximize2, Sparkles, Check, ZoomIn } from 'lucide-react';

interface JacketGallerySectionProps {
  onOpenOrderModal: (jacketId?: string) => void;
  onConfigureStyle?: (jacket: JacketStyle) => void;
  selectedIndustryFilter?: string | null;
  onClearIndustryFilter?: () => void;
}

export const JacketGallerySection: React.FC<JacketGallerySectionProps> = ({
  onOpenOrderModal,
  onConfigureStyle,
  selectedIndustryFilter,
  onClearIndustryFilter,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [inspectedJacket, setInspectedJacket] = useState<JacketStyle | null>(null);
  const [lightboxJacket, setLightboxJacket] = useState<JacketStyle | null>(null);
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});

  const toggleCardFlip = (jacketId: string) => {
    setFlippedCards((prev) => ({
      ...prev,
      [jacketId]: !prev[jacketId],
    }));
  };

  const categories = ['All', 'Puffer', 'Softshell', 'Parka', 'Fleece', 'Safety jacket', 'Windbreaker', 'Bodywarmer'];

  const filteredJackets = JACKET_STYLES.filter((jacket) => {
    const matchesCategory =
      selectedCategory === 'All' || jacket.kind === selectedCategory || jacket.category === selectedCategory;
    const matchesIndustry = !selectedIndustryFilter || jacket.industry === selectedIndustryFilter;
    return matchesCategory && matchesIndustry;
  });

  const handleConfigureClick = (jacket: JacketStyle) => {
    if (onConfigureStyle) {
      onConfigureStyle(jacket);
    } else {
      onOpenOrderModal(jacket.id);
    }
  };

  return (
    <section id="gallery" className="py-20 md:py-28 bg-[#f6f5f0] border-t border-[#deded5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 bg-[#e85a2a] inline-block" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#e85a2a]">
                FULL 20-MODEL 4K OUTERWEAR ARCHIVE
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#20231f] tracking-tight">
              Custom jacket examples. Every angle. Every detail.
            </h2>
            <p className="text-sm sm:text-base text-[#555850] mt-3 leading-relaxed">
              Explore 20 certified corporate outerwear styles with authentic front-and-back inspection, rotatable 360° views, and ultra-high-definition 4K photography.
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={() => onOpenOrderModal()}
              className="px-7 py-3.5 bg-[#e85a2a] hover:bg-[#cf4920] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer"
            >
              <span>EXPLORE CUSTOM JACKETS</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 p-3.5 bg-white border border-[#deded5] rounded-xl shadow-2xs">
          <div className="flex items-center gap-2 overflow-x-auto py-1 scrollbar-none">
            <span className="text-[11px] font-mono text-[#85867f] uppercase tracking-wider font-bold mr-2 shrink-0">
              Silhouette:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-lg transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#20231f] text-white shadow-xs'
                    : 'text-[#555850] hover:text-[#20231f] hover:bg-[#f6f5f0]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {selectedIndustryFilter && (
            <div className="flex items-center gap-2 bg-[#f6f5f0] border border-[#deded5] px-3 py-1 rounded text-xs text-[#20231f] font-semibold">
              <span>
                Filtered by: <strong>{selectedIndustryFilter}</strong>
              </span>
              {onClearIndustryFilter && (
                <button
                  onClick={onClearIndustryFilter}
                  className="p-0.5 hover:text-[#e85a2a] ml-1 cursor-pointer"
                  title="Clear industry filter"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          )}
        </div>

        {/* 20 Jacket Styles Grid with Catchy Hover Lift & 4K Preview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredJackets.map((jacket) => {
            const isFlipped = !!flippedCards[jacket.id];

            return (
              <div
                key={jacket.id}
                className="bg-white border border-[#deded5] rounded-xl overflow-hidden flex flex-col justify-between hover:border-[#e85a2a] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                {/* Visual Preview Box */}
                <div className="relative h-64 bg-gradient-to-b from-[#fbfaf6] to-[#f4f3ed] p-4 flex flex-col items-center justify-center border-b border-[#deded5] overflow-hidden">
                  {/* Photo Dual-Panel Elevation */}
                  <div
                    className="relative h-52 transition-transform duration-300 group-hover:scale-105 flex items-center justify-center cursor-pointer"
                    onClick={() => handleConfigureClick(jacket)}
                    title="Click to Configure"
                  >
                    <JacketPhoto
                      image={jacket.image}
                      name={jacket.name}
                      aspect={jacket.aspect}
                      back={isFlipped}
                      className="h-full drop-shadow-md"
                    />
                  </div>

                  {/* Flip button & 360 inspect button */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => toggleCardFlip(jacket.id)}
                      className="px-2.5 py-1 bg-white/90 hover:bg-white text-[10px] font-mono text-[#20231f] font-bold border border-[#deded5] rounded shadow-2xs flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <RotateCw className="w-3 h-3 text-[#e85a2a]" />
                      <span>{isFlipped ? 'Show Front' : 'Show Rear'}</span>
                    </button>

                    <div className="flex items-center gap-1">
                      <button
                        type="button"
                        onClick={() => setLightboxJacket(jacket)}
                        className="p-1.5 bg-white/90 hover:bg-white text-[#20231f] border border-[#deded5] rounded shadow-2xs transition-colors cursor-pointer"
                        title="View 4K Fullscreen"
                      >
                        <Maximize2 className="w-3 h-3" />
                      </button>

                      <button
                        type="button"
                        onClick={() => setInspectedJacket(jacket)}
                        className="px-2 py-1 bg-[#20231f] hover:bg-[#e85a2a] text-white text-[10px] font-bold uppercase tracking-wider rounded shadow-2xs flex items-center gap-1 transition-colors cursor-pointer"
                      >
                        <Eye className="w-3 h-3" />
                        <span>360°</span>
                      </button>
                    </div>
                  </div>

                  {/* 4K Resolution Badge */}
                  <div className="absolute bottom-2 left-3 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                    <span className="text-[10px] font-mono font-bold text-[#85867f]">
                      4K · {isFlipped ? 'Rear' : 'Front'}
                    </span>
                  </div>
                </div>

                {/* Card Content & Details */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between gap-2 text-xs">
                      <span className="font-mono text-[#85867f] font-bold">{jacket.sku}</span>
                      <span className="text-[11px] font-bold text-[#e85a2a]">{jacket.kind}</span>
                    </div>

                    <h3 className="text-base font-bold text-[#20231f] mt-1 group-hover:text-[#e85a2a] transition-colors">
                      {jacket.name}
                    </h3>

                    <p className="text-xs text-[#555850] mt-1.5 line-clamp-2 leading-relaxed">
                      {jacket.tagline}
                    </p>

                    {/* Color Swatches */}
                    <div className="mt-3 flex items-center gap-1.5">
                      <span className="text-[10px] text-[#85867f] uppercase font-mono font-bold">
                        Colours:
                      </span>
                      {jacket.availableColours.map((c) => (
                        <span
                          key={c.name}
                          className="w-3.5 h-3.5 rounded-full border border-[#deded5] inline-block shadow-2xs"
                          style={{ backgroundColor: c.hex }}
                          title={c.name}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Bottom Meta & Action */}
                  <div className="pt-3 border-t border-[#deded5] space-y-3">
                    <div className="flex items-center justify-between text-xs text-[#6e7068] font-mono">
                      <span>MOQ: {jacket.moq} pcs</span>
                      <span className="text-[#20231f] font-bold">{jacket.priceGuide}</span>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleConfigureClick(jacket)}
                      className="w-full py-2.5 px-3 bg-[#f6f5f0] hover:bg-[#e85a2a] text-[#20231f] hover:text-white border border-[#deded5] hover:border-[#e85a2a] text-xs font-bold uppercase tracking-wider transition-all rounded shadow-2xs flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Configure This Style</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 4K Fullscreen Image Lightbox Modal */}
        {lightboxJacket && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <div className="relative w-full max-w-4xl bg-white border border-[#deded5] rounded-xl overflow-hidden shadow-2xl p-6">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#deded5]">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 bg-[#e85a2a] text-white font-mono text-[10px] font-bold uppercase rounded">
                      4K Ultra-HD Inspection
                    </span>
                    <span className="text-xs font-mono text-[#85867f]">{lightboxJacket.sku}</span>
                  </div>
                  <h3 className="text-lg font-black text-[#20231f] mt-1">{lightboxJacket.name}</h3>
                </div>

                <button
                  onClick={() => setLightboxJacket(null)}
                  className="p-2 text-[#555850] hover:text-[#20231f] hover:bg-[#f6f5f0] rounded cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* 4K Image Render with Extreme Resolution */}
              <div className="h-96 sm:h-[420px] bg-[#f9f8f4] border border-[#deded5] rounded-lg p-6 flex items-center justify-center overflow-hidden">
                <JacketPhoto
                  image={lightboxJacket.image}
                  name={lightboxJacket.name}
                  aspect={lightboxJacket.aspect}
                  back={false}
                  className="h-full drop-shadow-2xl"
                />
              </div>

              {/* Lightbox Footer Actions */}
              <div className="mt-4 pt-3 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-[#555850]">
                  <span>
                    Weather: <strong className="text-[#e85a2a]">{lightboxJacket.weatherRating}</strong>
                  </span>
                  <span className="mx-2">·</span>
                  <span>
                    Fabric: <strong>{lightboxJacket.fabricSpecs}</strong>
                  </span>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => {
                      const j = lightboxJacket;
                      setLightboxJacket(null);
                      setInspectedJacket(j);
                    }}
                    className="flex-1 sm:flex-initial px-4 py-2.5 bg-white border border-[#deded5] hover:bg-[#f6f5f0] text-[#20231f] font-bold text-xs uppercase tracking-wider rounded cursor-pointer"
                  >
                    Open 360° View
                  </button>
                  <button
                    onClick={() => {
                      const j = lightboxJacket;
                      setLightboxJacket(null);
                      handleConfigureClick(j);
                    }}
                    className="flex-1 sm:flex-initial px-6 py-2.5 bg-[#e85a2a] hover:bg-[#cf4920] text-white font-bold text-xs uppercase tracking-wider rounded shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Configure This Style Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Modal 360 Viewer Popup */}
        {inspectedJacket && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
            <div className="relative w-full max-w-4xl bg-white border border-[#deded5] rounded-xl p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#deded5]">
                <div>
                  <h3 className="text-base font-bold text-[#20231f]">
                    360° Inspection — {inspectedJacket.name} ({inspectedJacket.sku})
                  </h3>
                  <p className="text-xs text-[#6e7068] mt-0.5">{inspectedJacket.fabricSpecs}</p>
                </div>
                <button
                  onClick={() => setInspectedJacket(null)}
                  className="p-1.5 text-[#6e7068] hover:text-[#20231f] cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <Jacket360Viewer
                jacket={inspectedJacket}
                onConfigureClick={() => {
                  const j = inspectedJacket;
                  setInspectedJacket(null);
                  handleConfigureClick(j);
                }}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
