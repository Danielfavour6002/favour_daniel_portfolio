export const siteConfig = {
  name: "Favour Daniel",
  title: "Backend & AI Engineer",
  description:
    "Portfolio of Favour Daniel, Backend and AI Engineer in Nigeria: payments, escrow and booking systems, agentic AI and government platforms.",
  accentColor: "#8b5cf6", // Neon Purple

  social: {
    email: "feivodanny.06@gmail.com",
    linkedin: "https://www.linkedin.com/in/favour-daniel-55231437b/",
    twitter: "https://x.com/internetguru01",
    github: "https://github.com/Danielfavour6002/",
  },

  aboutMe:
    "I'm a backend and AI engineer with 3+ years of shipping production systems, freelancing since 2023 (5.0 rating, 70 orders on Fiverr) and building for healthcare, marketplace and government clients since. I work on the parts that have to be right: payments with escrow, commissions and refunds, booking engines that can never double-book, scoring and analytics for 20,000 civil-service records, and agentic AI systems that reason over real data. I own work end to end, from schema and API design to deployment, and I care most about systems that stay correct when requests retry, fail or arrive at the same time. I write about system design on X and LinkedIn.",

  skills: [
    "Python",
    "FastAPI",
    "Django REST Framework",
    "NestJS",
    "Node.js",
    "PostgreSQL",
    "MongoDB",
    "System Design",
    "Payments & Escrow",
    "Webhooks",
    "Idempotency",
    "Caching",
    "RBAC & Auth",
    "LangChain",
    "Agentic Systems",
    "Gemini Live",
    "Computer Vision (YOLO)",
    "Docker",
  ],

  projects: [
    {
      name: "FormIQ",
      description:
        "A real-time AI gym coach you talk to like a video call. A YOLO pose pipeline watches one phone camera while a Gemini Live coach speaks corrections mid-rep, scores your form from 0 to 100, and answers questions about anything training related. Supports deadlifts, lunges, squats, push-ups and sit-ups, with two coach personas (Coach David today, Coach Zara in progress) that stay consistent across sessions. First version took about 10 seconds to respond on my local machine; tuning YOLO's confidence thresholds and moving inference to a VPS brought it under about 2 seconds. Landing page and waitlist are live; the app is in final pre-launch.",
      link: "https://tryformiq.fit",
      github: "",
      skills: ["FastAPI", "Gemini Live", "YOLO", "WebRTC", "Supabase", "Python"],
    },
    {
      name: "Trimly",
      description:
        "Backend for a multi-vendor service-booking marketplace, built end to end. Payments run on Flutterwave with webhook-driven confirmation, idempotent transaction handling, platform commission, refunds, and an escrow flow with dispute resolution. A slot engine calculates each vendor's real availability and blocks double bookings under concurrent requests. Includes location-aware vendor search (closest first, filter by rating, name or service), ratings, chat, notifications, four-role access control, an admin panel, caching and Docker deployment. Launch-ready; release is on hold on the client side.",
      link: "https://trimly-app.onrender.com/swagger/",
      github: "",
      skills: ["Django REST Framework", "PostgreSQL", "Flutterwave", "Escrow", "Webhooks", "Docker"],
    },
    {
      name: "Aponeura",
      description:
        "Flagship healthcare platform for First On Call Initiative, which I architected across backend and frontend. Patients book doctors and consult online, with AI-assisted prescription support; the wider platform covers provider discovery, emergency SOS, medication scanning and provider dashboards. Built with NestJS and React.",
      link: "https://aponeura.com/",
      github: "",
      skills: ["NestJS", "React", "System Design", "Healthcare", "AI"],
    },
    {
      name: "AutoDB",
      description:
        "An agentic database tool: describe what you need in plain English and the agent designs the schema, analyses live data and pushes changes straight to the database. Agents tend to loop when handed large schemas, so I built a custom schema-pruning engine that gives the agent only the context it needs, which eliminated the loops. Supports Postgres, MySQL and SQLite, with a Push-to-DB execution layer.",
      link: "https://autodb.streamlit.app/",
      github: "https://github.com/Danielfavour6002/AutoDB",
      skills: ["LangChain", "Groq", "NL2SQL", "Python", "Streamlit"],
    },
    {
      name: "Abia State Performance Management System",
      description:
        "Backend for the Abia State civil service performance platform, covering about 20,000 staff records. Tasks are assigned, submitted with evidence, then approved or rejected; approved work is auto-scored on submission counts, timeliness and accuracy, and those scores become each officer's KPIs. Role-scoped dashboards for officers, heads of department, heads of MDAs and state-wide leadership, plus official performance reports. Integrates with the state's Central Authentication System over API, with an OTP login flow. Runs on a VPS with Neon Postgres.",
      link: "https://pms-api.absg-ohos.cloud/docs",
      github: "",
      skills: ["Scoring Engine", "RBAC", "CAS Integration", "OTP Auth", "Postgres", "Analytics"],
    },
    {
      name: "Document Tracker",
      description:
        "NestJS backend for the same civil service that tracks every document from upload to completion. Officers upload, refer, return for correction, comment on and change the status of documents; every hand-off is recorded, so the system can report days held at each stop and which documents keep looping back for revision. Admin-approved sign-ups, bureau-scoped officer directories, notifications, and analytics for processing time, volume and status distribution.",
      link: "https://doc-tracker-api.ghum-apps.cloud/api-docs",
      github: "",
      skills: ["NestJS", "MongoDB", "Cloudinary", "RBAC", "Analytics"],
    },
    {
      name: "PyQuery",
      description:
        "A lightweight in-memory SQL query engine built from scratch in Python, to understand what happens underneath the ORM.",
      link: "https://github.com/Danielfavour6002/PyQuery",
      github: "https://github.com/Danielfavour6002/PyQuery",
      skills: ["Python", "SQL", "Query Engines"],
    },
    {
      name: "SmartScan AI",
      description:
        "AI-powered medical assistant API that interprets health data and returns structured analyses, with multilingual understanding for local healthcare use. Built with FastAPI, LangChain and Google Gemini, with Pydantic-validated structured outputs.",
      link: "https://smartscan-ai.onrender.com",
      github: "https://github.com/Danielfavour6002/SmartScan-AI/",
      skills: ["FastAPI", "LangChain", "Google Gemini", "Pydantic"],
    },
  ],

  experience: [
    {
      company: "Abia State Government",
      title: "Backend Engineer",
      dateRange: "July 2026 - Present",
      bullets: [
        "Built and run the backend of the state performance management system for about 20,000 civil-service records: task assignment, evidence submission, review, and an automated scoring engine (submission counts, timeliness, accuracy) that produces each officer's KPIs.",
        "Designed role-scoped dashboards and performance reports for officers, heads of department, heads of MDAs and state-wide leadership.",
        "Integrated the platform with the state's Central Authentication System over API, and added an OTP login flow.",
        "Built the Document Tracker backend (NestJS, MongoDB): referral and return-for-correction workflows, status tracking, comments, notifications, and analytics on days held per stop and correction loops.",
        "Deployed to a VPS with managed Postgres, and worked with UI and frontend developers on API contracts.",
      ],
    },
    {
      company: "Solnx Lab",
      title: "Backend Engineer",
      dateRange: "December 2025 - June 2026",
      bullets: [
        "Led backend delivery for Trimly, a multi-vendor booking marketplace: Flutterwave payments with webhooks and idempotent handling, escrow with dispute resolution, commissions and refunds.",
        "Built the slot-availability engine that prevents double bookings, plus location-aware vendor search, ratings, chat, notifications, an admin panel and four-role access control.",
        "Added caching and containerised the services with Docker; documented every endpoint for mobile and frontend teams.",
        "Turned client requirements into schemas, API contracts and delivery plans in an agency environment.",
      ],
    },
    {
      company: "First On Call Initiative",
      title: "Backend Developer",
      dateRange: "March 2024 - January 2025",
      bullets: [
        "Architected Aponeura, the organisation's flagship healthcare platform, across backend and frontend (NestJS, React): doctor booking, online consultation and AI-assisted prescription.",
        "Structured the codebase around DRY, dependency injection and modular service layers so new modules could be added without rewrites.",
        "Worked with clinicians and frontend engineers to turn healthcare workflows into data models and APIs.",
      ],
    },
    {
      company: "Freelance (Fiverr, Python Engineer)",
      title: "Backend & Automation Engineer",
      dateRange: "2023 - Present",
      bullets: [
        "70 orders delivered at a 5.0 rating (42 reviews): APIs, full-stack web apps, automation, scraping and chatbots, from brief to handover.",
        "Built a church administration platform (React, Node/Express, PostgreSQL, Prisma) with role-based access, QR registration, donation and expense tracking, and PDF reporting.",
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
