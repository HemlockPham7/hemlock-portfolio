"use client";

import React from "react";
import Image from "next/image";

export default function Project2Detail() {
  return (
    <div className="project-detail-body">
      <div className="project-detail-header">
        <span className="project-detail-badge">Distributed Microservices</span>
        <h2 className="project-detail-title">CineStream: Distributed Movie Ticket & Payment Mesh</h2>
        <p className="project-detail-subtitle">
          Microservices booking system incorporating Domain-Driven Design (DDD), Saga distributed transactions, and VNPay integration.
        </p>
      </div>

      <div className="project-detail-banner">
        <Image
          src="/images/streaming-engine.jpg"
          alt="CineStream system architecture"
          width={800}
          height={450}
          className="project-banner-img"
        />
      </div>

      <div className="project-detail-section">
        <h4 className="detail-section-heading">System Overview & Architecture</h4>
        <p>
          CineStream is a distributed cinema booking and reservation system designed with Domain-Driven Design (DDD). 
          It isolates order processing, seating allocation, catalog management, and payment verification into autonomous microservices. 
          Cross-service transactions are coordinated using the Saga Pattern powered by Axon Framework.
        </p>
      </div>

      <div className="project-detail-section">
        <h4 className="detail-section-heading">Key Engineering Highlights</h4>
        <ul className="project-detail-bullets">
          <li>
            <strong>Saga Distributed Transactions:</strong> Implemented compensating transactions via Axon Framework to guarantee atomic seat reservations and order creation without distributed database locks.
          </li>
          <li>
            <strong>Payment Gateway Integration:</strong> Integrated VNPay with robust idempotency handling, preventing duplicate charge processing during network retry anomalies.
          </li>
          <li>
            <strong>Database Schema Migrations:</strong> Managed PostgreSQL relational schemas with Flyway versioning to maintain consistent database states across all deployment environments.
          </li>
          <li>
            <strong>Full Observability Pipeline:</strong> Configured Prometheus metrics, Grafana dashboards, and Logstash log shipping for real-time latency and error tracking.
          </li>
        </ul>
      </div>

      <div className="project-detail-section">
        <h4 className="detail-section-heading">Tech Stack & Tools</h4>
        <div className="project-tech-chips">
          <span>Java</span>
          <span>Spring Boot</span>
          <span>Axon Framework</span>
          <span>Saga Pattern</span>
          <span>VNPay API</span>
          <span>PostgreSQL</span>
          <span>Flyway</span>
          <span>Grafana</span>
          <span>Docker</span>
        </div>
      </div>

      <div className="project-detail-actions">
        <a
          href="https://cinestream.hemlock.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Live Demo Platform
        </a>
        <a
          href="https://github.com/HemlockPham7/cinestream-backend"
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
