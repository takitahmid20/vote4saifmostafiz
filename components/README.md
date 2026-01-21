# Vote4Saif Components

This directory contains all reusable components for the Vote4Saif political website.

## Directory Structure

```
components/
├── hero/
│   ├── HeroSection.jsx    # Main hero section with animated elements
│   └── index.js           # Export file
└── ui/
    ├── DonateButton.jsx   # Animated donate button
    └── index.js           # Export file
```

## Hero Section

The hero section features:
- **Dynamic gradient backgrounds** with mouse-tracking effects
- **Animated text** with gradient animations
- **Responsive image display** with decorative frames
- **Interactive statistics** showing supporter count
- **Smooth animations** on page load
- **Bengali typography** optimized for readability

### Usage

```jsx
import { HeroSection } from '@/components/hero';

export default function Page() {
  return <HeroSection />;
}
```

## Donate Button

An animated donate button with:
- **Gradient hover effects**
- **Icon animations** on hover
- **Smooth transitions**
- **Bengali text** (দান করুন)

### Usage

```jsx
import { DonateButton } from '@/components/ui';

export default function Component() {
  return <DonateButton className="custom-class" />;
}
```

## Design Philosophy

The design follows these principles:
- **Modern & Unique**: Uses gradient animations, smooth transitions, and interactive elements
- **Political Theme**: Emphasizes movement, progress, and call-to-action
- **Bengali-First**: Optimized typography and layout for Bengali text
- **Accessible**: Proper focus states and semantic HTML
- **Responsive**: Works seamlessly across all device sizes

## Colors

Main color palette:
- **Emerald**: `#10b981` (Primary CTA, accents)
- **Teal**: `#14b8a6` (Secondary accents)
- **Green**: `#22c55e` (Supporting elements)
- **Dark Slate**: `#0f172a` (Background)

## Animations

Custom animations defined in `globals.css`:
- `animate-gradient`: Background gradient animation
- `animate-float`: Floating element effect
- `animate-pulse-slow`: Slow pulsing effect
- `animate-shimmer`: Shimmer/shine effect
