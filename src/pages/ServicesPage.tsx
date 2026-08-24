import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { TreePine, Trash2, Hammer, ClipboardCheck, Home, Key, ChevronDown } from 'lucide-react';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';
import handymanVideo from '../assets/videos/Cinematic_closeup_of_a_modern_organized_cor.gif';
import serviceLock from '../assets/images/service-lock.png';
import serviceLawn from '../assets/images/service-lawn.png';
import serviceDebris from '../assets/images/service-debris.png';
import featureInspection from '../assets/images/feature-inspection.png';
import serviceRepair from '../assets/images/service-repair.png';
import heroServices from '../assets/images/hero-services.png';

const mockOrders = [
  { id: 1, type: 'Initial Inspection', loc: 'Albany, NY', time: '8m ago', status: 'Completed' },
  { id: 2, type: 'Lock Re-Keying', loc: 'Troy, NY', time: 'Just now', status: 'Active' },
  { id: 3, type: 'Roof Tarping', loc: 'Schenectady, NY', time: '30m ago', status: 'Completed' },
  { id: 4, type: 'Debris Trash-out', loc: 'Saratoga Springs, NY', time: '1h ago', status: 'Completed' },
  { id: 5, type: 'Gutter Cleaning', loc: 'Clifton Park, NY', time: '3h ago', status: 'Completed' },
];

