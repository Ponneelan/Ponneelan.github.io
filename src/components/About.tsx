import { site } from "@/data/site";
import { useFadeUp } from "@/hooks/useFadeUp";

export default function About() {
  const ref = useFadeUp<HTMLElement>();

  return (
    <section id="about" ref={ref} className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <p
          data-fade-up
          className="text-sm font-medium uppercase tracking-[0.2em] text-primary"
        >
          About
        </p>
        <h2 data-fade-up className="mt-4 section-title max-w-4xl">
          {site.about.title}
        </h2>
        <div
          data-fade-up
          className="mt-10 grid gap-8 md:grid-cols-2 max-w-4xl"
        >
          {site.about.paragraphs.map((p, i) => (
            <p key={i} className="text-lg text-muted-foreground leading-relaxed">
              {p}
            </p>
          ))}
        </div>
        <div data-fade-up className="mt-10 flex flex-wrap gap-3">
          {site.about.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
