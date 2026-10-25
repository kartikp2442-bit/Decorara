/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Check, Plus, Send, X, Sparkles, Feather } from 'lucide-react';
import { BASE_BOXES, STUDIO_ITEMS, CustomBox, StudioItem, WHATSAPP_NUMBER } from '../data/decoraraData.ts';

export const CustomHamperStudio: React.FC = () => {
  const [selectedBox, setSelectedBox] = useState<CustomBox>(BASE_BOXES[1]); // Royal Velvet default
  const [selectedItems, setSelectedItems] = useState<StudioItem[]>([
    STUDIO_ITEMS[0],
    STUDIO_ITEMS[1],
    STUDIO_ITEMS[2]
  ]);
  const [giftNote, setGiftNote] = useState<string>(
    'May your home always overflow with warmth, light, and fragrant memories. With all our love.'
  );

  const toggleItem = (item: StudioItem) => {
    const exists = selectedItems.some((i) => i.id === item.id);
    if (exists) {
      setSelectedItems(selectedItems.filter((i) => i.id !== item.id));
    } else {
      if (selectedItems.length >= 5) {
        alert('You can select a maximum of 5 artisanal treasures per trunk.');
        return;
      }
      setSelectedItems([...selectedItems, item]);
    }
  };

  const removeItem = (id: string) => {
    setSelectedItems(selectedItems.filter((i) => i.id !== id));
  };

  const itemsTotal = selectedItems.reduce((acc, curr) => acc + curr.price, 0);
  const grandTotal = selectedBox.price + itemsTotal;

  const handleSendToWhatsApp = () => {
    if (selectedItems.length < 3) {
      alert('Please select at least 3 curated items to build a bespoke trunk.');
      return;
    }

    const itemsSummary = selectedItems
      .map((item, idx) => `${idx + 1}. ${item.name} (₹${item.price.toLocaleString('en-IN')})`)
      .join('\n');

    const noteText = giftNote.trim() || 'No custom note provided';

    const message = encodeURIComponent(
      `*Decorara Bespoke Custom Hamper*\n\n` +
      `*Selected Base Box:*\n${selectedBox.name} (₹${selectedBox.price.toLocaleString('en-IN')})\n\n` +
      `*Selected Artisanal Treasures (${selectedItems.length}/5):*\n${itemsSummary}\n\n` +
      `*Complimentary Calligraphy Note:*\n"${noteText}"\n\n` +
      `*Estimated Total:* ₹${grandTotal.toLocaleString('en-IN')}\n\n` +
      `Hello Concierge, please verify item availability, wax seal color options, and share the invoice link!`
    );

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <section id="custom-hamper" className="w-full py-16 sm:py-24 bg-[#F5EFEB]/70 border-t border-[#E9CFC4]/40">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12">
        {/* Section Title */}
        <div className="max-w-3xl mb-12">
          <span className="font-sans text-xs uppercase tracking-widest text-[#C0725A] font-semibold">
            Atelier Workshop
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#263328] mt-1">
            Custom Hamper Studio
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#5E665F] mt-2">
            Become the curator. Select a bespoke foundation, layer handpicked artisanal keepsakes, and preview your calligraphed deckle-edge note in real time.
          </p>
        </div>

        {/* 12-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Builder Controls (8 cols) */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            {/* STEP 1: BASE BOX */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-[#E9CFC4]/50">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2.5">
                  <span className="w-6 h-6 rounded-full bg-[#263328] text-white font-sans text-xs flex items-center justify-center font-bold">
                    1
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl text-[#263328] font-normal">
                    Choose Your Base Box
                  </h3>
                </div>
                <span className="font-sans text-xs text-[#5E665F]">Includes silk ribbon &amp; botanicals</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {BASE_BOXES.map((box) => {
                  const isSelected = selectedBox.id === box.id;
                  return (
                    <button
                      key={box.id}
                      onClick={() => setSelectedBox(box)}
                      className={`text-left p-3.5 rounded-2xl transition-all cursor-pointer flex flex-col gap-2.5 border ${
                        isSelected
                          ? 'bg-[#FAF6F0] border-[#C0725A] ring-2 ring-[#C0725A]/40 shadow-xs'
                          : 'bg-[#F5EFEB] border-transparent hover:bg-[#EBE3DB]'
                      }`}
                    >
                      <div className="w-full aspect-video rounded-xl overflow-hidden bg-[#EBE3DB]">
                        <img src={box.image} alt={box.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="font-sans text-xs sm:text-sm font-semibold text-[#263328]">
                            {box.name}
                          </span>
                          <span className="font-serif text-sm font-medium text-[#C0725A]">
                            +₹{box.price}
                          </span>
                        </div>
                        <p className="font-sans text-[11px] text-[#5E665F] mt-1 leading-snug">
                          {box.description}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* STEP 2: SELECT TREASURES */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-[#E9CFC4]/50">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-5">
                <div className="flex items-center gap-2.5">
                  <span className="w-6 h-6 rounded-full bg-[#263328] text-white font-sans text-xs flex items-center justify-center font-bold">
                    2
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl text-[#263328] font-normal">
                    Add Artisanal Treasures
                  </h3>
                </div>
                <span className="font-sans text-xs font-semibold text-[#C0725A]">
                  {selectedItems.length} of 5 selected (minimum 3)
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5">
                {STUDIO_ITEMS.map((item) => {
                  const isChecked = selectedItems.some((i) => i.id === item.id);
                  return (
                    <button
                      key={item.id}
                      onClick={() => toggleItem(item)}
                      className={`text-left p-3 rounded-2xl transition-all cursor-pointer flex flex-col justify-between border ${
                        isChecked
                          ? 'bg-[#FAF6F0] border-[#C0725A] ring-1 ring-[#C0725A]/30 shadow-xs'
                          : 'bg-[#F5EFEB] border-transparent hover:bg-[#EBE3DB]'
                      }`}
                    >
                      <div className="w-full aspect-square rounded-xl overflow-hidden bg-[#EBE3DB] mb-2.5">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <span className="font-sans text-xs sm:text-[13px] font-semibold text-[#263328] line-clamp-1">
                          {item.name}
                        </span>
                        <div className="flex items-center justify-between mt-1">
                          <span className="font-serif text-sm font-medium text-[#C0725A]">
                            ₹{item.price}
                          </span>
                          <span
                            className={`w-5 h-5 rounded-full flex items-center justify-center ${
                              isChecked ? 'bg-[#C0725A] text-white' : 'bg-white text-[#747872] border border-[#E9CFC4]'
                            }`}
                          >
                            {isChecked ? <Check className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
                          </span>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* STEP 3: COMPLIMENTARY HANDWRITTEN NOTE */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-[#E9CFC4]/50">
              <div className="flex items-center gap-2.5 mb-2">
                <span className="w-6 h-6 rounded-full bg-[#263328] text-white font-sans text-xs flex items-center justify-center font-bold">
                  3
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-[#263328] font-normal">
                  Complimentary Handwritten Note
                </h3>
              </div>
              <p className="font-sans text-xs sm:text-sm text-[#5E665F] mb-4">
                Inscribed by hand on cotton deckle-edge paper and sealed with warm terracotta wax and botanical sprig.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <textarea
                  value={giftNote}
                  onChange={(e) => setGiftNote(e.target.value)}
                  placeholder="Enter your personal message here..."
                  rows={4}
                  className="w-full p-3.5 bg-[#FAF6F0] border border-[#E9CFC4] rounded-2xl font-sans text-xs sm:text-sm text-[#263328] placeholder:text-[#747872] focus:outline-none focus:ring-1 focus:ring-[#C0725A] resize-none"
                />

                {/* Live Calligraphy Card Preview */}
                <div className="p-4 rounded-2xl bg-[#FAF6F0] border border-amber-200/60 shadow-inner flex flex-col justify-between min-h-[140px] relative">
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-xs italic text-[#263328] flex items-center gap-1">
                      <Feather className="w-3.5 h-3.5 text-[#B8975A]" />
                      <span>Decorara Calligraphy Desk</span>
                    </span>
                    <span className="w-3.5 h-3.5 rounded-full bg-[#C0725A] shadow-xs"></span>
                  </div>
                  <p className="font-serif text-sm italic text-[#263328] leading-relaxed my-2 line-clamp-3">
                    "{giftNote.trim() || 'Your personal gift sentiment...'}"
                  </p>
                  <span className="font-sans text-[10px] uppercase tracking-wider text-[#747872]">
                    Gold Foil Crested Card • Hand-sealed
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Studio Summary Tray (4 cols sticky) */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 bg-white rounded-3xl p-6 sm:p-7 shadow-xl border border-[#E9CFC4]/60 flex flex-col gap-5">
              <div>
                <span className="font-sans text-[11px] uppercase tracking-widest text-[#C0725A] font-bold">
                  Curator Tray
                </span>
                <h3 className="font-serif text-2xl text-[#263328] mt-0.5">Your Custom Trunk</h3>
              </div>

              {/* Selected Box Base */}
              <div className="p-3.5 rounded-2xl bg-[#FAF6F0] border border-[#E9CFC4]/50 flex items-center justify-between">
                <div>
                  <span className="font-sans text-[10px] uppercase tracking-wider text-[#5E665F]">
                    Selected Base Box
                  </span>
                  <p className="font-sans text-sm font-semibold text-[#263328]">
                    {selectedBox.name}
                  </p>
                </div>
                <span className="font-serif text-base font-semibold text-[#263328]">
                  ₹{selectedBox.price}
                </span>
              </div>

              {/* Selected Items List */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-sans text-xs font-semibold text-[#263328]">
                    Selected Treasures ({selectedItems.length})
                  </span>
                  {selectedItems.length < 3 && (
                    <span className="font-sans text-[11px] text-[#C0725A]">
                      Select {3 - selectedItems.length} more
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-2 max-h-52 overflow-y-auto pr-1">
                  {selectedItems.length === 0 ? (
                    <p className="font-sans text-xs text-[#747872] italic py-2">
                      No items added yet. Click items on the left to include them.
                    </p>
                  ) : (
                    selectedItems.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center justify-between text-xs py-1.5 border-b border-[#F5EFEB]"
                      >
                        <span className="text-[#263328] truncate pr-2 font-medium">
                          {item.name}
                        </span>
                        <div className="flex items-center gap-2 shrink-0">
                          <span className="font-serif text-xs font-semibold text-[#263328]">
                            ₹{item.price}
                          </span>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-[#747872] hover:text-[#C0725A] p-0.5 cursor-pointer"
                            title="Remove item"
                          >
                            <X className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>

              <hr className="border-[#F5EFEB]" />

              {/* Price Breakdown */}
              <div className="flex flex-col gap-2 text-xs text-[#5E665F]">
                <div className="flex items-center justify-between">
                  <span>Artisanal Box Base</span>
                  <span className="text-[#263328]">₹{selectedBox.price}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Curated Treasures Subtotal</span>
                  <span className="text-[#263328]">₹{itemsTotal}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Handwritten Deckle Card</span>
                  <span className="text-[#B8975A] font-semibold">Free (₹250 value)</span>
                </div>
                <div className="flex items-baseline justify-between pt-2 border-t border-[#F5EFEB]">
                  <span className="font-serif text-lg text-[#263328] font-medium">Hamper Total</span>
                  <span className="font-serif text-2xl text-[#263328] font-semibold">
                    ₹{grandTotal.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={handleSendToWhatsApp}
                className="w-full py-3.5 bg-[#C0725A] hover:bg-[#A35842] text-white rounded-full font-sans text-xs font-semibold tracking-wider uppercase shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Send Hamper to WhatsApp</span>
              </button>

              <p className="font-sans text-[11px] text-center text-[#5E665F] leading-relaxed">
                Direct concierge booking. We will send high-resolution photos of your assembled trunk and ribbon options prior to invoicing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
