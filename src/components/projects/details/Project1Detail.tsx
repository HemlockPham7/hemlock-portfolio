"use client";

import React from "react";
import Image from "next/image";

export default function Project1Detail() {
  return (
    <div className="project-detail-body">
      <div className="project-detail-header">
        <span className="project-detail-badge">Enterprise Financial Platform</span>
        <h2 className="project-detail-title">Amplio: Enterprise Financial & Tax Platform</h2>
        <p className="project-detail-subtitle">
          Core banking, lending, and tax management platform handling 10,000+ QPS with sub-200ms query latency across 500K+ records.
        </p>
      </div>

      <div className="project-detail-banner">
        <Image
          src="/images/distributed-system.jpg"
          alt="Amplio platform architecture"
          width={800}
          height={450}
          className="project-banner-img"
        />
      </div>

      <div className="project-detail-section">
        <h4 className="detail-section-heading">System Overview & Architecture</h4>
        <p>
          Amplio is an enterprise-scale financial solution designed for high-throughput tax calculation, loan management, and banking transactions. 
          To handle high concurrency while guaranteeing data consistency, the backend leverages Spring Boot microservices integrated with an 
          event-driven architecture using Apache Kafka, Debezium Change Data Capture (CDC), and Elasticsearch.
        </p>
      </div>

      <div className="project-detail-section">
        <h4 className="detail-section-heading">Key Engineering Highlights</h4>
        <ul className="project-detail-bullets">
          <li>
            <strong>Event-Driven Search Ingestion:</strong> Built Elasticsearch search pipelines using the Outbox Pattern and Debezium CDC via Kafka, achieving consistent sub-200ms response times across 500,000+ metadata records.
          </li>
          <li>
            <strong>Multi-Tier Caching Strategy:</strong> Engineered a two-level caching topology combining Redis and Caffeine, sustaining 10,000 QPS with a 436ms P95 latency ceiling under peak bursts.
          </li>
          <li>
            <strong>Bulk Query Optimization:</strong> Refactored 10+ complex relational database queries into batched operations in PostgreSQL, reducing database saturation by 40%.
          </li>
          <li>
            <strong>Zero-Downtime Deployment:</strong> Implemented CI/CD workflows for automated repository sync, decreasing document-view downtime from 20 minutes to under 1 second.
          </li>
        </ul>
      </div>

      <div className="project-detail-section">
        <h4 className="detail-section-heading">Tech Stack & Tools</h4>
        <div className="project-tech-chips">
          <span>Java</span>
          <span>Spring Boot</span>
          <span>Kafka</span>
          <span>Debezium</span>
          <span>Elasticsearch</span>
          <span>Redis</span>
          <span>Caffeine</span>
          <span>PostgreSQL</span>
          <span>Docker</span>
          <span>CI/CD</span>
        </div>
      </div>

      <div className="project-detail-actions">
        <a
          href="https://amplio-demo.hemlock.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Live Demo Platform
        </a>
        <a
          href="https://github.com/HemlockPham7/amplio-platform"
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
