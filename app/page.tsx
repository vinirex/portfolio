import { Hero } from "@/components/sections/Hero";
import { Terminal } from "@/components/sections/Terminal";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Terminal />
    </div>
  );
}
