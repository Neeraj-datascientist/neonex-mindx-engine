import { BRAND_NAME } from "@/lib/brand";
import Image from "next/image";

export { BRAND_NAME };

type ImgProps = { className?: string };

/** 
 * Navbar Logo — High-fidelity wordmark. 
 * Uses mix-blend-multiply to perfectly eliminate the white background on light headers.
 */
export function NavLogo({ className = "" }: ImgProps) {
  return (
    <div className={`relative flex items-center ${className}`}>
      <Image
        src="/images/main-logo.png"
        alt={BRAND_NAME}
        className="h-auto w-[clamp(7.5rem,24vw,10rem)] max-w-[170px] object-contain object-left md:max-w-[180px] mix-blend-multiply transform-gpu transition-transform hover:scale-105"
        width={180}
        height={54}
      />
    </div>
  );
}

/** 
 * Footer Logo — Premium white treatment for dark backgrounds.
 * Uses brightness-0 invert to ensure a pure white look on dark UI.
 */
export function FooterLogo({ className = "" }: ImgProps) {
  return (
    <Image
      src="/images/main-logo.png"
      alt={BRAND_NAME}
      className={`h-auto w-full max-w-[200px] object-contain object-left sm:max-w-[220px] brightness-0 invert transform-gpu ${className}`}
      width={220}
      height={52}
    />
  );
}

/** Footer Brand Block — Enterprise look with tagline integration. */
export function FooterBrandBlock({ className = "" }: { className?: string }) {
  return (
    <div className={`group flex flex-col gap-3 ${className}`}>
      <FooterLogo />
      <div className="flex items-center gap-3">
        <div className="h-px w-8 bg-blue-500/50 group-hover:w-12 transition-all" />
        <p className="text-[0.65rem] font-bold uppercase tracking-[0.25em] text-blue-400">
          Learn Today, Lead Tomorrow
        </p>
      </div>
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
      className={`w-auto max-w-full object-contain object-left mix-blend-multiply ${className}`}
    />
  );
}

/**
 * Home Hero Logo Section
 * Features a high-end "Glass Stage" with vibrant mesh effects.
 * Uses advanced filtering to maintain brand blue (#2563EB) on dark glass.
 */
export function HeroLogoMarkGlow({ className = "" }: { className?: string }) {
  return (
    <div className={`group relative w-full max-w-[min(100%,44rem)] lg:max-w-[min(100%,46rem)] ${className}`}>
      {/* Premium Multi-Layer Mesh Background */}
      <div className="pointer-events-none absolute inset-x-[-15%] top-1/2 h-64 -translate-y-1/2 rounded-[100%] bg-gradient-to-r from-blue-600/20 via-indigo-500/25 to-purple-600/20 blur-[100px] opacity-70" aria-hidden />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400/20 blur-[80px] animate-pulse" aria-hidden />

      {/* Main Glass Stage */}
      <div className="relative z-[1] mx-auto flex w-full min-h-[220px] items-center justify-center rounded-[2.5rem] border border-white/20 bg-gradient-to-br from-white/10 via-blue-950/5 to-indigo-950/10 px-8 py-10 shadow-[0_20px_50px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.2)] backdrop-blur-md transition-all group-hover:shadow-[0_25px_60px_rgba(37,99,235,0.2)] md:aspect-[2.5/1]">
        
        {/* The Brand Mark with "Floating" Shadow */}
        <div className="relative transform-gpu transition-all duration-700 group-hover:scale-110">
          {/* Subtle Outer Glow to match brand blue */}
          <div className="absolute inset-x-[-10%] inset-y-[-10%] bg-blue-500/20 blur-2xl rounded-full opacity-60 group-hover:opacity-100 transition-opacity" />
          
          <Image
            src="/images/logo-plain.png"
            alt=""
            width={450}
            height={450}
            className="animate-brand-float relative z-[2] mx-auto h-auto w-full max-h-[160px] max-w-[340px] object-contain sm:max-h-[180px] md:max-h-[220px] lg:max-h-[260px] block"
            style={{
               /* 
                * Sophisticated Filter Stack:
                * 1. Invert: knocks white to black (but content becomes orange)
                * 2. Hue-rotate 180: flips orange back to brand blue zone
                * 3. Saturate/Brightness: tunes it to be vibrant
                */
               filter: 'invert(1) hue-rotate(185deg) saturate(3) brightness(1.2)'
            }}
          />
        </div>
      </div>

      {/* Hero Tagline Integration */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 z-[2] w-fit">
        <div className="flex items-center gap-4 px-6 py-2 rounded-full bg-blue-600 shadow-xl shadow-blue-900/40 border border-blue-400/30">
          <span className="text-[0.55rem] font-black uppercase tracking-[0.4em] text-white whitespace-nowrap">
            Neonex MindX • Learn Today, Lead Tomorrow
          </span>
        </div>
      </div>
    </div>
  );
}

/** Premium CTA Accent with dynamic line art look */
export function CtaBrandAccent({ className = "" }: { className?: string }) {
  return (
    <div className={`mx-auto flex w-full max-w-lg flex-col items-center gap-6 ${className}`}>
      <div className="h-px w-48 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-60" />
      <div className="flex items-center gap-6">
         <Image
            src="/images/logo-plain.png"
            alt=""
            width={60}
            height={60}
            className="h-10 w-10 object-contain invert hue-rotate-[185deg] saturate-[3] brightness-[1.2] opacity-90 scale-125"
          />
          <div className="h-0.5 w-12 rounded-full bg-blue-500/30" />
          <p className="text-[0.6rem] font-bold text-blue-300 tracking-[0.3em] uppercase">Enterprise Grade Learning</p>
      </div>
    </div>
  );
}
