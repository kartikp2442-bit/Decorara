/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowDown, Sparkles, Gift, ShieldCheck, Truck, MessageSquare, Award } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative w-full overflow-hidden pb-16 pt-8 lg:pt-14 bg-[#FAF6F0]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center min-h-[680px]">
          {/* Left Narrative */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6 z-10">
            {/* Pill badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EBE3DB] w-fit text-[#263328] font-sans text-xs uppercase tracking-widest border border-[#E9CFC4]/50">
              <span className="w-2 h-2 rounded-full bg-[#C0725A] animate-pulse"></span>
              <span>The Festive &amp; Milestone Collection 2026</span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#263328] font-normal leading-[1.12] tracking-tight">
              Thoughtfully Curated <br className="hidden sm:inline" />
              <span className="italic font-normal text-[#C0725A]">Gifts</span> &amp; Home Décor
            </h1>

            {/* Subtext */}
            <p className="font-sans text-base sm:text-lg text-[#5E665F] max-w-xl leading-relaxed">
              Gifts that make a house feel like home. Handcrafted, bespoke hampers and artisanal décor pieces for intimate weddings, Diwali reunions, housewarmings, and quiet milestones.
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => scrollTo('gift-hampers')}
                className="px-7 py-3.5 bg-[#C0725A] text-white rounded-full font-sans text-sm font-medium shadow-md hover:bg-[#A35842] transition-all flex items-center gap-2 cursor-pointer group"
              >
                <span>Shop Hampers</span>
                <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              </button>

              <button
                onClick={() => scrollTo('ai-gift-finder')}
                className="px-7 py-3.5 bg-[#F5EFEB] text-[#263328] hover:bg-[#EBE3DB] border border-[#E9CFC4] rounded-full font-sans text-sm font-medium transition-all flex items-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#B8975A]" />
                <span>Find Gift with AI</span>
              </button>
            </div>

            {/* Trust Badges Strip */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3.5 rounded-2xl bg-[#F5EFEB] border border-[#E9CFC4]/30 flex flex-col gap-1 transition-all hover:shadow-xs">
                <Gift className="w-5 h-5 text-[#C0725A]" />
                <span className="font-sans text-xs font-semibold uppercase tracking-wider text-[#263328]">Custom Hampers</span>
                <span className="font-sans text-[11px] text-[#5E665F]">Bespoke Monograms</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-[#F5EFEB] border border-[#E9CFC4]/30 flex flex-col gap-1 transition-all hover:shadow-xs">
                <Award className="w-5 h-5 text-[#C0725A]" />
                <span className="font-sans text-xs font-semibold uppercase tracking-wider text-[#263328]">Artisanal Wrap</span>
                <span className="font-sans text-[11px] text-[#5E665F]">Velvet, Brass &amp; Wax</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-[#F5EFEB] border border-[#E9CFC4]/30 flex flex-col gap-1 transition-all hover:shadow-xs">
                <Truck className="w-5 h-5 text-[#C0725A]" />
                <span className="font-sans text-xs font-semibold uppercase tracking-wider text-[#263328]">Pan-India Dispatch</span>
                <span className="font-sans text-[11px] text-[#5E665F]">Insured Safe Transit</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-[#F5EFEB] border border-[#E9CFC4]/30 flex flex-col gap-1 transition-all hover:shadow-xs">
                <MessageSquare className="w-5 h-5 text-[#C0725A]" />
                <span className="font-sans text-xs font-semibold uppercase tracking-wider text-[#263328]">WhatsApp Support</span>
                <span className="font-sans text-[11px] text-[#5E665F]">Personal Stylist Desk</span>
              </div>
            </div>
          </div>

          {/* Right Visual Composition */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            <div className="w-full max-w-[540px] relative">
              {/* Organic ambient backdrops */}
              <div className="absolute -top-8 -right-8 w-72 h-72 bg-[#E9CFC4]/40 rounded-full blur-3xl pointer-events-none"></div>
              <div className="absolute -bottom-8 -left-8 w-80 h-80 bg-[#d7e7d6]/40 rounded-full blur-3xl pointer-events-none"></div>

              {/* Master Photograph */}
              <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl bg-[#F5EFEB] border border-[#E9CFC4]/40 group">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBExPKTdoFnO5ckKjVK0VRVT5vUTLpg81ykNVgM6hfyn24BQmC6_irIE6MWzmKGOYbrxtLj8QFu29edaLKQoDrizIQF2-X3IYnB9GWRH7ERw9jwuYofNvII4Ou1hXkqxWEQWhvjD9OJhi14uNPkNlTm4-BnLh_oY0WuGZimwelnl-bnZcbMwLjoz0GHADg8UxVG2syqoH-ZN2SGmfA-y3eYxceAOeZOTvAs79_LNIF6Ulqpu4QzZHVozQ"
                  alt="Editorial lifestyle photography of luxury Indian artisanal gift hamper on unlacquered teak table with brass diya and fresh botanicals"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#263328]/75 via-[#263328]/15 to-transparent flex items-end p-6 sm:p-8 text-white">
                  <div>
                    <span className="font-sans text-[11px] uppercase tracking-widest text-[#ffdea6] font-semibold">
                      Featured Signature
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-normal mt-0.5">The Rajbari Festive Trunk</h3>
                    <p className="font-sans text-xs sm:text-sm text-[#FAF6F0]/90 mt-1 max-w-sm">
                      Hand-pressed Moradabad brasswares with Kashmiri saffron preserves and pure sandalwood.
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Offset Card */}
              <div className="hidden sm:flex absolute -bottom-7 -left-7 w-56 p-3 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl flex-col gap-2 border border-[#E9CFC4]/60">
                <div className="w-full h-32 rounded-xl overflow-hidden bg-[#F5EFEB]">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGv5Y15tH2xA6C4M_l9XKlC7OY4io-JuOSUIc3zzHSzkMIvGXx5TKc766M0RncGAW-y8ijkhpD2t2NnnMNbYsRc0-_trDU3DGCGYrlfZewJ2vSliXttc8ElTgEgsWJCkS6Vh2YJxf5WI7gxbB3ve_j2ieimvxpiuNYMdJEpMeu3v4CRVYoxKBjVwnZG-xJDhS7NP3fV_bWlcbqU4eL4wqQ3N24U8RAcJ5uMgnBV369eCvS099Pq-mxng"
                    alt="Hand-hammered Indian brass tea strainer and raw terracotta candle holder"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="flex items-center justify-between px-1">
                  <div>
                    <span className="font-sans text-xs font-semibold text-[#263328] block">Handcrafted Brass</span>
                    <p className="font-sans text-[11px] text-[#5E665F]">Moradabad Guild</p>
                  </div>
                  <span className="font-serif text-base font-semibold text-[#B8975A]">₹1,850</span>
                </div>
              </div>

              {/* Gilded Seal Badge */}
              <div className="absolute -top-5 -right-3 w-26 h-26 rounded-full bg-[#263328] text-white p-2 flex flex-col items-center justify-center text-center shadow-xl border-2 border-[#B8975A]/60">
                <ShieldCheck className="w-5 h-5 text-[#ffdea6]" />
                <span className="font-sans text-[10px] uppercase tracking-wider font-bold mt-0.5">100% Artisan</span>
                <span className="font-sans text-[9px] text-[#ffdea6]">Zero Synthetic</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
