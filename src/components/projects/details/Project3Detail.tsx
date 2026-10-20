"use client";

import React from "react";
import Image from "next/image";

export default function Project3Detail() {
  return (
    <div className="project-detail-body">
      <div className="project-detail-header">
        <span className="project-detail-badge">Event Streaming Broker</span>
        <h2 className="project-detail-title">Kestrel: Resilient Stream Processing Broker</h2>
        <p className="project-detail-subtitle">
          Exactly-once distributed message processing broker capable of automatic partitioned failover and zero message loss.
        </p>
      </div>

      <div className="project-detail-banner">
        <Image
          src="/images/devtools-profiler.jpg"
          alt="Kestrel stream broker architecture"
          width={800}
          height={450}
          className="project-banner-img"
        />
      </div>

      <div className="project-detail-section">
        <h4 className="detail-section-heading">System Overview & Architecture</h4>
        <p>
          Kestrel is a distributed streaming broker built to guarantee exactly-once semantics and automated failover across partitioned consumer groups. 
          It processes continuous telemetry streams, enforces message deduplication, and routes payloads through dead-letter buffers during downstream consumer degradation.
        </p>
      </div>

      <div className="project-detail-section">
        <h4 className="detail-section-heading">Key Engineering Highlights</h4>
        <ul className="project-detail-bullets">
          <li>
            <strong>Partitioned Topic Ingestion:</strong> Designed an event pipeline processing over 1.2 GB/s throughput with sub-40ms consumer lag across 64 parallel topic partitions.
          </li>
          <li>
            <strong>Automated Failover Protocol:</strong> Constructed dynamic leader election and partition rebalancing that restores failed replica state in under 3.5 seconds.
          </li>
          <li>
            <strong>Dead Letter Queue Resilience:</strong> Implemented exponential backoff retries and quarantined error queues to prevent consumer blocking.
          </li>
        </ul>
      </div>

      <div className="project-detail-section">
        <h4 className="detail-section-heading">Tech Stack & Tools</h4>
        <div className="project-tech-chips">
          <span>Java</span>
          <span>Spring Boot</span>
          <span>Kafka</span>
          <span>PostgreSQL</span>
          <span>Docker</span>
          <span>AWS ECS</span>
          <span>OpenTelemetry</span>
        </div>
      </div>

      <div className="project-detail-actions">
        <a
          href="https://kestrel-stream.hemlock.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Live Demo Platform
        </a>
        <a
          href="https://github.com/HemlockPham7/kestrel-broker"
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
