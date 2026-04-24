import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Frontend Developer @ Swiggy",
    quote:
      "Pehle English courses mein struggle karti thi. CodeChai mein pehli baar concepts actually click huye. Ab Swiggy mein kaam karti hoon!",
    stars: 5,
  },
  {
    name: "Rahul Verma",
    role: "Freelancer, Lucknow",
    quote:
      "Next.js course ne meri freelancing game change kar di. 3 mahine mein apna pehla paid project mil gaya. Thank you CodeChai!",
    stars: 5,
  },
  {
    name: "Ananya Gupta",
    role: "CS Student, DTU",
    quote:
      "College ke professors se zyada yahan seekha. Community bahut supportive hai — koi bhi doubt poochho, 10 minute mein answer aa jaata hai.",
    stars: 5,
  },
];

export function Testimonials() {
  return (
    <section id="community" className="border-t border-border/50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Community Love
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Students kya keh rahe hain
          </h2>
        </div>

        {/* Testimonial cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col rounded-lg border border-border/50 bg-card/50 p-6"
            >
              {/* Stars */}
              <div className="flex gap-0.5">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="mt-6 flex items-center gap-3 border-t border-border/30 pt-4">
                {/* Avatar placeholder — initials */}
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">
                    {t.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
