"use client";

import React from "react";
import Image from "next/image";

export default function Project5Detail() {
  return (
    <div className="project-detail-body">
      <div className="project-detail-header">
        <span className="project-detail-badge">AI Agents</span>
        <h2 className="project-detail-title">Saigon Rush</h2>
        <p className="project-detail-subtitle">
          A vibrant, fast-paced Vietnamese-themed 3D endless runner game set in the bustling streets of Ho Chi Minh City (Saigon). Dodge chaotic street traffic, leap over plastic stools, duck under tangled overhead wires, dash up Saigon bus roofs, collect golden Dong coins, and power up with iconic Vietnamese street food delicacies!
        </p>
      </div>

      <div className="project-detail-section">
        <h4 className="detail-section-heading">Saigon Rush Overview</h4>
      </div>

      <div className="project-detail-banner">
        <Image
          src="/images/saigon-rush-core.png"
          alt="Saigon Rush - Core Gameplay"
          width={800}
          height={450}
          className="project-banner-img"
        />
      </div>

      <div className="project-detail-section">
        <h4 className="detail-section-heading">Key Engineering Highlights</h4>
        <ul className="project-detail-bullets">
          <li>
            <strong>Decoupled Game Loop & UI:</strong> Optimized 60 FPS rendering by separating Three.js frame updates from React state management, using direct object references and selective subscriptions to minimize unnecessary re-renders.
          </li>
          <li>
            <strong>Infinite World & Object Pooling:</strong> Implemented object pooling to recycle track segments, obstacles, and coins, reducing garbage collection overhead and maintaining smooth gameplay performance.
          </li>
          <li>
            <strong>Fail-Safe 3D Asset Pipeline:</strong> Integrated external GLTF/GLB models with procedural low-poly Three.js fallbacks, ensuring game entities render reliably even when external assets fail to load.
          </li>
          <li>
            <strong>Optimized Collision Detection:</strong> Implemented lightweight AABB collision detection using THREE.Box3 to perform real-time collision checks while avoiding the overhead of a full physics engine.
          </li>
        </ul>
      </div>

      <div className="project-detail-section">
        <h4 className="detail-section-heading">Tech Stack & Tools</h4>
        <div className="project-tech-chips">
          <span>Google Antigravity</span>
          <span>Claude Opus 5.5</span>
          <span>React</span>
          <span>Threejs</span>
        </div>
      </div>

      <div className="project-detail-actions">
        <a
          href="https://www.youtube.com/watch?v=xAmkN12MT7Y"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Youtube Demo Platform
        </a>
        <a
          href="https://github.com/HemlockPham7/saigonrush"
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
