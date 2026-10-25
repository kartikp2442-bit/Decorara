/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { X, ShoppingBag, Plus, Minus, Trash2, MessageCircle, Gift } from 'lucide-react';
import { CartItem } from '../types.ts';
import { WHATSAPP_NUMBER } from '../data/decoraraData.ts';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  if (!isOpen) return null;

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleCheckoutWhatsApp = () => {
    if (items.length === 0) return;

    const itemsSummary = items
      .map((item, idx) => `${idx + 1}. ${item.title} (${item.quantity}x) = ₹${(item.price * item.quantity).toLocaleString('en-IN')}`)
      .join('\n');

    const message = encodeURIComponent(
      `*Decorara Curation Cart Order Inquiry*\n\n` +
      `*Selected Items:*\n${itemsSummary}\n\n` +
      `*Estimated Subtotal:* ₹${subtotal.toLocaleString('en-IN')}\n\n` +
      `Hello Concierge, I would like to place an order for these items. Please guide me through delivery address confirmation, gift notes, and the payment link!`
    );

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 z-50 bg-[#263328]/50 backdrop-blur-xs transition-opacity animate-fade-in"
      />

      {/* Slide-over Drawer */}
      <aside
        className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-2xl flex flex-col justify-between animate-slide-left border-l border-[#E9CFC4]/50"
        aria-label="Curation Cart Drawer"
      >
        {/* Header */}
        <div className="p-6 flex items-center justify-between border-b border-[#F5EFEB]">
          <div className="flex items-center gap-2.5">
            <ShoppingBag className="w-5 h-5 text-[#C0725A]" />
            <h3 className="font-serif text-xl sm:text-2xl text-[#263328]">Your Curation Cart</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-[#747872] hover:bg-[#F5EFEB] hover:text-[#263328] transition-all cursor-pointer"
            aria-label="Close cart drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-4">
          {items.length === 0 ? (
            <div className="text-center py-16 flex flex-col items-center gap-3">
              <div className="w-16 h-16 rounded-full bg-[#FAF6F0] flex items-center justify-center text-[#747872]">
                <ShoppingBag className="w-8 h-8 text-[#C0725A]/60" />
              </div>
              <h4 className="font-serif text-xl text-[#263328]">Your cart is empty</h4>
              <p className="font-sans text-xs text-[#5E665F] max-w-xs leading-relaxed">
                Explore our artisanal gift hampers and handcrafted home décor to curate your cart.
              </p>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between text-xs text-[#5E665F] pb-1">
                <span>{items.reduce((acc, i) => acc + i.quantity, 0)} Items Added</span>
                <button
                  onClick={onClearCart}
                  className="text-[#C0725A] hover:underline cursor-pointer"
                >
                  Clear All
                </button>
              </div>

              {items.map((item) => (
                <div
                  key={item.id}
                  className="p-3.5 rounded-2xl bg-[#FAF6F0] border border-[#E9CFC4]/50 flex gap-3.5 items-center justify-between"
                >
                  {item.image && (
                    <div className="w-16 h-16 rounded-xl overflow-hidden bg-[#EBE3DB] shrink-0">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    </div>
                  )}

                  <div className="flex-1 min-w-0">
                    <span className="font-sans text-[10px] uppercase tracking-wider text-[#C0725A] font-semibold block">
                      {item.category}
                    </span>
                    <h5 className="font-serif text-sm font-medium text-[#263328] truncate">
                      {item.title}
                    </h5>
                    <span className="font-serif text-sm text-[#263328] font-semibold block mt-0.5">
                      ₹{item.price.toLocaleString('en-IN')}
                    </span>
                  </div>

                  {/* Quantity Controls & Delete */}
                  <div className="flex flex-col items-end gap-2 shrink-0">
                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="text-[#747872] hover:text-[#C0725A] p-0.5 cursor-pointer"
                      title="Remove from cart"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>

                    <div className="flex items-center gap-1.5 bg-white px-2 py-0.5 rounded-full border border-[#E9CFC4]/50">
                      <button
                        onClick={() => onUpdateQuantity(item.id, -1)}
                        className="text-[#263328] hover:text-[#C0725A] cursor-pointer"
                        title="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="font-sans text-xs font-semibold px-1 text-[#263328]">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, 1)}
                        className="text-[#263328] hover:text-[#C0725A] cursor-pointer"
                        title="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>

        {/* Footer Checkout */}
        {items.length > 0 && (
          <div className="p-6 bg-[#FAF6F0] border-t border-[#E9CFC4]/50 flex flex-col gap-3.5">
            {/* Free Gift Wrap notice */}
            <div className="p-3 rounded-xl bg-white border border-[#E9CFC4]/60 flex items-center gap-2.5 text-xs text-[#263328]">
              <Gift className="w-4 h-4 text-[#C0725A] shrink-0" />
              <span>Complimentary artisanal wrapping &amp; wax seal note included.</span>
            </div>

            <div className="flex items-baseline justify-between pt-1">
              <span className="font-sans text-xs uppercase tracking-wider text-[#5E665F]">
                Estimated Subtotal
              </span>
              <span className="font-serif text-2xl text-[#263328] font-semibold">
                ₹{subtotal.toLocaleString('en-IN')}
              </span>
            </div>

            <p className="font-sans text-[11px] text-[#5E665F]">
              Express insured courier rates calculated on delivery city upon WhatsApp confirmation.
            </p>

            <button
              onClick={handleCheckoutWhatsApp}
              className="w-full py-3.5 bg-[#C0725A] hover:bg-[#A35842] text-white rounded-full font-sans text-xs font-semibold tracking-wider uppercase shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Send Enquiry on WhatsApp</span>
            </button>
          </div>
        )}
      </aside>
    </>
  );
};
