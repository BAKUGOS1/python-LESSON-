import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section id="pricing" className="border-t border-border/50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-lg border border-border/50 bg-card/50 px-8 py-16 text-center sm:px-16">
          {/* Background glow */}
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute top-1/2 left-1/2 h-[300px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[100px]" />
          </div>

          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Ready ho? Chai bana lo,{" "}
            <span className="text-primary">code shuru karo</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Free tier mein bhi kaafi kuch milta hai — 3 complete courses,
            community access, aur weekly live sessions. Koi credit card nahi
            chahiye.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="gap-2 px-8 cursor-pointer" render={<Link href="/signup" />}>
              Free account banao
              <ArrowRight className="h-4 w-4" />
            </Button>
            <p className="text-xs text-muted-foreground">
              No credit card required • Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
