---
name: Artisanal Heritage Luxury
colors:
  surface: '#fdf9f3'
  surface-dim: '#dddad4'
  surface-bright: '#fdf9f3'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f7f3ed'
  surface-container: '#f1ede7'
  surface-container-high: '#ebe8e2'
  surface-container-highest: '#e6e2dc'
  on-surface: '#1c1c18'
  on-surface-variant: '#434843'
  inverse-surface: '#31302d'
  inverse-on-surface: '#f4f0ea'
  outline: '#747872'
  outline-variant: '#c3c8c1'
  surface-tint: '#546255'
  primary: '#263328'
  on-primary: '#ffffff'
  primary-container: '#3c4a3e'
  on-primary-container: '#a9b9aa'
  inverse-primary: '#bbcbbb'
  secondary: '#904b36'
  on-secondary: '#ffffff'
  secondary-container: '#fea58a'
  on-secondary-container: '#783925'
  tertiary: '#402c00'
  on-tertiary: '#ffffff'
  tertiary-container: '#5b420c'
  on-tertiary-container: '#d2af70'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d7e7d6'
  primary-fixed-dim: '#bbcbbb'
  on-primary-fixed: '#111e14'
  on-primary-fixed-variant: '#3c4a3e'
  secondary-fixed: '#ffdbd0'
  secondary-fixed-dim: '#ffb59f'
  on-secondary-fixed: '#3a0a00'
  on-secondary-fixed-variant: '#733521'
  tertiary-fixed: '#ffdea6'
  tertiary-fixed-dim: '#e6c180'
  on-tertiary-fixed: '#271900'
  on-tertiary-fixed-variant: '#5b430d'
  background: '#fdf9f3'
  on-background: '#1c1c18'
  surface-variant: '#e6e2dc'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 56px
    fontWeight: '400'
    lineHeight: 68px
    letterSpacing: -0.01em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 36px
    fontWeight: '400'
    lineHeight: 44px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '400'
    lineHeight: 48px
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '400'
    lineHeight: 36px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 40px
  headline-md-mobile:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '400'
    lineHeight: 32px
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
  title-lg:
    fontFamily: Playfair Display
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.04em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.08em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 4rem
  margin-tablet: 2rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system embodies modern-traditional Indian luxury gifting and curated home living. It bridges generational craftsmanship with contemporary editorial restraint. The aesthetic balances warmth, generosity, and tactile sophistication—recalling unhurried hospitality, festive warmth, raw terracotta vessels, and hammered brass accents.

The visual style is **Tactile Luxury & Editorial Minimalism**. It favors generous negative space, soft ambient lighting, refined borders, and delicate metallic detailing over synthetic gradients or flat utility. Interfaces feel curated rather than purely transactional, evoking the experience of walking through an intimate salon or boutique gallery.

## Colors

The palette is rooted in classical Indian architectural pigments and organic materials:
- **Primary (`#3C4A3E` - Forest Olive):** Used for typography, high-priority interactive states, and grounding structural outlines. Replaces harsh blacks with earthy depth.
- **Secondary (`#C0725A` - Terracotta Clay):** Used for primary CTAs, festive badging, product tags, and expressive accents.
- **Tertiary (`#B8975A` - Antique Brass):** Reserved for celebratory highlights, subtle dividers, award seals, and micro-accents.
- **Neutral (`#FAF6F0` - Soft Ivory):** The primary canvas color, creating a warm, non-glare foundation.
- **Sub-Neutral Support (`#E9CFC4` - Warm Blush):** Used for secondary surface panels, gift-card holders, and subtle hover states.

### Semantic Rules
- Never use pure black (`#000000`) for text or borders; `#3C4A3E` serves as the highest-contrast foreground token.
- Backgrounds should avoid stark optical whites; card containers sit on pure white (`#FFFFFF`) or tinted blush (`#E9CFC4` at 20% opacity) against the default `#FAF6F0` canvas to preserve soft separation.

## Typography

The type system blends the high-fashion, editorial cadence of **Playfair Display** with the functional, effortless clarity of **Inter**. 

- **Headlines & Narrative Moments:** Rendered in Playfair Display. Headline styles lean toward normal weights (400) to maintain an artisanal literary feel.
- **Product Details & UI Utility:** Rendered in Inter with generous line-height to ensure frictionless readability in commerce contexts.
- **Labels & Micro-copy:** Uppercase treatments must always carry tracked letter-spacing (`0.04em` to `0.08em`) to mimic stamped hallmark labels and bespoke product badging.

