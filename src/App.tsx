/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { ShopByOccasion } from './components/ShopByOccasion.tsx';
import { HampersGrid } from './components/HampersGrid.tsx';
import { DecorGrid } from './components/DecorGrid.tsx';
import { AiGiftFinder } from './components/AiGiftFinder.tsx';
import { CustomHamperStudio } from './components/CustomHamperStudio.tsx';
import { OrderForm } from './components/OrderForm.tsx';
import { TestimonialsAndWhy } from './components/TestimonialsAndWhy.tsx';
import { AboutAndFaq } from './components/AboutAndFaq.tsx';
import { InstagramAndFooter } from './components/InstagramAndFooter.tsx';
import { CartDrawer } from './components/CartDrawer.tsx';
import { QuickViewModal } from './components/QuickViewModal.tsx';
import { AiChatBubble } from './components/AiChatBubble.tsx';
import { CartItem, QuickViewData } from './types.ts';
import { Hamper } from './data/decoraraData.ts';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([
    {
      id: 'init-1',
      title: 'Royal Diwali Hamper',
      price: 3499,
      category: 'Festive',
      quantity: 1,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD0OVZeWJmb4u8WNBtAehQU-TVaDesNRv5ABSQDLqK87MmJqlxXHClE9i6lDhIyzCKCPgJI_q8M6QwTwWg302z6JocgGNlqTnkPs0jmAitvrqiZOuWO_97Vf3Q4aLWkhwyE1vQh11AtWj27NGmnbmOzoO_5s_oG8KDahTT3p-xPgulbSszHicJQ_dAfx3nhbYRJnBVODeQ22CBr3030flcSS3yRgEO5HgmDTrBNZScRVzXQvHyxLafRew'
    }
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedHamperFilter, setSelectedHamperFilter] = useState('all');
  const [quickViewData, setQuickViewData] = useState<QuickViewData | null>(null);
  const [prefilledOrderProduct, setPrefilledOrderProduct] = useState('');

  // Cart Handlers
  const handleAddToCart = (item: { title: string; price: number; category: string; image?: string }) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.title === item.title);
      if (existing) {
        return prev.map((i) =>
          i.title === item.title ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [
        ...prev,
        {
          id: Date.now().toString(),
          title: item.title,
          price: item.price,
          category: item.category,
          quantity: 1,
          image: item.image
        }
      ];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null)
    );
  };

  const handleRemoveItem = (id: string) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  // Occasion filter triggering
  const handleSelectOccasion = (tag: string) => {
    setSelectedHamperFilter(tag.toLowerCase());
    const el = document.getElementById('gift-hampers');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOrderProduct = (hamper: Hamper) => {
    setPrefilledOrderProduct(`${hamper.name} (₹${hamper.price.toLocaleString('en-IN')})`);
  };

  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#FAF6F0] font-sans antialiased text-[#263328] selection:bg-[#E9CFC4] selection:text-[#263328]">
      {/* 1. NAVBAR (Sticky + Announcement Bar) */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenChat={() => {
          // Trigger floating chat
          const chatBtn = document.querySelector('button[aria-label="Open AI Gifting Stylist Chat"]') as HTMLButtonElement;
          if (chatBtn) chatBtn.click();
        }}
      />

      {/* Main Content Area */}
      <main className="pt-[110px]">
        {/* 2. HERO SECTION */}
        <Hero />

        {/* 3. SHOP BY OCCASION */}
        <ShopByOccasion onSelectOccasion={handleSelectOccasion} />

        {/* 4. FEATURED GIFT HAMPERS */}
        <HampersGrid
          selectedFilter={selectedHamperFilter}
          onFilterChange={setSelectedHamperFilter}
          onAddToCart={(hamper) =>
            handleAddToCart({
              title: hamper.name,
              price: hamper.price,
              category: hamper.category,
              image: hamper.image
            })
          }
          onOrderProduct={handleOrderProduct}
          onOpenQuickView={setQuickViewData}
        />

        {/* 5. HOME DÉCOR COLLECTION */}
        <DecorGrid
          onAddToCart={handleAddToCart}
          onOpenQuickView={setQuickViewData}
        />

        {/* 6. AI GIFT FINDER WIZARD */}
        <AiGiftFinder onAddToCart={handleAddToCart} />

        {/* 7. CUSTOM HAMPER STUDIO */}
        <CustomHamperStudio />

        {/* 8. PLACE ORDER FORM & WHATSAPP BANNER */}
        <OrderForm prefilledProduct={prefilledOrderProduct} />

        {/* 9. WHY CHOOSE US & CUSTOMER REVIEWS */}
        <TestimonialsAndWhy />

        {/* 10. ABOUT US STORY & FAQS */}
        <AboutAndFaq />

        {/* 11. INSTAGRAM GALLERY & NEWSLETTER & FOOTER */}
        <InstagramAndFooter />
      </main>

      {/* 12. SLIDE-OVER ENQUIRY CART DRAWER */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* 13. QUICK VIEW MODAL */}
      <QuickViewModal
        data={quickViewData}
        onClose={() => setQuickViewData(null)}
        onAddToCart={handleAddToCart}
      />

      {/* 14. FLOATING AI CHAT ASSISTANT & PERSISTENT WHATSAPP BUTTON */}
      <AiChatBubble />
    </div>
  );
}
