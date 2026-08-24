import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Send, ChevronDown } from 'lucide-react';
import contactVideo from '../assets/videos/contract-us.gif';
import contactSupport from '../assets/images/contact-support.png';
import featureInspection from '../assets/images/feature-inspection.png';

const mockOrders = [
  { id: 1, type: 'Quote Request', loc: 'Albany, NY', time: '5m ago', status: 'Active' },
  { id: 2, type: 'Callback Scheduled', loc: 'Troy, NY', time: '18m ago', status: 'Completed' },
  { id: 3, type: 'Preservation Inquiry', loc: 'Schenectady, NY', time: '35m ago', status: 'Completed' },
  { id: 4, type: 'Quote Dispatched', loc: 'Saratoga Springs, NY', time: '1h ago', status: 'Completed' },
];

export default function ContactPage() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [currentOrder, setCurrentOrder] = useState(0);
    const heroRef = useRef<HTMLElement>(null);
    const spotlightRef = useRef<HTMLDivElement>(null);

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
        spotlight.style.setProperty('--spotlight-x-ctc', `${x}%`);
        spotlight.style.setProperty('--spotlight-y-ctc', `${y}%`);
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
        <div className="contact-page">
            {/* ── CINEMATIC VIDEO HERO ── */}
            <section className="ctc-hero" ref={heroRef}>

                <img
                    className="ctc-hero-video"
                    src={contactVideo}
                    alt="Habitat Living Solutions LLC Contact Us"
                />

                {/* Letterbox bars */}
                <div className="ctc-hero-lb ctc-hero-lb--top" />
                <div className="ctc-hero-lb ctc-hero-lb--bottom" />

                {/* Overlay layers */}
                <div className="ctc-hero-overlay ctc-hero-overlay--dark" />
                <div className="ctc-hero-overlay ctc-hero-overlay--brand" />
                <div className="ctc-hero-overlay ctc-hero-overlay--vignette" />

                {/* Film grain */}
                <div className="ctc-hero-grain" aria-hidden="true" />

                {/* Glowing accent line */}
                <div className="ctc-hero-accent-line" aria-hidden="true" />

                {/* @property Mouse Spotlight */}
                <div ref={spotlightRef} className="ctc-hero-spotlight" aria-hidden="true" />

                {/* Live Dispatch Ticker Widget (Covers corner watermark/sparkle) */}
                <div className="ctc-dispatch-widget">
                    <div className="ctc-dispatch-header">
                        <span className="ctc-dispatch-pulse-dot" />
                        <span className="ctc-dispatch-title">LIVE PORTAL DECK</span>
                    </div>
                    <div className="ctc-dispatch-body">
                        <div className="ctc-dispatch-meta">
                            <span className="ctc-dispatch-type">{mockOrders[currentOrder].type}</span>
                            <span className="ctc-dispatch-time">{mockOrders[currentOrder].time}</span>
                        </div>
                        <div className="ctc-location">
                            {mockOrders[currentOrder].loc}
                        </div>
                        <div className={`ctc-dispatch-status-badge status-${mockOrders[currentOrder].status.toLowerCase()}`}>
                            {mockOrders[currentOrder].status}
                        </div>
                    </div>
                </div>

                {/* Frosted glass exit strip */}
                <div className="ctc-hero-frost-exit" aria-hidden="true" />

                {/* Content */}
                <div 
                    className="container ctc-hero-content"
                    style={{
                        transform: `translate3d(${mousePos.x * -14}px, ${mousePos.y * -7}px, 0)`,
                        transition: 'transform 0.15s ease-out'
                    }}
                >
                    <div className="ctc-hero-badge">
                        <span className="ctc-hero-badge-dot" />
                        24/7 Dispatch · Online Support
                    </div>

                    <h1 className="ctc-hero-title">
                        Contact <span className="ctc-highlight">Habitat Living Solutions</span>
                    </h1>

                    <p className="ctc-hero-subtitle">
                        Get in touch for a free preservation, maintenance, or renovation quote. We respond within 24 hours.
                    </p>
                </div>

                {/* Scroll indicator */}
                <a href="#contact-grid" className="ctc-scroll-indicator" aria-label="Scroll to contact details">
                    <ChevronDown size={22} />
                </a>
            </section>

            <section className="section" id="contact-grid">
                <div className="container">
                    <div className="contact-grid">
                        <div className="contact-info">
                            <div className="support-visual">
                                <img src={contactSupport} alt="Customer Support" className="support-img" />
                            </div>
                            <div className="info-card">
                                <h2>Get In Touch</h2>
                                <p className="info-intro">
                                    We are ready to assist with all your property preservation needs.
                                    Reach out directly or use the form to send us a message.
                                </p>

                                <ul className="info-list">
                                    <li>
                                        <div className="icon-box"><Mail size={24} /></div>
                                        <div>
                                            <strong>Email</strong>
                                            <a href="mailto:info@gethls.com">info@gethls.com</a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon-box"><MapPin size={24} /></div>
                                        <div>
                                            <strong>Service Area</strong>
                                            <span>Albany, NY & Surrounding Areas</span>
                                        </div>
                                    </li>

                                </ul>
                            </div>
                        </div>

                        <div className="contact-form-wrapper">
                            <form className="contact-form" action="mailto:info@gethls.com" method="post" encType="text/plain">
                                <h3>Send a Message</h3>
                                <div className="form-group">
                                    <label htmlFor="name">Full Name</label>
                                    <input type="text" id="name" name="name" className="form-input" required placeholder="John Doe" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <input type="email" id="email" name="email" className="form-input" required placeholder="john@example.com" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Phone Number</label>
                                    <input type="tel" id="phone" name="phone" className="form-input" placeholder="(555) 123-4567" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea id="message" name="message" rows={5} className="form-textarea" required placeholder="Tell us about your property needs..."></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary btn-block">
                                    Send Message <Send size={18} />
                                </button>
                                
                                <div className="sms-consent-disclaimer">
                                    By submitting this form you allow consent to receive SMS from (Habitat Living Solutions LLC). Frequency may vary. Message & data rates may apply. Reply STOP to opt out of further messaging or reply HELP for more information. View our terms and privacy policy at our website <Link to="/privacy">Privacy Policy</Link>.
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <style>{`
        /* ─── CONTACT VIDEO HERO ──────────────────── */
        .ctc-hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          color: white;
        }

        .ctc-hero-video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 0;
          /* Technique 1: iris clip-path reveal */
          animation: iris-open-ctc 1.4s cubic-bezier(0.22, 1, 0.36, 1) both,
                     hero-zoom-scroll-ctc linear both;
        }

        @keyframes iris-open-ctc {
          0%   { clip-path: inset(48% 48% round 50%); opacity: 0.4; }
          60%  { clip-path: inset(2% 2% round 4px); opacity: 1; }
          100% { clip-path: inset(0% 0% round 0px); opacity: 1; }
        }

        /* Technique 3: scroll-driven zoom-out */
        @supports (animation-timeline: scroll()) {
          .ctc-hero-video {
            animation-name: iris-open-ctc, hero-zoom-scroll-ctc;
            animation-duration: 1.4s, auto;
            animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1), linear;
            animation-fill-mode: both, both;
            animation-timeline: auto, scroll(root block);
            animation-range: auto, 0% 55%;
          }
          @keyframes hero-zoom-scroll-ctc {
            from { transform: scale(1.06); filter: brightness(1); }
            to   { transform: scale(1.22); filter: brightness(0.45); }
          }
        }

        /* Letterbox bars */
        .ctc-hero-lb {
          position: absolute; left: 0; right: 0;
          height: clamp(20px, 3.5vw, 48px);
          background: #000;
          z-index: 3;
          animation: ctc-lb-in 1.2s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        .ctc-hero-lb--top    { top: 0;    transform-origin: top; }
        .ctc-hero-lb--bottom { bottom: 0; transform-origin: bottom; }
        @keyframes ctc-lb-in {
          from { transform: scaleY(3); }
          to   { transform: scaleY(1); }
        }

        /* Overlay layers */
        .ctc-hero-overlay { position: absolute; inset: 0; }
        .ctc-hero-overlay--dark    { background: linear-gradient(180deg, rgba(5,10,24,0.5) 0%, rgba(5,10,24,0.75) 100%); z-index: 1; }
        .ctc-hero-overlay--brand   { background: linear-gradient(135deg, rgba(10,28,58,0.6) 0%, transparent 55%); z-index: 1; }
        .ctc-hero-overlay--vignette{ background: radial-gradient(ellipse at center, transparent 25%, rgba(0,0,0,0.65) 100%); z-index: 1; }

        /* Film grain */
        .ctc-hero-grain {
          position: absolute; inset: 0; z-index: 2;
          opacity: 0.04;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-size: 180px;
          animation: grain-shift 0.4s steps(1) infinite;
          pointer-events: none;
        }

        /* Glowing accent line */
        .ctc-hero-accent-line {
          position: absolute; bottom: 38%; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent 0%, #6366f1 30%, #818cf8 50%, #6366f1 70%, transparent 100%);
          opacity: 0.22; z-index: 3;
          animation: accent-line-in-ctc 2s ease-out 0.5s both;
        }
        @keyframes accent-line-in-ctc {
          from { opacity: 0; transform: scaleX(0); }
          to   { opacity: 0.22; transform: scaleX(1); }
        }

        /* Content */
        .ctc-hero-content {
          position: relative; z-index: 4;
          max-width: 800px; margin: 0 auto;
          text-align: center; padding: 100px 24px 80px;
        }

        /* Badge */
        .ctc-hero-badge {
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
        .ctc-hero-badge-dot {
          width: 8px; height: 8px; border-radius: 50%;
          background: #6366f1;
          box-shadow: 0 0 0 0 rgba(99,102,241,0.5);
          animation: pulse-indigo-ctc 2s ease-in-out infinite;
        }
        @keyframes pulse-indigo-ctc {
          0%,100% { box-shadow: 0 0 0 0 rgba(99,102,241,0.5); }
          50%      { box-shadow: 0 0 0 6px rgba(99,102,241,0); }
        }

        /* Title */
        .ctc-hero-title {
          font-size: clamp(2.4rem, 5.5vw, 4.5rem);
          font-weight: 900; line-height: 1.05;
          letter-spacing: -0.03em; margin-bottom: 20px;
          animation: fadeInUp 0.7s ease-out 0.5s both,
                     text-shimmer-ctc 5s linear 1.5s infinite;
          /* Technique 4: shimmer sweep */
          background: linear-gradient(
            90deg,
            rgba(255,255,255,0.95) 20%,
            rgba(224,231,255,1)    40%,
            rgba(255,255,255,1)    50%,
            rgba(224,231,255,1)    60%,
            rgba(255,255,255,0.95) 80%
          );
          background-size: 250% auto;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          text-shadow: none;
        }

        @keyframes text-shimmer-ctc {
          from { background-position: 200% center; }
          to   { background-position: -200% center; }
        }

        .ctc-highlight {
          color: transparent;
          background: linear-gradient(90deg, #6366f1, #818cf8);
          -webkit-background-clip: text;
          background-clip: text;
          display: inline-block;
          position: relative;
        }

        /* Technique 2: @property Spotlight */
        @property --spotlight-x-ctc { syntax: '<percentage>'; inherits: false; initial-value: 50%; }
        @property --spotlight-y-ctc { syntax: '<percentage>'; inherits: false; initial-value: 50%; }

        .ctc-hero-spotlight {
          position: absolute;
          inset: 0;
          z-index: 2;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.6s ease, --spotlight-x-ctc 0.08s ease-out, --spotlight-y-ctc 0.08s ease-out;
          background: radial-gradient(
            circle 380px at var(--spotlight-x-ctc) var(--spotlight-y-ctc),
            rgba(99, 102, 241, 0.08) 0%,
            rgba(99, 102, 241, 0.03) 50%,
            transparent 100%
          );
        }

        /* Technique 5: frosted glass exit strip */
        .ctc-hero-frost-exit {
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
        .ctc-hero-subtitle {
          font-size: clamp(0.95rem, 1.8vw, 1.15rem);
          color: rgba(255,255,255,0.78);
          max-width: 580px; margin: 0 auto 36px;
          line-height: 1.7;
          animation: fadeInUp 0.7s ease-out 0.7s both;
        }

        /* Scroll indicator */
        .ctc-scroll-indicator {
          position: absolute; bottom: 28px; left: 50%;
          transform: translateX(-50%); z-index: 4;
          color: rgba(255,255,255,0.45);
          animation: scroll-bounce 2s ease-in-out infinite, fadeIn 1s ease-out 1.2s both;
          transition: color 0.2s;
        }
        .ctc-scroll-indicator:hover { color: white; }

        /* ─── LIVE DISPATCH WIDGET ────────────────── */
        .ctc-dispatch-widget {
          position: absolute;
          bottom: clamp(64px, 6vw, 85px);
          right: clamp(20px, 4vw, 48px);
          z-index: 10;
          width: 250px;
          background: rgba(10, 25, 50, 0.55);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border: 1px solid rgba(99, 102, 241, 0.25);
          border-radius: 12px;
          padding: 14px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5), 0 0 15px rgba(99, 102, 241, 0.15);
          animation: fadeInUp 0.3s ease-out both;
          text-align: left;
        }

        .ctc-dispatch-header {
          display: flex;
          align-items: center;
          gap: 8px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          padding-bottom: 8px;
          margin-bottom: 10px;
        }

        .ctc-dispatch-pulse-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #6366f1;
          box-shadow: 0 0 8px #6366f1;
          animation: dispatch-pulse-ctc 1.8s ease-in-out infinite;
        }

        @keyframes dispatch-pulse-ctc {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.35); opacity: 0.45; }
        }

        .ctc-dispatch-title {
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: rgba(255, 255, 255, 0.7);
        }

        .ctc-dispatch-body {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .ctc-dispatch-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .ctc-dispatch-type {
          font-size: 0.9rem;
          font-weight: 700;
          color: #fff;
        }

        .ctc-dispatch-time {
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.55);
        }

        .ctc-location {
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.8);
        }

        .ctc-dispatch-status-badge {
          align-self: flex-start;
          font-size: 0.68rem;
          font-weight: 800;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          padding: 3px 8px;
          border-radius: 4px;
          margin-top: 4px;
        }

        .ctc-dispatch-status-badge.status-completed {
          background: rgba(34, 197, 94, 0.15);
          color: #4ade80;
          border: 1px solid rgba(34, 197, 94, 0.3);
        }

        .ctc-dispatch-status-badge.status-active {
          background: rgba(99, 102, 241, 0.15);
          color: #818cf8;
          border: 1px solid rgba(99, 102, 241, 0.3);
        }

        .section {
            padding: 100px 0;
        }

        .contact-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 60px;
        }
        
        @media (min-width: 992px) {
            .contact-grid {
                grid-template-columns: 1fr 1.2fr;
                gap: 80px;
            }
        }
        
        .support-visual {
            margin-bottom: 32px;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: var(--shadow-md);
            border: 1px solid var(--surface-2);
        }
        
        .support-img {
            width: 100%;
            height: auto;
            display: block;
        }

        .info-card {
            background: white;
            padding: 40px;
            border-radius: 16px;
            border: 1px solid var(--surface-2);
            box-shadow: var(--shadow-lg);
        }
        
        body.dark .info-card {
            background: var(--surface-dark-2);
            border-color: var(--glass-border-dark);
        }
        
        .info-card h2 {
            font-size: 2rem;
            margin-bottom: 16px;
            color: var(--primary);
        }
        
        body.dark .info-card h2 {
            color: var(--text-light);
        }
        
        .info-intro {
            color: var(--text-secondary);
            margin-bottom: 40px;
            line-height: 1.6;
            font-size: 1.1rem;
        }
        
        body.dark .info-intro {
            color: var(--text-dark-secondary);
        }
        
        .info-list {
            display: flex;
            flex-direction: column;
            gap: 32px;
        }
        
        .info-list li {
            display: flex;
            gap: 20px;
            align-items: flex-start;
        }
        
        .icon-box {
            background: var(--accent-light);
            color: var(--accent);
            width: 48px;
            height: 48px;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
        }
        
        body.dark .icon-box {
            background: rgba(245, 158, 11, 0.1);
        }
        
        .info-list strong {
            display: block;
            font-size: 1.1rem;
            margin-bottom: 4px;
            color: var(--primary);
        }
        
        body.dark .info-list strong {
            color: var(--text-light);
        }
        
        .info-list span, .info-list a {
            color: var(--text-secondary);
            font-size: 1.05rem;
        }
        
        body.dark .info-list span, body.dark .info-list a {
            color: var(--text-dark-secondary);
        }
        
        .info-list a:hover {
            color: var(--accent);
        }

        .contact-form-wrapper {
            background: white;
            padding: 48px;
            border-radius: 16px;
            box-shadow: var(--shadow-xl);
            border: 1px solid var(--surface-2);
        }
        
        body.dark .contact-form-wrapper {
            background: var(--surface-dark-2);
            border-color: var(--glass-border-dark);
        }
        
        .contact-form h3 {
            font-size: 2rem;
            margin-bottom: 32px;
            color: var(--primary);
        }
        
        body.dark .contact-form h3 {
            color: var(--text-light);
        }
        
        .form-group {
            margin-bottom: 24px;
        }
        
        .form-group label {
            display: block;
            margin-bottom: 8px;
            font-weight: 600;
            color: var(--primary);
        }
        
        body.dark .form-group label {
            color: var(--text-light);
        }
        
        .form-input, .form-textarea {
          width: 100%;
          padding: 16px;
          border: 2px solid var(--surface-2);
          border-radius: 8px;
          font-size: 1rem;
          transition: all 0.2s;
          background-color: var(--bg-light);
          color: var(--text-primary);
          font-family: inherit;
        }
        
        body.dark .form-input, body.dark .form-textarea {
            background-color: var(--bg-dark);
            border-color: var(--surface-dark-2);
            color: var(--text-light);
        }

        .form-input:focus, .form-textarea:focus {
          outline: none;
          border-color: var(--accent);
          background-color: white;
          box-shadow: 0 0 0 4px rgba(245, 158, 11, 0.1);
        }
        
        body.dark .form-input:focus, body.dark .form-textarea:focus {
            background-color: var(--surface-dark-1);
        }
        
        .btn-block {
            width: 100%;
            padding: 16px;
            font-size: 1.1rem;
        }

        .sms-consent-disclaimer {
            font-size: 0.85rem;
            color: #555;
            line-height: 1.6;
            margin-top: 20px;
            font-style: italic;
        }

        body.dark .sms-consent-disclaimer {
            color: #aaa;
        }

        .sms-consent-disclaimer a {
            color: #0056b3;
            text-decoration: underline;
            font-style: normal;
        }

        body.dark .sms-consent-disclaimer a {
            color: #60b4ff;
        }
      `}</style>
        </div>
    );
}
