/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Star, ShoppingBag, MessageCircle, Eye } from 'lucide-react';
import { HAMPERS, Hamper, WHATSAPP_NUMBER } from '../data/decoraraData.ts';
import { QuickViewData } from '../types.ts';

interface HampersGridProps {
  selectedFilter: string;
  onFilterChange: (filter: string) => void;
  onAddToCart: (hamper: Hamper) => void;
  onOrderProduct: (hamper: Hamper) => void;
  onOpenQuickView: (data: QuickViewData) => void;
}

export const HampersGrid: React.FC<HampersGridProps> = ({
  selectedFilter,
  onFilterChange,
  onAddToCart,
  onOrderProduct,
  onOpenQuickView,
}) => {
  const filterTabs = [
    { label: 'All Hampers', value: 'all' },
    { label: 'Festive', value: 'festive' },
    { label: 'Wedding', value: 'wedding' },
    { label: 'Birthday', value: 'birthday' },
    { label: 'Corporate', value: 'corporate' },
    { label: 'Under ₹1,000', value: 'under-1000' },
    { label: 'Under ₹2,500', value: 'under-2500' },
  ];

  const filteredHampers = HAMPERS.filter((hamper) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'under-1000') return hamper.price <= 1000;
    if (selectedFilter === 'under-2500') return hamper.price <= 2500;
    
    const catLower = hamper.category.toLowerCase();
    const tagMatches = hamper.tags.some(t => t.toLowerCase().includes(selectedFilter.toLowerCase()));
    return catLower.includes(selectedFilter.toLowerCase()) || tagMatches;
  });

  const handleWhatsAppQuickOrder = (hamper: Hamper) => {
    const message = encodeURIComponent(
      `*Decorara Hamper Inquiry*\n\n` +
      `*Product:* ${hamper.name}\n` +
      `*Price:* ₹${hamper.price.toLocaleString('en-IN')}\n\n` +
      `Hello Concierge, I would like to order or customize this hamper. Could you please share dispatch timelines and wrapping details?`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <section id="gift-hampers" className="w-full py-16 sm:py-20 bg-[#FAF6F0]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12">
        {/* Header & Filter Chips */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div>
            <span className="font-sans text-xs uppercase tracking-widest text-[#C0725A] font-semibold">
              Artisanal Signatures
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#263328] mt-1">
              Featured Gift Hampers
            </h2>
          </div>

          {/* Filter Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {filterTabs.map((tab) => {
              const active = selectedFilter === tab.value;
              return (
                <button
                  key={tab.value}
                  onClick={() => onFilterChange(tab.value)}
                  className={`px-4 py-2 rounded-full font-sans text-xs sm:text-sm whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    active
                      ? 'bg-[#263328] text-white font-medium shadow-sm'
                      : 'bg-[#F5EFEB] text-[#434843] hover:bg-[#EBE3DB] hover:text-[#263328] border border-[#E9CFC4]/40'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Hampers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {filteredHampers.map((hamper) => (
            <div
              key={hamper.id}
              className="group bg-white rounded-2xl p-3 sm:p-4 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between border border-[#E9CFC4]/40"
            >
              <div>
                {/* Image Container */}
                <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-[#F5EFEB] mb-3">
                  <img
                    src={hamper.image}
                    alt={hamper.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {hamper.badge && (
                    <span className="absolute top-3 left-3 bg-[#C0725A] text-white px-2.5 py-0.5 rounded-full font-sans text-[10px] font-semibold uppercase tracking-wider shadow-xs">
                      {hamper.badge}
                    </span>
                  )}
                  {/* Quick View Button on Hover */}
                  <button
                    onClick={() =>
                      onOpenQuickView({
                        title: hamper.name,
                        price: hamper.price,
                        desc: hamper.longDescription,
                        image: hamper.image,
                        craft: 'Handcrafted Atelier Curations',
                        region: 'Pan-India Artisans'
                      })
                    }
                    className="absolute inset-0 bg-[#263328]/35 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 text-white font-sans text-xs gap-1.5 cursor-pointer backdrop-blur-[2px]"
                  >
                    <Eye className="w-4 h-4" />
                    <span>Quick View</span>
                  </button>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 text-[#B8975A] mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 fill-[#B8975A] text-[#B8975A]"
                    />
                  ))}
                  <span className="font-sans text-[11px] text-[#5E665F] ml-1">
                    ({hamper.reviewsCount})
                  </span>
                </div>

                {/* Title & Short Description */}
                <h3 className="font-serif text-lg sm:text-xl text-[#263328] group-hover:text-[#C0725A] transition-colors leading-snug">
                  {hamper.name}
                </h3>
                <p className="font-sans text-xs sm:text-[13px] text-[#5E665F] line-clamp-2 mt-1.5 leading-relaxed">
                  {hamper.description}
                </p>
              </div>

              {/* Price & Actions */}
              <div className="pt-4 flex flex-col gap-2.5 border-t border-[#F5EFEB] mt-3">
                <div className="flex items-baseline justify-between">
                  <div className="flex items-baseline gap-2">
                    <span className="font-serif text-xl sm:text-2xl text-[#263328] font-medium">
                      ₹{hamper.price.toLocaleString('en-IN')}
                    </span>
                    {hamper.originalPrice && (
                      <span className="font-sans text-xs text-[#747872] line-through">
                        ₹{hamper.originalPrice.toLocaleString('en-IN')}
                      </span>
                    )}
                  </div>
                  <span className="font-sans text-[11px] text-[#C0725A] font-medium">
                    Artisanal Wrap
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => onAddToCart(hamper)}
                    className="px-3 py-2 rounded-xl bg-[#F5EFEB] hover:bg-[#EBE3DB] text-[#263328] font-sans text-xs font-medium flex items-center justify-center gap-1.5 transition-all cursor-pointer border border-[#E9CFC4]/40"
                    title="Add to Enquiry Cart"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Cart</span>
                  </button>

                  <button
                    onClick={() => handleWhatsAppQuickOrder(hamper)}
                    className="px-3 py-2 rounded-xl bg-[#C0725A] hover:bg-[#A35842] text-white font-sans text-xs font-medium flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-xs"
                    title="Order via WhatsApp"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Order</span>
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
