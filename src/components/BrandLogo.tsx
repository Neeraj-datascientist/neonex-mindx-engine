import { BRAND_NAME } from "@/lib/brand";
import Image from "next/image";

export { BRAND_NAME };

type ImgProps = { className?: string };

/** Navbar — horizontal wordmark on light background. */
export function NavLogo({ className = "" }: ImgProps) {
  return (
    <Image
      src="/images/main-logo.png"
      alt={BRAND_NAME}
      className={`h-auto w-[clamp(7rem,22vw,9.5rem)] max-w-[152px] object-contain object-left md:max-w-[160px] transform-gpu ${className}`}
      width={160}
      height={48}
    />
  );
}

/** Footer brand block — logo on styled white-ish card that blends with dark footer. */
export function FooterBrandBlock({ className = "" }: { className?: string }) {
  return (
    <div className={`${className}`}>
      {/* White card for logo — looks intentional and premium on dark bg */}
      <div className="w-fit rounded-xl bg-white px-5 py-3 shadow-lg shadow-black/20">
        <Image
          src="/images/main-logo.png"
          alt={BRAND_NAME}
          className="h-auto w-[140px] object-contain sm:w-[160px]"
          width={160}
          height={48}
        />
      </div>
      <p className="mt-3 text-xs font-semibold text-blue-400 tracking-wide uppercase">
        Learn Today, Lead Tomorrow
      </p>
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
 * Home hero: logo displayed in a clean white card within the glass stage.
 * Logo PNGs have white backgrounds — we lean into it with a styled white card.
 */
export function HeroLogoMarkGlow({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-full max-w-[min(100%,42rem)] lg:max-w-[min(100%,44rem)] ${className}`}>
      {/* Wide elliptical washes */}
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

      {/* Glass stage with centered white logo card */}
      <div
        className="hero-brand-stage relative z-[1] mx-auto flex w-full min-h-[168px] flex-col items-center justify-center gap-4 rounded-[1.75rem] border border-white/15 bg-gradient-to-br from-white/[0.06] via-blue-950/10 to-indigo-950/15 px-6 py-8 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12)] sm:min-h-[188px] sm:rounded-[2rem] sm:px-8 sm:py-8 md:aspect-[2.25/1] md:min-h-[200px] md:max-h-[300px] md:px-10 md:py-6 lg:aspect-[2.45/1] lg:min-h-[220px] lg:max-h-[min(32vw,320px)]"
      >
        {/* Clean white card for the logo — no blend mode hacks */}
        <div className="animate-brand-float rounded-2xl bg-white/95 px-8 py-5 shadow-xl shadow-blue-500/15 backdrop-blur-sm sm:px-10 sm:py-6 md:px-12 md:py-7">
          <Image
            src="/images/main-logo.png"
            alt={BRAND_NAME}
            width={350}
            height={120}
            className="h-auto w-[200px] object-contain sm:w-[250px] md:w-[300px] lg:w-[340px]"
          />
        </div>
      </div>
    </div>
  );
}

/** Dark CTA strips — clean white card with logo. */
export function CtaBrandAccent({ className = "" }: { className?: string }) {
  return (
    <div className={`mx-auto flex w-full max-w-lg flex-col items-stretch gap-4 md:max-w-xl ${className}`}>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-400/55 to-transparent" />
      <div className="flex w-full items-center gap-4 rounded-2xl border border-white/12 bg-gradient-to-r from-white/[0.09] via-white/[0.05] to-white/[0.02] px-6 py-3.5 backdrop-blur-sm sm:px-8 sm:py-4">
        {/* Small logo card */}
        <div className="shrink-0 rounded-lg bg-white/95 p-1.5 shadow-md shadow-black/10">
          <Image
            src="/images/main-logo.png"
            alt=""
            width={32}
            height={32}
            className="h-7 w-7 object-contain"
            aria-hidden
          />
        </div>
        <div className="h-px min-w-0 flex-1 bg-gradient-to-r from-blue-400/35 to-transparent" aria-hidden />
        <div className="hidden h-px w-12 shrink-0 bg-gradient-to-l from-blue-400/25 to-transparent sm:block" aria-hidden />
      </div>
    </div>
  );
}
