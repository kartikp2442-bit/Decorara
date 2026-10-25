/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// ============================================================================
// 1. GLOBAL STORE & WHATSAPP CONFIGURATION
// ============================================================================
// Change your WhatsApp Concierge Number here (country code + phone number without + or spaces)
export const WHATSAPP_NUMBER = '919999999999';

export const BRAND = {
  name: 'Decorara',
  tagline: 'Gifts that make a house feel like home.',
  subtitle: 'Thoughtfully Curated Artisanal Gift Hampers & Handcrafted Indian Home Décor',
  phone: '+91 (0) 80 4920 8800',
  phoneDisplay: '+91 99999 99999',
  email: 'concierge@decorara.com',
  address: 'Indiranagar 100ft Road, Bengaluru, Karnataka - 560038, India',
  currency: '₹',
};

// ============================================================================
// 2. OCCASIONS DATA
// ============================================================================
export interface Occasion {
  id: string;
  name: string;
  tag: string;
  count: string;
  image: string;
  description: string;
}

export const OCCASIONS: Occasion[] = [
  {
    id: 'wedding',
    name: 'Weddings',
    tag: 'Wedding',
    count: '42 Curations',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDxBrEJRzoIPrmVZclM3n1kTKfI_oLTxlt_lYLMIM_arnz3ozJ2_s88SXW0FwN24IIuoypdxjOr1aWW41ir3La1P4pFtKq1u3H1rzT1IuavGcq6DlIp55P2o0yvV462UheP171jdulGOB5ZYzja0oLQpiofRAvNTHvtDSTQcKpuw15TKehmguUIW3q1J2P6DR8sW73kc8QcrtkT5b3VFqIops27ToUawnpmoGS90NlSWix9aNN6eZRIBw',
    description: 'Trousseau and welcome favors with silk ribbons & brass keepsakes.'
  },
  {
    id: 'festive',
    name: 'Festive & Diwali',
    tag: 'Festive',
    count: '58 Curations',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDT_JXzJu2ohmeCCSsDtSIhINQTkoOAiNrDxljLZJvLA3WbHPRhqY7dEIw-DpHVPYoMM8cID4A4bnBB2BAS26rC8TzUWuq1W6ivnfz1I5p_ybpUUyByfeIuMjfb3hYn23LCZG3ujvgSMzH0MAwnjcQBsjpQgWRFA2-5FbzdkKCsskLXQfnyPuEvWu7aKE-tRxiTTNdYRgoC7gBYoX14HbxWpTC2EPoqrexc4VYzuJ3LUMr1DhxbMkaZnA',
    description: 'Auspicious handcrafted Moradabad brass diyas, saffron & dry fruits.'
  },
  {
    id: 'housewarming',
    name: 'Housewarming',
    tag: 'Housewarming',
    count: '36 Curations',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHT-J2oXBiS9t1xIWIxoQvMfYjnOlD9-J1eB_Bz_GCxxOTwCsSV7UeDkXTI-pqMhaoiU07LQxyIjdUh_kxFENnEApDPcQyrj-tsn7t0MrzOsQgiF8FWLbwXHUK2hL4inMuqAbKWQe5FRhjqlXrRj-1ZxotY98E7WuOjJiYmLm2dy-DMEmhwMg-6h02wF7EBnbWJJbKVf_EzGn6Pz242_YdDpLBoDsacK7W_VicQvIpvJulmhv4wJO4Bg',
    description: 'Warm stoneware planters, organic room mists & scented soy bowls.'
  },
  {
    id: 'anniversary',
    name: 'Anniversary',
    tag: 'Anniversary',
    count: '24 Curations',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAT9K04N7yJu1iHKn2Abld5GNe-ngpIMQ9JuzSVpp-cg4oo1rA8xA5yzi9lnwh_SZQ14iMSuR6Paaz0IHqZ4u4kOS18CpckGJYQbWdf4vUvShzt9MVcqIm3NDLOvNiWWu3UgKFOnXhiLHyMHX_EajnLUVGCNOVKM2mYM2OX-EgLwmU-BHz1anevyGdmAwIxoOOho4dxOdM9plWbgybj2yMHL5n0J9psngK39wg02eYJLNiRN7TklX5JdQ',
    description: 'Twin soapstone flutes, artisanal single-origin truffles & amber wax.'
  },
  {
    id: 'birthday',
    name: 'Birthdays',
    tag: 'Birthday',
    count: '31 Curations',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC7fcxzE2QEBtbWiB_w0tVtE72SqFIih7Oenqq9DbAvF_ZpzX6S6vRQgQDNBIhrPMTnriHr7ra72Yw-eDI7zr4N_GnQ-1T2YXDee_BTvsbwEj1mUiuvqNOY_nJd_Q4rjr9PUBjbRfecQjI87bbDDkM_208hHUKYGqVKdvCCNZ9eXSO6ZBBsyz4glNQeIRhWRl4ldke24DqxPsJBQ6yuMcIZJ82TDClo1rc9jhPwt1JgVfEhe8XskYTxEw',
    description: 'Pampering botanical body care, wild organic honey & brass relics.'
  },
  {
    id: 'corporate',
    name: 'Corporate',
    tag: 'Corporate',
    count: '50+ Curations',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCqOOeN-KFe-QK6XGyUukn__YxXXPfH19mz2xoOEKETi1S41MFHWV413AghYyU4vn6oAkVDtMZi_W4cv9BgXj2R77ke8tf8klDLXyAScm9c_fyI16iOEoUk4T9bhpa2cETYzyucFZ6xd0VxX5FwrZsIZP1oxlUoDthZjV1nSXGDOWhP7RYRCoANTj-kUlgR4NzRG04y-Y40kbvLyl9rRWs4Fzh7SkkX3CSOCzWpYkYiQ8-Ry-9yypfQjw',
    description: 'Full-grain vegan leather, brass stationery & first-flush tea tins.'
  }
];

// ============================================================================
// 3. CURATED GIFT HAMPERS (CATALOGUE)
// ============================================================================
export interface Hamper {
  id: string;
  name: string;
  category: string; // 'Festive' | 'Wedding' | 'Birthday' | 'Corporate'
  price: number;
  originalPrice?: number;
  badge?: string;
  rating: number;
  reviewsCount: number;
  image: string;
  description: string;
  longDescription: string;
  inclusions: string[];
  tags: string[];
}

