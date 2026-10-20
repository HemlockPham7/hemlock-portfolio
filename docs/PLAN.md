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
4. **Phase 4: Featured Projects (6-Card Grid & Detailed Views)**
5. **Phase 5: Technical Skills Matrix (5-Tier Categorized Rows)**

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

### Phase 4: Featured Projects (6-Card Grid & Detailed Views)

#### Objectives & Scope
Build a comprehensive 6-project showcase in a structured grid layout, backed by dedicated detailed pages/components for each project.

#### Key Tasks
- [x] **6 Base Project Cards (Grid Layout):**
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
- [x] **6 Dedicated Project Detail TSX Files/Routes:**
  - Create 6 separate TSX page components:
    1. `src/components/projects/details/Project1Detail.tsx` (Amplio: Enterprise Financial & Tax Platform)
    2. `src/components/projects/details/Project2Detail.tsx` (CineStream: Distributed Movie Ticket & Payment Mesh)
    3. `src/components/projects/details/Project3Detail.tsx` (Kestrel: Resilient Stream Processing Broker)
    4. `src/components/projects/details/Project4Detail.tsx` (CloudVault: S3 Cloud-Native Ingestion Pipeline)
    5. `src/components/projects/details/Project5Detail.tsx` (DevNexus: Distributed Telemetry & Observability Mesh)
    6. `src/components/projects/details/Project6Detail.tsx` (AlgoArena: Real-Time Algorithmic Judge System)
  - Detail components cover: Architecture diagram/breakdown, database schema overview, key challenges, performance benchmarks, and repository links.
  - Accessible modal dialog component `src/components/projects/ProjectDetailModal.tsx` with ESC key listener, background scroll lock, and responsive mobile styling.

#### Acceptance Criteria
- Exactly 6 project cards rendered cleanly in a uniform grid.
- Each card contains thumbnail, title, summary, tech stack tags, and two functional buttons (Live Demo & GitHub).
- Each project links to its dedicated TSX view for exhaustive exploration.

---

### Phase 5: Technical Skills Matrix (5-Tier Categorized Rows)

#### Objectives & Scope
Provide a comprehensive, visually engaging technical skills section organized into 5 clearly demarcated horizontal categories.

#### Key Tasks
- [ ] **Categorization Structure (5 Dedicated Rows):**
  1. **Row 1 - Programming Languages:**
     - e.g., Java, TypeScript, JavaScript, Python, C++, SQL.
  2. **Row 2 - Frameworks & Core Skills:**
     - e.g., Spring Boot, Next.js, React, Node.js, Express, RESTful APIs, OOP.
  3. **Row 3 - Databases, Caching & Cloud:**
     - e.g., PostgreSQL, MySQL, Redis, MongoDB, AWS S3, Cloudflare, Supabase.
  4. **Row 4 - DevOps & Monitoring:**
     - e.g., Docker, Kubernetes, CI/CD, GitHub Actions, Prometheus, Grafana, Linux.
  5. **Row 5 - AI & Productivity Tools:**
     - e.g., Cursor, Claude, OpenAI API, Ollama, LangChain, GitHub Copilot.
- [ ] **Card Anatomy for Each Skill:**
  - Individual compact item card containing:
    - Scalable vector icon (SVG) centered at the top.
    - Official skill/technology name centered below.
  - Micro-interactions: Subtle lift (`transform: translateY(-3px)`), gentle border glow, and tooltip on hover.
- [ ] **Responsive Flow:**
  - Flex/Grid wrap configuration ensuring clean alignment on all viewport widths without icon distortion.

#### Acceptance Criteria
- 5 distinct category rows clearly labeled and structured.
- Every skill card displays a crisp icon above its label.
- High visual appeal with consistent padding, typography, and hover feedback.

---

## 4. Implementation Milestones & Task Order

| Milestone | Target Phase | Status | Key Output Files | Verification Method |
| :--- | :--- | :--- | :--- | :--- |
| **M1** | Phase 1 (Hero) | **Completed** | `public/cv.pdf`, `src/app/page.tsx`, `src/app/globals.css` | Verify CV download, `#projects` jump, social icons clickability |
| **M2** | Phase 2 (About) | **Completed** | `src/app/page.tsx`, `src/app/globals.css` | Review HCMUS degree text, 1.5+ yrs bio, 3 award cards layout |
| **M3** | Phase 3 (Experiences) | **Completed** | `src/components/experiences/*`, `src/app/page.tsx`, `src/app/globals.css` | Verify central timeline, alternating cards, detail click handler |
| **M4** | Phase 4 (Projects) | **Completed** | `src/components/projects/*`, 6 detail TSX views | Verify 6-card grid, Live/GitHub buttons, 6 detail pages |
| **M5** | Phase 5 (Skills) | Pending | `src/components/skills/*`, skill icons | Verify 5 categorized rows, icon + label alignment, hover states |

---

## 5. Quality, Accessibility & Verification Standards

- **Semantic HTML & WCAG AA:** All buttons, links, and icons have accessible labels (`aria-label`) and meet standard contrast thresholds.
- **Cross-Browser & Mobile Responsiveness:** Fully tested on mobile (375px), tablet (768px), and desktop (1280px+).
- **TypeScript Strict Safety:** Zero type errors (`npm run build` or `tsc --noEmit`).
- **Asset Integrity:** PDF download link and all internal `#` hash anchors verified and fully functional.
