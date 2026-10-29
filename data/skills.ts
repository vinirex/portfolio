import type { Locale } from "@/lib/i18n";

export type SkillItem = {
  name: string;
  tag?: string;
};

export type SkillGroup = {
  category: string;
  items: SkillItem[];
};

export const skillsByLocale: Record<Locale, SkillGroup[]> = {
  pt: [
    {
      category: "Back-end & Automação",
      items: [
        { name: "Python", tag: "Principal" },
        { name: "C# / .NET", tag: "Principal" },
        { name: "VB.NET" },
        { name: "Java" },
        { name: "RPA & Automação de Processos" },
      ],
    },
    {
      category: "Dados, BI & Banco de Dados",
      items: [
        { name: "SQL Server / SQL", tag: "Principal" },
        { name: "Business Intelligence (BI)" },
        { name: "Análise de Dados" },
        { name: "Power BI" },
        { name: "Pandas" },
        { name: "NumPy" },
        { name: "Excel" },
      ],
    },
    {
      category: "Front-end & Mobile",
      items: [
        { name: "React" },
        { name: "React Native" },
        { name: "JavaScript" },
        { name: "HTML/CSS" },
      ],
    },
    {
      category: "Ferramentas, IA & Noções de Cloud",
      items: [
        { name: "Git / GitHub" },
        { name: "VS Code" },
        { name: "Machine Learning", tag: "Conhecimentos" },
        { name: "Conceitos de LLMs & IA Generativa", tag: "Conhecimentos" },
        { name: "Fundamentos de Cloud (AWS / GCP)", tag: "Noções" },
      ],
    },
    {
      category: "Idiomas",
      items: [
        { name: "Português", tag: "Nativo" },
        { name: "Inglês", tag: "Fluente / Nível Nativo" },
        { name: "Francês", tag: "Básico" },
      ],
    },
  ],
  en: [
    {
      category: "Back-end & Automation",
      items: [
        { name: "Python", tag: "Core" },
        { name: "C# / .NET", tag: "Core" },
        { name: "VB.NET" },
        { name: "Java" },
        { name: "RPA & Process Automation" },
      ],
    },
    {
      category: "Data, BI & Databases",
      items: [
        { name: "SQL Server / SQL", tag: "Core" },
        { name: "Business Intelligence (BI)" },
        { name: "Data Analysis" },
        { name: "Power BI" },
        { name: "Pandas" },
        { name: "NumPy" },
        { name: "Excel" },
      ],
    },
    {
      category: "Front-end & Mobile",
      items: [
        { name: "React" },
        { name: "React Native" },
        { name: "JavaScript" },
        { name: "HTML/CSS" },
      ],
    },
    {
      category: "Tools, AI & Cloud Concepts",
      items: [
        { name: "Git / GitHub" },
        { name: "VS Code" },
        { name: "Machine Learning", tag: "Knowledge" },
        { name: "LLM & Generative AI Concepts", tag: "Knowledge" },
        { name: "Cloud Fundamentals (AWS / GCP)", tag: "Fundamentals" },
      ],
    },
    {
      category: "Languages",
      items: [
        { name: "Portuguese", tag: "Native" },
        { name: "English", tag: "Fluent / Native-level" },
        { name: "French", tag: "Basic" },
      ],
    },
  ],
};

export const skills = skillsByLocale.en;

export function getSkills(locale: Locale): SkillGroup[] {
  return skillsByLocale[locale] ?? skillsByLocale.pt;
}
