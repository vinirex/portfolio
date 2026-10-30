"use client";

import { motion, useReducedMotion } from "framer-motion";
import { getProjects } from "@/data/projects";
import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, ExternalLink, Play } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { getTranslation, type Locale } from "@/lib/i18n";

export default function ProjectsPage() {
  const pathname = usePathname();
  const locale = (pathname.split("/")[1] === "pt" ? "pt" : "en") as Locale;
  const t = (key: string) => getTranslation(locale, key);
  const shouldReduceMotion = useReducedMotion();

  const projectList = getProjects(locale);

  return (
    <div className="container mx-auto px-4 py-20 max-w-6xl">
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          {t("projects.title")}
        </h1>
        <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
          {t("projects.description")}
        </p>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectList.map((project, index) => {
            const linkedinLabel = project.linkedinLabelKey
              ? t(project.linkedinLabelKey)
              : t("projects.linkedinPost");

            return (
              <motion.div
                key={project.slug}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.45,
                  delay: shouldReduceMotion ? 0 : index * 0.08,
                }}
              >
                <Card className="h-full flex flex-col overflow-hidden border-border/60 hover:border-primary/50 transition-colors pt-0">
                  <Link
                    href={`/${locale}/projects/${project.slug}`}
                    aria-label={`${t("projects.readCaseStudy")}: ${project.title}`}
                    className="relative aspect-video w-full overflow-hidden bg-muted border-b border-border/50 block"
                  >
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-top w-full h-full hover:scale-[1.02] transition-transform duration-300"
                    />
                  </Link>

                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl font-semibold leading-snug">
                      <Link
                        href={`/${locale}/projects/${project.slug}`}
                        className="hover:text-primary transition-colors"
                      >
                        {project.title}
                      </Link>
                    </CardTitle>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardHeader>

                  <CardContent className="flex-grow pt-1">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.solution}
                    </p>
                  </CardContent>

                  <CardFooter className="flex flex-col items-stretch gap-3 pt-3 border-t border-border/40">
                    {(project.githubUrl ||
                      project.liveDemo ||
                      project.linkedinUrl ||
                      project.videoPreview) && (
                      <div className="flex flex-wrap items-center gap-2">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${t("projects.sourceCode")} — ${project.title}`}
                            className={cn(
                              buttonVariants({ variant: "outline", size: "sm" }),
                              "gap-1.5"
                            )}
                          >
                            <FaGithub className="w-3.5 h-3.5" />
                            <span>{t("projects.sourceCode")}</span>
                          </a>
                        )}
                        {project.liveDemo && (
                          <a
                            href={project.liveDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${t("projects.liveDemo")} — ${project.title}`}
                            className={cn(
                              buttonVariants({ variant: "outline", size: "sm" }),
                              "gap-1.5"
                            )}
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            <span>{t("projects.liveDemo")}</span>
                          </a>
                        )}
                        {project.linkedinUrl && (
                          <a
                            href={project.linkedinUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${linkedinLabel} — ${project.title}`}
                            className={cn(
                              buttonVariants({ variant: "outline", size: "sm" }),
                              "gap-1.5"
                            )}
                          >
                            <FaLinkedin className="w-3.5 h-3.5" />
                            <span>{linkedinLabel}</span>
                          </a>
                        )}
                        {project.videoPreview && (
                          <Link
                            href={`/${locale}/projects/${project.slug}#video-demo`}
                            aria-label={`${t("projects.watchVideo")} — ${project.title}`}
                            className={cn(
                              buttonVariants({ variant: "outline", size: "sm" }),
                              "gap-1.5"
                            )}
                          >
                            <Play className="w-3.5 h-3.5" />
                            <span>{t("projects.watchVideo")}</span>
                          </Link>
                        )}
                      </div>
                    )}

                    <Link
                      href={`/${locale}/projects/${project.slug}`}
                      aria-label={`${t("projects.readCaseStudy")}: ${project.title}`}
                      className={cn(
                        buttonVariants({ variant: "ghost", size: "sm" }),
                        "w-full justify-between group/btn"
                      )}
                    >
                      <span>{t("projects.readCaseStudy")}</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                    </Link>
                  </CardFooter>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
