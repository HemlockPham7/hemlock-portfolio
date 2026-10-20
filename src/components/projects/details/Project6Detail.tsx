"use client";

import React from "react";
import Image from "next/image";

export default function Project6Detail() {
  return (
    <div className="project-detail-body">
      <div className="project-detail-header">
        <span className="project-detail-badge">Algorithmic Sandbox</span>
        <h2 className="project-detail-title">AlgoArena: Real-Time Algorithmic Judge System</h2>
        <p className="project-detail-subtitle">
          Online judge and code evaluation platform evaluating submissions with strict memory and time boundaries in isolated Docker sandboxes.
        </p>
      </div>

      <div className="project-detail-banner">
        <Image
          src="/images/code-judge.jpg"
          alt="AlgoArena code evaluation engine"
          width={800}
          height={450}
          className="project-banner-img"
        />
      </div>

      <div className="project-detail-section">
        <h4 className="detail-section-heading">System Overview & Architecture</h4>
        <p>
          Inspired by competitive programming contests (ICPC, VNOI), AlgoArena evaluates algorithmic code submissions across C++, Java, and Python. 
          Submissions are enqueued via a priority worker pool, executed in isolated Linux cgroup sandboxes with enforced limits (CPU time, memory caps, system call filtering), and evaluated against test datasets.
        </p>
      </div>

      <div className="project-detail-section">
        <h4 className="detail-section-heading">Key Engineering Highlights</h4>
        <ul className="project-detail-bullets">
          <li>
            <strong>Secure Isolated Sandboxing:</strong> Employed Linux cgroups, seccomp filters, and ephemeral Docker containers to securely evaluate untrusted code without host environment exposure.
          </li>
          <li>
            <strong>Real-Time Verdict Streaming:</strong> Streamed test-case evaluation progress and memory/time telemetry directly to the frontend via WebSockets.
          </li>
          <li>
            <strong>High-Throughput Judge Queue:</strong> Handled bursts of 500+ concurrent submissions during simulated contest rounds with sub-second queue pickup times.
          </li>
        </ul>
      </div>

      <div className="project-detail-section">
        <h4 className="detail-section-heading">Tech Stack & Tools</h4>
        <div className="project-tech-chips">
          <span>Java</span>
          <span>Spring Boot</span>
          <span>Docker Sandbox</span>
          <span>Linux cgroups</span>
          <span>WebSockets</span>
          <span>PostgreSQL</span>
          <span>React</span>
        </div>
      </div>

      <div className="project-detail-actions">
        <a
          href="https://algoarena.hemlock.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Live Demo Platform
        </a>
        <a
          href="https://github.com/HemlockPham7/algoarena-judge"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary"
        >
          View GitHub Repository
        </a>
      </div>
    </div>
  );
}
