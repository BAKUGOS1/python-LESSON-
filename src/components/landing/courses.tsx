import Link from "next/link";
import { ArrowRight, Clock, BarChart3, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const courses = [
  {
    slug: "react-19-complete",
    title: "React 19 — Zero to Production",
    description:
      "Hooks, Server Components, Suspense, aur real-world patterns. Job-ready React seekho.",
    level: "Beginner → Advanced",
    duration: "40+ hours",
    lessons: 65,
    tags: ["React", "TypeScript", "Next.js"],
    badge: "New",
    badgeColor: "text-green-400 border-green-400/20 bg-green-400/5",
  },
  {
    slug: "nextjs-fullstack",
    title: "Next.js Full-Stack Masterclass",
    description:
      "App Router, Server Actions, Auth, Database — complete full-stack app banao scratch se.",
    level: "Intermediate",
    duration: "35+ hours",
    lessons: 52,
    tags: ["Next.js", "Drizzle", "Postgres"],
    badge: "Popular",
    badgeColor: "text-primary border-primary/20 bg-primary/5",
  },
  {
    slug: "javascript-foundations",
    title: "JavaScript Foundations — Pakka Wala",
    description:
      "Variables se Promises tak, closures se event loop tak — JS ki neev mazboot banao.",
    level: "Beginner",
    duration: "25+ hours",
    lessons: 42,
    tags: ["JavaScript", "ES6+", "DOM"],
    badge: null,
    badgeColor: "",
  },
];

export function Courses() {
  return (
    <section id="courses" className="border-t border-border/50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Courses
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Apna path choose karo
          </h2>
          <p className="mt-4 text-muted-foreground">
            Har course mein projects, quizzes, aur community support included
            hai.
          </p>
        </div>

        {/* Course cards */}
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {courses.map((course) => (
            <Link
              key={course.slug}
              href={`/courses/${course.slug}`}
              className="group flex flex-col rounded-lg border border-border/50 bg-card/50 transition-all duration-300 hover:border-primary/20 hover:bg-card cursor-pointer"
            >
              {/* Gradient header bar */}
              <div className="h-1 w-full rounded-t-lg bg-gradient-to-r from-primary via-violet-400 to-pink-400 opacity-50 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="flex flex-1 flex-col p-6">
                {/* Badge + title */}
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                    {course.title}
                  </h3>
                  {course.badge && (
                    <Badge
                      variant="outline"
                      className={`shrink-0 text-[10px] ${course.badgeColor}`}
                    >
                      {course.badge}
                    </Badge>
                  )}
                </div>

                {/* Description */}
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {course.description}
                </p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {course.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-border/50 bg-secondary/50 px-2 py-0.5 text-[11px] text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Meta row */}
                <div className="mt-4 flex items-center gap-4 border-t border-border/30 pt-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <BarChart3 className="h-3.5 w-3.5" />
                    {course.level}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {course.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <BookOpen className="h-3.5 w-3.5" />
                    {course.lessons} lessons
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View all CTA */}
        <div className="mt-10 text-center">
          <Button variant="outline" className="gap-2 cursor-pointer" render={<Link href="/courses" />}>
            Saare courses dekho
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
