---
name: Obsidian Amber Portfolio
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#d8c3ad'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#a08e7a'
  outline-variant: '#534434'
  surface-tint: '#ffb95f'
  primary: '#ffc174'
  on-primary: '#472a00'
  primary-container: '#f59e0b'
  on-primary-container: '#613b00'
  inverse-primary: '#855300'
  secondary: '#ffb783'
  on-secondary: '#4f2500'
  secondary-container: '#d97722'
  on-secondary-container: '#451f00'
  tertiary: '#ffc08e'
  on-tertiary: '#4d2600'
  tertiary-container: '#ff9837'
  on-tertiary-container: '#6a3700'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffddb8'
  primary-fixed-dim: '#ffb95f'
  on-primary-fixed: '#2a1700'
  on-primary-fixed-variant: '#653e00'
  secondary-fixed: '#ffdcc5'
  secondary-fixed-dim: '#ffb783'
  on-secondary-fixed: '#301400'
  on-secondary-fixed-variant: '#713700'
  tertiary-fixed: '#ffdcc3'
  tertiary-fixed-dim: '#ffb77d'
  on-tertiary-fixed: '#2f1500'
  on-tertiary-fixed-variant: '#6e3900'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-hero:
    fontFamily: Inter
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.02em
  display-hero-mobile:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 26px
    fontWeight: '600'
    lineHeight: 34px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
    letterSpacing: 0em
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
  label-md:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: 0.03em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.06em
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
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system establishes a high-end, immersive creative showcase tailored for an independent animator and 2D illustrator. Drawing inspiration from premium editorial galleries and curate-driven portfolios on Behance, the visual environment adopts an **Elevated Dark Gallery** aesthetic—stripping away visual clutter to let rich narrative artwork, storyboards, and short films take absolute precedence.

The tonal atmosphere balances disciplined industrial restraint with cinematic warmth: deep obsidian and charcoal grounds, whisper-fine semi-translucent structure, and precise, luminous amber focal accents that mimic projection booth light or a warm desk lamp in a nocturnal studio.

### Key Characteristics
- **Cinematic Noir Backgrounds**: Ground surfaces operate between deep void (`#0a0a0a`) and warm charcoal slabs (`#121212`), preserving deep black levels for vibrant illustrative playback.
- **Micro-tactile Precision**: Subtle frosted finishes (`backdrop-blur`), 1px translucent borders (`border-white/10`), and deliberate spatial breathing room evoke museum-grade exhibition quality.
- **Narrative Warmth**: Dynamic amber and honey-gold highlights inject vitality into hover reactions, metadata pills, project chaptering, and primary calls to action without disrupting visual immersion.

## Colors

The palette operates in strict service of high-contrast visual media. Backgrounds provide zero glare while holding sufficient tonal variation across surface tiers.

### Base Surface Architecture
- **Canvas Base**: `#0a0a0a` — The infinite stage background for media presentation.
- **Surface Elevation 1 (Card/Container)**: `#121212` — Default module background with a subtle matte presence.
- **Surface Elevation 2 (Hover/Overlay/Active)**: `#1c1c1c` — Elevated interactive surfaces and flyouts.
- **Border Trim**: `rgba(255, 255, 255, 0.08)` to `rgba(255, 255, 255, 0.14)` — Razor-thin dividers ensuring structural separation without rigid visual weight.

### Typography & Iconography Tiers
- **Foreground Primary**: `#f5f5f5` — Near-white for high legibility in project titles, loglines, and essential navigation.
- **Foreground Secondary**: `#a3a3a3` — Neutral medium grey for body descriptions, synopsis copy, and metadata tags.
- **Foreground Muted / Tertiary**: `#737373` — Low-emphasis role credits, copyright timestamps, and inactive iconography.

### Chromatic Accents
- **Amber Primary (`#f59e0b`)**: Primary interaction points, glowing indicator rings, project milestone pills, and active states.
- **Warm Honey Secondary (`#fb923c`)**: Hover gradient shifts, secondary highlights, award badges, and media control scrub heads.
- **Dusky Amber Tertiary (`#d97706`)**: Pressed button states and subdued tag backgrounds when combined with 15% opacity fills.

## Typography

Typography prioritizes clarity, structural rhythm, and multilingual compatibility. `Inter` acts as the primary geometric anchor, pairing seamlessly with system CJK fallback (`Noto Sans TC`) to present Chinese film titles (such as《積木 ToyBrick》and《嘿！這次是我覺得》) alongside English production specifications.

### Hierarchy & Typesetting Guidelines
- **Hero & Project Titles**: Dense, confident letter spacing (`-0.02em`) creates crisp editorial headings that anchor media hero sections.
- **Narrative & Project Descriptions**: Set with generous line heights (`1.6` to `1.7`) in `#a3a3a3` to maintain effortless scanning during longer film synopsis reads.
- **Technical Metadata & Tags**: Rendered with upper-tier tracking (`0.03em` to `0.06em`) in semi-bold weights for roles, production years, runtime, festival laurels, and software toolsets.

