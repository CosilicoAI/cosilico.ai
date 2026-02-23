import { Hero } from "@/components/home/hero";
import { APIs } from "@/components/home/apis";
import { UseCases } from "@/components/home/use-cases";
import { OpenSource } from "@/components/home/open-source";
import { Vision } from "@/components/home/vision";
import { CTA } from "@/components/home/cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <APIs />
      <UseCases />
      <OpenSource />
      <Vision />
      <CTA />
    </>
  );
}
