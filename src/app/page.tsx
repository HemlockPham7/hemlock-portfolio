"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";

interface CaseStudy {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
  metricA: { val: string; lbl: string };
  metricB: { val: string; lbl: string };
  stack: string[];
}

interface AwardItem {
  id: string;
  prizeTier: string;
  tierClass: "gold" | "silver" | "merit";
  title: string;
  organization: string;
  date: string;
  description: string;
  tags: string[];
}

export default function PortfolioPage() {
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

  const caseStudies: CaseStudy[] = [
    {
      id: "stratastream",
      category: "Distributed Telemetry and Event Mesh",
      title: "StrataStream: High-Throughput Real-Time Event Fabric",
      description:
        "Architected a distributed event ingestion pipeline handling over 1.8 billion daily telemetry signals from IoT devices and edge gateways with strict sub-45ms delivery guarantees.",
      image: "/images/distributed-system.jpg",
      metricA: { val: "1.8B+", lbl: "Daily Events Processed" },
      metricB: { val: "38ms", lbl: "Global p99 Ingestion Latency" },
      stack: ["Go", "Apache Kafka", "ClickHouse", "Kubernetes", "gRPC", "Protobuf"],
    },
    {
      id: "kestrel",
      category: "Fault-Tolerant Broker Orchestration",
      title: "Kestrel: Resilient Stream Processing Engine",
      description:
        "Engineered an exactly-once distributed message processing broker capable of automatic partitioned failover across dual cloud regions without data duplication.",
      image: "/images/streaming-engine.jpg",
      metricA: { val: "1.2 GB/s", lbl: "Peak Throughput" },
      metricB: { val: "99.999%", lbl: "Data Durability Guarantee" },
      stack: ["Rust", "Tokio", "PostgreSQL", "AWS ECS", "OpenTelemetry", "Docker"],
    },
    {
      id: "devnexus",
      category: "Performance Analysis and Developer Tooling",
      title: "DevNexus: In-Browser Memory and Framegraph Profiler",
      description:
        "Built a zero-latency client-side runtime profiler capable of parsing AST trees, heap snapshots, and flamegraphs at 60fps inside modern Chromium browsers.",
      image: "/images/devtools-profiler.jpg",
      metricA: { val: "60 FPS", lbl: "Sustained Profiler Render" },
      metricB: { val: "145k+", lbl: "Monthly Developer Sessions" },
      stack: ["TypeScript", "Next.js", "WebAssembly", "Web Workers", "Tailored CSS"],
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
      tags: ["HCM City", "First Prize", "Competitive Programming", "PTNK"],
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
                <a href="#arsenal">Tech Stack</a>
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
                    href="/cv.pdf"
                    download="Viet-Hoang-Pham-CV.pdf"
                    className="btn-primary"
                    aria-label="Download CV of Viet-Hoang Pham"
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
                      href="https://linkedin.com/in/hemlockpham"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hero-social-btn"
                      aria-label="Connect with Viet-Hoang Pham on LinkedIn"
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.81a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26Z" />
                      </svg>
                      <span>LinkedIn</span>
                    </a>

                    <a
                      href="mailto:hemlockpham7@gmail.com"
                      className="hero-social-btn"
                      aria-label="Send email to Viet-Hoang Pham via Gmail"
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
                        aria-hidden="true"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                      <span>Gmail</span>
                    </a>

                    <a
                      href="https://github.com/HemlockPham7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hero-social-btn"
                      aria-label="View Viet-Hoang Pham on GitHub"
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
                      </svg>
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="hero-media-card">
                <div className="hero-portrait-frame">
                  <Image
                    src="/images/developer-portrait.jpg"
                    alt="Viet-Hoang Pham portrait"
                    width={600}
                    height={600}
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
                <div className="about-card-subtitle">Bachelor of Science in Information Technology (APCS)</div>
                <p className="about-card-text">
                  Graduated with a solid academic foundation in algorithm design, data structures, distributed computing, database management, and object-oriented software architecture. Actively participated in academic research and competitive programming.
                </p>
                <div className="about-highlights-list">
                  <div className="about-highlight-item">
                    <div className="about-highlight-icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <div>
                      <strong>Core Specialization:</strong> High-throughput backend systems, resilient microservices, and reliable cloud-ready APIs.
                    </div>
                  </div>
                  <div className="about-highlight-item">
                    <div className="about-highlight-icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <div>
                      <strong>Engineering Mindset:</strong> Clean code advocate, automated testing enthusiast, and pragmatic system optimizer.
                    </div>
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
                    <div className="about-stat-val">3</div>
                    <div className="about-stat-lbl">Competition Awards</div>
                  </div>
                </div>
              </div>
            </div>

            {/* 3 Award & Recognition Cards */}
            <div className="awards-section-head">
              <div>
                <h3 className="awards-section-title">Honors & Competition Awards</h3>
                <span className="awards-section-desc">Selected recognitions from university contests, hackathons, and academic achievements</span>
              </div>
            </div>

            <div className="awards-grid">
              {awardPrizes.map((award) => (
                <div key={award.id} className="award-card">
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
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: FLAGSHIP PRODUCTION PROJECTS (Layout Family C: Alternating Case-Study Split) */}
        <section id="projects" className="portfolio-section">
          <div className="site-container">
            <div className="section-head">
              <h2 className="section-title">Selected Production Systems and Flagship Projects</h2>
              <p className="section-description">
                Real-world engineering case studies showing architectural trade-offs, constraints, and verifiable business results.
              </p>
            </div>

            <div className="case-studies-stack">
              {caseStudies.map((project, idx) => (
                <article
                  key={project.id}
                  className={`case-study-item ${idx % 2 === 1 ? "reverse" : ""}`}
                >
                  <div className="case-media-frame">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={800}
                      height={500}
                      loading="lazy"
                    />
                  </div>

                  <div className="case-info">
                    <div className="case-category">{project.category}</div>
                    <h3 className="case-title">{project.title}</h3>
                    <p className="case-description">{project.description}</p>

                    <div className="case-metrics-grid">
                      <div>
                        <div className="case-metric-val">{project.metricA.val}</div>
                        <div className="case-metric-lbl">{project.metricA.lbl}</div>
                      </div>
                      <div>
                        <div className="case-metric-val">{project.metricB.val}</div>
                        <div className="case-metric-lbl">{project.metricB.lbl}</div>
                      </div>
                    </div>

                    <ul className="case-tech-list">
                      {project.stack.map((tech) => (
                        <li key={tech} className="case-tech-pill">
                          {tech}
                        </li>
                      ))}
                    </ul>

                    <div>
                      <a href="#recruiter-terminal" className="btn-ghost">
                        Request System Architecture Diagram &rarr;
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: THE LIVE THING (Layout Family D: Interactive Workbench / Simulator) */}
        <section id="simulator" className="portfolio-section section-container-surface">
          <div className="site-container">
            <div className="section-head">
              <h2 className="section-title">
                Interactive Architecture Sandbox: Latency and Throughput Simulator
              </h2>
              <p className="section-description">
                Adjust cluster nodes, request volume, and caching strategy to observe simulated p99 response times, cache efficiency, and architectural failure thresholds live.
              </p>
            </div>

            <div className="simulator-workbench">
              <div className="sim-controls-pane">
                <div>
                  <h3 className="sim-pane-title">Cluster Parameters</h3>
                  <p className="sim-pane-desc">
                    Tweak capacity to evaluate performance invariants under dynamic load conditions.
                  </p>
                </div>

                <div className="control-group">
                  <div className="control-label-row">
                    <span>Cluster Compute Nodes</span>
                    <span className="control-value-readout">{clusterNodes} Nodes</span>
                  </div>
                  <input
                    type="range"
                    min={2}
                    max={32}
                    step={2}
                    value={clusterNodes}
                    onChange={(e) => setClusterNodes(Number(e.target.value))}
                    className="slider-input"
                    aria-label="Cluster Nodes"
                  />
                </div>

                <div className="control-group">
                  <div className="control-label-row">
                    <span>Concurrent Traffic Load</span>
                    <span className="control-value-readout">{requestLoad}k req/s</span>
                  </div>
                  <input
                    type="range"
                    min={5}
                    max={120}
                    step={5}
                    value={requestLoad}
                    onChange={(e) => setRequestLoad(Number(e.target.value))}
                    className="slider-input"
                    aria-label="Traffic Load"
                  />
                </div>

                <div className="control-group">
                  <div className="control-label-row">
                    <span>Caching and Invalidation Strategy</span>
                  </div>
                  <div className="toggle-button-group">
                    <button
                      type="button"
                      className={`toggle-opt-btn ${cacheStrategy === "none" ? "active" : ""}`}
                      onClick={() => setCacheStrategy("none")}
                    >
                      No Cache
                    </button>
                    <button
                      type="button"
                      className={`toggle-opt-btn ${cacheStrategy === "redis" ? "active" : ""}`}
                      onClick={() => setCacheStrategy("redis")}
                    >
                      Distributed Redis
                    </button>
                    <button
                      type="button"
                      className={`toggle-opt-btn ${cacheStrategy === "edge" ? "active" : ""}`}
                      onClick={() => setCacheStrategy("edge")}
                    >
                      Edge Multi-Tier
                    </button>
                  </div>
                </div>
              </div>

              <div className="sim-telemetry-pane">
                <div className="telemetry-header">
                  <h3 className="telemetry-title">Real-Time Telemetry Readout</h3>
                  <span className="telemetry-status-pill">Active Live Model</span>
                </div>

                <div className="metrics-readout-row">
                  <div className="metric-card-inner">
                    <div className="metric-num">{simulationMetrics.p99}ms</div>
                    <div className="metric-label-sub">Simulated p99 Latency</div>
                  </div>
                  <div className="metric-card-inner">
                    <div className="metric-num">{simulationMetrics.hitRatio}%</div>
                    <div className="metric-label-sub">Cache Hit Rate</div>
                  </div>
                  <div className="metric-card-inner">
                    <div className="metric-num">{simulationMetrics.cpuSaturation}%</div>
                    <div className="metric-label-sub">Node CPU Saturation</div>
                  </div>
                </div>

                <div className="sim-latency-bar-container">
                  <div className="bar-meta-row">
                    <span>Latency Headroom</span>
                    <span>Target Threshold: 100ms</span>
                  </div>
                  <div className="latency-visual-track">
                    <div
                      className="latency-visual-fill"
                      style={{
                        width: `${Math.min(100, (simulationMetrics.p99 / 150) * 100)}%`,
                        backgroundColor:
                          simulationMetrics.p99 > 100
                            ? "#dc2626"
                            : simulationMetrics.p99 > 50
                              ? "#d97706"
                              : "#4f46e5",
                      }}
                    />
                  </div>
                </div>

                <div className="sim-invariant-box">
                  <strong>Architectural Diagnostic:</strong> {simulationMetrics.invariantText}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: CAREER TRAJECTORY (Layout Family E: Chronological Milestone Track) */}
        <section id="experience" className="portfolio-section">
          <div className="site-container">
            <div className="section-head">
              <h2 className="section-title">Career Trajectory and Engineering Leadership</h2>
              <p className="section-description">
                Progressive track record of distributed systems ownership, technical strategy, and mentoring high-velocity engineering organizations.
              </p>
            </div>

            <div className="timeline-track">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-header-line">
                  <h3 className="timeline-company-role">
                    Staff Distributed Systems Architect at CloudMatrix Labs
                  </h3>
                  <span className="timeline-period">2024 to Present</span>
                </div>
                <p className="timeline-scope">
                  Directing the core infrastructure and event platform serving 18 enterprise product lines and global multi-region deployments.
                </p>
                <ul className="timeline-outcomes">
                  <li>
                    Designed and deployed a unified gRPC event mesh that reduced inter-service network overhead by 42 percent.
                  </li>
                  <li>
                    Mentored 16 senior backend engineers, establishing formal architectural decision record standards across the division.
                  </li>
                  <li>
                    Led disaster recovery drills proving automated RPO under 10 seconds during full region blackout simulations.
                  </li>
                </ul>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-header-line">
                  <h3 className="timeline-company-role">
                    Senior Backend Architect at FinTech Frontier
                  </h3>
                  <span className="timeline-period">2021 to 2024</span>
                </div>
                <p className="timeline-scope">
                  Technical lead for high-frequency transactional ledger systems processing over 450 million dollars in monthly payment volumes.
                </p>
                <ul className="timeline-outcomes">
                  <li>
                    Migrated monolithic relational ledger to an event-sourced architecture with strict idempotency and zero balance drift.
                  </li>
                  <li>
                    Implemented end-to-end distributed tracing using OpenTelemetry, shrinking mean time to detection for critical faults from 25 minutes to under 2 minutes.
                  </li>
                  <li>
                    Collaborated with security teams to pass SOC2 Type II audits without a single architectural finding.
                  </li>
                </ul>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-header-line">
                  <h3 className="timeline-company-role">
                    Infrastructure and Full Stack Engineer at Nexus Platform
                  </h3>
                  <span className="timeline-period">2018 to 2021</span>
                </div>
                <p className="timeline-scope">
                  Developed internal developer tooling, automated CI/CD pipelines, and high-performance web client architectures.
                </p>
                <ul className="timeline-outcomes">
                  <li>
                    Spearheaded adoption of containerized microservices and automated deployment gates with canary rollback policies.
                  </li>
                  <li>
                    Reduced frontend web application bundle sizes by 54 percent, elevating Core Web Vitals into the top tier.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: TECHNICAL ARSENAL (Layout Family F: Multi-Column Domain Matrix) */}
        <section id="arsenal" className="portfolio-section section-tinted">
          <div className="site-container">
            <div className="section-head">
              <h2 className="section-title">Technical Arsenal and Production Domain Matrix</h2>
              <p className="section-description">
                Specific technologies and tools validated through years of high-volume production deployments, zero speculative listings.
              </p>
            </div>

            <div className="arsenal-matrix">
              <div className="arsenal-card">
                <h3 className="arsenal-category-title">Distributed Systems</h3>
                <ul className="arsenal-stack-items">
                  <li className="arsenal-item">
                    <div className="arsenal-name-row">
                      <span>Go Language</span>
                      <span className="arsenal-years">7 Years</span>
                    </div>
                    <div className="arsenal-desc">High-concurrency microservices and gRPC daemons.</div>
                  </li>
                  <li className="arsenal-item">
                    <div className="arsenal-name-row">
                      <span>Rust</span>
                      <span className="arsenal-years">4 Years</span>
                    </div>
                    <div className="arsenal-desc">Tokio runtime, low-latency stream engines.</div>
                  </li>
                  <li className="arsenal-item">
                    <div className="arsenal-name-row">
                      <span>Apache Kafka</span>
                      <span className="arsenal-years">6 Years</span>
                    </div>
                    <div className="arsenal-desc">Partition strategy, consumer groups, schema registry.</div>
                  </li>
                </ul>
              </div>

              <div className="arsenal-card">
                <h3 className="arsenal-category-title">Cloud Infrastructure</h3>
                <ul className="arsenal-stack-items">
                  <li className="arsenal-item">
                    <div className="arsenal-name-row">
                      <span>Kubernetes</span>
                      <span className="arsenal-years">6 Years</span>
                    </div>
                    <div className="arsenal-desc">EKS orchestration, Helm charts, HPA policies.</div>
                  </li>
                  <li className="arsenal-item">
                    <div className="arsenal-name-row">
                      <span>Terraform</span>
                      <span className="arsenal-years">5 Years</span>
                    </div>
                    <div className="arsenal-desc">Immutable Infrastructure as Code across AWS.</div>
                  </li>
                  <li className="arsenal-item">
                    <div className="arsenal-name-row">
                      <span>PostgreSQL &amp; Redis</span>
                      <span className="arsenal-years">8 Years</span>
                    </div>
                    <div className="arsenal-desc">Connection pooling, partitioning, replica scaling.</div>
                  </li>
                </ul>
              </div>

              <div className="arsenal-card">
                <h3 className="arsenal-category-title">Web Architecture</h3>
                <ul className="arsenal-stack-items">
                  <li className="arsenal-item">
                    <div className="arsenal-name-row">
                      <span>TypeScript</span>
                      <span className="arsenal-years">7 Years</span>
                    </div>
                    <div className="arsenal-desc">Type safety, compiler API, design systems.</div>
                  </li>
                  <li className="arsenal-item">
                    <div className="arsenal-name-row">
                      <span>Next.js &amp; React</span>
                      <span className="arsenal-years">6 Years</span>
                    </div>
                    <div className="arsenal-desc">Server Components, Edge SSR, state machines.</div>
                  </li>
                  <li className="arsenal-item">
                    <div className="arsenal-name-row">
                      <span>WebAssembly</span>
                      <span className="arsenal-years">3 Years</span>
                    </div>
                    <div className="arsenal-desc">Browser compilation and CPU-heavy routines.</div>
                  </li>
                </ul>
              </div>

              <div className="arsenal-card">
                <h3 className="arsenal-category-title">Reliability &amp; Observability</h3>
                <ul className="arsenal-stack-items">
                  <li className="arsenal-item">
                    <div className="arsenal-name-row">
                      <span>OpenTelemetry</span>
                      <span className="arsenal-years">4 Years</span>
                    </div>
                    <div className="arsenal-desc">Distributed context propagation and spans.</div>
                  </li>
                  <li className="arsenal-item">
                    <div className="arsenal-name-row">
                      <span>Prometheus &amp; Grafana</span>
                      <span className="arsenal-years">6 Years</span>
                    </div>
                    <div className="arsenal-desc">Alerting rules, SLI and SLO dashboards.</div>
                  </li>
                  <li className="arsenal-item">
                    <div className="arsenal-name-row">
                      <span>Chaos Engineering</span>
                      <span className="arsenal-years">3 Years</span>
                    </div>
                    <div className="arsenal-desc">Fault injection testing and automated rollbacks.</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7: ENGINEERING PHILOSOPHY (Layout Family G: Editorial Quotation Panels) */}
        <section id="philosophy" className="portfolio-section">
          <div className="site-container">
            <div className="section-head">
              <h2 className="section-title">Engineering Tenets and Peer Architecture Reviews</h2>
              <p className="section-description">
                Fundamental principles that guide architectural decisions, code reviews, and cross-functional team execution.
              </p>
            </div>

            <div className="tenets-grid">
              <div className="tenet-card">
                <blockquote className="tenet-quote">
                  &ldquo;Make failure modes explicit and observable in telemetry before optimizing for raw throughput.&rdquo;
                </blockquote>
                <div className="tenet-author-block">
                  <span className="tenet-author-name">Architectural Tenet</span>
                  <span className="tenet-author-role">Production Invariant</span>
                </div>
              </div>

              <div className="tenet-card">
                <blockquote className="tenet-quote">
                  &ldquo;Viet-Hoang elevated our engineering maturity by enforcing disciplined asynchronous boundaries that stopped cascading database lockups.&rdquo;
                </blockquote>
                <div className="tenet-author-block">
                  <span className="tenet-author-name">David S., VP of Engineering</span>
                  <span className="tenet-author-role">FinTech Frontier</span>
                </div>
              </div>

              <div className="tenet-card">
                <blockquote className="tenet-quote">
                  &ldquo;A clean architecture is defined not by how much code is written, but by how easily an engineer can delete a service without side effects.&rdquo;
                </blockquote>
                <div className="tenet-author-block">
                  <span className="tenet-author-name">Systems Invariant</span>
                  <span className="tenet-author-role">Core Philosophy</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 8: RECRUITER ACTION TERMINAL (Layout Family H: Split Direct Booking & Availability) */}
        <section id="recruiter-terminal" className="portfolio-section section-tinted">
          <div className="site-container">
            <div className="section-head">
              <h2 className="section-title">Recruitment Terminal and Direct Availability</h2>
              <p className="section-description">
                Direct channels for hiring managers and recruiters to schedule introductory calls, review references, or download complete dossier materials.
              </p>
            </div>

            <div className="recruiter-terminal-grid">
              <div className="recruiter-info-col">
                <div>
                  <div className="recruiter-availability-card">
                    <div className="avail-badge-row">
                      <span className="avail-pulse"></span>
                      <span className="avail-text">Currently Open to Senior and Staff Inquiries</span>
                    </div>
                    <p className="avail-details">
                      Targeting roles including Staff Distributed Systems Engineer, Principal Backend Architect, or Lead Platform Engineer. Available for immediate interview scheduling.
                    </p>
                  </div>

                  <div className="recruiter-direct-channels">
                    <a
                      href="mailto:contact@viethoang.dev"
                      className="channel-link-row"
                    >
                      <span>Direct Email</span>
                      <span className="channel-val">contact@viethoang.dev</span>
                    </a>
                    <a
                      href="https://github.com/HemlockPham7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="channel-link-row"
                    >
                      <span>GitHub Profile</span>
                      <span className="channel-val">github.com/HemlockPham7</span>
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="channel-link-row"
                    >
                      <span>LinkedIn Profile</span>
                      <span className="channel-val">linkedin.com/in/viethoang</span>
                    </a>
                  </div>
                </div>

                <div>
                  <a
                    href="mailto:contact@viethoang.dev?subject=Senior%20Engineering%20Opportunity"
                    className="btn-primary"
                    style={{ width: "100%" }}
                  >
                    Direct Email Hiring Inquiry
                  </a>
                </div>
              </div>

              <div>
                {formSubmitted ? (
                  <div
                    style={{
                      padding: "2.5rem",
                      backgroundColor: "var(--surface-container-lowest)",
                      borderRadius: "var(--radius-lg)",
                      textAlign: "center",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "1.35rem",
                        fontWeight: "700",
                        marginBottom: "0.75rem",
                        color: "var(--primary)",
                      }}
                    >
                      Inquiry Dispatched Successfully
                    </h3>
                    <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.5 }}>
                      Thank you for reaching out. Your interview inquiry has been queued with high priority. Viet-Hoang will respond within 24 business hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="contact-form-pane">
                    <div className="form-field">
                      <label htmlFor="recruiter-name" className="form-label">
                        Your Name
                      </label>
                      <input
                        id="recruiter-name"
                        type="text"
                        required
                        placeholder="Sarah Jenkins"
                        className="form-input"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>

                    <div className="form-field">
                      <label htmlFor="recruiter-email" className="form-label">
                        Work Email
                      </label>
                      <input
                        id="recruiter-email"
                        type="email"
                        required
                        placeholder="s.jenkins@company.com"
                        className="form-input"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    <div className="form-field">
                      <label htmlFor="recruiter-company" className="form-label">
                        Organization and Target Role
                      </label>
                      <input
                        id="recruiter-company"
                        type="text"
                        placeholder="Vercel - Staff Systems Engineer"
                        className="form-input"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      />
                    </div>

                    <div className="form-field">
                      <label htmlFor="recruiter-message" className="form-label">
                        Role Overview or Scheduling Notes
                      </label>
                      <textarea
                        id="recruiter-message"
                        rows={3}
                        placeholder="We are building our core streaming platform and would love to chat regarding your background."
                        className="form-textarea"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>

                    <button type="submit" className="form-submit-btn">
                      Submit Interview Request
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <div className="site-container footer-inner">
          <div className="footer-copy">
            &copy; 2026 Viet-Hoang Pham. Architectural portfolio engineered with Next.js and Electric Avant-Garde design grammar.
          </div>
          <ul className="footer-nav">
            <li>
              <a href="#hero">Back to Top</a>
            </li>
            <li>
              <a href="#capabilities">Capabilities</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#recruiter-terminal">Contact</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
