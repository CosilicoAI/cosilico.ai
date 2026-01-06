import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as styles from '../styles/design.css';
import { vars } from '../theme.css';
import PageLayout from '../components/PageLayout';
import {
  allIcons,
  IconStyle,
} from '../components/icons';

// Color definitions for the palette display
const colorTokens = [
  { name: 'void', value: '#050508', cssVar: vars.color.void },
  { name: 'bg', value: '#08080c', cssVar: vars.color.bg },
  { name: 'bgElevated', value: '#0e0e14', cssVar: vars.color.bgElevated },
  { name: 'bgCard', value: '#12121a', cssVar: vars.color.bgCard },
  { name: 'surface', value: '#1a1a24', cssVar: vars.color.surface },
  { name: 'border', value: '#252532', cssVar: vars.color.border },
  { name: 'borderSubtle', value: '#1c1c28', cssVar: vars.color.borderSubtle },
  { name: 'text', value: '#f0f0f5', cssVar: vars.color.text },
  { name: 'textSecondary', value: '#b8b8c8', cssVar: vars.color.textSecondary },
  { name: 'textMuted', value: '#707088', cssVar: vars.color.textMuted },
  { name: 'accent', value: '#00d4ff', cssVar: vars.color.accent },
  { name: 'accentBright', value: '#40e8ff', cssVar: vars.color.accentBright },
  { name: 'accentDim', value: '#0099bb', cssVar: vars.color.accentDim },
  { name: 'amber', value: '#ffaa00', cssVar: vars.color.amber },
  { name: 'success', value: '#00ff88', cssVar: vars.color.success },
  { name: 'warning', value: '#ffaa00', cssVar: vars.color.warning },
  { name: 'error', value: '#ff4466', cssVar: vars.color.error },
];

const spacingTokens = [
  { name: 'xs', value: '4px' },
  { name: 'sm', value: '8px' },
  { name: 'md', value: '16px' },
  { name: 'lg', value: '24px' },
  { name: 'xl', value: '32px' },
  { name: '2xl', value: '48px' },
  { name: '3xl', value: '64px' },
  { name: '4xl', value: '96px' },
];

const radiusTokens = [
  { name: 'sm', value: '4px' },
  { name: 'md', value: '8px' },
  { name: 'lg', value: '12px' },
  { name: 'xl', value: '16px' },
  { name: '2xl', value: '24px' },
];

const iconSizeTokens = [
  { name: 'sm', value: '16px' },
  { name: 'md', value: '20px' },
  { name: 'lg', value: '24px' },
  { name: 'xl', value: '32px' },
];

