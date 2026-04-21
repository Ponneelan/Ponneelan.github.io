import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 md:px-8 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
        <p className="text-sm text-muted-foreground">
          {site.location} · <a href={`mailto:${site.email}`} className="hover:text-primary">{site.email}</a>
        </p>
      </div>
    </footer>
  );
}
