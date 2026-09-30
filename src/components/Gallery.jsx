import React, { useState } from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';

const galleryItems = [
  {
    category: 'lawn',
    categoryName: 'Lawn Care & Edging',
    title: 'Manicured Estate Lawn & Striping',
    location: 'Albany, NY Residential',
    image: 'https://images.unsplash.com/photo-1558904541-efa8c4a08931?auto=format&fit=crop&w=700&q=80',
    details: 'Weekly precision mowing, edge trimming, and turf health management.'
  },
  {
    category: 'mulch',
    categoryName: 'Mulch & Bed Design',
    title: 'Deep Trench Bed with Dark Bark Mulch',
    location: 'Colonie, NY Property',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=700&q=80',
    details: 'Perennial plantings, rock borders, and weed-suppressing organic mulch.'
  },
  {
    category: 'commercial',
    categoryName: 'Commercial Grounds',
    title: 'Corporate Park Perimeter Maintenance',
    location: 'Albany NY Business District',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=700&q=80',
    details: 'Full contract groundskeeping, walkway clearing, and code compliance.'
  },
  {
    category: 'shrub',
    categoryName: 'Shrub & Hedge Care',
    title: 'Geometric Privacy Hedge Sculpting',
    location: 'Delmar, NY Estate',
    image: 'https://images.unsplash.com/photo-1599818816933-5b8782f25b29?auto=format&fit=crop&w=700&q=80',
    details: 'Precision level hedge pruning and ornamental bush rejuvenation.'
  },
  {
    category: 'cleanup',
    categoryName: 'Seasonal Cleanup',
    title: 'Fall Leaf Removal & Lawn Dethatching',
    location: 'Guilderland, NY',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=80',
    details: 'Complete foliage vacuuming, aeration, and winter grass prep.'
  },
  {
    category: 'lawn',
    categoryName: 'Lawn Care & Edging',
    title: 'Vibrant Green Turf Restoration',
    location: 'Albany, NY Residential',
    image: 'https://images.unsplash.com/photo-1592417817098-8f3d6eb228cc?auto=format&fit=crop&w=700&q=80',
    details: 'Overseeding, custom aeration, and scheduled fertilization treatments.'
  }
];

export default function Gallery() {
  const [filter, setFilter] = useState('all');

  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <section id="showcase" className="py-20 lg:py-28 bg-slate-50 bg-pattern-dots relative border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-100 text-forest-800 text-xs font-bold tracking-wider uppercase">
            Work Showcase
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Recent Landscaping Projects
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            A glimpse into the properties we maintain across Albany and the Capital Region.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'lawn', label: 'Lawn & Edging' },
            { id: 'mulch', label: 'Mulch & Planting' },
            { id: 'shrub', label: 'Shrub & Hedge' },
            { id: 'cleanup', label: 'Seasonal Cleanup' },
            { id: 'commercial', label: 'Commercial Grounds' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                filter === tab.id
                  ? 'bg-forest-700 text-white shadow-md'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredItems.map((item, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-soft shadow-hover flex flex-col"
            >
              <div className="relative h-60 overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-lg text-[11px] font-bold text-forest-800 shadow-sm">
                  {item.categoryName}
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-medium text-forest-700 mb-1 flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-emerald-600" />
                    <span>{item.location}</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-forest-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {item.details}
                  </p>
                </div>
                <div className="pt-4 mt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-forest-700">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    Habitat Quality Standard
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
