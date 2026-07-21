import { Hero } from "@/components/sections/Hero";
import { Terminal } from "@/components/sections/Terminal";
import About from "@/components/sections/About";


export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Terminal />
      <About /> 
    </div>
  );
}
