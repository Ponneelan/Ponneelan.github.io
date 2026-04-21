import { site } from "@/data/site";
import { useFadeUp } from "@/hooks/useFadeUp";

export default function Expertise() {
  const ref = useFadeUp<HTMLElement>();

  return (
    <section id="expertise" ref={ref} className="py-24 md:py-32 bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <p
          data-fade-up
          className="text-sm font-medium uppercase tracking-[0.2em] text-primary"
        >
          Expertise
        </p>
        <h2 data-fade-up className="mt-4 section-title">
          What I work on
        </h2>
        <p
          data-fade-up
          className="mt-6 max-w-3xl text-lg text-muted-foreground"
        >
          Building for banking, payments, and fintech — UI to database, web to mobile, dev to production.
        </p>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {site.expertise.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} data-fade-up className="card-surface group">
                <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Icon className="size-6" />
                </div>
                <h3 className="mt-6 text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">
                  {item.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
