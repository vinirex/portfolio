export const projects = [
  {
    slug: "ecommerce-platform",
    title: "E-Commerce Platform",
    thumbnail: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    videoPreview: "",
    liveDemo: "https://example.com",
    githubUrl: "https://github.com/",
    technologies: ["React", "Next.js", "TypeScript", "TailwindCSS", "PostgreSQL"],
    category: "Full Stack",
    duration: "3 months",
    problem: "Local businesses needed an easy way to sell online without high fees.",
    solution: "Developed a multi-tenant e-commerce platform with a unified dashboard.",
    architecture: "Next.js frontend with Server Actions, connected to a PostgreSQL database hosted on Supabase.",
    challenges: "Handling real-time inventory updates and complex state management in the cart.",
    results: "Onboarded 50+ local businesses in the first month.",
    lessonsLearned: "Gained deep understanding of Server Components and optimistic UI updates.",
    images: [
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
    ]
  },
  {
    slug: "ai-finance-dashboard",
    title: "AI Finance Dashboard",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    videoPreview: "",
    liveDemo: "https://example.com",
    githubUrl: "https://github.com",
    technologies: ["Python", "FastAPI", "React", "Machine Learning"],
    category: "Machine Learning",
    duration: "2 months",
    problem: "Users struggled to categorize their spending automatically.",
    solution: "Built a classification model to categorize transactions and a dashboard to visualize trends.",
    architecture: "React SPA communicating with a FastAPI backend serving a scikit-learn model.",
    challenges: "Training the model with limited initial datasets and handling imbalanced categories.",
    results: "Achieved 92% accuracy in transaction categorization.",
    lessonsLearned: "Learned how to deploy machine learning models behind a REST API.",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
    ]
  },
  {
    slug: "task-management-api",
    title: "Enterprise Task API",
    thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    videoPreview: "",
    liveDemo: "https://example.com",
    githubUrl: "https://github.com",
    technologies: [".NET", "C#", "SQL Server", "Azure"],
    category: "Backend",
    duration: "4 months",
    problem: "Legacy system was too slow for the growing user base.",
    solution: "Migrated the monolith to a microservices architecture using ASP.NET Core.",
    architecture: "Microservices deployed on Azure App Service using Azure SQL.",
    challenges: "Ensuring data consistency across distributed services.",
    results: "Reduced average API response time by 60%.",
    lessonsLearned: "Mastered distributed tracing and event-driven architecture.",
    images: [
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80"
    ]
  }
];

export const projectCategories = ["All", "Frontend", "Backend", "Full Stack", "Python", "React", ".NET", "Machine Learning"];
