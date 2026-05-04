import { ArrowRight, FileDown } from "lucide-react";
import { site } from "@/data/site";
import { useFadeUp } from "@/hooks/useFadeUp";

export default function Hero() {
  const ref = useFadeUp<HTMLElement>();

  return (
    <section
      id="home"
      ref={ref}
      className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-secondary/40 via-background to-background" />
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <p
          data-fade-up
          className="text-sm font-medium uppercase tracking-[0.2em] text-primary"
        >
          {site.role}
        </p>
        <h1
          data-fade-up
          className="mt-6 section-title max-w-5xl text-foreground"
        >
          Hi, I'm <span className="text-primary">{site.name}</span>.
        </h1>
        <p
          data-fade-up
          className="mt-8 max-w-4xl text-2xl md:text-4xl font-semibold text-foreground/90 leading-tight tracking-tight"
        >
          {site.hero.headline}
        </p>
        <p
          data-fade-up
          className="mt-6 max-w-3xl text-base md:text-lg text-foreground/70 leading-relaxed"
        >
          {site.hero.subHeadline}
        </p>
        <div data-fade-up className="mt-10 flex flex-wrap gap-4">
          <a href="#work" className="btn-primary">
            View Work <ArrowRight className="size-4" />
          </a>
          <a href={site.resumeUrl} className="btn-outline">
            <FileDown className="size-4" /> Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
