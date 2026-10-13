export function LogoMark({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path
        d="M4 31 C16 31 14 9 26 9 S 32 20 36 20"
        stroke="#0e2740"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      <circle cx="4" cy="31" r="3.6" fill="#0e2740" />
      <circle cx="36" cy="20" r="4.4" fill="#e3a035" stroke="#0e2740" strokeWidth="2.4" />
    </svg>
  );
}

export function Logo({ size = 30 }: { size?: number }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <LogoMark size={size} />
      <span className="text-[17px] font-extrabold tracking-[0.18em] text-ink">PATHWAY</span>
    </span>
  );
}
