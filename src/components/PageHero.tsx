import Image from "next/image";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description?: string;
  variant?: "blue" | "emerald" | "amber";
};

const variantStyle: Record<NonNullable<PageHeroProps["variant"]>, { bg: string; dot: string; glow: string }> = {
  blue: { bg: "from-blue-600/10 to-transparent", dot: "bg-blue-600", glow: "bg-blue-500/10" },
  emerald: { bg: "from-emerald-600/10 to-transparent", dot: "bg-emerald-600", glow: "bg-emerald-500/10" },
  amber: { bg: "from-amber-600/10 to-transparent", dot: "bg-amber-600", glow: "bg-amber-500/10" },
};

/**
 * Enterprise-Grade Page Hero
 * Designed for high-authority sub-pages (Courses, Fees, Alumni).
 * Uses deep layered backgrounds and premium topography.
 */
export function PageHero({ eyebrow, title, description, variant = "blue" }: PageHeroProps) {
  const style = variantStyle[variant];
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-white">
      {/* Premium Background Layering */}
      <div className={`absolute inset-0 bg-gradient-to-br ${style.bg}`} />
      <div className={`absolute -right-20 -top-20 h-96 w-96 rounded-full ${style.glow} blur-3xl opacity-50`} />
      
      {/* Geometric Decorative Elements */}
      <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-blue-500/20 via-transparent to-transparent" />
      <div className="absolute right-[5%] top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full border border-slate-900/[0.03]" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-24">
        <div className="flex flex-col gap-6">
          {/* Status Badge */}
          <div className="flex items-center gap-3">
            <div className={`h-1.5 w-1.5 rounded-full ${style.dot} animate-pulse`} />
            <span className="text-[0.65rem] font-black uppercase tracking-[0.3em] text-slate-500">
              {eyebrow}
            </span>
          </div>

          <div className="max-w-4xl">
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-5xl">
              {title}
            </h1>
            {description && (
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
                {description}
              </p>
            )}
          </div>

          {/* Learn Today tagline integrated as an underline accent */}
          <div className="mt-4 flex items-center gap-4">
            <div className="h-0.5 w-12 bg-blue-600" />
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.15em] text-blue-600/80">
              Learn Today, Lead Tomorrow
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
