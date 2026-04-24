import {
  BookOpen,
  Users,
  Zap,
  Globe,
  Code2,
  GraduationCap,
} from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Hinglish Mein Content",
    description:
      "Saare courses Hindi-English mix mein — jaise tum apne friends se baat karte ho, waise hi seekho.",
  },
  {
    icon: Code2,
    title: "Project-Based Learning",
    description:
      "Har module ke end mein ek real project. Portfolio banao, sirf theory nahi.",
  },
  {
    icon: Zap,
    title: "Zero se Hero Roadmaps",
    description:
      "Structured paths jo beginner se job-ready tak le jaayein. Koi confusion nahi.",
  },
  {
    icon: Users,
    title: "Desi Dev Community",
    description:
      "Discord pe 5,000+ devs ka community. Doubts poochho, pair-program karo, dost banao.",
  },
  {
    icon: Globe,
    title: "Industry-Ready Stack",
    description:
      "React, Next.js, Node, TypeScript, Postgres — wohi tools jo companies use karti hain.",
  },
  {
    icon: GraduationCap,
    title: "Certificates & Projects",
    description:
      "Har course complete karo aur verifiable certificate lo. LinkedIn pe flex karo.",
  },
];

export function Features() {
  return (
    <section id="features" className="border-t border-border/50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Why CodeChai
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Coding seekhna ab boring nahi hai
          </h2>
          <p className="mt-4 text-muted-foreground">
            Traditional courses mein neend aa jaati hai? CodeChai ke saath
            coding seekho apni zabaan mein, apni pace pe.
          </p>
        </div>

        {/* Feature grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative rounded-lg border border-border/50 bg-card/50 p-6 transition-all duration-300 hover:border-primary/20 hover:bg-card"
            >
              {/* Hover glow */}
              <div className="pointer-events-none absolute inset-0 -z-10 rounded-lg bg-primary/5 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />

              <div className="flex h-10 w-10 items-center justify-center rounded-md border border-border/50 bg-secondary/50 text-primary transition-colors duration-300 group-hover:border-primary/30 group-hover:bg-primary/10">
                <feature.icon className="h-5 w-5" />
              </div>

              <h3 className="mt-4 font-heading text-base font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
