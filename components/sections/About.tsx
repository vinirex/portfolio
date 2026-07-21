"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/skills";
import { GitHubCalendar } from "react-github-calendar";
import { usePathname } from "next/navigation";
import { getTranslation, type Locale } from "@/lib/i18n";

export default function AboutPage() {
  const pathname = usePathname();
  const locale = (pathname.split("/")[1] === "pt" ? "pt" : "en") as Locale;
  const t = (key: string) => getTranslation(locale, key);
  return (
    <div id="about" className="container mx-auto px-4 py-20 max-w-4xl scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("about.title")}</h1>
        <div className="prose prose-invert max-w-none text-lg text-muted-foreground leading-relaxed">
          <p>{t("about.paragraph1")}</p>
          <p>{t("about.paragraph2")}</p>
          <p>{t("about.paragraph3")}</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-3xl font-bold mb-8">{t("about.mindset")}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {Object.entries(skills).map(([category, items], index) => (
            <div key={category}>
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                {category}
              </h3>
              <div className="space-y-6">
                {items.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-foreground">{skill.name}</span>
                      <span className="text-muted-foreground text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + (index * 0.1) }}
                        className="bg-primary h-full rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-20"
      >
        <h2 className="text-3xl font-bold mb-8">{t("about.contributions")}</h2>
        <div className="p-8 border border-border bg-card rounded-xl overflow-x-auto flex justify-center">
          <GitHubCalendar 
            username="vinirex" 
            colorScheme="dark"
            theme={{
              light: ['#18181b', '#3B82F6'],
              dark: ['#18181b', '#1d4ed8', '#2563eb', '#3b82f6', '#60a5fa'],
            }}
          />
        </div>
      </motion.div>
    </div>
  );
}
