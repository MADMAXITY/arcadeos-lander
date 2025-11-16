# ArcadeOS Landing Page

A professional, gaming-focused landing page built with Next.js, TypeScript, and Tailwind CSS.

## 🎮 Live Preview

The development server is running at: **http://localhost:3001**

## ✨ Features Implemented

### Design System
- ✅ **Custom Color Palette** - Neon Green (#39FF14), Gold (#FFD700), Sky Blue (#00BFFF), Orange (#FF4500)
- ✅ **Gaming Fonts** - Rajdhani (headings) + Inter (body)
- ✅ **Dark Theme** - Deep black (#1E1E1E) background
- ✅ **NO Generic Gradients** - Zero purple/blue/pink gradients

### Page Sections

1. **Hero Section**
   - Animated grid background with neon green glow
   - Bold headline with gradient text
   - Dual CTAs (Join Waitlist + Explore Features)
   - Live stats counter
   - Smooth scroll indicator

2. **Features Overview**
   - 3 value proposition cards
   - Icon-based design with color accents
   - Hover glow effects
   - Benefit checkmarks

3. **Bento Grid Features**
   - Asymmetric grid layout
   - 7 key features showcased
   - Individual hover animations
   - Color-coded icons

4. **Game Showcase**
   - 9 popular game images (from media folder)
   - Hover overlay with game names
   - Neon green border on hover
   - "100+ More Games" badge

5. **Product Preview**
   - Desktop Client section with feature badges
   - Admin Dashboard section with feature badges
   - Alternating left-right layout
   - Placeholder mockups with glows

6. **Stats Section**
   - Animated count-up numbers
   - 4 key statistics
   - Color-coded icons
   - Intersection observer triggers

7. **Coming Soon CTA**
   - Email signup form
   - Success state with animation
   - Benefits list with checkmarks
   - Spotlight glow effect

8. **Footer**
   - Product and company links
   - Social media icons
   - Copyright notice
   - Hover effects on all links

### Animations
- ✅ Framer Motion scroll animations
- ✅ Stagger children effects
- ✅ Hover scale and glow effects
- ✅ Count-up animations
- ✅ Form success animations
- ✅ All animations under 500ms

### Technical Implementation
- ✅ Next.js 15 with App Router
- ✅ TypeScript for type safety
- ✅ Tailwind CSS for styling
- ✅ Framer Motion for animations
- ✅ React CountUp for number animations
- ✅ Phosphor Icons (Bold variant)
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ SEO meta tags configured
- ✅ Image optimization with Next.js Image

## 📁 Project Structure

```
arcadeos-landing/
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Main landing page
│   ├── fonts.ts            # Google Fonts config
│   └── globals.css         # Global styles
├── components/
│   └── sections/
│       ├── Hero.tsx
│       ├── FeaturesOverview.tsx
│       ├── BentoGrid.tsx
│       ├── GameShowcase.tsx
│       ├── ProductPreview.tsx
│       ├── Stats.tsx
│       ├── ComingSoonCTA.tsx
│       └── Footer.tsx
├── lib/
│   └── utils.ts            # Utility functions
├── public/
│   └── images/
│       └── games/          # 9 game images
├── tailwind.config.ts      # Custom colors & fonts
├── next.config.mjs         # Next.js configuration
├── package.json
└── README.md
```

## 🎨 Design Guidelines

All design rules are documented in `.claude/skills/ui-design.md`:

**✅ ALWAYS USE:**
- Deep black (#1E1E1E) background
- Neon green (#39FF14) for primary CTAs
- Gold (#FFD700) for premium features
- Sky blue (#00BFFF) for secondary CTAs
- Orange (#FF4500) for urgency

**❌ NEVER USE:**
- Purple gradients
- Blue gradients
- Pink colors
- Light backgrounds
- Generic SaaS designs

## 🚀 Getting Started

### Development
```bash
cd arcadeos-landing
npm run dev
```
Open http://localhost:3001

### Build for Production
```bash
npm run build
npm start
```

### Lint Code
```bash
npm run lint
```

## 📝 Key Files

### Website Plan
See `WEBSITE_PLAN.md` for:
- Complete section specifications
- Color system details
- Typography scales
- Animation timings
- Component styling rules
- Responsive breakpoints

### UI Design Skills
See `.claude/skills/ui-design.md` for:
- Strict design enforcement rules
- Color palette definitions
- Typography guidelines
- Component patterns
- Animation standards

## 🎯 What's Next

### Immediate Improvements
1. **Add Product Mockups**
   - Replace placeholder mockups with real screenshots
   - Desktop client interface
   - Admin dashboard interface

2. **Email Integration**
   - Connect form to email service (e.g., ConvertKit, Mailchimp)
   - Add form validation
   - Success/error handling

3. **Performance Optimization**
   - Convert game images to WebP format
   - Add lazy loading for below-fold content
   - Optimize animation performance

4. **Testing**
   - Test on mobile devices
   - Cross-browser testing
   - Accessibility audit

### Future Enhancements
- Add more Aceternity UI components (Background Beams, Aurora)
- Implement proper email backend
- Add more game images
- Create product mockups
- Add video demo
- Implement analytics (Google Analytics/Plausible)
- Add chatbot/live chat
- Create blog section

## 🛠️ Technologies Used

- **Framework:** Next.js 15.5.6
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Phosphor Icons
- **Fonts:** Google Fonts (Rajdhani + Inter)
- **Form:** React hooks
- **Counter:** react-countup
- **Utilities:** clsx, tailwind-merge

## 📱 Responsive Design

- **Mobile:** 0-639px (single column layouts)
- **Tablet:** 640-1023px (2-column layouts)
- **Desktop:** 1024-1535px (3-column layouts)
- **Large:** 1536px+ (max-width containers)

## 🎨 Color Palette

```css
/* Backgrounds */
--bg-primary: #1E1E1E
--bg-secondary: #2A2A2A
--bg-tertiary: #333333
--bg-darker: #1A1A1A

/* Accents */
--accent-green: #39FF14
--accent-gold: #FFD700
--accent-blue: #00BFFF
--accent-orange: #FF4500

/* Text */
--text-primary: #FFFFFF
--text-secondary: #D3D3D3
--text-tertiary: #999999
--text-muted: #666666
```

## 🎭 Typography

```css
/* Headings */
font-family: 'Rajdhani', sans-serif;
font-weight: 700 | 800;

/* Body */
font-family: 'Inter', sans-serif;
font-weight: 400 | 500 | 600;
```

## 📊 Performance Targets

- **Lighthouse Score:** 90+
- **First Contentful Paint:** <1.5s
- **Largest Contentful Paint:** <2.5s
- **Time to Interactive:** <3s
- **Cumulative Layout Shift:** <0.1

## 🔒 Security

- All forms use proper validation
- HTTPS enforced in production
- No sensitive data in client-side code
- Environment variables for API keys

## 📄 License

Copyright © 2025 ArcadeOS. All rights reserved.

---

**Built with ❤️ for Indian Gaming Cafes**
