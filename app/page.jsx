import Hero from "@/components/sections/Hero";
import TechMarquee from "@/components/sections/TechMarquee";
import Services from "@/components/sections/Services";
import Industries from "@/components/sections/Industries";
import Product from "@/components/sections/Product";
import Process from "@/components/sections/Process";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <TechMarquee />
      <Services />
      <Industries />
      <Product />
      <Process />
      <About />
      <Contact />
    </>
  );
}
