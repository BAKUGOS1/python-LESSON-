import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-16">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] translate-x-1/4 translate-y-1/4 rounded-full bg-pink-500/5 blur-[100px]" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        {/* Announcement badge */}
        <Badge
          variant="outline"
          className="mb-6 gap-1.5 border-primary/20 bg-primary/5 px-3 py-1 text-xs text-primary"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          New: React 19 course — ab launch ho gaya!
        </Badge>

        {/* Headline */}
        <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
          Code sikho,{" "}
          <span className="bg-gradient-to-r from-primary via-violet-400 to-pink-400 bg-clip-text text-transparent">
            Chai ke saath
          </span>
        </h1>

        {/* Subheadline */}
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
          Modern web development seekho — Hinglish mein, apni speed se.
          Real-world projects, desi community, aur zero-to-hero roadmaps.
        </p>

        {/* CTA buttons */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <Button size="lg" className="gap-2 px-8 cursor-pointer" render={<Link href="/signup" />}>
            Free mein shuru karo
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="gap-2 border-border/50 cursor-pointer"
            render={<Link href="#courses" />}
          >
            <Play className="h-4 w-4" />
            Courses dekho
          </Button>
        </div>

        {/* Social proof */}
        <p className="mt-8 text-sm text-muted-foreground">
          <span className="font-semibold text-foreground">5,000+</span> students
          already learning •{" "}
          <span className="font-semibold text-foreground">4.9★</span> average
          rating
        </p>
      </div>

      {/* Floating code snippet decoration */}
      <div className="mt-16 w-full max-w-2xl">
        <div className="rounded-lg border border-border/50 bg-card/50 p-1 shadow-2xl shadow-primary/5 backdrop-blur-sm">
          {/* Window chrome */}
          <div className="flex items-center gap-1.5 border-b border-border/30 px-3 py-2">
            <div className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
            <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
            <div className="h-2.5 w-2.5 rounded-full bg-green-500/60" />
            <span className="ml-3 text-xs text-muted-foreground/50 font-mono">
              first-project.tsx
            </span>
          </div>
          {/* Code content */}
          <pre className="overflow-x-auto p-4 text-sm leading-relaxed font-mono">
            <code>
              <span className="text-pink-400">{"export default "}</span>
              <span className="text-violet-400">{"function "}</span>
              <span className="text-foreground">{"MeraApp"}</span>
              <span className="text-muted-foreground">{"() {"}</span>
              {"\n"}
              <span className="text-muted-foreground">{"  return ("}</span>
              {"\n"}
              <span className="text-foreground">{"    <"}</span>
              <span className="text-primary">{"h1"}</span>
              <span className="text-foreground">{">"}</span>
              <span className="text-green-400">
                {"Namaste Duniya! 🙏"}
              </span>
              <span className="text-foreground">{"</"}</span>
              <span className="text-primary">{"h1"}</span>
              <span className="text-foreground">{">"}</span>
              {"\n"}
              <span className="text-muted-foreground">{"  );"}</span>
              {"\n"}
              <span className="text-muted-foreground">{"}"}</span>
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
}
