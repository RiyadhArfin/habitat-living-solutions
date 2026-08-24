import { useState, useRef } from 'react';
import type { MouseEvent, TouchEvent } from 'react';
import beforeImg from '../assets/images/before-exterior.png';
import afterImg from '../assets/images/after-exterior.png';
import { ArrowLeftRight } from 'lucide-react';

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!isDragging || !containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: MouseEvent) => handleMove(e.clientX);
  const handleTouchMove = (e: TouchEvent) => handleMove(e.touches[0].clientX);

  const handleDragEnd = () => setIsDragging(false);

  return (
    <div className="before-after-wrapper">
      <div className="text-center mb-8">
        <h2 style={{ fontSize: '2.5rem', marginBottom: '16px', color: 'var(--primary)' }}>Transform Your Property</h2>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>Drag the slider to see our real results.</p>
      </div>

      <div 
        className="before-after-container"
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onMouseUp={handleDragEnd}
        onTouchEnd={handleDragEnd}
        onMouseLeave={handleDragEnd}
      >
        <div className="image-container after-image">
          <img src={afterImg} alt="After Renovation" />
          <div className="label label-after">After</div>
        </div>

        <div 
          className="image-container before-image"
          style={{ width: `${sliderPosition}%` }}
        >
          <img src={beforeImg} alt="Before Renovation" />
          <div className="label label-before">Before</div>
        </div>

        <div 
          className="slider-handle"
          style={{ left: `${sliderPosition}%` }}
          onMouseDown={() => setIsDragging(true)}
          onTouchStart={() => setIsDragging(true)}
        >
          <div className="slider-button">
            <ArrowLeftRight size={20} color="var(--primary)" />
          </div>
        </div>
      </div>

      <style>{`
        .before-after-wrapper {
          width: 100%;
          max-width: 1000px;
          margin: 0 auto;
        }

        body.dark .before-after-wrapper h2 {
          color: var(--text-light) !important;
        }

        body.dark .before-after-wrapper p {
          color: var(--text-dark-secondary) !important;
        }

        .before-after-container {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          overflow: hidden;
          border-radius: 16px;
          box-shadow: var(--shadow-2xl, 0 25px 50px -12px rgba(0, 0, 0, 0.25));
          cursor: col-resize;
          background: #000;
        }

        .image-container {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          overflow: hidden;
        }

        .image-container img {
          width: 1000px; /* Force same width based on container max-width */
          height: 100%;
          object-fit: cover;
          display: block;
          max-width: none; /* Override global max-width 100% */
        }
        
        @media (max-width: 1000px) {
            .image-container img {
                width: 100vw;
            }
        }

        .after-image {
          width: 100%;
          z-index: 1;
        }

        .before-image {
          z-index: 2;
        }

        .label {
          position: absolute;
          top: 24px;
          padding: 8px 16px;
          background: rgba(0, 0, 0, 0.6);
          color: white;
          border-radius: 30px;
          font-weight: 600;
          font-size: 0.9rem;
          backdrop-filter: blur(4px);
          z-index: 3;
        }

        .label-before {
          left: 24px;
        }

        .label-after {
          right: 24px;
        }

        .slider-handle {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 4px;
          background-color: white;
          z-index: 10;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 10px rgba(0,0,0,0.5);
        }

        .slider-button {
          width: 48px;
          height: 48px;
          background: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
          transition: transform 0.1s;
        }

        .slider-handle:active .slider-button {
          transform: scale(0.9);
        }
      `}</style>
    </div>
  );
}
