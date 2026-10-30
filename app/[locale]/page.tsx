import { Hero } from "@/components/sections/Hero";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Terminal } from "@/components/sections/Terminal";
import About from "@/components/sections/About";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <FeaturedProjects />
      <Terminal />
      <About />
    </div>
  );
}
