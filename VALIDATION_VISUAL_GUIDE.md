# Validation Dashboard - Visual Guide

## Page Layout

```
┌─────────────────────────────────────────────────────────────────┐
│                    VALIDATION DASHBOARD                          │
│           Cosilico accuracy vs. PolicyEngine and TAXSIM          │
│                                                                  │
│  Data: CPS 2023 ASEC    Commit: e2eeecb    Updated: Dec 11     │
│  ┌──────────┐                                                   │
│  │ SAMPLE   │  (Badge appears if using sample data)            │
│  └──────────┘                                                   │
└─────────────────────────────────────────────────────────────────┘

┌──────────────── OVERALL STATISTICS ────────────────────────────┐
│                                                                 │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐       │
│  │ 156,420  │  │  98.00%  │  │  $45.20  │  │   5.0x   │       │
│  │ Households│  │Agg Match │  │   MAE    │  │Speed vs PE│       │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘       │
│                      ^                                          │
│                 (Highlighted in teal)                           │
└─────────────────────────────────────────────────────────────────┘

┌──────────────── PERFORMANCE ───────────────────────────────────┐
│                                                                 │
│  ┌─────────────────┐         ┌─────────────────┐              │
│  │   Cosilico      │         │  PolicyEngine   │              │
│  │                 │         │                 │              │
│  │   284.5K/s      │         │    56.9K/s      │              │
│  │   throughput    │         │   throughput    │              │
│  │                 │         │                 │              │
│  │   100ms total   │         │   500ms total   │              │
│  └─────────────────┘         └─────────────────┘              │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘

┌──────────────── VALIDATORS ────────────────────────────────────┐
│                                                                 │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐               │
│  │ cosilico   │  │policyengine│  │  taxsim    │               │
│  │   vdev     │  │   v1.0.0   │  │   v35      │               │
│  │ ✓ 156,420  │  │ ✓ 156,420  │  │ ✓ 156,420  │               │
│  │ households │  │ households │  │ households │               │
│  └────────────┘  └────────────┘  └────────────┘               │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘

┌──────────────── PER-VARIABLE RESULTS ──────────────────────────┐
│                                                                 │
│  ┌───────────────────────────────────────────────────────────┐ │
│  │ Earned Income Tax Credit              26/32      eitc     │ │
│  │                                                            │ │
│  │ Match Rate    Households    MAE         Speedup           │ │
│  │   98.00%       28,450      $45.20        5.0x            │ │
│  │                                                            │ │
│  │ PolicyEngine: 98.80%    TAXSIM: 97.30%                   │ │
│  │                                                            │ │
│  │ ▼ 2 mismatch types                                        │ │
│  │   • Investment income disqualification - 320 cases        │ │
│  │     TAXSIM uses different threshold                       │ │
│  │     Citation: 26 USC § 32(i)                              │ │
│  │                                                            │ │
│  │   • Age requirement edge cases - 180 cases                │ │
│  │     TAXSIM bug: ignores minimum age requirement           │ │
│  │     Citation: 26 USC § 32(c)(1)(A)(ii)(II)               │ │
│  │     → Upstream issue                                      │ │
│  └───────────────────────────────────────────────────────────┘ │
│                                                                 │
│  ┌───────────────────────────────────────────────────────────┐ │
│  │ Child Tax Credit                      26/24       ctc     │ │
│  │                                                            │ │
│  │ Match Rate    Households    MAE         Speedup           │ │
│  │   99.20%       42,180      $12.50        4.8x            │ │
│  │                                                            │ │
│  │ PolicyEngine: 99.40%    TAXSIM: 99.10%                   │ │
│  │                                                            │ │
│  │ ▼ 2 mismatch types                                        │ │
│  │   • ACTC refundable portion edge cases - 245 cases       │ │
│  │   • Phaseout rounding differences - 85 cases              │ │
│  └───────────────────────────────────────────────────────────┘ │
│                                                                 │
│  ┌───────────────────────────────────────────────────────────┐ │
│  │ Standard Deduction                    26/63               │ │
│  │                                  standard_deduction       │ │
│  │                                                            │ │
│  │ Match Rate    Households    MAE         Speedup           │ │
│  │   99.97%      156,420       $0.50        6.2x            │ │
│  │                                                            │ │
│  │ PolicyEngine: 99.99%    TAXSIM: 99.96%                   │ │
│  └───────────────────────────────────────────────────────────┘ │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

## Color Scheme

### Header
- Background: Teal gradient (#319795 → #2c8a88)
- Text: White

### Overall Stats
- Cards: White with gray border
- Highlighted card: Teal gradient (aggregate match rate)
- Hover: Teal border glow

### Performance
- Cards: White with gray border
- Headers: Teal text
- Values: Large, bold numbers

### Validators
- Available: Green border + green checkmark
- Unavailable: Grayed out
- Background: White → light green gradient (for available)

### Per-Variable Cards
- Background: White
- Borders: Gray (teal on hover)
- Code blocks: Light gray background
- Statute citations: Teal color
- Mismatches: Amber background with amber left border

## Interactive Elements

### Hover Effects
- Cards lift slightly with shadow
- Borders change to teal
- Cursor: pointer on clickable elements

### Expandable Sections
- Mismatches collapse/expand with ▼ icon
- Click summary to reveal details
- Smooth transition

### Links
- Upstream issues: Teal, underline on hover
- External links: Arrow icon (→)

## Responsive Behavior

### Desktop (>768px)
- Stats: 4 columns
- Speed: 2 columns
- Validators: 3 columns
- Sections: Single column (full width)

### Mobile (<768px)
- Stats: Single column stacked
- Speed: Single column stacked
- Validators: Single column stacked
- Sections: Full width with smaller font

## Typography

### Fonts
- **Primary**: Inter (Google Fonts)
- **Code**: SF Mono / Monaco (monospace)

### Sizes
- Page title: 48px (32px mobile)
- Section headings: 28px
- Card titles: 20px
- Stats values: 36px
- Body text: 14-16px
- Code: 13-14px

### Weights
- Headings: 700 (bold)
- Stats: 700 (bold)
- Body: 400 (regular)
- Labels: 500 (medium)

## Accessibility

- ARIA labels on navigation
- Semantic HTML (header, section, details, cite)
- Color contrast: WCAG AA compliant
- Keyboard navigation: All interactive elements focusable
- Screen reader friendly: Proper heading hierarchy

## Loading States

```
┌─────────────────────────────────────────┐
│                                          │
│      Loading validation results...      │
│                                          │
└─────────────────────────────────────────┘
```

## Error States

```
┌─────────────────────────────────────────┐
│                                          │
│  ⚠ No validation data available          │
│                                          │
└─────────────────────────────────────────┘
```

## Sample Data Badge

When using fallback data, a bright amber badge appears:

```
┌────────────┐
│ SAMPLE DATA │  ← Amber background, black text
└────────────┘    Bold, uppercase, rounded
```

This makes it immediately clear the data is illustrative, not live.
