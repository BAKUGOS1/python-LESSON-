import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/landing/hero";
import { Features } from "@/components/landing/features";
import { Courses } from "@/components/landing/courses";
import { Testimonials } from "@/components/landing/testimonials";
import { CTA } from "@/components/landing/cta";
import { Footer } from "@/components/landing/footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Courses />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