export default function DesignPage() {
  const [iconVariant, setIconVariant] = useState<IconStyle>('outline');
  const [iconSearch, setIconSearch] = useState('');
  const [toast, setToast] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToast(message);
    setTimeout(() => setToast(null), 2000);
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    showToast(`Copied ${label}`);
  };

  const filteredIcons = Object.entries(allIcons).filter(([name]) =>
    name.toLowerCase().includes(iconSearch.toLowerCase())
  );

  return (
    <PageLayout>
      <div className={styles.design}>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.breadcrumb}>
            <Link to="/brand" className={styles.breadcrumbLink}>Brand</Link>
            {" / "}Design
          </div>
          <h1 className={styles.heroTitle}>Design system</h1>
          <p className={styles.heroSubtitle}>
            Tokens, typography, and icons for building consistent Cosilico interfaces.
          </p>
        </section>

        {/* Colors */}
        <section>
          <h2 className={styles.sectionTitle}>
            Colors
            <span className={styles.sectionBadge}>{colorTokens.length} tokens</span>
          </h2>
          <div className={styles.colorGrid}>
            {colorTokens.map((color) => (
              <div
                key={color.name}
                className={styles.colorSwatch}
                onClick={() => copyToClipboard(color.value, color.name)}
              >
                <div
                  className={styles.colorSwatchColor}
                  style={{ background: color.value }}
                />
                <div className={styles.colorSwatchInfo}>
                  <div className={styles.colorSwatchName}>{color.name}</div>
                  <div className={styles.colorSwatchValue}>{color.value}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Typography */}
        <section>
          <h2 className={styles.sectionTitle}>Typography</h2>
          <div>
            <div className={styles.typeRow}>
              <div className={styles.typeLabel}>Display</div>
              <div className={styles.typeSample} style={{ fontFamily: vars.font.display, fontSize: '2rem', fontWeight: 600 }}>
                Geist Sans
              </div>
            </div>
            <div className={styles.typeRow}>
              <div className={styles.typeLabel}>Body</div>
              <div className={styles.typeSample} style={{ fontFamily: vars.font.body, fontSize: '1.125rem' }}>
                Crimson Pro — The quick brown fox jumps over the lazy dog.
              </div>
            </div>
            <div className={styles.typeRow}>
              <div className={styles.typeLabel}>Mono</div>
              <div className={styles.typeSample} style={{ fontFamily: vars.font.mono, fontSize: '0.875rem' }}>
                JetBrains Mono — const x = fn(args);
              </div>
            </div>
          </div>
        </section>

        {/* Spacing */}
        <section>
          <h2 className={styles.sectionTitle}>
            Spacing
            <span className={styles.sectionBadge}>{spacingTokens.length} tokens</span>
          </h2>
          <div className={styles.spacingGrid}>
            {spacingTokens.map((space) => (
              <div
                key={space.name}
                className={styles.spacingRow}
                onClick={() => copyToClipboard(space.value, `space.${space.name}`)}
                style={{ cursor: 'pointer' }}
              >
                <span className={styles.spacingLabel}>{space.name}</span>
                <div
                  className={styles.spacingBar}
                  style={{ width: space.value }}
                />
                <span className={styles.spacingValue}>{space.value}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Radius */}
        <section>
          <h2 className={styles.sectionTitle}>
            Border radius
            <span className={styles.sectionBadge}>{radiusTokens.length} tokens</span>
          </h2>
          <div className={styles.radiusGrid}>
            {radiusTokens.map((radius) => (
              <div
                key={radius.name}
                className={styles.radiusCard}
                onClick={() => copyToClipboard(radius.value, `radius.${radius.name}`)}
                style={{ cursor: 'pointer' }}
              >
                <div
                  className={styles.radiusPreview}
                  style={{ borderRadius: radius.value }}
                />
                <span className={styles.radiusLabel}>{radius.name} ({radius.value})</span>
              </div>
            ))}
          </div>
        </section>

        {/* Icon Sizes */}
        <section>
          <h2 className={styles.sectionTitle}>
            Icon sizes
            <span className={styles.sectionBadge}>{iconSizeTokens.length} tokens</span>
          </h2>
          <div style={{ display: 'flex', gap: vars.space.xl, alignItems: 'flex-end', flexWrap: 'wrap' }}>
            {iconSizeTokens.map((size) => {
              const Icon = allIcons.RocketIcon;
              return (
                <div
                  key={size.name}
                  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: vars.space.sm }}
                >
                  <Icon size={parseInt(size.value)} variant="outline" />
                  <span className={styles.radiusLabel}>{size.name} ({size.value})</span>
                </div>
              );
            })}
          </div>
        </section>

        {/* Icons */}
        <section>
          <h2 className={styles.sectionTitle}>
            Icons
            <span className={styles.sectionBadge}>{Object.keys(allIcons).length} icons</span>
          </h2>

          <div className={styles.iconControls}>
            <div className={styles.iconStyleToggle}>
              {(['outline', 'filled', 'duotone'] as IconStyle[]).map((style) => (
                <button
                  key={style}
                  className={styles.iconStyleButton}
                  data-active={iconVariant === style}
                  onClick={() => setIconVariant(style)}
                >
                  {style}
                </button>
              ))}
            </div>
            <input
              type="text"
              className={styles.iconSearch}
              placeholder="Search icons..."
              value={iconSearch}
              onChange={(e) => setIconSearch(e.target.value)}
            />
          </div>

          <div className={styles.iconGrid}>
            {filteredIcons.map(([name, Icon]) => (
              <div
                key={name}
                className={styles.iconCard}
                onClick={() => copyToClipboard(`<${name} variant="${iconVariant}" />`, name)}
                title={`Click to copy ${name}`}
              >
                <Icon variant={iconVariant} size={24} />
                <span className={styles.iconCardName}>{name.replace('Icon', '')}</span>
              </div>
            ))}
          </div>

          {filteredIcons.length === 0 && (
            <p style={{ textAlign: 'center', color: vars.color.textMuted, padding: vars.space.xl }}>
              No icons match "{iconSearch}"
            </p>
          )}
        </section>

        {/* Usage */}
        <section>
          <h2 className={styles.sectionTitle}>Usage</h2>
          <div style={{ background: vars.color.bgCard, padding: vars.space.xl, borderRadius: vars.radius.lg, border: `1px solid ${vars.color.borderSubtle}` }}>
            <pre style={{ fontFamily: vars.font.mono, fontSize: '0.875rem', color: vars.color.textSecondary, margin: 0, overflow: 'auto' }}>
{`// Import icons
import { RocketIcon, ChartIcon, SearchIcon } from '../components/icons';

// Use with variant prop
<RocketIcon variant="outline" size={24} />
<RocketIcon variant="filled" size={24} />
<RocketIcon variant="duotone" size={24} />

// Use theme tokens
import { vars } from '../theme.css';
color: vars.color.accent,
padding: vars.space.lg,
borderRadius: vars.radius.md,`}
            </pre>
          </div>
        </section>

        {/* Toast */}
        {toast && <div className={styles.toast}>{toast}</div>}
      </div>
    </PageLayout>
  );
}
