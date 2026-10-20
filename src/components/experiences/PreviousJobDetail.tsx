"use client";

import React from "react";

export default function PreviousJobDetail() {
  return (
    <div className="job-detail-content">
      <div className="job-detail-header">
        <div className="job-detail-badge">Jan 2024 – Aug 2024</div>
        <h3 className="job-detail-title">Intern Software Developer</h3>
        <h4 className="job-detail-company">Payoo VietUnion Group - HCMUS Graduation</h4>
      </div>

      <div className="job-detail-summary-card">
        <p>
          Contributed to a microservices-based movie ticket management platform using Spring Boot and Domain-Driven Design (DDD), developing order, customer, and movie management services, integrating VNPay payments, and implementing reliable distributed transactions with the Saga Pattern and Axon Framework. Also supported database schema management, centralized logging, application monitoring, and RESTful API documentation to improve system reliability and observability.
        </p>
      </div>

      <div className="job-detail-section">
        <h5 className="job-section-title">Key Responsibilities & Contributions</h5>
        <ul className="job-bullet-list">
          <li>
            <strong>Microservices Architecture & Domain-Driven Design:</strong> Collaborated in a 2-member team to develop a microservices-based movie ticket management platform using <strong>Spring Boot</strong> and <strong>DDD</strong>, implementing order processing, customer management, and movie management services.
          </li>
          <li>
            <strong>Distributed Transactions & Payment Integration:</strong> Implemented distributed transaction workflows using the <strong>Saga Pattern</strong> and <strong>Axon Framework</strong>, integrated <strong>VNPay</strong> payments, and applied idempotency mechanisms to prevent duplicate processing and ensure reliable cross-service transactions.
          </li>
          <li>
            <strong>Database Design & Migration Management:</strong> Designed relational schemas in <strong>PostgreSQL</strong> and managed database versioning with <strong>Flyway</strong>, maintaining schema consistency across development environments.
          </li>
          <li>
            <strong>Monitoring & System Observability:</strong> Contributed to building <strong>Grafana</strong> dashboards for application metrics and integrated <strong>Logstash</strong> for centralized log collection, improving visibility into application behavior and troubleshooting.
          </li>
          <li>
            <strong>API Documentation & Development Workflow:</strong> Documented RESTful APIs using <strong>Swagger</strong> and worked with <strong>Docker</strong> to support a consistent development environment and service integration.
          </li>
          <li>
            <strong>API Gateway & Authentication:</strong> Designed an API Gateway with <strong>Keycloak integration</strong> for centralized request routing and authentication.
          </li>
        </ul>
      </div>

      <div className="job-detail-section">
        <h5 className="job-section-title">Technical Environment & Core Stack</h5>
        <div className="job-tech-grid">
          <span className="timeline-tag-item">Java</span>
          <span className="timeline-tag-item">Spring Boot</span>
          <span className="timeline-tag-item">React</span>
          <span className="timeline-tag-item">Axon Framework</span>
          <span className="timeline-tag-item">VNPAY</span>
          <span className="timeline-tag-item">Grafana</span>
          <span className="timeline-tag-item">Tempo</span>
          <span className="timeline-tag-item">Prometheous</span>
          <span className="timeline-tag-item">Logstash</span>
          <span className="timeline-tag-item">PostgreSQL</span>
          <span className="timeline-tag-item">Swagger</span>
          <span className="timeline-tag-item">Docker</span>
        </div>
      </div>
    </div>
  );
}
