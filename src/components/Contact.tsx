import { site } from "@/data/site";
import { useFadeUp } from "@/hooks/useFadeUp";

export default function Contact() {
  const ref = useFadeUp<HTMLElement>();

  return (
    <section id="contact" ref={ref} className="py-24 md:py-32 bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <p
          data-fade-up
          className="text-sm font-medium uppercase tracking-[0.2em] text-primary"
        >
          Contact
        </p>
        <h2 data-fade-up className="mt-4 section-title">
          {site.contact.title}
        </h2>
        <p
          data-fade-up
          className="mt-6 max-w-2xl text-lg text-muted-foreground"
        >
          {site.contact.body}
        </p>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {site.contact.links.map((l) => {
            const Icon = l.icon;
            return (
              <a
                key={l.label}
                href={l.href}
                className="card-surface flex items-center gap-4 group"
              >
                <Icon className="size-5 text-primary" />
                <span className="font-medium group-hover:text-primary transition-colors">
                  {l.label}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
