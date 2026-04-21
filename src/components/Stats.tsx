import { site } from "@/data/site";
import { useFadeUp } from "@/hooks/useFadeUp";

export default function Stats() {
  const ref = useFadeUp<HTMLElement>();

  return (
    <section id="stats" ref={ref} className="py-24 md:py-32 bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <p
          data-fade-up
          className="text-sm font-medium uppercase tracking-[0.2em] text-primary"
        >
          Work impact
        </p>
        <h2
          data-fade-up
          className="mt-4 section-title text-background"
        >
          Measurable results
        </h2>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {site.stats.map((s) => (
            <div key={s.label} data-fade-up>
              <div className="text-5xl md:text-6xl font-bold text-primary">
                {s.value}
              </div>
              <p className="mt-3 text-background/70">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
