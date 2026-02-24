import Hero from "@/components/sections/Hero";
import ExpertiseCards from "@/components/sections/ExpertiseCards";
import AboutPreview from "@/components/sections/AboutPreview";
import ProcessSteps from "@/components/sections/ProcessSteps";
import ClientLogos from "@/components/sections/ClientLogos";
import CallToAction from "@/components/sections/CallToAction";
import BlogPreview from "@/components/sections/BlogPreview";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <ExpertiseCards />
      <AboutPreview />
      <ProcessSteps />
      <ClientLogos />
      <CallToAction />
      <BlogPreview />
      <Testimonials />
    </main>
  );
}
