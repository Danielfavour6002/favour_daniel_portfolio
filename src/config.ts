export const siteConfig = {
  name: "Favour Daniel",
  title: "Backend Developer & AI Engineer",
  description:
    "Portfolio website of Favour Daniel — Backend Developer and AI Engineer from Rivers State University, Nigeria.",
  accentColor: "#8b5cf6", // Neon Purple

  social: {
    email: "feivodanny.06@gmail.com",
    linkedin: "https://www.linkedin.com/in/favour-daniel-55231437b/",
    twitter: "https://x.com/internetguru01",
    github: "https://github.com/Danielfavour6002/",
  },

  aboutMe:
    "I'm a backend developer and AI engineer passionate about building scalable, data-driven architectures and integrating AI into production-ready products. With a strong foundation in Python and LangChain, I specialize in solving complex problems like NL2SQL, autonomous agents, and high-performance API design. I'm currently learning more about AI engineering and React, constantly expanding my skillset",

  skills: [
    "Python",
    "FastAPI",
    "LangChain",
    "PostgreSQL",
    "Docker",
    "NL2SQL",
    "Agentic Reasoning",
    "Django",
    "REST API Design",
    "Next.js",
  ],

  projects: [
    {
      name: "FormIQ",
      description:
        "An AI-powered real-time fitness coaching platform that watches, corrects, and scores your form as you train. Built with a live pose-tracking pipeline (YOLO) and a multimodal AI coach (Gemini Live) that delivers voice corrections mid-rep. Features a 0–100 Form Score, session summaries, and a persistent AI coaching persona — all running from a single phone camera.",
      link: "https://tryformiq.fit",
      github: "",
      skills: ["FastAPI", "Gemini Live", "YOLO", "Supabase", "webrtc", "Python"],
    },
    {
      name: "AutoDB",
      description:
        "An AI database lifecycle tool that architects schemas and analyzes live data via natural language. Features a custom schema pruning engine to eliminate 'agent loops', multi-dialect support (Postgres/MySQL/SQLite), and a direct 'Push-to-DB' execution layer.",
      link: "https://autodb.streamlit.app/",
      github: "https://github.com/Danielfavour6002/AutoDB",
      skills: ["LangChain", "Groq", "Python", "SQL", "Streamlit"],
    },
    {
      name: "Trimly",
      description:
        "A robust multi-vendor marketplace backend. Engineered secure transaction logic, real-time inventory synchronization, and a comprehensive vendor management system. Focuses on high-concurrency performance and data integrity.",
      link: "https://trimly-app.onrender.com/swagger/",
      github: "",
      skills: [
        "DjangoRestFramework",
        "PostgreSQL",
        "Swagger/OpenAPI",
        "Backend Architecture",
      ],
    },
    {
      name: "MedScan AI",
      description:
        "An AI-powered medical assistant API that interprets medical records and generates structured health analyses. Built with LangChain and Google Gemini, supporting multilingual understanding for local healthcare use cases.",
      link: "https://smartscan-ai.onrender.com",
      github: "https://github.com/Danielfavour6002/SmartScan-AI/",
      skills: ["FastAPI", "LangChain", "Google Gemini", "Pydantic"],
    },
    {
      name: "Workout Tracker",
      description:
        "A Django REST API for tracking fitness performance, sessions, and analytics. Includes user progress reporting, administrative management tools, and secure session logging.",
      link: "https://workout-tracker-xd79.onrender.com/docs",
      github: "https://github.com/Danielfavour6002/Workout-Tracker",
      skills: ["Django", "DRF", "PostgreSQL", "Python"],
    },
  ],

  experience: [
    {
      company: "Solnx Lab",
      title: "Backend Developer",
      dateRange: "December 2025 - Present",
      bullets: [
        "Architected and maintained scalable backend systems for diverse client-facing applications in an agile agency environment.",
        "Led the backend development for Trimly, a multi-vendor marketplace, implementing secure payment flows and real-time inventory tracking.",
        "Optimized database schemas and API performance, resulting in significant reductions in server response times.",
        "Collaborated with cross-functional teams to translate business requirements into high-performance technical solutions.",
      ],
    },
    {
      company: "First On Call Initiative",
      title: "Backend Developer",
      dateRange: "March 2024 - January 2025",
      bullets: [
        "Designed and optimized RESTful APIs using FastAPI and PostgreSQL for automated healthcare data processing.",
        "Implemented industry-standard software patterns including DRY, Dependency Injection, and modular service architectures.",
        "Streamlined backend workflows to improve overall system maintainability and scalability.",
        "Partnered with frontend teams to deliver seamless integration for data-driven internal tools.",
      ],
    },
  ],

  education: [
    {
      school: "Rivers State University, Nigeria",
      degree: "Bachelor of Science (B.Sc.) in Computer Science",
      dateRange: "April 2022 - October 2025",
      achievements: [
        "Served as Google Developer Student Club (GDSC) Lead (2023/2024), overseeing developer workshops and local tech community growth.",
        "Mentored student developers in building hands-on projects with AI, automation, and cloud technologies.",
        "Graduated with a focus on backend systems, networking, and data-driven software development.",
      ],
    },
  ],
};