## Layout & Spacing

The layout is built upon an expansive 12-column fluid grid system on desktop, collapsing to an 8-column layout on tablet and a 4-column layout on mobile.

- **Generous Canvas Margins:** Desktop layouts feature an intentional `margin` of `4rem` (64px) to frame product compositions like art pieces.
- **Rhythm & Cadence:** Generous section spacing (`space-xl` multiplied by 2 or 3 for vertical editorial dividers) ensures products have room to breathe, reinforcing the perception of boutique rarity over high-density catalogue sales.
- **Vertical Alignment:** Keep narrative copy blocks offset from product visuals to produce relaxed editorial spreads.

## Elevation & Depth

Visual hierarchy uses warm, organic depth rather than synthetic drop shadows:

- **Ambient Shading:** Shadows are tinted with forest olive and clay undertones rather than neutral black (e.g., `rgba(60, 74, 62, 0.06)`). They feature wide diffusion (16px to 32px blur) with minimal vertical offset (4px to 8px) to emulate natural, diffused indoor light.
- **Surface Elevation:** Depth is achieved primarily through warm surface layering: canvas `#FAF6F0` elevates to `#FFFFFF` for product card containers, and shifts to `#E9CFC4` for featured hampers or bespoke curation trays.
- **Metallic Edge Cues:** Elevated interactive elements (such as modal overlays or gifting selectors) feature a 1px border tinted in Antique Brass (`#B8975A`) at 30% opacity to evoke gilded edging.

## Shapes

The shape system centers on a calibrated 16px corner geometry (`rounded-lg`), delivering a soft, handcrafted curve reminiscent of shaped clay and curved woodcraft.

- Standard buttons, product imagery containers, and cards use `rounded-lg` (16px / 1rem).
- Small tags, chips, and micro-badges use `rounded` (8px / 0.5rem).
- Large focal containers, feature gift hampers, and modal dialogs use `rounded-xl` (24px / 1.5rem).
- Full circular radii (`rounded-full`) are reserved strictly for icon buttons, swatches, and badge counter indicators.

## Components

### Buttons
- **Primary CTA:** Clay terracotta (`#C0725A`) fill with ivory (`#FAF6F0`) typography. 16px radius, `space-md` vertical and `space-xl` horizontal padding. Subtle elevation with soft clay ambient glow on hover.
- **Secondary CTA:** Forest Olive (`#3C4A3E`) outline (1.5px) over transparent or `#FAF6F0` background.
- **Luxury Accent CTA:** Forest Olive background with Antique Brass (`#B8975A`) metallic foil border and warm ivory text, reserved for bespoke personalization and gifting concierge actions.

### Cards & Curations
- **Product Card:** White (`#FFFFFF`) or tinted neutral surface with a 16px radius. Images sit inside an internal 12px inset with gentle organic tone. Card borders are soft (`#E9CFC4` at 40% opacity). Hover state lifts the card with an ambient tinted shadow (`0 12px 24px rgba(60, 74, 62, 0.08)`).
- **Gift Box Card:** Emphasizes tactile packaging with a brass-accented corner ribbon and option for monogram previews.

### Chips & Tags
- Pill or 8px soft-rounded capsules.
- **Occasion Tags (Diwali, Housewarming, Wedding):** Antique Brass subtle tint fill with dark olive text (`#3C4A3E`).
- **Artisan Material Chips:** Transparent base with 1px `#C0725A` border and Terracotta text.

### Form Inputs & Selectors
- Background filled with solid white (`#FFFFFF`) or subtle `#FAF6F0`. 
- 1px border in `#3C4A3E` (at 20% opacity). On focus, transition border to Antique Brass (`#B8975A`) with a soft glow ring.
- Checkboxes and radio buttons use organic rounded profiles with Terracotta checkmarks and brass focus boundaries.

### Additional Domain Components
- **Gift Concierge Tray:** A multi-step tray interface featuring warm blush velvet surfaces, gilded progress indicators, and custom calligraphic note inputs.
- **Artisan Origin Seal:** Circular typographic badge with Antique Brass outline detailing handcrafted authenticity and region of origin.