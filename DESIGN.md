---
name: Neo-Premium Tech Light
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#4d4635'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#7f7663'
  outline-variant: '#d0c5af'
  surface-tint: '#735c00'
  primary: '#735c00'
  on-primary: '#ffffff'
  primary-container: '#d4af37'
  on-primary-container: '#554300'
  inverse-primary: '#e9c349'
  secondary: '#006a6a'
  on-secondary: '#ffffff'
  secondary-container: '#90efef'
  on-secondary-container: '#006e6e'
  tertiary: '#5f5e5e'
  on-tertiary: '#ffffff'
  tertiary-container: '#b4b2b2'
  on-tertiary-container: '#454544'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffe088'
  primary-fixed-dim: '#e9c349'
  on-primary-fixed: '#241a00'
  on-primary-fixed-variant: '#574500'
  secondary-fixed: '#93f2f2'
  secondary-fixed-dim: '#76d6d5'
  on-secondary-fixed: '#002020'
  on-secondary-fixed-variant: '#004f4f'
  tertiary-fixed: '#e5e2e1'
  tertiary-fixed-dim: '#c8c6c5'
  on-tertiary-fixed: '#1c1b1b'
  on-tertiary-fixed-variant: '#474746'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-lg-mobile:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-md:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-max-width: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
  section-gap: 80px
---

## Brand & Style

This design system is built upon the pillars of clarity, authority, and meticulous craft. It targets a high-discretion audience that values transparency and technical excellence. The brand personality is professional and sophisticated, evoking an emotional response of absolute reliability and forward-thinking intelligence.

The visual style is **Corporate Modern** infused with **Glassmorphism**. It utilizes generous whitespace and a "pristine" aesthetic to reduce cognitive load while maintaining a premium feel through high-quality finishings. The design avoids unnecessary decorative elements, opting instead for structural elegance and subtle depth to guide the user's focus toward critical data and trust-building information.

## Colors

The palette is anchored by a high-contrast foundation of Deep Charcoal and Pure White, ensuring maximum legibility and a classic professional tone. 

- **Primary Accent:** Metallic Gold is used sparingly for high-value actions, achievement states, and premium signaling. It represents success and longevity.
- **Secondary Accent:** Teal is employed for functional trust-building elements, such as verified statuses, secure links, and secondary calls to action. It provides a calming, reliable counterpoint to the warmth of the gold.
- **Surfaces:** Pure White serves as the base layer, while Light Gray is used for subtle container differentiation, preventing visual monotony in data-heavy layouts.

## Typography

The typography strategy pairs the geometric confidence of **Montserrat** for headings with the systematic precision of **Inter** for body text. 

Headlines utilize tighter letter spacing and bold weights to command attention and convey a sense of architectural strength. Body copy is set with generous line heights to ensure long-form readability and a breathable feel. Labels and small metadata utilize Inter in a semi-bold weight with slight tracking to maintain clarity at small scales, reinforcing the technical and precise nature of the system.

## Layout & Spacing

This design system employs a **Fixed Grid** model for desktop to maintain a controlled, high-end editorial feel, transitioning to a fluid layout for mobile devices. 

- **Desktop:** 12-column grid with 24px gutters and wide 64px margins. Content is centered with a maximum width of 1280px to prevent excessive line lengths.
- **Mobile:** 4-column fluid grid with 16px gutters and 20px safe-area margins.
- **Spacing Rhythm:** An 8px linear scale governs all spatial relationships. Vertical rhythm is strictly enforced to maintain a sense of mathematical balance, with larger gaps (80px+) used to separate distinct thematic sections.

## Elevation & Depth

Visual hierarchy is achieved through a combination of **Ambient Shadows** and **Light Glassmorphism**.

1.  **Low Elevation:** Subtle 1px borders in a soft gray (#E5E7EB) define secondary containers without adding visual weight.
2.  **Mid Elevation:** Cards and interactive elements use highly diffused, low-opacity shadows (Offset: 0, 4px; Blur: 20px; Color: rgba(0,0,0, 0.05)) to suggest "lift" from the surface.
3.  **High Elevation:** Overlays and dropdowns utilize a "Light Frost" effect—a semi-transparent white background (80% opacity) with a 12px backdrop-blur and a crisp white inner border to simulate a premium glass pane.

## Shapes

The shape language is defined by a "Rounded" (Level 2) approach. This strikes a balance between the clinical sharpness of high-tech industries and the approachability required for consumer trust. 

Standard components (buttons, inputs) utilize a 0.5rem corner radius. Larger layout containers and feature cards use 1rem (rounded-lg) or 1.5rem (rounded-xl) to create a softer, more modern silhouette. Icons should follow these proportions, avoiding sharp 90-degree corners in favor of micro-radii.

## Components

- **Buttons:** Primary buttons are solid Metallic Gold with Deep Charcoal text. Secondary buttons use a Teal outline with Teal text. All buttons feature a subtle transition on hover, deepening the shadow slightly rather than changing the base color drastically.
- **Input Fields:** Use a white surface with a Light Gray border. Upon focus, the border transitions to Teal with a soft glow effect. Error states use a muted crimson, ensuring they are distinct but not jarring.
- **Cards:** Defined by a white background, a Level 2 corner radius, and a Mid-elevation shadow. Hover states on interactive cards should see a subtle vertical translation (-4px) to provide tactile feedback.
- **Chips & Tags:** Small, pill-shaped elements with a Light Gray background and Muted Gray text. When used for "Status," they adopt a low-saturation version of the status color (e.g., pale teal for "Success").
- **Glass Overlays:** Modals and navigation bars should utilize the Light Frost effect to maintain context of the underlying content while providing a focused foreground experience.