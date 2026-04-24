import Link from "next/link";
import { ChaiCupIcon } from "@/components/icons";
import { Separator } from "@/components/ui/separator";

const footerLinks = {
  Product: [
    { label: "Courses", href: "/courses" },
    { label: "Roadmaps", href: "/roadmaps" },
    { label: "Pricing", href: "/pricing" },
    { label: "Blog", href: "/blog" },
  ],
  Community: [
    { label: "Discord", href: "#" },
    { label: "Twitter / X", href: "#" },
    { label: "YouTube", href: "#" },
    { label: "GitHub", href: "#" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border/50">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-2 text-foreground transition-opacity hover:opacity-80"
            >
              <ChaiCupIcon className="h-5 w-5 text-primary" />
              <span className="font-heading text-base font-semibold tracking-tight">
                CodeChai
              </span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Tech education in Hinglish.
              <br />
              Desi flavor, world-class skills.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {heading}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8 bg-border/50" />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} CodeChai. Made with ☕ in India.
          </p>
          <p className="text-xs text-muted-foreground">
            Built with Next.js, Tailwind CSS & pyaar.
          </p>
        </div>
      </div>
    </footer>
  );
}
