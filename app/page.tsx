import Experience from "@/components/sections/home/Experience";
import Features from "@/components/sections/home/Features";
import Hero from "@/components/sections/home/Hero";
import Seamless from "@/components/sections/home/Seamless";
import Services from "@/components/sections/home/Services";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Experience />
      <Features />
      <Services />
      <Seamless />
    </main>
  );
}