export const HAMPERS: Hamper[] = [
  {
    id: 'royal-diwali-hamper',
    name: 'Royal Diwali Hamper',
    category: 'Festive',
    price: 3499,
    originalPrice: 4200,
    badge: 'Bestseller',
    rating: 5,
    reviewsCount: 48,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD0OVZeWJmb4u8WNBtAehQU-TVaDesNRv5ABSQDLqK87MmJqlxXHClE9i6lDhIyzCKCPgJI_q8M6QwTwWg302z6JocgGNlqTnkPs0jmAitvrqiZOuWO_97Vf3Q4aLWkhwyE1vQh11AtWj27NGmnbmOzoO_5s_oG8KDahTT3p-xPgulbSszHicJQ_dAfx3nhbYRJnBVODeQ22CBr3030flcSS3yRgEO5HgmDTrBNZScRVzXQvHyxLafRew',
    description: 'Beaten brass diya, Kashmiri saffron honey, spiced macadamias & pure sandalwood incense.',
    longDescription: 'Presented in a rigid midnight forest green velvet trunk with embossed antique gold crest. Includes a hand-beaten Moradabad brass diya, certified Kashmiri saffron raw honey (150g), slow-roasted spiced macadamias in a brass katori, and hand-rolled sandalwood dhoop sticks.',
    inclusions: [
      'Hand-beaten Moradabad Brass Diya',
      'Certified Kashmiri Saffron Honey (150g)',
      'Spiced Macadamias in Velvet Pouch',
      'Pure Mysore Sandalwood Dhoop Sticks',
      'Handwritten Deckle-edge Greeting Card'
    ],
    tags: ['Festive', 'Traditional Indian Heritage', 'Above ₹3,000', 'Spouse', 'Wedding']
  },
  {
    id: 'botanical-spa-box',
    name: 'Botanical Self-Care Spa Box',
    category: 'Birthday',
    price: 2199,
    originalPrice: 2650,
    badge: 'Organic Bath',
    rating: 5,
    reviewsCount: 34,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVL9i9Yco7mkPPJhrcqcYYyeImtZxFnTpUm0xZJxSvNqjHX3DqXTz9hHtbT4U6UT33AAWxrEadaeJAcbFrMNnV4NYMxouXsvNoETEXDlDqcsdBFh2LpH48moW1KKOYn79_Q_cbqNGhJVpm3pGbOaIAoOOIVQxZ3FygDbmpZOxKsdrFecJLgv5077-NsYVBY2PGg76c1etAmKTR9G68mvrLNfY4VKkLX8YqeadjKvAd_ILtc8Inn_JBHw',
    description: 'Damask rose facial mist, neem massage comb, hand-pressed artisan soaps & linen washcloth.',
    longDescription: 'Curated for tranquil unhurried evenings. Contains pure steam-distilled Kannauj Damask rose mist, hand-carved medicinal neem wood comb, twin blocks of cold-processed moringa shea soap, and a waffle-weave pure linen towel in a raw pine box.',
    inclusions: [
      'Pure Kannauj Rose Water Mist (100ml)',
      'Hand-carved Neem Wood Comb',
      'Cold-pressed Moringa & Shea Soap',
      'Pure Handloom Linen Washcloth',
      'Seeded Plantable Note Card'
    ],
    tags: ['Birthday', 'Mother', 'Friend', 'Earthy & Eco-Conscious', 'Under ₹2,500']
  },
  {
    id: 'gourmet-brass-tea',
    name: 'Gourmet Brass & Tea Keepsake',
    category: 'Corporate',
    price: 1850,
    originalPrice: 2200,
    badge: 'Heritage Tea',
    rating: 4.8,
    reviewsCount: 27,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJ-Z6vld1C5N-SDqsYXZNG2XmLkOjKgNuyghDkxlqciCoHPXw15mNgzF9odMb82e-pKlQ9KFZ3Poyi_AInSr9lVB4_f4m4ONcAoDVmHih7yAXM_dhi-wCcr3CxRk13UjvyYedSI7QZPL7T1SJEnls01Rf448QZ8Vk3Kvuh6h198loa7ZO7qiHpSOkkyXZVSYex1G5ECz_i2cnnrTcERYd4CWgBTX6JDWWyl32TXzvpfwISG-AXqRtiIg',
    description: 'First-flush loose Darjeeling leaf, beaten brass infuser, twin stoneware cups & spiced jaggery.',
    longDescription: 'An understated tribute to the morning tea ritual. Featuring first-flush whole leaf Darjeeling black tea sealed in an ivory & brass caddy, a hand-hammered brass infuser spoon, two studio ceramic cups with gold glazed rims, and organic spiced jaggery bites.',
    inclusions: [
      'Estate First-Flush Darjeeling Leaf (75g)',
      'Hand-hammered Brass Tea Infuser',
      'Twin Studio Ceramic Glazed Cups',
      'Organic Cardamom Spiced Jaggery',
      'Gold Embossed Gift Sleeve'
    ],
    tags: ['Corporate', 'Father', 'Colleague', 'Modern Minimalist', 'Under ₹2,500']
  },
  {
    id: 'wedding-truffle-box',
    name: 'Wedding Welcome Truffle Box',
    category: 'Wedding',
    price: 2800,
    originalPrice: 3200,
    badge: 'Wedding Favours',
    rating: 5,
    reviewsCount: 52,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJAq8CzztXi8QjQwlMFbg39GiGm6fJ6FUQ6XJwBFkkjKmWmFr5RqMSNGgqqtWJYdeF5FLtw4qMgApG2Tn_LJ0ZqZkqammmOgVvnkympWgMxMo1shUkYyIiw9_wPzO5Z04JwFNJQ7WdrTVR-K4x7xA6DaQ9DXOffJfL2IcEVaDwaLr0vp_fzOvyTaSBcNXRr6IJAu7_I70s76pz72h6jT1P4jKSZxRIKNF87M42UQJOJit7nEzRAyIQJw',
    description: 'Single-origin cacao truffles, white marble candle vessel & personalized calligraphed crest.',
    longDescription: 'Artisanal decadence in a blush textured paper case. Nine pieces of hand-rolled single-origin South Indian dark chocolate ganache, a miniature Makrana white marble candle with jasmine soy wax, and personalized gold-foiled crest monogram.',
    inclusions: [
      '9 Single-Origin Dark Chocolate Truffles',
      'Makrana Marble Jasmine Soy Candle',
      'Dried Velvet Rose Potpourri',
      'Custom Couple Monogram / Crest Foil',
      'Hand-tied Raw Tussar Silk Ribbon'
    ],
    tags: ['Wedding', 'Couple', 'Anniversary', 'Modern Minimalist', 'Under ₹3,000']
  },
  {
    id: 'terracotta-chai-set',
    name: 'Artisanal Terracotta Chai Set',
    category: 'Festive',
    price: 950,
    originalPrice: 1200,
    badge: 'Pocket Luxury',
    rating: 4.9,
    reviewsCount: 66,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuARrVKYtTMt-SpyWzXj2-eaYVCnzYt5T1MYoEiX9VRe4ujkoLHVQAaccgfHuV04iSmAK6mZTrdsx2ygE7cE2hEvCqkClc4VTbnU1Nd5g8L0PE7FZtwpwjJfrXLGWOOJQwzmZi4VD-9dU1VVGmDSjnhSjBIszjLA1yGaDVA5qvKFLcSgzTGtLDGWDl3GeJ8z1fxCo8m097LnLyOCcSDfgMDzbDv_MoN--Fdx8RaQd-tu6M1c5sskY5JrQQ',
    description: 'Quad hand-thrown clay kulhars with small-batch stone-ground Malabar chai spice blend.',
    longDescription: 'A soulful, tactile gift celebrating earthy tradition. Four unglazed terracotta kulhars shaped on pottery wheels in Uttar Pradesh, paired with an aromatic stone-ground whole spice masala blend in a corked glass tube.',
    inclusions: [
      '4 Wheel-thrown Terracotta Kulhars',
      'Small-batch Malabar Chai Masala (50g)',
      'Fresh Cinnamon Quills with Jute Tie',
      'Kraft Keepsake Gift Box'
    ],
    tags: ['Festive', 'Under ₹1,000', 'Eco & Earthy', 'Culinary & Chai', 'Friend']
  },
  {
    id: 'luxury-oud-marble',
    name: 'Luxury Oud & Makrana Marble',
    category: 'Corporate',
    price: 4200,
    originalPrice: 4800,
    badge: 'Collector Edition',
    rating: 5,
    reviewsCount: 19,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCsATEKWER-cwWByuEVhjh1oke_tjH5vNY5YR8DdIHZ3t8X5rqULSLFV7FeGGGIV8T9KrFME01obWTpELu6FDLbBNcfg3PU3brqsc5bhZnMoYLr53Ky4q7ju2NB9xyzeylkOQxn-KbRFid-qBNVMwI0AzX-0-QDUVcGdnbfXfszcs_zPxxnX4In3VI7gLnxMoU0AyMh9S_Ni08tmBgBPYW0Tspcwvf-JbKm5fk5ooNmMY-EBMsS-guI0g',
    description: 'Carved Makrana marble candle bowl, pure Assam wild oud oil & beaten brass wick trimmer.',
    longDescription: 'Architectural opulence for connoisseurs. Housed in a dark solid wood crate, this set holds a substantial hand-carved white marble candle bowl with three wooden crackling wicks, 10ml Assam wild oud perfume elixir, and solid brass accessories.',
    inclusions: [
      'Hand-carved Makrana 3-Wick Candle Bowl',
      'Assam Wild Oud Perfume Extract (10ml)',
      'Turned Brass Candle Wick Trimmer',
      'Solid Teakwood Heirloom Case'
    ],
    tags: ['Corporate', 'Above ₹3,000', 'Opulent & Fragrant', 'Anniversary', 'Couple']
  },
  {
    id: 'mithai-floral-box',
    name: 'Mithai & Heritage Floral Box',
    category: 'Festive',
    price: 1650,
    originalPrice: 1999,
    badge: 'Traditional',
    rating: 4.8,
    reviewsCount: 31,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1xqx1Ln5Vkh5ALP3E-mJbWI18XBfCbhEQ4PXDAylQmBJ7VBs6NDV7m44cbtylnZ7FQ9pPSLqsWDUXa4hrtqWhRjhFdB55kU5nAKaBWHF04T4OU0pbKMxpY-p6UZ3StIYDPRsyq8c3NnLjp6ErdeX11q2BrQNoYbjevnrYXYbQkuqlW4Yyl1o_klwiNydH4RCKiRdMqfTmcSQotm6q3ZMHO5L5_uk5nupIzGZ4JHUBnt4W27zLMzTV3Q',
    description: 'Gourmet pistachio bites, brass keepsake sweet tin, jasmine closet tablet & marigold tea.',
    longDescription: 'A sensory voyage of aromas and tastes. Gourmet silver-leaf pistachio baklava cubes in a reusable embossed brass round box, accompanied by a natural soy wax wardrobe tablet scented with night-blooming jasmine.',
    inclusions: [
      'Gourmet Pistachio Delights (200g)',
      'Embossed Brass Keepsake Tin',
      'Botanical Jasmine Scented Wax Tablet',
      'Sun-dried Marigold Tisane Vial'
    ],
    tags: ['Festive', 'Under ₹2,500', 'Traditional Indian Heritage', 'Mother', 'Housewarming']
  },
  {
    id: 'executive-desk-hamper',
    name: 'Executive Leather & Brass Desk Hamper',
    category: 'Corporate',
    price: 2400,
    originalPrice: 2850,
    badge: 'Executive',
    rating: 5,
    reviewsCount: 41,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBanfChJYOVjE43zP0I3vHHnUnZBXuuDaajGYF-lXAI3B6TUcOQbPuRfHPomICqfwwXhYtQxqY-Y1RLp7Yo86cH3iOfQT92fsGKvjHUZ01K2IppFhkZEGBtQSdSLCrzEWn_td6r6Z4cin8i_ayoaKbf35N_vddL1yhmXwH5OqZ8CW65NObB6kJWYifOwG9JeINC_CjYAibuSAFJetttQjW0ACZKjdowVQRKdNPXsjhNtlyNn9xqk7U2ig',
    description: 'Full-grain vegan leather desk pad, turned brass pen holder & smoked bourbon soy wax candle.',
    longDescription: 'A distinguished upgrade for study and office sanctuaries. Includes an oversized saddle tan water-resistant desk mat, a heavy solid brass hexagonal pen rest, and an amber glass soy candle with cedarwood and warm vanilla notes.',
    inclusions: [
      'Saddle Tan Vegan Leather Desk Mat',
      'Solid Brass Hexagonal Pen Stand',
      'Cedarwood & Bourbon Soy Candle (120g)',
      'Kraft Hardbound Ruled Journal'
    ],
    tags: ['Corporate', 'Father', 'Colleague', 'Modern Minimalist', 'Under ₹2,500']
  }
];

