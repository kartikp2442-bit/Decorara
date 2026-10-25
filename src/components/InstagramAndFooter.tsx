/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Heart, Flower2, Phone, Mail, MapPin, Lock, CreditCard, ShieldCheck } from 'lucide-react';
import { INSTAGRAM_POSTS, BRAND } from '../data/decoraraData.ts';

export const InstagramAndFooter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubscribed(true);
  };

  return (
    <>
      {/* SECTION P: INSTAGRAM / GALLERY STRIP & NEWSLETTER */}
      <section className="w-full py-16 sm:py-24 bg-[#F5EFEB]/70 border-t border-[#E9CFC4]/40">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12">
          {/* Instagram Header */}
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="font-sans text-xs uppercase tracking-widest text-[#C0725A] font-semibold">
              Follow Our Journal
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#263328] mt-1">
              @decorara.living
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#5E665F] mt-1.5">
              Glimpses into our Bangalore atelier, artisan brass workshops, and unboxing moments.
            </p>
          </div>

          {/* 6 Curated Instagram Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-16">
            {INSTAGRAM_POSTS.map((post) => (
              <div
                key={post.id}
                className="aspect-square rounded-2xl overflow-hidden relative group cursor-pointer bg-[#EBE3DB] border border-[#E9CFC4]/40 shadow-xs"
              >
                <img
                  src={post.image}
                  alt={post.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#263328]/45 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white transition-opacity duration-300">
                  <Heart className="w-6 h-6 fill-white text-white transform group-hover:scale-110 transition-transform" />
                </div>
              </div>
            ))}
          </div>

          {/* SECTION Q: NEWSLETTER PROMO BANNER */}
          <div className="rounded-3xl bg-[#263328] text-white p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl border border-[#B8975A]/40 relative overflow-hidden">
            {/* Subtle glow */}
            <div className="absolute -top-10 -left-10 w-60 h-60 bg-[#C0725A]/20 rounded-full blur-3xl pointer-events-none"></div>

            <div className="max-w-xl text-center md:text-left z-10">
              <span className="font-sans text-xs uppercase tracking-widest text-[#ffdea6] font-bold">
                Limited Privilege
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-normal mt-1 leading-snug">
                Enjoy ₹500 Off Your First Milestone Hamper
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#FAF6F0]/85 mt-2 leading-relaxed">
                Subscribe to our seasonal gazette for complimentary calligraphy upgrades, festive codes, and private artisan invitations.
              </p>
            </div>

            <div className="w-full md:w-auto z-10">
              {subscribed ? (
                <div className="p-4 rounded-full bg-white/10 backdrop-blur-md text-[#ffdea6] text-xs font-semibold px-6 border border-[#ffdea6]/30 animate-fade-in text-center">
                  ✨ Welcome to Decorara! Use code <span className="underline font-bold">WELCOME500</span> at checkout.
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center gap-2.5">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full sm:w-72 px-5 py-3 rounded-full bg-white text-[#263328] font-sans text-xs placeholder:text-[#747872] focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-7 py-3 rounded-full bg-[#C0725A] hover:bg-[#A35842] text-white font-sans text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer shadow-md"
                  >
                    Claim Offer
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION R: FOOTER */}
      <footer className="w-full bg-[#263328] text-white pt-16 pb-12 border-t border-[#3C4A3E]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-[#3C4A3E]">
            {/* Col 1: Brand (4 cols) */}
            <div className="lg:col-span-4 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span className="font-serif text-3xl font-normal text-white">
                  Decorara
                </span>
                <Flower2 className="w-6 h-6 text-[#ffdea6]" />
              </div>
              <p className="font-serif text-sm italic text-[#ffdea6]">
                "Gifts that make a house feel like home."
              </p>
              <p className="font-sans text-xs text-[#FAF6F0]/75 max-w-sm pt-2 leading-relaxed">
                Harmonizing generational Indian craftsmanship with contemporary restraint. Every hamper is hand-assembled with rare botanical preserves, raw terracotta, and hand-beaten brass keepsakes.
              </p>
            </div>

            {/* Col 2: Categories (2 cols) */}
            <div className="lg:col-span-2 flex flex-col gap-3">
              <h4 className="font-serif text-lg text-white">Curations</h4>
              <div className="flex flex-col gap-2 text-xs font-sans text-[#FAF6F0]/75">
                <a href="#gift-hampers" className="hover:text-[#ffdea6] transition-colors">Festive Hampers</a>
                <a href="#gift-hampers" className="hover:text-[#ffdea6] transition-colors">Housewarming Trays</a>
                <a href="#gift-hampers" className="hover:text-[#ffdea6] transition-colors">Wedding Keepsakes</a>
                <a href="#home-decor" className="hover:text-[#ffdea6] transition-colors">Brass Tableware</a>
                <a href="#home-decor" className="hover:text-[#ffdea6] transition-colors">Terracotta Vessels</a>
              </div>
            </div>

            {/* Col 3: Bespoke (2 cols) */}
            <div className="lg:col-span-2 flex flex-col gap-3">
              <h4 className="font-serif text-lg text-white">Bespoke</h4>
              <div className="flex flex-col gap-2 text-xs font-sans text-[#FAF6F0]/75">
                <a href="#custom-hamper" className="hover:text-[#ffdea6] transition-colors">Custom Hamper Studio</a>
                <a href="#ai-gift-finder" className="hover:text-[#ffdea6] transition-colors">AI Gift Finder</a>
                <a href="#order-inquiry" className="hover:text-[#ffdea6] transition-colors">Corporate Suiting</a>
                <a href="#testimonials" className="hover:text-[#ffdea6] transition-colors">Patron Stories</a>
                <a href="#faq" className="hover:text-[#ffdea6] transition-colors">Delivery FAQs</a>
              </div>
            </div>

            {/* Col 4: Private Concierge Desk (4 cols) */}
            <div className="lg:col-span-4 flex flex-col gap-3">
              <h4 className="font-serif text-lg text-white">Private Concierge</h4>
              <div className="flex flex-col gap-2.5 text-xs font-sans text-[#FAF6F0]/75">
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#ffdea6] shrink-0" />
                  <span>{BRAND.phone} / {BRAND.phoneDisplay}</span>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#ffdea6] shrink-0" />
                  <span>{BRAND.email}</span>
                </p>
                <p className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#ffdea6] shrink-0 mt-0.5" />
                  <span>{BRAND.address}</span>
                </p>
              </div>

              <div className="pt-2">
                <span className="font-sans text-[11px] text-[#ffdea6] uppercase tracking-wider block font-semibold mb-1">
                  Atelier Hours
                </span>
                <span className="text-xs text-[#FAF6F0]/70">
                  Monday – Saturday: 10:00 AM – 8:00 PM IST
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Bar: Badges & Copyright */}
          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-sans text-[#FAF6F0]/70">
            <div className="flex items-center gap-6 flex-wrap justify-center">
              <span className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-[#ffdea6]" />
                <span>SSL Encrypted Checkout</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CreditCard className="w-3.5 h-3.5 text-[#ffdea6]" />
                <span>Razorpay • UPI • Amex • Visa</span>
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#ffdea6]" />
                <span>Damage-Free Transit Guarantee</span>
              </span>
            </div>

            <p className="text-center md:text-right">
              © 2026 Decorara Lifestyle Living Pvt. Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
