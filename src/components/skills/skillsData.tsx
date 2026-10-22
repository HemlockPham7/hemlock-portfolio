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
    title: "Languages",
    description: "Core languages used for high-throughput server backends, distributed algorithms, data manipulation, and web interfaces.",
    skills: [
      {
        id: "java",
        name: "Java",
        category: "Languages",
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
        id: "sql",
        name: "SQL",
        category: "Languages",
        icon: (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <ellipse cx="12" cy="5" rx="9" ry="3" />
            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          </svg>
        ),
      },
      {
        id: "cpp",
        name: "C++",
        category: "Languages",
        icon: (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M9 7a5 5 0 0 0-5 5 5 5 0 0 0 5 5c2 0 3.5-1 4.3-2.5" />
            <path d="M14 12h3m-1.5-1.5v3" />
            <path d="M19 12h3m-1.5-1.5v3" />
          </svg>
        ),
      },
      {
        id: "go",
        name: "Go",
        category: "Languages",
        icon: (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="17" cy="12" r="4" />
            <path d="M10 8H6a4 4 0 1 0 4 4v-1H7.5" />
            <path d="M2 10h2" />
            <path d="M1 13h3" />
          </svg>
        ),
      },
      {
        id: "javascript",
        name: "JavaScript",
        category: "Languages",
        icon: (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="3" />
            <path d="M8 12.5v3.5a2 2 0 0 1-2 2H5" />
            <path d="M13 11.5c.5-.7 1.2-1 2-1 1.4 0 2.2.8 2.2 2 0 1.5-1.4 2-2.2 2.5-.8.5-1.5 1-1.5 1.8 0 1.1 1 1.7 2.2 1.7.9 0 1.6-.3 2.1-.9" />
          </svg>
        ),
      },
      {
        id: "typescript",
        name: "TypeScript",
        category: "Languages",
        icon: (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="3" />
            <path d="M7 8h6m-3 0v8" />
            <path d="M15 11.5c.5-.7 1.2-1 2-1 1.4 0 2.2.8 2.2 2 0 1.5-1.4 2-2.2 2.5-.8.5-1.5 1-1.5 1.8 0 1.1 1 1.7 2.2 1.7.9 0 1.6-.3 2.1-.9" />
          </svg>
        ),
      },
      {
        id: "html",
        name: "HTML",
        category: "Languages",
        icon: (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M4 3l1.8 15.5L12 21l6.2-2.5L20 3H4z" />
            <path d="M7.5 7h9l-.5 4.5h-8l.3 3 3.7 1 3.7-1 .3-2.5" />
          </svg>
        ),
      },
      {
        id: "css",
        name: "CSS",
        category: "Languages",
        icon: (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M4 3l1.8 15.5L12 21l6.2-2.5L20 3H4z" />
            <path d="M16 7H8v4h7.5l-.5 4.5-3 1-3-1-.2-2" />
          </svg>
        ),
      },
    ],
  },
  {
    id: "frameworks",
    number: "02",
    title: "Frameworks & Skills",
    description: "Enterprise backend frameworks, reactive frontends, event streaming brokers, and payment infrastructures.",
    skills: [
      {
        id: "spring-boot",
        name: "Spring Boot",
        category: "Frameworks & Skills",
        icon: (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 2C6.48 2 2 6.48 2 12c0 3.69 2.01 6.91 5 8.65V18a5 5 0 0 1 5-5h2a5 5 0 0 0 5-5V7c0-2.76-2.24-5-5-5z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        ),
      },
      {
        id: "axon-framework",
        name: "Axon Framework",
        category: "Frameworks & Skills",
        icon: (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="6" cy="12" r="3" />
            <circle cx="18" cy="6" r="3" />
            <circle cx="18" cy="18" r="3" />
            <path d="M9 12h3m0 0l3-4.5m-3 4.5l3 4.5" />
          </svg>
        ),
      },
      {
        id: "react",
        name: "React",
        category: "Frameworks & Skills",
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
        id: "kafka",
        name: "Kafka",
        category: "Frameworks & Skills",
        icon: (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="3" />
            <circle cx="4" cy="7" r="2" />
            <circle cx="4" cy="17" r="2" />
            <circle cx="20" cy="7" r="2" />
            <circle cx="20" cy="17" r="2" />
            <path d="M6 8l3.5 2.5m-3.5 5.5l3.5-2.5m5.5-2.5l3.5-2.5m-3.5 5.5l3.5 2.5" />
          </svg>
        ),
      },
      {
        id: "api-gateway",
        name: "API Gateway",
        category: "Frameworks & Skills",
        icon: (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="8" y="4" width="8" height="16" rx="2" />
            <path d="M3 12h5" />
            <path d="M5.5 9.5L8 12l-2.5 2.5" />
            <path d="M16 8h3a2 2 0 0 1 2 2" />
            <path d="M16 12h5" />
            <path d="M16 16h3a2 2 0 0 0 2-2" />
            <circle cx="12" cy="8.5" r="1" fill="currentColor" />
            <circle cx="12" cy="12" r="1" fill="currentColor" />
            <circle cx="12" cy="15.5" r="1" fill="currentColor" />
          </svg>
        ),
      },
      {
        id: "keycloak",
        name: "Keycloak",
        category: "Frameworks & Skills",
        icon: (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 2L4 6v6c0 5.25 3.4 10.15 8 11.5 4.6-1.35 8-6.25 8-11.5V6l-8-4z" />
            <circle cx="12" cy="10" r="2.5" />
            <path d="M12 12.5V17" />
            <path d="M12 15h2" />
          </svg>
        ),
      },
      {
        id: "nginx",
        name: "Nginx",
        category: "Frameworks & Skills",
        icon: (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polygon points="12 2 21 7 21 17 12 22 3 17 3 7 12 2" />
            <path d="M8 16V8l8 8V8" />
          </svg>
        ),
      },
      {
        id: "swagger",
        name: "Swagger",
        category: "Frameworks & Skills",
        icon: (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="9" />
            <path d="M9 9a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2" />
            <path d="M15 9a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2" />
            <circle cx="12" cy="12" r="1.5" fill="currentColor" />
          </svg>
        ),
      },
      {
        id: "hls",
        name: "HLS",
        category: "Frameworks & Skills",
        icon: (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="2" y="4" width="20" height="14" rx="2" />
            <polygon points="10 8 15 11 10 14 10 8" />
            <path d="M8 21h8" />
            <path d="M12 18v3" />
          </svg>
        ),
      },
      {
        id: "vnpay",
        name: "VNPAY Payment Gateway",
        category: "Frameworks & Skills",
        icon: (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="2" y="5" width="20" height="14" rx="2" />
            <line x1="2" y1="10" x2="22" y2="10" />
            <path d="M6 15h4" />
            <path d="M15 14l2 2 4-4" />
          </svg>
        ),
      },
    ],
  },
  {
    id: "databases",
    number: "03",
    title: "Databases, Caching & Cloud",
    description: "Relational persistence engines, in-memory caching tiers, cloud object storage, and distributed search engines.",
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
        id: "caffeine",
        name: "Caffeine",
        category: "Databases, Caching & Cloud",
        icon: (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M17 8h1a3 3 0 0 1 0 6h-1" />
            <path d="M3 8h14v7a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z" />
            <path d="M10 2l-2 4h3l-2 4" />
          </svg>
        ),
      },
      {
        id: "amazon-s3",
        name: "Amazon S3",
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
        id: "cloudfront",
        name: "CloudFront",
        category: "Databases, Caching & Cloud",
        icon: (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 3a15 15 0 0 1 0 18" />
            <path d="M12 3a15 15 0 0 0 0 18" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <circle cx="12" cy="12" r="2" fill="currentColor" />
          </svg>
        ),
      },
      {
        id: "elasticsearch",
        name: "Elasticsearch",
        category: "Databases, Caching & Cloud",
        icon: (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="11" cy="11" r="7" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
            <path d="M8 11h6" />
            <path d="M8 8h4" />
            <path d="M8 14h3" />
          </svg>
        ),
      },
    ],
  },
  {
    id: "devops",
    number: "04",
    title: "DevOps & Monitoring",
    description: "Continuous delivery, containerization, cloud pipelines, distributed tracing, and real-time observability.",
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
        id: "cicd",
        name: "CI/CD",
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
        id: "azure-devops",
        name: "Azure DevOps",
        category: "DevOps & Monitoring",
        icon: (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M4 17l4-11 5 4 6-6v13l-6 3z" />
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
        id: "tempo",
        name: "Tempo",
        category: "DevOps & Monitoring",
        icon: (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="4" y1="6" x2="16" y2="6" strokeWidth="2.5" />
            <line x1="8" y1="12" x2="20" y2="12" strokeWidth="2.5" />
            <line x1="6" y1="18" x2="14" y2="18" strokeWidth="2.5" />
            <circle cx="4" cy="6" r="1.5" fill="currentColor" />
            <circle cx="8" cy="12" r="1.5" fill="currentColor" />
            <circle cx="6" cy="18" r="1.5" fill="currentColor" />
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
        id: "logstash",
        name: "Logstash",
        category: "DevOps & Monitoring",
        icon: (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M4 4h16l-5 8v6l-4 2v-8L4 4z" />
            <line x1="8" y1="8" x2="14" y2="8" />
          </svg>
        ),
      },
      {
        id: "new-relic",
        name: "New Relic",
        category: "DevOps & Monitoring",
        icon: (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polygon points="12 2 20 7 20 17 12 22 4 17 4 7" />
            <polygon points="12 6 17 9.5 17 14.5 12 18 7 14.5 7 9.5" />
          </svg>
        ),
      },
    ],
  },
  {
    id: "ai-tools",
    number: "05",
    title: "AI & Development Tools",
    description: "Autonomous agentic coding environments, frontier reasoning models, and intelligence acceleration systems.",
    skills: [
      {
        id: "google-antigravity",
        name: "Google Antigravity",
        category: "AI & Development Tools",
        icon: (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(-30 12 12)" />
            <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(30 12 12)" />
            <circle cx="12" cy="12" r="2.5" fill="currentColor" />
          </svg>
        ),
      },
      {
        id: "claude-opus",
        name: "Claude Opus 5.5",
        category: "AI & Development Tools",
        icon: (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07L19.07 4.93" />
            <circle cx="12" cy="12" r="2" fill="currentColor" />
          </svg>
        ),
      },
    ],
  },
];
