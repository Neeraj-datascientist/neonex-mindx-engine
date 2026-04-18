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
 * Footer Logo — Pure white silhouette for dark backgrounds.
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
      <div className="w-fit rounded-xl bg-white/5 p-2 backdrop-blur-sm border border-white/10 group-hover:border-white/20 transition-all">
        <FooterLogo className="opacity-90 group-hover:opacity-100" />
      </div>
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
 * Features an Apple-style "Product Display" aesthetic.
 * We embrace the white background of the PNG by placing it in a premium white card.
 */
export function HeroLogoMarkGlow({ className = "" }: { className?: string }) {
  return (
    <div className={`group relative w-full max-w-[min(100%,44rem)] lg:max-w-[min(100%,46rem)] ${className}`}>
      {/* Background Volumetric Glows */}
      <div className="pointer-events-none absolute inset-x-[-15%] top-1/2 h-64 -translate-y-1/2 rounded-[100%] bg-blue-600/20 blur-[100px] opacity-70" aria-hidden />
      
      {/* Main Perspective Stage */}
      <div className="relative z-[1] mx-auto flex w-full min-h-[220px] items-center justify-center rounded-[2.5rem] border border-white/10 bg-white/5 px-8 py-12 shadow-2xl backdrop-blur-md transition-all group-hover:bg-white/10 md:aspect-[2.4/1]">
        
        {/* The "Product Display" Card — High-end Enterprise look */}
        <div className="relative transform-gpu transition-all duration-700 group-hover:scale-105 group-hover:-rotate-1">
          {/* Inner Card Glow */}
          <div className="absolute inset-x-[-20%] inset-y-[-20%] bg-blue-500/15 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          
          <div className="animate-brand-float relative z-[2] bg-white rounded-3xl p-8 sm:p-10 md:p-12 shadow-[0_30px_60px_rgba(0,0,0,0.15),0_10px_20px_rgba(0,0,0,0.08)] border border-white/20">
            <Image
              src="/images/main-logo.png"
              alt=""
              width={380}
              height={380}
              className="h-auto w-full max-h-[140px] max-w-[280px] object-contain sm:max-h-[160px] md:max-h-[180px] lg:max-h-[200px]"
            />
          </div>
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

/** Premium CTA Accent */
export function CtaBrandAccent({ className = "" }: { className?: string }) {
  return (
    <div className={`mx-auto flex w-full max-w-lg flex-col items-center gap-6 ${className}`}>
      <div className="h-px w-48 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-60" />
      <div className="flex items-center gap-6">
          <div className="bg-white rounded-xl p-3 shadow-xl">
             <Image
                src="/images/main-logo.png"
                alt=""
                width={80}
                height={80}
                className="h-8 w-auto object-contain"
              />
          </div>
          <div className="h-0.5 w-12 rounded-full bg-blue-500/30" />
          <p className="text-[0.6rem] font-bold text-blue-300 tracking-[0.3em] uppercase whitespace-nowrap">Enterprise Grade Learning</p>
      </div>
    </div>
  );
}