// ============================================================================
// 4. HOME DÉCOR COLLECTION
// ============================================================================
export interface DecorItem {
  id: string;
  name: string;
  category: string; // 'Candles & Diffusers' | 'Vases & Planters' | 'Table Décor' | 'Festive Urli & Diyas'
  categoryKey: 'candles' | 'vases' | 'table' | 'festive';
  price: number;
  image: string;
  artisanCraft: string;
  region: string;
  shortDesc: string;
  longDesc: string;
}

export const HOME_DECOR: DecorItem[] = [
  {
    id: 'hammered-brass-urli',
    name: 'Hammered Brass Urli',
    category: 'Festive Urli & Diyas',
    categoryKey: 'festive',
    price: 2250,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAWcHKNzHkwT9ZqBWTkrWOKXYBhXr8gIzNuVE82RT_8d_W_JauofI2c4s7p20Smyc9jZCVf07nOOjd7ZNdyv4NmUE_FvG5jAQ66NyRaNpwbsxsaHm82KFsmKsVlJ9oVxdxRjYwKd2OMxeWWPaiMRd_q2yLOYckpXPJQZCghpFb46GBXX18OWaRHfwacbEs5iobyvxXsSJZDZhgYiibAhHvMWyeW5uU58H_0edRSrmt3YtEZ9RYGA6ryPQ',
    artisanCraft: 'Moradabad Metal Guild',
    region: 'Moradabad, UP',
    shortDesc: 'Beaten heavy gauge brass bowl for floral arrangements.',
    longDesc: 'Hand-hammered from pure heavy-gauge brass by multi-generational metalsmiths in Moradabad. Perfect as a foyer centerpiece with floating fresh jasmine petals, marigolds, and floating wax diyas.'
  },
  {
    id: 'terracotta-fluted-vase',
    name: 'Terracotta Fluted Vase',
    category: 'Vases & Planters',
    categoryKey: 'vases',
    price: 1450,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBn7wStu5QADV6YeXXKi-rK0RxAvTjGPw_OdQU7o6xplnvibLKWjpGq89ZI3yBLPX6ymi3NhsC2LXAnXsyrJMCysenRMC-U8eNUNp9DOpza90LCvwlsQg11ZPTapKmFz5NxpVktepM0NnB6nfiGmiTGuSmrlvDn-J-GZu8npBxBarrAvraY2Tm6-gm49U0Vq2clBg-4dNEld07WTQwpDQnJS4kbu3ngXe6Pt9l7ZErpTNXAIRaGYyG5UQ',
    artisanCraft: 'Khurja Studio Pottery',
    region: 'Khurja, UP',
    shortDesc: 'Unglazed architectural silhouette for dried flora.',
    longDesc: 'Wheel-thrown natural red terracotta vessel with raw matte finish and hand-carved sculptural fluting. Kiln-fired using traditional wood methods to create gentle organic variations in clay tone.'
  },
  {
    id: 'makrana-marble-candle',
    name: 'Makrana Marble 3-Wick Candle',
    category: 'Candles & Diffusers',
    categoryKey: 'candles',
    price: 1890,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDGoq6b8mi2Dj73AQAf94lVwb-QkgKVujz-D6CquClVWqMkYffSX4VqiLBU7sHVH3yuac5x4G9De1zogggKzadhF8kv9s12lrgXkcm4IQuJfH56MZj1iKDh4RfYvlfEZwJZ4WlkTLkw97d5cudpdfvglEQz9R-LHRd_aKUodWfN4VkSeoABX9eFy-qRl_osHn7SVfqPIidZUmxfvY8WZ1DyEG-N9HUGxESsVMXFkOOP0LayASjRQqCGmw',
    artisanCraft: 'Makrana Stone Carvers',
    region: 'Makrana, Rajasthan',
    shortDesc: 'Vetiver & Jasmine botanical soy wax vessel.',
    longDesc: 'Carved out of solid Makrana white marble, renowned for its translucent crystalline luster. Filled with clean-burning soy wax infused with wild vetiver and Indian sambac jasmine. Reusable as a trinket bowl.'
  },
  {
    id: 'mughal-brass-coasters',
    name: 'Mughal Brass Coasters (Set of 4)',
    category: 'Table Décor',
    categoryKey: 'table',
    price: 1150,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBoMBlq0BYPkWXp--K3DGoesgGA84IfKe1n4tlTX4Ph9ySXbhaEMQIEy0NTgyiNHoMyKoy2SekYnJgJCbAY2MAxI8Tns0s9inaifVJC4J3sz7n8FH18qnBiEKATliU2kQYxqe-fSW8xlWMmlgCSsI-YKWpKNuvTqcsdAuIv58v5VMVNOYrgeEiFN41uwYvWR-mLZNtxxbmUKTPgAzAVR7bDlcBDfTc2ZxIyJDk-CJcxGiaLHDtN-E4nJQ',
    artisanCraft: 'Etched Metal Guild',
    region: 'Jaipur, Rajasthan',
    shortDesc: 'Heavy brass with protective velvet backing.',
    longDesc: 'Four weighty solid cast brass coasters etched with intricate Mughal floral motifs. Finished with a warm antique gold lacquer that resists moisture, and lined underneath with soft velvet.'
  },
  {
    id: 'sandalwood-reed-diffuser',
    name: 'Kerala Sandalwood Reed Diffuser',
    category: 'Candles & Diffusers',
    categoryKey: 'candles',
    price: 1350,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0PgZxj80WsMKyYD-TGghy55U8RsSUoo5j8nc1uZ7oxtQIqD2HO40qMwn1UlMOXX5s1eQRgvS0yrX5q4W8ta7XOtu65EHurO_Ac-jWE4aO1hgX_-ZZqDhJ2k8QWha8KXeIjbQA9ondQ7PW1FWV09yzJikObTQCn3XEwujRXimdLu69J98pYVaKGLJE7-BXqK16391jRoYXnIkuzEZzNblgettKvFMCPQmaP-wAFB0WhS6JaHMffTX79A',
    artisanCraft: 'Natural Aromatics',
    region: 'Kochi, Kerala',
    shortDesc: '150ml amber vessel with natural rattan reeds.',
    longDesc: 'Slow-diffusing home fragrance in a pharmaceutical-grade amber apothecary bottle. Formulated with authentic sandalwood essential oils and crushed green cardamom notes. Lasts over 90 days.'
  },
  {
    id: 'mayur-brass-diya-pair',
    name: 'Mayur Brass Diya Pair',
    category: 'Festive Urli & Diyas',
    categoryKey: 'festive',
    price: 1600,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCpOqBiWucfIFsWY6nvmhqzxusLsJz6y1rogrmzIwF8fUueyUrZc-BKCXSiztvOHpNn8jNSjQvTXUZeS8blLY7PqUU11RXu0WpEhitr58wmqy4I0RvbNFBNt7DufjC7x_ls5BhZbMRl5DvfjJvlMDg161m7T_xO6inurhBu9Rxxc2LkxyLoCqdagx-DlhOJ_kBWdoxPSrSXSmNxxYafM3iqojL87qCng6UTCxam73iCImTh9Z1_9REDxw',
    artisanCraft: 'Brass Heirloom Casting',
    region: 'Swamimalai, Tamil Nadu',
    shortDesc: 'Twin sculpted peacock oil lamps for sacred spaces.',
    longDesc: 'Cast using the classical lost-wax technique in solid brass. The peacock finials gracefully arch over deep oil wells designed to hold cotton wicks safely for hours during puja or twilight rituals.'
  },
  {
    id: 'nizamabad-black-pottery',
    name: 'Nizamabad Silver Inlay Bowl',
    category: 'Table Décor',
    categoryKey: 'table',
    price: 1950,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuANYY8uwKctJCHpnOcSFPDxj-FcFW8LawyfJ5JpV9xt84OZWXh8JE0J89iqcoMMB_HSeIap5wx5wn_hK9rVNAP9wmvHu9-PyOlBGPpZOCo_iHPyI9gK_4uamV1xxtX_B5Os8DKXqE8JQHOnf3Dm5YaqqXQ06wUQZ-Ks-eaPIwoNoOWxj6joEakbBktsXxbB_7UffacfB1nSu3F_f6f6ZPuD1NXumORWlGR8aFAoPMewMC1uUXFb_8WtnA',
    artisanCraft: 'GI Tagged Black Clay',
    region: 'Nizamabad, UP',
    shortDesc: 'Smoked earthen bowl with silver floral inlay.',
    longDesc: 'Distinctive GI-tagged Nizamabad smoked pottery. Fired in an oxygen-deprived kiln to achieve lustrous deep charcoal, then meticulously incised with floral vines filled with genuine silver leaf alloy.'
  },
  {
    id: 'mango-wood-host-tray',
    name: 'Mango Wood Host Serving Tray',
    category: 'Table Décor',
    categoryKey: 'table',
    price: 2100,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHRYavIqNZVWrUgAmvrJyv2qik0LF0Fv106Zoltk3G2uEDLhKEl3genlIzlJkoz7cc-FHHMyWCgsni0jd6OhIclY8Mjd3iEVRn7Qs1A9RSQAJEUvSjMspteNHiWdTJuiDt8AtjzZfWoNF_c0HfMQLgHRgw0AuMtuRKpVs2Bstu66vD61r1bXh6BquJ0B92msr5DSFK9jR8Pc6is14TbMP81WCC58QCFYORSWGPbfylN6t7FKu2EHbHAA',
    artisanCraft: 'Saharanpur Wood Carving',
    region: 'Saharanpur, UP',
    shortDesc: 'Organic edge platter with solid brass handles.',
    longDesc: 'Sustainably seasoned solid mango wood showing rich natural grain and live organic bark edges. Accented with cast brass branch-inspired handles and sealed with food-safe botanical oil.'
  }
];

