# Engineering & Implementation Plan: Hemlock Portfolio

**Document Version:** 1.0.0  
**Target Project:** Viet-Hoang Pham (Hemlock) Developer Portfolio  
**Framework:** Next.js (App Router), TypeScript, Vanilla CSS Design System  
**Document Location:** `docs/PLAN.md`

---

## 1. Executive Summary & Objective

This plan establishes the strategic roadmap and phased implementation breakdown for transforming the portfolio into a clean, modern, and high-impact showcase for **Viet-Hoang Pham**, featuring 1.5+ years of software development experience and graduation from HCMUS (VNUHCM - University of Science).

The development is divided into **5 core phases**:
1. **Phase 1: Hero Section Enhancement & Social Connect**
2. **Phase 2: About & Academic Foundation (HCMUS & Awards)**
3. **Phase 3: Work Experiences (Alternating Interactive Timeline)**
4. **Phase 4: Featured Projects (5-Card Grid & Detailed Views)**
5. **Phase 5: Technical Skills Matrix (5-Tier Categorized Rows - Real Data)**

---

## 2. Architecture & File Structure Overview

```text
hemlock-portfolio/
├── docs/
│   ├── DESIGN.md                 # Design tokens and visual guidelines
│   └── PLAN.md                   # Phased implementation roadmap (this file)
├── public/
│   ├── cv.pdf                    # Mock/actual CV document for download
│   ├── mock-cv.pdf               # Mock CV reference copy
│   └── images/                   # Portfolio assets, thumbnails, avatars
├── src/
│   ├── app/
│   │   ├── layout.tsx            # Global layout with metadata and fonts
│   │   ├── page.tsx              # Main portfolio landing page
│   │   ├── globals.css           # Design tokens, variables & base styling
│   │   └── projects/             # (Phase 4) Project detail pages or modals
│   │       ├── [id]/page.tsx     # Dynamic project detail page routes
│   │       └── ...               # 6 dedicated project detail views
│   └── components/
│       ├── hero/                 # Hero section & social connect bar
│       ├── about/                # Education, bio & award cards
│       ├── experiences/          # Alternating timeline & experience detail views
│       ├── projects/             # Project grid, card components, detail modals
│       └── skills/               # 5-tier skill matrix & tech icon badges
```

---

## 3. Phased Implementation Breakdown

### Phase 1: Hero Section Enhancement & Social Connect

#### Objectives & Scope
Refactor the Hero section to present an approachable, authoritative developer identity with direct call-to-actions and personal connection channels.

#### Key Tasks
- [x] **Mock CV File Creation:**
  - Create and verify a downloadable mock PDF file in the `public/` directory (`public/cv.pdf` and `public/mock-cv.pdf`).
- [x] **Dual Call-to-Action (CTA) Buttons:**
  - **Download CV Button:** Primary action button configured to trigger direct download (`href="/cv.pdf"` with `download="Viet-Hoang-Pham-CV.pdf"`).
  - **View Projects Button:** Secondary/outline action button with smooth-scrolling anchor reference (`href="#projects"`).
- [x] **Social Connection Strip ("Connect with me through"):**
  - Remove previous stat strip (*"Peak Managed Production Throughput"*, *"Verified Production Uptime SLA"*, *"Architectural Leadership Experience"*).
  - Implement a dedicated "Connect with me through..." strip featuring clickable, interactive brand icons:
    - **LinkedIn:** Clickable icon redirecting to LinkedIn profile (`target="_blank"`, `rel="noopener noreferrer"`).
    - **Gmail / Email:** Direct mail action (`mailto:...`) with tooltips or clipboard copy functionality.
    - **GitHub:** Clickable icon redirecting to GitHub profile (`target="_blank"`, `rel="noopener noreferrer"`).
  - Provide smooth hover micro-animations, tooltips, and high-contrast accessibility tags (`aria-label`).
  - Scaled up the "Connect me through" section and buttons by ~40% (larger fonts, enhanced padding, 25px SVG vector icons, expanded tap targets).
- [x] **Headline & Copy Refinement:**
  - Clear introduction: Junior Software Developer / Software Engineer with 1.5+ years of experience.

#### Acceptance Criteria
- Clicking "Download CV" downloads the PDF file cleanly without 404 errors.
- Clicking "View Projects" smoothly glides the viewport to the Projects section (`#projects`).
- All 3 social links (LinkedIn, Gmail, GitHub) render with vector SVG icons, proper contrast, hover states, and functional redirect URLs.

---

### Phase 2: About & Academic Foundation (HCMUS & Awards)

#### Objectives & Scope
Highlight educational credentials, foundational software engineering background, and notable achievements/recognitions.

