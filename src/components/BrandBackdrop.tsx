"use client";

/**
 * Hero / dark section ambience: gradient mesh + subtle radial glows.
 * No logo watermark — clean professional gradient only.
 */
export function BrandBackdrop({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-700 to-indigo-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_30%_-10%,rgba(37,99,235,0.45),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_100%_80%,rgba(67,56,202,0.2),transparent_50%)]" />
      {/* Subtle geometric accent instead of logo watermark */}
      <div className="absolute -right-20 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full border border-white/[0.04] md:right-[5%] md:h-[500px] md:w-[500px]" />
      <div className="absolute -right-10 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full border border-white/[0.03] md:right-[8%] md:h-80 md:w-80" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-slate-950/20" />
    </div>
  );
}