export default function ServicesPage() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [currentOrder, setCurrentOrder] = useState(0);
    const heroRef = useRef<HTMLElement>(null);
    const spotlightRef = useRef<HTMLDivElement>(null);

    useRevealOnScroll('.reveal, .reveal-scale');

    useEffect(() => {
      const handleMouseMove = (e: MouseEvent) => {
        setMousePos({
          x: (e.clientX / window.innerWidth - 0.5) * 2,
          y: (e.clientY / window.innerHeight - 0.5) * 2,
        });
      };

      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentOrder((prev) => (prev + 1) % mockOrders.length);
      }, 4500);
      return () => clearInterval(timer);
    }, []);

    // @property Spotlight tracker
    useEffect(() => {
      const hero = heroRef.current;
      const spotlight = spotlightRef.current;
      if (!hero || !spotlight) return;
      const handleSpotlight = (e: MouseEvent) => {
        const rect = hero.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        spotlight.style.setProperty('--spotlight-x-svc', `${x}%`);
        spotlight.style.setProperty('--spotlight-y-svc', `${y}%`);
        spotlight.style.opacity = '1';
      };
      const handleLeave = () => { spotlight.style.opacity = '0'; };
      hero.addEventListener('mousemove', handleSpotlight);
      hero.addEventListener('mouseleave', handleLeave);
      return () => {
        hero.removeEventListener('mousemove', handleSpotlight);
        hero.removeEventListener('mouseleave', handleLeave);
      };
    }, []);

    const allServices = [
        { title: 'Securing & Lock Services', icon: <Key size={24} />, img: serviceLock, desc: 'Complete property securing including re-keying, lock changes, board-ups, and lockbox installation to prevent unauthorized access.' },
        { title: 'Lawn & Landscape Care', icon: <TreePine size={24} />, img: serviceLawn, desc: 'Regular grass cuts, tree trimming, shrub maintenance, and seasonal yard cleanups to maintain curb appeal.' },
        { title: 'Debris Removal', icon: <Trash2 size={24} />, img: serviceDebris, desc: 'Full interior and exterior trash-outs, hazard removal, and dumping services for foreclosed or vacant properties.' },
        { title: 'Initial Inspections & Reports', icon: <ClipboardCheck size={24} />, img: featureInspection, desc: 'Comprehensive property condition reports, occupancy verification, and damage assessment within 24-48 hours.' },
        { title: 'General Repairs', icon: <Hammer size={24} />, img: serviceRepair, desc: 'Handyman services covering drywall, plumbing leaks, electrical safety checks, and structural repairs.' },
        { title: 'Exterior Maintenance', icon: <Home size={24} />, img: heroServices, desc: 'Siding repairs, gutter cleaning, pressure washing, and roof tarping/patching.' },
    ];

    return (
        <div className="services-page">
            {/* ── CINEMATIC VIDEO HERO ── */}
            <section className="svc-hero" ref={heroRef}>

                {/* Video */}
                <img
                    className="svc-hero-video"
                    src={handymanVideo}
                    alt="Habitat Living Solutions LLC Services"
                />

                {/* Letterbox bars */}
                <div className="svc-hero-lb svc-hero-lb--top" />
                <div className="svc-hero-lb svc-hero-lb--bottom" />

                {/* Overlay layers */}
                <div className="svc-hero-overlay svc-hero-overlay--dark" />
                <div className="svc-hero-overlay svc-hero-overlay--brand" />
                <div className="svc-hero-overlay svc-hero-overlay--vignette" />

                {/* Film grain */}
                <div className="svc-hero-grain" aria-hidden="true" />

                {/* Glowing accent line */}
                <div className="svc-hero-accent-line" aria-hidden="true" />

                {/* @property Mouse Spotlight */}
                <div ref={spotlightRef} className="svc-hero-spotlight" aria-hidden="true" />

                {/* Live Dispatch Ticker Widget (Covers corner watermark/sparkle) */}
                <div className="svc-dispatch-widget">
                  <div className="svc-dispatch-header">
                    <span className="svc-dispatch-pulse-dot" />
                    <span className="svc-dispatch-title">LIVE DISPATCH FEED</span>
                  </div>
                  <div className="svc-dispatch-body">
                    <div className="svc-dispatch-meta">
                      <span className="svc-dispatch-type">{mockOrders[currentOrder].type}</span>
                      <span className="svc-dispatch-time">{mockOrders[currentOrder].time}</span>
                    </div>
                    <div className="svc-dispatch-location">
                      {mockOrders[currentOrder].loc}
                    </div>
                    <div className={`svc-dispatch-status-badge status-${mockOrders[currentOrder].status.toLowerCase()}`}>
                      {mockOrders[currentOrder].status}
                    </div>
                  </div>
                </div>

                {/* Frosted glass exit strip */}
                <div className="svc-hero-frost-exit" aria-hidden="true" />

                {/* Content */}
                <div 
                    className="container svc-hero-content"
                    style={{
                        transform: `translate3d(${mousePos.x * -14}px, ${mousePos.y * -7}px, 0)`,
                        transition: 'transform 0.15s ease-out'
                    }}
                >
                    <div className="svc-hero-badge">
                        <span className="svc-hero-badge-dot" />
                        6 Expert Services · Albany, NY
                    </div>

                    <h1 className="svc-hero-title">
                        Our Expert <span className="svc-highlight">Services</span>
                    </h1>

                    <p className="svc-hero-subtitle">
                        Comprehensive preservation, maintenance, and renovation solutions
                        for every stage of property management.
                    </p>

                    <Link to="/contact" className="btn svc-hero-cta">
                        Get A Free Quote <ChevronDown size={18} style={{ transform: 'rotate(-90deg)' }} />
                    </Link>
                </div>

                {/* Scroll indicator */}
                <a href="#services-grid" className="svc-scroll-indicator" aria-label="Scroll to services">
                    <ChevronDown size={22} />
                </a>
            </section>

            <section className="section" id="services-grid">
                <div className="container">
                    <div className="services-grid-large">
                        {allServices.map((service, index) => (
                            <div key={index} className="service-card-large reveal-scale" data-delay={`${index * 80}`}>
                                <div className="service-img-container">
                                    <img src={service.img} alt={service.title} />
                                    <div className="service-icon-overlay">{service.icon}</div>
                                </div>
                                <div className="service-content">
                                    <h3>{service.title}</h3>
                                    <p>{service.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="additional-info reveal" data-delay="100">
                        <h3>Need a custom solution?</h3>
                        <p>We also offer additional property solutions tailored to your specific asset needs.</p>
                        <Link to="/contact" className="btn btn-primary">Contact Our Team</Link>
                    </div>
                </div>
            </section>

            <style>{`
        /* ─── SERVICES VIDEO HERO ─────────────────── */
        .svc-hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          color: white;
        }

        .svc-hero-video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 0;
          /* Technique 1: iris clip-path reveal */
          animation: iris-open-svc 1.4s cubic-bezier(0.22, 1, 0.36, 1) both,
                     hero-zoom-scroll-svc linear both;
        }

        @keyframes iris-open-svc {
          0%   { clip-path: inset(48% 48% round 50%); opacity: 0.4; }
          60%  { clip-path: inset(2% 2% round 4px); opacity: 1; }
          100% { clip-path: inset(0% 0% round 0px); opacity: 1; }
        }

        /* Technique 3: scroll-driven zoom-out */
        @supports (animation-timeline: scroll()) {
          .svc-hero-video {
            animation-name: iris-open-svc, hero-zoom-scroll-svc;
            animation-duration: 1.4s, auto;
            animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1), linear;
            animation-fill-mode: both, both;
            animation-timeline: auto, scroll(root block);
            animation-range: auto, 0% 55%;
          }
          @keyframes hero-zoom-scroll-svc {
            from { transform: scale(1.06); filter: brightness(1); }
            to   { transform: scale(1.22); filter: brightness(0.45); }
          }
        }

        /* Letterbox bars */
        .svc-hero-lb {
          position: absolute; left: 0; right: 0;
          height: clamp(20px, 3.5vw, 48px);
          background: #000;
          z-index: 3;
          animation: svc-lb-in 1.2s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        .svc-hero-lb--top    { top: 0;    transform-origin: top; }
        .svc-hero-lb--bottom { bottom: 0; transform-origin: bottom; }
        @keyframes svc-lb-in {
          from { transform: scaleY(3); }
          to   { transform: scaleY(1); }
        }

        /* Overlay layers */
        .svc-hero-overlay { position: absolute; inset: 0; }
        .svc-hero-overlay--dark    { background: linear-gradient(180deg, rgba(5,10,24,0.5) 0%, rgba(5,10,24,0.75) 100%); z-index: 1; }
        .svc-hero-overlay--brand   { background: linear-gradient(135deg, rgba(10,28,58,0.6) 0%, transparent 55%); z-index: 1; }
        .svc-hero-overlay--vignette{ background: radial-gradient(ellipse at center, transparent 25%, rgba(0,0,0,0.65) 100%); z-index: 1; }

        /* Film grain */
        .svc-hero-grain {
          position: absolute; inset: 0; z-index: 2;
          opacity: 0.04;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-size: 180px;
          animation: grain-shift 0.4s steps(1) infinite;
          pointer-events: none;
        }

        /* Glowing accent line */
        .svc-hero-accent-line {
          position: absolute; bottom: 38%; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent 0%, var(--accent) 30%, #00aaff 50%, var(--accent) 70%, transparent 100%);
          opacity: 0.22; z-index: 3;
          animation: accent-line-in 2s ease-out 0.5s both;
        }

        /* Content */
        .svc-hero-content {
          position: relative; z-index: 4;
          max-width: 800px; margin: 0 auto;
          text-align: center; padding: 100px 24px 80px;
        }

        /* Badge */
        .svc-hero-badge {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.18);
          backdrop-filter: blur(8px);
          border-radius: 100px; padding: 7px 18px;
          font-size: 0.82rem; font-weight: 600;
          letter-spacing: 0.05em; text-transform: uppercase;
          color: rgba(255,255,255,0.9); margin-bottom: 24px;
          animation: fadeInUp 0.7s ease-out 0.3s both;
        }
        .svc-hero-badge-dot {
          width: 8px; height: 8px; border-radius: 50%;
          background: #f59e0b;
          box-shadow: 0 0 0 0 rgba(245,158,11,0.5);
          animation: pulse-amber 2s ease-in-out infinite;
        }
        @keyframes pulse-amber {
          0%,100% { box-shadow: 0 0 0 0 rgba(245,158,11,0.5); }
          50%      { box-shadow: 0 0 0 6px rgba(245,158,11,0); }
        }

        /* Title */
        .svc-hero-title {
          font-size: clamp(2.4rem, 5.5vw, 4.5rem);
          font-weight: 900; line-height: 1.05;
          letter-spacing: -0.03em; margin-bottom: 20px;
          animation: fadeInUp 0.7s ease-out 0.5s both,
                     text-shimmer-svc 5s linear 1.5s infinite;
          /* Technique 4: shimmer sweep */
          background: linear-gradient(
            90deg,
            rgba(255,255,255,0.95) 20%,
            rgba(254,243,199,1)    40%,
            rgba(255,255,255,1)    50%,
            rgba(254,243,199,1)    60%,
            rgba(255,255,255,0.95) 80%
          );
          background-size: 250% auto;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          text-shadow: none;
        }

        @keyframes text-shimmer-svc {
          from { background-position: 200% center; }
          to   { background-position: -200% center; }
        }

        .svc-highlight {
          color: transparent;
          background: linear-gradient(90deg, #f59e0b, #fbbf24);
          -webkit-background-clip: text;
          background-clip: text;
          display: inline-block;
          position: relative;
        }

        /* Technique 2: @property Spotlight */
        @property --spotlight-x-svc { syntax: '<percentage>'; inherits: false; initial-value: 50%; }
        @property --spotlight-y-svc { syntax: '<percentage>'; inherits: false; initial-value: 50%; }

        .svc-hero-spotlight {
          position: absolute;
          inset: 0;
          z-index: 2;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.6s ease, --spotlight-x-svc 0.08s ease-out, --spotlight-y-svc 0.08s ease-out;
          background: radial-gradient(
            circle 380px at var(--spotlight-x-svc) var(--spotlight-y-svc),
            rgba(245, 158, 11, 0.1) 0%,
            rgba(245, 158, 11, 0.03) 50%,
            transparent 100%
          );
        }

        /* Technique 5: frosted glass exit strip */
        .svc-hero-frost-exit {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 180px;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          mask-image: linear-gradient(to bottom, transparent 0%, black 100%);
          -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 100%);
          z-index: 5;
          pointer-events: none;
        }

        /* ─── LIVE DISPATCH WIDGET ────────────────── */
        .svc-dispatch-widget {
          position: absolute;
          bottom: clamp(64px, 6vw, 85px);
          right: clamp(20px, 4vw, 48px);
          z-index: 10;
          width: 250px;
          background: rgba(10, 25, 50, 0.55);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border: 1px solid rgba(245, 158, 11, 0.25);
          border-radius: 12px;
          padding: 14px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5), 0 0 15px rgba(245, 158, 11, 0.15);
          animation: fadeInUp 0.3s ease-out both;
          text-align: left;
        }

        .svc-dispatch-header {
          display: flex;
          align-items: center;
          gap: 8px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          padding-bottom: 8px;
          margin-bottom: 10px;
        }

        .svc-dispatch-pulse-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #f59e0b;
          box-shadow: 0 0 8px #f59e0b;
          animation: dispatch-pulse-svc 1.8s ease-in-out infinite;
        }

        @keyframes dispatch-pulse-svc {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.35); opacity: 0.45; }
        }

        .svc-dispatch-title {
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: rgba(255, 255, 255, 0.7);
        }

        .svc-dispatch-body {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .svc-dispatch-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .svc-dispatch-type {
          font-size: 0.9rem;
          font-weight: 700;
          color: #fff;
        }

        .svc-dispatch-time {
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.55);
        }

        .svc-dispatch-location {
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.8);
        }

        .svc-dispatch-status-badge {
          align-self: flex-start;
          font-size: 0.68rem;
          font-weight: 800;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          padding: 3px 8px;
          border-radius: 4px;
          margin-top: 4px;
        }

        .svc-dispatch-status-badge.status-completed {
          background: rgba(34, 197, 94, 0.15);
          color: #4ade80;
          border: 1px solid rgba(34, 197, 94, 0.3);
        }

        .svc-dispatch-status-badge.status-active {
          background: rgba(245, 158, 11, 0.15);
          color: #f59e0b;
          border: 1px solid rgba(245, 158, 11, 0.3);
        }

        /* Subtitle */
        .svc-hero-subtitle {
          font-size: clamp(0.95rem, 1.8vw, 1.15rem);
          color: rgba(255,255,255,0.78);
          max-width: 580px; margin: 0 auto 36px;
          line-height: 1.7;
          animation: fadeInUp 0.7s ease-out 0.7s both;
        }

        /* CTA */
        .svc-hero-cta {
          background: #f59e0b; color: #0a1c3a;
          padding: 14px 32px; border-radius: 8px;
          font-size: 1rem; font-weight: 700;
          box-shadow: 0 0 28px rgba(245,158,11,0.45);
          display: inline-flex; align-items: center; gap: 8px;
          transition: all 0.3s cubic-bezier(0.23,1,0.32,1);
          animation: fadeInUp 0.7s ease-out 0.9s both;
        }
        .svc-hero-cta:hover {
          background: #fbbf24;
          box-shadow: 0 0 44px rgba(245,158,11,0.7);
          transform: translateY(-2px);
        }

        /* Scroll indicator */
        .svc-scroll-indicator {
          position: absolute; bottom: 28px; left: 50%;
          transform: translateX(-50%); z-index: 4;
          color: rgba(255,255,255,0.45);
          animation: scroll-bounce 2s ease-in-out infinite, fadeIn 1s ease-out 1.2s both;
          transition: color 0.2s;
        }
        .svc-scroll-indicator:hover { color: white; }

        .section {
            padding: 140px 0;
        }

        .services-grid-large {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 40px;
          animation: fadeInUp 0.8s ease-out 0.4s backwards;
        }

        .service-card-large {
          background: white;
          border: 1px solid var(--surface-2);
          border-radius: 12px;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          flex-direction: column;
          height: 100%;
          box-shadow: var(--shadow-sm);
        }
        
        body.dark .service-card-large {
            background: var(--surface-dark-2);
            border-color: var(--glass-border-dark);
        }

        .service-card-large:hover {
          box-shadow: var(--shadow-xl);
          border-color: var(--accent);
          transform: translateY(-8px);
        }

        .service-img-container {
            position: relative;
            height: 200px;
            overflow: hidden;
        }
        
        .service-img-container img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.6s ease;
        }
        
        .service-card-large:hover .service-img-container img {
            transform: scale(1.05);
        }
        
        .service-icon-overlay {
            position: absolute;
            bottom: -20px;
            right: 20px;
            background: var(--accent);
            color: white;
            width: 48px;
            height: 48px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: var(--shadow-md);
            z-index: 2;
        }

        .service-content {
          padding: 40px 32px 32px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .service-card-large h3 {
          font-size: 1.5rem;
          margin-bottom: 16px;
          font-weight: 700;
        }

        .service-card-large p {
          color: var(--text-secondary);
          line-height: 1.7;
          font-size: 1.05rem;
        }
        
        body.dark .service-card-large p {
            color: var(--text-dark-secondary);
        }
        
        .additional-info {
            text-align: center;
            margin-top: 100px;
            margin-bottom: 40px;
            padding: 60px;
            background-color: var(--bg-light);
            border-radius: 16px;
            border: 1px solid var(--surface-2);
            box-shadow: var(--shadow-lg);
        }
        
        body.dark .additional-info {
            background-color: var(--surface-dark-2);
            border-color: var(--glass-border-dark);
        }
        
        .additional-info h3 {
            margin-bottom: 24px;
            font-size: 2rem;
        }
        
        .additional-info p {
            margin-bottom: 40px;
            color: var(--text-secondary);
            font-size: 1.25rem;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
        }
        
        body.dark .additional-info p {
            color: var(--text-dark-secondary);
        }
      `}</style>
        </div>
    );
}