#### Key Tasks
- [x] **General Background & Bio Section:**
  - Graduation background from **VNUHCM - University of Science (HCMUS)**.
  - **1.5+ years** of hands-on software development experience.
  - Concise narrative covering engineering philosophy, problem-solving mindset, and core interests.
- [x] **3 Award & Recognition Cards:**
  - Design a flexible, high-contrast 3-card layout for awards/prizes.
  - Card anatomy:
    - Award title & prize tier (e.g., 1st/2nd/3rd prize, Dean's List, Hackathon award).
    - Issuing organization / competition name and date.
    - Brief summary of the project or criterion that won the prize.
    - Extensible schema ready to populate with specific details upon user review.
- [x] **Visual Layout:**
  - Modern card deck with subtle borders, elevation, and accent icon badges.

#### Acceptance Criteria
- Clear presentation of HCMUS degree and 1.5+ years industry experience.
- 3 distinct, beautifully formatted award cards with consistent spacing, responsive behavior across mobile and desktop.

---

### Phase 3: Work Experiences (Alternating Interactive Timeline)

#### Objectives & Scope
Showcase professional career progression using a centralized vertical timeline with alternating left/right layout and dedicated detailed view components.

#### Key Tasks
- [x] **Timeline Architecture & Structure:**
  - Implement a central vertical timeline spine (`timeline-axis` / `timeline-middle-line`).
  - Render 2 distinct job experience items in an alternating zigzag pattern:
    - Job 1: Positioned on the left side of the axis.
    - Job 2: Positioned on the right side of the axis (offset vertically, not sharing the same row).
    - Mobile layout: Gracefully collapses to a single left-aligned timeline spine for screens under 768px.
- [x] **Job Card Information Density:**
  - **Date Range:** e.g., *Feb 2025 – Feb 2026* (or current dates).
  - **Job Title:** *Junior Software Developer*.
  - **Company Name:** *Netcompany* (and previous/current company).
  - **Brief Summary:** Highlighting core contributions, production deliverables, and system ownership.
  - **Skill Badges:** Explicit tags including `Spring Boot`, `AWS S3`, `Microservices`, etc.
- [x] **Interactive Deep-Dive View:**
  - Each job card includes an interactive affordance ("View Details" or clickable card).
  - Created dedicated TSX file/modal components:
    - `src/components/experiences/NetcompanyDetail.tsx`
    - `src/components/experiences/PreviousJobDetail.tsx`
    - `src/components/experiences/ExperienceModal.tsx`
    - In-depth architectural contributions, challenges faced, team collaboration, and stack details.

#### Acceptance Criteria
- Two distinct job cards placed alternately on left and right sides of a central timeline bar on desktop.
- Responsive collapse to single vertical line on mobile devices.
- Clicking either experience opens its corresponding dedicated detailed TSX view cleanly.

---

### Phase 4: Featured Projects (5-Card Grid & Detailed Views)

#### Objectives & Scope
Build a comprehensive 5-project showcase in a structured grid layout, backed by dedicated detailed pages/components for each project.

#### Key Tasks
- [x] **5 Base Project Cards (Grid Layout):**
  - Implement a responsive CSS Grid (3 columns on desktop, 2 columns on tablet, 1 column on mobile).
  - Card specifications:
    - **Visual Thumbnail:** High-resolution optimized image/graphic preview.
    - **Project Title:** Descriptive, distinct name.
    - **Brief Summary:** 2–3 sentence overview of the core problem solved.
    - **Tech Stack Badges:** Visual tags indicating technologies used.
    - **Action Buttons (2 per card):**
      - **Live Demo Button:** Direct external link or interactive preview.
      - **GitHub Repo Button:** Direct link to code repository.
      - Detail Trigger: Link/button to open the full project case study.
- [x] **5 Dedicated Project Detail TSX Files/Routes:**
  - Dedicated TSX page components:
    1. `src/components/projects/details/Project1Detail.tsx` (Amplio: Enterprise Financial & Tax Platform)
    2. `src/components/projects/details/Project2Detail.tsx` (CineStream: Distributed Movie Ticket & Payment Mesh)
    3. `src/components/projects/details/Project3Detail.tsx` (Kestrel: Resilient Stream Processing Broker)
    4. `src/components/projects/details/Project4Detail.tsx` (CloudVault: S3 Cloud-Native Ingestion Pipeline)
    5. `src/components/projects/details/Project5Detail.tsx` (DevNexus: Distributed Telemetry & Observability Mesh)
  - Detail components cover: Architecture overview, key engineering highlights, tech stack chips, and live demo / GitHub links.
  - Accessible modal dialog component `src/components/projects/ProjectDetailModal.tsx` with ESC key listener, background scroll lock, and responsive mobile styling.

- [x] **Project Detail Modal Width & Non-Cropping Responsive Images:**
  - Expanded project detail modal width by ~10% (`max-width: 900px`, up from 820px) to provide enhanced breathing room for detailed architecture content and diagrams.
  - Eliminated image cropping: removed fixed `aspect-ratio: 16 / 9` and `object-fit: cover` from `.project-banner-img`.
  - Configured responsive scaling with `width: 100%`, `height: auto`, and `object-fit: contain` so images scale dynamically while rendering 100% of their vertical content.
  - Added support for 100% height rendering (`.fit-height` / `.full-height` utility modifiers).
  - Aligned diagram dimensions in `src/components/projects/details/Project4Detail.tsx` (`architecture.png` to 1221x930 and `saga-flow.png` to 1836x778) to preserve natural aspect ratios.

#### Acceptance Criteria
- Exactly 5 project cards rendered cleanly in a uniform grid.
- Each card contains thumbnail, title, summary, tech stack tags, and functional action buttons.
- Each project links to its dedicated TSX view for exhaustive exploration.
- Project detail modal renders ~10% wider on desktop.
- Architecture and flow images render completely without being cropped on top, bottom, or sides.

---

### Phase 5: Technical Skills Matrix (5-Tier Categorized Rows - Real Data)

#### Objectives & Scope
Provide a comprehensive, visually engaging technical skills section organized into 5 clearly demarcated horizontal categories matching verified production experience.

#### Key Tasks
- [x] **Categorization Structure (5 Dedicated Rows with Real Data):**
  1. **Row 1 - Languages:**
     - Java, SQL, C++, Go, JavaScript, TypeScript, HTML, CSS.
  2. **Row 2 - Frameworks & Skills:**
     - Spring Boot, Axon Framework, React, Kafka, Nginx, Swagger, HLS, VNPAY Payment Gateway.
  3. **Row 3 - Databases, Caching & Cloud:**
     - PostgreSQL, Redis, Caffeine, Amazon S3, CloudFront, Elasticsearch.
  4. **Row 4 - DevOps & Monitoring:**
     - Docker, GitHub Actions, CI/CD, Azure DevOps, Prometheus, Tempo, Grafana, Logstash, New Relic.
  5. **Row 5 - AI & Development Tools:**
     - Google Antigravity, Claude Opus 5.5.
- [x] **Card Anatomy for Each Skill:**
  - Individual compact item card containing:
    - Scalable vector icon (SVG) centered at the top with responsive dimensions.
    - Official skill/technology name centered below with clean contrast.
  - Micro-interactions: Smooth vertical lift (`transform: translateY(-4px)`), illuminated primary border glow, drop shadow, and icon scale pop on hover/focus.
- [x] **Responsive Flow:**
  - Clean responsive grid layout (`repeat(auto-fill, minmax(135px, 1fr))`) ensuring uniform spacing and zero icon distortion across desktop, tablet, and mobile.

#### Acceptance Criteria
- 5 distinct category rows clearly labeled with badges, titles, and descriptions.
- Every skill card displays a crisp, bespoke SVG icon above its label.
- High visual appeal with consistent padding, typography, and interactive hover feedback.

---

## 4. Implementation Milestones & Task Order

| Milestone | Target Phase | Status | Key Output Files | Verification Method |
| :--- | :--- | :--- | :--- | :--- |
| **M1** | Phase 1 (Hero) | **Completed** | `public/cv.pdf`, `src/app/page.tsx`, `src/app/globals.css` | Verify CV download, `#projects` jump, social icons clickability |
| **M2** | Phase 2 (About) | **Completed** | `src/app/page.tsx`, `src/app/globals.css` | Review HCMUS degree text, 1.5+ yrs bio, 3 award cards layout |
| **M3** | Phase 3 (Experiences) | **Completed** | `src/components/experiences/*`, `src/app/page.tsx`, `src/app/globals.css` | Verify central timeline, alternating cards, detail click handler |
| **M4** | Phase 4 (Projects) | **Completed** | `src/components/projects/*`, 5 detail TSX views | Verify 5-card grid, Live/GitHub buttons, 5 detail modals |
| **M5** | Phase 5 (Skills) | **Completed** | `src/components/skills/*`, `src/app/page.tsx`, `src/app/globals.css` | Verify 5 categorized rows with real data, icon + label alignment |

---

## 5. Quality, Accessibility & Verification Standards

- **Semantic HTML & WCAG AA:** All buttons, links, and icons have accessible labels (`aria-label`) and meet standard contrast thresholds.
- **Cross-Browser & Mobile Responsiveness:** Fully tested on mobile (375px), tablet (768px), and desktop (1280px+).
- **TypeScript Strict Safety:** Zero type errors (`npm run build` or `tsc --noEmit`).
- **Asset Integrity:** PDF download link and all internal `#` hash anchors verified and fully functional.
