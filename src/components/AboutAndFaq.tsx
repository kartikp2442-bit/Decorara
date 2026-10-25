/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';
import { FAQS, FaqItem } from '../data/decoraraData.ts';

export const AboutAndFaq: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string | null>(FAQS[0].id);

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section id="about" className="w-full py-16 sm:py-24 bg-[#FAF6F0]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* ABOUT US / OUR STORY (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="font-sans text-xs uppercase tracking-widest text-[#C0725A] font-semibold">
                Generational Craft
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#263328] mt-1 leading-snug">
                Modern Luxury Rooted in Craft
              </h2>
              <p className="font-sans text-sm sm:text-base text-[#5E665F] mt-4 leading-relaxed">
                Decorara began with a single conviction: celebratory gifts shouldn't feel disposable or generic. We bridge multi-generational Indian metalworkers, Khurja potters, and organic tea gardens with contemporary editorial restraint.
              </p>
              <p className="font-sans text-sm sm:text-base text-[#5E665F] mt-3 leading-relaxed">
                Every brass vessel is hammered with deliberate human touch; every box is swathed in raw cotton textures, deckle-edge calligraphy, and warm hospitality.
              </p>

              {/* Atelier photograph */}
              <div className="w-full h-48 rounded-2xl overflow-hidden mt-6 bg-[#EBE3DB] border border-[#E9CFC4]/50">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLQLfmifX_I2pEZPU89QTut8tZjmsYuUiHCYUCnOfjVbcjW2gPyljEPHq5ulhZS-rBh9nz9vrtyCPdY2q7GLY87hgY_9A-3VE9eSIVDRSLvw79rI3hCVdj-Aelu0u_c4hv3j0cOf0fa9cEP8yn415reQVWX8YhRjlQf1H8kcKuh2ETyOxQLJsnLugX7r3KZq5BOlFLtqgx4DTSY9dSNd6a9uXNlAfem7r1G2pWbp35k3GjIltm6ihIOA"
                  alt="Decorara artisan stamping gold crest onto luxury velvet hamper box"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* 3 Stats Metrics */}
            <div className="grid grid-cols-3 gap-3 pt-8">
              <div className="p-4 rounded-2xl bg-[#F5EFEB] border border-[#E9CFC4]/40 text-center">
                <span className="font-serif text-2xl sm:text-3xl text-[#C0725A] font-normal block">
                  1,000+
                </span>
                <span className="font-sans text-[11px] text-[#5E665F] block mt-0.5">
                  Hampers Delivered
                </span>
              </div>
              <div className="p-4 rounded-2xl bg-[#F5EFEB] border border-[#E9CFC4]/40 text-center">
                <span className="font-serif text-2xl sm:text-3xl text-[#C0725A] font-normal block">
                  150+
                </span>
                <span className="font-sans text-[11px] text-[#5E665F] block mt-0.5">
                  Village Artisans
                </span>
              </div>
              <div className="p-4 rounded-2xl bg-[#F5EFEB] border border-[#E9CFC4]/40 text-center">
                <span className="font-serif text-2xl sm:text-3xl text-[#C0725A] font-normal block">
                  4.9★
                </span>
                <span className="font-sans text-[11px] text-[#5E665F] block mt-0.5">
                  Patron Rating
                </span>
              </div>
            </div>
          </div>

          {/* FAQ ACCORDION (7 cols) */}
          <div id="faq" className="lg:col-span-7 flex flex-col gap-3">
            <div className="mb-3">
              <span className="font-sans text-xs uppercase tracking-widest text-[#C0725A] font-semibold">
                Transparent Hospitality
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#263328] mt-0.5">
                Frequently Asked Inquiries
              </h3>
            </div>

            <div className="flex flex-col gap-3">
              {FAQS.map((faq: FaqItem) => {
                const isOpen = openFaqId === faq.id;
                return (
                  <div
                    key={faq.id}
                    className="rounded-2xl bg-[#F5EFEB] border border-[#E9CFC4]/50 overflow-hidden transition-all duration-200"
                  >
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full p-4 sm:p-5 flex items-center justify-between text-left font-serif text-base sm:text-lg text-[#263328] hover:text-[#C0725A] transition-colors cursor-pointer"
                    >
                      <span className="pr-4">{faq.question}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-[#C0725A] shrink-0 transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-4 sm:px-5 pb-5 font-sans text-xs sm:text-sm text-[#5E665F] leading-relaxed border-t border-[#E9CFC4]/30 pt-3 animate-fade-in">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
