# C) Verification - Pixel Parity Checklist

## Pixel Parity Checklist (10 punkter att dubbelkolla)

### 1. Typography H1
- [ ] Desktop: 46px, font-weight 500, line-height 50.6px, letter-spacing -1.9px
- [ ] Mobile: 42px, line-height 46.2px, letter-spacing -0.84px
- [ ] Font family: Inter med korrekt fallback

### 2. Container/Section Spacing
- [ ] Desktop section padding: 96px/120px (vertical) × 48px (horizontal)
- [ ] Mobile section padding: 60-64px (vertical) × 16-20px (horizontal)
- [ ] Container max-width: 1184px centrerad

### 3. Navbar
- [ ] Höjd: 66px
- [ ] Padding: 16px 48px
- [ ] Logo: 20px, font-weight 400, färg #161A50, letter-spacing -0.8px
- [ ] Nav links: 14px, font-weight 500, letter-spacing -0.5px
- [ ] Contact-knapp: border-radius 5px med inset shadow border

### 4. Listing Card Dimensions
- [ ] Bild höjd: 272px
- [ ] Bild border-radius: 8px
- [ ] Badge padding: 8px 12px
- [ ] Badge border-radius: 6px
- [ ] Badge bakgrund: #F7F7F8
- [ ] Content gap: 12px

### 5. Grid Layout (Listings)
- [ ] 3 kolumner på desktop
- [ ] Column gap: 24px
- [ ] Row gap: 40px
- [ ] Responsiv: 2 kolumner på tablet, 1 på mobil

### 6. Button Styles
- [ ] Padding: 10px 22px
- [ ] Border-radius: 5px
- [ ] Height: ~34px
- [ ] Font: 14px, font-weight 500
- [ ] Primary: dark bg, white text
- [ ] Outline: transparent bg, inset border shadow

### 7. Form Input Styles
- [ ] Font: 16px, font-weight 400
- [ ] Underline-stil (border-bottom only)
- [ ] Label: 12px, font-weight 400
- [ ] Form container: padding 40px, border-radius 8px

### 8. Color Accuracy
- [ ] Text primary: #18181B
- [ ] Text secondary/muted: #5D5D65
- [ ] Badge background: #F7F7F8
- [ ] Logo: #161A50

### 9. Tab Filter Styles
- [ ] Font: 14px, font-weight 500
- [ ] Active state: underline
- [ ] Gap mellan tabs: ~16px

### 10. Footer Layout
- [ ] 3-kolumn grid
- [ ] Heading font: 16px, font-weight 500
- [ ] Link font: 16px, font-weight 500, färg #5D5D65
- [ ] Watermark logo: mycket ljusgrå (#F5F5F5), stor storlek

---

## De 5 Vanligaste Riskerna vid Framer-kopiering

### 1. Font Rendering Skillnader
**Problem**: Framer använder specifik font-rendering som kan se annorlunda ut i vanlig HTML/CSS.

**Lösning i koden**:
- Använder `antialiased` på body för jämnare rendering
- Importerar Inter direkt från Google Fonts med rätt weights
- Specificerar fallback fonts identiskt

### 2. Line-Height och Letter-Spacing Rounding
**Problem**: Framer kan ha subpixel-värden som browsers rundar olika.

**Lösning i koden**:
- Alla värden är extraherade via DevTools computed styles
- Använder exakta px-värden istället för em/rem för kritiska element
- Tailwind config har exakta tokens definierade

### 3. Container Padding vid Olika Breakpoints
**Problem**: Framer har ibland asymmetrisk padding som ändras vid breakpoints.

**Lösning i koden**:
- Definierat separata CSS variabler för desktop/mobile spacing
- Section-komponenten hanterar responsiv padding
- Container har max-width med auto margin för centrering

### 4. Box-Shadow som Border (Framer-specifikt)
**Problem**: Framer använder ofta `inset box-shadow` istället för verklig `border`.

**Lösning i koden**:
- `.btn-outline` använder `box-shadow: inset 0 0 0 1px` precis som Framer
- Definierat `--shadow-border` token för konsekvent användning
- Hover states ändrar shadow istället för border

### 5. Image Object-Fit och Aspect Ratio
**Problem**: Bilder kan skäras eller sträckas annorlunda mellan Framer och CSS.

**Lösning i koden**:
- Alla bilder använder `object-cover` explicit
- Card-bilder har fast höjd (272px) med `aspect-ratio` som fallback
- Hero-bilder är `fill` med absolute positioning
- Border-radius appliceras på container, inte bild

---

## Ytterligare Rekommendationer

### För Pixelnära Resultat:
1. **Använd placeholder-bilder** med samma aspect ratio som originalet
2. **Testa på exakt samma viewport-bredd** (1280px för desktop)
3. **Verifiera font-loading** - Inter måste vara fullständigt laddat innan jämförelse
4. **Kontrollera browser zoom** - ska vara 100%

### Kända Begränsningar:
- Framer-specifika animationer är inte replikerade
- Hover micro-interactions kan skilja sig
- Exakt scroll-beteende kan variera
- Mobile hamburger-meny är förenklad jämfört med Framer's

### Test-strategi:
1. Öppna original och kopia sida vid sida
2. Använd browser DevTools element picker för att jämföra computed styles
3. Ta screenshots och overlay med 50% opacity för att hitta avvikelser
4. Testa på minst 3 breakpoints: 375px, 768px, 1280px
