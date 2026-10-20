"use client";

import React from "react";
import Image from "next/image";

export default function Project5Detail() {
  return (
    <div className="project-detail-body">
      <div className="project-detail-header">
        <span className="project-detail-badge">Observability & Monitoring</span>
        <h2 className="project-detail-title">DevNexus: Distributed Telemetry & Observability Mesh</h2>
        <p className="project-detail-subtitle">
          Centralized observability framework integrating Grafana dashboards, Prometheus time-series metrics, Tempo distributed tracing, and Logstash log shipping.
        </p>
      </div>

      <div className="project-detail-banner">
        <Image
          src="/images/observability-mesh.jpg"
          alt="DevNexus observability dashboard"
          width={800}
          height={450}
          className="project-banner-img"
        />
      </div>

      <div className="project-detail-section">
        <h4 className="detail-section-heading">System Overview & Architecture</h4>
        <p>
          DevNexus delivers deep visibility across distributed microservices by correlating trace IDs across asynchronous message boundaries. 
          It captures CPU, memory saturation, endpoint request latencies, and structured logs, presenting an end-to-end health graph on Grafana.
        </p>
      </div>

      <div className="project-detail-section">
        <h4 className="detail-section-heading">Key Engineering Highlights</h4>
        <ul className="project-detail-bullets">
          <li>
            <strong>End-to-End Tracing:</strong> Correlated HTTP and Kafka message headers using W3C Trace Context and Tempo, reducing mean time to identify errors from 25 minutes to under 2 minutes.
          </li>
          <li>
            <strong>Custom Grafana Dashboards:</strong> Designed production dashboards visualizing P50/P90/P99 latency trends, JVM heap utilization, and database connection pool health.
          </li>
          <li>
            <strong>Automated Alerting Engine:</strong> Configured Prometheus Alertmanager rules notifying on error rate spikes and impending certificate expirations.
          </li>
        </ul>
      </div>

      <div className="project-detail-section">
        <h4 className="detail-section-heading">Tech Stack & Tools</h4>
        <div className="project-tech-chips">
          <span>Grafana</span>
          <span>Prometheus</span>
          <span>Tempo</span>
          <span>Logstash</span>
          <span>OpenTelemetry</span>
          <span>Spring Boot</span>
          <span>Docker</span>
        </div>
      </div>

      <div className="project-detail-actions">
        <a
          href="https://devnexus.hemlock.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Live Demo Platform
        </a>
        <a
          href="https://github.com/HemlockPham7/devnexus-telemetry"
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
