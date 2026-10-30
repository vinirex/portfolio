import type { Locale } from "@/lib/i18n";

export type ProjectItem = {
  slug: string;
  title: string;
  thumbnail: string;
  videoPreview: string;
  liveDemo: string;
  githubUrl: string;
  linkedinUrl?: string;
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
  "https://www.linkedin.com/posts/-vini-silva_fiap-fiapnext-careplus-ugcPost-7519957515313295360-vRDJ/?highlightedUpdateUrn=urn%3Ali%3Aactivity%3A7519957516605165568&highlightedUpdateType=SOCIAL_SHARE&origin=SOCIAL_SHARE&utm_source=share&utm_medium=member_desktop&rcm=ACoAADNLvA0B-ZxY1HgC135in8bpUAYoNZ4ubIM";
const SPACEECONOMY_LINKEDIN_POST =
  "https://www.linkedin.com/posts/-vini-silva_dotnet-aspnetcore-microservices-ugcPost-7470088090917724160-ybsC/?highlightedUpdateUrn=urn%3Ali%3Aactivity%3A7470127717909413888&highlightedUpdateType=SOCIAL_SHARE&origin=SOCIAL_SHARE&utm_source=share&utm_medium=member_desktop&rcm=ACoAADNLvA0B-ZxY1HgC135in8bpUAYoNZ4ubIM"
export const projectsByLocale: Record<Locale, ProjectItem[]> = {
  pt: [
    {
      slug: "caregames-final",
      title: "CareGames — Finalista FIAP NEXT",
      thumbnail:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
      videoPreview: "",
      liveDemo: "",
      githubUrl: "https://github.com/vinirex/caregames-final",
      linkedinUrl: CAREGAMES_LINKEDIN_POST,
      technologies: ["React Native", "Expo", "TypeScript", ".NET"],
      category: "Mobile",
      problem:
        "Projeto desenvolvido no Challenge da FIAP em parceria com a Care Plus para incentivar hábitos saudáveis e engajamento contínuo em saúde preventiva por meio de gamificação, sistema de recompensas, rankings competitivos e integração com dispositivos wearables.",
      solution: `Projeto finalista e medalhista no FIAP NEXT (repositório na conta GitHub vinirex: https://github.com/vinirex/caregames-final). Aplicativo voltado à saúde preventiva e bem-estar gamificado, permitindo acompanhamento de metas, integração com wearables e rankings competitivos. Confira a publicação no LinkedIn sobre a conquista no FIAP NEXT: ${CAREGAMES_LINKEDIN_POST}`,
      results:
        "Projeto finalista premiado com medalha no festival de inovação e tecnologia FIAP NEXT.",
      images: [
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
      ],
    },
    {
      slug: "inferential-analysis-brasilian-exports",
      title: "Análise Inferencial das Exportações Brasileiras",
      thumbnail:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
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
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
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
      linkedinUrl: SPACEECONOMY_LINKEDIN_POST,
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
      slug: "caregames-final",
      title: "CareGames — FIAP NEXT Finalist",
      thumbnail:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
      videoPreview: "",
      liveDemo: "",
      githubUrl: "https://github.com/vinirex/caregames-final",
      linkedinUrl: CAREGAMES_LINKEDIN_POST,
      technologies: ["React Native", "Expo", "TypeScript", ".NET"],
      category: "Mobile",
      problem:
        "Developed for the FIAP Challenge in partnership with Care Plus to encourage healthy habits and continuous engagement in preventive healthcare through gamification, rewards, competitive rankings, and wearable device integration.",
      solution: `Finalist and medalist project at FIAP NEXT (hosted under the vinirex GitHub account: https://github.com/vinirex/caregames-final). Gamified preventive health and wellness platform featuring health goal tracking, wearable integration, and competitive rankings. View the LinkedIn post about the FIAP NEXT achievement: ${CAREGAMES_LINKEDIN_POST}`,
      results:
        "Finalist project awarded a medal at the FIAP NEXT technology and innovation festival.",
      images: [
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
      ],
    },
    {
      slug: "inferential-analysis-brasilian-exports",
      title: "Inferential Analysis of Brazilian Exports",
      thumbnail:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
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
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
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
      linkedinUrl: SPACEECONOMY_LINKEDIN_POST,
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
  pt: ["Todos", "Mobile", "React Native", ".NET", "Python", "Análise de Dados", "Web"],
  en: ["All", "Mobile", "React Native", ".NET", "Python", "Data Analysis", "Web"],
};

export const projectCategories = projectCategoriesByLocale.en;
