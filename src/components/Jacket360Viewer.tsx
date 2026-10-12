import React, { useState, useRef, useEffect } from 'react';
import { RotateCw, ArrowRight, Eye, Sparkles, ZoomIn, ZoomOut, Check, Sliders, Shield } from 'lucide-react';
import { JacketStyle } from '../data/jacketsData';
import { JacketPhoto } from './JacketPhoto';

interface Jacket360ViewerProps {
  jacket: JacketStyle;
  onConfigureClick?: () => void;
  standalone?: boolean;
}

export const Jacket360Viewer: React.FC<Jacket360ViewerProps> = ({
  jacket,
  onConfigureClick,
  standalone = false,
}) => {
  const [angle, setAngle] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [startAngle, setStartAngle] = useState<number>(0);
  const [isAutoSpinning, setIsAutoSpinning] = useState<boolean>(false);
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [selectedColorIndex, setSelectedColorIndex] = useState<number>(0);
  const [showHotspots, setShowHotspots] = useState<boolean>(true);

  const containerRef = useRef<HTMLDivElement>(null);
  const autoSpinRef = useRef<number | null>(null);

  const currentColor = jacket.availableColours[selectedColorIndex] || jacket.availableColours[0];

  useEffect(() => {
    if (isAutoSpinning) {
      const step = () => {
        setAngle((prev) => (prev + 0.9) % 360);
        autoSpinRef.current = requestAnimationFrame(step);
      };
      autoSpinRef.current = requestAnimationFrame(step);
    } else if (autoSpinRef.current) {
      cancelAnimationFrame(autoSpinRef.current);
    }
    return () => {
      if (autoSpinRef.current) cancelAnimationFrame(autoSpinRef.current);
    };
  }, [isAutoSpinning]);

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    setIsAutoSpinning(false);
    setStartX(e.clientX);
    setStartAngle(angle);
    try {
      (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    } catch {
      // ignore
    }
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    const deltaX = e.clientX - startX;
    const sensitivity = 0.75;
    const newAngle = (startAngle - deltaX * sensitivity) % 360;
    setAngle(newAngle < 0 ? newAngle + 360 : newAngle);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);
    try {
      (e.target as HTMLElement).releasePointerCapture?.(e.pointerId);
    } catch {
      // ignore
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      setAngle((prev) => (prev - 15 + 360) % 360);
    } else if (e.key === 'ArrowRight') {
      setAngle((prev) => (prev + 15) % 360);
    } else if (e.key === 'Home') {
      setAngle(0);
    } else if (e.key === 'End') {
      setAngle(180);
    }
  };

  const isBack = angle > 90 && angle < 270;
  const viewLabel =
    angle >= 337.5 || angle < 22.5
      ? 'Front (0°)'
      : angle >= 22.5 && angle < 67.5
      ? 'Quarter Front Right (45°)'
      : angle >= 67.5 && angle < 112.5
      ? 'Right Profile (90°)'
      : angle >= 112.5 && angle < 157.5
      ? 'Quarter Back Right (135°)'
      : angle >= 157.5 && angle < 202.5
      ? 'Full Rear (180°)'
      : angle >= 202.5 && angle < 247.5
      ? 'Quarter Back Left (225°)'
      : angle >= 247.5 && angle < 292.5
      ? 'Left Profile (270°)'
      : 'Quarter Front Left (315°)';

  return (
    <div
      ref={containerRef}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      className={`relative rounded-2xl bg-white border border-[#deded5] p-5 sm:p-6 select-none focus:outline-none focus:ring-2 focus:ring-[#e85a2a]/30 shadow-xl transition-all ${
        standalone ? 'max-w-4xl mx-auto' : 'w-full'
      }`}
    >
      {/* Top Header / Status bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4 text-xs border-b border-[#deded5] pb-3.5">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#e85a2a]" />
          <span className="font-extrabold text-[#20231f] text-sm tracking-tight">{jacket.name}</span>
          <span className="text-[#deded5]">·</span>
          <span className="font-mono text-[#85867f] text-[11px]">{jacket.sku}</span>
          <span className="text-[#deded5] hidden sm:inline">·</span>
          <span className="text-[#e85a2a] font-semibold hidden sm:inline">{jacket.weatherRating}</span>
        </div>

        <div className="flex items-center gap-2 font-mono text-[#20231f]">
          <span className="px-2 py-0.5 rounded bg-[#f6f5f0] border border-[#deded5] text-[11px] font-bold">
            {Math.round(angle)}°
          </span>
          <span className="text-[#85867f] text-[11px]">({viewLabel})</span>
        </div>
      </div>

      {/* Main Interactive 3D Stage */}
      <div
        className="relative h-80 sm:h-96 md:h-[440px] w-full flex items-center justify-center cursor-grab active:cursor-grabbing overflow-hidden rounded-xl bg-gradient-to-b from-[#faf9f6] via-[#f5f4ee] to-[#ece9df] border border-[#e2e4dc]"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
      >
        {/* Soft realistic studio floor reflection / shadow */}
        <div
          className="absolute bottom-4 sm:bottom-6 w-56 sm:w-72 h-8 rounded-full bg-black/10 blur-xl pointer-events-none transition-transform duration-100"
          style={{
            transform: `scale(${1 + Math.sin((angle * Math.PI) / 90) * 0.1}, ${
              1 - Math.sin((angle * Math.PI) / 90) * 0.05
            })`,
          }}
        />

        {/* 3D Rotatable Garment View Container */}
        <div
          className="relative h-[85%] sm:h-[90%] flex items-center justify-center transition-transform"
          style={{
            perspective: '1200px',
            transform: `scale(${zoomLevel})`,
          }}
        >
          <div
            className="relative h-full flex items-center justify-center transition-transform duration-75"
            style={{
              transform: `rotateY(${angle}deg)`,
              transformStyle: 'preserve-3d',
            }}
          >
            {/* Front View Face */}
            <div
              className={`h-full flex items-center justify-center transition-opacity duration-150 ${
                isBack ? 'opacity-0 pointer-events-none' : 'opacity-100'
              }`}
              style={{
                backfaceVisibility: 'hidden',
                transform: 'translateZ(2px)',
                filter: 'drop-shadow(0 20px 25px rgba(0,0,0,0.15))',
              }}
            >
              <JacketPhoto
                image={jacket.image}
                name={jacket.name}
                aspect={jacket.aspect}
                back={false}
                eager={true}
                className="h-full"
              />
            </div>

            {/* Back View Face */}
            <div
              className={`h-full flex items-center justify-center absolute inset-0 transition-opacity duration-150 ${
                !isBack ? 'opacity-0 pointer-events-none' : 'opacity-100'
              }`}
              style={{
                backfaceVisibility: 'hidden',
                transform: 'rotateY(180deg) translateZ(2px)',
                filter: 'drop-shadow(0 20px 25px rgba(0,0,0,0.15))',
              }}
            >
              <JacketPhoto
                image={jacket.image}
                name={jacket.name}
                aspect={jacket.aspect}
                back={true}
                eager={true}
                className="h-full"
              />
            </div>
          </div>
        </div>

        {/* Floating Interactive Badge Indicator */}
        <div className="absolute top-4 left-4 flex flex-col gap-1.5 pointer-events-none">
          <span className="px-2.5 py-1 bg-white/90 backdrop-blur-md border border-[#deded5] rounded-full text-[10px] font-mono font-bold uppercase tracking-wider text-[#20231f] shadow-xs">
            4K Ultra-HD · {isBack ? 'Back View' : 'Front View'}
          </span>
          <span className="text-[10px] text-[#85867f] font-medium hidden sm:inline">
            Drag to rotate · Scroll to view
          </span>
        </div>

        {/* Interactive Hotspot Pills when toggled */}
        {showHotspots && (
          <div className="absolute inset-0 pointer-events-none">
            {!isBack ? (
              <div className="absolute top-[35%] left-[40%] pointer-events-auto">
                <div className="relative group">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#e85a2a] text-white text-[10px] font-bold shadow-md cursor-pointer animate-bounce">
                    +
                  </span>
                  <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden group-hover:flex w-48 p-2.5 bg-[#20231f] text-white rounded-lg shadow-xl text-[11px] leading-tight flex-col gap-1 z-30">
                    <span className="font-bold text-[#e85a2a]">Left Chest Crest Zone</span>
                    <span className="text-neutral-300">Madeira high-density multi-thread embroidery up to 12,000 stitches.</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="absolute top-[32%] left-[48%] pointer-events-auto">
                <div className="relative group">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#e85a2a] text-white text-[10px] font-bold shadow-md cursor-pointer animate-bounce">
                    +
                  </span>
                  <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden group-hover:flex w-48 p-2.5 bg-[#20231f] text-white rounded-lg shadow-xl text-[11px] leading-tight flex-col gap-1 z-30">
                    <span className="font-bold text-[#e85a2a]">Full Back Branding Zone</span>
                    <span className="text-neutral-300">Expansive 28cm high-visibility panel for company identity or safety lettering.</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Floating Zoom & Spin Quick Actions */}
        <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-white/90 backdrop-blur-md p-1.5 rounded-xl border border-[#deded5] shadow-sm">
          <button
            onClick={() => setZoomLevel((prev) => Math.min(prev + 0.15, 1.45))}
            className="p-1.5 hover:bg-[#f6f5f0] text-[#20231f] rounded transition-colors cursor-pointer"
            title="Zoom In"
            aria-label="Zoom in"
          >
            <ZoomIn className="w-4 h-4" />
          </button>
          <button
            onClick={() => setZoomLevel((prev) => Math.max(prev - 0.15, 0.85))}
            className="p-1.5 hover:bg-[#f6f5f0] text-[#20231f] rounded transition-colors cursor-pointer"
            title="Zoom Out"
            aria-label="Zoom out"
          >
            <ZoomOut className="w-4 h-4" />
          </button>
          <div className="w-px h-4 bg-[#deded5]" />
          <button
            onClick={() => setIsAutoSpinning((prev) => !prev)}
            className={`px-2.5 py-1 text-xs font-bold rounded flex items-center gap-1.5 transition-colors cursor-pointer ${
              isAutoSpinning ? 'bg-[#e85a2a] text-white' : 'bg-transparent text-[#20231f] hover:bg-[#f6f5f0]'
            }`}
            title="Auto Spin"
          >
            <RotateCw className={`w-3.5 h-3.5 ${isAutoSpinning ? 'animate-spin' : ''}`} />
            <span className="text-[11px] uppercase tracking-wider">{isAutoSpinning ? 'Pause' : 'Auto Spin'}</span>
          </button>
        </div>
      </div>

      {/* Scrub Bar & Angle Quick Navigation */}
      <div className="mt-4 flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <span className="text-[11px] font-mono text-[#85867f] uppercase font-bold shrink-0">Angle:</span>
          <input
            type="range"
            min="0"
            max="360"
            value={Math.round(angle)}
            onChange={(e) => {
              setIsAutoSpinning(false);
              setAngle(Number(e.target.value));
            }}
            className="w-full h-1.5 bg-[#deded5] rounded-lg appearance-none cursor-pointer accent-[#e85a2a]"
          />
          <span className="text-xs font-mono font-bold text-[#20231f] tabular-nums shrink-0 w-10 text-right">
            {Math.round(angle)}°
          </span>
        </div>

        {/* Quick Flip Buttons & Colorway Presets */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-[#deded5]">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#85867f] hidden sm:inline">
              Flip:
            </span>
            <button
              onClick={() => {
                setIsAutoSpinning(false);
                setAngle(0);
              }}
              className={`px-3 py-1 rounded text-xs font-bold uppercase transition-colors cursor-pointer ${
                !isBack ? 'bg-[#20231f] text-white' : 'bg-[#f6f5f0] text-[#555850] hover:text-[#20231f]'
              }`}
            >
              Front 0°
            </button>
            <button
              onClick={() => {
                setIsAutoSpinning(false);
                setAngle(180);
              }}
              className={`px-3 py-1 rounded text-xs font-bold uppercase transition-colors cursor-pointer ${
                isBack ? 'bg-[#20231f] text-white' : 'bg-[#f6f5f0] text-[#555850] hover:text-[#20231f]'
              }`}
            >
              Back 180°
            </button>
            <button
              onClick={() => setShowHotspots((prev) => !prev)}
              className={`px-2.5 py-1 rounded text-xs font-bold transition-colors cursor-pointer ${
                showHotspots ? 'bg-[#e85a2a]/15 text-[#e85a2a]' : 'text-[#85867f] hover:text-[#20231f]'
              }`}
            >
              {showHotspots ? 'Hotspots On' : 'Hotspots Off'}
            </button>
          </div>

          {/* Action Button: Configure This Style */}
          {onConfigureClick && (
            <button
              onClick={onConfigureClick}
              className="inline-flex items-center gap-2 px-5 py-2 bg-[#e85a2a] hover:bg-[#cf4920] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md hover:-translate-y-0.5 cursor-pointer ml-auto"
            >
              <span>Configure This Style</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
