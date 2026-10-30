"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Particles, ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";
import { usePathname } from "next/navigation";
import { getTranslation, type Locale } from "@/lib/i18n";

async function particlesInit(engine: Engine) {
  await loadSlim(engine);
}

export function Hero() {
  const pathname = usePathname();
  const locale = (pathname.split("/")[1] === "pt" ? "pt" : "en") as Locale;
  const t = (key: string) => getTranslation(locale, key);
  const shouldReduceMotion = useReducedMotion();

  return (
    <ParticlesProvider init={particlesInit}>
      <section className="relative isolate min-h-[75vh] flex items-center justify-center overflow-hidden py-16 md:py-24">
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
                  enable: !shouldReduceMotion,
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
                enable: !shouldReduceMotion,
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

        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center max-w-3xl">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
            className="mb-6 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5 text-sm font-medium text-primary"
          >
            <span
              className={cn(
                "flex h-2 w-2 rounded-full bg-primary mr-2",
                !shouldReduceMotion && "animate-pulse"
              )}
            />
            {t("hero.badge")}
          </motion.div>

          <motion.h1
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: shouldReduceMotion ? 0 : 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-4"
          >
            {t("hero.intro")}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Vinicius Silva
            </span>
            <span className="block text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground mt-3 tracking-tight">
              {t("hero.role")}
            </span>
          </motion.h1>

          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: shouldReduceMotion ? 0 : 0.15 }}
            className="text-sm sm:text-base font-medium text-primary tracking-wide mb-5"
          >
            {t("hero.techLine")}
          </motion.p>

          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: shouldReduceMotion ? 0 : 0.2 }}
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed mb-9"
          >
            {t("hero.description")}
          </motion.p>

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: shouldReduceMotion ? 0 : 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto"
          >
            <Link
              href={`/${locale}/projects`}
              className={cn(
                buttonVariants({ variant: "default", size: "lg" }),
                "rounded-full w-full sm:w-auto px-6"
              )}
            >
              {t("hero.projects")} <ArrowRight className="ml-1.5 w-4 h-4" />
            </Link>
            <a
              href={locale === "pt" ? "/curriculo.pdf" : "/resume.pdf"}
              download
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "rounded-full w-full sm:w-auto px-6"
              )}
            >
              {t("hero.cv")} <Download className="ml-1.5 w-4 h-4" />
            </a>
            <Link
              href={`/${locale}/contact`}
              className={cn(
                buttonVariants({ variant: "ghost", size: "lg" }),
                "rounded-full w-full sm:w-auto px-6"
              )}
            >
              {t("hero.contact")} <Mail className="ml-1.5 w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </ParticlesProvider>
  );
}
