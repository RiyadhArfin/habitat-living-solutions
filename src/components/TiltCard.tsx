import React, { useRef, useState, type MouseEvent } from 'react';

interface TiltCardProps {
    children: React.ReactNode;
    className?: string;
    perspective?: number;
    scale?: number;
    maxRotation?: number;
}

export default function TiltCard({
    children,
    className = '',
    perspective = 1000,
    scale = 1.05,
    maxRotation = 15,
}: TiltCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [style, setStyle] = useState<React.CSSProperties>({});

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;

        const card = cardRef.current;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -maxRotation;
        const rotateY = ((x - centerX) / centerX) * maxRotation;

        setStyle({
            transform: `perspective(${perspective}px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(${scale}, ${scale}, ${scale})`,
            transition: 'none',
        });
    };

    const handleMouseLeave = () => {
        setStyle({
            transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
            transition: 'transform 0.5s ease-out',
        });
    };

    return (
        <div
            ref={cardRef}
            className={className}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                ...style,
                transformStyle: 'preserve-3d',
                willChange: 'transform',
            }}
        >
            {children}
        </div>
    );
}
