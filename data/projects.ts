import type { Locale } from "@/lib/i18n";

export type ProjectItem = {
  slug: string;
  title: string;
  thumbnail: string;
  videoPreview: string;
  liveDemo: string;
  githubUrl: string;
  technologies: string[];
  category: string;
  duration?: string;
  problem?: string;
  solution: string;
  architecture?: string;
  challenges?: string;
  results?: string;
  lessonsLearned?: string;
  images: string[];
};

export const projectsByLocale: Record<Locale, ProjectItem[]> = {
  pt: [
    {
      slug: "inferential-analysis-brasilian-exports",
      title: "Análise Inferencial das Exportações Brasileiras",
      thumbnail:
        "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
      videoPreview: "",
      liveDemo: "https://exportacao-brasileira.streamlit.app/",
      githubUrl: "https://github.com/vinirex/Analise_inferencial",
      technologies: ["Python", "Streamlit", "Análise de Dados"],
      category: "Análise de Dados",
      problem:
        "Aplicação prática de conceitos de estatística e análise inferencial sobre dados reais de exportações brasileiras.",
      solution:
        "Aplicação web interativa desenvolvida em Python com Streamlit para exploração estatística e análise inferencial de dados de exportações brasileiras.",
      images: [
        "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
      ],
    },
    {
      slug: "the-new-space-economy",
      title: "The New Space Economy",
      thumbnail:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
      videoPreview: "",
      liveDemo: "",
      githubUrl: "",
      technologies: ["Web"],
      category: "Web",
      solution:
        "Projeto acadêmico (FIAP Global Solution) focado no desenvolvimento de uma solução web distribuída para catalogação e análise de dados espaciais.",
      images: [
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
      ],
    },
  ],
  en: [
    {
      slug: "inferential-analysis-brasilian-exports",
      title: "Inferential Analysis of Brazilian Exports",
      thumbnail:
        "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
      videoPreview: "",
      liveDemo: "https://exportacao-brasileira.streamlit.app/",
      githubUrl: "https://github.com/vinirex/Analise_inferencial",
      technologies: ["Python", "Streamlit", "Data Analysis"],
      category: "Data Analysis",
      problem:
        "Applying statistical and inferential analysis concepts to a real-world Brazilian exports dataset.",
      solution:
        "Interactive web application built with Python and Streamlit to explore and analyze Brazilian exports using inferential statistics.",
      images: [
        "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
      ],
    },
    {
      slug: "the-new-space-economy",
      title: "The New Space Economy",
      thumbnail:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
      videoPreview: "",
      liveDemo: "",
      githubUrl: "",
      technologies: ["Web"],
      category: "Web",
      solution:
        "FIAP Global Solution academic project: a distributed web solution for cataloging and analyzing spatial data.",
      images: [
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
      ],
    },
  ],
};

export const projects = projectsByLocale.en;

export function getProjects(locale: Locale): ProjectItem[] {
  return projectsByLocale[locale] ?? projectsByLocale.pt;
}

export const projectCategoriesByLocale: Record<Locale, string[]> = {
  pt: ["Todos", "Python", "Análise de Dados", "Web"],
  en: ["All", "Python", "Data Analysis", "Web"],
};

export const projectCategories = projectCategoriesByLocale.en;
