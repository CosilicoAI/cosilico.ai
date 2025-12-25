# Validation Dashboard

The Validation Dashboard displays accuracy and performance metrics comparing Cosilico's tax and benefit calculations against external validators (PolicyEngine, TAXSIM).

## Features

### Overall Statistics
- **Total Households**: Number of households/tax units in the validation dataset
- **Aggregate Match Rate**: Overall accuracy across all variables
- **Mean Absolute Error**: Average dollar difference vs validators
- **Speed Metrics**: Performance comparison (throughput and speedup)

### Per-Variable Results
For each tax/benefit variable (EITC, CTC, Standard Deduction, etc.):
- Match rate percentage
- Number of households tested
- Mean absolute error in dollars
- Speedup vs PolicyEngine
- Breakdown by validator (PE, TAXSIM)
- Detailed mismatch analysis with statutory citations

### Performance Dashboard
- Throughput comparison (households/second)
- Total processing time
- Per-household calculation time
- Speedup multiplier

## Data Format

The dashboard consumes JSON from `cosilico-validators`:

```bash
# Generate validation results
cd /path/to/cosilico-validators
python -m cosilico_validators.cps.dashboard_export -o validation-results.json

# Copy to cosilico.ai
cp validation-results.json /path/to/cosilico.ai/public/
```

### JSON Schema

See `/Users/maxghenis/CosilicoAI/cosilico.ai/src/types/validation.ts` for complete TypeScript types.

Key fields:
- `sections[]`: Per-variable results
  - `section`: Statute citation (e.g., "26/32")
  - `title`: Human-readable name
  - `variable`: Internal variable name
  - `summary.matchRate`: Accuracy percentage
  - `speed.speedup`: Performance multiplier
  - `mismatches[]`: Detailed error analysis
- `overall`: Aggregate statistics
- `validators[]`: Available validation systems

## Files

```
src/
├── pages/
│   ├── ValidationPage.tsx          # Main dashboard component
│   └── ValidationPage.test.tsx     # Test suite
├── styles/
│   └── Validation.css              # Dashboard styles
├── types/
│   └── validation.ts               # TypeScript types
└── data/
    └── sample-validation.json      # Sample data for development
```

## Routing

The dashboard is available at `/validation`:
- Added to `App.tsx` routes
- Linked from main navigation

## Design System

Uses PolicyEngine design tokens:
- **Primary Color**: #319795 (teal)
- **Font**: Inter
- **Layout**: Clean card-based design
- **Highlighting**: Teal accents for key metrics

## Testing

```bash
# Run validation dashboard tests
npm test -- --testPathPattern=ValidationPage

# Type check
npx tsc --noEmit

# Build
npm run build
```

## Integration with CI/CD

### Recommended Workflow

1. **cosilico-us** repo pushes trigger validation
2. CI runs `cosilico-validators` to compare against PE/TAXSIM
3. Results exported to `validation-results.json`
4. JSON pushed to `cosilico.ai/public/`
5. Dashboard auto-updates

### Manual Update

```bash
# In cosilico-validators
python -m cosilico_validators.cps.dashboard_export -o /tmp/validation-results.json

# Copy to public directory
cp /tmp/validation-results.json /path/to/cosilico.ai/public/validation-results.json

# Dashboard will fetch from /validation-results.json at runtime
```

## Fallback Behavior

If `/validation-results.json` is not found, the dashboard loads sample data from:
```
src/data/sample-validation.json
```

This ensures the dashboard always renders, even without live data.

## Future Enhancements

- [ ] Historical trend charts (accuracy over time)
- [ ] Downloadable CSV/Excel exports
- [ ] Filterable/sortable variable table
- [ ] Drill-down into individual mismatches
- [ ] Comparison across multiple commits
- [ ] Integration with GitHub Actions status checks
