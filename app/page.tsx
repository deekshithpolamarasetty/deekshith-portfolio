import { Hero } from "@/components/hero";
import { Metrics } from "@/components/metrics";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { FeaturedProjects } from "@/components/featured-projects";
import { Services } from "@/components/services";
import { Testimonials } from "@/components/testimonials";
import { CtaBanner } from "@/components/cta-banner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Metrics />
      <About />
      <Skills />
      <FeaturedProjects />
      <Services />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
