import { getProjects } from "@/data/projects";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ExternalLink, ArrowLeft } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
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

  const linkedinLabel = project.linkedinLabelKey
    ? t(project.linkedinLabelKey)
    : t("projectDetail.linkedinPost");

  return (
    <article className="container mx-auto px-4 py-20 max-w-4xl">
      <Link
        href={`/${locale}/projects`}
        className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors"
      >
        <ArrowLeft className="mr-2 w-4 h-4" /> {t("projectDetail.back")}
      </Link>

      <header className="mb-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
          {project.title}
        </h1>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
        {(project.liveDemo || project.githubUrl || project.linkedinUrl) && (
          <div className="flex flex-wrap gap-3">
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${t("projectDetail.liveDemo")} — ${project.title}`}
                className={cn(
                  buttonVariants({ variant: "default", size: "lg" }),
                  "gap-2"
                )}
              >
                <ExternalLink className="w-4 h-4" />
                <span>{t("projectDetail.liveDemo")}</span>
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${t("projectDetail.sourceCode")} — ${project.title}`}
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "gap-2"
                )}
              >
                <FaGithub className="w-4 h-4" />
                <span>{t("projectDetail.sourceCode")}</span>
              </a>
            )}
            {project.linkedinUrl && (
              <a
                href={project.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${linkedinLabel} — ${project.title}`}
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "gap-2"
                )}
              >
                <FaLinkedin className="w-4 h-4" />
                <span>{linkedinLabel}</span>
              </a>
            )}
          </div>
        )}
      </header>

      <div className="relative aspect-video w-full rounded-xl overflow-hidden mb-12 bg-muted border border-border">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          sizes="(max-width: 1024px) 100vw, 896px"
          className="object-cover object-top"
        />
      </div>

      <div className="prose prose-invert max-w-none">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-3">
                {t("projectDetail.overview")}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.solution}
              </p>
            </section>

            {project.problem && (
              <section>
                <h2 className="text-2xl font-bold mb-3">
                  {t("projectDetail.problem")}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {project.problem}
                </p>
              </section>
            )}

            {project.videoPreview && (
              <section id="video-demo">
                <h2 className="text-2xl font-bold mb-3">
                  {t("projectDetail.videoDemo")}
                </h2>
                <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-black border border-border">
                  <iframe
                    src={project.videoPreview}
                    title={`${project.title} — ${t("projectDetail.videoDemo")}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
                </div>
              </section>
            )}

            {project.architecture && (
              <section>
                <h2 className="text-2xl font-bold mb-3">
                  {t("projectDetail.architecture")}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {project.architecture}
                </p>
              </section>
            )}

            {project.challenges && (
              <section>
                <h2 className="text-2xl font-bold mb-3">
                  {t("projectDetail.challenges")}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {project.challenges}
                </p>
              </section>
            )}

            {(project.results || project.lessonsLearned) && (
              <section>
                <h2 className="text-2xl font-bold mb-3">
                  {t("projectDetail.results")}
                </h2>
                {project.results && (
                  <p className="text-muted-foreground leading-relaxed">
                    {project.results}
                  </p>
                )}
                {project.lessonsLearned && (
                  <p className="text-muted-foreground mt-4 leading-relaxed">
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
