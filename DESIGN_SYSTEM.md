# Hillcrest Realty - Design System Specification

## A) Design System Spec (Exakt, Mätbart)

---

## 1. Typography

### Font Family
- **Primary Font**: Inter (Google Fonts)
- **Fallback**: "Inter Placeholder", sans-serif
- **Load URL**: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap`
- **Weights Used**: 400 (Regular), 500 (Medium)

### Text Styles (Desktop)

| Token | Element | font-size | font-weight | line-height | letter-spacing | text-transform | color |
|-------|---------|-----------|-------------|-------------|----------------|----------------|-------|
| `h1-hero` | H1 (Hero) | 46px | 500 | 50.6px (1.1em) | -1.9px | none | #FFFFFF (hero) / #18181B (page) |
| `h2` | H2 | 32px | 500 | 38.4px (1.2em) | -1.3px | none | #18181B |
| `h3` | H3 | 24px | 500 | 28.8px (1.2em) | -0.96px | none | #18181B |
| `h5-footer` | H5 (Footer headings) | 16px | 500 | 19.2px | normal | none | #18181B |
| `h6-eyebrow` | H6 (Eyebrow) | 14px | 400 | 16.8px (1.2em) | normal | uppercase | #FFFFFF |
| `body` | Body text | 16px | 400 | 24px (1.5em) | normal | none | #18181B |
| `body-muted` | Muted text | 16px | 500 | 24px | normal | none | #5D5D65 |
| `nav-link` | Nav links | 14px | 500 | 14px (1em) | -0.5px | none | #18181B |
| `button-text` | Button text | 14px | 500 | 14px | normal | none | #FFFFFF / #18181B |
| `badge` | Badge text | 12px | 400 | normal | normal | none | #18181B |
| `label` | Form labels | 12px | 400 | normal | normal | none | #000000 |
| `input` | Form inputs | 16px | 400 | normal | normal | none | #18181B |

### Text Styles (Mobile - 375px)

| Token | font-size | line-height | letter-spacing |
|-------|-----------|-------------|----------------|
| `h1-hero` | 42px | 46.2px | -0.84px |
| Section padding | 60-64px vertical | 16-20px horizontal | - |

---

## 2. Color Tokens

### Primary Colors
| Token | Hex | RGB | Usage |
|-------|-----|-----|-------|
| `--color-text-primary` | #18181B | rgb(24, 24, 27) | Primary text, headings |
| `--color-text-secondary` | #5D5D65 | rgb(93, 93, 101) | Muted text, prices, metadata |
| `--color-text-white` | #FFFFFF | rgb(255, 255, 255) | Text on dark/image backgrounds |
| `--color-background` | #FFFFFF | rgb(255, 255, 255) | Page background |
| `--color-badge-bg` | #F7F7F8 | rgb(247, 247, 248) | Badge backgrounds |
| `--color-border` | #000000 | rgb(0, 0, 0) | Button borders (1px inset shadow) |
| `--color-logo` | #161A50 | rgb(22, 26, 80) | Logo text color |
| `--color-footer-text` | #5D5D65 | rgb(93, 93, 101) | Footer links |

### State Colors
| Token | Value | Usage |
|-------|-------|-------|
| `--color-link-hover` | underline | Active tab indicator |
| `--color-focus-ring` | #18181B | Focus states |

---

## 3. Spacing + Layout

### Container
| Token | Desktop | Mobile |
|-------|---------|--------|
| `--container-max-width` | 1184px (content) / 1280px (viewport) | 100% |
| `--container-padding` | 48px | 16-20px |

### Section Spacing
| Token | Desktop | Mobile |
|-------|---------|--------|
| `--section-padding-y` | 96px / 120px | 60-64px |
| `--section-padding-x` | 48px | 16-20px |

### Grid (Listings)
| Token | Value |
|-------|-------|
| `--grid-columns` | 3 (desktop) / 1-2 (mobile) |
| `--grid-column-gap` | 24px |
| `--grid-row-gap` | 40px |
| `--card-width` | ~379px (flexible) |

### Component Spacing
| Token | Value |
|-------|-------|
| `--card-content-gap` | 12px / 24px |
| `--badge-padding` | 8px 12px |
| `--button-padding` | 10px 22px |
| `--input-padding` | 0 0 9px 0 |
| `--form-container-padding` | 40px |

---

## 4. Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-button` | 5px | Buttons |
| `--radius-badge` | 6px | Badges, tags |
| `--radius-card` | 8px | Cards, images |
| `--radius-form` | 8px | Form containers |
| `--radius-input` | 0px | Inputs (underline style) |

