/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { OCCASIONS, Occasion } from '../data/decoraraData.ts';

interface ShopByOccasionProps {
  onSelectOccasion: (tag: string) => void;
}

export const ShopByOccasion: React.FC<ShopByOccasionProps> = ({ onSelectOccasion }) => {
  return (
    <section id="occasions" className="w-full py-16 sm:py-20 bg-[#F5EFEB]/70 border-y border-[#E9CFC4]/30">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="font-sans text-xs uppercase tracking-widest text-[#C0725A] font-semibold">
              Curations by Moment
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#263328] mt-1">
              Shop By Occasion
            </h2>
          </div>
          <p className="font-sans text-sm sm:text-base text-[#5E665F] max-w-md">
            Every celebration has its own cadence. Filter our craft collections by the milestone that calls for unhurried grace.
          </p>
        </div>

        {/* 6 Occasion Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {OCCASIONS.map((occ: Occasion) => (
            <button
              key={occ.id}
              onClick={() => onSelectOccasion(occ.tag)}
              className="group text-left cursor-pointer rounded-2xl bg-white p-2.5 sm:p-3 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col gap-2 border border-[#E9CFC4]/40"
            >
              <div className="w-full aspect-[4/5] rounded-xl overflow-hidden bg-[#EBE3DB] relative">
                <img
                  src={occ.image}
                  alt={`${occ.name} gift curation`}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#263328]/20 group-hover:bg-[#263328]/0 transition-colors"></div>
              </div>
              <div className="px-1 pb-1">
                <span className="font-serif text-base sm:text-lg text-[#263328] group-hover:text-[#C0725A] transition-colors block leading-snug">
                  {occ.name}
                </span>
                <span className="font-sans text-xs text-[#5E665F] block mt-0.5">
                  {occ.count}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
