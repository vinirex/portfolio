export type Locale = "en" | "pt";

export const defaultLocale: Locale = "en";

export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      experience: "Experience",
      certificates: "Certificates",
      contact: "Contact",
      blog: "Blog",
      search: "Search",
    },
    hero: {
      badge: "Available for new opportunities",
      intro: "Hi, I'm",
      role: "Software Engineer",
      description: "Full Stack Developer passionate about building beautiful, scalable, and production-ready applications.",
      highlight: "Specialized in",
      projects: "Projects",
      cv: "Download CV",
      contact: "Contact Me",
    },
    about: {
      title: "About Me",
      paragraph1: "Hello! I'm a software engineer with a passion for building scalable, high-performance web applications. I enjoy blending logic and design to create intuitive user experiences.",
      paragraph2: "My journey into software development started with a curiosity for how things work on the internet. Fast forward to today, I have had the privilege of working on various projects, ranging from small business websites to enterprise-level microservices.",
      paragraph3: "When I'm not coding, you can usually find me reading about the latest tech trends, contributing to open-source, or experimenting with new frameworks. My main focus these days is mastering machine learning integration in full-stack applications.",
      mindset: "Technical Mindset",
      contributions: "GitHub Contributions",
    },
    contact: {
      title: "Get in Touch",
      description: "I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
      email: "Email",
      location: "Location",
      locationValue: "Brazil / Remote",
      phone: "Phone",
      phoneValue: "+55 (11) 93944-8410",
      name: "Name",
      namePlaceholder: "John Doe",
      emailLabel: "Email",
      emailPlaceholder: "john@example.com",
      subject: "Subject",
      subjectPlaceholder: "Job Opportunity",
      message: "Message",
      messagePlaceholder: "Your message here...",
      submit: "Send Message",
      success: "Message sent successfully! (Mocked)",
      validations: {
        name: "Name must be at least 2 characters.",
        email: "Invalid email address.",
        subject: "Subject must be at least 5 characters.",
        message: "Message must be at least 10 characters.",
      },
    },
    experience: {
      title: "Experience & Education",
    },
    certificates: {
      title: "Certificates",
      description: "Continuous learning is essential in software engineering. Here are some of the professional certifications and courses I have completed.",
      button: "View Credential",
    },
    blog: {
      title: "Blog",
      description: "Thoughts, learnings, and tutorials about software development, system architecture, and tech trends.",
    },
    projects: {
      title: "Projects",
      description: "Here are some of the projects I've worked on. From full-stack web applications to machine learning models, I love building things that solve real-world problems.",
      readCaseStudy: "Read Case Study",
      category: {
        all: "All",
        frontend: "Frontend",
        backend: "Backend",
        fullstack: "Full Stack",
        python: "Python",
        react: "React",
        dotnet: ".NET",
        machinelearning: "Machine Learning",
      },
    },
    projectDetail: {
      back: "Back to Projects",
      liveDemo: "Live Demo",
      sourceCode: "Source Code",
      overview: "Overview",
      problem: "The Problem",
      architecture: "Architecture & Implementation",
      challenges: "Challenges & Solutions",
      results: "Results & Lessons Learned",
      category: "Category",
      duration: "Duration",
    },
    terminal: {
      welcome: "Welcome to ViniciusOS (v1.0.0)",
      help: "Type 'help' to see available commands.",
      available: "Available commands:",
      about: "Learn more about me",
      projects: "View my portfolio",
      skills: "See my technical skills",
      resume: "Download my resume",
      contact: "Get in touch",
      github: "Open my GitHub profile",
      linkedin: "Open my LinkedIn profile",
      clear: "Clear terminal",
      unknown: "Command not found",
      navigatingAbout: "Navigating to /about...",
      navigatingProjects: "Navigating to /projects...",
      navigatingContact: "Navigating to /contact...",
      downloadingResume: "Downloading resume...",
      openingGitHub: "Opening GitHub...",
      openingLinkedIn: "Opening LinkedIn...",
      scrollingAbout: "Scrolling to the About section...",
    },
    commandMenu: {
      navigation: "Navigation",
      socials: "Socials",
      searchPlaceholder: "Type a command or search...",
      noResults: "No results found.",
    },
    footer: {
      rights: "All rights reserved.",
      builtWith: "Built with",
    },
  },
  pt: {
    nav: {
      home: "Início",
      about: "Sobre",
      projects: "Projetos",
      experience: "Experiência",
      certificates: "Certificados",
      contact: "Contato",
      blog: "Blog",
      search: "Pesquisar",
    },
    hero: {
      badge: "Disponível para novas oportunidades",
      intro: "Olá, sou",
      role: "Engenheiro de Software",
      description: "Desenvolvedor Full Stack apaixonado por construir aplicações bonitas, escaláveis e prontas para produção.",
      highlight: "Especializado em",
      projects: "Projetos",
      cv: "Currículo",
      contact: "Fale Comigo",
    },
    about: {
      title: "Sobre Mim",
      paragraph1: "Olá! Sou um engenheiro de software apaixonado por criar aplicações web escaláveis e de alto desempenho. Gosto de unir lógica e design para criar experiências intuitivas.",
      paragraph2: "Minha jornada no desenvolvimento de software começou com a curiosidade sobre como as coisas funcionam na internet. Hoje, tive a oportunidade de trabalhar em diversos projetos, desde pequenos sites para negócios até microsserviços de nível corporativo.",
      paragraph3: "Quando não estou programando, normalmente estou lendo sobre as últimas tendências de tecnologia, contribuindo com projetos open-source ou experimentando novos frameworks. Minha principal meta atualmente é dominar a integração de machine learning em aplicações full-stack.",
      mindset: "Tecnologias",
      contributions: "Contribuições no GitHub",
    },
    contact: {
      title: "Entre em Contato",
      description: "Atualmente estou procurando novas oportunidades. Se você tiver uma pergunta ou apenas quiser dizer oi, vou fazer o possível para responder.",
      email: "E-mail",
      location: "Localização",
      locationValue: "Brasil / Remoto",
      phone: "Telefone",
      phoneValue: "+55 (11) 93944-8410",
      name: "Nome",
      namePlaceholder: "João Silva",
      emailLabel: "E-mail",
      emailPlaceholder: "joao@exemplo.com",
      subject: "Assunto",
      subjectPlaceholder: "Oportunidade de Trabalho",
      message: "Mensagem",
      messagePlaceholder: "Sua mensagem aqui...",
      submit: "Enviar Mensagem",
      success: "Mensagem enviada com sucesso! (Simulado)",
      validations: {
        name: "O nome deve ter pelo menos 2 caracteres.",
        email: "Endereço de e-mail inválido.",
        subject: "O assunto deve ter pelo menos 5 caracteres.",
        message: "A mensagem deve ter pelo menos 10 caracteres.",
      },
    },
    experience: {
      title: "Experiência & Educação",
    },
    certificates: {
      title: "Certificados",
      description: "Aprendizado contínuo é essencial em engenharia de software. Aqui estão algumas das certificações e cursos profissionais que concluí.",
      button: "Ver Credencial",
    },
    blog: {
      title: "Blog",
      description: "Pensamentos, aprendizados e tutoriais sobre desenvolvimento de software, arquitetura de sistemas e tendências de tecnologia.",
    },
    projects: {
      title: "Projetos",
      description: "Aqui estão alguns dos projetos em que trabalhei. Desde aplicações full-stack até modelos de machine learning, adoro construir soluções que resolvem problemas reais.",
      readCaseStudy: "Ler Estudo de Caso",
      category: {
        all: "Todos",
        frontend: "Frontend",
        backend: "Backend",
        fullstack: "Full Stack",
        python: "Python",
        react: "React",
        dotnet: ".NET",
        machinelearning: "Machine Learning",
      },
    },
    projectDetail: {
      back: "Voltar para Projetos",
      liveDemo: "Demonstração ao Vivo",
      sourceCode: "Código Fonte",
      overview: "Visão Geral",
      problem: "O Problema",
      architecture: "Arquitetura & Implementação",
      challenges: "Desafios & Soluções",
      results: "Resultados & Lições Aprendidas",
      category: "Categoria",
      duration: "Duração",
    },
    terminal: {
      welcome: "Bem-vindo ao ViniciusOS (v1.0.0)",
      help: "Digite 'help' para ver os comandos disponíveis.",
      available: "Comandos disponíveis:",
      about: "Saiba mais sobre mim",
      projects: "Veja meu portfólio",
      skills: "Veja minhas habilidades técnicas",
      resume: "Baixe meu currículo",
      contact: "Entre em contato",
      github: "Abra meu perfil no GitHub",
      linkedin: "Abra meu perfil no LinkedIn",
      clear: "Limpar terminal",
      unknown: "Comando não encontrado",
      navigatingAbout: "Navegando para /about...",
      navigatingProjects: "Navegando para /projects...",
      navigatingContact: "Navegando para /contact...",
      downloadingResume: "Baixando currículo...",
      openingGitHub: "Abrindo GitHub...",
      openingLinkedIn: "Abrindo LinkedIn...",
      scrollingAbout: "Rolando até a seção Sobre...",
    },
    commandMenu: {
      navigation: "Navegação",
      socials: "Redes Sociais",
      searchPlaceholder: "Digite um comando ou pesquise...",
      noResults: "Nenhum resultado encontrado.",
    },
    footer: {
      rights: "Todos os direitos reservados.",
      builtWith: "Construído com",
    },
  },
} as const;

export function getTranslation(locale: Locale, key: string) {
  const localeData = translations[locale] as Record<string, unknown>;
  const fallbackData = translations[defaultLocale] as Record<string, unknown>;

  const parts = key.split(".");
  
  let value: unknown = localeData;
  for (const part of parts) {
    value = (value as Record<string, unknown> | undefined)?.[part];
    if (value == null) {
      break;
    }
  }

  let fallbackValue: unknown = fallbackData;
  for (const part of parts) {
    fallbackValue = (fallbackValue as Record<string, unknown> | undefined)?.[part];
    if (fallbackValue == null) {
      break;
    }
  }

  return (value ?? fallbackValue ?? key) as string;
}
