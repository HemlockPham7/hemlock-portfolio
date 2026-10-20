"use client";

import React from "react";
import Image from "next/image";

export default function Project4Detail() {
  return (
    <div className="project-detail-body">
      <div className="project-detail-header">
        <span className="project-detail-badge">Cloud Object Storage</span>
        <h2 className="project-detail-title">CloudVault: S3 Cloud-Native Ingestion Pipeline</h2>
        <p className="project-detail-subtitle">
          Automated batch data migration and object lifecycle service transferring heavy binary data to Amazon S3 with presigned access controls.
        </p>
      </div>

      <div className="project-detail-banner">
        <Image
          src="/images/cloud-storage.jpg"
          alt="CloudVault S3 storage pipeline"
          width={800}
          height={450}
          className="project-banner-img"
        />
      </div>

      <div className="project-detail-section">
        <h4 className="detail-section-heading">System Overview & Architecture</h4>
        <p>
          CloudVault was engineered to offload high-volume media storage and workflow documents from primary relational databases into Amazon S3. 
          By executing scheduled batch workers with chunked streaming and validating content integrity, the platform reduced database storage footprints while accelerating client access times.
        </p>
      </div>

      <div className="project-detail-section">
        <h4 className="detail-section-heading">Key Engineering Highlights</h4>
        <ul className="project-detail-bullets">
          <li>
            <strong>Automated Batch Migration:</strong> Developed scheduled Spring Batch workers migrating nearly 1,000 images and documents associated with completed workflows to Amazon S3.
          </li>
          <li>
            <strong>Presigned URL Security:</strong> Implemented time-expiring AWS S3 presigned URLs for direct secure client downloads, completely eliminating web server memory exhaustion.
          </li>
          <li>
            <strong>Storage Cost Optimization:</strong> Implemented S3 Glacier transition lifecycle policies that cut persistent storage expenses by over 60%.
          </li>
        </ul>
      </div>

      <div className="project-detail-section">
        <h4 className="detail-section-heading">Tech Stack & Tools</h4>
        <div className="project-tech-chips">
          <span>AWS S3</span>
          <span>Spring Boot</span>
          <span>Java</span>
          <span>Spring Batch</span>
          <span>PostgreSQL</span>
          <span>Docker</span>
          <span>AWS IAM</span>
        </div>
      </div>

      <div className="project-detail-actions">
        <a
          href="https://cloudvault.hemlock.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Live Demo Platform
        </a>
        <a
          href="https://github.com/HemlockPham7/cloudvault-s3"
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
