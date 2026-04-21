import { site } from "@/data/site";
import { useFadeUp } from "@/hooks/useFadeUp";

export default function Work() {
  const ref = useFadeUp<HTMLElement>();

  return (
    <section id="work" ref={ref} className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <p
          data-fade-up
          className="text-sm font-medium uppercase tracking-[0.2em] text-primary"
        >
          Work
        </p>
        <h2 data-fade-up className="mt-4 section-title">
          Strategic projects
        </h2>
        <p
          data-fade-up
          className="mt-6 max-w-3xl text-lg text-muted-foreground"
        >
          Projects that transformed products, teams, and business outcomes.
        </p>
        <div className="mt-16 space-y-6">
          {site.work.map((w) => (
            <article
              key={`${w.org}-${w.role}`}
              data-fade-up
              className="card-surface grid gap-6 md:grid-cols-[1fr,2fr] items-start"
            >
              <div>
                <h3 className="text-xl font-semibold">{w.org}</h3>
                <p className="mt-1 text-muted-foreground">{w.role}</p>
                <p className="mt-2 text-sm text-primary">{w.period}</p>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                {w.bullets.map((b, i) => (
                  <li key={i} className="flex gap-3 leading-relaxed">
                    <span
                      aria-hidden
                      className="mt-2 inline-block size-1.5 rounded-full bg-primary shrink-0"
                    />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
