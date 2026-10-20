import React from "react";

export interface SkillItem {
  id: string;
  name: string;
  category: string;
  icon: React.ReactNode;
}

export interface SkillCategory {
  id: string;
  number: string;
  title: string;
  description: string;
  skills: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    number: "01",
    title: "Programming Languages",
    description: "Core languages used for high-performance server architectures, algorithms, and type-safe systems.",
    skills: [
      {
        id: "java",
        name: "Java",
        category: "Programming Languages",
        icon: (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
            <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
            <line x1="6" y1="1" x2="6" y2="4" />
            <line x1="10" y1="1" x2="10" y2="4" />
            <line x1="14" y1="1" x2="14" y2="4" />
          </svg>
        ),
      },
      {
        id: "typescript",
        name: "TypeScript",
        category: "Programming Languages",
        icon: (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="3" />
            <path d="M7 8h6m-3 0v8" />
            <path d="M15 11.5c.5-.7 1.2-1 2-1 1.4 0 2.2.8 2.2 2 0 1.5-1.4 2-2.2 2.5-.8.5-1.5 1-1.5 1.8 0 1.1 1 1.7 2.2 1.7.9 0 1.6-.3 2.1-.9" />
          </svg>
        ),
      },
      {
        id: "javascript",
        name: "JavaScript",
        category: "Programming Languages",
        icon: (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="3" />
            <path d="M8 12.5v3.5a2 2 0 0 1-2 2H5" />
            <path d="M13 11.5c.5-.7 1.2-1 2-1 1.4 0 2.2.8 2.2 2 0 1.5-1.4 2-2.2 2.5-.8.5-1.5 1-1.5 1.8 0 1.1 1 1.7 2.2 1.7.9 0 1.6-.3 2.1-.9" />
          </svg>
        ),
      },
      {
        id: "python",
        name: "Python",
        category: "Programming Languages",
        icon: (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 2c3.5 0 4 1.5 4 3.5v2.5H9a2 2 0 0 0-2 2v2H5c-2 0-3.5-.5-3.5-4C1.5 4.5 3 2 6.5 2H12z" />
            <circle cx="9" cy="5" r="1" fill="currentColor" />
            <path d="M12 22c-3.5 0-4-1.5-4-3.5v-2.5h7a2 2 0 0 0 2-2v-2h2c2 0 3.5.5 3.5 4 0 3.5-1.5 6-5 6H12z" />
            <circle cx="15" cy="19" r="1" fill="currentColor" />
          </svg>
        ),
      },
      {
        id: "cpp",
        name: "C++",
        category: "Programming Languages",
        icon: (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M10 7a5 5 0 0 0-5 5 5 5 0 0 0 5 5c2 0 3.5-1 4.3-2.5" />
            <path d="M14 12h3m-1.5-1.5v3" />
            <path d="M19 12h3m-1.5-1.5v3" />
          </svg>
        ),
      },
      {
        id: "sql",
        name: "SQL",
        category: "Programming Languages",
        icon: (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <ellipse cx="12" cy="5" rx="9" ry="3" />
            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          </svg>
        ),
      },
    ],
  },
  {
    id: "frameworks",
    number: "02",
    title: "Frameworks & Core Skills",
    description: "Enterprise backend frameworks, modern web runtimes, component architectures, and system design patterns.",
    skills: [
      {
        id: "spring-boot",
        name: "Spring Boot",
        category: "Frameworks & Core Skills",
        icon: (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 2C6.48 2 2 6.48 2 12c0 3.69 2.01 6.91 5 8.65V18a5 5 0 0 1 5-5h2a5 5 0 0 0 5-5V7c0-2.76-2.24-5-5-5z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        ),
      },
      {
        id: "nextjs",
        name: "Next.js",
        category: "Frameworks & Core Skills",
        icon: (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="10" />
            <path d="M8 8v8l8-9.5" />
            <path d="M16 11v5" />
          </svg>
        ),
      },
      {
        id: "react",
        name: "React",
        category: "Frameworks & Core Skills",
        icon: (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(0 12 12)" />
            <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
            <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
            <circle cx="12" cy="12" r="2" fill="currentColor" />
          </svg>
        ),
      },
      {
        id: "nodejs",
        name: "Node.js",
        category: "Frameworks & Core Skills",
        icon: (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 2l8 4.5v9L12 20l-8-4.5v-9L12 2z" />
            <path d="M12 12l8-4.5" />
            <path d="M12 12v8" />
            <path d="M12 12L4 7.5" />
          </svg>
        ),
      },
      {
        id: "express",
        name: "Express",
        category: "Frameworks & Core Skills",
        icon: (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="2" y="5" width="20" height="14" rx="3" />
            <path d="M6 9h3a2 2 0 0 1 0 4H6v2" />
            <path d="M13 15l4-6m-4 0l4 6" />
          </svg>
        ),
      },
      {
        id: "rest-api",
        name: "RESTful APIs",
        category: "Frameworks & Core Skills",
        icon: (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M4 11a9 9 0 0 1 9 9" />
            <path d="M4 4a16 16 0 0 1 16 16" />
            <circle cx="5" cy="19" r="1" fill="currentColor" />
            <path d="M16 4h4v4" />
            <path d="M13 11l7-7" />
          </svg>
        ),
      },
      {
        id: "oop",
        name: "OOP & System Design",
        category: "Frameworks & Core Skills",
        icon: (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="3" y="3" width="7" height="7" rx="1.5" />
            <rect x="14" y="3" width="7" height="7" rx="1.5" />
            <rect x="14" y="14" width="7" height="7" rx="1.5" />
            <rect x="3" y="14" width="7" height="7" rx="1.5" />
            <line x1="10" y1="6.5" x2="14" y2="6.5" />
            <line x1="6.5" y1="10" x2="6.5" y2="14" />
            <line x1="17.5" y1="10" x2="17.5" y2="14" />
            <line x1="10" y1="17.5" x2="14" y2="17.5" />
          </svg>
        ),
      },
    ],
  },
  {
    id: "databases",
    number: "03",
    title: "Databases, Caching & Cloud",
    description: "Distributed persistence engines, in-memory caches, cloud storage pipelines, and serverless backends.",
    skills: [
      {
        id: "postgresql",
        name: "PostgreSQL",
        category: "Databases, Caching & Cloud",
        icon: (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 3C7 3 3 6.5 3 11c0 3 1.8 5.6 4.5 7v3l3-1.5c.5.3 1 .4 1.5.5C17 20 21 16.5 21 12c0-5-4-9-9-9z" />
            <path d="M9 11a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
            <path d="M15 11a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
          </svg>
        ),
      },
      {
        id: "mysql",
        name: "MySQL",
        category: "Databases, Caching & Cloud",
        icon: (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <ellipse cx="12" cy="6" rx="8" ry="3" />
            <path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6" />
            <path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
          </svg>
        ),
      },
      {
        id: "redis",
        name: "Redis",
        category: "Databases, Caching & Cloud",
        icon: (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 2L2 7l10 5 10-5-10-5z" />
            <path d="M2 17l10 5 10-5" />
            <path d="M2 12l10 5 10-5" />
          </svg>
        ),
      },
      {
        id: "mongodb",
        name: "MongoDB",
        category: "Databases, Caching & Cloud",
        icon: (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 2C8 6 6 10 6 14a6 6 0 0 0 12 0c0-4-2-8-6-12z" />
            <line x1="12" y1="2" x2="12" y2="22" />
          </svg>
        ),
      },
      {
        id: "aws-s3",
        name: "AWS S3",
        category: "Databases, Caching & Cloud",
        icon: (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M20 16.2A4.5 4.5 0 0 0 17.5 8h-1.8A7 7 0 1 0 4 14.9" />
            <polyline points="16 16 12 12 8 16" />
            <line x1="12" y1="12" x2="12" y2="21" />
          </svg>
        ),
      },
      {
        id: "cloudflare",
        name: "Cloudflare",
        category: "Databases, Caching & Cloud",
        icon: (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z" />
            <path d="M15 13l3 3-3 3" />
          </svg>
        ),
      },
      {
        id: "supabase",
        name: "Supabase",
        category: "Databases, Caching & Cloud",
        icon: (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
          </svg>
        ),
      },
    ],
  },
  {
    id: "devops",
    number: "04",
    title: "DevOps & Monitoring",
    description: "Containerization, orchestration, continuous delivery pipelines, and comprehensive telemetry observation.",
    skills: [
      {
        id: "docker",
        name: "Docker",
        category: "DevOps & Monitoring",
        icon: (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M4 14h16c0 3.3-2.7 6-6 6H8c-3.3 0-6-2.7-6-6v-1h2z" />
            <rect x="7" y="10" width="3" height="3" rx="0.5" />
            <rect x="11" y="10" width="3" height="3" rx="0.5" />
            <rect x="15" y="10" width="3" height="3" rx="0.5" />
            <rect x="11" y="6" width="3" height="3" rx="0.5" />
            <rect x="15" y="6" width="3" height="3" rx="0.5" />
            <path d="M20 14c1.5-1 2.5-2 3-3-1 0-2 .5-3 1" />
          </svg>
        ),
      },
      {
        id: "kubernetes",
        name: "Kubernetes",
        category: "DevOps & Monitoring",
        icon: (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="9" />
            <circle cx="12" cy="12" r="3" />
            <line x1="12" y1="3" x2="12" y2="9" />
            <line x1="12" y1="15" x2="12" y2="21" />
            <line x1="4.2" y1="7.5" x2="9.4" y2="10.5" />
            <line x1="14.6" y1="13.5" x2="19.8" y2="16.5" />
            <line x1="4.2" y1="16.5" x2="9.4" y2="13.5" />
            <line x1="14.6" y1="10.5" x2="19.8" y2="7.5" />
          </svg>
        ),
      },
      {
        id: "cicd",
        name: "CI / CD",
        category: "DevOps & Monitoring",
        icon: (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 2v4m0 12v4" />
            <path d="M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83" />
            <path d="M2 12h4m12 0h4" />
            <path d="M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" />
            <circle cx="12" cy="12" r="4" />
          </svg>
        ),
      },
      {
        id: "github-actions",
        name: "GitHub Actions",
        category: "DevOps & Monitoring",
        icon: (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polygon points="5 3 19 12 5 21 5 3" />
            <circle cx="7" cy="12" r="2" fill="currentColor" />
          </svg>
        ),
      },
      {
        id: "prometheus",
        name: "Prometheus",
        category: "DevOps & Monitoring",
        icon: (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 2c2 3 4 5 4 8a4 4 0 0 1-8 0c0-3 2-5 4-8z" />
            <ellipse cx="12" cy="17" rx="8" ry="4" />
            <path d="M4 17c0 2 3.6 4 8 4s8-2 8-4" />
          </svg>
        ),
      },
      {
        id: "grafana",
        name: "Grafana",
        category: "DevOps & Monitoring",
        icon: (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="9" />
            <path d="M8 12a4 4 0 1 0 8 0 4 4 0 0 0-8 0" />
            <path d="M12 8a4 4 0 0 1 4 4" />
          </svg>
        ),
      },
      {
        id: "linux",
        name: "Linux",
        category: "DevOps & Monitoring",
        icon: (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="3" y="4" width="18" height="16" rx="3" />
            <path d="M7 9l4 3-4 3" />
            <line x1="13" y1="15" x2="17" y2="15" />
          </svg>
        ),
      },
    ],
  },
  {
    id: "ai-tools",
    number: "05",
    title: "AI & Productivity Tools",
    description: "Next-generation developer tooling, agentic programming systems, large language model APIs, and intelligent workflows.",
    skills: [
      {
        id: "cursor",
        name: "Cursor",
        category: "AI & Productivity Tools",
        icon: (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M3 3l7 18 3-7 7-3L3 3z" />
            <path d="M13 13l6 6" />
          </svg>
        ),
      },
      {
        id: "claude",
        name: "Claude",
        category: "AI & Productivity Tools",
        icon: (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07L19.07 4.93" />
          </svg>
        ),
      },
      {
        id: "openai",
        name: "OpenAI API",
        category: "AI & Productivity Tools",
        icon: (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 3a9 9 0 0 1 7.8 4.5M21 12a9 9 0 0 1-4.5 7.8M12 21a9 9 0 0 1-7.8-4.5M3 12a9 9 0 0 1 4.5-7.8" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        ),
      },
      {
        id: "ollama",
        name: "Ollama",
        category: "AI & Productivity Tools",
        icon: (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="8" />
            <path d="M8 10h.01M16 10h.01" />
            <path d="M9 14c1 1.5 5 1.5 6 0" />
            <path d="M9 4L8 7M15 4l1 3" />
          </svg>
        ),
      },
      {
        id: "langchain",
        name: "LangChain",
        category: "AI & Productivity Tools",
        icon: (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
          </svg>
        ),
      },
      {
        id: "copilot",
        name: "GitHub Copilot",
        category: "AI & Productivity Tools",
        icon: (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 3c-4.97 0-9 3.58-9 8 0 2.65 1.48 5 3.75 6.45V20l3.5-1.5c.57.17 1.15.25 1.75.25 4.97 0 9-3.58 9-8s-4.03-8-9-8z" />
            <circle cx="9" cy="11" r="1.25" fill="currentColor" />
            <circle cx="15" cy="11" r="1.25" fill="currentColor" />
          </svg>
        ),
      },
    ],
  },
];
