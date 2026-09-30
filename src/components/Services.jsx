import React from 'react';
import { 
  Scissors, 
  Trees, 
  Wind, 
  Layers, 
  SunMedium, 
  Building2, 
  Check, 
  ArrowRight 
} from 'lucide-react';

const services = [
  {
    icon: Scissors,
    title: 'Precision Lawn Mowing & Edging',
    description: 'Scheduled residential and commercial turf mowing, string-trimming around fences & obstacles, crisp pavement edging, and clean blow-off.',
    features: ['Even blade height control', 'Razor-sharp walkway edging', 'Clipping bagging or mulching', 'Scheduled weekly or bi-weekly'],
    image: '/images/lawn_mowing.jpg'
  },
  {
    icon: Trees,
    title: 'Landscape Design & Planting',
    description: 'Enhancing curb appeal with curated perennial installations, ornamental shrubs, flowering beds, decorative stones, and modern border designs.',
    features: ['Custom landscape layout', 'Climate-adapted NY flora', 'Soil prep & root fertilization', 'Weed barrier installation'],
    image: '/images/landscape_planting.jpg'
  },
  {
    icon: Layers,
    title: 'Premium Mulching & Bed Care',
    description: 'Deep trench bed edging and fresh premium triple-shredded mulch application to retain moisture, suppress weed growth, and protect root systems.',
    features: ['Black, brown, and natural mulch', 'Deep perimeter trenching', 'Pre-emergent weed protection', 'Shrub base preservation'],
    image: '/images/mulch_bed.jpg'
  },
  {
    icon: Wind,
    title: 'Spring & Fall Seasonal Cleanups',
    description: 'Comprehensive seasonal property overhauls. Thorough leaf vacuuming/clearing, perennial cutbacks, lawn dethatching, and post-winter rejuvenation.',
    features: ['Complete leaf & debris removal', 'Lawn aeration & overseeding', 'Branch & deadwood clearing', 'Winterization preparation'],
    image: '/images/seasonal_cleanup.jpg'
  },
  {
    icon: SunMedium,
    title: 'Hedge, Shrub & Bush Trimming',
    description: 'Artistic and horticultural pruning of ornamental bushes, privacy hedges, and small ornamental trees to promote healthy, dense growth.',
    features: ['Topiary and geometric shaping', 'Dead foliage elimination', 'Suckers & wild shoot removal', 'Seasonal structural pruning'],
    image: '/images/hedge_trimming.jpg'
  },
  {
    icon: Building2,
    title: 'Commercial & Asset Grounds Care',
    description: 'Contract grounds maintenance tailored for Albany commercial complexes, HOA communities, multi-family residences, and corporate facilities.',
    features: ['Full compliance documentation', 'Rapid turnaround crews', 'High-traffic curb presentation', 'Flexible commercial billing'],
    image: '/images/commercial_grounds.jpg'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-white bg-pattern-grid-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-100 text-forest-800 text-xs font-bold tracking-wider uppercase">
            Specialized Landscaping Services
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Complete Grounds Care & Landscape Solutions
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            We focus purely on exceptional landscaping. Our dedicated crews in Albany, NY utilize professional-grade equipment and horticultural best practices for every square foot of your property.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-soft shadow-hover flex flex-col group"
              >
                {/* Image header */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-forest-700 text-white flex items-center justify-center shadow-md">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2.5">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-forest-700 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Bullet points */}
                  <div className="pt-3 border-t border-slate-100 space-y-2">
                    {service.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-700">
                        <Check className="w-4 h-4 text-forest-600 shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA link */}
                  <div className="pt-2">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-forest-700 group-hover:text-forest-900 transition-colors"
                    >
                      <span>Inquire about this service</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner callout */}
        <div className="mt-16 rounded-3xl bg-forest-900 text-white p-8 sm:p-10 relative overflow-hidden shadow-xl">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Need a Custom Landscaping Package in Albany?
              </h3>
              <p className="text-sm sm:text-base text-forest-200 max-w-xl">
                Whether you manage commercial portfolios or a residential estate, Habitat Living Solutions LLC delivers timely estimates and dependable scheduling.
              </p>
            </div>
            <div className="shrink-0">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-forest-950 px-6 py-3.5 rounded-xl font-bold text-sm transition-colors shadow-md"
              >
                <span>Request Custom Quote</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
          {/* Decorative background shape */}
          <div className="absolute right-0 bottom-0 w-80 h-80 bg-forest-800/60 rounded-full blur-2xl pointer-events-none -mr-20 -mb-20" />
        </div>

      </div>
    </section>
  );
}
