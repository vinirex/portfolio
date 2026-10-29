import { getProjects } from "@/data/projects";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowLeft } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { getTranslation, type Locale } from "@/lib/i18n";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;
  const locale = (rawLocale === "pt" ? "pt" : "en") as Locale;
  const project = getProjects(locale).find((p) => p.slug === slug);
  if (!project) return { title: "Not Found" };
  return {
    title: `${project.title} | Vinicius Silva`,
    description: project.solution,
  };
}

export default async function ProjectCaseStudy({ params }: Props) {
  const { locale: rawLocale, slug } = await params;
  const locale = (rawLocale === "pt" ? "pt" : "en") as Locale;
  const t = (key: string) => getTranslation(locale, key);
  const project = getProjects(locale).find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="container mx-auto px-4 py-20 max-w-4xl">
      <Link
        href={`/${locale}/projects`}
        className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors"
      >
        <ArrowLeft className="mr-2 w-4 h-4" /> {t("projectDetail.back")}
      </Link>

      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
        {(project.liveDemo || project.githubUrl) && (
          <div className="flex gap-4">
            {project.liveDemo && (
              <Button asChild>
                <Link
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center"
                >
                  <ExternalLink className="mr-2 w-4 h-4" />
                  <span>{t("projectDetail.liveDemo")}</span>
                </Link>
              </Button>
            )}
            {project.githubUrl && (
              <Button asChild variant="outline">
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center"
                >
                  <FaGithub className="mr-2 w-4 h-4" />
                  <span>{t("projectDetail.sourceCode")}</span>
                </Link>
              </Button>
            )}
          </div>
        )}
      </header>

      <div className="relative aspect-video w-full rounded-xl overflow-hidden mb-12 bg-muted border border-border">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="prose prose-invert max-w-none">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">
                {t("projectDetail.overview")}
              </h2>
              <p className="text-muted-foreground">{project.solution}</p>
            </section>

            {project.problem && (
              <section>
                <h2 className="text-2xl font-bold mb-4">
                  {t("projectDetail.problem")}
                </h2>
                <p className="text-muted-foreground">{project.problem}</p>
              </section>
            )}

            {project.architecture && (
              <section>
                <h2 className="text-2xl font-bold mb-4">
                  {t("projectDetail.architecture")}
                </h2>
                <p className="text-muted-foreground">{project.architecture}</p>
              </section>
            )}

            {project.challenges && (
              <section>
                <h2 className="text-2xl font-bold mb-4">
                  {t("projectDetail.challenges")}
                </h2>
                <p className="text-muted-foreground">{project.challenges}</p>
              </section>
            )}

            {(project.results || project.lessonsLearned) && (
              <section>
                <h2 className="text-2xl font-bold mb-4">
                  {t("projectDetail.results")}
                </h2>
                {project.results && (
                  <p className="text-muted-foreground">{project.results}</p>
                )}
                {project.lessonsLearned && (
                  <p className="text-muted-foreground mt-4">
                    {project.lessonsLearned}
                  </p>
                )}
              </section>
            )}
          </div>

          <div className="space-y-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold mb-2">
                {t("projectDetail.category")}
              </h3>
              <p className="text-muted-foreground">{project.category}</p>
            </div>
            {project.duration && (
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold mb-2">
                  {t("projectDetail.duration")}
                </h3>
                <p className="text-muted-foreground">{project.duration}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
