import React from 'react';
import { MapPin, Navigation, ShieldCheck, Check } from 'lucide-react';

const locations = [
  'Albany (Downtown & Pine Hills)',
  'Colonie & Loudonville',
  'Delmar & Bethlehem',
  'Guilderland & Westmere',
  'Latham & Newtonville',
  'Troy & East Greenbush',
  'Slingerlands & Voorheesville',
  'Schenectady & Niskayuna'
];

export default function ServiceArea() {
  return (
    <section id="service-area" className="py-20 bg-white bg-pattern-grid-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-3xl border border-slate-200 bg-white shadow-soft p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left info */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-100 text-forest-800 text-xs font-bold tracking-wider uppercase">
                Service Coverage
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Proudly Serving Albany, NY & The Capital Region
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Operating directly from <strong>54 State Street in Albany</strong>, our landscaping crews are strategically positioned to provide rapid, reliable lawn care and grounds preservation services across the entire greater Capital District.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {locations.map((loc, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-forest-700 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>{loc}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3 flex flex-wrap items-center gap-4 text-xs text-slate-500">
                <span className="flex items-center gap-1.5 font-semibold text-slate-700">
                  <MapPin className="w-4 h-4 text-forest-700" />
                  Office: 54 State Street, Ste 804, Albany, NY 12207
                </span>
                <span className="flex items-center gap-1.5 font-semibold text-slate-700">
                  <ShieldCheck className="w-4 h-4 text-forest-700" />
                  NY State Registered & Insured
                </span>
              </div>
            </div>

            {/* Right Card */}
            <div className="lg:col-span-5">
              <div className="bg-gradient-to-br from-forest-900 to-forest-800 text-white rounded-2xl p-7 shadow-xl space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-300">
                    <Navigation className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Rapid Deployment</h4>
                    <p className="text-xs text-forest-200">Albany County & Capital Area</p>
                  </div>
                </div>

                <div className="border-t border-forest-700/60 pt-4 space-y-3 text-xs text-forest-100">
                  <p>
                    ✓ <strong>Routine Maintenance:</strong> Weekly and bi-weekly lawn mowing schedules.
                  </p>
                  <p>
                    ✓ <strong>Urgent & Compliance Cleanups:</strong> Property overgrown? We restore code compliance promptly.
                  </p>
                  <p>
                    ✓ <strong>Seasonal Transitions:</strong> Spring mulch refresh & fall leaf removals.
                  </p>
                </div>

                <div className="pt-2">
                  <a
                    href="#contact"
                    className="block w-full text-center bg-white text-forest-900 font-bold py-3 rounded-xl hover:bg-forest-50 transition-colors text-sm shadow-md"
                  >
                    Check Service In Your Neighborhood
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
