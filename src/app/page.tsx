"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import NetcompanyDetail from "@/components/experiences/NetcompanyDetail";
import PreviousJobDetail from "@/components/experiences/PreviousJobDetail";
import ExperienceModal from "@/components/experiences/ExperienceModal";
import ProjectDetailModal from "@/components/projects/ProjectDetailModal";
import Project1Detail from "@/components/projects/details/Project1Detail";
import Project2Detail from "@/components/projects/details/Project2Detail";
import Project3Detail from "@/components/projects/details/Project3Detail";
import Project4Detail from "@/components/projects/details/Project4Detail";
import Project5Detail from "@/components/projects/details/Project5Detail";
import SkillsSection from "@/components/skills/SkillsSection";
import AwardCertificateModal, { AwardItem } from "@/components/about/AwardCertificateModal";

interface FeaturedProject {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveDemo: string;
  github: string;
}

export default function PortfolioPage() {
  // Award Certificate Modal State
  const [selectedAward, setSelectedAward] = useState<AwardItem | null>(null);

  // Experience Details Modal State
  const [activeExpModal, setActiveExpModal] = useState<"netcompany" | "previous" | null>(null);

  // Project Details Modal State (6 Dedicated Projects)
  const [activeProjectModal, setActiveProjectModal] = useState<string | null>(null);

  // Section 4 Interactive Simulator State
  const [clusterNodes, setClusterNodes] = useState<number>(8);
  const [requestLoad, setRequestLoad] = useState<number>(45);
  const [cacheStrategy, setCacheStrategy] = useState<"none" | "redis" | "edge">("redis");

  // Contact Form State
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  // Calculate telemetry metrics dynamically
  const simulationMetrics = useMemo(() => {
    let baseLatency = 85;
    let hitRatio = 0;
    let costPerNode = 140;

    if (cacheStrategy === "redis") {
      hitRatio = 84;
      baseLatency = 32;
    } else if (cacheStrategy === "edge") {
      hitRatio = 94;
      baseLatency = 14;
    }

    const loadFactor = requestLoad / (clusterNodes * 8);
    const calculatedP99 = Math.max(8, Math.round(baseLatency * Math.max(0.6, loadFactor * 1.1)));
    const cpuSaturation = Math.min(98, Math.round((requestLoad / (clusterNodes * 4)) * 100));
    const estimatedCost = clusterNodes * costPerNode + (cacheStrategy === "redis" ? 220 : cacheStrategy === "edge" ? 380 : 0);

    let invariantText = "System operating within standard performance margins.";
    if (cpuSaturation > 80) {
      invariantText = "Warning: Node CPU saturation exceeds 80 percent threshold. Auto-scaling policy triggers additional replica provisioning.";
    } else if (cacheStrategy === "none") {
      invariantText = "Direct database querying without caching layer introduces high latency variance under burst traffic.";
    } else {
      invariantText = "High cache hit efficiency maintains predictable sub-50ms p99 response times across distributed cluster nodes.";
    }

    return {
      p99: calculatedP99,
      hitRatio,
      cpuSaturation,
      cost: estimatedCost,
      invariantText,
    };
  }, [clusterNodes, requestLoad, cacheStrategy]);

  const featuredProjects: FeaturedProject[] = [
    {
      id: "amplio",
      title: "Distributed and Multi-level Caching System",
      description:
        "An event-driven multi-tier caching system (L1 Caffeine + L2 Redis) with Redisson locking, Debezium CDC synchronization, and observability.",
      image: "/images/multi-level-cache-thumbnail.png",
      tags: ["Java", "Spring Boot", "Kafka", "Debezium", "PostgreSQL", "Redis", "Caffeine", "Docker", "Prometheus", "Grafana", "Tempo", "Logstash"],
      liveDemo: "https://www.youtube.com/watch?v=FaJ3cvN6Fmc",
      github: "https://github.com/HemlockPham7/evaluate-advanced-concept",
    },
    {
      id: "cinestream",
      title: "Cloud Streaming System",
      description:
        "Developed a scalable movie streaming platform with adaptive bitrate streaming and a real-time CDC-driven search system, leveraging Spring Boot, React, Kafka, Elasticsearch, PostgreSQL, S3, and CloudFront to deliver fast playback startup and low-latency search at scale.",
      image: "/images/streaming-video-thumbnail.png",
      tags: ["Java", "Spring Boot", "Redis", "S3", "Cloudfront", "HLS", "Docker", "PostgreSQL", "Elasticsearch", "Kafka", "Debezium"],
      liveDemo: "https://www.youtube.com/watch?v=Ge2Tep4C3AM",
      github: "https://github.com/HemlockPham7/cloud-streaming-system",
    },
    {
      id: "kestrel",
      title: "Shorten URL Application",
      description:
        "A scalable URL shortening service with fast redirects, unique short links, and reliable deployment for efficient link management.",
      image: "/images/shorten-url.png",
      tags: ["Go", "Redis", "PostgreSQL", "Nginx", "CI/CD", "Unit Testing", "Integrational Testing", "Worker", "Docker", "DockerHub", "Github Actions"],
      liveDemo: "https://www.youtube.com/watch?v=979ioAqtwKA",
      github: "https://github.com/HemlockPham7/shorten-url-deployment",
    },
    {
      id: "cloudvault",
      title: "Payment System",
      description:
        "A demo of VNPay payment integration using the Saga Pattern to orchestrate movie ticket booking transactions, with idempotency and compensating actions to ensure data consistency and prevent duplicate payments or bookings.",
      image: "/images/ticket-app-thumbnail.png",
      tags: ["Spring Boot", "Axon Framework", "Saga Pattern", "Idempotency", "PostgreSQL", "Docker"],
      liveDemo: "https://www.youtube.com/watch?v=xNqM4SotZoY",
      github: "https://github.com/HemlockPham7/payment-system",
    },
    {
      id: "devnexus",
      title: "Saigon Rush",
      description:
        "A vibrant 3D endless runner through Saigon’s chaotic streets, dodging traffic, collecting coins, and powering up with iconic Vietnamese street food.",
      image: "/images/saigon-rush-thumbnail.png",
      tags: ["Google Antigravity", "Claude Opus 5.5", "React", "Threejs"],
      liveDemo: "https://www.youtube.com/watch?v=xAmkN12MT7Y",
      github: "https://github.com/HemlockPham7/saigonrush",
    },
  ];

  const awardPrizes: AwardItem[] = [
    {
      id: "award-1",
      prizeTier: "2nd Prize",
      tierClass: "silver",
      title: "Second Prize - ICPC Asia Regional Contest (placed 12th/113 teams)",
      organization: "ICPC Asia Can Tho Regional Contest",
      date: "2020-2021",
      description:
        "Awarded Second Prize at the ICPC Asia Can Tho Regional Contest, an international collegiate programming competition, placing 12th out of 113 teams in 2020-2021.",
      tags: ["ICPC", "Regional Contest", "Second Prize", "Competitive Programming", "HCMUS"],
      image: "/certificate-images/icpc.png",
      imageWidth: 1062,
      imageHeight: 2202,
      link: "https://icpc.global/ICPCID/M62U1T5VKZ2H",
    },
    {
      id: "award-2",
      prizeTier: "Consolation Prize",
      tierClass: "merit",
      title: "Consolation Prize - Vietnam Olympiad in Informatics",
      organization: "Vietnam Olympiad in Informatics (VNOI)",
      date: "2019-2020",
      description:
        "Awarded Consolation Prize in the Vietnam Olympiad in Informatics (VNOI), a national-level informatics competition for high school students in Vietnam, representing High School for the Gifted (PTNK).",
      tags: ["VNOI", "National Contest", "Consolation Prize", "Competitive Programming", "PTNK"],
      image: "/certificate-images/nation.png",
      imageWidth: 1855,
      imageHeight: 1370,
    },
    {
      id: "award-3",
      prizeTier: "1st Prize",
      tierClass: "gold",
      title: "First Prize - HCM City Informatics Competition for Gifted Students",
      organization: "HCMC Department of Education and Training",
      date: "2019-2020",
      description:
        "Awarded First Prize in the Ho Chi Minh City Informatics Competition for Gifted Students, a city-level programming competition for high school students, representing High School for the Gifted (PTNK).",
      tags: ["HCMC", "First Prize", "Competitive Programming", "PTNK"],
      image: "/certificate-images/city.jpg",
      imageWidth: 1855,
      imageHeight: 1325,
    },
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setFormSubmitted(true);
  };

  return (
    <div className="site-wrapper">
      {/* Primary Sticky Header */}
      <header className="site-header">
        <div className="site-container nav-inner">
          <a href="#hero" className="wordmark">
            Viet-Hoang Pham
            <span className="wordmark-badge">Junior Software Developer</span>
          </a>
          <nav>
            <ul className="nav-links">
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#experience">Experiences</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        {/* SECTION 1: HERO (Layout Family A: Asymmetric Split Poster) */}
        <section id="hero" className="portfolio-section">
          <div className="site-container">
            <div className="hero-grid">
              <div className="hero-content">
                <h1 className="hero-headline">
                  I'm Viet-Hoang Pham
                </h1>
                <p className="hero-summary">
                  Software Developer graduated from HCMUS with 1.5+ years of hands-on experience crafting reliable and scalable Backend services, implementing DevOps practices and CI/CD pipelines, and building modern web applications.
                </p>
                <div className="hero-actions">
                  <a
                    href="/Hoang_Resume.pdf"
                    download="Viet-Hoang-Pham-Resume.pdf"
                    className="btn-primary"
                    aria-label="Download Resume of Viet-Hoang Pham"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="btn-icon"
                      aria-hidden="true"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                    Download CV
                  </a>
                  <a
                    href="#projects"
                    className="btn-secondary"
                    aria-label="View Projects"
                  >
                    View Projects
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="btn-icon-right"
                      aria-hidden="true"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </a>
                </div>

                <div className="hero-connect-strip">
                  <span className="hero-connect-label">Connect me through</span>
                  <div className="hero-social-links">
                    <a
                      href="https://www.linkedin.com/in/hemlock-pham"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hero-social-btn"
                      aria-label="Connect with Viet-Hoang Pham on LinkedIn"
                    >
                      <svg
                        width="25"
                        height="25"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.81a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26Z" />
                      </svg>
                      <span>LinkedIn</span>
                    </a>

                    <a
                      href="https://github.com/HemlockPham7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hero-social-btn"
                      aria-label="View Viet-Hoang Pham on GitHub"
                    >
                      <svg
                        width="25"
                        height="25"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
                      </svg>
                      <span>GitHub</span>
                    </a>

                    <a
                      href="mailto:hoangpham292002@gmail.com"
                      className="hero-social-btn"
                      aria-label="Send email to Viet-Hoang Pham via Gmail"
                    >
                      <svg
                        width="25"
                        height="25"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                      <span>Gmail</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="hero-media-card">
                <div className="hero-portrait-frame">
                  <Image
                    src="/images/portrait_remove_background.jpg"
                    alt="Viet-Hoang Pham portrait"
                    width={600}
                    height={700}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: ABOUT & ACADEMIC FOUNDATION */}
        <section id="about" className="portfolio-section section-tinted">
          <div className="site-container">
            <div className="section-head">
              <h2 className="section-title">About Me</h2>
              <p className="section-description">
                Grounded in Computer Science principles from HCMUS and strengthened by 1.5+ years of software development experience across backend architectures, DevOps, and modern applications.
              </p>
            </div>

            {/* Overview / Background Cards */}
            <div className="about-grid">
              <div className="about-card">
                <h3 className="about-card-title">VNUHCM - University of Science</h3>
                <div className="about-card-subtitle">Bachelor of Science in Information Technology (HCMUS)</div>
                <p className="about-card-text">
                  Graduated with a solid academic foundation in algorithm design, data structures, distributed computing, database management, and object-oriented software architecture. Actively participated in academic research and competitive programming.
                </p>
                <div className="about-stats-grid">
                  <div className="about-stat-box">
                    <div className="about-stat-val">3.50 / 4.0 GPA</div>
                    <div className="about-stat-lbl">APCS - Advanced Program in CS</div>
                  </div>
                  <div className="about-stat-box">
                    <div className="about-stat-val">7.0 Overall</div>
                    <div className="about-stat-lbl">IELTS (7.5 in Speaking)</div>
                  </div>
                </div>
              </div>

              <div className="about-card">
                <h3 className="about-card-title">Experience & Focus Areas</h3>
                <div className="about-card-subtitle">1.5+ Years in Software Development</div>
                <p className="about-card-text">
                  Proven track record delivering production backend services, implementing automated CI/CD pipelines, integrating cloud storage systems AWS, and crafting interactive user interfaces.
                </p>
                <div className="about-stats-grid">
                  <div className="about-stat-box">
                    <div className="about-stat-val">1.5+</div>
                    <div className="about-stat-lbl">Years Industry Experience</div>
                  </div>
                  <div className="about-stat-box">
                    <div className="about-stat-val">3+</div>
                    <div className="about-stat-lbl">Competition Awards</div>
                  </div>
                </div>
              </div>
            </div>

            {/* 3 Award & Recognition Cards */}
            <div className="awards-section-head">
              <div>
                <h3 className="awards-section-title">Honors & Competition Awards</h3>
              </div>
            </div>

            <div className="awards-grid">
              {awardPrizes.map((award) => (
                <div
                  key={award.id}
                  className="award-card"
                  onClick={() => setSelectedAward(award)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setSelectedAward(award);
                    }
                  }}
                  aria-label={`View certificate for ${award.title}`}
                >
                  <div className="award-top">
                    <span className={`award-tier-badge award-tier-${award.tierClass}`}>
                      {award.tierClass === "gold" && "🥇 "}
                      {award.tierClass === "silver" && "🥈 "}
                      {award.tierClass === "merit" && "🎖️ "}
                      {award.prizeTier}
                    </span>
                    <span className="award-date">{award.date}</span>
                  </div>

                  <div className={`award-icon-box award-icon-${award.tierClass}`}>
                    {award.tierClass === "gold" && (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                        <path d="M4 22h16" />
                        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                        <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                      </svg>
                    )}
                    {award.tierClass === "silver" && (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <circle cx="12" cy="8" r="6" />
                        <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                      </svg>
                    )}
                    {award.tierClass === "merit" && (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    )}
                  </div>

                  <h4 className="award-title">{award.title}</h4>
                  <div className="award-org">{award.organization}</div>
                  <p className="award-desc">{award.description}</p>

                  <div className="award-tags">
                    {award.tags.map((tag, idx) => (
                      <span key={idx} className="award-tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="award-card-footer">
                    <span className="award-view-btn">
                      <span>View Certificate</span>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M15 3h6v6" />
                        <path d="M10 14 21 3" />
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      </svg>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: WORK EXPERIENCES (Layout Family E: Alternating Central Timeline) */}
        <section id="experience" className="portfolio-section">
          <div className="site-container">
            <div className="section-head">
              <h2 className="section-title">Work Experiences</h2>
              <p className="section-description">
                1.5+ years of software development experience engineering scalable backend services, cloud storage integrations, and robust microservices.
              </p>
            </div>

            <div className="timeline-container">
              {/* Central Spine */}
              <div className="timeline-middle-line" aria-hidden="true" />

              {/* Job 1: Netcompany (Left side) */}
              <div className="timeline-block left">
                <div
                  className="timeline-card-box"
                  onClick={() => setActiveExpModal("netcompany")}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === "Enter" && setActiveExpModal("netcompany")}
                  aria-label="View Netcompany experience details"
                >
                  <div className="timeline-period-badge">Feb 2025 – Feb 2026</div>
                  <h3 className="timeline-job-role">Junior Software Developer</h3>
                  <h4 className="timeline-job-company">Netcompany Group A/S</h4>
                  <p className="timeline-job-summary">
                    Internal platform for building custom tax management, lending, and banking solutions.
                  </p>
                  <p className="timeline-job-summary">
                    Built scalable backend services handling 10K QPS, implemented sub-200ms Elasticsearch queries across 500K+ records, optimized distributed caching and database performance, and automated AWS S3 storage pipelines, and streamlined CI/CD workflows.
                  </p>
                  <div className="timeline-tag-list">
                    <span className="timeline-tag-item">Java</span>
                    <span className="timeline-tag-item">Spring Boot</span>
                    <span className="timeline-tag-item">React</span>
                    <span className="timeline-tag-item">AWS S3</span>
                    <span className="timeline-tag-item">Elasticsearch</span>
                    <span className="timeline-tag-item">Debezium</span>
                    <span className="timeline-tag-item">Kafka</span>
                    <span className="timeline-tag-item">Redis</span>
                    <span className="timeline-tag-item">Caffein</span>
                    <span className="timeline-tag-item">PostgreSQL</span>
                    <span className="timeline-tag-item">CI/CD</span>
                  </div>
                  <div className="timeline-view-detail-btn">
                    <span>View Detailed Breakdown</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </div>
                </div>
                <div className="timeline-center-pin" aria-hidden="true" />
              </div>

              {/* Job 2: Software Developer (Right side, lower / offset) */}
              <div className="timeline-block right">
                <div
                  className="timeline-card-box"
                  onClick={() => setActiveExpModal("previous")}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === "Enter" && setActiveExpModal("previous")}
                  aria-label="View previous Software Developer experience details"
                >
                  <div className="timeline-period-badge">Jan 2024 – Aug 2024</div>
                  <h3 className="timeline-job-role">Intern Software Developer</h3>
                  <h4 className="timeline-job-company">Payoo VietUnion Group - HCMUS Graduation</h4>
                  <p className="timeline-job-summary">
                    An application for managing movie ticket bookings, sales, and purchases.
                  </p>
                  <p className="timeline-job-summary">
                    Developed Spring Boot microservices for movie ticket management, integrated VNPay payments, implemented Saga-based distributed transactions with idempotency, and enhanced database consistency and system observability.
                  </p>
                  <div className="timeline-tag-list">
                    <span className="timeline-tag-item">Java</span>
                    <span className="timeline-tag-item">Spring Boot</span>
                    <span className="timeline-tag-item">React</span>
                    <span className="timeline-tag-item">Axon Framework</span>
                    <span className="timeline-tag-item">VNPAY</span>
                    <span className="timeline-tag-item">Grafana</span>
                    <span className="timeline-tag-item">Tempo</span>
                    <span className="timeline-tag-item">Prometheous</span>
                    <span className="timeline-tag-item">Logstash</span>
                    <span className="timeline-tag-item">Docker</span>
                    <span className="timeline-tag-item">PostgreSQL</span>
                    <span className="timeline-tag-item">Swagger</span>
                    <span className="timeline-tag-item">API Gateway</span>
                    <span className="timeline-tag-item">Keycloak</span>
                  </div>
                  <div className="timeline-view-detail-btn">
                    <span>View Detailed Breakdown</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </div>
                </div>
                <div className="timeline-center-pin" aria-hidden="true" />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: FEATURED PROJECTS (6 Item Cards & Dedicated Detail Modals) */}
        <section id="projects" className="portfolio-section">
          <div className="site-container">
            <div className="section-head">
              <h2 className="section-title">Featured Projects & Technical Works</h2>
              <p className="section-description">
                Production-grade backend architectures, distributed event pipelines, and full-stack systems. Click any card to inspect full system architecture, database design, and key engineering challenges.
              </p>
            </div>

            <div className="projects-grid">
              {featuredProjects.map((project) => (
                <div
                  key={project.id}
                  className="project-card"
                  tabIndex={0}
                  role="region"
                  aria-label={`${project.title} card`}
                >
                  <div
                    className="project-thumb-wrap"
                    onClick={() => setActiveProjectModal(project.id)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === "Enter" && setActiveProjectModal(project.id)}
                    aria-label={`View architecture details for ${project.title}`}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={338}
                      className="project-thumb-img"
                      loading="lazy"
                    />
                    <div className="project-thumb-overlay">
                      <span className="project-overlay-badge">View Architecture Details &rarr;</span>
                    </div>
                  </div>

                  <div className="project-card-content">
                    <h3
                      className="project-card-title"
                      onClick={() => setActiveProjectModal(project.id)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => e.key === "Enter" && setActiveProjectModal(project.id)}
                    >
                      {project.title}
                    </h3>
                    <p className="project-card-desc">{project.description}</p>

                    <div className="project-card-tags">
                      {project.tags.map((tag) => (
                        <span key={tag} className="project-card-tag">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="project-btn-row">
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-btn-action project-btn-live"
                        aria-label={`Live Demo for ${project.title}`}
                      >
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                        Youtube Demo
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-btn-action project-btn-gh"
                        aria-label={`GitHub Repository for ${project.title}`}
                      >
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                        </svg>
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: TECHNICAL SKILLS MATRIX (5-Tier Categorized Horizontal Rows) */}
        <SkillsSection />
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <div className="site-container footer-inner">
          <div className="footer-copy">
            &copy; 2026 Viet-Hoang Pham. Architectural portfolio engineered with Next.js.
          </div>
          <ul className="footer-nav">
            <li>
              <a href="#hero">Back to Top</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experience">Experiences</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
          </ul>
        </div>
      </footer>

      {/* Experience Details Modal rendering dedicated TSX file */}
      <ExperienceModal
        isOpen={activeExpModal !== null}
        onClose={() => setActiveExpModal(null)}
      >
        {activeExpModal === "netcompany" && <NetcompanyDetail />}
        {activeExpModal === "previous" && <PreviousJobDetail />}
      </ExperienceModal>

      {/* Project Details Modal rendering dedicated TSX file for each project */}
      <ProjectDetailModal
        isOpen={activeProjectModal !== null}
        onClose={() => setActiveProjectModal(null)}
      >
        {activeProjectModal === "amplio" && <Project1Detail />}
        {activeProjectModal === "cinestream" && <Project2Detail />}
        {activeProjectModal === "kestrel" && <Project3Detail />}
        {activeProjectModal === "cloudvault" && <Project4Detail />}
        {activeProjectModal === "devnexus" && <Project5Detail />}
      </ProjectDetailModal>

      {/* Award Certificate Modal */}
      <AwardCertificateModal
        isOpen={selectedAward !== null}
        onClose={() => setSelectedAward(null)}
        award={selectedAward}
      />
    </div>
  );
}
