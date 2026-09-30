import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle2, Clock, Shield } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Lawn Mowing & Edging',
    propertyType: 'Residential',
    address: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [mailtoLink, setMailtoLink] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const subject = encodeURIComponent(`Estimate Request: ${formData.service} - ${formData.name}`);
    const bodyText = 
`Hello Habitat Living Solutions LLC Team,

I would like to request an estimate for landscaping services in Albany / Capital Region.

--- CLIENT & PROPERTY DETAILS ---
• Full Name: ${formData.name}
• Email: ${formData.email}
• Phone: ${formData.phone || 'N/A'}
• Property Type: ${formData.propertyType}
• Service Needed: ${formData.service}
• Property Address: ${formData.address || 'N/A'}

--- PROJECT DETAILS / NOTES ---
${formData.message || 'No additional notes provided.'}

Best regards,
${formData.name}`;

    const mailto = `mailto:info@gethls.com?subject=${subject}&body=${encodeURIComponent(bodyText)}`;
    setMailtoLink(mailto);
    setSubmitted(true);

    // Trigger mailto directly
    window.location.href = mailto;
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white bg-pattern-grid-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Information */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-100 text-forest-800 text-xs font-bold tracking-wider uppercase">
                Contact & Estimates
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Request Your Free Landscaping Quote
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Contact <strong>Habitat Living Solutions LLC</strong> today. Tell us about your property and lawn care requirements, and we'll provide a fast, accurate estimate.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-forest-700 text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-slate-500 font-bold">Email Us Directly</h4>
                  <a 
                    href="mailto:info@gethls.com"
                    className="text-base sm:text-lg font-bold text-forest-800 hover:text-forest-950 transition-colors block mt-0.5"
                  >
                    info@gethls.com
                  </a>
                  <p className="text-xs text-slate-500 mt-1">Prompt replies within 24 business hours</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-forest-700 text-white flex items-center justify-center shrink-0 shadow-sm">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-slate-500 font-bold">Main Office</h4>
                  <p className="text-sm sm:text-base font-bold text-slate-900 mt-0.5">
                    54 State Street, Ste 804
                  </p>
                  <p className="text-sm text-slate-700">Albany, NY 12207</p>
                  <p className="text-xs text-slate-500 mt-1">Serving all of Albany & Capital District</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-forest-700 text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-slate-500 font-bold">Operating Hours</h4>
                  <p className="text-sm font-semibold text-slate-900 mt-0.5">Monday – Saturday: 7:00 AM – 6:30 PM</p>
                  <p className="text-xs text-slate-500 mt-1">Sunday: Emergency/Pre-scheduled Crews</p>
                </div>
              </div>

            </div>

            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 flex items-center gap-3">
              <Shield className="w-5 h-5 text-emerald-700 shrink-0" />
              <span>
                <strong>HABITAT LIVING SOLUTIONS LLC</strong> is fully licensed and insured in the State of New York.
              </span>
            </div>

          </div>

          {/* Right Column: Interactive Estimate Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-8 sm:p-10 relative">
              
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Estimate Request Generated!</h3>
                  <p className="text-slate-600 max-w-md mx-auto text-sm">
                    Your email app should open automatically with your inquiry addressed to <strong>info@gethls.com</strong>.
                  </p>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    {mailtoLink && (
                      <a
                        href={mailtoLink}
                        className="px-6 py-2.5 bg-forest-700 text-white rounded-xl text-sm font-semibold hover:bg-forest-800 transition-colors inline-flex items-center gap-2"
                      >
                        <Mail className="w-4 h-4" />
                        <span>Open Email Draft Again</span>
                      </a>
                    )}
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          phone: '',
                          service: 'Lawn Mowing & Edging',
                          propertyType: 'Residential',
                          address: '',
                          message: ''
                        });
                      }}
                      className="px-6 py-2.5 bg-slate-100 text-slate-700 rounded-xl text-sm font-semibold hover:bg-slate-200 transition-colors"
                    >
                      New Request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-bold text-slate-900">Get a Free Landscaping Estimate</h3>
                    <p className="text-xs sm:text-sm text-slate-500">
                      Fill out this quick form or send an email to <a href="mailto:info@gethls.com" className="text-forest-700 font-semibold underline">info@gethls.com</a>.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="e.g. Robert Smith"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-forest-600 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="e.g. robert@example.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-forest-600 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="(518) 000-0000"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-forest-600 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Property Type
                      </label>
                      <select
                        value={formData.propertyType}
                        onChange={(e) => setFormData({...formData, propertyType: e.target.value})}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-forest-600 focus:border-transparent bg-white"
                      >
                        <option value="Residential">Residential Home</option>
                        <option value="Commercial">Commercial / Office Park</option>
                        <option value="HOA">HOA / Multi-Family</option>
                        <option value="Rental">Rental / Real Estate Portfolio</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Primary Landscaping Service Needed
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-forest-600 focus:border-transparent bg-white"
                    >
                      <option value="Lawn Mowing & Edging">Routine Lawn Mowing & Precision Edging</option>
                      <option value="Landscape Design & Planting">Landscape Design & Flower/Shrub Planting</option>
                      <option value="Mulching & Bed Care">Premium Mulching & Garden Bed Edging</option>
                      <option value="Seasonal Cleanup">Spring or Fall Yard & Leaf Cleanup</option>
                      <option value="Shrub & Hedge Trimming">Shrub, Hedge & Bush Trimming</option>
                      <option value="Commercial Grounds Care">Full Commercial Grounds Maintenance</option>
                      <option value="Multiple / Full Property Overhaul">Full Property Landscaping Package</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Property Address in Albany / Capital Area
                    </label>
                    <input
                      type="text"
                      value={formData.address}
                      onChange={(e) => setFormData({...formData, address: e.target.value})}
                      placeholder="e.g. 123 Western Ave, Albany, NY"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-forest-600 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Project Notes / Specific Details
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Describe your lawn size, specific requests, or desired frequency..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-forest-600 focus:border-transparent"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-forest-700 hover:bg-forest-800 text-white font-bold rounded-xl shadow-lg shadow-forest-900/10 transition-all duration-200 flex items-center justify-center gap-2 text-sm"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Estimate Request</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
