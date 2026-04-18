import Image from "next/image";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description?: string;
  variant?: "blue" | "emerald" | "amber";
};

const variantAccent: Record<NonNullable<PageHeroProps["variant"]>, { pill: string; dot: string }> = {
  blue: { pill: "bg-blue-50 ring-blue-200/60", dot: "bg-blue-600" },
  emerald: { pill: "bg-emerald-50 ring-emerald-200/60", dot: "bg-emerald-600" },
  amber: { pill: "bg-amber-50 ring-amber-200/60", dot: "bg-amber-600" },
};

/**
 * Inner-route hero: clean typography with subtle brand accent.
 * No oversized logo boxes — professional minimal layout.
 */
export function PageHero({ eyebrow, title, description, variant = "blue" }: PageHeroProps) {
  const accent = variantAccent[variant];
  return (
    <section className="relative overflow-hidden border-b border-slate-200/80 bg-gradient-to-br from-slate-50 via-white to-blue-50/40">
      {/* Subtle geometric accents */}
      <div
        className="pointer-events-none absolute -bottom-32 -right-16 h-64 w-64 rounded-full border border-slate-200/30 md:h-96 md:w-96"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-20 -right-8 h-40 w-40 rounded-full border border-slate-200/20 md:h-60 md:w-60"
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-6 py-14 md:py-16">
        <div className="flex flex-col gap-4">
          {/* Accent pill */}
          <div className={`inline-flex w-fit items-center gap-2 rounded-full px-4 py-2 ring-1 ${accent.pill}`}>
            <span className={`h-2 w-2 rounded-full ${accent.dot}`} />
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-700">{eyebrow}</span>
          </div>
          <div className="min-w-0 max-w-3xl">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl lg:text-[2.5rem] lg:leading-tight">
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
