"use client";

/**
 * Hero / dark section ambience: gradient mesh + ONE large, low-opacity mark (no noisy repeat grid).
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
      {/* Single watermark — 0.02–0.05 opacity band */}
      <div
        className="absolute -right-4 top-1/2 h-[min(55vw,380px)] w-[min(95vw,640px)] max-w-[640px] -translate-y-1/2 opacity-[0.045] md:right-[4%]"
        style={{
          backgroundImage: "url(/images/logo-plain.png)",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center right",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-slate-950/20" />
    </div>
  );
}
