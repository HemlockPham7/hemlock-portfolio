"use client";

import React from "react";
import { skillCategories, SkillCategory, SkillItem } from "./skillsData";

export default function SkillsSection() {
  return (
    <section id="skills" className="portfolio-section section-tinted">
      <div className="site-container">
        <div className="section-head">
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-description">
            Comprehensive breakdown of programming languages, modern frameworks, data backends, DevOps orchestration, and AI-accelerated workflows.
          </p>
        </div>

        <div className="skills-matrix-stack">
          {skillCategories.map((category: SkillCategory) => (
            <div key={category.id} className="skill-category-row">
              <div className="skill-category-header">
                <div className="skill-category-title-wrap">
                  <span className="skill-category-num">{category.number}</span>
                  <h3 className="skill-category-title">{category.title}</h3>
                </div>
                <p className="skill-category-desc">{category.description}</p>
              </div>

              <div className="skill-cards-grid">
                {category.skills.map((skill: SkillItem) => (
                  <div
                    key={skill.id}
                    className="skill-card-item"
                    tabIndex={0}
                    role="group"
                    aria-label={`${skill.name} - ${skill.category}`}
                  >
                    <div className="skill-card-icon" aria-hidden="true">
                      {skill.icon}
                    </div>
                    <span className="skill-card-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