// ============================================================================
// 5. CUSTOM HAMPER BUILDER ASSETS
// ============================================================================
export interface CustomBox {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
}

export const BASE_BOXES: CustomBox[] = [
  {
    id: 'pinewood-trunk',
    name: 'Pinewood Keepsake Trunk',
    price: 650,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBoHXXQkEujK4k50kaJOvmwp9pbOKOB7GZStHbPTGL_aNwigwqXyKBWjvRF7laCkNPzl_aqHoa3RmIuYbGmWf7I5AzySZhq3AfyyR2ykR3YyMOfRTgOC2PvfZxb4mz9A6aIrSgSTxJMsA3M7MHxd2NyDyd3qh3JYdPu9Epdt_AlHHjGo69EYIdNCaIocRkfE71VWJjaWXQxWIsDsRXMVOgQGPiVol-S8I14_PlPwxxS6aufPgtN7KjxrA',
    description: 'Sustainably seasoned timber trunk with brass clasp.'
  },
  {
    id: 'royal-velvet-box',
    name: 'Royal Emerald Velvet Box',
    price: 850,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuACKWmIq39r1C7ImYY7xQ93UQ26QZ7mmK9Py1WW_6njThzgmOrWrUwrmjhtDNaWLdeMtMzFHlEhuCTuMOC_PEBsxTV2fgnb4vTyIokpTK6Lg5hWISek5sjH1uxaPtgX6nTWAQ910-f7ARMtJrfaBaDccAdJPveDeXxfdwkhoTWTV0tHx2Iymjdoo74U_TLJGKuBGiSTY7eB3MTM8E57ix3TVgM18aK94lWDe5YYX1pzbfXxEcltJrQFIA',
    description: 'Plush velvet casing with antique gold foil crest.'
  },
  {
    id: 'woven-jute-basket',
    name: 'Eco Handwoven Jute Basket',
    price: 450,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCdAeW3y-kD4wS1GbB7nO0UT7uiQE6LDuWcD233TwaFN8-H-CO0p6WniQgoqVv9iuCK06uXUzd1HzlP6pgNJa0VM62joH3iU70SqRgz4QpIjcIRt6y0Coxx8H0PsiLLnMsU2pqGAuLxGBDoF1O_jXzkioCNcn2MYi9raqnPnor3OhX7hkOHsKx-49upjxgEoykRhse5TPJH9gXSvTAPMUpmS7_CTw42hekyLXPOVpcs_IA__koxD3pzGg',
    description: '100% natural braided biodegradable golden jute.'
  }
];

