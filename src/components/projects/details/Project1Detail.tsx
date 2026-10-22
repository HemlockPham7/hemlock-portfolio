"use client";

import React from "react";
import Image from "next/image";

export default function Project1Detail() {
  return (
    <div className="project-detail-body">
      <div className="project-detail-header">
        <span className="project-detail-badge">Advanced Concept</span>
        <h2 className="project-detail-title">Distributed and Multi-level Caching System</h2>
        <p className="project-detail-subtitle">
          An enterprise-grade, event-driven multi-tier caching architecture (L1 Caffeine + L2 Redis) built with Spring Boot, featuring Redisson distributed locking to prevent cache stampede, Debezium CDC & Kafka for near real-time cache synchronization, and full-stack observability via Prometheus, Grafana, Tempo, and Logstash.
        </p>
      </div>

      <div className="project-detail-section">
        <h4 className="detail-section-heading">Overall Architecture</h4>
      </div>

      <div className="project-detail-banner">
        <Image
          src="/images/multi-level-cache-architecture.png"
          alt="Multi-level cache architecture"
          width={1836}
          height={1836}
          className="project-banner-img"
        />
      </div>

      <div className="project-detail-section">
        <h4 className="detail-section-heading">Distributed Caching and Refresh Ahead Method</h4>
      </div>

      <div className="project-detail-banner">
        <Image
          src="/images/distributed-refreshahead.png"
          alt="Multi-level cache architecture"
          width={1836}
          height={1836}
          className="project-banner-img"
        />
      </div>

      <div className="project-detail-section">
        <h4 className="detail-section-heading">Key Engineering Highlights</h4>
        <ul className="project-detail-bullets">
          <li>
            <strong>Multi-Tier Caching & Stampede Prevention:</strong> Architected a high-throughput L1 (Caffeine) / L2 (Redis) caching topology backed by Redisson distributed locks to completely mitigate cache stampede under heavy cache-miss bursts.
          </li>
          <li>
            <strong>CDC-Driven Cache Invalidation:</strong> Built an event-driven invalidation pipeline leveraging Debezium CDC and Kafka; synchronized state across nodes by invalidating L2 Redis and broadcasting eviction events via Redis Pub/Sub to all L1 Caffeine instances.
          </li>
          <li>
            <strong>Observability:</strong> Integrated Prometheus, Grafana, and Grafana Tempo for end-to-end distributed tracing and real-time metric tracking, pinpointing latency bottlenecks across cache tiers.
          </li>
          <li>
            <strong>Centralized Logging:</strong> Deployed Logstash to aggregate, normalize, and ship structured logs across multi-instance services, streamlining distributed troubleshooting and operational audits.
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
          <span>Redisson</span>
          <span>Caffeine</span>
          <span>PostgreSQL</span>
          <span>Docker</span>
          <span>Prometheus</span>
          <span>Grafana</span>
          <span>Tempo</span>
          <span>Logstash</span>
        </div>
      </div>

      <div className="project-detail-actions">
        <a
          href="https://www.youtube.com/watch?v=FaJ3cvN6Fmc"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Youtube Demo Platform
        </a>
        <a
          href="https://github.com/HemlockPham7/evaluate-advanced-concept"
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
