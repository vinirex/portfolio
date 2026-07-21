"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/experience";
import { Briefcase, GraduationCap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { usePathname } from "next/navigation";
import { getTranslation, type Locale } from "@/lib/i18n";

export default function ExperiencePage() {
  const pathname = usePathname();
  const locale = (pathname.split("/")[1] === "pt" ? "pt" : "en") as Locale;
  const t = (key: string) => getTranslation(locale, key);
  return (
    <div className="container mx-auto px-4 py-20 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-12">{t("experience.title")}</h1>

        <div className="relative border-l border-border ml-3 md:ml-6 space-y-12">
          {experience.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              <div className="absolute -left-[20px] top-1 bg-background border-2 border-primary rounded-full p-2 text-primary">
                {item.type === "Education" ? <GraduationCap className="w-4 h-4" /> : <Briefcase className="w-4 h-4" />}
              </div>
              
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{item.title}</h3>
                  <p className="text-xl text-primary font-medium">{item.company}</p>
                </div>
                <div className="mt-2 md:mt-0 text-muted-foreground font-medium bg-muted px-3 py-1 rounded-full text-sm inline-block w-fit">
                  {item.date}
                </div>
              </div>
              
              <p className="text-muted-foreground mt-4 mb-4 text-lg">
                {item.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {item.skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