export interface StudioItem {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

export const STUDIO_ITEMS: StudioItem[] = [
  {
    id: 'brass-incense-diya',
    name: 'Brass Incense Diya',
    price: 490,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjifReCv_Vbp5y9HrWO86t1zFirw3xKFQR3Z9oqkCKqSEfysgiugdi-MU8M37EQijqEXJdN8hxXAKhLdW7JfYgluA_o802Pc8udGb4XWGVC7iHxh7M_daWgvX--vzTuVKvkh1u63Yl99OvWnea2lpxt0YGVF79WIpc50C4iITBKBtWcVDR8-lpDG4ThP5Heu6B4bK6WKT3_DBQz5Pe0biJ6_c56nS6uRPo-g2rnIgB5xh0Y4N__qrBsg',
    category: 'Brass'
  },
  {
    id: 'saffron-honey',
    name: 'Kashmiri Saffron Honey (150g)',
    price: 620,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQAbiuYeFgRH8CjPTZHtpRTJXaA3TaUM8BhPRuKco6xuLK-UqfbkFLa1tWTYIDk6DyK6TDpG2XRtgqAd15HZzzz4FeS0GiQeRkUZbBJoq6tNDWj-B8fk8haFVTdNRftOCfQ2xHPaIkuc1v5Dfy0dYYxDN_H9uW0XK4SyOj4m0j7dKcgTEAjJ7-djX7uxHmXihhQCyuvqti0_zgHwKlErkAsXePfQPK-cqPU8GdpotpNnF2f2woe_Rm_g',
    category: 'Gourmet'
  },
  {
    id: 'sandalwood-candle',
    name: 'Pure Sandalwood Soy Candle',
    price: 550,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAY9tZxATrzFF5pRkY30yhf1SdPN113kB3PCT4yUSluVsT92iHreK7b1J_8WDGLsnXdTI1B04UymOxPGxKUBlh2aJbYwssoEy-XvLrwOTqJUGB_QoVM9-sBhkj6AYQA2C0Uf3L4lmRf-VgfRz89H9ZcCcty2YaEOXlz83KCJbtM8-SCv8tBevX6X6muK-8_hFoRjg2BIhwHdqOKVDzCIBepwHlUhuhwtXYS0MMFlXX3T5uIHj789sRAXQ',
    category: 'Aroma'
  },
  {
    id: 'moringa-soap',
    name: 'Moringa & Shea Artisan Soap',
    price: 380,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBPphJfwDpi17dCI1BmrOo5tMq-Nf4qof5f8WHIq4w8SmB6KNzFKHLsVwV-To4O-X0ZbhWyef-WZjkQWfJJeB_uBUlFRUxgYvky1n1UGvREIOWS9BKEyfxJw50ZqdAeQD3GR58RmcoPn1W4Klc-PZ1RxHin8t00gSEud3ecxiodVKRR2sBdOFw9JKl9K3OvSz2gc9u2lqI2VE5uVa2dEMe1A_ysaIuCQlrh05pS-HxwrCsr3eiNvVrxlw',
    category: 'Bath'
  },
  {
    id: 'darjeeling-tea',
    name: 'First-Flush Darjeeling Tea (75g)',
    price: 450,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCgNxeClZVq3VV5iPfPhS3FNRPS5TnmgahGXXyyUENMLmQJetcIi8-o5CYJIB3UollyL7RDV0j-qaWMRcD_Hx6JZcNJXpKrdKxy9ohw3mJN-B9YDbw0TxAIOJfdzmsX0nbiNnxSGazwWXsA5KvPtKADwE0MZsuwQY_Ar3vSlISMI6djPCmFvFIF8VA9faMEwM5K---Yk_nd6Xt67NDxoGAiZVMfNMN21NkukBv-cXlkB6ZtilADszOkdw',
    category: 'Gourmet'
  },
  {
    id: 'clay-kulhar',
    name: 'Hand-thrown Clay Kulhar Cup',
    price: 280,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCYI5ZrTEKhG8bhNoueFeubAqfun_KR1INSUR3yQfPO-KPpPycJOPhLJdwJufFKjeWNuhiSYX5HoBcFFn_kTGydeMGrhDT5eNvoixdygXsVd03MH4ANcNqS1SX_ZsBfCTpI8ZiU84ZQ5AecF0EYsUaCqKxDQLQJetB52WCn_nqEU2nhrvbJQqX_6J00vFDjqEZe1VrVtBBn9UVxn0Q4NZZ1t01n5TkUdp0StDBTh-XRAymiZ8VIyQCTGQ',
    category: 'Ceramic'
  }
];

// ============================================================================
// 6. CUSTOMER REVIEWS (PLACEHOLDERS)
// ============================================================================
// Note: These sample testimonials reflect real customer sentiment and can easily
// be replaced with real reviews from your Google or Shopify store.
export interface Review {
  id: string;
  name: string;
  role: string;
  city: string;
  rating: number;
  text: string;
  initials: string;
}

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    name: 'Aarav Kulkarni',
    role: 'VP Strategy',
    city: 'Mumbai',
    rating: 5,
    text: 'We ordered 85 Royal Diwali Hampers for our leadership team. The beaten brass diyas were museum quality. The WhatsApp concierge was remarkably prompt with our company monogram.',
    initials: 'AK'
  },
  {
    id: 'rev-2',
    name: 'Sunita Mehra',
    role: 'Interior Architect',
    city: 'New Delhi',
    rating: 5,
    text: 'The Custom Hamper Studio made finding a housewarming gift for my sister effortless. The calligraphed card with real dried botanicals had her teary-eyed when it arrived in Delhi.',
    initials: 'SM'
  },
  {
    id: 'rev-3',
    name: 'Nandini Patel',
    role: 'Destination Wedding Planner',
    city: 'Jaipur',
    rating: 5,
    text: 'As a wedding planner, finding gifts that avoid looking cliché is hard. Decorara\'s Oud & Marble hampers set the standard for our VIP wedding welcome favors. Total perfection.',
    initials: 'NP'
  },
  {
    id: 'rev-4',
    name: 'Rohan Thomas',
    role: 'Tech Lead',
    city: 'Bengaluru',
    rating: 5,
    text: 'I tested the AI Gift Finder out of curiosity and was genuinely impressed. Selected the Chai gift set for my boss and it was delivered to Bangalore in 48 hours without a scratch.',
    initials: 'RT'
  }
];

