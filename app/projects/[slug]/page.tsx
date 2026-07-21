import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowLeft } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Not Found" };
  return { title: `${project.title} | Vinicius.dev`, description: project.solution };
}

export default async function ProjectCaseStudy({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="container mx-auto px-4 py-20 max-w-4xl">
      <Link href="/projects" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors">
        <ArrowLeft className="mr-2 w-4 h-4" /> Back to Projects
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
        <div className="flex gap-4">
          {project.liveDemo && (
            <Button asChild>
              <Link href={project.liveDemo} target="_blank">
                <ExternalLink className="mr-2 w-4 h-4" /> Live Demo
              </Link>
            </Button>
          )}
          {project.githubUrl && (
            <Button asChild variant="outline">
              <Link href={project.githubUrl} target="_blank">
                <FaGithub className="mr-2 w-4 h-4" /> Source Code
              </Link>
            </Button>
          )}
        </div>
      </header>

      <div className="aspect-video w-full rounded-xl overflow-hidden mb-12 bg-muted border border-border">
        <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-invert max-w-none">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-muted-foreground">{project.solution}</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4">The Problem</h2>
              <p className="text-muted-foreground">{project.problem}</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4">Architecture & Implementation</h2>
              <p className="text-muted-foreground">{project.architecture}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Challenges & Solutions</h2>
              <p className="text-muted-foreground">{project.challenges}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Results & Lessons Learned</h2>
              <p className="text-muted-foreground">{project.results}</p>
              <p className="text-muted-foreground mt-4">{project.lessonsLearned}</p>
            </section>
          </div>

          <div className="space-y-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold mb-2">Category</h3>
              <p className="text-muted-foreground">{project.category}</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold mb-2">Duration</h3>
              <p className="text-muted-foreground">{project.duration}</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
