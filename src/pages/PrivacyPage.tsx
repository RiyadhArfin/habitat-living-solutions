import { ShieldAlert } from 'lucide-react';
import featureInspection from '../assets/images/feature-inspection.png';

export default function PrivacyPage() {
  return (
    <div className="privacy-page">
      <section className="page-header">
        <div className="container">
          <h1>Privacy Policy</h1>
          <p>Last Updated: December 26th, 2025</p>
        </div>
      </section>

      <section className="section">
        <div className="container privacy-content">
          <div className="privacy-card">
            <div className="privacy-intro-section">
              <ShieldAlert size={36} className="privacy-icon" />
              <h2>Privacy Policy Agreement</h2>
              <p>
                Welcome to Habitat Living Solutions LLC. We are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy outlines how we collect, use, and safeguard your information when you visit our website, <a href="https://gethls.com">https://gethls.com</a>
              </p>
            </div>

            <hr className="divider" />

            <div className="policy-section">
              <h3>Information We Collect</h3>
              <p>We may collect the following types of information:</p>
              <ol>
                <li>
                  <strong>Personal Information:</strong> This includes information that can be used to identify you as an individual, such as your name, email address, phone number, and any other information you voluntarily provide to us.
                </li>
                <li>
                  <strong>Cookies and Tracking Technologies:</strong> We use cookies and similar tracking technologies to collect information about your interactions with our Site and to improve your user experience.
                </li>
              </ol>
            </div>

            <div className="policy-section">
              <h3>How We Use Your Information</h3>
              <p>We may use the information we collect for the following purposes:</p>
              <ol>
                <li>
                  <strong>To Provide and Improve Our Services:</strong> We use your information to operate, maintain, and enhance the features and functionality of our Site.
                </li>
                <li>
                  <strong>To Communicate with You:</strong> We may use your contact information to respond to your inquiries, send you updates, and provide customer support.
                </li>
                <li>
                  <strong>To Personalize Your Experience:</strong> We may use your information to tailor our services and content to your preferences and interests.
                </li>
                <li>
                  <strong>To Analyze and Improve Our Site:</strong> We use usage data and tracking information to understand how our Site is used and to improve its performance and functionality.
                </li>
              </ol>
            </div>

            <div className="policy-section">
              <h3>Sharing Your Information</h3>
              <p>We do not sell, trade, or otherwise transfer your personal information to third parties, except in the following circumstances:</p>
              <ol>
                <li>
                  <strong>With Your Consent:</strong> We may share your information with third parties if you have given us your explicit consent to do so.
                </li>
                <li>
                  <strong>For Legal Reasons:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court or government agency).
                </li>
                <li>
                  <strong>To Protect Our Rights:</strong> We may disclose your information if we believe it is necessary to investigate, prevent, or take action regarding illegal activities, suspected fraud, or to protect the safety and security of our users or the public.
                </li>
              </ol>
            </div>

            <div className="policy-section highlight-box">
              <h3>Mobile Information</h3>
              <p className="highlight-text-content">
                Mobile information will not be shared, sold, or conveyed to third parties for marketing/promotional purposes.
              </p>
            </div>

            <div className="policy-section">
              <h3>Data Security</h3>
              <p>
                We implement a variety of security measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div className="policy-section">
              <h3>Your Choices and Rights</h3>
              <p>You have the following rights regarding your personal information:</p>
              <ol>
                <li>
                  <strong>Access and Correction:</strong> You have the right to access the personal information we hold about you and to request corrections to any inaccuracies.
                </li>
                <li>
                  <strong>Deletion:</strong> You have the right to request that we delete your personal information, subject to certain exceptions.
                </li>
                <li>
                  <strong>Opt-Out:</strong> You may opt out of receiving promotional communications from us by following the instructions in those communications or by contacting us directly.
                </li>
              </ol>
            </div>

            <div className="policy-section">
              <h3>Changes to This Privacy Policy</h3>
              <p>
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.
              </p>
            </div>

            <div className="policy-section">
              <h3>Contact Us</h3>
              <p>If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:</p>
              <div className="contact-details-box">
                <strong>Habitat Living Solutions LLC</strong><br />
                LLC Type: S Corporation (Established: 12/26/2025)<br />
                Address: 54 State Street, Ste 804, Albany, NY 12207<br />
                Email: <a href="mailto:info@gethls.com">info@gethls.com</a><br />
                Owner: SABINA YESMIN (<a href="mailto:habitatlivingsolutions@gmail.com">habitatlivingsolutions@gmail.com</a>)
              </div>
            </div>

            <hr className="divider" />

            <div className="policy-footer">
              <p>By using our Site, you agree to the terms of this Privacy Policy. If you do not agree with these terms, please do not use our Site.</p>
              <p>
                Habitat Living Solutions LLC reserves the right to modify this Privacy Policy at any time, and such modifications shall be effective immediately upon posting of the modified Privacy Policy on the Site. Your continued use of the Site after any such modifications constitutes your acceptance of the revised Privacy Policy.
              </p>
              <p className="effective-date">Effective Date: December 26th, 2025</p>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .page-header {
          position: relative;
          background-image: url(${featureInspection});
          background-size: cover;
          background-position: center;
          color: white;
          padding: 140px 0 100px;
          text-align: center;
        }
        
        .page-header::before {
             content: '';
             position: absolute;
             inset: 0;
             background: linear-gradient(135deg, rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.7));
             z-index: 1;
        }
        
        .page-header .container {
            position: relative;
            z-index: 2;
        }

        .page-header h1 {
          font-size: 3rem;
          margin-bottom: 24px;
          animation: fadeInUp 0.8s ease-out;
          text-shadow: 0 2px 4px rgba(0,0,0,0.3);
        }
        
        @media (min-width: 768px) {
            .page-header h1 { font-size: 4rem; }
        }

        .page-header p {
          font-size: 1.25rem;
          color: var(--text-dark-secondary);
          max-width: 700px;
          margin: 0 auto;
          animation: fadeInUp 0.8s ease-out 0.2s backwards;
        }

        .section {
          padding: 100px 0;
        }

        .privacy-content {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .privacy-card {
          background: white;
          border: 1px solid var(--surface-2);
          border-radius: 16px;
          padding: 40px;
          box-shadow: var(--shadow-md);
        }

        body.dark .privacy-card {
          background: var(--surface-dark-2);
          border-color: var(--glass-border-dark);
        }

        .privacy-intro-section {
          text-align: center;
          margin-bottom: 30px;
        }

        .privacy-icon {
          color: var(--accent);
          margin-bottom: 16px;
        }

        .privacy-intro-section h2 {
          font-size: 2rem;
          margin-bottom: 16px;
          color: var(--primary);
        }

        body.dark .privacy-intro-section h2 {
          color: var(--text-light);
        }

        .privacy-intro-section p {
          color: var(--text-primary);
          line-height: 1.7;
          font-size: 1.1rem;
        }

        body.dark .privacy-intro-section p {
          color: var(--text-dark-secondary);
        }

        .privacy-intro-section a {
          color: var(--accent);
          text-decoration: underline;
          font-weight: 600;
        }

        .divider {
          border: 0;
          height: 1px;
          background: var(--surface-2);
          margin: 40px 0;
        }

        body.dark .divider {
          background: var(--glass-border-dark);
        }

        .policy-section {
          margin-bottom: 35px;
        }

        .policy-section h3 {
          font-size: 1.4rem;
          margin-bottom: 16px;
          color: var(--primary);
          border-left: 4px solid var(--accent);
          padding-left: 12px;
        }

        body.dark .policy-section h3 {
          color: var(--text-light);
        }

        .policy-section p, .policy-section ol {
          color: var(--text-primary);
          line-height: 1.7;
          font-size: 1rem;
        }

        body.dark .policy-section p, body.dark .policy-section ol {
          color: var(--text-dark-secondary);
        }

        .policy-section ol {
          padding-left: 20px;
        }

        .policy-section li {
          margin-bottom: 12px;
        }

        .policy-section strong {
          color: var(--primary);
        }

        body.dark .policy-section strong {
          color: var(--text-light);
        }

        .highlight-box {
          background: rgba(245, 158, 11, 0.05);
          border: 1px solid rgba(245, 158, 11, 0.2);
          border-radius: 8px;
          padding: 24px;
        }

        .highlight-text-content {
          font-weight: 600;
          color: var(--accent) !important;
          margin: 0;
        }

        .contact-details-box {
          background: var(--surface-1);
          border-radius: 8px;
          padding: 20px;
          margin-top: 16px;
          line-height: 1.8;
          border: 1px solid var(--surface-2);
          color: var(--text-primary);
        }

        body.dark .contact-details-box {
          background: var(--surface-dark-1);
          border-color: var(--glass-border-dark);
          color: var(--text-light);
        }

        .contact-details-box a {
          color: var(--accent);
          text-decoration: underline;
        }

        .policy-footer {
          color: var(--text-muted);
          font-size: 0.9rem;
          line-height: 1.7;
        }

        body.dark .policy-footer {
          color: var(--text-dark-secondary);
        }

        .policy-footer p {
          margin-bottom: 16px;
        }

        .effective-date {
          font-weight: 600;
          margin-top: 24px;
        }
      `}</style>
    </div>
  );
}
