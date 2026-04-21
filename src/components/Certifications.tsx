import { site } from "@/data/site";
import { useFadeUp } from "@/hooks/useFadeUp";

export default function Certifications() {
  const ref = useFadeUp<HTMLElement>();

  return (
    <section id="certifications" ref={ref} className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <p
          data-fade-up
          className="text-sm font-medium uppercase tracking-[0.2em] text-primary"
        >
          Credentials
        </p>
        <h2 data-fade-up className="mt-4 section-title">
          Certifications & education
        </h2>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {site.certifications.map((c) => {
            const Icon = c.icon;
            return (
              <div key={c.title} data-fade-up className="card-surface">
                <Icon className="size-8 text-primary" />
                <h3 className="mt-6 text-lg font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {c.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
