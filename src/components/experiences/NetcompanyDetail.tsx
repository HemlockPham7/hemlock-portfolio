"use client";

import React from "react";

export default function NetcompanyDetail() {
  return (
    <div className="job-detail-content">
      <div className="job-detail-header">
        <div className="job-detail-badge">Feb 2025 – Feb 2026</div>
        <h3 className="job-detail-title">Junior Software Developer</h3>
        <h4 className="job-detail-company">Netcompany Global A/S</h4>
      </div>

      <div className="job-detail-summary-card">
        <p>
          Worked as a Junior Software Engineer at Netcompany, contributing to the development and optimization of Amplio, an enterprise platform for tax management, lending, and banking solutions. Engineered scalable Spring Boot backend services, implemented event-driven search pipelines using Kafka and Debezium, optimized distributed caching and PostgreSQL queries, and automated AWS S3 storage and CI/CD workflows. Focused on improving system performance, data consistency, deployment reliability, and operational efficiency while collaborating across teams to deliver new features and resolve production issues.
        </p>
      </div>

      <div className="job-detail-section">
        <h5 className="job-section-title">Key Responsibilities & Contributions</h5>
        <ul className="job-bullet-list">
          <li>
            <strong>High-Performance Search & Event-Driven Architecture:</strong> Implemented Elasticsearch-based retrieval of user and workflow instance metadata across <strong>500K+ records</strong>, leveraging the <strong>Outbox Pattern, Debezium, and Kafka</strong> to maintain data consistency and achieve query latency under <strong>200ms</strong>.
          </li>
          <li>
            <strong>Distributed Caching & Performance Optimization:</strong> Redesigned multi-level caching using <strong>Redis and Caffeine</strong>, supporting <strong>10K QPS</strong> with <strong>436ms P95 latency</strong> to improve application performance and scalability.
          </li>
          <li>
            <strong>Cloud Storage & Data Migration:</strong> Developed scheduled batch jobs to migrate nearly <strong>1,000 images</strong> associated with completed or aborted workflow instances from the database to <strong>Amazon S3</strong>, reducing database storage overhead.
          </li>
          <li>
            <strong>Monitoring & Operational Automation:</strong> Automated certificate-expiry monitoring through daily scheduled checks, eliminating manual tracking and improving operational reliability.
          </li>
          <li>
            <strong>Database & Query Optimization:</strong> Optimized <strong>10+ bulk queries</strong> using batch processing techniques, reducing database load and improving query performance.
          </li>
          <li>
            <strong>CI/CD & Deployment Optimization:</strong> Built a CI/CD pipeline to transfer documents from repositories to <strong>SP Toolkit</strong>, reducing document-view downtime from <strong>20 minutes to 1 second</strong>.
          </li>
          <li>
            <strong>Technical Leadership & Delivery:</strong> Led <strong>2 teams of 5 members</strong> over a two-month period, facilitating project onboarding, resolving <strong>60 bugs</strong>, and delivering <strong>10 features</strong>.
          </li>
        </ul>
      </div>

      <div className="job-detail-section">
        <h5 className="job-section-title">Technical Environment & Core Stack</h5>
        <div className="job-tech-grid">
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
      </div>
    </div>
  );
}
