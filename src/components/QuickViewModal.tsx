/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { X, ShoppingBag, MessageCircle, MapPin, Sparkles } from 'lucide-react';
import { QuickViewData } from '../types.ts';
import { WHATSAPP_NUMBER } from '../data/decoraraData.ts';

interface QuickViewModalProps {
  data: QuickViewData | null;
  onClose: () => void;
  onAddToCart: (item: { title: string; price: number; category: string; image: string }) => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({ data, onClose, onAddToCart }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!data) return null;

  const handleInquireWhatsApp = () => {
    const text = encodeURIComponent(
      `*Decorara Quick View Inquiry*\n\n` +
      `*Item:* ${data.title}\n` +
      `*Price:* ₹${data.price.toLocaleString('en-IN')}\n\n` +
      `Hello Concierge, I would like to inquire about this piece and check customization options!`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#263328]/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
      <div
        className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative flex flex-col md:flex-row gap-6 sm:gap-8 border border-[#E9CFC4]/50 animate-scale"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#FAF6F0] hover:bg-[#F5EFEB] flex items-center justify-center text-[#747872] hover:text-[#263328] transition-all cursor-pointer z-10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Product Image */}
        <div className="w-full md:w-1/2 aspect-square rounded-2xl overflow-hidden bg-[#F5EFEB] border border-[#E9CFC4]/40 shrink-0">
          <img
            src={data.image}
            alt={data.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Details & CTAs */}
        <div className="w-full md:w-1/2 flex flex-col justify-between">
          <div>
            {data.craft && (
              <div className="flex items-center gap-1.5 text-xs text-[#C0725A] font-semibold uppercase tracking-wider mb-1">
                <Sparkles className="w-3.5 h-3.5 text-[#B8975A]" />
                <span>{data.craft}</span>
              </div>
            )}

            <h3 className="font-serif text-2xl sm:text-3xl text-[#263328] leading-tight mt-1">
              {data.title}
            </h3>

            {data.region && (
              <p className="flex items-center gap-1 text-xs text-[#5E665F] mt-1 font-sans">
                <MapPin className="w-3.5 h-3.5 text-[#747872]" />
                <span>{data.region}</span>
              </p>
            )}

            <span className="font-serif text-2xl text-[#263328] font-normal block my-3">
              ₹{data.price.toLocaleString('en-IN')}
            </span>

            <p className="font-sans text-xs sm:text-sm text-[#5E665F] leading-relaxed">
              {data.desc}
            </p>
          </div>

          <div className="pt-6 flex flex-col gap-2.5 border-t border-[#F5EFEB] mt-4">
            <button
              onClick={() => {
                onAddToCart({
                  title: data.title,
                  price: data.price,
                  category: 'Curated Item',
                  image: data.image
                });
                onClose();
              }}
              className="w-full py-2.5 rounded-xl bg-[#FAF6F0] hover:bg-[#F5EFEB] text-[#263328] border border-[#E9CFC4]/60 font-sans text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Add to Cart</span>
            </button>

            <button
              onClick={handleInquireWhatsApp}
              className="w-full py-2.5 rounded-xl bg-[#C0725A] hover:bg-[#A35842] text-white font-sans text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Inquire on WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
