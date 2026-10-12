import React, { useState, useRef, useEffect, useCallback } from 'react';
import { RotateCw, Sparkles, Eye, Shield, Compass, ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { JacketStyle } from '../data/jacketsData';

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
  const [angle, setAngle] = useState<number>(15); // degrees 0–359
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [startAngle, setStartAngle] = useState<number>(15);
  const [isAutoSpinning, setIsAutoSpinning] = useState<boolean>(false);
  const [selectedColorIndex, setSelectedColorIndex] = useState<number>(0);
  const [showHotspots, setShowHotspots] = useState<boolean>(true);
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const autoSpinRef = useRef<number | null>(null);

  const currentColor = jacket.availableColours[selectedColorIndex] || jacket.availableColours[0];

  // Auto-spin animation
  useEffect(() => {
    if (isAutoSpinning) {
      const step = () => {
        setAngle((prev) => (prev + 0.8) % 360);
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

  // Pointer drag events for smooth rotation
  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    setIsAutoSpinning(false);
    setStartX(e.clientX);
    setStartAngle(angle);
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    const deltaX = e.clientX - startX;
    // 360 degrees over ~400px of drag
    const sensitivity = 0.8;
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
      setAngle((prev) => (prev - 10 + 360) % 360);
    } else if (e.key === 'ArrowRight') {
      setAngle((prev) => (prev + 10) % 360);
    } else if (e.key === 'Home') {
      setAngle(0);
    } else if (e.key === 'End') {
      setAngle(180);
    }
  };

  // Determine viewing orientation
  const isBack = angle > 90 && angle < 270;
  const normalizedFacing = Math.abs(Math.sin((angle * Math.PI) / 180)); // 0 = flat front/back, 1 = direct side
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

  // Hotspot data
  const hotspots = [
    {
      id: 'chest-embroidery',
      title: 'Precision Embroidery Zone',
      description: 'Up to 12,000 stitches. High-density Madeira polyneon thread resistant to industrial washing.',
      x: 38,
      y: 35,
      visibleSide: !isBack,
    },
    {
      id: 'storm-zip',
      title: 'Waterproof Reverse-Coil YKK Zip',
      description: 'Bonded PU weather tape with internal draft baffle and chin protector fleece.',
      x: 50,
      y: 48,
      visibleSide: !isBack,
    },
    {
      id: 'back-yoke',
      title: 'Large Back Branding Zone',
      description: 'Expansive 28cm width zone ideal for company titles, reflective lettering, or sponsor crests.',
      x: 50,
      y: 32,
      visibleSide: isBack,
    },
    {
      id: 'sleeve-pocket',
      title: 'Articulated Arm & Badge Area',
      description: 'Ergonomic dual-panel sleeve with optional secondary silicone badge or safety emblem.',
      x: 72,
      y: 42,
      visibleSide: normalizedFacing > 0.35,
    },
  ];

  return (
    <div
      ref={containerRef}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      className={`relative rounded-2xl bg-gradient-to-b from-neutral-900 via-neutral-900/95 to-neutral-950 border border-neutral-800/80 p-5 select-none focus:outline-none focus:ring-1 focus:ring-amber-500/50 shadow-2xl transition-all ${
        standalone ? 'max-w-4xl mx-auto' : 'w-full'
      }`}
    >
      {/* Top Header / Status bar */}
      <div className="flex items-center justify-between mb-3 text-xs text-neutral-400 border-b border-neutral-800 pb-3">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-neutral-200">{jacket.name}</span>
          <span className="text-neutral-500">·</span>
          <span className="font-mono text-neutral-400">{jacket.sku}</span>
          <span className="text-neutral-500">·</span>
          <span className="text-amber-400 font-medium">{jacket.weatherRating}</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="font-mono tabular-nums text-neutral-300">{Math.round(angle)}°</span>
          <span className="hidden sm:inline text-neutral-500">({viewLabel})</span>
        </div>
      </div>

      {/* Main Interactive Stage */}
      <div
        className="relative h-80 sm:h-96 md:h-[420px] w-full flex items-center justify-center cursor-grab active:cursor-grabbing overflow-hidden rounded-xl bg-radial from-neutral-800/40 via-neutral-950/70 to-neutral-950"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
      >
        {/* Subtle grid and radial light */}
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 40%, rgba(251, 146, 60, 0.15) 0%, transparent 60%)`,
          }}
        />

        {/* Dynamic Shadow underneath jacket */}
        <div
          className="absolute bottom-6 w-56 sm:w-72 h-8 rounded-full bg-black/70 blur-xl pointer-events-none transition-transform duration-100"
          style={{
            transform: `scale(${1 + Math.sin((angle * Math.PI) / 90) * 0.08}, ${
              1 - Math.sin((angle * Math.PI) / 90) * 0.05
            })`,
          }}
        />

        {/* 360 SVG / 3D Canvas-Simulated Jacket Model */}
        <div
          className="relative w-64 sm:w-80 h-72 sm:h-92 transition-transform duration-75 flex items-center justify-center"
          style={{
            perspective: '1000px',
          }}
        >
          {/* Rotating Shell Container */}
          <div
            className="relative w-full h-full flex items-center justify-center transition-transform"
            style={{
              transform: `rotateY(${angle}deg) scale(1.05)`,
              transformStyle: 'preserve-3d',
            }}
          >
            {/* SVG Jacket Render: Front Face */}
            <svg
              viewBox="0 0 300 360"
              className={`w-full h-full drop-shadow-2xl transition-opacity duration-200 ${
                isBack ? 'opacity-0 pointer-events-none' : 'opacity-100'
              }`}
              style={{
                backfaceVisibility: 'hidden',
                filter: `brightness(${0.9 + Math.cos((angle * Math.PI) / 180) * 0.15}) contrast(1.05)`,
              }}
            >
              <defs>
                {/* Dynamic metallic shimmer / light reflection */}
                <linearGradient id="bodyGradFront" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={currentColor.accentHex || currentColor.hex} stopOpacity="0.95" />
                  <stop offset="50%" stopColor={currentColor.hex} />
                  <stop offset="100%" stopColor="#080808" stopOpacity="0.9" />
                </linearGradient>

                <linearGradient id="highlightGloss" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.02" />
                  <stop offset="45%" stopColor="#ffffff" stopOpacity={0.12 * (1 - normalizedFacing)} />
                  <stop offset="100%" stopColor="#000000" stopOpacity="0.4" />
                </linearGradient>

                <pattern id="ripstopGrid" width="6" height="6" patternUnits="userSpaceOnUse">
                  <path d="M 6 0 L 0 0 0 6" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
                </pattern>
              </defs>

              {/* Collar & Neck Interior */}
              <path
                d="M 115 50 Q 150 42 185 50 L 192 78 Q 150 72 108 78 Z"
                fill="#1f1f22"
                stroke="#333338"
                strokeWidth="1.5"
              />
              <path
                d="M 120 54 Q 150 48 180 54 L 180 70 Q 150 66 120 70 Z"
                fill="#121214"
              />

              {/* Main Outer Torso Silhouette */}
              <path
                d="M 108 78 
                   L 72 96 
                   L 46 172 
                   L 60 270 
                   L 84 265 
                   L 92 195 
                   L 94 300 
                   Q 150 305 206 300 
                   L 208 195 
                   L 216 265 
                   L 240 270 
                   L 254 172 
                   L 228 96 
                   L 192 78 
                   Q 150 82 108 78 Z"
                fill="url(#bodyGradFront)"
                stroke="rgba(255,255,255,0.15)"
                strokeWidth="1.2"
              />

              {/* Texture Layer */}
              <path
                d="M 108 78 L 72 96 L 46 172 L 60 270 L 84 265 L 92 195 L 94 300 Q 150 305 206 300 L 208 195 L 216 265 L 240 270 L 254 172 L 228 96 L 192 78 Q 150 82 108 78 Z"
                fill="url(#ripstopGrid)"
              />

              {/* Lighting Highlight Mask */}
              <path
                d="M 108 78 L 72 96 L 46 172 L 60 270 L 84 265 L 92 195 L 94 300 Q 150 305 206 300 L 208 195 L 216 265 L 240 270 L 254 172 L 228 96 L 192 78 Q 150 82 108 78 Z"
                fill="url(#highlightGloss)"
              />

              {/* Baffle Horizontal Stitch Lines (Executive Puffer / Softshell contours) */}
              <path d="M 94 125 Q 150 130 206 125" stroke="rgba(0,0,0,0.5)" strokeWidth="2.5" fill="none" />
              <path d="M 94 126 Q 150 131 206 126" stroke="rgba(255,255,255,0.12)" strokeWidth="0.8" fill="none" />

              <path d="M 94 170 Q 150 175 206 170" stroke="rgba(0,0,0,0.5)" strokeWidth="2.5" fill="none" />
              <path d="M 94 171 Q 150 176 206 171" stroke="rgba(255,255,255,0.12)" strokeWidth="0.8" fill="none" />

              <path d="M 94 215 Q 150 220 206 215" stroke="rgba(0,0,0,0.5)" strokeWidth="2.5" fill="none" />
              <path d="M 94 216 Q 150 221 206 216" stroke="rgba(255,255,255,0.12)" strokeWidth="0.8" fill="none" />

              <path d="M 94 260 Q 150 264 206 260" stroke="rgba(0,0,0,0.5)" strokeWidth="2.5" fill="none" />
              <path d="M 94 261 Q 150 265 206 261" stroke="rgba(255,255,255,0.12)" strokeWidth="0.8" fill="none" />

              {/* Center Main Zipper */}
              <line x1="150" y1="78" x2="150" y2="302" stroke="#0a0a0c" strokeWidth="4" />
              <line x1="150" y1="78" x2="150" y2="302" stroke="#3b3b42" strokeWidth="1.8" strokeDasharray="3 2" />

              {/* Sleek Zipper Puller */}
              <rect x="148" y="110" width="4" height="12" rx="1.5" fill="#f59e0b" />
              <line x1="150" y1="122" x2="150" y2="128" stroke="#f59e0b" strokeWidth="1.5" />

              {/* Side Zipper Pockets with Welded Seams */}
              <path d="M 106 230 L 118 258" stroke="#121214" strokeWidth="3" strokeLinecap="round" />
              <path d="M 194 230 L 182 258" stroke="#121214" strokeWidth="3" strokeLinecap="round" />

              {/* High-Density Chest Embroidery Zone (Left Chest) */}
              <g transform="translate(118, 142) scale(0.75)">
                <circle cx="12" cy="12" r="10" fill="#f59e0b" fillOpacity="0.25" stroke="#f59e0b" strokeWidth="1.2" />
                <path d="M 7 15 L 12 8 L 17 15" stroke="#f59e0b" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="9" y1="13" x2="15" y2="13" stroke="#f59e0b" strokeWidth="1.2" />
                {/* Micro Company Wordmark Embroidery */}
                <text x="12" y="27" fontSize="5" fontWeight="bold" fill="#ffffff" textAnchor="middle" letterSpacing="0.8">
                  CORP BRAND
                </text>
              </g>

              {/* Sleeve Cuffs */}
              <path d="M 60 270 L 84 265" stroke="#26262a" strokeWidth="4" />
              <path d="M 216 265 L 240 270" stroke="#26262a" strokeWidth="4" />
            </svg>

            {/* SVG Jacket Render: Rear Face */}
            <svg
              viewBox="0 0 300 360"
              className={`w-full h-full drop-shadow-2xl transition-opacity duration-200 ${
                !isBack ? 'opacity-0 pointer-events-none' : 'opacity-100'
              }`}
              style={{
                transform: 'rotateY(180deg)',
                backfaceVisibility: 'hidden',
                filter: `brightness(${0.9 + Math.cos(((angle + 180) * Math.PI) / 180) * 0.15}) contrast(1.05)`,
              }}
            >
              <defs>
                <linearGradient id="bodyGradBack" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor={currentColor.accentHex || currentColor.hex} stopOpacity="0.95" />
                  <stop offset="50%" stopColor={currentColor.hex} />
                  <stop offset="100%" stopColor="#080808" stopOpacity="0.9" />
                </linearGradient>
              </defs>

              {/* Rear High Collar */}
              <path
                d="M 112 52 Q 150 48 188 52 L 192 78 Q 150 82 108 78 Z"
                fill="#1f1f22"
                stroke="#333338"
                strokeWidth="1.5"
              />

              {/* Main Rear Torso */}
              <path
                d="M 108 78 
                   L 72 96 
                   L 46 172 
                   L 60 270 
                   L 84 265 
                   L 92 195 
                   L 94 300 
                   Q 150 308 206 300 
                   L 208 195 
                   L 216 265 
                   L 240 270 
                   L 254 172 
                   L 228 96 
                   L 192 78 
                   Q 150 74 108 78 Z"
                fill="url(#bodyGradBack)"
                stroke="rgba(255,255,255,0.15)"
                strokeWidth="1.2"
              />

              {/* Texture Layer */}
              <path
                d="M 108 78 L 72 96 L 46 172 L 60 270 L 84 265 L 92 195 L 94 300 Q 150 308 206 300 L 208 195 L 216 265 L 240 270 L 254 172 L 228 96 L 192 78 Q 150 74 108 78 Z"
                fill="url(#ripstopGrid)"
              />

              {/* Rear Shoulder Yoke Seam */}
              <path d="M 88 115 Q 150 125 212 115" stroke="rgba(0,0,0,0.6)" strokeWidth="2.5" fill="none" />
              <path d="M 88 116 Q 150 126 212 116" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" fill="none" />

              {/* Rear Horizontal Baffles */}
              <path d="M 94 165 Q 150 170 206 165" stroke="rgba(0,0,0,0.5)" strokeWidth="2.5" fill="none" />
              <path d="M 94 212 Q 150 216 206 212" stroke="rgba(0,0,0,0.5)" strokeWidth="2.5" fill="none" />
              <path d="M 94 258 Q 150 262 206 258" stroke="rgba(0,0,0,0.5)" strokeWidth="2.5" fill="none" />

              {/* Large Back Corporate Branding Placement */}
              <g transform="translate(150, 140)">
                <rect x="-42" y="-14" width="84" height="28" rx="4" fill="rgba(0,0,0,0.4)" stroke="#f59e0b" strokeWidth="1" strokeDasharray="3 2" />
                <text x="0" y="-1" fontSize="7.5" fontWeight="800" fill="#ffffff" textAnchor="middle" letterSpacing="1.2">
                  CUSTOM BRANDING
                </text>
                <text x="0" y="8" fontSize="4.5" fill="#f59e0b" textAnchor="middle" letterSpacing="0.8">
                  ORGANIZATION IDENTIFIER
                </text>
              </g>

              {/* Hanger Loop at Nape */}
              <path d="M 142 74 Q 150 70 158 74" stroke="#f59e0b" strokeWidth="1.8" fill="none" />
            </svg>
          </div>
        </div>

        {/* Technical Hotspot Pins */}
        {showHotspots && (
          <div className="absolute inset-0 pointer-events-none">
            {hotspots
              .filter((h) => h.visibleSide)
              .map((h) => (
                <div
                  key={h.id}
                  style={{ left: `${h.x}%`, top: `${h.y}%` }}
                  className="absolute pointer-events-auto transform -translate-x-1/2 -translate-y-1/2 group"
                >
                  <button
                    onClick={() => setActiveHotspot(activeHotspot === h.id ? null : h.id)}
                    aria-label={h.title}
                    className="relative flex items-center justify-center w-6 h-6 rounded-full bg-neutral-900/90 border border-amber-500/80 shadow-lg hover:scale-110 transition-transform cursor-pointer"
                  >
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping absolute" />
                    <span className="w-2 h-2 rounded-full bg-amber-400 relative z-10" />
                  </button>

                  {/* Tooltip Card */}
                  {activeHotspot === h.id && (
                    <div className="absolute left-1/2 bottom-8 -translate-x-1/2 w-56 p-3 rounded-lg bg-neutral-900/95 border border-neutral-700 shadow-2xl text-left z-30 pointer-events-auto backdrop-blur-md">
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-xs font-semibold text-amber-400">{h.title}</p>
                        <button
                          onClick={() => setActiveHotspot(null)}
                          className="text-neutral-500 hover:text-neutral-300 text-xs px-1"
                        >
                          ✕
                        </button>
                      </div>
                      <p className="text-[11px] text-neutral-300 leading-relaxed">{h.description}</p>
                    </div>
                  )}
                </div>
              ))}
          </div>
        )}

        {/* Drag Hint Overlay (fades out on interaction) */}
        {!isDragging && angle === 15 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-neutral-900/80 border border-neutral-700/60 text-[11px] text-neutral-300 backdrop-blur-sm pointer-events-none flex items-center gap-1.5 shadow-lg animate-bounce">
            <RotateCw className="w-3 h-3 text-amber-400" />
            <span>Drag or swipe to rotate 360°</span>
          </div>
        )}
      </div>

      {/* Control Strip */}
      <div className="mt-4 pt-4 border-t border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Quick Angle Presets */}
        <div className="flex items-center gap-1.5 text-xs text-neutral-400">
          <span className="text-[11px] text-neutral-500 uppercase tracking-wider font-semibold mr-1">Angle:</span>
          <button
            onClick={() => setAngle(0)}
            className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors ${
              angle === 0 ? 'bg-amber-500 text-neutral-950 font-semibold' : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
            }`}
          >
            Front
          </button>
          <button
            onClick={() => setAngle(90)}
            className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors ${
              angle === 90 ? 'bg-amber-500 text-neutral-950 font-semibold' : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
            }`}
          >
            Right
          </button>
          <button
            onClick={() => setAngle(180)}
            className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors ${
              angle === 180 ? 'bg-amber-500 text-neutral-950 font-semibold' : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
            }`}
          >
            Back
          </button>
          <button
            onClick={() => setAngle(270)}
            className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors ${
              angle === 270 ? 'bg-amber-500 text-neutral-950 font-semibold' : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
            }`}
          >
            Left
          </button>

          <button
            onClick={() => setIsAutoSpinning(!isAutoSpinning)}
            className={`ml-2 px-2.5 py-1 rounded-md text-xs font-medium flex items-center gap-1 transition-colors ${
              isAutoSpinning ? 'bg-neutral-700 text-amber-400 ring-1 ring-amber-500/50' : 'bg-neutral-800 text-neutral-400 hover:text-neutral-200'
            }`}
            title="Toggle Continuous Rotation"
          >
            <RotateCw className={`w-3 h-3 ${isAutoSpinning ? 'animate-spin' : ''}`} />
            <span>{isAutoSpinning ? 'Pause' : 'Auto-Spin'}</span>
          </button>
        </div>

        {/* Color Switcher */}
        <div className="flex items-center gap-2">
          <span className="text-[11px] text-neutral-500 uppercase tracking-wider font-semibold">Colour:</span>
          <div className="flex items-center gap-1.5">
            {jacket.availableColours.map((c, idx) => (
              <button
                key={c.name}
                onClick={() => setSelectedColorIndex(idx)}
                title={c.name}
                className={`w-6 h-6 rounded-full border transition-all flex items-center justify-center ${
                  selectedColorIndex === idx
                    ? 'border-amber-400 scale-110 shadow-md ring-2 ring-amber-500/30'
                    : 'border-neutral-700 hover:border-neutral-500'
                }`}
                style={{ backgroundColor: c.hex }}
              >
                {selectedColorIndex === idx && (
                  <Check className={`w-3 h-3 ${c.hex === '#F8FAFC' || c.hex === '#FEF3C7' ? 'text-neutral-950' : 'text-white'}`} />
                )}
              </button>
            ))}
          </div>
          <span className="text-xs text-neutral-300 font-medium ml-1 max-w-[120px] truncate">
            {currentColor.name}
          </span>
        </div>

        {/* Action Button */}
        {onConfigureClick && (
          <button
            onClick={onConfigureClick}
            className="w-full sm:w-auto px-4 py-2 text-xs font-semibold text-neutral-950 bg-amber-500 hover:bg-amber-400 rounded-lg transition-colors shadow-md whitespace-nowrap shrink-0"
          >
            Configure This Jacket
          </button>
        )}
      </div>

      {/* Scrub range slider */}
      <div className="mt-3 flex items-center gap-3">
        <span className="text-[10px] text-neutral-500 font-mono">0°</span>
        <input
          type="range"
          min={0}
          max={359}
          value={Math.round(angle)}
          onChange={(e) => {
            setIsAutoSpinning(false);
            setAngle(Number(e.target.value));
          }}
          aria-label="360 Jacket Rotation Angle"
          className="w-full h-1.5 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
        />
        <span className="text-[10px] text-neutral-500 font-mono">360°</span>
      </div>
    </div>
  );
};
