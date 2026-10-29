import { blogPosts } from "@/data/blog";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Metadata } from "next";
import { getTranslation, type Locale } from "@/lib/i18n";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Not Found" };
  return {
    title: `${post.title} | Vinicius Silva`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { locale: rawLocale, slug } = await params;
  const locale = (rawLocale === "pt" ? "pt" : "en") as Locale;
  const t = (key: string) => getTranslation(locale, key);
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="container mx-auto px-4 py-20 max-w-3xl">
      <Link
        href={`/${locale}/blog`}
        className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors"
      >
        <ArrowLeft className="mr-2 w-4 h-4" /> {t("blog.back")}
      </Link>

      <header className="mb-12">
        <div className="flex flex-wrap gap-2 mb-6">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
        <div className="flex items-center gap-6 text-muted-foreground">
          <span className="flex items-center gap-2">
            <Calendar className="w-5 h-5" /> {post.date}
          </span>
          <span className="flex items-center gap-2">
            <Clock className="w-5 h-5" /> {post.readingTime}
          </span>
        </div>
      </header>

      <div className="prose prose-invert prose-lg max-w-none prose-pre:bg-muted prose-pre:border prose-pre:border-border">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {post.content}
        </ReactMarkdown>
      </div>
    </article>
  );
}
