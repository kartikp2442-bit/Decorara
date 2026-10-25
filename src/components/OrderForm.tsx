/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { MessageCircle, Phone, CheckCircle2, PackageCheck, Send, Sparkles, CreditCard, Truck } from 'lucide-react';
import { WHATSAPP_NUMBER, BRAND } from '../data/decoraraData.ts';

interface OrderFormProps {
  prefilledProduct?: string;
}

export const OrderForm: React.FC<OrderFormProps> = ({ prefilledProduct = '' }) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [product, setProduct] = useState(prefilledProduct);
  const [quantity, setQuantity] = useState('1');
  const [occasion, setOccasion] = useState('Diwali & Festive');
  const [budget, setBudget] = useState('₹2,000 - ₹3,500');
  const [deliveryDate, setDeliveryDate] = useState('');
  const [address, setAddress] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Update product if prop changes
  React.useEffect(() => {
    if (prefilledProduct) {
      setProduct(prefilledProduct);
      const el = document.getElementById('order-inquiry');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, [prefilledProduct]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    // Validation
    if (!fullName.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    const cleanPhone = phone.replace(/[^0-9]/g, '');
    if (cleanPhone.length < 10) {
      setErrorMsg('Please enter a valid 10-digit phone/WhatsApp number.');
      return;
    }

    const formattedMessage = encodeURIComponent(
      `*New Decorara Milestone Order Inquiry*\n\n` +
      `*Client:* ${fullName.trim()}\n` +
      `*WhatsApp Phone:* ${phone.trim()}\n` +
      `*Email:* ${email.trim() || 'Not specified'}\n` +
      `*Occasion:* ${occasion}\n` +
      `*Selected Item:* ${product.trim() || 'Custom Gifting Consultation'}\n` +
      `*Quantity:* ${quantity}\n` +
      `*Approx. Budget:* ${budget}\n` +
      `*Target Delivery Date:* ${deliveryDate || 'As soon as possible'}\n` +
      `*Destination City & Pincode:* ${address.trim() || 'To be shared on WhatsApp'}\n\n` +
      `*Personal Note / Customization:* \n"${message.trim() || 'None'}"\n\n` +
      `Hello Decorara Concierge, I have submitted my request. Please confirm availability and send payment details!`
    );

    // Open WhatsApp
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${formattedMessage}`, '_blank');
    setSubmitted(true);
  };

  const openWhatsAppBanner = () => {
    const text = encodeURIComponent(
      `Hello Decorara Concierge, I would like to consult with a gifting stylist about custom hampers and bulk festive orders.`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  return (
    <section id="order-inquiry" className="w-full py-16 sm:py-24 bg-[#FAF6F0]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12">
        {/* SECTION 1: 4-STEP ORDERING GUIDE */}
        <div className="mb-16">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="font-sans text-xs uppercase tracking-widest text-[#C0725A] font-semibold">
              Unhurried Experience
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#263328] mt-1">
              How Ordering Works
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="p-6 rounded-3xl bg-[#F5EFEB] border border-[#E9CFC4]/40 flex flex-col gap-2.5">
              <span className="font-serif text-3xl text-[#C0725A] font-normal">01</span>
              <h4 className="font-serif text-xl text-[#263328] font-normal">Choose Your Gifts</h4>
              <p className="font-sans text-xs sm:text-sm text-[#5E665F] leading-relaxed">
                Select curated signatures, individual artisanal décor pieces, or build your own bespoke trunk.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#F5EFEB] border border-[#E9CFC4]/40 flex flex-col gap-2.5">
              <span className="font-serif text-3xl text-[#C0725A] font-normal">02</span>
              <h4 className="font-serif text-xl text-[#263328] font-normal">Share Details</h4>
              <p className="font-sans text-xs sm:text-sm text-[#5E665F] leading-relaxed">
                Provide recipient address, delivery date, calligraphy card sentiment, and packaging ribbon tone.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#F5EFEB] border border-[#E9CFC4]/40 flex flex-col gap-2.5">
              <span className="font-serif text-3xl text-[#C0725A] font-normal">03</span>
              <h4 className="font-serif text-xl text-[#263328] font-normal">Confirm &amp; Pay</h4>
              <p className="font-sans text-xs sm:text-sm text-[#5E665F] leading-relaxed">
                Our human concierge shares live photos of your packed hamper and an encrypted Razorpay/UPI link.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#F5EFEB] border border-[#E9CFC4]/40 flex flex-col gap-2.5">
              <span className="font-serif text-3xl text-[#C0725A] font-normal">04</span>
              <h4 className="font-serif text-xl text-[#263328] font-normal">We Deliver</h4>
              <p className="font-sans text-xs sm:text-sm text-[#5E665F] leading-relaxed">
                Dispatched with insured courier in impact-proof wooden frames with tracking right to their doorstep.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 2: MAIN ORDER FORM CARD */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center bg-white rounded-3xl p-6 sm:p-10 md:p-14 shadow-xl border border-[#E9CFC4]/50">
          {/* Left Editorial Narrative (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div>
              <span className="font-sans text-xs uppercase tracking-widest text-[#C0725A] font-semibold">
                Direct Concierge Booking
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-normal text-[#263328] mt-1 leading-snug">
                Let Us Craft Your Milestone Surprise
              </h3>
              <p className="font-sans text-sm sm:text-base text-[#5E665F] leading-relaxed mt-3">
                Fill in your desired gift curations. Submitting this form instantly prepares a formatted WhatsApp dispatch brief so our head stylist can assist immediately.
              </p>
            </div>

            {/* Direct phone card */}
            <div className="p-5 rounded-2xl bg-[#FAF6F0] border border-[#E9CFC4]/60 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#263328] text-white flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-[#ffdea6]" />
              </div>
              <div>
                <span className="font-sans text-[11px] uppercase tracking-wider text-[#5E665F] block">
                  Prefer to talk to a human?
                </span>
                <p className="font-serif text-lg text-[#263328] font-medium">
                  {BRAND.phoneDisplay}
                </p>
              </div>
            </div>

            {/* Trust Points */}
            <div className="flex flex-col gap-2 text-xs text-[#5E665F]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C0725A]" />
                <span>Zero obligation inquiry • Proofs shared before invoice</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C0725A]" />
                <span>Complimentary handwritten calligraphy greeting card</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C0725A]" />
                <span>All India dispatch with damage-free transit warranty</span>
              </div>
            </div>
          </div>

          {/* Right Form Fields (7 cols) */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="p-8 rounded-3xl bg-[#FAF6F0] border border-[#E9CFC4] text-center flex flex-col items-center gap-4 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-[#3C4A3E] text-white flex items-center justify-center shadow-md">
                  <PackageCheck className="w-8 h-8 text-[#ffdea6]" />
                </div>
                <h4 className="font-serif text-2xl text-[#263328]">Thank You! Order Initiated</h4>
                <p className="font-sans text-sm text-[#5E665F] max-w-md leading-relaxed">
                  Your milestone brief has been prepared for WhatsApp Concierge. If WhatsApp didn't open automatically, click the button below:
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  <button
                    onClick={() => {
                      const text = encodeURIComponent(`Hi Decorara Concierge, I'm following up on my order for ${fullName}!`);
                      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
                    }}
                    className="px-6 py-3 rounded-full bg-[#C0725A] text-white font-sans text-xs font-semibold uppercase tracking-wider shadow-md hover:bg-[#A35842] flex items-center gap-2 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Open WhatsApp Chat</span>
                  </button>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-3 rounded-full bg-white text-[#263328] border border-[#E9CFC4] font-sans text-xs font-semibold cursor-pointer"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {errorMsg && (
                  <div className="sm:col-span-2 p-3 rounded-xl bg-red-50 text-red-700 text-xs font-medium border border-red-200">
                    {errorMsg}
                  </div>
                )}

                {/* Full Name */}
                <div>
                  <label className="block font-sans text-xs font-medium text-[#263328] mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Rohini Sen"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#FAF6F0] text-[#263328] text-xs sm:text-sm border border-[#E9CFC4]/70 focus:outline-none focus:ring-1 focus:ring-[#C0725A]"
                  />
                </div>

                {/* WhatsApp Phone */}
                <div>
                  <label className="block font-sans text-xs font-medium text-[#263328] mb-1">
                    WhatsApp Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 9876543210"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#FAF6F0] text-[#263328] text-xs sm:text-sm border border-[#E9CFC4]/70 focus:outline-none focus:ring-1 focus:ring-[#C0725A]"
                  />
                </div>

                {/* Email (Optional) */}
                <div>
                  <label className="block font-sans text-xs font-medium text-[#263328] mb-1">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. rohini@example.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#FAF6F0] text-[#263328] text-xs sm:text-sm border border-[#E9CFC4]/70 focus:outline-none focus:ring-1 focus:ring-[#C0725A]"
                  />
                </div>

                {/* Milestone Occasion */}
                <div>
                  <label className="block font-sans text-xs font-medium text-[#263328] mb-1">
                    Milestone Occasion
                  </label>
                  <select
                    value={occasion}
                    onChange={(e) => setOccasion(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#FAF6F0] text-[#263328] text-xs sm:text-sm border border-[#E9CFC4]/70 focus:outline-none focus:ring-1 focus:ring-[#C0725A]"
                  >
                    <option value="Diwali & Festive">Diwali &amp; Festive</option>
                    <option value="Wedding / Trousseau">Wedding / Trousseau</option>
                    <option value="Housewarming">Housewarming</option>
                    <option value="Birthday Celebration">Birthday Celebration</option>
                    <option value="Anniversary">Anniversary</option>
                    <option value="Corporate Bulk (15+ Units)">Corporate Bulk (15+ Units)</option>
                    <option value="Home Décor Curation">Home Décor Curation</option>
                  </select>
                </div>

                {/* Product / Hamper Name */}
                <div>
                  <label className="block font-sans text-xs font-medium text-[#263328] mb-1">
                    Desired Product / Hamper
                  </label>
                  <input
                    type="text"
                    value={product}
                    onChange={(e) => setProduct(e.target.value)}
                    placeholder="e.g. Royal Diwali Hamper or Custom Box"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#FAF6F0] text-[#263328] text-xs sm:text-sm border border-[#E9CFC4]/70 focus:outline-none focus:ring-1 focus:ring-[#C0725A]"
                  />
                </div>

                {/* Quantity */}
                <div>
                  <label className="block font-sans text-xs font-medium text-[#263328] mb-1">
                    Quantity
                  </label>
                  <input
                    type="text"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    placeholder="e.g. 1 hamper, or 25 units"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#FAF6F0] text-[#263328] text-xs sm:text-sm border border-[#E9CFC4]/70 focus:outline-none focus:ring-1 focus:ring-[#C0725A]"
                  />
                </div>

                {/* Budget */}
                <div>
                  <label className="block font-sans text-xs font-medium text-[#263328] mb-1">
                    Estimated Budget (INR)
                  </label>
                  <input
                    type="text"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    placeholder="e.g. Under ₹2,000 or ₹3,500+"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#FAF6F0] text-[#263328] text-xs sm:text-sm border border-[#E9CFC4]/70 focus:outline-none focus:ring-1 focus:ring-[#C0725A]"
                  />
                </div>

                {/* Preferred Delivery Date */}
                <div>
                  <label className="block font-sans text-xs font-medium text-[#263328] mb-1">
                    Preferred Delivery Date
                  </label>
                  <input
                    type="date"
                    value={deliveryDate}
                    onChange={(e) => setDeliveryDate(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#FAF6F0] text-[#263328] text-xs sm:text-sm border border-[#E9CFC4]/70 focus:outline-none focus:ring-1 focus:ring-[#C0725A]"
                  />
                </div>

                {/* Delivery Address & Pincode */}
                <div className="sm:col-span-2">
                  <label className="block font-sans text-xs font-medium text-[#263328] mb-1">
                    Delivery Address &amp; Pincode
                  </label>
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="e.g. 12th Main, Indiranagar, Bengaluru - 560038"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#FAF6F0] text-[#263328] text-xs sm:text-sm border border-[#E9CFC4]/70 focus:outline-none focus:ring-1 focus:ring-[#C0725A]"
                  />
                </div>

                {/* Gift Message / Notes */}
                <div className="sm:col-span-2">
                  <label className="block font-sans text-xs font-medium text-[#263328] mb-1">
                    Gift Message / Customization Notes
                  </label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Include custom calligraphy card sentiment, specific ribbon shade, dietary restrictions..."
                    className="w-full px-4 py-2.5 rounded-xl bg-[#FAF6F0] text-[#263328] text-xs sm:text-sm border border-[#E9CFC4]/70 focus:outline-none focus:ring-1 focus:ring-[#C0725A] resize-none"
                  />
                </div>

                {/* Submit CTA */}
                <div className="sm:col-span-2 pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#C0725A] hover:bg-[#A35842] text-white rounded-full font-sans text-xs sm:text-sm font-semibold tracking-wider uppercase shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send Milestone Order to WhatsApp Concierge</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* SECTION 3: WHATSAPP ENQUIRY BANNER */}
        <div className="mt-16 rounded-3xl bg-[#263328] text-white p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl border border-[#B8975A]/40 relative overflow-hidden">
          {/* Subtle gold decorative glow */}
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-[#B8975A]/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-xl text-center md:text-left z-10">
            <span className="font-sans text-xs uppercase tracking-widest text-[#ffdea6] font-bold">
              Instant Hospitality Desk
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-normal mt-1 leading-snug">
              Have a question or want a custom hamper? Chat with us on WhatsApp.
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#FAF6F0]/80 mt-2 leading-relaxed">
              Our Bangalore atelier team responds within minutes to help coordinate monograms, same-day dispatch, or wedding favors.
            </p>
          </div>

          <div className="z-10 shrink-0">
            <button
              onClick={openWhatsAppBanner}
              className="px-8 py-4 bg-[#25D366] hover:bg-[#20ba59] text-white font-sans text-sm font-bold tracking-wide rounded-full shadow-lg transition-all flex items-center gap-2.5 cursor-pointer hover:scale-105"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>Chat on WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