// ============================================================================
// 7. FREQUENTLY ASKED QUESTIONS (FAQS)
// ============================================================================
export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'What are standard delivery timelines across India?',
    answer: 'Standard metro deliveries (Delhi NCR, Mumbai, Bengaluru, Chennai, Hyderabad, Kolkata) take 2 to 4 business days. Tier 2 and Tier 3 cities typically arrive in 4 to 6 business days. Express same-day courier dispatch is available in Bangalore and Delhi NCR upon WhatsApp request.'
  },
  {
    id: 'faq-2',
    question: 'Can I customize the items or add corporate branding?',
    answer: 'Yes, absolutely! For individual orders, use our Custom Hamper Studio or WhatsApp concierge to substitute items. For corporate or wedding orders (over 15 units), we provide custom foil-stamped logos, monogrammed brass plates, and branded ribbon sleeves.'
  },
  {
    id: 'faq-3',
    question: 'How are fragile terracotta and marble items protected?',
    answer: 'We employ a 3-layer protective architecture: molded honeycomb paper cushioning, custom inner corrugated pockets, and external rigid transit crates. We maintain a 99.8% intact transit record and replace any breakage instantly with zero paperwork.'
  },
  {
    id: 'faq-4',
    question: 'What payment methods do you accept?',
    answer: 'We accept all major Indian & International cards (Visa, MasterCard, Amex), UPI (Google Pay, PhonePe, Paytm), and direct Net Banking via encrypted Razorpay invoicing sent to your WhatsApp or email.'
  },
  {
    id: 'faq-5',
    question: 'Do you offer tiered discounts for wedding and bulk orders?',
    answer: 'Yes. Orders above 25 units receive tiered institutional rates between 10% to 22% off catalog pricing, accompanied by dedicated sample mockups and coordinated drop-shipping to multiple recipient addresses.'
  },
  {
    id: 'faq-6',
    question: 'What is your cancellation and exchange policy?',
    answer: 'Standard hamper orders can be cancelled or modified up to 24 hours prior to courier pickup. Personalized monogrammed boxes cannot be refunded once inscribed, but any transit defect is immediately re-dispatched.'
  }
];

