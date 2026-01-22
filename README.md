# Hillcrest Realty - Next.js Clone

En pixelnära kopia av [Hillcrest Framer Template](https://hillcrest.framer.website/), byggd med Next.js 14, TypeScript och Tailwind CSS.

## Kom igång

### Installation

```bash
# Installera dependencies
npm install

# Starta development server
npm run dev
```

Öppna [http://localhost:3000](http://localhost:3000) i din browser.

### Produktion

```bash
# Bygg för produktion
npm run build

# Starta produktion server
npm start
```

## Projektstruktur

```
hillcrest-realty/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home
│   ├── layout.tsx         # Root layout med Navbar/Footer
│   ├── services/
│   │   ├── page.tsx       # Services
│   │   └── valuation/
│   │       └── page.tsx   # Valuation Request
│   ├── listings/
│   │   ├── page.tsx       # Listings med filter
│   │   └── [slug]/
│   │       └── page.tsx   # Listing Detail
│   ├── about/
│   │   └── page.tsx       # About
│   ├── team/
│   │   └── page.tsx       # Team
│   └── contact/
│       └── page.tsx       # Contact
├── components/            # Återanvändbara komponenter
│   ├── Button.tsx
│   ├── Container.tsx
│   ├── Footer.tsx
│   ├── ListingCard.tsx
│   ├── Navbar.tsx
│   ├── Section.tsx
│   ├── Tabs.tsx
│   └── forms/
│       ├── Input.tsx
│       ├── Select.tsx
│       ├── SegmentedControl.tsx
│       └── Textarea.tsx
├── lib/                   # Data och utilities
│   ├── listings.ts        # Mock listing data
│   └── team.ts            # Mock team data
├── styles/
│   └── globals.css        # Global CSS med design tokens
├── public/
│   └── images/            # Placeholder för bilder
├── DESIGN_SYSTEM.md       # Komplett design system spec
├── VERIFICATION.md        # Pixel parity checklist
├── tailwind.config.ts     # Tailwind med design tokens
└── package.json
```

## Design System

Se `DESIGN_SYSTEM.md` för komplett dokumentation av:
- Typography tokens (H1-H6, body, etc.)
- Color palette
- Spacing system
- Component specifications
- Responsive breakpoints

## Bilder

Projektet förväntar sig bilder i `/public/images/`. Skapa placeholder-bilder eller ersätt med egna:

- `hero-home.jpg` - Hero-bild för startsidan
- `hero-services.jpg` - Hero-bild för services
- `hero-valuation.jpg` - Hero-bild för valuation
- `hero-contact.jpg` - Hero-bild för contact
- `about-preview.jpg` - About-sektion preview
- `about-hero.jpg` - About-sida hero
- `listing-1.jpg` till `listing-6.jpg` - Listing-bilder
- `team-1.jpg` till `team-3.jpg` - Team member-bilder

## Tailwind Konfiguration

Design tokens är mappade i `tailwind.config.ts`:

```typescript
// Exempel på användning
<h1 className="text-h1 text-text-primary">Rubrik</h1>
<p className="text-body-muted">Muted text</p>
<button className="btn btn-primary">Knapp</button>
```

## Verifiering

Se `VERIFICATION.md` för:
- 10-punkts pixel parity checklist
- Vanliga risker vid Framer-kopiering
- Test-strategi för att säkerställa korrekthet

## Teknisk Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Utilities**: clsx

## Licens

MIT
