import React from 'react';
import { ClipboardCheck, Calculator, Shovel, Sparkles } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: ClipboardCheck,
    title: 'Site Assessment',
    description: 'We evaluate your lawn condition, acreage, grading, mulch bed borders, and overall plant health to recommend the ideal landscaping plan.'
  },
  {
    number: '02',
    icon: Calculator,
    title: 'Transparent Estimate',
    description: 'You receive an upfront, itemized proposal detailing scope, frequency (one-time or recurring contract), timeline, and clear pricing with no surprises.'
  },
  {
    number: '03',
    icon: Shovel,
    title: 'Expert Execution',
    description: 'Our trained crew arrives on time with commercial-grade mowers, trimmers, and planting tools, executing cleanly with minimal disruption.'
  },
  {
    number: '04',
    icon: Sparkles,
    title: 'Clean Finish & Care',
    description: 'We blow off driveways and walkways, haul away all debris, conduct a final quality inspection, and ensure lasting beauty for your property.'
  }
];

export default function Process() {
  return (
    <section id="process" className="py-20 lg:py-28 bg-white bg-pattern-grid-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-100 text-forest-800 text-xs font-bold tracking-wider uppercase">
            Simple 4-Step Process
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            How We Care for Your Grounds
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            A seamless, professional workflow from initial consultation to immaculate finishing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, index) => {
            const IconComp = step.icon;
            return (
              <div 
                key={index}
                className="bg-white p-7 rounded-2xl border border-slate-200/90 shadow-soft shadow-hover flex flex-col relative group"
              >
                {/* Step badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-forest-50 text-forest-700 flex items-center justify-center group-hover:bg-forest-700 group-hover:text-white transition-colors">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <span className="text-3xl font-black tracking-tight text-forest-200 group-hover:text-forest-400 transition-colors">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
