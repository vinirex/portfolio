export const projects = [
  {
    slug: "inferential-analysis-brasilian-exports",
    title: "Inferential Analysis Brazilian Exports",
    thumbnail: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    videoPreview: "",
    liveDemo: "https://exportacao-brasileira.streamlit.app/",
    githubUrl: "https://github.com/vinirex/Analise_inferencial",
    technologies: ["Python", "Streamlit", "Machine Learning"],
    category: "Machine Learning",
    duration: "3 weeks",
    problem: "I wanted to apply the inferential analysis concepts I learned in class to a real dataset.",
    solution: "Developed a web application to analyze Brazilian exports using inferential statistics.",
    architecture: "Streamlit frontend with FastAPI backend, connected to a PostgreSQL database hosted on Supabase.",
    challenges: "Extracting and cleaning the data from multiple sources, and handling the imbalance of the data.",
    results: "Successfully applied inferential analysis concepts to a real dataset.",
    lessonsLearned: "Gained deep understanding of inferential analysis and its applications.",
    images: [
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80"]
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