// ============================================================================
// 8. INSTAGRAM FEED IMAGES
// ============================================================================
export const INSTAGRAM_POSTS = [
  {
    id: 'ig-1',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMrEyCu3RlUwpSLOMwOS5rNHl3ZZC2ZvKZ_zix7n6bPI2z3BcnROeztIBfmX4mRw75rFT8Xy1Md57zHDJvdXvrAynv3Rad30quNqtv8UFSRn5PqZElU8HQh6lV2s9QTritD20ZliMa0pyFI7YT2YDH42bfVPGNyQ5_S3ctc6yslIxpFong9HK4lNTbRmO1Cgy6mQLVEsA4ahHUoxWdQJqWvHOwRlYzG4CtOcSywZjAe9ZrvCmEt-2PQw',
    alt: 'Hand-poured soy candle in stone bowl with dried orange slices'
  },
  {
    id: 'ig-2',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCLQLfmifX_I2pEZPU89QTut8tZjmsYuUiHCYUCnOfjVbcjW2gPyljEPHq5ulhZS-rBh9nz9vrtyCPdY2q7GLY87hgY_9A-3VE9eSIVDRSLvw79rI3hCVdj-Aelu0u_c4hv3j0cOf0fa9cEP8yn415reQVWX8YhRjlQf1H8kcKuh2ETyOxQLJsnLugX7r3KZq5BOlFLtqgx4DTSY9dSNd6a9uXNlAfem7r1G2pWbp35k3GjIltm6ihIOA',
    alt: 'Artisan stamping gold leaf crest on deep emerald velvet box'
  },
  {
    id: 'ig-3',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBBA-333r2fb7k74pHCZLNmWpFRshUlQ5ha-2C5Wq1G1FlPill_tRv08TbD-8odLqBIT_9Xkc1G7q5gU2gFEhV8-UCBkmwZhgQCgAnaeHxf1BotI-XiTwFNIbQplB7l89SQHB-kVhApOLS7Nmq3fCYNE_4eRsmAj4w0Xf4jzu0Iy_IQzKmCWOCHJ32jItGGRefL7Gd2aJJ6tcOhrzxNA7Fo2UEsppUdE-vAH7AC0gdl0bUaohZpuhDwJA',
    alt: 'Wedding trousseau table set with gift boxes and fresh jasmine'
  },
  {
    id: 'ig-4',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDAV5h3kutiad-Yo-AZPWilODVqLUUD2z0eoyjsXdfDnlnYZXYaYutmdy4iP8YMGBi7kzQQce_1tyQrb0TrB2T52mY3X1fCm6gJGGFmf-qNAkNSIgJOwsMzpMZjTG73tCLzSFq1-GfMNJfVshJ12KpZguu8VfQwfJx2Dtn2Cc9MnvHAL_NEUfBOvQ_-j3Ncn653lSS4sxMHm2Iy70DfsWpN-vVFx-75ofwHhBEyH3acDTu_ie7zI5tULw',
    alt: 'Fluted terracotta vases displayed on a sunny living room console'
  },
  {
    id: 'ig-5',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAnMjXZhYhgCpcKIlahwwCejqmjPFxKhk-dpW7sWeBFRn23hjQzn8OSdz1N9QQihBK57_o_EeGxo4mdjKjJq-q0x7zTR-TVTaXRd0f8XVkdEUZJwjiRVPttnoorx5mxJVpdwQ1Tcj3r_21dnCkm2QarGlciGl5ujyDXY3srgm-ZxEIUyN4mP3aFjoTKfZjqhcdivZWmS13u6fCxSp24SD2-qZn1br5YDRo5Vp7qquDe4vlXCgMqEyPdNQ',
    alt: 'Handwritten calligraphy gift note sealed with terracotta beeswax'
  },
  {
    id: 'ig-6',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC8F2BbHjfTBX39vQeU8TmDvv-dc0XnfsRxDiiNYGGqj7oY_AJhVPLcooe6-dnRd1KlP-agrE6dthbsm0lgrZWSqmapFO6tYpU8abj21oq2X1MWOWAE5_cW4qc_8eoW3sB7eoBxBwgfo1wBav1d0nD3aHdMHbK_kYxOH7ODgBabvMxGZOvc0MOjk3sBQr8j2odPRkieiV38h6kkn-sUmwhW8SgN7nrt9LWNnhhSFPYqW75k8kjyiTg9Yw',
    alt: 'Modern tea ritual setup with steaming brass kettle and terracotta cup'
  }
];

