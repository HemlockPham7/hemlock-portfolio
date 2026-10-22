"use client";

import React from "react";
import Image from "next/image";

export default function Project2Detail() {
  return (
    <div className="project-detail-body">
      <div className="project-detail-header">
        <span className="project-detail-badge">Youtube Clone</span>
        <h2 className="project-detail-title">Cloud Streaming System</h2>
        <p className="project-detail-subtitle">
          Developed a scalable movie streaming platform with adaptive bitrate streaming and a real-time CDC-driven search and autocomplete system using Spring Boot, React, Kafka, Elasticsearch, PostgreSQL, S3, and CloudFront, optimized for low-latency playback and search performance.
        </p>
      </div>

      <div className="project-detail-section">
        <h4 className="detail-section-heading">Video Pre-processing Architecture</h4>
      </div>

      <div className="project-detail-banner">
        <Image
          src="/images/video-processing.png"
          alt="CineStream system architecture"
          width={1200}
          height={1000}
          className="project-banner-img"
        />
      </div>

      <div className="project-detail-section">
        <h4 className="detail-section-heading">Video Streaming Architecture</h4>
      </div>

      <div className="project-detail-banner">
        <Image
          src="/images/video-streaming.png"
          alt="CineStream system architecture"
          width={1200}
          height={1000}
          className="project-banner-img"
        />
      </div>

      <div className="project-detail-section">
        <h4 className="detail-section-heading">Key Engineering Highlights</h4>
        <ul className="project-detail-bullets">
          <li>
            <strong>Adaptive Bitrate Video Streaming:</strong> Developed a movie streaming platform using Spring Boot, React, and HLS, with S3 for media storage and CloudFront CDN for content delivery, targeting sub-3-second playback startup.
          </li>
          <li>
            <strong>CDC-Driven Search & Autocomplete:</strong> Built a real-time data synchronization pipeline using Debezium, Kafka, and Elasticsearch with CQRS architecture, achieving sub-2-second index synchronization and sub-200ms P95 search latency at 3,000 queries per second.
          </li>
        </ul>
      </div>

      <div className="project-detail-section">
        <h4 className="detail-section-heading">Tech Stack & Tools</h4>
        <div className="project-tech-chips">
          <span>Java</span>
          <span>Spring Boot</span>
          <span>Redis</span>
          <span>S3</span>
          <span>Cloudfront</span>
          <span>HLS</span>
          <span>PostgreSQL</span>
          <span>Elasticsearch</span>
          <span>Debezium</span>
          <span>Kafka</span>
          <span>Docker</span>
        </div>
      </div>

      <div className="project-detail-actions">
        <a
          href="https://www.youtube.com/watch?v=Ge2Tep4C3AM"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Youtube Demo Platform
        </a>
        <a
          href="https://github.com/HemlockPham7/cloud-streaming-system"
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
