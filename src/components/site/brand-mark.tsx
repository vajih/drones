export function BrandMark({ className }: { className?: string }) {
  return (
    <span
      className={`flex h-[26px] w-[26px] flex-none items-center justify-center border border-accent text-accent ${className ?? ''}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2}>
        <path d="M2 12 L12 4 L22 12 L12 20 Z" />
        <circle cx={12} cy={12} r={2} fill="currentColor" />
      </svg>
    </span>
  );
}