---

## 5. Shadows

| Token | Value | Usage |
|-------|-------|-------|
| `--shadow-border` | `0 0 0 1px rgb(0,0,0) inset` | Button borders (Framer style) |
| `--shadow-card` | none | Cards have no shadow |

---

## 6. Components

### Navbar
| Property | Value |
|----------|-------|
| Height | 66px |
| Padding | 16px 48px |
| Background | #FFFFFF |
| Position | relative (not sticky) |
| Logo font-size | 20px |
| Logo font-weight | 400 |
| Logo color | #161A50 |
| Logo letter-spacing | -0.8px |
| Nav link font-size | 14px |
| Nav link font-weight | 500 |
| Nav link color | #18181B |
| Contact button | Outlined, border-radius 5px |

### Buttons

#### Primary (Filled)
| Property | Value |
|----------|-------|
| Padding | 10px 22px |
| Border-radius | 5px |
| Background | transparent with white text overlay |
| Font | 14px / 500 |
| Height | 34px |
| Hover | opacity change |

#### Secondary (Outlined)
| Property | Value |
|----------|-------|
| Padding | 10px 22px |
| Border-radius | 5px |
| Border | 1px solid #000000 (via box-shadow inset) |
| Background | transparent |
| Font | 14px / 500 / #18181B |

### Listing Card
| Property | Value |
|----------|-------|
| Image height | 272px |
| Image border-radius | 8px |
| Content gap | 12px |
| Badge padding | 8px 12px |
| Badge border-radius | 6px |
| Badge background | #F7F7F8 |
| Badge font | 12px / 400 |
| Price font | 16px / 500 / #5D5D65 |
| Address font | 16px / 500 / #18181B |
| Metadata font | 16px / 500 / #5D5D65 |

### Filter Tabs
| Property | Active | Inactive |
|----------|--------|----------|
| Font | 14px / 500 | 14px / 500 |
| Color | #18181B | #18181B |
| Decoration | underline | none |
| Gap | 16px |

### Form Components

#### Input
| Property | Value |
|----------|-------|
| Font | 16px / 400 |
| Padding | 0 0 9px 0 |
| Border | none (underline via border-bottom) |
| Border-bottom | 1px solid #E5E5E5 (ASSUMPTION) |
| Background | transparent |
| Height | 31px |

#### Label
| Property | Value |
|----------|-------|
| Font | 12px / 400 |
| Color | #000000 |

#### Submit Button
| Property | Value |
|----------|-------|
| Padding | 12px 22px |
| Border-radius | 6px |
| Height | 40px |
| Width | 100% |
| Background | #18181B |
| Color | #FFFFFF |

### Footer
| Property | Value |
|----------|-------|
| Background | #FFFFFF |
| Padding | 96px 48px (via section) |
| Grid | 3 columns |
| Heading font (H5) | 16px / 500 / #18181B |
| Link font | 16px / 500 / #5D5D65 |
| Link gap | 16px |
| Large logo | ~200px, very light gray (#F5F5F5) |

---

## 7. Images

| Property | Value |
|----------|-------|
| Hero aspect-ratio | ~16:9 (full-width) |
| Card image aspect-ratio | ~4:3 (272px height at 379px width) |
| Object-fit | cover |
| Corner radius | 8px |
| Team member images | ~1:1 portrait, rounded 8px |

---

## 8. Motion / Transitions

| Property | Value |
|----------|-------|
| Button hover | transition: all |
| Link hover | text-decoration: underline |
| Duration | ~200ms (ASSUMPTION) |
| Easing | ease-out (ASSUMPTION) |

---

## 9. Breakpoints

| Name | Value |
|------|-------|
| Mobile | < 768px |
| Tablet | 768px - 1024px |
| Desktop | > 1024px |

### Responsive Changes
- H1: 46px → 42px
- Section padding: 96-120px → 60-64px vertical
- Section padding: 48px → 16-20px horizontal
- Grid columns: 3 → 2 → 1
- Navbar: Full menu → Hamburger

---

## ASSUMPTIONS (Markerade)

1. Input border-bottom color: #E5E5E5 (kunde inte mäta exakt)
2. Transition duration: 200ms
3. Transition easing: ease-out
4. Some hover states based on visual inspection
5. Exact breakpoint values based on common Framer defaults
