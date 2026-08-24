import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, TreePine, Trash2, Hammer, CheckCircle2, Users, ChevronDown } from 'lucide-react';
import TiltCard from '../components/TiltCard';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import MagneticButton from '../components/MagneticButton';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';
import heroVideo from '../assets/videos/hero-video.webm';
import heroBg from '../assets/images/hero-main.png';
import ctaBg from '../assets/images/cta-keys.png';
import trustBadge from '../assets/images/trust-badge.png';

const mockOrders = [
  { id: 1, type: 'Property Securing', loc: 'Albany, NY', time: '12m ago', status: 'Completed' },
  { id: 2, type: 'Lawn Mowing', loc: 'Troy, NY', time: 'Just now', status: 'Active' },
  { id: 3, type: 'Initial Inspection', loc: 'Schenectady, NY', time: '1h ago', status: 'Completed' },
  { id: 4, type: 'Debris Removal', loc: 'Saratoga Springs, NY', time: '45m ago', status: 'Completed' },
  { id: 5, type: 'Lock Re-Keying', loc: 'Clifton Park, NY', time: '2h ago', status: 'Active' },
];

export default function HomePage() {
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
      spotlight.style.setProperty('--spotlight-x', `${x}%`);
      spotlight.style.setProperty('--spotlight-y', `${y}%`);
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

  const services = [
    { title: 'Securing & Locks', icon: <ShieldCheck size={32} />, desc: 'Board-ups, re-keying, and lockbox installation.' },
    { title: 'Lawn & Landscape', icon: <TreePine size={32} />, desc: 'Regular maintenance, mowing, and tree trimming.' },
    { title: 'Debris Removal', icon: <Trash2 size={32} />, desc: 'Interior and exterior trash outs and dumping.' },
    { title: 'General Repairs', icon: <Hammer size={32} />, desc: 'Safety repairs, winterization, and structural fixes.' },
  ];

  return (
    <div className="home-page">
      {/* ── CINEMATIC VIDEO HERO ── */}
      <section className="hero" ref={heroRef}>

        {/* Video layer */}
        <video
          className="hero-video"
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          poster={heroBg}
        />

        {/* Cinematic letterbox bars */}
        <div className="hero-letterbox hero-letterbox--top" />
        <div className="hero-letterbox hero-letterbox--bottom" />

        {/* Gradient overlays — depth + brand colour wash */}
        <div className="hero-overlay hero-overlay--dark" />
        <div className="hero-overlay hero-overlay--brand" />
        <div className="hero-overlay hero-overlay--vignette" />

        {/* Film grain noise (CSS animated) */}
        <div className="hero-grain" aria-hidden="true" />

        {/* Glowing horizontal accent line */}
        <div className="hero-accent-line" aria-hidden="true" />

        {/* @property Mouse Spotlight */}
        <div ref={spotlightRef} className="hero-spotlight" aria-hidden="true" />

        {/* Live Dispatch Ticker Widget (Covers corner watermark/sparkle) */}
        <div className="hero-dispatch-widget">
          <div className="dispatch-header">
            <span className="dispatch-pulse-dot" />
            <span className="dispatch-title">LIVE DISPATCH FEED</span>
          </div>
          <div className="dispatch-body">
            <div className="dispatch-meta">
              <span className="dispatch-type">{mockOrders[currentOrder].type}</span>
              <span className="dispatch-time">{mockOrders[currentOrder].time}</span>
            </div>
            <div className="dispatch-location">
              {mockOrders[currentOrder].loc}
            </div>
            <div className={`dispatch-status-badge status-${mockOrders[currentOrder].status.toLowerCase()}`}>
              {mockOrders[currentOrder].status}
            </div>
          </div>
        </div>

        {/* Frosted glass exit strip */}
        <div className="hero-frost-exit" aria-hidden="true" />

        {/* Main content */}
        <div
          className="container hero-content"
          style={{
            transform: `translate3d(${mousePos.x * -14}px, ${mousePos.y * -7}px, 0)`,
            transition: 'transform 0.15s ease-out'
          }}
        >
          {/* Animated live badge */}
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Albany, NY · Licensed &amp; Insured
          </div>

          <h1 className="hero-title">
            Professional Property{' '}
            <span className="highlight-text">Solutions</span>
          </h1>

          <p className="hero-subtitle">
            Trusted by Banks, Asset Managers, and Property Owners across New York.
            We secure, maintain, and renovate your assets — fast.
          </p>

          <div className="hero-cta-group">
            <MagneticButton as="div" className="btn btn-hero-primary" strength={0.3}>
              <Link to="/contact" style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'inherit', textDecoration: 'none' }}>
                Get A Free Quote <ArrowRight size={20} />
              </Link>
            </MagneticButton>
            <Link to="/services" className="btn btn-hero-ghost">
              View Services
            </Link>
          </div>

          {/* Stats row */}
          <div className="hero-stats">
            <div className="hero-stat"><span className="hero-stat-num">500+</span><span>Properties Served</span></div>
            <div className="hero-stat-divider" />
            <div className="hero-stat"><span className="hero-stat-num">24/7</span><span>Response Time</span></div>
            <div className="hero-stat-divider" />
            <div className="hero-stat"><span className="hero-stat-num">100%</span><span>Satisfaction</span></div>
          </div>
        </div>

        {/* Scroll indicator */}
        <a href="#services-preview" className="hero-scroll-indicator" aria-label="Scroll down">
          <ChevronDown size={22} />
        </a>

      </section>

      {/* Services Preview */}
      <section className="section services-preview">
        <div className="container">
          <div className="section-header reveal">
            <h2>Our Core Services</h2>
            <p>Comprehensive property preservation and maintenance solutions.</p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <TiltCard key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <Link to="/services" className="service-link">Learn More</Link>
              </TiltCard>
            ))}
          </div>

          <div className="view-all-container">
            <Link to="/services" className="btn btn-glass-prominent">
              View All Services <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Trust / About Preview */}
      <section className="section trust-section">
        <div className="container">
          <div className="section-header reveal">
            <h2>Why Choose Habitat Living Solutions?</h2>
            <p>We deliver LLC-grade professionalism with every work order.</p>
            <p className="trust-lead-centered">Our team is dedicated to speed, compliance, and quality across all services.</p>
          </div>

          <div className="grid-2-col">
            <div className="trust-content reveal-left">
              <ul className="trust-list">
                <li>
                  <CheckCircle2 size={24} className="trust-icon" />
                  <div>
                    <strong>Reliable & Timely</strong>
                    <p>We meet strict deadlines for inspections and repairs.</p>
                  </div>
                </li>
                <li>
                  <CheckCircle2 size={24} className="trust-icon" />
                  <div>
                    <strong>Fully Compliant</strong>
                    <p>Adhering to all local codes and asset management standards.</p>
                  </div>
                </li>
                <li>
                  <CheckCircle2 size={24} className="trust-icon" />
                  <div>
                    <strong>Quality Craftsmanship</strong>
                    <p>From cleanouts to renovations, we do it right seamlessly.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="trust-visual reveal-right">
              <div className="trust-badge-container">
                <img src={trustBadge} alt="Certified Professional" className="trust-badge-img" />
              </div>
              <div className="stat-card">
                <span className="stat-number">100%</span>
                <span className="stat-label">Client Satisfaction</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Response Time</span>
              </div>
            </div>
          </div>

          <div className="view-all-container">
            <Link to="/about" className="btn btn-outline-strong">
              Meet The Team <Users size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="section" style={{ padding: '40px 0 100px 0' }}>
        <div className="container">
          <BeforeAfterSlider />
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-strip">
        <div className="cta-overlay"></div>
        <div className="container cta-content">
          <h2 className="reveal" data-delay="0">Ready to secure your property?</h2>
          <p className="reveal" data-delay="100">Contact us today for a free consultation or quote.</p>
          <div className="reveal" data-delay="200">
            <MagneticButton as="div" strength={0.25}>
              <Link to="/contact" className="btn btn-primary-inverse">Contact Us Now</Link>
            </MagneticButton>
          </div>
        </div>
      </section>

      <style>{`
        .home-page {
          overflow-x: hidden;
        }

        /* ─── HERO ─────────────────────────────────── */
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          color: white;
        }

        /* Video fills the frame */
        .hero-video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 0;
          /* Technique 1: iris clip-path reveal */
          animation: iris-open 1.4s cubic-bezier(0.22, 1, 0.36, 1) both,
                     hero-zoom-scroll linear both;
        }

        @keyframes iris-open {
          0%   { clip-path: inset(48% 48% round 50%); opacity: 0.4; }
          60%  { clip-path: inset(2% 2% round 4px); opacity: 1; }
          100% { clip-path: inset(0% 0% round 0px); opacity: 1; }
        }

        /* Technique 3: scroll-driven zoom-out */
        @supports (animation-timeline: scroll()) {
          .hero-video {
            animation-name: iris-open, hero-zoom-scroll;
            animation-duration: 1.4s, auto;
            animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1), linear;
            animation-fill-mode: both, both;
            animation-timeline: auto, scroll(root block);
            animation-range: auto, 0% 55%;
          }
          @keyframes hero-zoom-scroll {
            from { transform: scale(1.06); filter: brightness(1); }
            to   { transform: scale(1.22); filter: brightness(0.45); }
          }
        }

        /* Letterbox cinema bars */
        .hero-letterbox {
          position: absolute;
          left: 0;
          right: 0;
          height: clamp(24px, 4vw, 56px);
          background: #000;
          z-index: 3;
          animation: letterbox-in 1.2s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        .hero-letterbox--top    { top: 0; transform-origin: top; }
        .hero-letterbox--bottom { bottom: 0; transform-origin: bottom; }

        @keyframes letterbox-in {
          from { transform: scaleY(3); }
          to   { transform: scaleY(1); }
        }

        /* Overlay layers */
        .hero-overlay { position: absolute; inset: 0; }
        .hero-overlay--dark   { background: linear-gradient(180deg, rgba(5,10,24,0.55) 0%, rgba(5,10,24,0.72) 100%); z-index: 1; }
        .hero-overlay--brand  { background: linear-gradient(135deg, rgba(10,28,58,0.65) 0%, transparent 60%); z-index: 1; }
        .hero-overlay--vignette { background: radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.7) 100%); z-index: 1; }

        /* Film grain */
        .hero-grain {
          position: absolute;
          inset: 0;
          z-index: 2;
          opacity: 0.04;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-size: 180px;
          animation: grain-shift 0.4s steps(1) infinite;
          pointer-events: none;
        }
        @keyframes grain-shift {
          0%  { background-position: 0 0; }
          25% { background-position: -30px 10px; }
          50% { background-position: 10px -20px; }
          75% { background-position: -20px 30px; }
        }

        /* Horizontal glowing accent line */
        .hero-accent-line {
          position: absolute;
          bottom: 35%;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent 0%, var(--accent) 30%, #00aaff 50%, var(--accent) 70%, transparent 100%);
          opacity: 0.25;
          z-index: 3;
          animation: accent-line-in 2s ease-out 0.5s both;
        }
        @keyframes accent-line-in {
          from { opacity: 0; transform: scaleX(0); }
          to   { opacity: 0.25; transform: scaleX(1); }
        }

        /* Content */
        .hero-content {
          position: relative;
          z-index: 4;
          max-width: 920px;
          margin: 0 auto;
          text-align: center;
          padding-top: 80px;
        }

        /* Live badge */
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.18);
          backdrop-filter: blur(8px);
          border-radius: 100px;
          padding: 8px 20px;
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.9);
          margin-bottom: 28px;
          animation: fadeInUp 0.8s ease-out 0.3s both;
        }
        .hero-badge-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #22c55e;
          box-shadow: 0 0 0 0 rgba(34,197,94,0.5);
          animation: pulse-dot 2s ease-in-out infinite;
        }
        @keyframes pulse-dot {
          0%,100% { box-shadow: 0 0 0 0 rgba(34,197,94,0.5); }
          50%      { box-shadow: 0 0 0 6px rgba(34,197,94,0); }
        }

        .hero-title {
          font-size: clamp(2.6rem, 6vw, 5rem);
          font-weight: 900;
          line-height: 1.05;
          letter-spacing: -0.03em;
          margin-bottom: 24px;
          animation: fadeInUp 0.8s ease-out 0.5s both,
                     text-shimmer 5s linear 1.5s infinite;
          /* Technique 4: shimmer sweep */
          background: linear-gradient(
            90deg,
            rgba(255,255,255,0.95) 20%,
            rgba(147,210,255,1)    40%,
            rgba(255,255,255,1)    50%,
            rgba(147,210,255,1)    60%,
            rgba(255,255,255,0.95) 80%
          );
          background-size: 250% auto;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          text-shadow: none;
        }

        @keyframes text-shimmer {
          from { background-position: 200% center; }
          to   { background-position: -200% center; }
        }

        .highlight-text {
          color: transparent;
          background: linear-gradient(90deg, #60b4ff 0%, #a8d8ff 50%, #0063a6 100%);
          -webkit-background-clip: text;
          background-clip: text;
          display: inline-block;
          position: relative;
        }

        /* Technique 2: @property Spotlight */
        @property --spotlight-x { syntax: '<percentage>'; inherits: false; initial-value: 50%; }
        @property --spotlight-y { syntax: '<percentage>'; inherits: false; initial-value: 50%; }

        .hero-spotlight {
          position: absolute;
          inset: 0;
          z-index: 2;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.6s ease, --spotlight-x 0.08s ease-out, --spotlight-y 0.08s ease-out;
          background: radial-gradient(
            circle 380px at var(--spotlight-x) var(--spotlight-y),
            rgba(100, 180, 255, 0.12) 0%,
            rgba(100, 180, 255, 0.04) 50%,
            transparent 100%
          );
        }

        /* Technique 5: frosted glass exit strip */
        .hero-frost-exit {
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
        .hero-dispatch-widget {
          position: absolute;
          bottom: clamp(64px, 6vw, 85px);
          right: clamp(20px, 4vw, 48px);
          z-index: 10;
          width: 250px;
          background: rgba(10, 25, 50, 0.55);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border: 1px solid rgba(147, 210, 255, 0.25);
          border-radius: 12px;
          padding: 14px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5), 0 0 15px rgba(96, 180, 255, 0.15);
          animation: fadeInUp 0.3s ease-out both;
          text-align: left;
        }

        .dispatch-header {
          display: flex;
          align-items: center;
          gap: 8px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          padding-bottom: 8px;
          margin-bottom: 10px;
        }

        .dispatch-pulse-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #60b4ff;
          box-shadow: 0 0 8px #60b4ff;
          animation: dispatch-pulse 1.8s ease-in-out infinite;
        }

        @keyframes dispatch-pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.35); opacity: 0.45; }
        }

        .dispatch-title {
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: rgba(255, 255, 255, 0.7);
        }

        .dispatch-body {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .dispatch-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .dispatch-type {
          font-size: 0.9rem;
          font-weight: 700;
          color: #fff;
        }

        .dispatch-time {
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.55);
        }

        .dispatch-location {
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.8);
        }

        .dispatch-status-badge {
          align-self: flex-start;
          font-size: 0.68rem;
          font-weight: 800;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          padding: 3px 8px;
          border-radius: 4px;
          margin-top: 4px;
        }

        .dispatch-status-badge.status-completed {
          background: rgba(34, 197, 94, 0.15);
          color: #4ade80;
          border: 1px solid rgba(34, 197, 94, 0.3);
        }

        .dispatch-status-badge.status-active {
          background: rgba(96, 180, 255, 0.15);
          color: #60b4ff;
          border: 1px solid rgba(96, 180, 255, 0.3);
        }

        .hero-subtitle {
          font-size: clamp(1rem, 2vw, 1.25rem);
          color: rgba(255,255,255,0.8);
          max-width: 640px;
          margin: 0 auto 40px;
          line-height: 1.7;
          animation: fadeInUp 0.8s ease-out 0.7s both;
        }

        .hero-cta-group {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 60px;
          animation: fadeInUp 0.8s ease-out 0.9s both;
        }

        .btn-hero-primary {
          background: var(--accent);
          color: white;
          padding: 16px 36px;
          border-radius: 8px;
          font-size: 1.05rem;
          font-weight: 700;
          box-shadow: 0 0 32px rgba(0,99,166,0.5);
          transition: all 0.3s cubic-bezier(0.23,1,0.32,1);
          cursor: pointer;
        }
        .btn-hero-primary:hover {
          background: #0079cc;
          box-shadow: 0 0 48px rgba(0,99,166,0.8);
          transform: translateY(-2px);
        }

        .btn-hero-ghost {
          background: rgba(255,255,255,0.08);
          color: white;
          border: 1.5px solid rgba(255,255,255,0.35);
          backdrop-filter: blur(8px);
          padding: 16px 36px;
          border-radius: 8px;
          font-size: 1.05rem;
          font-weight: 600;
          transition: all 0.3s ease;
        }
        .btn-hero-ghost:hover {
          background: rgba(255,255,255,0.18);
          border-color: rgba(255,255,255,0.7);
        }

        /* Stats row */
        .hero-stats {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 32px;
          flex-wrap: wrap;
          animation: fadeInUp 0.8s ease-out 1.1s both;
        }
        .hero-stat {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2px;
        }
        .hero-stat-num {
          font-size: 1.6rem;
          font-weight: 800;
          color: #60b4ff;
          line-height: 1;
        }
        .hero-stat span:last-child {
          font-size: 0.78rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: rgba(255,255,255,0.55);
          font-weight: 500;
        }
        .hero-stat-divider {
          width: 1px;
          height: 36px;
          background: rgba(255,255,255,0.2);
        }

        /* Scroll indicator */
        .hero-scroll-indicator {
          position: absolute;
          bottom: 32px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 4;
          color: rgba(255,255,255,0.5);
          animation: scroll-bounce 2s ease-in-out infinite, fadeIn 1s ease-out 1.5s both;
          transition: color 0.2s;
        }
        .hero-scroll-indicator:hover { color: white; }
        @keyframes scroll-bounce {
          0%,100% { transform: translateX(-50%) translateY(0); }
          50%      { transform: translateX(-50%) translateY(8px); }
        }

        /* Sections */
        .section {
          padding: 120px 0;
        }

        .section-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .section-header h2 {
          font-size: 2.5rem;
          color: var(--primary);
          margin-bottom: 16px;
        }
        
        body.dark .section-header h2 {
            color: var(--text-light);
        }
        
        .section-header p {
            font-size: 1.25rem;
            color: var(--text-secondary);
            max-width: 600px;
            margin: 0 auto;
        }
        
        body.dark .section-header p {
            color: var(--text-dark-secondary);
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 40px;
          margin-bottom: 64px;
        }

        .service-card {
          padding: 40px;
          background: white;
          border-radius: 12px; /* Modern rounding */
          box-shadow: var(--shadow-sm);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid var(--surface-2);
          display: flex;
          flex-direction: column;
          height: 100%;
          position: relative;
          overflow: hidden;
        }
        
        body.dark .service-card {
            background: var(--surface-dark-2);
            border-color: var(--glass-border-dark);
        }

        @supports (animation-timeline: view()) {
          .service-card {
            animation: fade-in-up linear both;
            animation-timeline: view();
            animation-range: entry 10% cover 30%;
          }
        }

        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(100px) scale(0.9);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-xl);
          border-color: var(--accent);
        }

        .service-icon {
          color: var(--accent);
          margin-bottom: 24px;
          background: var(--accent-light);
          width: 64px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
        }
        
        body.dark .service-icon {
            background: rgba(245, 158, 11, 0.1);
        }

        .service-card h3 {
          font-size: 1.5rem;
          margin-bottom: 16px;
        }

        .service-link {
          display: inline-flex;
          align-items: center;
          margin-top: auto;
          padding-top: 24px;
          color: var(--primary);
          font-weight: 700;
          font-size: 0.95rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        
        .service-link::after {
            content: '→';
            margin-left: 8px;
            transition: transform 0.2s;
        }
        
        .service-link:hover::after {
            transform: translateX(4px);
        }
        
        body.dark .service-link {
          color: var(--text-dark-secondary);
        }
        
        body.dark .service-link:hover {
          color: var(--accent);
        }
        
        .view-all-container {
            text-align: center;
            margin-top: 48px;
        }

        /* Trust Section with Glassmorphism */
        .trust-section {
          background-color: var(--bg-light);
          position: relative;
        }
        
        body.dark .trust-section {
            background-color: var(--bg-dark);
        }

        .grid-2-col {
          display: grid;
          grid-template-columns: 1fr;
          gap: 80px;
          align-items: center;
        }

        @media (min-width: 992px) {
          .grid-2-col {
            grid-template-columns: 1.2fr 1fr;
          }
        }
        
        .trust-lead-centered {
            font-size: 1.25rem;
            color: var(--text-secondary);
            margin-top: 16px;
            line-height: 1.6;
        }
        body.dark .trust-lead-centered {
            color: var(--text-dark-secondary);
        }

        .trust-list {
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .trust-list li {
          display: flex;
          gap: 20px;
          align-items: flex-start;
        }

        .trust-icon {
          color: var(--accent);
          flex-shrink: 0;
          margin-top: 2px;
          background: white;
          border-radius: 50%;
          box-shadow: var(--shadow-sm);
        }
        
        body.dark .trust-icon {
            background: var(--surface-dark-2);
        }
        
        .trust-list strong {
            display: block;
            font-size: 1.15rem;
            margin-bottom: 4px;
            color: var(--primary);
        }
        
        body.dark .trust-list strong {
            color: var(--text-light);
        }

        .trust-visual {
            display: grid;
            grid-template-columns: 1fr;
            gap: 24px;
            grid-auto-flow: dense;
        }
        
        @media (min-width: 768px) {
            .trust-visual {
                grid-template-columns: 1fr 1fr;
            }
        }
        
        .trust-badge-container {
            grid-column: 1 / -1;
            display: flex;
            justify-content: center;
            margin-bottom: 24px;
        }

        .trust-badge-img {
            height: 120px;
            width: auto;
            filter: drop-shadow(0 4px 6px rgba(0,0,0,0.1));
            animation: float 3s ease-in-out infinite;
        }
        
        @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }
        
        .stat-card {
            background: white;
            color: var(--primary);
            padding: 48px 32px;
            text-align: center;
            border-radius: 16px;
            box-shadow: var(--shadow-lg);
            border: 1px solid var(--surface-2);
        }
        
        body.dark .stat-card {
            background: var(--surface-dark-2);
            color: var(--text-light);
            border-color: var(--glass-border-dark);
        }
        
        .stat-number {
            display: block;
            font-size: 3.5rem;
            font-weight: 800;
            color: var(--accent);
            margin-bottom: 8px;
            line-height: 1;
        }
        
        .stat-label {
            font-size: 1rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            color: var(--text-secondary);
        }
        
        body.dark .stat-label {
            color: var(--text-dark-secondary);
        }

        /* CTA Strip */
        .cta-strip {
          padding: 100px 0;
          background-image: url(${ctaBg});
          background-size: cover;
          background-position: center;
          color: white;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        
        .cta-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(135deg, rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.8));
            z-index: 1;
        }
        
        .cta-content {
            position: relative;
            z-index: 2;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
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
      `}</style>
    </div>
  );
}
