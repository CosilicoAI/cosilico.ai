type LogoProps = {
  size?: number;
};

export function Logo({ size = 28 }: LogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" className="shrink-0">
      <polygon
        points="26,12 38,20 38,32 26,40 14,32 14,20"
        fill="var(--color-cyan)"
        opacity="0.25"
      />
      <polygon
        points="26,12 38,20 38,32 26,40 14,32 14,20"
        fill="none"
        stroke="var(--color-cyan)"
        strokeWidth="2"
      />
      <polygon
        points="38,24 50,32 50,44 38,52 26,44 26,32"
        fill="none"
        stroke="var(--color-cyan-bright)"
        strokeWidth="2"
      />
    </svg>
  );
}
