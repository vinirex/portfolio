import type { Locale } from "@/lib/i18n";

export type ProjectItem = {
  slug: string;
  title: string;
  thumbnail: string;
  videoPreview: string;
  liveDemo: string;
  githubUrl: string;
  linkedinUrl?: string;
  linkedinLabelKey?: string;
  featured?: boolean;
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

const CAREGAMES_LINKEDIN_POST =
  "https://www.linkedin.com/posts/-vini-silva_fiap-fiapnext-careplus-ugcPost-7519957515313295360-vRDJ/";

const SPACEECONOMY_LINKEDIN_POST =
  "https://www.linkedin.com/posts/-vini-silva_dotnet-aspnetcore-microservices-ugcPost-7470088090917724160-ybsC/";

export const projectsByLocale: Record<Locale, ProjectItem[]> = {
  pt: [
    {
      slug: "caregames-final",
      title: "CareGames — Finalista FIAP NEXT",
      thumbnail: "/projects/caregames.png",
      videoPreview: "https://www.youtube.com/embed/4-i2PmZJjLA",
      liveDemo: "",
      githubUrl: "https://github.com/vinirex/caregames-final",
      linkedinUrl: CAREGAMES_LINKEDIN_POST,
      linkedinLabelKey: "projects.fiapNextRecognition",
      featured: true,
      technologies: ["React Native", "Expo", "TypeScript", ".NET"],
      category: "Mobile",
      problem:
        "Projeto desenvolvido no Challenge da FIAP em parceria com a Care Plus para incentivar hábitos saudáveis e engajamento contínuo em saúde preventiva por meio de gamificação, sistema de recompensas, rankings competitivos e integração com dispositivos wearables.",
      solution:
        "Plataforma gamificada de saúde preventiva e bem-estar que incentiva hábitos saudáveis com acompanhamento de metas, integração com wearables e rankings competitivos. Projeto finalista e medalhista no FIAP NEXT.",
      results:
        "Projeto finalista premiado com medalha no festival de inovação e tecnologia FIAP NEXT.",
      images: ["/projects/caregames.png"],
    },
    {
      slug: "inferential-analysis-brasilian-exports",
      title: "Análise Inferencial das Exportações Brasileiras",
      thumbnail: "/projects/brazilian-exports.svg",
      videoPreview: "",
      liveDemo: "https://exportacao-brasileira.streamlit.app/",
      githubUrl: "https://github.com/vinirex/Analise_inferencial",
      featured: true,
      technologies: ["Python", "Streamlit", "Análise de Dados"],
      category: "Análise de Dados",
      problem:
        "Aplicação prática de conceitos de estatística e análise inferencial sobre dados reais de exportações brasileiras.",
      solution:
        "Aplicação web interativa desenvolvida em Python com Streamlit para exploração estatística e análise inferencial de dados de exportações brasileiras.",
      images: ["/projects/brazilian-exports.svg"],
    },
    {
      slug: "the-new-space-economy",
      title: "The New Space Economy",
      thumbnail: "/projects/new-space-economy.svg",
      videoPreview: "",
      liveDemo: "",
      githubUrl: "",
      linkedinUrl: SPACEECONOMY_LINKEDIN_POST,
      linkedinLabelKey: "projects.linkedinPost",
      featured: false,
      technologies: ["Web"],
      category: "Web",
      solution:
        "Projeto acadêmico (FIAP Global Solution) focado no desenvolvimento de uma solução web distribuída para catalogação e análise de dados espaciais.",
      images: ["/projects/new-space-economy.svg"],
    },
  ],
  en: [
    {
      slug: "caregames-final",
      title: "CareGames — FIAP NEXT Finalist",
      thumbnail: "/projects/caregames.png",
      videoPreview: "https://www.youtube.com/embed/4-i2PmZJjLA",
      liveDemo: "",
      githubUrl: "https://github.com/vinirex/caregames-final",
      linkedinUrl: CAREGAMES_LINKEDIN_POST,
      linkedinLabelKey: "projects.fiapNextRecognition",
      featured: true,
      technologies: ["React Native", "Expo", "TypeScript", ".NET"],
      category: "Mobile",
      problem:
        "Developed for the FIAP Challenge in partnership with Care Plus to encourage healthy habits and continuous engagement in preventive healthcare through gamification, rewards, competitive rankings, and wearable device integration.",
      solution:
        "Gamified preventive health and wellness platform that encourages healthy habits with goal tracking, wearable integration, and competitive rankings. Finalist and medalist project at FIAP NEXT.",
      results:
        "Finalist project awarded a medal at the FIAP NEXT technology and innovation festival.",
      images: ["/projects/caregames.png"],
    },
    {
      slug: "inferential-analysis-brasilian-exports",
      title: "Inferential Analysis of Brazilian Exports",
      thumbnail: "/projects/brazilian-exports.svg",
      videoPreview: "",
      liveDemo: "https://exportacao-brasileira.streamlit.app/",
      githubUrl: "https://github.com/vinirex/Analise_inferencial",
      featured: true,
      technologies: ["Python", "Streamlit", "Data Analysis"],
      category: "Data Analysis",
      problem:
        "Applying statistical and inferential analysis concepts to a real-world Brazilian exports dataset.",
      solution:
        "Interactive web application built with Python and Streamlit to explore and analyze Brazilian exports using inferential statistics.",
      images: ["/projects/brazilian-exports.svg"],
    },
    {
      slug: "the-new-space-economy",
      title: "The New Space Economy",
      thumbnail: "/projects/new-space-economy.svg",
      videoPreview: "",
      liveDemo: "",
      githubUrl: "",
      linkedinUrl: SPACEECONOMY_LINKEDIN_POST,
      linkedinLabelKey: "projects.linkedinPost",
      featured: false,
      technologies: ["Web"],
      category: "Web",
      solution:
        "FIAP Global Solution academic project: a distributed web solution for cataloging and analyzing spatial data.",
      images: ["/projects/new-space-economy.svg"],
    },
  ],
};

export const projects = projectsByLocale.en;

export function getProjects(locale: Locale): ProjectItem[] {
  return projectsByLocale[locale] ?? projectsByLocale.pt;
}
