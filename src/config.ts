export const siteConfig = {
  name: "Favour Daniel",
  title: "Backend Developer",
  description: "Portfolio website of Favour Daniel — Backend Developer and AI Engineer from Rivers State University, Nigeria.",
  accentColor: "#8b5cf6", // Neon Purple


  social: {
    email: "feivodanny.06@gmail.com",
    linkedin: "https://www.linkedin.com/in/favour-daniel-55231437b/",
    twitter: "https://x.com/internetguru01",
    github: "https://github.com/Danielfavour6002/",
  },

  aboutMe:
    "I'm a backend developer and computer programmer passionate about building scalable, data-driven systems that solve real-world problems. My work spans AI-powered APIs, automation tools, and user-focused platforms. I focus on clean backend architecture, performance optimization, and integrating AI into practical products. I’m also a former GDSC Lead at Rivers State University, where I led campus-wide tech initiatives and developer training programs.",

  skills: [
    "Python",
    "FastAPI",
    "LangChain",
    "PostgreSQL",
    "Docker",
    "REST API Design",
    "JavaScript",
    "Next.js",
    "Automation",
    "Django"
  ],

  projects: [
    {
      name: "MedScan AI",
      description:
        "An AI-powered medical assistant API that interprets medical records and generates structured health analyses in JSON format. Built with LangChain and Google Gemini, it supports multilingual understanding and local healthcare use cases in Nigeria.",
      link: "https://smartscan-ai.onrender.com",
      github: "https://github.com/Danielfavour6002/SmartScan-AI/",
      skills: ["FastAPI", "LangChain", "Google Gemini", "Pydantic", "Python"],
    },
     {
      name: "Workout Tracker",
      description:
        "A Django REST API for tracking workouts, exercises, sessions, and performance analytics. Users can register, log workouts, log exercises, view progress reports, and track their fitness journey. Admins can manage exercises and view user progress.",
      link: "https://workout-tracker-xd79.onrender.com/docs",
      github: "https://github.com/Danielfavour6002/Workout-Tracker",
      skills: ["Django", "Django rest framework", "postgres", "Python"],
    },
    {
      name: "School Portal API",
      description:
        "A backend system for university management that handles student authentication, course management, and course enrollment. Designed to streamline academic record management for institutions.",
      link: "https://school-portal-api-ll9w.onrender.com",
      github: "https://github.com/Danielfavour6002/School-Portal-Api",
      skills: ["Django", "REST API", "PostgreSQL", "Authentication"]
    },
  ],

  experience: [
    {
      company: "First On Call Initiative",
      title: "Backend Developer",
      dateRange: "March 2024 - January 2025",
      bullets: [
        "Developed and optimized backend services using FastAPI and PostgreSQL to support healthcare and automation systems.",
        "Integrated software archiitectures for developing efficient and scalable systems, e.g DRY, modularity, Dependency Inection.",
        "Implemented modular, scalable architecture and improved API performance and maintainability.",
        "Collaborated closely with frontend and data teams to align backend systems with business goals.",
      ],
    },
  ],

  education: [
    {
      school: "Rivers State University, Nigeria",
      degree: "Bachelor of Science (B.Sc.) in Computer Science",
      dateRange: "April 2022 - October 2025",
      achievements: [
        "Served as the Google Developer Student Club (GDSC) Lead for the 2023/2024 session, organizing developer workshops and community events.",
        "Led student developers in hands-on projects involving AI, automation, and cloud technologies.",
        "Gained strong foundations in backend systems, networking, and data-driven software development.",
      ],
    },
  ],
};
