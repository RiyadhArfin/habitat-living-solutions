import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Target, Shield, Users, ChevronDown } from 'lucide-react';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';
import aboutVideo from '../assets/videos/about-us.webm';
import aboutTeam from '../assets/images/about-team.png';
import officeInterior from '../assets/images/office-interior.png';

const mockOrders = [
  { id: 1, type: 'Field Inspection', loc: 'Troy, NY', time: '14m ago', status: 'Completed' },
  { id: 2, type: 'Hazard Assessment', loc: 'Albany, NY', time: 'Just now', status: 'Active' },
  { id: 3, type: 'Compliance Review', loc: 'Schenectady, NY', time: '40m ago', status: 'Completed' },
  { id: 4, type: 'Occupancy Check', loc: 'Saratoga Springs, NY', time: '2h ago', status: 'Completed' },
];

export default function AboutPage() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [currentOrder, setCurrentOrder] = useState(0);
  const heroRef = useRef<HTMLElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);

  useRevealOnScroll('.reveal, .reveal-left, .reveal-right, .reveal-scale');

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
      spotlight.style.setProperty('--spotlight-x-abt', `${x}%`);
      spotlight.style.setProperty('--spotlight-y-abt', `${y}%`);
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

  return (
    <div className="about-page">
      {/* ── CINEMATIC VIDEO HERO ── */}
      <section className="abt-hero" ref={heroRef}>

        {/* Video */}
        <video
          className="abt-hero-video"
          src={aboutVideo}
          autoPlay muted loop playsInline
          poster={officeInterior}
        />

        {/* Letterbox bars */}
        <div className="abt-hero-lb abt-hero-lb--top" />
        <div className="abt-hero-lb abt-hero-lb--bottom" />

        {/* Overlay layers */}
        <div className="abt-hero-overlay abt-hero-overlay--dark" />
        <div className="abt-hero-overlay abt-hero-overlay--brand" />
        <div className="abt-hero-overlay abt-hero-overlay--vignette" />

        {/* Film grain */}
        <div className="abt-hero-grain" aria-hidden="true" />

        {/* Glowing accent line */}
        <div className="abt-hero-accent-line" aria-hidden="true" />

        {/* @property Mouse Spotlight */}
        <div ref={spotlightRef} className="abt-hero-spotlight" aria-hidden="true" />

        {/* Live Dispatch Ticker Widget (Covers corner watermark/sparkle) */}
        <div className="abt-dispatch-widget">
          <div className="abt-dispatch-header">
            <span className="abt-dispatch-pulse-dot" />
            <span className="abt-dispatch-title">LIVE OPERATIONS FEED</span>
          </div>
          <div className="abt-dispatch-body">
            <div className="abt-dispatch-meta">
              <span className="abt-dispatch-type">{mockOrders[currentOrder].type}</span>
              <span className="abt-dispatch-time">{mockOrders[currentOrder].time}</span>
            </div>
            <div className="abt-location">
              {mockOrders[currentOrder].loc}
            </div>
            <div className={`abt-dispatch-status-badge status-${mockOrders[currentOrder].status.toLowerCase()}`}>
              {mockOrders[currentOrder].status}
            </div>
          </div>
        </div>

        {/* Frosted glass exit strip */}
        <div className="abt-hero-frost-exit" aria-hidden="true" />

        {/* Content */}
        <div 
          className="container abt-hero-content"
          style={{
            transform: `translate3d(${mousePos.x * -14}px, ${mousePos.y * -7}px, 0)`,
            transition: 'transform 0.15s ease-out'
          }}
        >
          <div className="abt-hero-badge">
            <span className="abt-hero-badge-dot" />
            Operational Excellence · Albany, NY
          </div>

          <h1 className="abt-hero-title">
            About <span className="abt-highlight">Habitat Living Solutions</span>
          </h1>

          <p className="abt-hero-subtitle">
            Setting the industry standard for property preservation, compliance, and asset protection.
          </p>
        </div>

        {/* Scroll indicator */}
        <a href="#about-info" className="abt-scroll-indicator" aria-label="Scroll to details">
          <ChevronDown size={22} />
        </a>
      </section>

      <section className="section" id="about-info">
        <div className="container">
          <div className="section-header reveal">
            <h2>Who We Are</h2>
          </div>
          <div className="about-content">
            <div className="about-visual reveal-left">
              <img src={aboutTeam} alt="Our Team" className="about-img" />
            </div>
            <div className="about-text text-content reveal-right">
              <p>
                Habitat Living Solutions LLC is a premier property preservation and maintenance company based in Albany, NY.
                We specialize in protecting and maintaining assets for banks, asset management companies, and individual investors.
              </p>
              <p>
                Our mission is to provide "LLC-grade" professional services that go beyond the typical handyman approach.
                We understand the strict compliance requirements, timelines, and quality standards demanded by the industry.
                Whether it's a simple lock change or a full renovation for a rental turnover, we treat every property as if it were our own.
              </p>
            </div>
          </div>

          <div className="highlight-section">
            <div className="highlight-box">
              <div className="highlight-content">
                <h2>Operational Excellence</h2>
                <p>
                  We leverage advanced tracking and reporting to ensure every work order is documented, verified, and completed on time.
                </p>
              </div>
              <div className="highlight-visual">
                <img src={officeInterior} alt="Office" className="highlight-img" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-off-white">
        <div className="container">
          <div className="section-header reveal">
            <h2>Our Core Values</h2>
          </div>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <Shield size={32} />
              </div>
              <h3>Integrity & Compliance</h3>
              <p>We strictly adhere to all local codes and client-specific guidelines to ensure your asset is protected and compliant.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <Target size={32} />
              </div>
              <h3>Speed & Efficiency</h3>
              <p>Time is money in property management. We pride ourselves on rapid response times and meeting every deadline.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <Users size={32} />
              </div>
              <h3>Partnership Focus</h3>
              <p>We view ourselves as partners in your success, providing transparent reporting and communication at every step.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-strip">
        <div className="container cta-content">
          <h2>Looking for a reliable partner?</h2>
          <p>Let's discuss how we can help manage your portfolio.</p>
          <Link to="/contact" className="btn btn-primary-inverse">Contact Us</Link>
        </div>
      </section>

      <style>{`
        .about-page {
            overflow-x: hidden;
        }
        
        /* ─── ABOUT VIDEO HERO ────────────────────── */
        .abt-hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          color: white;
        }

        .abt-hero-video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 0;
          /* Technique 1: iris clip-path reveal */
          animation: iris-open-abt 1.4s cubic-bezier(0.22, 1, 0.36, 1) both,
                     hero-zoom-scroll-abt linear both;
        }

        @keyframes iris-open-abt {
          0%   { clip-path: inset(48% 48% round 50%); opacity: 0.4; }
          60%  { clip-path: inset(2% 2% round 4px); opacity: 1; }
          100% { clip-path: inset(0% 0% round 0px); opacity: 1; }
        }

        /* Technique 3: scroll-driven zoom-out */
        @supports (animation-timeline: scroll()) {
          .abt-hero-video {
            animation-name: iris-open-abt, hero-zoom-scroll-abt;
            animation-duration: 1.4s, auto;
            animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1), linear;
            animation-fill-mode: both, both;
            animation-timeline: auto, scroll(root block);
            animation-range: auto, 0% 55%;
          }
          @keyframes hero-zoom-scroll-abt {
            from { transform: scale(1.06); filter: brightness(1); }
            to   { transform: scale(1.22); filter: brightness(0.45); }
          }
        }

        /* Letterbox bars */
        .abt-hero-lb {
          position: absolute; left: 0; right: 0;
          height: clamp(20px, 3.5vw, 48px);
          background: #000;
          z-index: 3;
          animation: abt-lb-in 1.2s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        .abt-hero-lb--top    { top: 0;    transform-origin: top; }
        .abt-hero-lb--bottom { bottom: 0; transform-origin: bottom; }
        @keyframes abt-lb-in {
          from { transform: scaleY(3); }
          to   { transform: scaleY(1); }
        }

        /* Overlay layers */
        .abt-hero-overlay { position: absolute; inset: 0; }
        .abt-hero-overlay--dark    { background: linear-gradient(180deg, rgba(5,10,24,0.5) 0%, rgba(5,10,24,0.75) 100%); z-index: 1; }
        .abt-hero-overlay--brand   { background: linear-gradient(135deg, rgba(10,28,58,0.6) 0%, transparent 55%); z-index: 1; }
        .abt-hero-overlay--vignette{ background: radial-gradient(ellipse at center, transparent 25%, rgba(0,0,0,0.65) 100%); z-index: 1; }

        /* Film grain */
        .abt-hero-grain {
          position: absolute; inset: 0; z-index: 2;
          opacity: 0.04;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-size: 180px;
          animation: grain-shift 0.4s steps(1) infinite;
          pointer-events: none;
        }

        /* Glowing accent line */
        .abt-hero-accent-line {
          position: absolute; bottom: 38%; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent 0%, #10b981 30%, #34d399 50%, #10b981 70%, transparent 100%);
          opacity: 0.22; z-index: 3;
          animation: accent-line-in-abt 2s ease-out 0.5s both;
        }
        @keyframes accent-line-in-abt {
          from { opacity: 0; transform: scaleX(0); }
          to   { opacity: 0.22; transform: scaleX(1); }
        }

        /* Content */
        .abt-hero-content {
          position: relative; z-index: 4;
          max-width: 800px; margin: 0 auto;
          text-align: center; padding: 100px 24px 80px;
        }

        /* Badge */
        .abt-hero-badge {
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
        .abt-hero-badge-dot {
          width: 8px; height: 8px; border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 0 0 rgba(16,185,129,0.5);
          animation: pulse-green-abt 2s ease-in-out infinite;
        }
        @keyframes pulse-green-abt {
          0%,100% { box-shadow: 0 0 0 0 rgba(16,185,129,0.5); }
          50%      { box-shadow: 0 0 0 6px rgba(16,185,129,0); }
        }

        /* Title */
        .abt-hero-title {
          font-size: clamp(2.4rem, 5.5vw, 4.5rem);
          font-weight: 900; line-height: 1.05;
          letter-spacing: -0.03em; margin-bottom: 20px;
          animation: fadeInUp 0.7s ease-out 0.5s both,
                     text-shimmer-abt 5s linear 1.5s infinite;
          /* Technique 4: shimmer sweep */
          background: linear-gradient(
            90deg,
            rgba(255,255,255,0.95) 20%,
            rgba(209,250,229,1)    40%,
            rgba(255,255,255,1)    50%,
            rgba(209,250,229,1)    60%,
            rgba(255,255,255,0.95) 80%
          );
          background-size: 250% auto;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          text-shadow: none;
        }

        @keyframes text-shimmer-abt {
          from { background-position: 200% center; }
          to   { background-position: -200% center; }
        }

        .abt-highlight {
          color: transparent;
          background: linear-gradient(90deg, #10b981, #34d399);
          -webkit-background-clip: text;
          background-clip: text;
          display: inline-block;
          position: relative;
        }

        /* Technique 2: @property Spotlight */
        @property --spotlight-x-abt { syntax: '<percentage>'; inherits: false; initial-value: 50%; }
        @property --spotlight-y-abt { syntax: '<percentage>'; inherits: false; initial-value: 50%; }

        .abt-hero-spotlight {
          position: absolute;
          inset: 0;
          z-index: 2;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.6s ease, --spotlight-x-abt 0.08s ease-out, --spotlight-y-abt 0.08s ease-out;
          background: radial-gradient(
            circle 380px at var(--spotlight-x-abt) var(--spotlight-y-abt),
            rgba(16, 185, 129, 0.08) 0%,
            rgba(16, 185, 129, 0.03) 50%,
            transparent 100%
          );
        }

        /* Technique 5: frosted glass exit strip */
        .abt-hero-frost-exit {
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

        /* Subtitle */
        .abt-hero-subtitle {
          font-size: clamp(0.95rem, 1.8vw, 1.15rem);
          color: rgba(255,255,255,0.78);
          max-width: 580px; margin: 0 auto 36px;
          line-height: 1.7;
          animation: fadeInUp 0.7s ease-out 0.7s both;
        }

        /* Scroll indicator */
        .abt-scroll-indicator {
          position: absolute; bottom: 28px; left: 50%;
          transform: translateX(-50%); z-index: 4;
          color: rgba(255,255,255,0.45);
          animation: scroll-bounce 2s ease-in-out infinite, fadeIn 1s ease-out 1.2s both;
          transition: color 0.2s;
        }
        .abt-scroll-indicator:hover { color: white; }

        /* ─── LIVE DISPATCH WIDGET ────────────────── */
        .abt-dispatch-widget {
          position: absolute;
          bottom: clamp(64px, 6vw, 85px);
          right: clamp(20px, 4vw, 48px);
          z-index: 10;
          width: 250px;
          background: rgba(10, 25, 50, 0.55);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border: 1px solid rgba(16, 185, 129, 0.25);
          border-radius: 12px;
          padding: 14px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5), 0 0 15px rgba(16, 185, 129, 0.15);
          animation: fadeInUp 0.3s ease-out both;
          text-align: left;
        }

        .abt-dispatch-header {
          display: flex;
          align-items: center;
          gap: 8px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          padding-bottom: 8px;
          margin-bottom: 10px;
        }

        .abt-dispatch-pulse-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 8px #10b981;
          animation: dispatch-pulse-abt 1.8s ease-in-out infinite;
        }

        @keyframes dispatch-pulse-abt {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.35); opacity: 0.45; }
        }

        .abt-dispatch-title {
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: rgba(255, 255, 255, 0.7);
        }

        .abt-dispatch-body {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .abt-dispatch-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .abt-dispatch-type {
          font-size: 0.9rem;
          font-weight: 700;
          color: #fff;
        }

        .abt-dispatch-time {
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.55);
        }

        .abt-location {
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.8);
        }

        .abt-dispatch-status-badge {
          align-self: flex-start;
          font-size: 0.68rem;
          font-weight: 800;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          padding: 3px 8px;
          border-radius: 4px;
          margin-top: 4px;
        }

        .abt-dispatch-status-badge.status-completed {
          background: rgba(34, 197, 94, 0.15);
          color: #4ade80;
          border: 1px solid rgba(34, 197, 94, 0.3);
        }

        .abt-dispatch-status-badge.status-active {
          background: rgba(16, 185, 129, 0.15);
          color: #34d399;
          border: 1px solid rgba(16, 185, 129, 0.3);
        }

        .section {
          padding: 100px 0;
        }
        
        .section-header {
            text-align: center;
            margin-bottom: 60px;
        }
        
        .section-header h2 {
            font-size: 2.5rem;
            color: var(--primary);
            margin-bottom: 16px;
        }
        
        body.dark .section-header h2 {
            color: var(--text-light);
        }

        .about-content {
          display: grid;
          grid-template-columns: 1fr;
          gap: 60px;
          align-items: center;
          margin-bottom: 80px;
        }

        @media (min-width: 992px) {
          .about-content {
            grid-template-columns: 1fr 1fr;
          }
        }
        
        .about-img {
            width: 100%;
            border-radius: 16px;
            box-shadow: var(--shadow-xl);
            border: 1px solid var(--surface-2);
        }

        .highlight-section {
            margin-top: 80px;
        }

        .highlight-box {
          background: white;
          border: 1px solid var(--surface-2);
          border-radius: 16px;
          box-shadow: var(--shadow-lg);
          overflow: hidden;
          display: grid;
          grid-template-columns: 1fr;
        }
        
        @media (min-width: 768px) {
            .highlight-box {
                grid-template-columns: 1fr 1fr;
            }
        }
        
        body.dark .highlight-box {
          background: var(--surface-dark-2);
          border-color: var(--glass-border-dark);
        }
        
        .highlight-content {
            padding: 48px;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        .highlight-box h2 {
          font-size: 2rem;
          margin-bottom: 24px;
          color: var(--accent);
        }

        .highlight-visual {
            height: 100%;
            min-height: 300px;
        }
        
        .highlight-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .text-content h2 {
          font-size: 2.5rem;
          margin-bottom: 24px;
          color: var(--primary);
        }
        
        body.dark .text-content h2 {
            color: var(--text-light);
        }

        .text-content p {
          font-size: 1.125rem;
          line-height: 1.8;
          color: var(--text-secondary);
          margin-bottom: 24px;
        }
        
        body.dark .text-content p {
            color: var(--text-dark-secondary);
        }
        
        .bg-off-white {
            background-color: var(--bg-light);
            border-top: 1px solid var(--surface-2);
            border-bottom: 1px solid var(--surface-2);
        }
        
        body.dark .bg-off-white {
            background-color: var(--bg-dark);
            border-color: var(--glass-border-dark);
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 40px;
          margin-top: 60px;
        }

        .value-card {
          text-align: center;
          padding: 40px;
          background: white;
          border-radius: 12px;
          transition: transform 0.3s ease;
          border: 1px solid var(--surface-2);
          box-shadow: var(--shadow-sm);
        }
        
        body.dark .value-card {
            background: var(--surface-dark-2);
            border-color: var(--glass-border-dark);
        }

        .value-card:hover {
          transform: translateY(-5px);
          border-color: var(--accent);
          box-shadow: var(--shadow-md);
        }

        .value-icon {
          color: var(--accent);
          margin-bottom: 24px;
          background: var(--accent-light);
          width: 80px;
          height: 80px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        
        body.dark .value-icon {
            background: rgba(245, 158, 11, 0.1);
        }

        .value-card h3 {
          font-size: 1.5rem;
          margin-bottom: 16px;
        }

        .value-card p {
          color: var(--text-secondary);
          line-height: 1.6;
        }
        
        body.dark .value-card p {
            color: var(--text-dark-secondary);
        }
        
        .cta-strip {
          padding: 100px 0;
          background: linear-gradient(135deg, var(--primary), var(--primary-light));
          color: white;
          text-align: center;
          position: relative;
        }

        .cta-content h2 {
          font-size: 3rem;
          margin-bottom: 24px;
        }

        .cta-content p {
          margin-bottom: 40px;
          font-size: 1.5rem;
          color: var(--text-dark-secondary);
        }
        
        .btn-primary-inverse {
          background-color: white;
          color: var(--primary);
          padding: 16px 32px;
          border-radius: 4px;
          font-weight: 700;
          transition: all 0.2s;
        }

        .btn-primary-inverse:hover {
          background-color: var(--accent);
          color: white;
        }
      `}</style>
    </div>
  );
}
