/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  Sparkles,
  ArrowLeft,
  ShoppingBag,
  MessageCircle,
  RotateCcw,
  Users,
  User,
  Heart,
  Briefcase,
  Smile,
  Home,
  Flame,
  Cake,
  Award,
  Sparkle,
  Compass,
  Coffee,
  Gem,
  Leaf
} from 'lucide-react';
import { getAIRecommendations, AiQuizAnswers, AiRecommendation, WHATSAPP_NUMBER } from '../data/decoraraData.ts';

interface AiGiftFinderProps {
  onAddToCart: (item: { title: string; price: number; category: string; image: string }) => void;
}

export const AiGiftFinder: React.FC<AiGiftFinderProps> = ({ onAddToCart }) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [answers, setAnswers] = useState<AiQuizAnswers>({
    recipient: '',
    occasion: '',
    budget: '',
    aesthetic: ''
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [results, setResults] = useState<AiRecommendation[] | null>(null);

  const selectRecipient = (val: string) => {
    setAnswers({ ...answers, recipient: val });
    setCurrentStep(2);
  };

  const selectOccasion = (val: string) => {
    setAnswers({ ...answers, occasion: val });
    setCurrentStep(3);
  };

  const selectBudget = (val: string) => {
    setAnswers({ ...answers, budget: val });
    setCurrentStep(4);
  };

  const selectAestheticAndRun = (val: string) => {
    const updated = { ...answers, aesthetic: val };
    setAnswers(updated);
    runStylist(updated);
  };

  const runStylist = (finalAnswers: AiQuizAnswers) => {
    setLoading(true);
    setResults(null);

    // Simulate AI synthesis & matching
    setTimeout(() => {
      const recs = getAIRecommendations(finalAnswers);
      setResults(recs);
      setLoading(false);
    }, 750);
  };

  const resetFinder = () => {
    setAnswers({
      recipient: '',
      occasion: '',
      budget: '',
      aesthetic: ''
    });
    setResults(null);
    setCurrentStep(1);
    setLoading(false);
  };

  const handleOrderWhatsApp = (rec: AiRecommendation) => {
    const text = encodeURIComponent(
      `*Decorara AI Stylist Recommendation*\n\n` +
      `*Curated For:* ${answers.recipient || 'Recipient'} (${answers.occasion || 'Milestone'})\n` +
      `*Selected Item:* ${rec.hamper.name}\n` +
      `*Price:* ₹${rec.hamper.price.toLocaleString('en-IN')}\n` +
      `*Stylist Rationale:* "${rec.rationale}"\n\n` +
      `Hello Concierge, I liked this AI suggestion and want to confirm dispatch options!`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  return (
    <section id="ai-gift-finder" className="w-full py-16 sm:py-24 bg-[#FAF6F0] relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 md:px-12">
        {/* Main Card Container */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 md:p-14 shadow-xl border border-[#E9CFC4]/50 relative">
          {/* Floating Badge */}
          <div className="absolute -top-4 right-8 bg-[#263328] text-[#ffdea6] px-4 py-1.5 rounded-full font-sans text-xs font-semibold shadow-md flex items-center gap-1.5 border border-[#B8975A]/40">
            <Sparkles className="w-4 h-4 text-[#B8975A]" />
            <span>Interactive AI Concierge</span>
          </div>

          {/* Wizard Header */}
          <div className="max-w-2xl mx-auto text-center mb-10">
            <span className="font-sans text-xs uppercase tracking-widest text-[#C0725A] font-semibold">
              Zero Guesswork Gifting
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#263328] mt-1">
              AI Gift Finder Concierge
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#5E665F] mt-2">
              Share a few nuances about your recipient. Our intelligent stylist will harmonize the catalog to curate 3 tailor-fit curations in seconds.
            </p>

            {/* Step Progress Indicators */}
            {!results && !loading && (
              <div className="flex items-center justify-center gap-2 sm:gap-4 mt-6">
                {[
                  { num: 1, label: 'Recipient' },
                  { num: 2, label: 'Occasion' },
                  { num: 3, label: 'Budget' },
                  { num: 4, label: 'Aesthetic' }
                ].map((s, idx) => {
                  const isDone = currentStep > s.num;
                  const isCurrent = currentStep === s.num;
                  return (
                    <React.Fragment key={s.num}>
                      <div className="flex items-center gap-1.5">
                        <span
                          className={`w-7 h-7 rounded-full font-sans text-xs flex items-center justify-center font-bold transition-all ${
                            isCurrent
                              ? 'bg-[#C0725A] text-white shadow-xs'
                              : isDone
                              ? 'bg-[#263328] text-white'
                              : 'bg-[#F5EFEB] text-[#747872]'
                          }`}
                        >
                          {s.num}
                        </span>
                        <span
                          className={`font-sans text-xs hidden sm:inline ${
                            isCurrent ? 'text-[#C0725A] font-semibold' : 'text-[#747872]'
                          }`}
                        >
                          {s.label}
                        </span>
                      </div>
                      {idx < 3 && <span className="w-6 sm:w-10 h-[2px] bg-[#E9CFC4]/50"></span>}
                    </React.Fragment>
                  );
                })}
              </div>
            )}
          </div>

          {/* Wizard Body */}
          <div className="max-w-2xl mx-auto">
            {/* STEP 1: RECIPIENT */}
            {currentStep === 1 && !loading && !results && (
              <div className="flex flex-col gap-6 animate-fade-in">
                <h4 className="font-serif text-xl sm:text-2xl text-[#263328] text-center font-medium">
                  Who are we celebrating today?
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5">
                  {[
                    { label: 'Mother', icon: Heart, val: 'Mother' },
                    { label: 'Father', icon: User, val: 'Father' },
                    { label: 'Spouse / Partner', icon: Sparkle, val: 'Spouse / Partner' },
                    { label: 'Dear Friend', icon: Smile, val: 'Friend' },
                    { label: 'Colleague / Client', icon: Briefcase, val: 'Colleague / Client' },
                    { label: 'Newlywed Couple', icon: Users, val: 'Couple' }
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.label}
                        onClick={() => selectRecipient(item.val)}
                        className="p-4 rounded-2xl bg-[#FAF6F0] hover:bg-[#F5EFEB] border border-[#E9CFC4]/60 text-[#263328] flex flex-col items-center gap-2.5 transition-all duration-200 hover:scale-[1.02] cursor-pointer hover:border-[#C0725A]"
                      >
                        <Icon className="w-6 h-6 text-[#C0725A]" />
                        <span className="font-sans text-sm font-medium">{item.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* STEP 2: OCCASION */}
            {currentStep === 2 && !loading && !results && (
              <div className="flex flex-col gap-6 animate-fade-in">
                <h4 className="font-serif text-xl sm:text-2xl text-[#263328] text-center font-medium">
                  What is the meaningful occasion?
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5">
                  {[
                    { label: 'Housewarming', icon: Home, val: 'Housewarming' },
                    { label: 'Wedding / Sangeet', icon: Sparkles, val: 'Wedding' },
                    { label: 'Diwali & Festive', icon: Flame, val: 'Festive / Diwali' },
                    { label: 'Birthday', icon: Cake, val: 'Birthday' },
                    { label: 'Anniversary', icon: Heart, val: 'Anniversary' },
                    { label: 'Gratitude / Corporate', icon: Award, val: 'Corporate / Gratitude' }
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.label}
                        onClick={() => selectOccasion(item.val)}
                        className="p-4 rounded-2xl bg-[#FAF6F0] hover:bg-[#F5EFEB] border border-[#E9CFC4]/60 text-[#263328] flex flex-col items-center gap-2.5 transition-all duration-200 hover:scale-[1.02] cursor-pointer hover:border-[#C0725A]"
                      >
                        <Icon className="w-6 h-6 text-[#C0725A]" />
                        <span className="font-sans text-sm font-medium">{item.label}</span>
                      </button>
                    );
                  })}
                </div>
                <div className="flex justify-start">
                  <button
                    onClick={() => setCurrentStep(1)}
                    className="font-sans text-xs text-[#5E665F] flex items-center gap-1 hover:text-[#263328] cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back to Recipient</span>
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: BUDGET */}
            {currentStep === 3 && !loading && !results && (
              <div className="flex flex-col gap-6 animate-fade-in">
                <h4 className="font-serif text-xl sm:text-2xl text-[#263328] text-center font-medium">
                  What is your ideal budget range?
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                  {[
                    { title: 'Under ₹1,500', sub: 'Thoughtful Tokens & Crafts', val: 'Under ₹1,500' },
                    { title: '₹1,500 - ₹3,000', sub: 'Artisanal Signatures', val: '₹1,500 - ₹3,000' },
                    { title: 'Above ₹3,000', sub: 'Heirloom Luxury Trunks', val: 'Above ₹3,000' }
                  ].map((b) => (
                    <button
                      key={b.title}
                      onClick={() => selectBudget(b.val)}
                      className="p-5 rounded-2xl bg-[#FAF6F0] hover:bg-[#F5EFEB] border border-[#E9CFC4]/60 text-[#263328] flex flex-col items-center text-center gap-1.5 transition-all duration-200 hover:scale-[1.02] cursor-pointer hover:border-[#C0725A]"
                    >
                      <span className="font-serif text-xl text-[#C0725A] font-normal">{b.title}</span>
                      <span className="font-sans text-xs text-[#5E665F]">{b.sub}</span>
                    </button>
                  ))}
                </div>
                <div className="flex justify-start">
                  <button
                    onClick={() => setCurrentStep(2)}
                    className="font-sans text-xs text-[#5E665F] flex items-center gap-1 hover:text-[#263328] cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back to Occasion</span>
                  </button>
                </div>
              </div>
            )}

            {/* STEP 4: AESTHETIC / PERSONALITY */}
            {currentStep === 4 && !loading && !results && (
              <div className="flex flex-col gap-6 animate-fade-in">
                <h4 className="font-serif text-xl sm:text-2xl text-[#263328] text-center font-medium">
                  Which aesthetic describes them best?
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5">
                  {[
                    { label: 'Traditional Heritage', icon: Compass, val: 'Traditional Indian Heritage' },
                    { label: 'Modern Minimalist', icon: Sparkles, val: 'Modern Minimalist' },
                    { label: 'Eco & Earthy', icon: Leaf, val: 'Earthy & Eco-Conscious' },
                    { label: 'Opulent & Fragrant', icon: Gem, val: 'Opulent & Fragrant' },
                    { label: 'Culinary & Chai', icon: Coffee, val: 'Cozy Chai Enthusiast' }
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.label}
                        onClick={() => selectAestheticAndRun(item.val)}
                        className="p-4 rounded-2xl bg-[#FAF6F0] hover:bg-[#F5EFEB] border border-[#E9CFC4]/60 text-[#263328] flex flex-col items-center gap-2.5 transition-all duration-200 hover:scale-[1.02] cursor-pointer hover:border-[#C0725A]"
                      >
                        <Icon className="w-6 h-6 text-[#C0725A]" />
                        <span className="font-sans text-sm font-medium">{item.label}</span>
                      </button>
                    );
                  })}
                  {/* Generate Button */}
                  <button
                    onClick={() => runStylist({ ...answers, aesthetic: 'Traditional Indian Heritage' })}
                    className="p-4 rounded-2xl bg-[#C0725A] hover:bg-[#A35842] text-white flex flex-col items-center justify-center gap-2 transition-all cursor-pointer shadow-md font-sans text-sm font-medium"
                  >
                    <Sparkles className="w-6 h-6 text-[#ffdea6]" />
                    <span>Generate Matches</span>
                  </button>
                </div>
                <div className="flex justify-start">
                  <button
                    onClick={() => setCurrentStep(3)}
                    className="font-sans text-xs text-[#5E665F] flex items-center gap-1 hover:text-[#263328] cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back to Budget</span>
                  </button>
                </div>
              </div>
            )}

            {/* LOADING STATE */}
            {loading && (
              <div className="flex flex-col items-center justify-center py-12 gap-4 text-center animate-fade-in">
                <div className="w-14 h-14 rounded-full border-4 border-[#E9CFC4] border-t-[#C0725A] animate-spin"></div>
                <div>
                  <h4 className="font-serif text-xl text-[#263328]">
                    Decorara AI Stylist is harmonizing options...
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-[#5E665F] mt-1">
                    Aligning artisan guilds, budget parameters, and recipient personality nuances.
                  </p>
                </div>
              </div>
            )}

            {/* RESULTS STATE */}
            {results && !loading && (
              <div className="flex flex-col gap-6 animate-fade-in">
                {/* Summary Pill Bar */}
                <div className="p-4 rounded-2xl bg-[#FAF6F0] border border-[#E9CFC4] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <span className="font-sans text-[11px] uppercase tracking-wider text-[#C0725A] font-bold block">
                      Curated Pairings For
                    </span>
                    <p className="font-sans text-sm text-[#263328] font-semibold mt-0.5">
                      {answers.recipient || 'Recipient'} • {answers.occasion || 'Milestone'} • {answers.budget || 'Budget'} • {answers.aesthetic || 'Artisanal'}
                    </p>
                  </div>
                  <button
                    onClick={resetFinder}
                    className="font-sans text-xs font-semibold text-[#263328] hover:text-[#C0725A] flex items-center gap-1.5 cursor-pointer underline underline-offset-4"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Restart Finder</span>
                  </button>
                </div>

                {/* 3 Matched Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {results.map((rec) => (
                    <div
                      key={rec.hamper.id}
                      className="bg-[#FAF6F0] rounded-2xl p-4 border border-[#E9CFC4]/70 flex flex-col justify-between shadow-xs hover:shadow-md transition-all"
                    >
                      <div>
                        <div className="w-full aspect-[4/5] rounded-xl overflow-hidden bg-[#EBE3DB] mb-3">
                          <img
                            src={rec.hamper.image}
                            alt={rec.hamper.name}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        <div className="flex items-baseline justify-between mb-1">
                          <h5 className="font-serif text-lg text-[#263328] font-normal leading-snug">
                            {rec.hamper.name}
                          </h5>
                          <span className="font-serif text-lg font-medium text-[#263328]">
                            ₹{rec.hamper.price.toLocaleString('en-IN')}
                          </span>
                        </div>

                        {/* AI Rationale Box */}
                        <div className="p-3 rounded-xl bg-white border border-[#E9CFC4]/50 my-2.5">
                          <span className="font-sans text-[10px] uppercase tracking-wider text-[#C0725A] font-bold block flex items-center gap-1">
                            <Sparkles className="w-3 h-3 text-[#B8975A]" />
                            <span>AI Stylist Rationale</span>
                          </span>
                          <p className="font-sans text-xs text-[#5E665F] mt-1 leading-relaxed">
                            {rec.rationale}
                          </p>
                        </div>
                      </div>

                      <div className="pt-2 flex flex-col gap-2">
                        <button
                          onClick={() =>
                            onAddToCart({
                              title: rec.hamper.name,
                              price: rec.hamper.price,
                              category: rec.hamper.category,
                              image: rec.hamper.image
                            })
                          }
                          className="w-full py-2 rounded-xl bg-white hover:bg-[#EBE3DB] text-[#263328] border border-[#E9CFC4]/50 font-sans text-xs font-medium flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                        >
                          <ShoppingBag className="w-3.5 h-3.5" />
                          <span>Add to Cart</span>
                        </button>

                        <button
                          onClick={() => handleOrderWhatsApp(rec)}
                          className="w-full py-2 rounded-xl bg-[#C0725A] hover:bg-[#A35842] text-white font-sans text-xs font-medium flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-xs"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                          <span>Order on WhatsApp</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
