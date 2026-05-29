// ============================================
// CONTENT — Single source of truth for portfolio
// Edit this file to update any text/data on the site
// ============================================

export const profile = {
  name: "Satyam Maddheshiya",
  role: "Software Engineer",
  tagline: "Building full-stack systems & developer tooling",
  location: "Kanpur, India",
  email: "satyam.sipah12@gmail.com",
  phone: "+91 80949 50363",
  bio: "Third-year B.Tech student at HBTU Kanpur, focused on full-stack engineering with the MERN ecosystem and systems thinking. I care about clean architecture, async patterns, and shipping work that holds up under load. Currently open to summer 2026 SDE internships at product-led teams.",
  longBio: [
    "I started writing code in the second year of college after a long detour through JEE preparation. What pulled me in was the realization that software is the rare discipline where one motivated person can ship a working product end-to-end — frontend, backend, infrastructure, deploy — in days, not years.",
    "Since then I've been deliberate about depth over breadth. I'm working through the standard DSA progression in C++ (Striver A2Z, TUF+) for interview readiness, and building real full-stack systems on the side. My current project — an Interview Preparation Platform with async code execution via Redis + BullMQ + Judge0 — is the project I'm putting the most weight on this year.",
    "Outside the editor: chess, badminton, and an active Open Source community connection through OOSC 2025 at IIT Kanpur."
  ],
  socials: {
    github: "https://github.com/satyamsipah",
    linkedin: "https://www.linkedin.com/in/satyam-maddheshiya",
    leetcode: "https://leetcode.com/u/satyamsipah",
    email: "mailto:satyam.sipah12@gmail.com"
  }
};

export const education = {
  institution: "Harcourt Butler Technical University",
  shortName: "HBTU Kanpur",
  degree: "Bachelor of Technology (B.Tech)",
  duration: "July 2023 – May 2027",
  location: "Kanpur, Uttar Pradesh",
  coursework: [
    "Data Structures & Algorithms",
    "Object-Oriented Programming",
    "Database Management Systems",
    "Operating Systems",
    "Computer Networks"
  ],
  activities: [
    "Associate Head — Chess Club",
    "Member — NSS Club",
    "Badminton Player"
  ]
};

export const skills = [
  {
    category: "Languages",
    items: ["C++", "JavaScript", "TypeScript", "Python", "C"]
  },
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "Tailwind CSS", "HTML5", "CSS3"]
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "JWT", "NextAuth"]
  },
  {
    category: "Database & DevOps",
    items: ["MongoDB", "MySQL", "Docker", "Git", "GitHub", "Vercel", "CI/CD"]
  },
  {
    category: "Core CS",
    items: ["DSA", "OOP", "DBMS", "Operating Systems", "Computer Networks"]
  }
];

export const projects = [
  {
    title: "CodeChat – Codebase Q&A Assistant",
    status: "shipped" as const,
    year: "2026",
    summary:
      "End-to-end RAG codebase Q&A pipeline with AST-aware chunking via @babel/parser to preserve function and class semantic boundaries. Fused MongoDB Atlas Vector Search with MiniSearch BM25 via Reciprocal Rank Fusion over ~1.2K chunks, achieving 70%+ retrieval@8. Streaming inference via Gemini 2.0 Flash over SSE with file:line citations; HuggingFace cross-encoder re-ranking; JWT httpOnly auth; containerized with Docker Compose, deployed on Render & Vercel.",
    stack: ["React", "Node.js", "MongoDB Atlas", "Gemini", "BM25", "RRF", "SSE", "Docker"],
    highlights: [
      "AST-aware chunking via @babel/parser preserves function and class semantic boundaries across ~1.2K chunks",
      "Hybrid retrieval: Atlas Vector Search + MiniSearch BM25 fused via Reciprocal Rank Fusion — 70%+ retrieval@8",
      "Token-by-token streaming inference via Gemini 2.0 Flash over Server-Sent Events with file:line source citations",
      "HuggingFace cross-encoder re-ranking on top-8 candidates; JWT httpOnly cookies; Docker Compose containerization"
    ],
    repoUrl: "https://github.com/satyamsipah/CodeChat",
    liveUrl: "https://code-chat-iota.vercel.app/login"
  },
  {
    title: "FlexHire – Freelancer Escrow Marketplace",
    status: "shipped" as const,
    year: "2026",
    summary:
      "Freelancer marketplace with an 8-state milestone escrow state machine, 9 ACID-safe transitions inside MongoDB multi-document transactions atomically writing AuditLog entries. Integrated Razorpay Orders, Payouts, and Refunds with HMAC-SHA256 webhook verification and RBAC across client, freelancer, and admin roles. Real-time chat via Socket.io 4 with Redis (Upstash) pub/sub; dispute resolution, wallet payouts, Cloudinary uploads, Nodemailer notifications; deployed on Render & Vercel.",
    stack: ["MERN", "Socket.io", "Redis", "Razorpay", "Cloudinary", "Nodemailer", "JWT"],
    highlights: [
      "8-state milestone escrow state machine with 9 ACID-safe transitions in MongoDB multi-document transactions, atomically writing per-transition AuditLog entries",
      "Razorpay Orders, Payouts, Refunds with HMAC-SHA256 webhook verification; RBAC across client, freelancer, and admin roles",
      "Horizontally scalable real-time chat via Socket.io 4 backed by Redis (Upstash) pub/sub adapter",
      "Dispute resolution, wallet payouts, Cloudinary file uploads, and Nodemailer email notifications"
    ],
    repoUrl: "https://github.com/satyamsipah/FlexHire",
    liveUrl: "https://flex-hire-one.vercel.app/login"
  }
];

export const achievements = [
  {
    title: "Cybersecurity Essentials for Entrepreneurship",
    org: "IIT Kanpur — Advanced E-SDP (Ministry of MSME, Govt. of India)",
    description:
      "Hands-on coverage of XSS, SQL Injection, CSRF, IDOR, JWT exploitation, secure SDLC, and threat modeling."
  },
  {
    title: "Campus Ambassador — OOSC 2025",
    org: "Opportunity Open Source Conference, IIT Kanpur",
    description:
      "Represented HBTU at the Linux Foundation & Open Printing event; networked with engineers from Canonical, Zephyr RTOS, GSoC, and the broader FLOSS ecosystem."
  },
  {
    title: "NPTEL Certification — Soft Skills",
    org: "IIT Roorkee",
    description:
      "12-week curriculum on professional communication, conflict resolution, leadership, and high-impact presentation. Top-percentile score among national participants."
  },
  {
    title: "Smart India Hackathon 2025 — Participant",
    org: "Govt. of India",
    description:
      "Participated in India's largest national-level hackathon alongside team members; delivered prototype work under tight time constraints."
  },
  {
    title: "Introduction to Artificial Intelligence",
    org: "LinkedIn Learning",
    description:
      "Foundational AI literacy across core ML and AI concepts."
  },
  {
    title: "CHEM-TECHNOVA & Genesis",
    org: "HBTU Kanpur",
    description:
      "Represented institute at international chemical-tech competition and annual international fest, competing alongside national & international teams."
  }
];

export const navigation = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" }
];
