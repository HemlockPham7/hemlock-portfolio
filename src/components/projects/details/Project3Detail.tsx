"use client";

import React from "react";
import Image from "next/image";

export default function Project3Detail() {
  return (
    <div className="project-detail-body">
      <div className="project-detail-header">
        <span className="project-detail-badge">System Design Architecture</span>
        <h2 className="project-detail-title">Shorten URL Application</h2>
        <p className="project-detail-subtitle">
          Shorten URL Deployment is a lightweight, container-ready URL shortener application designed for quick setup, efficient redirection, and seamless deployment. It takes long, unwieldy web links and converts them into short, manageable aliases, redirecting users securely and instantly to the original destinations.
        </p>
      </div>

      <div className="project-detail-section">
        <h4 className="detail-section-heading">Overall Architecture</h4>
      </div>

      <div className="project-detail-banner">
        <Image
          src="/images/shorten-url.png"
          alt="Shorten URL Architecture"
          width={1221}
          height={930}
          className="project-banner-img"
        />
      </div>

      <div className="project-detail-section">
        <h4 className="detail-section-heading">Key Engineering Highlights</h4>
        <ul className="project-detail-bullets">
          <li>
            <strong>High-Performance Architecture:</strong> Designed a URL shortener in Go and PostgreSQL, utilizing Redis caching and Pub/Sub alongside Nginx for optimized request routing and minimal lookup latency.
          </li>
          <li>
            <strong>Asynchronous Worker Persistence:</strong> Implemented a worker-based batch processing pipeline handling 1,000+ bookmark imports per job without blocking main API request threads.
          </li>
          <li>
            <strong>CI/CD & Observability:</strong> Achieved 95%+ test coverage with ~15 integration tests, automated Docker Hub image publishing and VPS deployment via GitHub Actions, and integrated New Relic for continuous APM.
          </li>
        </ul>
      </div>

      <div className="project-detail-section">
        <h4 className="detail-section-heading">Tech Stack & Tools</h4>
        <div className="project-tech-chips">
          <span>Go</span>
          <span>Redis</span>
          <span>PostgreSQL</span>
          <span>Nginx</span>
          <span>CI/CD</span>
          <span>Unit Testing</span>
          <span>Integrational Testing</span>
          <span>Worker</span>
          <span>Docker</span>
          <span>DockerHub</span>
          <span>Github Actions</span>
        </div>
      </div>

      <div className="project-detail-actions">
        <a
          href="https://www.youtube.com/watch?v=979ioAqtwKA"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Live Demo Platform
        </a>
        <a
          href="https://github.com/HemlockPham7/shorten-url-deployment"
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