## Layout & Spacing

The layout utilizes a fluid 12-column foundation engineered specifically for dynamic visual assets, full-bleed animated reels, and asymmetrical masonry grids.

### Breakpoints & Geometry
- **Desktop (1280px+)**: 12-column layout with `3rem` margins and `1.5rem` gutters. Maximum content constrain reaches 1440px for broad visual canvas breathing space.
- **Tablet (768px - 1279px)**: 8-column layout with `2rem` margins and `1.25rem` gutters. Masonry cards condense to 2-column rhythms.
- **Mobile (< 768px)**: 4-column layout with `1.25rem` outer canvas padding. Work cards stack into a clean, edge-to-edge single column with vertical rhythm.

### Grid Cadence
- Showcase features (hero stills and embedded players) use 12-column or 8-column spanning.
- Secondary portfolio galleries leverage alternating masonry splits (e.g., 7/5 or balanced 6/6 column distributions) to break monolithic grids and reflect artistic character.

## Elevation & Depth

Visual hierarchy does not rely on heavy drop shadows; rather, it uses delicate translucency, frosted glass effects, and restrained chromatic ambient blooms.

### Elevation Levels
- **Ground (00)**: `#0a0a0a` — Pristine, flat foundation.
- **Tier 1 (Surface Cards & Plates)**: `#121212` with a uniform `1px solid rgba(255, 255, 255, 0.08)` border. Zero default shadow.
- **Tier 2 (Hovered Cards & Interactive Triggers)**: Background subtly shifts to `#171717`. The border shifts to `rgba(255, 255, 255, 0.18)`, paired with a soft warm amber ambient halo: `0 16px 36px -12px rgba(245, 158, 11, 0.12)`.
- **Tier 3 (Floating Bars, Navigation, and Lightbox Modals)**: `rgba(18, 18, 18, 0.75)` backdrop blur (`20px`) with a brightened top rim highlight `rgba(255, 255, 255, 0.15)`.

## Shapes

The design system maintains a balanced curved geometry (`roundedness: 2`), applying `12px` to `16px` radii across portfolio preview cards, floating headers, and video containers.

### Curvature Rules
- **Micro Elements (Chips, Buttons, Metadata Badges)**: Fixed `8px` (`0.5rem`) for compact definition, transitioning to full pill shape exclusively for category filtering tabs.
- **Standard Modules (Project Cards, Content Blocks, Form Inputs)**: `12px` to `14px` (`rounded-lg`) offering modern softness while matching the sharp borders.
- **Featured Stage Elements (Hero Video Frames, Interactive Lightboxes)**: `16px` (`rounded-xl`) to cushion full-bleed frame boundaries cleanly against deep dark backgrounds.

## Components

### Buttons
- **Primary Action**: Amber pill or 10px rounded container. Solid `#f59e0b` fill, text `#0a0a0a` in bold `label-md`. Hover triggers a smooth warmth transition to `#fb923c` and a subtle glow shadow (`0 0 20px rgba(245, 158, 11, 0.35)`).
- **Secondary / Ghost**: Deep charcoal fill `#121212` or transparent, bounded by `1px solid rgba(255, 255, 255, 0.12)`. Text `#f5f5f5`. On hover, the border lights up to `#f59e0b` with text shifting to `#f59e0b`.

### Portfolio Cards & Masonry Items
- **Structure**: Surface `#121212` encased in `1px solid rgba(255, 255, 255, 0.08)` with `14px` radius.
- **Media Behavior**: Aspect ratio locked (16:9 for animation stills, dynamic vertical for character design / illustration). Artwork scales slightly (`scale(1.025)`) within an overflow-hidden mask on hover.
- **Overlay Layer**: A feathered vertical gradient (`rgba(10, 10, 10, 0)` to `rgba(10, 10, 10, 0.85)`) surfaces project title, release year, and short tags seamlessly at the card foot.

### Chips & Category Filters
- **Default State**: Surface `rgba(255, 255, 255, 0.04)`, border `rgba(255, 255, 255, 0.08)`, text `#a3a3a3`.
- **Active State**: Surface `rgba(245, 158, 11, 0.12)`, border `#f59e0b`, text `#f59e0b` with a small glowing amber dot before the label.

### Form Inputs & Contact Fields
- **Background**: `#0e0e0e`.
- **Border**: `1px solid rgba(255, 255, 255, 0.1)`.
- **Focus**: Border `#f59e0b`, background `#121212`, zero harsh ring—only an ambient `0 0 0 3px rgba(245, 158, 11, 0.15)`.

### Media Viewer / Lightbox
- Frosted veil `rgba(10, 10, 10, 0.92)` with `24px` backdrop blur. Floating dismiss and playback controls utilize frosted pill badges with amber scrubber accents.