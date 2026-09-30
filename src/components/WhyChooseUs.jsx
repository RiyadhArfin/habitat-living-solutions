import React from 'react';
import { Zap, ShieldCheck, CheckCircle, Clock, Award, Users } from 'lucide-react';

const pillars = [
  {
    icon: Zap,
    title: 'Speed & Rapid Response',
    description: 'Quick estimation and fast execution turnaround. When your property needs lawn mowing, storm debris cleanup, or urgent bed dressing, we mobilize swiftly.'
  },
  {
    icon: ShieldCheck,
    title: 'Full Compliance & Safety',
    description: 'We adhere strictly to local Albany municipality codes, HOA standards, and commercial property safety protocols. Fully licensed and insured.'
  },
  {
    icon: Award,
    title: 'Uncompromising Quality',
    description: 'From blade height calibration to razor-straight edging and clean site blow-offs, we leave every lawn and bed looking immaculate.'
  },
  {
    icon: Clock,
    title: 'Reliable Scheduled Care',
    description: 'Dependable recurring service plans for commercial properties, rental real estate, and residential homeowners. We show up consistently on schedule.'
  },
  {
    icon: Users,
    title: 'Dedicated Landscaping Pros',
    description: 'Our crew members are experienced, respectful, and trained in Upstate New York soil conditions, grass species, and climate adaptations.'
  },
  {
    icon: CheckCircle,
    title: 'Hassle-Free Direct Billing',
    description: 'Clear itemized estimates, transparent contracts, simple electronic invoices, and prompt customer support via email and phone.'
  }
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 lg:py-28 bg-slate-50 bg-pattern-dots relative border-y border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left info column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-100 text-forest-800 text-xs font-bold tracking-wider uppercase">
              Why Habitat Living Solutions
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Dedicated to Speed, Compliance, and Pristine Quality
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              At <strong>Habitat Living Solutions LLC</strong>, landscaping isn't an afterthought—it is our sole dedication. We partner with property managers, real estate owners, and homeowners throughout Albany, NY to ensure exterior grounds remain healthy and presentable year-round.
            </p>

            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 text-forest-700 flex items-center justify-center shrink-0 font-bold text-lg">
                  01
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Commercial & Residential Ready</h4>
                  <p className="text-xs text-slate-600 mt-0.5">Equipped for standalone residential estates as well as high-volume commercial properties.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 text-forest-700 flex items-center justify-center shrink-0 font-bold text-lg">
                  02
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Official Albany Headquarters</h4>
                  <p className="text-xs text-slate-600 mt-0.5">Located right at 54 State Street, Albany NY, providing localized responsiveness.</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-forest-700 hover:bg-forest-800 text-white font-semibold text-sm px-6 py-3.5 rounded-xl shadow-md transition-colors"
              >
                Work With Our Team Today
              </a>
            </div>
          </div>

          {/* Right 2x3 Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {pillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white p-6 rounded-2xl border border-slate-200 shadow-soft shadow-hover space-y-3"
                >
                  <div className="w-11 h-11 rounded-xl bg-forest-50 text-forest-700 flex items-center justify-center">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
