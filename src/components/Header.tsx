import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import logo from '../assets/logo_icon_transparent.png';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-content">
        <Link to="/" className="logo-container">
          <img src={logo} alt="Habitat Living Solutions LLC" className="logo-img" />
          <span className="logo-text">
            HABITAT <span className="logo-highlight">LIVING</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/services" className="nav-link">Services</Link>
          <Link to="/about" className="nav-link">About Us</Link>
          <Link to="/privacy" className="nav-link">Privacy Policy</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </nav>

        <div className="header-actions">
          <button
            className="theme-toggle"
            onClick={() => setIsDark(!isDark)}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <Link to="/contact" className="btn btn-primary desktop-only">Get Quote</Link>

          <button
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        <div className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <div className="mobile-nav-content">
            <Link to="/" className="mobile-link" onClick={closeMobileMenu}>Home</Link>
            <Link to="/services" className="mobile-link" onClick={closeMobileMenu}>Services</Link>
            <Link to="/about" className="mobile-link" onClick={closeMobileMenu}>About Us</Link>
            <Link to="/privacy" className="mobile-link" onClick={closeMobileMenu}>Privacy Policy</Link>
            <Link to="/contact" className="mobile-link" onClick={closeMobileMenu}>Contact</Link>
            <Link to="/contact" className="btn btn-primary mobile-cta" onClick={closeMobileMenu}>Get Quote</Link>
          </div>
        </div>
      </div>

      <style>{`
        .header {
          position: fixed;
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          width: calc(100% - 40px);
          max-width: 1200px;
          height: var(--header-height);
          background-color: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          z-index: 1000;
          transition: all var(--transition-medium);
          border-radius: 100px;
          border: 1px solid rgba(255, 255, 255, 0.4);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
        }

        .header.scrolled {
          background-color: rgba(255, 255, 255, 0.9);
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.12);
        }

        .header-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 100%;
          padding: 0 24px;
        }

        .logo-container {
          display: flex;
          align-items: center;
          gap: 12px;
          font-weight: 800;
          font-size: 1.2rem;
          color: var(--primary);
          text-transform: uppercase;
        }

        .logo-img {
          height: 48px;
          width: auto;
        }
        
        .logo-text {
          display: none; /* Hidden on mobile, shown on desktop if needed, or just rely on logo */
        }

        @media (min-width: 768px) {
          .logo-text {
            display: block;
          }
        }

        .logo-highlight {
          color: var(--accent);
        }

        .desktop-nav {
          display: none;
          gap: 32px;
        }

        .nav-link {
          font-weight: 500;
          font-size: 1.05rem;
          color: var(--text-secondary);
          position: relative;
        }

        .nav-link:hover {
          color: var(--accent);
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .theme-toggle {
          background: none;
          border: none;
          cursor: pointer;
          color: var(--text-primary);
          padding: 8px;
          border-radius: 50%;
          transition: background 0.2s;
        }

        .theme-toggle:hover {
          background-color: var(--bg-off-white);
        }

        .phone-link {
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 600;
          color: var(--primary);
        }

        .phone-link:hover {
          color: var(--accent);
        }

        .mobile-menu-btn {
          display: block;
          background: none;
          border: none;
          cursor: pointer;
          color: var(--text-primary);
        }

        /* Mobile Nav */
        .mobile-nav {
          position: fixed;
          top: var(--header-height);
          left: 0;
          right: 0;
          bottom: 0;
          background: var(--bg-light);
          transform: translateX(100%);
          transition: transform 0.3s ease-in-out;
          padding: 24px;
        }

        .mobile-nav.open {
          transform: translateX(0);
        }

        .mobile-nav-content {
          display: flex;
          flex-direction: column;
          gap: 24px;
          font-size: 1.25rem;
          font-weight: 600;
        }

        .desktop-only {
          display: none;
        }

        @media (min-width: 992px) {
          .desktop-nav {
            display: flex;
          }
          .mobile-menu-btn, .mobile-nav {
            display: none;
          }
          .desktop-only {
            display: inline-flex;
          }
        }
        
        /* Dark Mode Header */
        body.dark .header {
          background-color: rgba(15, 23, 42, 0.7);
          border-color: rgba(255, 255, 255, 0.15);
        }
        body.dark .header.scrolled {
          background-color: rgba(15, 23, 42, 0.85);
        }
        body.dark .mobile-nav {
          background-color: var(--bg-dark);
          border-bottom-color: rgba(255,255,255,0.05);
        }
        
        body.dark .nav-link, 
        body.dark .logo-container,
        body.dark .phone-link,
        body.dark .theme-toggle,
        body.dark .mobile-menu-btn {
          color: var(--text-light);
        }
        
        body.dark .theme-toggle:hover {
          background-color: rgba(255,255,255,0.1);
        }
      `}</style>
    </header>
  );
}
