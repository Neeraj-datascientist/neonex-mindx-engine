import Image from "next/image";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description?: string;
  /** Slightly different tint per route */
  variant?: "blue" | "emerald" | "amber";
};

const variantRing: Record<NonNullable<PageHeroProps["variant"]>, string> = {
  blue: "bg-blue-600/10 ring-blue-600/15",
  emerald: "bg-blue-600/10 ring-blue-600/15",
  amber: "bg-blue-600/10 ring-blue-600/15",
};

/**
 * Inner-route hero: one restrained mark + typography — no oversized wordmark boxes.
 */
export function PageHero({ eyebrow, title, description, variant = "blue" }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-slate-200/80 bg-gradient-to-br from-slate-50 via-white to-blue-50/50">
      <div
        className="pointer-events-none absolute -bottom-24 -right-12 h-[min(70vw,380px)] w-[min(70vw,380px)] opacity-[0.035] md:h-[420px] md:w-[420px]"
        style={{
          backgroundImage: "url(/images/logo-mark.png)",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom right",
        }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-6 py-14 md:py-16">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-10">
          <div
            className={`flex w-full max-w-md shrink-0 items-center gap-4 rounded-2xl px-5 py-3.5 shadow-sm ring-1 md:max-w-lg ${variantRing[variant]}`}
          >
            <Image
              src="/images/logo-mark.png"
              alt=""
              className="h-10 w-10 shrink-0 object-contain sm:h-11 sm:w-11"
              width={44}
              height={44}
            />
            <div className="h-px min-w-0 flex-1 bg-gradient-to-r from-blue-600/30 to-transparent" aria-hidden />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
              {eyebrow}
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl lg:text-[2.5rem] lg:leading-tight">
              {title}
            </h1>
            {description ? (
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
                {description}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
