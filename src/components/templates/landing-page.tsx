import { CallToAction } from "@/components/templates/sections/call-to-action";
import { CustomerStory } from "@/components/templates/sections/customer-story";
import { FeatureSection } from "@/components/templates/sections/feature-section";
import { HeroSection } from "@/components/templates/sections/hero-section";
import { SupportSection } from "@/components/templates/sections/support-section";

export const LandingPage = () => {
  return (
    <article>
      <HeroSection />
      <FeatureSection />
      <SupportSection />
      <CustomerStory />
      <CallToAction />
    </article>
  );
};
