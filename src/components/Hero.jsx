import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, MapPin, Leaf, Award } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white bg-pattern-dots pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-slate-100">
      {/* Subtle decorative glow elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-forest-50/70 rounded-full blur-2xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-7">
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-50 border border-forest-200/80 text-forest-800 text-xs sm:text-sm font-semibold tracking-wide">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <Leaf className="w-4 h-4 text-forest-600" />
              <span>Dedicated Landscaping & Property Grounds Care</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Transforming Grounds with <span className="text-transparent bg-clip-text bg-gradient-to-r from-forest-700 to-emerald-600">Precision Landscaping</span>
            </h1>

            {/* Subtext */}
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl font-normal leading-relaxed">
              <strong>Habitat Living Solutions LLC</strong> delivers premier residential and commercial landscaping across Albany, NY. From precision lawn mowing to seasonal overhauls and bed maintenance—we keep your property pristine, vibrant, and fully compliant.
            </p>

            {/* Feature Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {[
                'Albany, NY Local Fast Turnaround',
                'Comprehensive Grounds Maintenance',
                'Commercial & Residential Expertise',
                'Dedicated to Speed & Quality Standards'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-slate-700 text-sm font-medium">
                  <CheckCircle2 className="w-5 h-5 text-forest-600 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-3 bg-forest-700 hover:bg-forest-800 text-white px-7 py-4 rounded-xl font-bold text-base shadow-lg shadow-forest-900/15 transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>Request a Free Estimate</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 px-7 py-4 rounded-xl font-semibold text-base transition-all duration-200 shadow-sm"
              >
                <span>View Landscaping Services</span>
              </a>
            </div>

            {/* Quick Contact snippet */}
            <div className="pt-2 flex items-center gap-4 text-xs text-slate-500 border-t border-slate-200/80">
              <span className="flex items-center gap-1 text-slate-700 font-medium">
                <MapPin className="w-3.5 h-3.5 text-forest-700" />
                Albany, NY Office: 54 State Street, Ste 804
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 text-slate-700 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-forest-700" />
                Licensed & Insured
              </span>
            </div>
          </div>

          {/* Right Column: Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Image Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
                  alt="Lush manicured lawn and landscaping by Habitat Living Solutions"
                  className="w-full h-[440px] sm:h-[480px] object-cover hover:scale-105 transition-transform duration-700"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                {/* Bottom card content */}
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-forest-700/90 backdrop-blur-sm text-xs font-semibold text-white">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-300" />
                    <span>Albany NY Grounds Excellence</span>
                  </div>
                  <h3 className="text-xl font-bold tracking-tight">Pristine Lawn Care & Curvature Edging</h3>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    Tailored turf management and decorative mulch installations designed to withstand Upstate New York seasons.
                  </p>
                </div>
              </div>

              {/* Floating Badge 1: Quality Guarantee */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-white p-3.5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-forest-100 flex items-center justify-center text-forest-700">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">100% Quality Focus</div>
                  <div className="text-[11px] text-slate-500">Speed & Full Compliance</div>
                </div>
              </div>

              {/* Floating Badge 2: Local Albany Service */}
              <div className="absolute -bottom-5 -right-4 sm:-right-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Capital Region NY</div>
                  <div className="text-[11px] text-slate-500">Albany & Surrounding Areas</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
