/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Eye, ShoppingBag, MessageCircle } from 'lucide-react';
import { HOME_DECOR, DecorItem, WHATSAPP_NUMBER } from '../data/decoraraData.ts';
import { QuickViewData } from '../types.ts';

interface DecorGridProps {
  onAddToCart: (item: { title: string; price: number; category: string; image: string }) => void;
  onOpenQuickView: (data: QuickViewData) => void;
}

export const DecorGrid: React.FC<DecorGridProps> = ({ onAddToCart, onOpenQuickView }) => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const tabs = [
    { label: 'All Objects', key: 'all' },
    { label: 'Candles & Diffusers', key: 'candles' },
    { label: 'Vases & Planters', key: 'vases' },
    { label: 'Table Décor', key: 'table' },
    { label: 'Festive Urli & Diyas', key: 'festive' },
  ];

  const filteredItems = HOME_DECOR.filter((item) => {
    if (activeTab === 'all') return true;
    return item.categoryKey === activeTab;
  });

  const handleInquireWhatsApp = (item: DecorItem) => {
    const text = encodeURIComponent(
      `*Decorara Home Décor Inquiry*\n\n` +
      `*Piece:* ${item.name}\n` +
      `*Craft:* ${item.artisanCraft} (${item.region})\n` +
      `*Price:* ₹${item.price.toLocaleString('en-IN')}\n\n` +
      `Hello Concierge, I am interested in this home décor piece. Could you please share stock availability, dimensions, and delivery timing?`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  return (
    <section id="home-decor" className="w-full py-16 sm:py-20 bg-[#F5EFEB]/70 border-t border-[#E9CFC4]/30">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12">
        {/* Header and Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="font-sans text-xs uppercase tracking-widest text-[#C0725A] font-semibold">
              Artisanal Living Spaces
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#263328] mt-1">
              Artisanal Home Décor
            </h2>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {tabs.map((tab) => {
              const active = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-4 py-2 rounded-full font-sans text-xs sm:text-sm whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    active
                      ? 'bg-[#263328] text-white font-medium shadow-sm'
                      : 'bg-white text-[#434843] hover:bg-[#EBE3DB] hover:text-[#263328] border border-[#E9CFC4]/40'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* 8 Decor Objects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-3 sm:p-4 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between border border-[#E9CFC4]/40 group"
            >
              <div>
                {/* Square Image Box */}
                <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-[#F5EFEB] mb-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Quick View Button */}
                  <button
                    onClick={() =>
                      onOpenQuickView({
                        title: item.name,
                        price: item.price,
                        desc: item.longDesc,
                        image: item.image,
                        craft: item.artisanCraft,
                        region: item.region
                      })
                    }
                    className="absolute inset-0 bg-[#263328]/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300 text-white font-sans text-xs gap-1.5 cursor-pointer backdrop-blur-[2px]"
                  >
                    <Eye className="w-4 h-4" />
                    <span>Quick View</span>
                  </button>
                </div>

                {/* Guild Origin */}
                <div className="flex items-center justify-between text-[11px] mb-1">
                  <span className="font-sans font-semibold uppercase tracking-wider text-[#C0725A]">
                    {item.artisanCraft}
                  </span>
                  <span className="text-[#747872]">{item.region}</span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-lg sm:text-xl text-[#263328] group-hover:text-[#C0725A] transition-colors leading-snug">
                  {item.name}
                </h3>
                <p className="font-sans text-xs sm:text-[13px] text-[#5E665F] line-clamp-1 mt-1">
                  {item.shortDesc}
                </p>
              </div>

              {/* Price & Actions */}
              <div className="pt-4 flex items-center justify-between border-t border-[#F5EFEB] mt-3">
                <span className="font-serif text-xl sm:text-2xl text-[#263328] font-normal">
                  ₹{item.price.toLocaleString('en-IN')}
                </span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() =>
                      onAddToCart({
                        title: item.name,
                        price: item.price,
                        category: 'Home Décor',
                        image: item.image
                      })
                    }
                    className="p-2 rounded-xl bg-[#F5EFEB] hover:bg-[#EBE3DB] text-[#263328] transition-all cursor-pointer border border-[#E9CFC4]/40"
                    title="Add to Enquiry Cart"
                  >
                    <ShoppingBag className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => handleInquireWhatsApp(item)}
                    className="px-3.5 py-2 rounded-xl bg-[#C0725A] hover:bg-[#A35842] text-white font-sans text-xs font-medium flex items-center gap-1 transition-all cursor-pointer shadow-xs"
                    title="Inquire via WhatsApp"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Inquire</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
