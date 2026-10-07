# Design System Master File

> **LOGIC:** When building a specific page, first check `design-system/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---

**Project:** AJ Merlino Portfolio
**Generated:** 2026-09-28 09:31:43
**Category:** Portfolio/Personal
**Design Dials:** Variance 8/10 (Bold / Asymmetric) | Motion 7/10 (Standard) | Density 3/10 (Spacious)

---

## Global Rules

### Color Palette

| Role | Hex | CSS Variable |
|------|-----|--------------|
| Primary | `#171A16` | `--color-primary` |
| On Primary | `#F4F0E7` | `--color-on-primary` |
| Secondary | `#30372D` | `--color-secondary` |
| Accent/CTA | `#A7B58A` | `--color-accent` |
| Background | `#10120F` | `--color-background` |
| Foreground | `#F4F0E7` | `--color-foreground` |
| Muted | `#232821` | `--color-muted` |
| Border | `#475043` | `--color-border` |
| Destructive | `#D87C6C` | `--color-destructive` |
| Ring | `#C9D5A9` | `--color-ring` |

**Color Notes:** Ink-dark canvas, parchment type, and lichen green as the sole active accent. Bark and clay neutrals may support depth but are not used as action colors.

### Typography

- **Heading Font:** Archivo
- **Body Font:** Space Grotesk
- **Mood:** minimal, portfolio, designer, creative, clean, artistic
- **Google Fonts:** [Archivo + Space Grotesk](https://fonts.googleapis.com/css2?family=Archivo:wght@300;400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap)

**CSS Import:**
```css
@import url('https://fonts.googleapis.com/css2?family=Archivo:wght@300;400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
```

### Spacing Variables

*Density: 3/10, spacious*

| Token | Value | Usage |
|-------|-------|-------|
| `--space-xs` | `4px` / `0.25rem` | Tight gaps |
| `--space-sm` | `8px` / `0.5rem` | Icon gaps, inline spacing |
| `--space-md` | `24px` / `1.5rem` | Standard padding |
| `--space-lg` | `32px` / `2rem` | Section padding |
| `--space-xl` | `48px` / `3rem` | Large gaps |
| `--space-2xl` | `64px` / `4rem` | Section margins |
| `--space-3xl` | `96px` / `6rem` | Hero padding |

### Shadow Depths

| Level | Value | Usage |
|-------|-------|-------|
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,0.05)` | Subtle lift |
| `--shadow-md` | `0 4px 6px rgba(0,0,0,0.1)` | Cards, buttons |
| `--shadow-lg` | `0 10px 15px rgba(0,0,0,0.1)` | Modals, dropdowns |
| `--shadow-xl` | `0 20px 25px rgba(0,0,0,0.15)` | Hero images, featured cards |

---

## Component Specs

### Buttons

```css
/* Primary Button */
.btn-primary {
  background: #A7B58A;
  color: #10120F;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  transition: transform 180ms cubic-bezier(.2,.8,.2,1), background-color 180ms cubic-bezier(.2,.8,.2,1);
  cursor: pointer;
}

.btn-primary:hover {
  opacity: 0.9;
  transform: translateY(-1px);
}

/* Secondary Button */
.btn-secondary {
  background: transparent;
  color: #F4F0E7;
  border: 1px solid #475043;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  transition: transform 180ms cubic-bezier(.2,.8,.2,1), border-color 180ms cubic-bezier(.2,.8,.2,1);
  cursor: pointer;
}
```

### Cards

```css
.card {
  background: #171A16;
  border-radius: 12px;
  padding: 24px;
  box-shadow: var(--shadow-md);
  transition: transform 220ms cubic-bezier(.2,.8,.2,1), box-shadow 220ms cubic-bezier(.2,.8,.2,1);
  cursor: pointer;
}

.card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}
```

### Inputs

```css
.input {
  padding: 12px 16px;
  border: 1px solid #E2E8F0;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 200ms ease;
}

.input:focus {
  border-color: #A7B58A;
  outline: none;
  box-shadow: 0 0 0 3px #A7B58A33;
}
```

### Modals

```css
.modal-overlay {
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
}

.modal {
  background: #171A16;
  border-radius: 16px;
  padding: 32px;
  box-shadow: var(--shadow-xl);
  max-width: 500px;
  width: 90%;
}
```

---

## Style Guidelines

**Style:** Organic Biophilic

**Keywords:** Nature, organic shapes, green, sustainable, rounded, flowing, wellness, earthy, natural textures

**Best For:** Wellness apps, sustainability brands, eco products, health apps, meditation, organic food brands

**Key Effects:** Rounded corners (16-24px), organic curves (border-radius variations), natural shadows, flowing SVG shapes

### Page Pattern

**Pattern Name:** Portfolio Grid

- **Conversion Strategy:** Visuals first. Filter by category. Fast loading essential.
- **CTA Placement:** Project Card Hover + Footer Contact
- **Section Order:** 1. Hero (Name/Role), 2. Project Grid (Masonry), 3. About/Philosophy, 4. Contact

---

## Motion

**Stagger List** (Standard): trigger load or scroll | Duration: 300-450ms | Easing: `cubic-bezier(.22,.8,.24,1)`

```js
gsap.from('.grid-item', { opacity: 0, y: 14, filter: 'blur(4px)', duration: 0.42, stagger: { each: 0.06, from: 'start', grid: 'auto' }, ease: 'power3.out' });
```

**Framework notes:** Reveal only when content enters view. Avoid continuous attention-seeking loops; background drift must offer a pause control and be removed for reduced-motion users.

- ✅ Combine with from: 'center' for a bento-grid layout to draw the eye inward first
- ❌ Don't use back.out on dense data tables; the overshoot reads as sloppy on informational UI
- ⚡ Group DOM writes; avoid interleaving layout reads (getBoundingClientRect) between staggered tweens

---

## Anti-Patterns (Do NOT Use)

- ❌ Corporate templates
- ❌ Generic layouts

### Additional Forbidden Patterns

- ❌ **Emojis as icons**: Use SVG icons (Heroicons, Lucide, Simple Icons)
- ❌ **Missing cursor:pointer**: All clickable elements must have cursor:pointer
- ❌ **Layout-shifting hovers**: Avoid scale transforms that shift layout
- ❌ **Low contrast text**: Maintain 4.5:1 minimum contrast ratio
- ❌ **Instant state changes**: Always use transitions (150-300ms)
- ❌ **Invisible focus states**: Focus states must be visible for a11y

---

## Pre-Delivery Checklist

Before delivering any UI code, verify:

- [ ] No emojis used as icons (use SVG instead)
- [ ] All icons from consistent icon set (Heroicons/Lucide)
- [ ] `cursor-pointer` on all clickable elements
- [ ] Hover states with smooth transitions (150-300ms)
- [ ] Light mode: text contrast 4.5:1 minimum
- [ ] Focus states visible for keyboard navigation
- [ ] `prefers-reduced-motion` respected
- [ ] Responsive: 375px, 768px, 1024px, 1440px
- [ ] No content hidden behind fixed navbars
- [ ] No horizontal scroll on mobile
