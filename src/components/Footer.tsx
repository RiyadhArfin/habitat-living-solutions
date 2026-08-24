import { Link } from 'react-router-dom';
import { Mail, MapPin } from 'lucide-react';


export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    {/* Brand Column */}
                    <div className="footer-col brand-col">
                        <Link to="/" className="footer-logo">

                            <span className="brand-name">HABITAT LIVING SOLUTIONS LLC</span>
                        </Link>
                        <p className="footer-desc">
                            Professional property preservation and maintenance services in Albany, NY.
                            Dedicated to speed, compliance, and quality for asset managers and owners.
                        </p>

                    </div>

                    {/* Quick Links */}
                    <div className="footer-col">
                        <h4>Quick Links</h4>
                        <ul className="footer-links">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><Link to="/privacy">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="footer-col">
                        <h4>Contact Us</h4>
                        <ul className="contact-list">
                            <li>
                                <Mail size={18} />
                                <span>info@gethls.com</span>
                            </li>
                            <li>
                                <MapPin size={18} />
                                <span>54 State Street, Ste 804, Albany, NY 12207</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Habitat Living Solutions LLC. All rights reserved.</p>
                </div>
            </div>

            <style>{`
        .footer {
          background-color: var(--primary);
          color: var(--text-dark-secondary);
          padding: 80px 0 32px;
          border-top: 1px solid rgba(255,255,255,0.05);
        }
        
        body.dark .footer {
            background-color: var(--bg-dark);
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 48px;
          margin-bottom: 64px;
        }

        @media (min-width: 768px) {
            .footer-grid {
                grid-template-columns: 2fr 1fr 1fr;
            }
        }

        .footer-logo {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          margin-bottom: 24px;
          text-decoration: none;
        }
        

        
        .brand-name {
            font-size: 1.25rem;
            color: white;
            font-weight: 800;
            letter-spacing: -0.02em;
            line-height: 1.2;
        }

        .footer-desc {
            max-width: 350px;
            margin-bottom: 32px;
            line-height: 1.6;
        }
        

        
        .footer-col h4 {
            color: white;
            font-size: 1.1rem;
            margin-bottom: 24px;
            text-transform: uppercase;
            letter-spacing: 0.05em;
        }
        
        .footer-links li {
            margin-bottom: 12px;
        }
        
        .footer-links a {
            transition: color 0.2s;
        }
        
        .footer-links a:hover {
            color: var(--accent);
            padding-left: 4px;
        }
        
        .contact-list li {
            display: flex;
            gap: 12px;
            margin-bottom: 16px;
            align-items: flex-start;
        }
        
        .contact-list svg {
            color: var(--accent);
            flex-shrink: 0;
            margin-top: 4px;
        }
        
        .footer-bottom {
            text-align: center;
            padding-top: 32px;
            border-top: 1px solid rgba(255,255,255,0.05);
            font-size: 0.9rem;
        }
            `}</style>
        </footer>
    );
}
