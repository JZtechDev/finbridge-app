import Experience from "@/components/sections/home/Experience";
import Features from "@/components/sections/home/Features";
import Hero from "@/components/sections/home/Hero";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Experience />
      <Features />
    </main>
  );
}
