"use client";

import { useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import { getProjects, projectCategoriesByLocale } from "@/data/projects";
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
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { getTranslation, type Locale } from "@/lib/i18n";

function renderTextWithLinks(text: string): ReactNode {
  const parts = text.split(/(https?:\/\/[^\s)]+)/g);
  return parts.map((part, index) => {
    if (part.match(/^https?:\/\//)) {
      return (
        <a
          key={index}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline hover:opacity-80 break-all"
        >
          {part}
        </a>
      );
    }
    return part;
  });
}

export default function ProjectsPage() {
  const pathname = usePathname();
  const locale = (pathname.split("/")[1] === "pt" ? "pt" : "en") as Locale;
  const t = (key: string) => getTranslation(locale, key);

  const categories = projectCategoriesByLocale[locale];
  const allLabel = categories[0];
  const [filter, setFilter] = useState(allLabel);

  const projectList = getProjects(locale);
  const activeFilter = categories.includes(filter) ? filter : allLabel;

  const filteredProjects = projectList.filter((project) =>
    activeFilter === allLabel
      ? true
      : project.category === activeFilter ||
        project.technologies.includes(activeFilter)
  );

  return (
    <div className="container mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          {t("projects.title")}
        </h1>
        <p className="text-muted-foreground text-lg mb-12 max-w-3xl">
          {t("projects.description")}
        </p>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeFilter === category ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => {
            const hasLinks = Boolean(
              project.liveDemo || project.githubUrl || project.linkedinUrl
            );
            return (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col group overflow-hidden border-border/50 hover:border-primary/50 transition-colors">
                  <div className="relative h-48 w-full overflow-hidden bg-muted">
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      fill
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />
                    {hasLinks && (
                      <div className="absolute inset-0 bg-background/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                        {project.liveDemo && (
                          <Button
                            asChild
                            size="icon"
                            variant="secondary"
                            className="rounded-full"
                          >
                            <Link
                              href={project.liveDemo}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </Link>
                          </Button>
                        )}
                        {project.githubUrl && (
                          <Button
                            asChild
                            size="icon"
                            variant="secondary"
                            className="rounded-full"
                          >
                            <Link
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <FaGithub className="w-4 h-4" />
                            </Link>
                          </Button>
                        )}
                        {project.linkedinUrl && (
                          <Button
                            asChild
                            size="icon"
                            variant="secondary"
                            className="rounded-full"
                          >
                            <Link
                              href={project.linkedinUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <FaLinkedin className="w-4 h-4" />
                            </Link>
                          </Button>
                        )}
                      </div>
                    )}
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground line-clamp-4">
                      {renderTextWithLinks(project.solution)}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="ghost" className="w-full group/btn">
                      <Link
                        href={`/${locale}/projects/${project.slug}`}
                        className="inline-flex items-center justify-center w-full"
                      >
                        <span>{t("projects.readCaseStudy")}</span>
                        <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
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
