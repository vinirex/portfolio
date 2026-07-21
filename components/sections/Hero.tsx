"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Particles, ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";

async function particlesInit(engine: Engine) {
  await loadSlim(engine);
}

export function Hero() {
  return (
    <ParticlesProvider init={particlesInit}>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <Particles
          id="tsparticles"
          className="absolute inset-0 -z-10"
          options={{
            background: {
              color: {
                value: "transparent",
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
              },
              modes: {
                repulse: {
                  distance: 100,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#347df3",
              },
              links: {
                color: "#ff6200",
                distance: 150,
                enable: true,
                opacity: 0.2,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  width: 800,
                  height: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.3,
              },
              shape: {
                type: "triangle",
              },
              size: {
                value: { min: 1, max: 3 },
              },
            },
            detectRetina: true,
          }}
        />

        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
          >
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
            Available for new opportunities
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
          >
            Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Vinicius S.</span>
            <br />
            Software Engineer
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8"
          >
            Full Stack Developer passionate about building beautiful, scalable, and production-ready applications. 
            <br className="hidden md:block"/>
            Specialized in <span className="text-foreground font-medium">Python</span>, <span className="text-foreground font-medium">React</span>, <span className="text-foreground font-medium">.NET</span>, and <span className="text-foreground font-medium">SQL</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/projects" className="rounded-full">
              <Button size="lg" className="rounded-full w-full sm:w-auto">
                Projects <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link href="/resume.pdf" target="_blank" className="rounded-full">
              <Button variant="outline" size="lg" className="rounded-full w-full sm:w-auto">
                Download CV <Download className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link href="/contact" className="rounded-full">
              <Button variant="ghost" size="lg" className="rounded-full w-full sm:w-auto">
                Contact Me <Mail className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </ParticlesProvider>
  );
}
