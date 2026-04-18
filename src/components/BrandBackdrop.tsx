"use client";

import Image from "next/image";

/**
 * Enterprise-Grade Hero Backdrop
 * Features a high-fidelity "Vapor-Mesh" gradient with depth layers.
 * Re-integrates the brand watermark with ultra-low opacity for a premium textured feel.
 */
export function BrandBackdrop({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden
    >
      {/* Primary Deep Space Layer */}
      <div className="absolute inset-0 bg-slate-950" />
      
      {/* High-Fidelity Mesh Gradients (Atmospheric Bubbles) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_35%,rgba(37,99,235,0.22)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_65%,rgba(79,70,229,0.18)_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(67,56,202,0.15)_0%,transparent_40%)]" />
      
      {/* Subtle Noise / Texture Plate (Optional - using opacity plate for depth) */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-transparent to-slate-950/80" />

      {/* 
       * Brand Watermark (Sophisticated Texture)
       * We use a large logo mark with ultra-low opacity (0.015).
       * We apply the brand-blue filter stack so it feels part of the cosmos, not a white box.
       */}
      <div className="absolute -right-[15%] top-1/2 h-[600px] w-[800px] -translate-y-1/2 opacity-[0.015]">
        <img
          src="/images/main-logo.png"
          alt=""
          className="h-full w-full object-contain invert hue-rotate-[185deg] saturate-[3] brightness-[1.5]"
          aria-hidden
        />
      </div>

      {/* Decorative Geometric Framing (Subtle) */}
      <div className="absolute left-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full border border-blue-500/5" aria-hidden />
      <div className="absolute bottom-[-20%] right-[-5%] h-[600px] w-[600px] rounded-full border border-indigo-500/5" aria-hidden />
    </div>
  );
}
