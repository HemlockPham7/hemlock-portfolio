"use client";

import React from "react";
import Image from "next/image";

export default function Project4Detail() {
  return (
    <div className="project-detail-body">
      <div className="project-detail-header">
        <span className="project-detail-badge">Saga Pattern Orchestration</span>
        <h2 className="project-detail-title">Payment System</h2>
        <p className="project-detail-subtitle">
          Integrate VNPay to demonstrate a movie ticket purchasing flow, including movie selection, seat reservation, payment processing, and ticket confirmation. Apply the Saga Pattern to coordinate distributed transactions across services and ensure data consistency through compensating actions when a step fails. Implement idempotency to prevent duplicate payment requests, duplicate ticket bookings, and inconsistent transaction states when requests are retried or payment callbacks are received multiple times.
        </p>
      </div>

      <div className="project-detail-section">
        <h4 className="detail-section-heading">Overall Architecture</h4>
      </div>

      <div className="project-detail-banner">
        <Image
          src="/images/architecture.png"
          alt="Overall architecture"
          width={1221}
          height={930}
          className="project-banner-img"
        />
      </div>

      <div className="project-detail-section">
        <h4 className="detail-section-heading">Saga Flow</h4>
      </div>

      <div className="project-detail-banner">
        <Image
          src="/images/saga-flow.png"
          alt="Saga Pattern Orchestration Flow"
          width={1836}
          height={778}
          className="project-banner-img"
        />
      </div>


      <div className="project-detail-section">
        <h4 className="detail-section-heading">Key Engineering Highlights</h4>
        <ul className="project-detail-bullets">
          <li>
            <strong>Distributed Transaction Management:</strong> Implemented distributed transaction workflows using the Saga Pattern and Axon Framework, ensuring reliable transaction coordination across microservices.
          </li>
          <li>
            <strong>Idempotency and Reliability:</strong> Implemented idempotency mechanisms to prevent duplicate processing and maintain consistent transaction handling across services.
          </li>
          <li>
            <strong>Microservices Architecture & Payment Integration:</strong> Designed and developed a Spring Boot-based microservices platform covering payment processing, order management, movie management, and VNPay payment gateway integration.
          </li>
        </ul>
      </div>

      <div className="project-detail-section">
        <h4 className="detail-section-heading">Tech Stack & Tools</h4>
        <div className="project-tech-chips">
          <span>Spring Boot</span>
          <span>Axon Framework</span>
          <span>Saga Pattern</span>
          <span>Idempotency</span>
          <span>Docker</span>
        </div>
      </div>

      <div className="project-detail-actions">
        <a
          href="https://www.youtube.com/watch?v=xNqM4SotZoY"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Youtube Demo Platform
        </a>
        <a
          href="https://github.com/HemlockPham7/payment-system"
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