// ============================================================================
// 9. AI GIFT FINDER RECOMMENDATION ENGINE
// ============================================================================
// This modular function matches client quiz answers to the product catalogue.
// To plug in a real LLM API (e.g. Gemini 2.5 via server proxy), replace the body
// of this function with a fetch('/api/recommend-gifts', { method: 'POST', body: ... }).
export interface AiQuizAnswers {
  recipient: string;
  occasion: string;
  budget: string;
  aesthetic: string;
}

export interface AiRecommendation {
  hamper: Hamper;
  rationale: string;
}

export function getAIRecommendations(answers: AiQuizAnswers): AiRecommendation[] {
  const scored = HAMPERS.map(hamper => {
    let score = 0;
    const hTags = hamper.tags.map(t => t.toLowerCase());
    const hDesc = (hamper.description + ' ' + hamper.longDescription).toLowerCase();

    // 1. Recipient affinity
    if (answers.recipient) {
      const rec = answers.recipient.toLowerCase();
      if (hTags.some(t => rec.includes(t) || t.includes(rec))) score += 4;
      if (rec.includes('mother') && (hamper.id.includes('spa') || hamper.id.includes('floral'))) score += 5;
      if (rec.includes('father') && (hamper.id.includes('tea') || hamper.id.includes('desk'))) score += 5;
      if (rec.includes('couple') && (hamper.id.includes('wedding') || hamper.id.includes('oud'))) score += 5;
      if (rec.includes('colleague') && (hamper.id.includes('desk') || hamper.id.includes('tea'))) score += 5;
    }

    // 2. Occasion affinity
    if (answers.occasion) {
      const occ = answers.occasion.toLowerCase();
      if (occ.includes('festive') || occ.includes('diwali')) {
        if (hamper.category === 'Festive' || hDesc.includes('diwali')) score += 6;
      } else if (occ.includes('wedding')) {
        if (hamper.category === 'Wedding' || hDesc.includes('wedding') || hDesc.includes('truffle')) score += 6;
      } else if (occ.includes('housewarming')) {
        if (hamper.id.includes('diwali') || hamper.id.includes('floral') || hamper.id.includes('chai')) score += 5;
      } else if (occ.includes('birthday')) {
        if (hamper.category === 'Birthday' || hamper.id.includes('spa')) score += 6;
      } else if (occ.includes('anniversary')) {
        if (hamper.id.includes('oud') || hamper.id.includes('wedding')) score += 6;
      } else if (occ.includes('corporate')) {
        if (hamper.category === 'Corporate' || hamper.id.includes('desk') || hamper.id.includes('tea')) score += 6;
      }
    }

    // 3. Budget match
    if (answers.budget) {
      if (answers.budget.includes('1,500') && hamper.price <= 1500) score += 5;
      else if (answers.budget.includes('3,000') && hamper.price > 1500 && hamper.price <= 3000) score += 5;
      else if (answers.budget.includes('Above') && hamper.price > 3000) score += 5;
    }

    // 4. Aesthetic match
    if (answers.aesthetic) {
      const aes = answers.aesthetic.toLowerCase();
      if (aes.includes('traditional') && (hTags.includes('traditional indian heritage') || hamper.id.includes('diwali') || hamper.id.includes('mithai'))) score += 5;
      if (aes.includes('minimalist') && (hTags.includes('modern minimalist') || hamper.id.includes('tea') || hamper.id.includes('desk'))) score += 5;
      if (aes.includes('eco') && (hTags.includes('earthy & eco-conscious') || hamper.id.includes('chai') || hamper.id.includes('spa'))) score += 5;
      if (aes.includes('fragrant') && (hamper.id.includes('oud') || hamper.id.includes('spa'))) score += 5;
      if (aes.includes('chai') && (hamper.id.includes('chai') || hamper.id.includes('tea'))) score += 7;
    }

    // Custom generative rationale per item
    let rationale = `Specially selected for a ${answers.occasion || 'milestone celebration'}.`;
    if (hamper.id === 'royal-diwali-hamper') {
      rationale = `Pairs auspicious Moradabad beaten brass with certified Kashmiri saffron honey, reflecting classical hospitality and lasting prestige for ${answers.recipient || 'your loved one'}.`;
    } else if (hamper.id === 'botanical-spa-box') {
      rationale = `A sanctuary of botanical pampering. Steam-distilled Kannauj rose mist and neem comb offer soothing self-care tailored to ${answers.aesthetic || 'wellness'}.`;
    } else if (hamper.id === 'gourmet-brass-tea') {
      rationale = `Elegantly honors quiet morning rituals with first-flush Darjeeling leaf and hand-hammered brass infuser spoon, fitting ${answers.budget || 'your budget'}.`;
    } else if (hamper.id === 'wedding-truffle-box') {
      rationale = `Blends gourmet dark cacao truffles with an architectural marble candle vessel and bespoke gold foil monogramming.`;
    } else if (hamper.id === 'terracotta-chai-set') {
      rationale = `A soulful, tactile gift celebrating earthy tradition with wheel-thrown unglazed clay and stone-ground spices.`;
    } else if (hamper.id === 'luxury-oud-marble') {
      rationale = `Carved Makrana white marble bowl and rare wild Assam oud oil evoke timeless, unforgettable luxury.`;
    } else if (hamper.id === 'mithai-floral-box') {
      rationale = `Delicate balance of gourmet pistachio confectionery with botanical jasmine closet tablets in an embossed brass keepsake tin.`;
    } else if (hamper.id === 'executive-desk-hamper') {
      rationale = `Refined executive desk curation featuring durable full-grain vegan leather, solid brass accessories, and smoked cedarwood notes.`;
    }

    return { hamper, score, rationale };
  });

  // Sort descending by score and pick top 3
  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, 3).map(s => ({ hamper: s.hamper, rationale: s.rationale }));
}
