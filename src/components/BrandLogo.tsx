import { BRAND_NAME } from "@/lib/brand";
import Image from "next/image";

export { BRAND_NAME };

type ImgProps = { className?: string };

/** Navbar — horizontal wordmark; wider clamp reads more “banner” than square. */
export function NavLogo({ className = "" }: ImgProps) {
  return (
    <Image
      src="/images/main-logo.png"
      alt={BRAND_NAME}
      className={`h-auto w-[clamp(7rem,22vw,9.5rem)] max-w-[152px] object-contain object-left md:max-w-[160px] mix-blend-multiply transform-gpu ${className}`}
      width={160}
      height={48}
    />
  );
}

/** Footer — wordmark only (use inside FooterBrandBlock for layout). */
export function FooterLogo({ className = "" }: ImgProps) {
  return (
    <Image
      src="/images/main-logo.png"
      alt={BRAND_NAME}
      className={`h-auto w-full max-w-[200px] object-contain object-left sm:max-w-[220px] invert brightness-200 mix-blend-screen scale-125 transform-gpu ${className}`}
      width={220}
      height={52}
    />
  );
}

/** Footer — full-width rectangular brand band (blends into dark footer column). */
export function FooterBrandBlock({ className = "" }: { className?: string }) {
  return (
    <div
      className={`w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 shadow-inner shadow-black/25 sm:px-6 sm:py-5 overflow-hidden ${className}`}
    >
      <FooterLogo className="max-w-full" />
    </div>
  );
}

export function LogoWordmark({ className = "" }: ImgProps) {
  return (
    <Image
      src="/images/main-logo.png"
      alt={BRAND_NAME}
      width={160}
      height={48}
      className={`w-auto max-w-full object-contain object-left ${className}`}
    />
  );
}

/**
 * Home hero: square mark sits inside a wide rectangular “stage” (blend, no asset stretch).
 * Image stays object-contain; frame + horizontal glow sell the landscape layout.
 */
export function HeroLogoMarkGlow({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-full max-w-[min(100%,42rem)] lg:max-w-[min(100%,44rem)] ${className}`}>
      {/* Wide elliptical washes — fill horizontal space visually */}
      <div
        className="pointer-events-none absolute inset-x-[-5%] top-1/2 h-[min(48vw,12rem)] -translate-y-1/2 rounded-[100%] bg-gradient-to-r from-blue-500/35 via-indigo-400/28 to-blue-600/30 blur-[80px] md:inset-x-[-10%] md:h-48 lg:h-52"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[min(70vw,15rem)] w-[min(110%,36rem)] -translate-x-1/2 -translate-y-1/2 rounded-[100%] bg-gradient-to-r from-transparent via-blue-400/15 to-transparent blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400/22 blur-[40px] sm:h-60 sm:w-60 md:h-72 md:w-72"
        aria-hidden
      />

      <div
        className="hero-brand-stage relative z-[1] mx-auto flex w-full min-h-[168px] items-center justify-center rounded-[1.75rem] border border-white/15 bg-gradient-to-br from-white/[0.06] via-blue-950/10 to-indigo-950/15 px-4 py-5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12)] sm:min-h-[188px] sm:rounded-[2rem] sm:px-6 sm:py-6 md:aspect-[2.25/1] md:min-h-[200px] md:max-h-[300px] md:px-8 md:py-5 lg:aspect-[2.45/1] lg:min-h-[220px] lg:max-h-[min(32vw,320px)]"
      >
        {/* mix-blend-multiply: knocks out opaque white in logo-mark.png so it reads on glass/blue (no pasted square). */}
        <Image
          src="/images/logo-mark.png"
          alt=""
          width={450}
          height={450}
          className="hero-brand-drop animate-brand-float mx-auto h-auto w-full max-h-[min(46vw,240px)] max-w-[min(96%,36rem)] object-contain mix-blend-multiply sm:max-h-[min(40vw,260px)] md:max-h-[min(34vw,288px)] md:max-w-[min(98%,40rem)] lg:max-h-[min(30vw,300px)]"
        />
      </div>
    </div>
  );
}

/** Dark CTA strips — wide landscape band + mark (fills horizontal rhythm). */
export function CtaBrandAccent({ className = "" }: { className?: string }) {
  return (
    <div className={`mx-auto flex w-full max-w-lg flex-col items-stretch gap-4 md:max-w-xl ${className}`}>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-400/55 to-transparent" />
      <div className="flex w-full items-center gap-4 rounded-2xl border border-white/12 bg-gradient-to-r from-white/[0.09] via-white/[0.05] to-white/[0.02] px-6 py-3.5 backdrop-blur-sm sm:px-8 sm:py-4">
        <Image
          src="/images/logo-mark.png"
          alt=""
          width={36}
          height={36}
          className={`h-9 w-9 shrink-0 object-contain opacity-[0.85] invert mix-blend-screen scale-150 transform-gpu ${className}`}
          aria-hidden
        />
        <div className="h-px min-w-0 flex-1 bg-gradient-to-r from-blue-400/35 to-transparent" aria-hidden />
        <div className="hidden h-px w-12 shrink-0 bg-gradient-to-l from-blue-400/25 to-transparent sm:block" aria-hidden />
      </div>
    </div>
  );
}
