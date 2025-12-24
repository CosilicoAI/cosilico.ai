# Validation Dashboard - Developer Guide

## Quick Start

### Development
```bash
cd /Users/maxghenis/CosilicoAI/cosilico.ai
npm start
# Visit http://localhost:3000/validation
```

### Production Build
```bash
npm run build
# Dashboard available at /validation route
```

## Component Architecture

### ValidationPage.tsx
Main component that:
1. Fetches `validation-results.json` from public directory
2. Falls back to sample data if not found
3. Renders stats, performance metrics, and per-variable results

### Key Sections

#### Header
- Data source and timestamp
- Git commit hash
- Sample data badge (if using fallback)

#### Overall Stats (4-card grid)
- Total households
- **Aggregate match rate** (highlighted in teal)
- Mean absolute error
- Overall speedup vs PolicyEngine

#### Performance Section
Side-by-side comparison:
- Cosilico throughput (households/sec)
- PolicyEngine throughput
- Speedup multiplier

#### Validators
Status cards showing:
- Available validators (Cosilico, PolicyEngine, TAXSIM)
- Version numbers
- Households covered

#### Per-Variable Results
Card for each tax/benefit variable:
- Statute citation (26/32, 26/24, etc.)
- Variable name (eitc, ctc, etc.)
- Match rate and MAE
- Speedup (if available)
- Breakdown by validator
- Expandable mismatch details

## Styling

### CSS Variables
Uses standard web colors (not Cosilico's dark theme):
- Background: White (#ffffff)
- Text: Gray (#344054)
- Accent: Teal (#319795)
- Success: Green (#22c55e)
- Warning: Amber (#ffaa00)

### Design Patterns
- **Cards**: White background, 1px border, hover effects
- **Stats**: Large numbers with small labels
- **Badges**: Rounded pills for metadata
- **Code**: Gray background for citations/variable names

### Responsive
- Desktop: Multi-column grids
- Mobile: Single column, stacked stats

## Data Flow

```
cosilico-validators
  └─> dashboard_export.py
       └─> validation-results.json
            └─> Copy to cosilico.ai/public/
                 └─> ValidationPage fetches at runtime
                      └─> Renders dashboard
```

## Testing

### Test Coverage
- ✓ Loading state
- ✓ Data rendering
- ✓ Overall stats display
- ✓ Speed metrics
- ✓ Validator status
- ✓ Error handling

### Run Tests
```bash
npm test -- ValidationPage
```

## Type Safety

All validation data is fully typed via `src/types/validation.ts`:
- `ValidationResults` - Top-level structure
- `ValidationSection` - Per-variable results
- `SpeedMetrics` - Performance data
- `ValidatorBreakdown` - Accuracy by validator
- `Mismatch` - Error analysis

TypeScript ensures you can't render invalid data.

## Integration Points

### From cosilico-validators
Generate fresh data:
```bash
cd /path/to/cosilico-validators
python -m cosilico_validators.cps.dashboard_export \
  -o validation-results.json \
  --year 2024
```

### To cosilico.ai
Place in public directory:
```bash
cp validation-results.json /path/to/cosilico.ai/public/
```

Dashboard will automatically fetch and render.

## Common Tasks

### Update Sample Data
```bash
# Replace sample with new baseline
cp /path/to/validation-results.json \
   src/data/sample-validation.json
```

### Add New Validator
1. Update `validation.ts` types if needed
2. Add validator card in `ValidationPage.tsx`
3. Update CSS for new validator styling

### Add New Metric
1. Add field to `SpeedMetrics` or `SectionSummary` in `validation.ts`
2. Update `ValidationPage.tsx` to display
3. Update `Validation.css` for styling

## File Locations

```
src/
├── pages/
│   ├── ValidationPage.tsx          # Component (275 lines)
│   └── ValidationPage.test.tsx     # Tests (146 lines)
├── styles/
│   └── Validation.css              # Styles (550+ lines)
├── types/
│   └── validation.ts               # Types (80 lines)
└── data/
    └── sample-validation.json      # Fallback data (5KB)
```

## Performance

### Bundle Impact
- Component: ~10KB (gzipped)
- Styles: ~3KB (gzipped)
- Sample data: Lazy-loaded only if needed

### Rendering
- Initial render: <100ms
- Data fetch: <50ms (local) or <500ms (remote)
- No heavy computation in component
- All formatting done in render (fast)

## Browser Support

Tested on:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

Uses standard React patterns, no experimental features.
