/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Star, HandHeart, Sparkles, Truck, Headphones, Quote } from 'lucide-react';
import { REVIEWS, Review } from '../data/decoraraData.ts';

export const TestimonialsAndWhy: React.FC = () => {
  return (
    <section id="testimonials" className="w-full py-16 sm:py-24 bg-[#F5EFEB]/70 border-t border-[#E9CFC4]/30">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12">
        {/* 1. WHY CHOOSE DECORARA (4 PILLARS) */}
        <div className="mb-20">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="font-sans text-xs uppercase tracking-widest text-[#C0725A] font-semibold">
              The Decorara Standard
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#263328] mt-1">
              Why Choose Decorara
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-3xl bg-white border border-[#E9CFC4]/40 flex flex-col gap-3 shadow-xs hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#F5EFEB] flex items-center justify-center text-[#263328]">
                <HandHeart className="w-6 h-6 text-[#C0725A]" />
              </div>
              <h4 className="font-serif text-xl text-[#263328]">Handpicked Products</h4>
              <p className="font-sans text-xs sm:text-sm text-[#5E665F] leading-relaxed">
                Direct partnerships with master metal smiths of Moradabad, Khurja potters, and GI-certified clusters without middlemen.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-[#E9CFC4]/40 flex flex-col gap-3 shadow-xs hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#F5EFEB] flex items-center justify-center text-[#263328]">
                <Sparkles className="w-6 h-6 text-[#C0725A]" />
              </div>
              <h4 className="font-serif text-xl text-[#263328]">Custom Packaging</h4>
              <p className="font-sans text-xs sm:text-sm text-[#5E665F] leading-relaxed">
                Signature botanical wrapping, custom gold embossed monograms, raw tussar ribbons, and real melted beeswax stamps.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-[#E9CFC4]/40 flex flex-col gap-3 shadow-xs hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#F5EFEB] flex items-center justify-center text-[#263328]">
                <Truck className="w-6 h-6 text-[#C0725A]" />
              </div>
              <h4 className="font-serif text-xl text-[#263328]">On-Time Delivery</h4>
              <p className="font-sans text-xs sm:text-sm text-[#5E665F] leading-relaxed">
                Safe, insulated transit across 19,000+ Indian pincodes with real-time transit tracking and zero-hassle breakage replacements.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-[#E9CFC4]/40 flex flex-col gap-3 shadow-xs hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#F5EFEB] flex items-center justify-center text-[#263328]">
                <Headphones className="w-6 h-6 text-[#C0725A]" />
              </div>
              <h4 className="font-serif text-xl text-[#263328]">Dedicated Support</h4>
              <p className="font-sans text-xs sm:text-sm text-[#5E665F] leading-relaxed">
                Never converse with automated robotic menus. Our human styling team personally answers your WhatsApp messages in real time.
              </p>
            </div>
          </div>
        </div>

        {/* 2. CUSTOMER REVIEWS */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="font-sans text-xs uppercase tracking-widest text-[#C0725A] font-semibold">
                Patron Stories
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#263328] mt-1">
                Customer Reviews
              </h2>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-[#E9CFC4]/50 shadow-xs">
              <div className="flex items-center text-[#B8975A]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#B8975A] text-[#B8975A]" />
                ))}
              </div>
              <span className="font-sans text-xs font-semibold text-[#263328]">
                4.9 / 5.0 Rating Across 1,200+ Dispatches
              </span>
            </div>
          </div>

          {/* Review Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {REVIEWS.map((rev: Review) => (
              <div
                key={rev.id}
                className="bg-white rounded-3xl p-6 shadow-xs border border-[#E9CFC4]/40 flex flex-col justify-between hover:shadow-md transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center text-[#B8975A]">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#B8975A] text-[#B8975A]" />
                      ))}
                    </div>
                    <Quote className="w-4 h-4 text-[#E9CFC4]" />
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-[#263328] leading-relaxed italic">
                    "{rev.text}"
                  </p>
                </div>

                <div className="pt-5 flex items-center gap-3 border-t border-[#F5EFEB] mt-4">
                  <div className="w-9 h-9 rounded-full bg-[#EBE3DB] text-[#263328] font-sans font-bold text-xs flex items-center justify-center shrink-0">
                    {rev.initials}
                  </div>
                  <div>
                    <span className="font-serif text-sm font-semibold text-[#263328] block">
                      {rev.name}
                    </span>
                    <span className="font-sans text-[11px] text-[#5E665F]">
                      {rev.role} • {rev.city}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="font-sans text-[11px] text-center text-[#747872] mt-6 italic">
            * Sample verified reviews reflecting representative customer feedback.
          </p>
        </div>
      </div>
    </section>
  );
};
