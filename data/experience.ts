import type { Locale } from "@/lib/i18n";

export type ExperienceItem = {
  id: number;
  title: string;
  company: string;
  date: string;
  description: string;
  type: "Work" | "Education";
  skills: string[];
};

export const experienceByLocale: Record<Locale, ExperienceItem[]> = {
  pt: [
    {
      id: 1,
      title: "Analista de Sistemas",
      company: "Datamar",
      date: "Fev 2026 - Presente",
      description:
        "Desenvolvimento e manutenção de sistemas corporativos, automação de processos e integração de dados e sistemas utilizando Python, C#, .NET e SQL, com controle de versão e colaboração contínua via Git/GitHub.",
      type: "Work",
      skills: [
        "Python",
        "C#",
        ".NET",
        "VB.NET",
        "SQL Server",
        "Automação de Processos",
        "Integração de Sistemas",
        "Git/GitHub",
      ],
    },
    {
      id: 2,
      // NOTE: Flagged for confirmation — CV lists "Analista de Dados Junior", while LinkedIn lists "Assistente de Comércio Exterior".
      title: "Analista de Dados Junior",
      company: "Datamar",
      date: "Mar 2025 - Fev 2026",
      description:
        "Análise, estruturação e validação de dados de comércio exterior utilizando Python e SQL. Desenvolvimento de dashboards de Business Intelligence (BI), relatórios automatizados e higienização e validação de indicadores (KPIs).",
      type: "Work",
      skills: [
        "Python",
        "SQL",
        "Business Intelligence (BI)",
        "Power BI",
        "Análise de Dados",
        "Relatórios Automatizados",
        "Validação de KPIs",
      ],
    },
    {
      id: 3,
      title: "Assistente Educacional (Elementary School Assistant)",
      company: "Chapel School",
      date: "Set 2023 - Mar 2025",
      description:
        "Suporte educacional em sala de aula, acompanhamento de alunos e apoio em atividades escolares em ambiente multicultural e 100% bilíngue, com comunicação diária fluente em inglês, trabalho em equipe e resolução de conflitos.",
      type: "Work",
      skills: [
        "Comunicação em Inglês",
        "Ambiente Bilíngue",
        "Suporte Educacional",
        "Trabalho em Equipe",
        "Microsoft Office",
      ],
    },
    {
      id: 4,
      title: "Bacharelado em Engenharia de Software",
      company: "FIAP - Faculdade de Informática e Administração Paulista",
      date: "Ago 2023 - Jun 2027 (Previsão)",
      description:
        "Graduação em Engenharia de Software (conclusão prevista para junho de 2027), com foco acadêmico em arquitetura de software, algoritmos e estruturas de dados, modelagem estatística e inteligência artificial.",
      type: "Education",
      skills: [
        "Engenharia de Software",
        "Arquitetura de Software",
        "Algoritmos e Estruturas de Dados",
        "Modelagem Estatística",
        "Inteligência Artificial",
        "Python",
        "Java",
        "SQL",
      ],
    },
    {
      id: 5,
      title: "American High School Diploma (Ensino Médio)",
      company: "Pan American Christian Academy",
      date: "Concluído em Jun 2023",
      description:
        "Conclusão do Ensino Médio com currículo americano (American High School Diploma) ministrado integralmente em inglês.",
      type: "Education",
      skills: ["Inglês Fluente / Nível Nativo", "Currículo Americano"],
    },
  ],
  en: [
    {
      id: 1,
      title: "Systems Analyst",
      company: "Datamar",
      date: "Feb 2026 - Present",
      description:
        "Software development and maintenance, process automation, and data and system integration using Python, C#, .NET, and SQL, with continuous version control and team collaboration via Git/GitHub.",
      type: "Work",
      skills: [
        "Python",
        "C#",
        ".NET",
        "VB.NET",
        "SQL Server",
        "Process Automation",
        "System Integration",
        "Git/GitHub",
      ],
    },
    {
      id: 2,
      // NOTE: Flagged for confirmation — CV lists "Analista de Dados Junior" (Junior Data Analyst), while LinkedIn lists "Assistente de Comércio Exterior" (Foreign Trade Assistant).
      title: "Junior Data Analyst",
      company: "Datamar",
      date: "Mar 2025 - Feb 2026",
      description:
        "Foreign-trade data analysis, structuring, and validation using Python and SQL. Built Business Intelligence (BI) dashboards and automated reports, performing data cleaning and KPI validation.",
      type: "Work",
      skills: [
        "Python",
        "SQL",
        "Business Intelligence (BI)",
        "Power BI",
        "Data Analysis",
        "Automated Reports",
        "KPI Validation",
      ],
    },
    {
      id: 3,
      title: "Elementary School Assistant",
      company: "Chapel School",
      date: "Sep 2023 - Mar 2025",
      description:
        "Provided classroom and educational support, student assistance, and activity coordination in a multicultural, 100% bilingual environment, practicing fluent daily English communication, teamwork, and conflict resolution.",
      type: "Work",
      skills: [
        "Daily English Communication",
        "Bilingual Environment",
        "Educational Support",
        "Teamwork",
        "Microsoft Office",
      ],
    },
    {
      id: 4,
      title: "Bachelor of Software Engineering",
      company: "FIAP - Faculdade de Informática e Administração Paulista",
      date: "Aug 2023 - Jun 2027 (Expected)",
      description:
        "Pursuing a Bachelor of Software Engineering (expected graduation June 2027), focusing on software architecture, data structures and algorithms, statistical modeling, and artificial intelligence.",
      type: "Education",
      skills: [
        "Software Engineering",
        "Software Architecture",
        "Data Structures & Algorithms",
        "Statistical Modeling",
        "Artificial Intelligence",
        "Python",
        "Java",
        "SQL",
      ],
    },
    {
      id: 5,
      title: "American High School Diploma",
      company: "Pan American Christian Academy",
      date: "Completed Jun 2023",
      description:
        "Completed American High School Diploma curriculum taught entirely in English.",
      type: "Education",
      skills: ["Fluent / Native-level English", "American Curriculum"],
    },
  ],
};

export const experience = experienceByLocale.en;

export function getExperience(locale: Locale): ExperienceItem[] {
  return experienceByLocale[locale] ?? experienceByLocale.pt;
}
