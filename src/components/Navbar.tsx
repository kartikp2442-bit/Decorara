/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ShoppingBag, MessageCircle, Menu, X, Sparkles, Flower2, HeartHandshake } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../data/decoraraData.ts';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenChat: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart, onOpenChat }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Section highlight
      const sections = ['home', 'occasions', 'gift-hampers', 'home-decor', 'ai-gift-finder', 'custom-hamper', 'order-inquiry', 'about', 'testimonials', 'faq'];
      const scrollPos = window.scrollY + 140;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Gift Hampers', href: '#gift-hampers', id: 'gift-hampers' },
    { label: 'Home Décor', href: '#home-decor', id: 'home-decor' },
    { label: 'AI Gift Finder', href: '#ai-gift-finder', id: 'ai-gift-finder' },
    { label: 'Custom Hamper', href: '#custom-hamper', id: 'custom-hamper' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Reviews', href: '#testimonials', id: 'testimonials' },
    { label: 'Contact', href: '#order-inquiry', id: 'order-inquiry' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsAppGeneral = () => {
    const text = encodeURIComponent("Hello Decorara Concierge, I'm exploring gifts and home décor on your website and would love some assistance!");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* 1. ANNOUNCEMENT BAR */}
      <div className="bg-[#263328] text-[#ffffff] py-2 px-4 text-center text-xs tracking-wider flex items-center justify-center gap-2 sm:gap-3 transition-colors">
        <Sparkles className="w-3.5 h-3.5 text-[#ffdea6] animate-pulse" />
        <span className="font-sans font-medium text-[11px] sm:text-xs">
          Free artisanal gift wrapping on all hampers • Order on WhatsApp for quick delivery • Pan-India Courier
        </span>
        <Sparkles className="w-3.5 h-3.5 text-[#ffdea6] hidden sm:inline" />
      </div>

      {/* 2. MAIN NAVBAR */}
      <div
        className={`h-20 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF6F0]/95 backdrop-blur-md shadow-[0_4px_20px_rgba(60,74,62,0.06)]'
            : 'bg-[#FAF6F0] border-b border-[#E9CFC4]/30'
        }`}
      >
        <div className="max-w-[1400px] mx-auto h-full px-4 sm:px-8 md:px-12 flex items-center justify-between gap-4">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex flex-col group transition-transform"
          >
            <div className="flex items-center gap-1.5">
              <span className="font-serif text-2xl sm:text-3xl font-normal tracking-tight text-[#263328] group-hover:text-[#C0725A] transition-colors">
                Decorara
              </span>
              <Flower2 className="w-5 h-5 text-[#B8975A] transition-transform group-hover:rotate-45" />
            </div>
            <span className="font-sans text-[10px] tracking-widest uppercase text-[#5E665F] -mt-1">
              Curated Hampers &amp; Décor
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-1 p-1.5 bg-[#F5EFEB]/80 rounded-full px-4 border border-[#E9CFC4]/40">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`font-sans text-[13px] px-3.5 py-1.5 rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-[#263328] text-white font-medium shadow-sm'
                      : 'text-[#434843] hover:text-[#263328] hover:bg-[#FAF6F0]'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* WhatsApp Concierge Button */}
            <button
              onClick={openWhatsAppGeneral}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3C4A3E] text-white hover:bg-[#263328] text-xs font-medium tracking-wide transition-all shadow-sm cursor-pointer"
              title="Order on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 text-[#ffdea6]" />
              <span>Order on WhatsApp</span>
            </button>

            {/* Cart / Enquiry Icon */}
            <button
              onClick={onOpenCart}
              className="relative p-2.5 rounded-full text-[#263328] hover:bg-[#EBE3DB] transition-all flex items-center justify-center cursor-pointer"
              aria-label="View Enquiry Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 w-5 h-5 rounded-full bg-[#C0725A] text-white font-sans text-[10px] flex items-center justify-center font-bold shadow-sm animate-scale">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-full text-[#263328] hover:bg-[#EBE3DB] transition-all cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-down Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#FAF6F0] border-b border-[#E9CFC4]/50 shadow-xl px-6 py-6 flex flex-col gap-3 animate-fade-in">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="font-serif text-lg py-2 border-b border-[#E9CFC4]/30 text-[#263328] hover:text-[#C0725A] flex items-center justify-between"
            >
              <span>{link.label}</span>
              <span className="text-[#B8975A] text-sm">→</span>
            </a>
          ))}
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openWhatsAppGeneral();
              }}
              className="w-full py-3 rounded-full bg-[#C0725A] text-white font-sans text-sm font-medium flex items-center justify-center gap-2 shadow-md cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Order on WhatsApp</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenChat();
              }}
              className="w-full py-2.5 rounded-full bg-[#F5EFEB] text-[#263328] font-sans text-sm font-medium flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-[#B8975A]" />
              <span>Ask AI Gifting Concierge</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
