import React from 'react';

interface JacketPhotoProps {
  image: string;
  name: string;
  aspect?: number;
  back?: boolean;
  className?: string;
  eager?: boolean;
}

/**
 * Renders the front or back view of a jacket using dual-panel sprite photo assets.
 * The left half of the image is the Front view (0%), and the right half is the Back view (-100%).
 */
export const JacketPhoto: React.FC<JacketPhotoProps> = ({
  image,
  name,
  aspect = 0.75,
  back = false,
  className = '',
  eager = false,
}) => {
  return (
    <div
      className={`relative overflow-hidden select-none shrink-0 ${className}`}
      style={{
        aspectRatio: `${aspect}`,
      }}
    >
      <img
        src={image}
        alt={`${name}, ${back ? 'back' : 'front'} view`}
        width={Math.round(aspect * 2048)}
        height={1024}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        draggable={false}
        className="h-full max-w-none absolute top-0 pointer-events-none transition-none"
        style={{
          left: back ? '-100%' : '0%',
        }}
      />
    </div>
  );
};
