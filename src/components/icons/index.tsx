import React from 'react';

export type IconStyle = 'outline' | 'filled' | 'duotone';

export interface IconProps {
  variant?: IconStyle;
  size?: number;
  className?: string;
}

const defaultProps: Required<Pick<IconProps, 'variant' | 'size'>> = {
  variant: 'outline',
  size: 24,
};

// Helper to get stroke/fill based on style
const getStrokeProps = (style: IconStyle) => ({
  stroke: 'currentColor',
  strokeWidth: style === 'filled' ? 0 : 1.5,
  fill: style === 'filled' ? 'currentColor' : 'none',
});

// Helper functions for duotone style (used internally)
const _getDuotoneFill = (style: IconStyle) =>
  style === 'duotone' ? 'currentColor' : 'none';

const _getDuotoneOpacity = (style: IconStyle) =>
  style === 'duotone' ? 0.15 : 0;

// Suppress unused warnings - these are available for future use
void _getDuotoneFill;
void _getDuotoneOpacity;

// ============================================
// Analytics/Data Icons
// ============================================

export const ChartIcon: React.FC<IconProps> = ({
  variant = defaultProps.variant,
  size = defaultProps.size,
  className,
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    {...getStrokeProps(variant)}
  >
    {variant === 'duotone' && (
      <rect x="3" y="3" width="18" height="18" rx="2" fill="currentColor" opacity={0.15} />
    )}
    <path d="M3 3v18h18" />
    <rect x="7" y="10" width="3" height="8" rx="1" fill={variant !== 'outline' ? 'currentColor' : 'none'} />
    <rect x="12" y="6" width="3" height="12" rx="1" fill={variant !== 'outline' ? 'currentColor' : 'none'} />
    <rect x="17" y="13" width="3" height="5" rx="1" fill={variant !== 'outline' ? 'currentColor' : 'none'} />
  </svg>
);

export const TargetIcon: React.FC<IconProps> = ({
  variant = defaultProps.variant,
  size = defaultProps.size,
  className,
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    {...getStrokeProps(variant)}
  >
    {variant === 'duotone' && (
      <circle cx="12" cy="12" r="10" fill="currentColor" opacity={0.15} />
    )}
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" fill={variant !== 'outline' ? 'currentColor' : 'none'} />
  </svg>
);

export const SearchIcon: React.FC<IconProps> = ({
  variant = defaultProps.variant,
  size = defaultProps.size,
  className,
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    {...getStrokeProps(variant)}
  >
    {variant === 'duotone' && (
      <circle cx="11" cy="11" r="8" fill="currentColor" opacity={0.15} />
    )}
    <circle cx="11" cy="11" r="8" />
    <path d="M21 21l-4.35-4.35" strokeLinecap="round" />
  </svg>
);

// ============================================
// Document Icons
// ============================================

export const ScrollIcon: React.FC<IconProps> = ({
  variant = defaultProps.variant,
  size = defaultProps.size,
  className,
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    {...getStrokeProps(variant)}
  >
    {variant === 'duotone' && (
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" fill="currentColor" opacity={0.15} />
    )}
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="8" y1="13" x2="16" y2="13" />
    <line x1="8" y1="17" x2="16" y2="17" />
    <line x1="8" y1="9" x2="10" y2="9" />
  </svg>
);

export const DocumentIcon: React.FC<IconProps> = ({
  variant = defaultProps.variant,
  size = defaultProps.size,
  className,
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    {...getStrokeProps(variant)}
  >
    {variant === 'duotone' && (
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" fill="currentColor" opacity={0.15} />
    )}
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
    <polyline points="14 2 14 8 20 8" />
  </svg>
);

export const ClipboardIcon: React.FC<IconProps> = ({
  variant = defaultProps.variant,
  size = defaultProps.size,
  className,
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    {...getStrokeProps(variant)}
  >
    {variant === 'duotone' && (
      <rect x="5" y="4" width="14" height="17" rx="2" fill="currentColor" opacity={0.15} />
    )}
    <path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2" />
    <rect x="8" y="2" width="8" height="4" rx="1" fill={variant !== 'outline' ? 'currentColor' : 'none'} />
    <line x1="8" y1="10" x2="16" y2="10" />
    <line x1="8" y1="14" x2="16" y2="14" />
    <line x1="8" y1="18" x2="12" y2="18" />
  </svg>
);

export const NotepadIcon: React.FC<IconProps> = ({
  variant = defaultProps.variant,
  size = defaultProps.size,
  className,
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    {...getStrokeProps(variant)}
  >
    {variant === 'duotone' && (
      <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" fill="currentColor" opacity={0.15} />
    )}
    <path d="M12 20h9" />
    <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
  </svg>
);

export const FolderIcon: React.FC<IconProps> = ({
  variant = defaultProps.variant,
  size = defaultProps.size,
  className,
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    {...getStrokeProps(variant)}
  >
    {variant === 'duotone' && (
      <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" fill="currentColor" opacity={0.15} />
    )}
    <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" />
  </svg>
);

// ============================================
// Technical Icons
// ============================================

export const LightningIcon: React.FC<IconProps> = ({
  variant = defaultProps.variant,
  size = defaultProps.size,
  className,
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    {...getStrokeProps(variant)}
  >
    {variant === 'duotone' && (
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill="currentColor" opacity={0.15} />
    )}
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill={variant === 'filled' ? 'currentColor' : 'none'} />
  </svg>
);

export const WrenchIcon: React.FC<IconProps> = ({
  variant = defaultProps.variant,
  size = defaultProps.size,
  className,
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    {...getStrokeProps(variant)}
  >
    {variant === 'duotone' && (
      <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" fill="currentColor" opacity={0.15} />
    )}
    <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
  </svg>
);

export const TestTubeIcon: React.FC<IconProps> = ({
  variant = defaultProps.variant,
  size = defaultProps.size,
  className,
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    {...getStrokeProps(variant)}
  >
    {variant === 'duotone' && (
      <path d="M9 3h6v6l-3 8H9V9L6 17a2 2 0 002 2h8a2 2 0 002-2L15 9V3" fill="currentColor" opacity={0.15} />
    )}
    <path d="M9 3h6" />
    <path d="M10 3v6l-4 8a2 2 0 002 2h8a2 2 0 002-2l-4-8V3" />
    <path d="M8 14h8" />
  </svg>
);

export const MicroscopeIcon: React.FC<IconProps> = ({
  variant = defaultProps.variant,
  size = defaultProps.size,
  className,
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    {...getStrokeProps(variant)}
  >
    {variant === 'duotone' && (
      <circle cx="12" cy="8" r="4" fill="currentColor" opacity={0.15} />
    )}
    <path d="M6 18h8" />
    <path d="M3 22h18" />
    <path d="M14 22a7 7 0 100-14h-1" />
    <path d="M9 14h2" />
    <path d="M9 12a2 2 0 01-2-2V6h6v4a2 2 0 01-2 2z" />
    <path d="M12 6V3a1 1 0 00-1-1h-2a1 1 0 00-1 1v3" />
  </svg>
);

export const CalculatorIcon: React.FC<IconProps> = ({
  variant = defaultProps.variant,
  size = defaultProps.size,
  className,
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    {...getStrokeProps(variant)}
  >
    {variant === 'duotone' && (
      <rect x="4" y="2" width="16" height="20" rx="2" fill="currentColor" opacity={0.15} />
    )}
    <rect x="4" y="2" width="16" height="20" rx="2" />
    <rect x="8" y="6" width="8" height="4" rx="1" fill={variant !== 'outline' ? 'currentColor' : 'none'} />
    <line x1="8" y1="14" x2="8" y2="14" strokeLinecap="round" />
    <line x1="12" y1="14" x2="12" y2="14" strokeLinecap="round" />
    <line x1="16" y1="14" x2="16" y2="14" strokeLinecap="round" />
    <line x1="8" y1="18" x2="8" y2="18" strokeLinecap="round" />
    <line x1="12" y1="18" x2="12" y2="18" strokeLinecap="round" />
    <line x1="16" y1="18" x2="16" y2="18" strokeLinecap="round" />
  </svg>
);

export const RulerIcon: React.FC<IconProps> = ({
  variant = defaultProps.variant,
  size = defaultProps.size,
  className,
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    {...getStrokeProps(variant)}
  >
    {variant === 'duotone' && (
      <path d="M5.64 3.64l14.72 14.72a2 2 0 010 2.83l-.71.7a2 2 0 01-2.83 0L2.1 7.17a2 2 0 010-2.83l.71-.7a2 2 0 012.83 0z" fill="currentColor" opacity={0.15} />
    )}
    <path d="M5.64 3.64l14.72 14.72a2 2 0 010 2.83l-.71.7a2 2 0 01-2.83 0L2.1 7.17a2 2 0 010-2.83l.71-.7a2 2 0 012.83 0z" />
    <path d="M7.5 7.5l2 2M11 11l2 2M14.5 14.5l2 2" />
  </svg>
);

export const LinkIcon: React.FC<IconProps> = ({
  variant = defaultProps.variant,
  size = defaultProps.size,
  className,
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    {...getStrokeProps(variant)}
  >
    {variant === 'duotone' && (
      <>
        <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" fill="currentColor" opacity={0.15} />
        <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" fill="currentColor" opacity={0.15} />
      </>
    )}
    <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
  </svg>
);

export const PackageIcon: React.FC<IconProps> = ({
  variant = defaultProps.variant,
  size = defaultProps.size,
  className,
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    {...getStrokeProps(variant)}
  >
    {variant === 'duotone' && (
      <path d="M16.5 9.4l-9-5.19M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" fill="currentColor" opacity={0.15} />
    )}
    <line x1="16.5" y1="9.4" x2="7.5" y2="4.21" />
    <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
);

export const DatabaseIcon: React.FC<IconProps> = ({
  variant = defaultProps.variant,
  size = defaultProps.size,
  className,
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    {...getStrokeProps(variant)}
  >
    {variant === 'duotone' && (
      <ellipse cx="12" cy="5" rx="9" ry="3" fill="currentColor" opacity={0.15} />
    )}
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
  </svg>
);

export const SyncIcon: React.FC<IconProps> = ({
  variant = defaultProps.variant,
  size = defaultProps.size,
  className,
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    {...getStrokeProps(variant)}
  >
    {variant === 'duotone' && (
      <circle cx="12" cy="12" r="9" fill="currentColor" opacity={0.15} />
    )}
    <polyline points="23 4 23 10 17 10" />
    <polyline points="1 20 1 14 7 14" />
    <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" />
  </svg>
);

// ============================================
// People/Entity Icons
// ============================================

export const RobotIcon: React.FC<IconProps> = ({
  variant = defaultProps.variant,
  size = defaultProps.size,
  className,
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    {...getStrokeProps(variant)}
  >
    {variant === 'duotone' && (
      <rect x="3" y="8" width="18" height="12" rx="2" fill="currentColor" opacity={0.15} />
    )}
    <rect x="3" y="8" width="18" height="12" rx="2" />
    <path d="M12 2v4" />
    <circle cx="12" cy="2" r="1" fill={variant !== 'outline' ? 'currentColor' : 'none'} />
    <circle cx="9" cy="13" r="1.5" fill={variant !== 'outline' ? 'currentColor' : 'none'} />
    <circle cx="15" cy="13" r="1.5" fill={variant !== 'outline' ? 'currentColor' : 'none'} />
    <path d="M9 17h6" />
  </svg>
);

export const PeopleIcon: React.FC<IconProps> = ({
  variant = defaultProps.variant,
  size = defaultProps.size,
  className,
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    {...getStrokeProps(variant)}
  >
    {variant === 'duotone' && (
      <>
        <circle cx="9" cy="7" r="4" fill="currentColor" opacity={0.15} />
        <path d="M3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" fill="currentColor" opacity={0.15} />
      </>
    )}
    <path d="M17 21v-2a4 4 0 00-3-3.87" />
    <path d="M23 21v-2a4 4 0 00-3-3.87" />
    <circle cx="9" cy="7" r="4" />
    <path d="M3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" />
    <circle cx="16" cy="3.13" r="3" />
  </svg>
);

export const ThoughtIcon: React.FC<IconProps> = ({
  variant = defaultProps.variant,
  size = defaultProps.size,
  className,
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    {...getStrokeProps(variant)}
  >
    {variant === 'duotone' && (
      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" fill="currentColor" opacity={0.15} />
    )}
    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
    <circle cx="8" cy="12" r="1" fill={variant !== 'outline' ? 'currentColor' : 'none'} />
    <circle cx="12" cy="12" r="1" fill={variant !== 'outline' ? 'currentColor' : 'none'} />
    <circle cx="16" cy="12" r="1" fill={variant !== 'outline' ? 'currentColor' : 'none'} />
  </svg>
);

// ============================================
// Domain Icons
// ============================================

export const MoneyIcon: React.FC<IconProps> = ({
  variant = defaultProps.variant,
  size = defaultProps.size,
  className,
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    {...getStrokeProps(variant)}
  >
    {variant === 'duotone' && (
      <circle cx="12" cy="12" r="10" fill="currentColor" opacity={0.15} />
    )}
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v12" />
    <path d="M15 9.5c0-1.38-1.34-2.5-3-2.5s-3 1.12-3 2.5 1.34 2.5 3 2.5 3 1.12 3 2.5-1.34 2.5-3 2.5" />
  </svg>
);

export const HouseIcon: React.FC<IconProps> = ({
  variant = defaultProps.variant,
  size = defaultProps.size,
  className,
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    {...getStrokeProps(variant)}
  >
    {variant === 'duotone' && (
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" fill="currentColor" opacity={0.15} />
    )}
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

export const HospitalIcon: React.FC<IconProps> = ({
  variant = defaultProps.variant,
  size = defaultProps.size,
  className,
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    {...getStrokeProps(variant)}
  >
    {variant === 'duotone' && (
      <rect x="3" y="3" width="18" height="18" rx="2" fill="currentColor" opacity={0.15} />
    )}
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M12 8v8" />
    <path d="M8 12h8" />
  </svg>
);

export const GovernmentIcon: React.FC<IconProps> = ({
  variant = defaultProps.variant,
  size = defaultProps.size,
  className,
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    {...getStrokeProps(variant)}
  >
    {variant === 'duotone' && (
      <path d="M2 20h20M4 20V10M20 20V10M12 4l8 6H4l8-6z" fill="currentColor" opacity={0.15} />
    )}
    <path d="M2 20h20" />
    <path d="M4 20V10" />
    <path d="M8 20V10" />
    <path d="M12 20V10" />
    <path d="M16 20V10" />
    <path d="M20 20V10" />
    <path d="M12 4l8 6H4l8-6z" />
  </svg>
);

export const GlobeIcon: React.FC<IconProps> = ({
  variant = defaultProps.variant,
  size = defaultProps.size,
  className,
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    {...getStrokeProps(variant)}
  >
    {variant === 'duotone' && (
      <circle cx="12" cy="12" r="10" fill="currentColor" opacity={0.15} />
    )}
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
  </svg>
);

export const WaveIcon: React.FC<IconProps> = ({
  variant = defaultProps.variant,
  size = defaultProps.size,
  className,
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    {...getStrokeProps(variant)}
  >
    {variant === 'duotone' && (
      <path d="M2 12c1.5-2.5 3-4 5-4s3.5 3 5 3 3.5-3 5-3 3.5 1.5 5 4" fill="currentColor" opacity={0.15} />
    )}
    <path d="M2 6c1.5 2.5 3 4 5 4s3.5-3 5-3 3.5 3 5 3 3.5-1.5 5-4" />
    <path d="M2 12c1.5 2.5 3 4 5 4s3.5-3 5-3 3.5 3 5 3 3.5-1.5 5-4" />
    <path d="M2 18c1.5 2.5 3 4 5 4s3.5-3 5-3 3.5 3 5 3 3.5-1.5 5-4" />
  </svg>
);

export const RocketIcon: React.FC<IconProps> = ({
  variant = defaultProps.variant,
  size = defaultProps.size,
  className,
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    {...getStrokeProps(variant)}
  >
    {variant === 'duotone' && (
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09zM12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z" fill="currentColor" opacity={0.15} />
    )}
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z" />
    <path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z" />
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
  </svg>
);

export const CalendarIcon: React.FC<IconProps> = ({
  variant = defaultProps.variant,
  size = defaultProps.size,
  className,
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    {...getStrokeProps(variant)}
  >
    {variant === 'duotone' && (
      <rect x="3" y="4" width="18" height="18" rx="2" fill="currentColor" opacity={0.15} />
    )}
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

export const MailboxIcon: React.FC<IconProps> = ({
  variant = defaultProps.variant,
  size = defaultProps.size,
  className,
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    {...getStrokeProps(variant)}
  >
    {variant === 'duotone' && (
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" fill="currentColor" opacity={0.15} />
    )}
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22 6 12 13 2 6" />
  </svg>
);

// ============================================
// Flag Icons (simplified geometric versions)
// ============================================

export const USFlagIcon: React.FC<IconProps> = ({
  variant = defaultProps.variant,
  size = defaultProps.size,
  className,
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    fill="none"
  >
    <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" fill={variant === 'duotone' ? 'currentColor' : 'none'} opacity={variant === 'duotone' ? 0.15 : 1} />
    <rect x="2" y="4" width="8" height="8" fill={variant !== 'outline' ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.5" />
    <line x1="2" y1="8" x2="22" y2="8" stroke="currentColor" strokeWidth="1.5" />
    <line x1="2" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth="1.5" />
    <line x1="2" y1="16" x2="22" y2="16" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

export const UKFlagIcon: React.FC<IconProps> = ({
  variant = defaultProps.variant,
  size = defaultProps.size,
  className,
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    fill="none"
  >
    <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" fill={variant === 'duotone' ? 'currentColor' : 'none'} opacity={variant === 'duotone' ? 0.15 : 1} />
    <line x1="12" y1="4" x2="12" y2="20" stroke="currentColor" strokeWidth="1.5" />
    <line x1="2" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth="1.5" />
    <line x1="2" y1="4" x2="22" y2="20" stroke="currentColor" strokeWidth="1.5" />
    <line x1="22" y1="4" x2="2" y2="20" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

export const CanadaFlagIcon: React.FC<IconProps> = ({
  variant = defaultProps.variant,
  size = defaultProps.size,
  className,
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    fill="none"
  >
    <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" fill={variant === 'duotone' ? 'currentColor' : 'none'} opacity={variant === 'duotone' ? 0.15 : 1} />
    <rect x="2" y="4" width="4" height="16" fill={variant !== 'outline' ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1" />
    <rect x="18" y="4" width="4" height="16" fill={variant !== 'outline' ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1" />
    <path d="M12 7l1 3h-2l1-3zm-1 4l-1 2h1v2h2v-2h1l-1-2h-2z" fill={variant !== 'outline' ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="0.5" />
  </svg>
);

// ============================================
// Additional utility icons
// ============================================

export const CheckIcon: React.FC<IconProps> = ({
  variant = defaultProps.variant,
  size = defaultProps.size,
  className,
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    {...getStrokeProps(variant)}
  >
    {variant === 'duotone' && (
      <circle cx="12" cy="12" r="10" fill="currentColor" opacity={0.15} />
    )}
    <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const XIcon: React.FC<IconProps> = ({
  variant = defaultProps.variant,
  size = defaultProps.size,
  className,
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    {...getStrokeProps(variant)}
  >
    {variant === 'duotone' && (
      <circle cx="12" cy="12" r="10" fill="currentColor" opacity={0.15} />
    )}
    <line x1="18" y1="6" x2="6" y2="18" strokeLinecap="round" />
    <line x1="6" y1="6" x2="18" y2="18" strokeLinecap="round" />
  </svg>
);

export const PartialIcon: React.FC<IconProps> = ({
  variant = defaultProps.variant,
  size = defaultProps.size,
  className,
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    {...getStrokeProps(variant)}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a10 10 0 010 20" fill={variant !== 'outline' ? 'currentColor' : 'none'} />
  </svg>
);

export const WarningIcon: React.FC<IconProps> = ({
  variant = defaultProps.variant,
  size = defaultProps.size,
  className,
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    {...getStrokeProps(variant)}
  >
    {variant === 'duotone' && (
      <path d="M12 2L2 22h20L12 2z" fill="currentColor" opacity={0.15} />
    )}
    <path d="M12 2L2 22h20L12 2z" />
    <line x1="12" y1="9" x2="12" y2="13" strokeLinecap="round" />
    <line x1="12" y1="17" x2="12.01" y2="17" strokeLinecap="round" />
  </svg>
);

export const CloudIcon: React.FC<IconProps> = ({
  variant = defaultProps.variant,
  size = defaultProps.size,
  className,
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    {...getStrokeProps(variant)}
  >
    {variant === 'duotone' && (
      <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" fill="currentColor" opacity={0.15} />
    )}
    <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" />
  </svg>
);

export const CircleIcon: React.FC<IconProps> = ({
  variant = defaultProps.variant,
  size = defaultProps.size,
  className,
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    {...getStrokeProps(variant)}
  >
    {variant === 'duotone' && (
      <circle cx="12" cy="12" r="10" fill="currentColor" opacity={0.15} />
    )}
    <circle cx="12" cy="12" r="10" />
  </svg>
);

export const CodeIcon: React.FC<IconProps> = ({
  variant = defaultProps.variant,
  size = defaultProps.size,
  className,
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    {...getStrokeProps(variant)}
  >
    {variant === 'duotone' && (
      <rect x="3" y="3" width="18" height="18" rx="2" fill="currentColor" opacity={0.15} />
    )}
    <polyline points="16 18 22 12 16 6" strokeLinecap="round" strokeLinejoin="round" />
    <polyline points="8 6 2 12 8 18" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const DiamondIcon: React.FC<IconProps> = ({
  variant = defaultProps.variant,
  size = defaultProps.size,
  className,
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    {...getStrokeProps(variant)}
  >
    {variant === 'duotone' && (
      <polygon points="12 2 22 12 12 22 2 12" fill="currentColor" opacity={0.15} />
    )}
    {variant === 'filled' ? (
      <polygon points="12 2 22 12 12 22 2 12" fill="currentColor" />
    ) : (
      <polygon points="12 2 22 12 12 22 2 12" />
    )}
  </svg>
);

// Export all icons as a collection for the design system page
export const allIcons = {
  // Analytics/Data
  ChartIcon,
  TargetIcon,
  SearchIcon,
  // Documents
  ScrollIcon,
  DocumentIcon,
  ClipboardIcon,
  NotepadIcon,
  FolderIcon,
  // Technical
  LightningIcon,
  WrenchIcon,
  TestTubeIcon,
  MicroscopeIcon,
  CalculatorIcon,
  RulerIcon,
  LinkIcon,
  PackageIcon,
  DatabaseIcon,
  SyncIcon,
  // People/Entity
  RobotIcon,
  PeopleIcon,
  ThoughtIcon,
  // Domain
  MoneyIcon,
  HouseIcon,
  HospitalIcon,
  GovernmentIcon,
  GlobeIcon,
  WaveIcon,
  RocketIcon,
  CalendarIcon,
  MailboxIcon,
  // Flags
  USFlagIcon,
  UKFlagIcon,
  CanadaFlagIcon,
  // Utility
  CheckIcon,
  XIcon,
  PartialIcon,
  WarningIcon,
  CloudIcon,
  CircleIcon,
  CodeIcon,
  DiamondIcon,
} as const;

export type IconName = keyof typeof allIcons;
