import React from 'react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'David Miller',
    role: 'Commercial Property Manager',
    location: 'Albany, NY',
    text: 'Habitat Living Solutions took over our multi-tenant office park grounds this season. Their attention to detail on edging, mulch beds, and weekly mowing is unmatched.',
    rating: 5
  },
  {
    name: 'Sarah Jenkins',
    role: 'Homeowner',
    location: 'Delmar, NY',
    text: 'They transformed our overgrown lawn into a lush green yard with beautiful mulch beds and trimmed shrubs. The team is super professional, fast, and respectful.',
    rating: 5
  },
  {
    name: 'Marcus Vance',
    role: 'Real Estate Asset Manager',
    location: 'Colonie, NY',
    text: 'Speed and compliance are critical for our portfolio. Habitat Living Solutions delivers prompt before-and-after documentation and pristine lawn maintenance every single visit.',
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-slate-50 bg-pattern-dots border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-100 text-forest-800 text-xs font-bold tracking-wider uppercase">
            Client Feedback
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Trusted by Albany Property Owners
          </h2>
          <p className="text-base text-slate-600">
            See how our dedicated landscaping services help maintain value and pristine curb appeal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div 
              key={idx}
              className="bg-white p-7 rounded-2xl border border-slate-200 shadow-soft flex flex-col justify-between relative"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400 gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-slate-300" />
                </div>
                <p className="text-sm text-slate-600 leading-relaxed italic">
                  "{review.text}"
                </p>
              </div>

              <div className="pt-5 mt-4 border-t border-slate-100">
                <div className="font-bold text-sm text-slate-900">{review.name}</div>
                <div className="text-xs text-forest-700 font-medium">{review.role} • {review.location}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
